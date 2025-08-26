import MjpegStreamComponent from "./MjpegStreamComponent.tsx";
import OcrOverlayComponent from "./OcrOverlayComponent.tsx";
import {useRef} from "react";
import {styled} from "@mui/system";
import {column} from "../common/styles/containerStyles.ts";

const CameraContainerComponent = styled("div")(() => ({}));

const StreamOverlay = styled("div")(() => ({
    position: "relative",
    display: "inline-block",
}))

export default function CameraContainer() {
    const imgRef = useRef<HTMLImageElement>(null);

    return (
        <CameraContainerComponent sx={column}>
            <h2>Pi Stream</h2>
            <StreamOverlay>
                <MjpegStreamComponent ref={imgRef}/>
                <OcrOverlayComponent imgRef={imgRef}/>
            </StreamOverlay>
        </CameraContainerComponent>
    );
}