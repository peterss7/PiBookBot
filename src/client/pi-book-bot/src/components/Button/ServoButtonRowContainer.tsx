import Button from "../common/components/Button";
import {useServo} from "../../hooks/useServo";
import type {ServoButtonProps} from "../../types/servoTypes";
import {styled} from "@mui/system";
import {row} from "../common/styles/containerStyles.ts";

const ButtonRow = styled("div")(() => ({}));
const Container = styled("div")(() => ({}));

type ServoButtonRowContainerProps = {
    buttons: ServoButtonProps[];
    servoLabel: string;
};


export default function ServoButtonRowContainer(props: ServoButtonRowContainerProps) {
    const {centerServo, start, stop} = useServo();
    const {servoLabel, buttons} = props;

    return (
        <>
            <Container sx={row}>
                <h3>Servo {servoLabel}</h3>
                <ButtonRow sx={row}>
                    {buttons.map((button) =>
                        button.isCenter ? (
                            <Button
                                key={button.label}
                                label={button.label}
                                onClick={() => centerServo(button.channel)}
                            />
                        ) : (
                            <Button
                                key={button.label}
                                label={button.label}
                                onStart={() => start(button.channel, button.delta)}
                                onStop={stop}
                            />
                        )
                    )}
                </ButtonRow>
            </Container>
        </>
    );
}
