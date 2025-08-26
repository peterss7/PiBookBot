import {HOSTNAME} from "./url.tsx";

export const OCR_PORT: string = "5001";
export const OCR_URL: string = `${HOSTNAME}:${OCR_PORT}/ocr/latest`;

export const V_STREAM_PORT: string = "8080";
export const V_STREAM_URL: string = `${HOSTNAME}:${V_STREAM_PORT}/?action=stream`;