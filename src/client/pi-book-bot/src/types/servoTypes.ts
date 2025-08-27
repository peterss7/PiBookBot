import type {ButtonProps} from "./commonTypes.ts";

export type ServoButtonProps = {
    channel: string;
    delta?: number;
    isCenter?: boolean;
} & ButtonProps;

export type ServoButtonRowProps = {
    name:  string;
    buttons: ServoButtonProps[];
}
