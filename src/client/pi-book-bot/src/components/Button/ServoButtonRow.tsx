import {Button, Row} from "../common/components/commonStyled.tsx";

export default function ServoButtonRow({name, buttons}: ServoButtonRowProps) {

    return (
        <>
            <Row
                width={"25vw"}
                border={"1px solid red"}
                justifyContent={"space-between"}
            >
                <h3>{name}</h3>
                { buttons.map((button: ServoButtonProps) =>(
                    <Button
                        label={button.label}
                    />
                ))}
            </Row>
        </>
    );
}
