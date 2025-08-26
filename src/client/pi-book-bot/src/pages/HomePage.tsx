import {styled} from "@mui/system";
import {column, row} from "../components/common/styles/containerStyles.ts";
import CameraContainer from "../components/Camera/CameraContainer.tsx";
import ServoButtonsComponent from "../components/Button/ServoButtonsComponent.tsx";

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
            <HomeContent sx={column}>
                <ServoButtonsComponent name={"1"} />
            </HomeContent>
            <HomeContent sx={[column, {flexGrow: "2", width: "50%"}]}>
                <CameraContainer />
            </HomeContent>
            <HomeContent sx={column}>
                <h1>3</h1>
            </HomeContent>
        </HomeContainer>
    );
}

