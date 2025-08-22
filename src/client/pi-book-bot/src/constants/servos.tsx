import {HOSTNAME} from "./url.tsx";

export const SERVO_LIMITS = {
    PAN_TILT : {
        PAN: {
            MOTOR: 0,
            MAX: 180,
            MIN: 0,
        },
        TILT: {
            MOTOR: 1,
            MAX: 180,
            MIN: 0,
        },
    }
};

export const SERVO_PORT = "5000";
export const SERVO_URL = `${HOSTNAME}:${SERVO_PORT}`;
export const SERVO_NUDGE_URL = `${SERVO_URL}/servo/nudge`;
export const SERVO_CENTER_URL = `${SERVO_URL}/servo/center`;