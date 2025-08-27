export const tBorder = {
    border: "1px solid yellow",
}

export type ContainerProps = {
    title?: string;
    width?: string;
    height?: string;
    border?: string;
    justifyContent?: string;
    alignItems?: string;
}

export const baseFlex = {
    display: "flex",
    width: "max",
    height: "max",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
}

export const column = {
    ...baseFlex,
    flexDirection: "column",
}

export const row = {
    ...baseFlex,
    flexDirection: "row",
}

export const centered = {
    justifyContent: "center",
    alignItems: "center",
}

export const lightText = {
    color: "white",
}