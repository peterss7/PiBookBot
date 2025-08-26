import {column} from "../common/styles/containerStyles.ts";
import ServoButtonsComponent from "./ServoButtonsComponent.tsx";
import {styled} from "@mui/system";


const ButtonColumn = styled("div")(() => ({
}));

type ArmButtonsProps = {
    name: string;
}

export default function ArmButtons(props: ArmButtonsProps) {

    const {name} = props;

    return (
        <>
            <ButtonColumn sx={column}>
                <h2>{name}</h2>
                <ServoButtonsComponent name={"Servo 1"} />
                <ServoButtonsComponent name={"Servo 2"} />
                <ServoButtonsComponent name={"Servo 3"} />
                <ServoButtonsComponent name={"Servo 4"} />
            </ButtonColumn>
        </>
    )
}