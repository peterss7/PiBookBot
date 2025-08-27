import {styled} from "@mui/system";
import {column, row} from "../components/common/styles/containerStyles.ts";
import CameraContainer from "../components/Camera/CameraContainer.tsx";
import ServoButtonRowContainer from "../components/Button/ServoButtonRowContainer.tsx";
import type {ServoButtonProps} from "../types/servoTypes.ts";

const HomeContainer = styled("div")(() => ({
    width: "99.5vw",
    height: "99vh",
    backgroundColor: "black",
    overflow: "hidden",
    border: "2px solid yellow",
}));

const HomeContent = styled("div")(() => ({
    border: "1px solid red",
}))

const leftArmServo1: ServoButtonProps[] = [
    {label: "L1", delta: -5, channel: "1"},
    {label: "C1", channel: "1", delta: 0},
    {label: "R1", delta: 5, channel: "1"},
];

const rightArmServo2: ServoButtonProps[] = [
    {label: "L2", delta: -5, channel: "2"},
    {label: "C2", channel: "2", delta: 0},
    {label: "R2", delta: 5, channel: "2"},
];

export default function HomePage() {
    return (
        <HomeContainer sx={row}>
            <HomeContent sx={column}>
                <ServoButtonRowContainer servoLabel={"1"} buttons={leftArmServo1}/>
                <ServoButtonRowContainer servoLabel={"2"} buttons={rightArmServo2}/>
            </HomeContent>
            <HomeContent sx={[column, {flexGrow: "2", width: "50%"}]}>
                <CameraContainer/>
            </HomeContent>
            <HomeContent sx={column}>
                <h2>Right Arm</h2>
            </HomeContent>
        </HomeContainer>
    );
}

