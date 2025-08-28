import {styled} from "@mui/system";
import {column, row} from "../components/common/styles/containerStyles.ts";
import CameraContainer from "../components/Camera/CameraContainer.tsx";
import TServoButtonRow, {type ServoButtonProps} from "../Arm/Components/TServoButtonRow.tsx";

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

const Column = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
}))

const PAN_BUTTONS: ServoButtonProps[] = [
    {label: "Left", direction: 1},
    {label: "Right", direction: -1},
    {label: "Center", direction: 0},
]

const TILT_BUTTONS: ServoButtonProps[] = [
    {label: "Up", direction: -1},
    {label: "Down", direction: 1},
    {label: "Center", direction: 0},
]


const LEFT_ARM_BUTTONS_BASE: ServoButtonProps[] = [
    {label: "Up", direction: 1},
    {label: "Down", direction: -1},
    {label: "Center", direction: 0},
]

const LEFT_ARM_BUTTONS_ELBOW: ServoButtonProps[] = [
    {label: "Up", direction: 1},
    {label: "Down", direction: -1},
    {label: "Center", direction: 0},
]

const LEFT_ARM_BUTTONS_WRIST: ServoButtonProps[] = [
    {label: "Right", direction: 1},
    {label: "Left", direction: -1},
    {label: "Center", direction: 0},
]

const LEFT_ARM_BUTTONS_GRIPPER: ServoButtonProps[] = [
    {label: "Close", direction: 1},
    {label: "Open", direction: -1},
    {label: "Center", direction: 0},
]

const RIGHT_ARM_BUTTONS_BASE: ServoButtonProps[] = [
    {label: "Up", direction: 1},
    {label: "Down", direction: -1},
    {label: "Center", direction: 0},
]

const RIGHT_ARM_BUTTONS_WRIST: ServoButtonProps[] = [
    {label: "Right", direction: 1},
    {label: "Left", direction: -1},
    {label: "Center", direction: 0},
]

const RIGHT_ARM_BUTTONS_: ServoButtonProps[] = [
    {label: "Right", direction: 1},
    {label: "Left", direction: -1},
    {label: "Center", direction: 0},
]


export default function HomePage() {
    return (
        <HomeContainer sx={row}>
            <Column>
                <h3>Pan/Tilt</h3>
                <TServoButtonRow
                    buttons={PAN_BUTTONS}
                    motorName={"PAN"}
                    channel={"6"}
                />
                <TServoButtonRow
                    buttons={TILT_BUTTONS}
                    motorName={"Tilt"}
                    channel={"1"}
                />
                <h3>Left Arm</h3>
                <TServoButtonRow
                    buttons={LEFT_ARM_BUTTONS_BASE}
                    motorName={"Base"}
                    channel={"2"}
                />
                <TServoButtonRow
                    buttons={LEFT_ARM_BUTTONS_ELBOW}
                    motorName={"Elbow"}
                    channel={"3"}
                />
                <TServoButtonRow
                    buttons={LEFT_ARM_BUTTONS_WRIST}
                    motorName={"Wrist"}
                    channel={"4"}
                />
                <TServoButtonRow
                    buttons={LEFT_ARM_BUTTONS_GRIPPER}
                    motorName={"Wrist"}
                    channel={"5"}
                />
            </Column>
            <HomeContent sx={[column, {flexGrow: "2", width: "50%"}]}>
                <CameraContainer/>
            </HomeContent>
            <Column>
                <h3>Right Arm</h3>
                <TServoButtonRow
                    buttons={RIGHT_ARM_BUTTONS_BASE}
                    motorName={"Base"}
                    channel={"0"}
                />
                <TServoButtonRow
                    buttons={RIGHT_ARM_BUTTONS_WRIST}
                    motorName={"Wrist"}
                    channel={"7"}
                />
                <TServoButtonRow
                    buttons={RIGHT_ARM_BUTTONS_}
                    motorName={"X"}
                    channel={"8"}
                />

            </Column>
        </HomeContainer>
    );
}