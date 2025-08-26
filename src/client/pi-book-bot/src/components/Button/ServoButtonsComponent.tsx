import StyledCommonContainers from "../common/styles/StyledCommonContainers.tsx";
import Button from "../common/components/Button.tsx";

type ServoButtonsComponentProps = {
    name: string;
}

export default function ServoButtonsComponent(props: ServoButtonsComponentProps) {
    const { Column, Row } = StyledCommonContainers();
    const { name } = props;

    return (
        <>
            <Column>
                <h1>{name}</h1>
                    <Row>
                        <Button label={"negative"} />
                        <Button label={"center"} />
                        <Button label={"positive"} />
                    </Row>
            </Column>
        </>
    )
}