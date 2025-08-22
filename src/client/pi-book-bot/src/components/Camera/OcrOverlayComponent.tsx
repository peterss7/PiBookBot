import { useEffect, useRef } from "react";
import { OCR_URL } from "../../constats/camera";

type Box = { text: string; conf: number; x: number; y: number; w: number; h: number; };
type OcrState = { boxes: Box[]; frame_w: number; frame_h: number; ts: number; };

type OcrOverlayComponentProps = {
    imgRef: React.RefObject<HTMLImageElement | null>;
}

export default function OcrOverlayComponent(props: OcrOverlayComponentProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { imgRef } = props;

    useEffect(() => {
        const syncSize = () => {
            const img = imgRef.current, c = canvasRef.current;
            if (!img || !c) return;
            const rect = img.getBoundingClientRect();
            const w = Math.max(1, Math.round(rect.width));
            const h = Math.max(1, Math.round(rect.height));
            if (c.width !== w || c.height !== h) {
                c.width = w;
                c.height = h;
            }
        };

        // initial + on load + on resize
        syncSize();
        const img = imgRef.current;
        img?.addEventListener("load", syncSize);
        const onResize = () => syncSize();
        window.addEventListener("resize", onResize);

        return () => {
            img?.removeEventListener("load", syncSize);
            window.removeEventListener("resize", onResize);
        };
    }, [imgRef]);

    // poll every 500 ms
    useEffect(() => {
        let timer: number | null = null;
        let cancelled = false;

        const draw = async () => {
            try {
                const res = await fetch(OCR_URL, { cache: "no-store" });
                if (cancelled) return;
                const ocr: OcrState = await res.json();

                const img = imgRef.current, c = canvasRef.current;
                if (!img || !c) return;

                // ensure we have size
                const rect = img.getBoundingClientRect();
                if (c.width !== Math.round(rect.width) || c.height !== Math.round(rect.height)) {
                    c.width = Math.max(1, Math.round(rect.width));
                    c.height = Math.max(1, Math.round(rect.height));
                }

                const ctx = c.getContext("2d"); if (!ctx) return;
                ctx.clearRect(0, 0, c.width, c.height);

                // TEMP: prove overlay is visible — draw a corner crosshair
                ctx.strokeStyle = "magenta";
                ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(30, 0); ctx.moveTo(0, 0); ctx.lineTo(0, 30); ctx.stroke();

                if (!ocr.frame_w || !ocr.frame_h) return;

                const sx = c.width / ocr.frame_w;
                const sy = c.height / ocr.frame_h;

                ctx.lineWidth = 2;
                ctx.font = "12px sans-serif";
                for (const b of ocr.boxes) {
                    const x = b.x * sx, y = b.y * sy, w = b.w * sx, h = b.h * sy;
                    ctx.strokeStyle = "red";
                    ctx.strokeRect(x, y, w, h);
                    const label = `${b.text} (${b.conf})`;
                    const mw = ctx.measureText(label).width;
                    ctx.fillStyle = "rgba(0,0,0,0.6)";
                    ctx.fillRect(x, y - 14, mw + 6, 14);
                    ctx.fillStyle = "white";
                    ctx.fillText(label, x + 3, y - 3);
                }
            } catch { }
        };

        draw();
        timer = window.setInterval(draw, 500);
        return () => { cancelled = true; if (timer) clearInterval(timer); };
    }, [OCR_URL, imgRef]);

    return (
        <>

        </>
    )
}