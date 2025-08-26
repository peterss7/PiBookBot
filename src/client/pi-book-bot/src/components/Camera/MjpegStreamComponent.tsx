import React, {forwardRef} from "react";
import {V_STREAM_URL} from "../../constants/camera";

type MjpegStreamComponentProps = {
    className?: string;
}

const MjpegStreamComponent = forwardRef<HTMLImageElement, MjpegStreamComponentProps>
((props: MjpegStreamComponentProps, ref) => {
    const {className} = props;

    return (
        <>
            <img
                ref={ref}
                src={V_STREAM_URL}
                alt="Pi camera"
                className={className}
                style={{width: "1000px", height: "auto"}}
            />
        </>
    );
});

export default React.memo(MjpegStreamComponent);