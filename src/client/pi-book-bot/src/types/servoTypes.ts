export type ServoButtonRowProps = {
    negativeLabel: string;        // text on the button
    positiveLabel: string;        // text on the button
};

export type ServoButtonProps = {
    label: string;
    channel: string;
    delta: number;
    isCenter?: boolean;
    onClick?: () => void;
    onStart?: () => void;
    onStop?: () => void;
}