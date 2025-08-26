

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