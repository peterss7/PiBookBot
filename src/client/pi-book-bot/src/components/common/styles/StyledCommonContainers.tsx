import {styled} from "@mui/system";

const Column = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
}))

const Row = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
}))

export default function StyledCommonContainers() {

    return { Column, Row }
}