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

const PAN_BUTTONS: ServoButtonProps[] = [
    {label: "Positive", direction: 1},
    {label: "Negative", direction: -1},
    {label: "Center", direction: 0},
]

export default function HomePage() {
    return (
        <HomeContainer sx={row}>
            <TServoButtonRow
                buttons={PAN_BUTTONS}
                motorName={"PAN"}
                channel={"1"}
            />
            <HomeContent sx={[column, {flexGrow: "2", width: "50%"}]}>
                <CameraContainer/>
            </HomeContent>
            <HomeContent sx={column}>
                <h1>hi</h1>
            </HomeContent>
        </HomeContainer>
    );
}