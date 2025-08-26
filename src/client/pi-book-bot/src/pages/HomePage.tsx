import {styled} from "@mui/system";
import {column, row} from "../components/common/styles/containerStyles.ts";
import CameraContainer from "../components/Camera/CameraContainer.tsx";
import ServoButtonsComponent from "../components/Button/ServoButtonsComponent.tsx";
import ArmButtons from "../components/Button/ArmButtons.tsx";
import PanTiltButtons from "../components/Button/PanTiltButtons.tsx";

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

export default function HomePage() {
    return (
        <HomeContainer sx={row}>
            <HomeContent>
                <PanTiltButtons />
                <ArmButtons name={"Left Arm"} />
            </HomeContent>
            <HomeContent sx={[column, {flexGrow: "2", width: "50%"}]}>
                <CameraContainer />
            </HomeContent>
            <HomeContent sx={column}>
                <h2>Right Arm</h2>
                <ServoButtonsComponent name={"Servo 1"} />
                <ServoButtonsComponent name={"Servo 2"} />
                <ServoButtonsComponent name={"Servo 3"} />
                <ServoButtonsComponent name={"Servo 4"} />
            </HomeContent>
        </HomeContainer>
    );
}

