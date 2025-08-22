import { useRef } from "react";
import OcrOverlayComponent from "../components/Camera/OcrOverlayComponent";
import MjpegStreamComponent from "../components/Camera/MjpegStreamComponent";

type HomePageProps = {

}

export default function HomePage(props: HomePageProps) {
    const { } = props;

    const imgRef = useRef<HTMLImageElement>(null);

    return (
        <>
            <div
                style={{
                    position: "relative",
                    display: "inline-block",   // shrink-wrap to the image
                    lineHeight: 0              // avoid extra gaps
                }}
            >
                <MjpegStreamComponent />
                <OcrOverlayComponent imgRef={imgRef} />
            </div>
        </>
    );
}