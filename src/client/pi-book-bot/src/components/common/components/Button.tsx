import {styled} from "@mui/system";

const StyledButton = styled("button")({
    border: "2px solid yellow",
    width: "25%",
    height: "auto",
})

export default function Button(props: ServoButtonProps) {
    const { label, onStart, onStop, onClick } = props;
    return (
        <>
            <StyledButton
                onPointerDown={onStart}
                onPointerUp={onStop}
                onPointerLeave={onStop}
                onPointerCancel={onStop}
                onClick={onClick}
            >
                {label}
            </StyledButton>
        </>
    )
}