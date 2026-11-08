import type { Frame } from "../types.ts";
export interface PipelineOptions {
    [key: string]: unknown;
    stages: string[];
}
export declare const meta: {
    name: string;
    category: "ui";
    note: string;
    cols: number;
    rows: number;
    fps: number;
    options: {
        stages: string[];
    };
    loop: number;
};
export default function pipeline({ stages }?: Partial<PipelineOptions>): Frame;
