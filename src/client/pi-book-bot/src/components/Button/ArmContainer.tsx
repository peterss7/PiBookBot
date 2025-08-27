import {Column} from "../common/components/commonStyled.tsx";
import type {ServoButtonRowProps} from "../../types/servoTypes.ts";
import ServoButtonRow from "./ServoButtonRow.tsx";

type ArmContainerProps = {
    name: string;
    servoRows: ServoButtonRowProps[];
}

export default function ArmContainer(props: ArmContainerProps) {

    const {name, servoRows} = props;

    return (
        <>
            <Column>
                <h2>Motor Section: {name}</h2>
                {servoRows.map((row: ServoButtonRowProps) => (
                    <ServoButtonRow name={row.name} buttons={row.buttons}  />
                ))}
            </Column>
        </>
    )
}