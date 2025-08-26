import Button from "../common/components/Button.tsx";
import {row} from "../common/styles/containerStyles.ts";
import {styled} from "@mui/system";

type ServoButtonsComponentProps = {
    name: string;
}


const Container = styled("div")(() => ({
    width: "100%",
}));

const ButtonRow = styled("div")(() => ({
}))

export default function ServoButtonsComponent(props: ServoButtonsComponentProps) {
    const { name } = props;

    return (
        <>
            <Container>
                <h1>{name}</h1>
                <ButtonRow sx={[row, {justifyContent: "space-around"}] }>
                    <Button label={"negative"}/>
                    <Button label={"center"}/>
                    <Button label={"positive"}/>
                </ButtonRow>
            </Container>
        </>
    );
}