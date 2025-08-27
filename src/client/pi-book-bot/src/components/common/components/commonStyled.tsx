import type {PropsWithChildren} from "react";
import {baseFlex, column, type ContainerProps, lightText, row} from "../styles/containerStyles.ts";
import {styled} from "@mui/system";
import type {ButtonProps} from "../../../types/servoTypes.ts";



const StyledContainer = styled("div")(() => ({}));
const StyledButton = styled("button")(() => ({}))

export function Container(props: PropsWithChildren<ContainerProps>) {
    const {children} = props;

    return (
        <StyledContainer sx={baseFlex}>
            {children}
        </StyledContainer>
    );
}

export function Row(props: PropsWithChildren<ContainerProps>) {
    const {
        children,
        width,
        height,
        border,
        justifyContent,
        alignItems,
    } = props;

    return (
        <>
            <StyledContainer
                sx={[row, {
                    width: {width},
                    height: {height},
                    border: {border},
                    justifyContent: {justifyContent},
                    alignItems: {alignItems}
                }]}>
                {children}
            </StyledContainer>
        </>
    );
}

export function Column(props: PropsWithChildren<ContainerProps>) {
    const {
        children,
        width,
        height,
        border,
        justifyContent,
        alignItems,
    } = props;

    return (
        <>
            <StyledContainer
                sx={[column, {
                    width: {width},
                    height: {height},
                    border: {border},
                    justifyContent: {justifyContent},
                    alignItems: {alignItems}
                }]}>
                {children}
            </StyledContainer>
        </>
    );
}

export function Button(props: PropsWithChildren<ButtonProps>) {
    const {onStart, onStop, onClick, label} = props;
    return (
        <>
            <StyledButton
                sx={lightText}
                onPointerDown={onStart}
                onPointerUp={onStop}
                onPointerLeave={onStop}
                onPointerCancel={onStop}
                onClick={onClick}>
                {label}
            </StyledButton>
        </>
    );
}

