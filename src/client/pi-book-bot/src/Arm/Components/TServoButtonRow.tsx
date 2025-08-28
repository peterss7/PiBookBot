import {useServo} from "../hooks/useServo.tsx";
import {styled} from "@mui/system";

const Row = styled("div")(()=> ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "100%",
}))

const Button = styled("button")(()=> ({
}))

export type ServoButtonDirection = -1 | 0 | 1;

export type ServoButtonProps = {
    label: string;
    direction: ServoButtonDirection;
}

export type ServoButtonRowProps = {
    buttons: ServoButtonProps[];
    channel: string;
    motorName: string;
}

const SERVO_DELTA = 5;

export default function TServoButtonRow(props: ServoButtonRowProps) {
    const {buttons, motorName, channel} = props;
    const {centerServo, start, stop} = useServo();

    function getOnStart(direction: ServoButtonDirection) {
        if (direction === 0) {
            return centerServo(channel);
        } else {
            return start(channel, SERVO_DELTA * direction);
        }
    }

    return (
        <>
            <Row>
                <h3>{motorName}</h3>
                {buttons.map(button => (
                    <Button
                        onClick={() => getOnStart(button.direction)}
                        onPointerDown={() => getOnStart(button.direction)}
                        onPointerUp={stop}
                        onPointerLeave={stop}
                        onPointerCancel={stop}
                        key={button.label}
                    >
                        {button.label}
                    </Button>
                ))}
            </Row>
        </>
    )
}