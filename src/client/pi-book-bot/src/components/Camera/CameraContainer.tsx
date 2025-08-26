import StyledCommonContainers from "../common/styles/StyledCommonContainers.tsx";
import MjpegStreamComponent from "./MjpegStreamComponent.tsx";
import OcrOverlayComponent from "./OcrOverlayComponent.tsx";
import {useRef} from "react";
import {styled} from "@mui/system";

const StreamContainer = styled("div")(() => ({
    position: "relative",
    display: "inline-block",
    marginBottom: "5rem",
}));

export default function CameraContainer() {
    const imgRef = useRef<HTMLImageElement>(null);
    const { Column, Row } = StyledCommonContainers();

    return (
        <>
            <Column>
                <Row>
                    <h2>Pi Stream</h2>
                </Row>
                <StreamContainer>
                    <MjpegStreamComponent ref={imgRef}/>
                    <OcrOverlayComponent imgRef={imgRef}/>
                </StreamContainer>
            </Column>
        </>
    )
}