import {styled} from "@mui/system";
import {column, row} from "../components/common/styles/containerStyles.ts";
import CameraContainer from "../components/Camera/CameraContainer.tsx";
import ArmContainer from "../components/Button/ArmContainer.tsx";
import type {ServoButtonProps, ServoButtonRowProps} from "../types/servoTypes.ts";

const HomeContainer = styled("div")(() => ({
    width: "97.75vw",
    height: "99vh",
    backgroundColor: "black",
    overflow: "hidden",
    border: "2px solid yellow",
}));

const HomeContent = styled("div")(() => ({
    border: "1px solid red",
}))

const SERVO_ROW_1: ServoButtonProps[] = [
    {label: "Left", channel: "1", delta: 5},
    {label: "Center", channel: "1", isCenter: true},
    {label: "Right", channel: "1", delta: -5},
]
const SERVO_ROW_2: ServoButtonProps[] = [
    {label: "Left", channel: "2", delta: 5},
    {label: "Center", channel: "2", isCenter: true},
    {label: "Right", channel: "2", delta: -5},
]
const SERVO_ROW_3: ServoButtonProps[] = [
    {label: "Up", channel: "3", delta: 5},
    {label: "Center", channel: "3", isCenter: true},
    {label: "Down", channel: "3", delta: -5},
]

const servoRows: ServoButtonRowProps[] = [
    {name: "Servo 1", buttons: SERVO_ROW_1},
    {name: "Servo 2", buttons: SERVO_ROW_2},
    {name: "Servo 3", buttons: SERVO_ROW_3},
]

export default function HomePage() {
    return (
        <HomeContainer sx={row}>
            <ArmContainer name={"Left Arm"} servoRows={servoRows}/>
            <HomeContent sx={[column, {flexGrow: "2", width: "50%"}]}>
                <CameraContainer/>
            </HomeContent>
            <HomeContent sx={column}>
                <h1>hi</h1>
            </HomeContent>
        </HomeContainer>
    );
}

