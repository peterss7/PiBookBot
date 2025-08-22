import {styled} from "@mui/system";

const StyledButton = styled("button")({
    border: "2px solid yellow",
})

type ButtonProps = {
    onClick?: () => void;
    onStop?: () => void;
    onStart?: () => void;
    label: string;
}

export default function Button(props: ButtonProps) {
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