import ServoButtonsComponent from "./ServoButtonsComponent.tsx";

type PanTiltButtonsProps = {}

export default function PanTiltButtons(props: PanTiltButtonsProps) {

    const {} = props;

    return (
        <>
            <ServoButtonsComponent name={"Pan"} />
            <ServoButtonsComponent name={"Tilt"} />
        </>
    )
}