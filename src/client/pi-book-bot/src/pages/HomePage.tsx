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
            <div style={{ position: "relative", display: "inline-block" }}>
                <MjpegStreamComponent ref={imgRef} />
                <OcrOverlayComponent imgRef={imgRef} />
            </div>
        </>
    );
}