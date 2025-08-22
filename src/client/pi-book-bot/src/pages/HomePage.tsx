import {styled} from "@mui/system";
import CameraContainer from "../components/Camera/CameraContainer.tsx";
import StyledCommonContainers from "../components/common/styles/StyledCommonContainers.tsx";
import ServoButtonsComponent from "../components/Button/ServoButtonsComponent.tsx";

const HomeContainer = styled("div")(() => ({
    width: "100vw",
    hight: "100vh",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "black",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
}))

export default function HomePage() {
    const {Column} = StyledCommonContainers();

    return (
        <HomeContainer>
            <ServoButtonsComponent name={"Servo 1"}/>
            <CameraContainer/>
            <Column>
                <p>Hi</p>
            </Column>
        </HomeContainer>
    );
}

