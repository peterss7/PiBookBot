import Button from "../common/components/Button.tsx";
import {centered, row} from "../common/styles/containerStyles.ts";
import {styled} from "@mui/system";

type ServoButtonsComponentProps = {
    name: string;
}


const Container = styled("div")(() => ({
    width: "90%",
}));

const ButtonRow = styled("div")(() => ({
    width: "100%",
    height: "auto",
    border: "2px solid yellow",
}));

const MotorLabel = styled("div")(() => ({
    // flexGrow: 1,
}));

export default function ServoButtonsComponent(props: ServoButtonsComponentProps) {
    const {name} = props;

    return (
        <>
            <Container>
                <ButtonRow sx={[row, {justifyContent: "space-around"}]}>
                    <MotorLabel sx={centered}>
                        <p>{name}</p>
                    </MotorLabel>
                    <Button label={"N"}/>
                    <Button label={"C"}/>
                    <Button label={"P"}/>
                </ButtonRow>
            </Container>
        </>
    );
}