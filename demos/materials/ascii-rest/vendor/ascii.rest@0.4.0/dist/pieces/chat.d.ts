import type { Frame } from "../types.ts";
export interface ChatOptions {
    [key: string]: unknown;
    /** The messages in turn, yours first. */
    messages: string[];
}
export declare const meta: {
    name: string;
    category: "ui";
    note: string;
    cols: number;
    rows: number;
    fps: number;
    options: {
        messages: string[];
    };
    loop: number;
};
export default function chat({ messages }?: Partial<ChatOptions>): Frame;
