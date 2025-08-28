import { useRef } from "react";
import {SERVO_CENTER_URL, SERVO_NUDGE_URL} from "../../constants/servoConstants.tsx";

const intervalMs = 75;



export function useServo() {
    const timer = useRef<number | null>(null);

    // --- utility to clamp values server-side
    const tick = async (channel: string, delta: number, min: string = "0", max: string = "180") => {
        const tickUrl = `${SERVO_NUDGE_URL}?channel=${channel}&delta=${delta}&min=${min}&max=${max}`;
        console.log(tickUrl, "Tick URL");
        try {
            await fetch(tickUrl, { method: "POST" });
        } catch (err) {
            console.error("servo tick error:", err);
        }
    };

    const start = (channel: string, delta: number) => {
        if (timer.current != null) return; // already running
        tick(channel, delta); // immediate fire
        timer.current = window.setInterval(() => tick(channel, delta), intervalMs);
    };

    const stop = () => {
        if (timer.current != null) {
            clearInterval(timer.current);
            timer.current = null;
        }
    };

    const centerServo = (channel: string) => {
        const centerUrl = `${SERVO_CENTER_URL}?channel=${channel}`;
        console.log(centerUrl, "center URL:", centerUrl);
        fetch(centerUrl, { method: "POST" });
    };
    //
    // const moveTo = (channel: string, angle: number) => {
    //     const moveUrl = `${url}/servo?channel=${channel}&angle=${angle}`;
    //     fetch(moveUrl, { method: "POST" });
    // };

    return { start, stop, centerServo};
}
