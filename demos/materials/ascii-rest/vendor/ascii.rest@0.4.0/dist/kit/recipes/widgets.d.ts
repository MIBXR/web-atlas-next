import { type FontName } from "../../banner.ts";
import { Surface, type Color, type KitPiece, type Region } from "../core.ts";
import { type BoxStyle, type Point } from "../draw.ts";
import { type Anchor } from "../compose.ts";
import { type Speed } from "./checks.ts";
import { type ColorLike, type PaletteLike } from "./palettes.ts";
import { type Thing } from "./words.ts";
/** Room to place things in: the grid a drawing is given, or a region of it, such as the inside rect() returns. */
export type Room = Surface | Region | {
    readonly cols: number;
    readonly rows: number;
    readonly x?: number;
    readonly y?: number;
};
/**
 * The point at an anchor of a room, "center" by default, `margin` cells (0) in from the edges it is against: the
 * middle of the cell in the corner or on the edge, or the room's middle. For a point to draw about, circle(s, ...at(s)),
 * or a label() centred on it; textAt() puts text against an edge instead.
 *
 *   circle(s, ...at(s), 8);                      // a circle in the middle
 *   label(s, ...at(s, "top", { margin: 1 }), "hi");
 */
export declare function at(room: Room, anchor?: Anchor, o?: {
    margin?: number;
}): Point;
/**
 * Text against an anchor of a room, "center" by default: in its top left corner, along its bottom edge, in its middle,
 * `margin` cells (0) in from the edges, wrapped to the room's width. Returns the region it takes, as text() does.
 *
 *   textAt(s, "score 3", "top-right", { margin: 1 });
 *   textAt(s, "press start", "bottom", { color: 1 });
 */
export declare function textAt(s: Surface, str: string | number, anchor?: Anchor, o?: {
    margin?: number;
    color?: Color;
    within?: Region;
}): Region;
/**
 * `count` points evenly round a circle in a room, the first at the top and on clockwise, as a clock's numbers go: point
 * 3 of 12 is where the 3 is. The circle is about `at`, an anchor or a point ("center"), `radius` columns out (by
 * default as big as fits, a cell in from the edges), squashed down the rows so it looks round on tall cells.
 *
 *   ring(s, 12).forEach((p, hour) => label(s, ...p, hour || 12));   // a clock's numbers
 *   for (const p of ring(s, 8, { radius: 10 })) s.set(...p, "*");   // eight stars round a circle
 */
export declare function ring(room: Room, count: number, o?: {
    radius?: number;
    at?: Anchor | Point;
}): Point[];
/** A room with `margin` cells taken off every side, or [rows, columns] off top and bottom and off left and right. */
export declare function inset(room: Room, margin: number | readonly [number, number]): Region;
/**
 * A room cut into parts side by side, left to right: `parts` of them alike, or a list of weights, [1, 2] giving the
 * second twice the first's width; `gap` blank columns between (0). Each is a region to draw in.
 *
 *   const [left, right] = across(s, [1, 2], { gap: 1 });
 *   text(s, left, "menu");
 */
export declare function across(room: Room, parts: number | readonly number[], o?: {
    gap?: number;
}): Region[];
/** A room cut into parts one under another, top to bottom: as across(), in rows. */
export declare function down(room: Room, parts: number | readonly number[], o?: {
    gap?: number;
}): Region[];
/**
 * A room cut into a grid of tiles, `columns` across and `rows` down (as many as `columns` by default), `gap` blank cells
 * between them, [rows, columns] or one number for both (0), in reading order.
 *
 *   tiles(s, { columns: 3, rows: 2, gap: 1 }).forEach((tile, i) => rect(s, tile.x, tile.y, tile.cols, tile.rows, { title: `${i + 1}` }));
 */
export declare function tiles(room: Room, o: {
    columns: number;
    rows?: number;
    gap?: number | readonly [number, number];
}): Region[];
/**
 * A box `cols` by `rows` at an anchor of a room ("center"), `margin` cells (0) in from the edges it is against: where
 * to put a panel in a corner, a button at the bottom.
 *
 *   const badge = slot(s, "bottom-right", { cols: 12, rows: 3, margin: 1 });
 *   rect(s, badge.x, badge.y, badge.cols, badge.rows, { style: "rounded" });
 */
export declare function slot(room: Room, anchor: Anchor, o: {
    cols: number;
    rows: number;
    margin?: number;
}): Region;
export interface ClockFaceOptions {
    /** The time the hour and minute hands show, as "h:mm": "10:10", a watchmaker's favourite. The second hand goes round once a minute of play. */
    time?: string;
    /** true: the viewer's real time instead, from their clock (the piece is then a clock: svg() can't loop it): false. */
    real?: boolean;
    /** "small" (25 by 13, the quarters numbered), "medium" (41 by 21, the default) or "large" (61 by 29). */
    size?: "small" | "medium" | "large";
    /** Which hours are numbered: "all" (the default, but "quarters" when small), "quarters" (12, 3, 6, 9) or "none". */
    numbers?: "all" | "quarters" | "none";
    /** A rounded frame round it, with `title` on its top edge: true. */
    frame?: boolean;
    /** Words on the frame's top edge: none. */
    title?: string;
    /** The second hand's colour, as #rrggbb, { light, dark } or a palette's name: red. */
    color?: ColorLike;
    name?: string;
    note?: string;
}
/**
 * A clock face: a round dial, its hours numbered, three hands and a red second hand going round once a minute. With no
 * options it shows ten past ten, and loops on the minute; `real: true` shows the time where it is seen.
 *
 *   clockFace()
 *   clockFace({ size: "small", time: "4:20", title: "tea" })
 */
export declare function clockFace(o?: ClockFaceOptions): KitPiece;
export interface ProgressBarOptions {
    /**
     * How far along: a share from 0 to 1 (or from `min` to `max`), or a percentage, "64%", for a still bar at that; or
     * a function that reads it, called every frame, for a live one. None by default: it fills over `seconds`, holds, and
     * fills again.
     */
    value?: number | `${number}%` | (() => number);
    /** What an empty bar and a full one stand for: 0 and 1. */
    min?: number;
    max?: number;
    /** Words before the bar: none. */
    label?: string;
    /** The bar's length in columns: 30. */
    width?: number;
    /** "blocks" (the default): a smooth bar of █ in eighths over ░; "ascii": [####----]; "dots": ●●●○○○. */
    style?: "blocks" | "ascii" | "dots";
    /** The percentage after the bar: true. */
    percent?: boolean;
    /** Seconds it takes to fill when it has no value: 4. It then stays full until its loop, the fill and a second, comes round on a whole number of seconds that combines with other widgets'. */
    seconds?: number;
    /** The bar's colour, as #rrggbb, { light, dark } or a palette's name: blue, and green once full. */
    color?: ColorLike;
    name?: string;
    note?: string;
}
/**
 * A progress bar: a label, a bar and how far along, in one row. With a `value` it is a still at that; without, it fills
 * smoothly over 4 seconds, turns green, and fills again.
 *
 *   progressBar({ label: "downloading" })
 *   progressBar({ value: 0.42, style: "ascii" })
 */
export declare function progressBar(o?: ProgressBarOptions): KitPiece;
/** The spinners by name, each its frames in order: the ones terminals show while they wait. */
export declare const spinners: {
    readonly dots: "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏";
    readonly line: "-\\|/";
    readonly arc: "◜◠◝◞◡◟";
    readonly circle: "◐◓◑◒";
    readonly bounce: "⠁⠂⠄⡀⢀⠠⠐⠈";
    readonly blocks: "▖▘▝▗";
    readonly grow: "▁▂▃▄▅▆▇█▇▆▅▄▃▂";
    readonly arrows: "←↖↑↗→↘↓↙";
    readonly pulse: "·•●•";
};
/** A spinner's name, a key of `spinners`. */
export type SpinnerName = keyof typeof spinners;
export interface SpinnerOptions {
    /** Words after it: none. */
    label?: string;
    /** How fast: "slow", "normal" (about a frame every tenth of a second, its turn a whole loop that combines) or "fast", or times as fast. */
    speed?: Speed;
    /** Seconds for one turn through its frames, over speed. */
    period?: number;
    /** Its colour, as #rrggbb, { light, dark } or a palette's name: blue. */
    color?: ColorLike;
    name?: string;
    note?: string;
}
/**
 * A spinner, the kind a terminal shows while it works: "dots" (the default), "line", "arc", "circle", "bounce",
 * "blocks", "grow", "arrows" or "pulse", with words after it if you like.
 *
 *   spinner("dots", { label: "installing" })
 */
export declare function spinner(kind?: SpinnerName, o?: SpinnerOptions): KitPiece;
export interface GaugeOptions {
    /**
     * The reading, from `min` to `max`, or a percentage of the way, "64%": a still at that. A function that reads it is
     * called every frame, for a live reading such as the real CPU. None by default: a reading wandering up and down,
     * looping every 12 seconds.
     */
    value?: number | `${number}%` | (() => number);
    /** Its name, on the frame's top edge (above the dial when it has no frame): none. */
    label?: string;
    /** A rounded frame round it: true. false for none, as when a grid() draws its own border round each part. */
    frame?: boolean;
    /** The reading's lowest and highest: 0 and 100. */
    min?: number;
    max?: number;
    /** After the number: "%". */
    unit?: string;
    /** The dial's colour, as #rrggbb, { light, dark } or a palette's name: by the reading, green, then yellow past 60%, then red past 85%. */
    color?: ColorLike;
    name?: string;
    note?: string;
}
/**
 * A gauge: a dial three quarters round, filled to its reading, the number in its middle, in a rounded frame with its
 * label. Green, yellow and red by how high the reading is.
 *
 *   gauge({ label: "cpu" })
 *   gauge({ value: 72, label: "disk" })
 */
export declare function gauge(o?: GaugeOptions): KitPiece;
export interface SparklineOptions {
    /** Words before it: none. */
    label?: string;
    /** Its length in columns: 32. */
    width?: number;
    /** Its height in rows: 3. */
    height?: number;
    /** Shades the area under the line: true. */
    fill?: boolean;
    /** Its colour, as #rrggbb, { light, dark } or a palette's name: blue. */
    color?: ColorLike;
    name?: string;
    note?: string;
}
/**
 * A sparkline: a small, smooth line chart in braille, its latest number after it. Given numbers, it draws itself in
 * from the left, holds, and draws again; given none, it is a reading wandering and scrolling left, looping every 12
 * seconds. Given a function that returns numbers, it reads them every frame and draws the latest, for live data: the
 * piece is then a clock (svg() can't loop it).
 *
 *   sparkline([3, 5, 2, 8, 6, 9, 4, 7], { label: "visits" })
 *   sparkline({ label: "net" })                    // a wandering reading
 *   sparkline(() => history, { label: "cpu" })     // live: history is your own list, kept up to date
 */
export declare function sparkline(data?: readonly number[] | (() => readonly number[]) | SparklineOptions, o?: SparklineOptions): KitPiece;
export interface BarChartOptions {
    /** Bars lying along rows, their names on the left: false, standing up, their names under them. */
    horizontal?: boolean;
    /** The longest bar's length: 10 rows standing up, 30 columns lying down. */
    size?: number;
    /** The value a full bar stands for: the largest value. */
    max?: number;
    /** Each bar's value at its end: true. */
    values?: boolean;
    /** One colour for every bar, as #rrggbb, { light, dark } or a palette's name: by default each bar its own. */
    color?: ColorLike;
    /** Seconds the bars take to grow in, one just after another: 0.8. 0 draws them grown, a still. */
    seconds?: number;
    /** Seconds they stay before growing again: 3, or a little more, so the loop is one other widgets share. */
    hold?: number;
    name?: string;
    note?: string;
}
/**
 * A bar chart: a bar for each value, each in its own colour, growing in one after another with a little overshoot,
 * holding, and growing again. Give it names and values, { mon: 3, tue: 5 }, or a list of values, numbered.
 *
 *   barChart({ mon: 3, tue: 5, wed: 4, thu: 8, fri: 6 })
 *   barChart({ rust: 42, go: 31, zig: 12 }, { horizontal: true })
 */
export declare function barChart(data: Readonly<Record<string, number>> | readonly number[], o?: BarChartOptions): KitPiece;
export interface PanelOptions {
    /** Words on its top edge: none. */
    title?: string;
    /** Its lines: "rounded" (the default), "single", "double", "heavy" or "ascii". */
    style?: BoxStyle;
    /** Its size, border included: the thing's own and the border. Bigger, the thing sits in its middle. */
    cols?: number;
    rows?: number;
    /** Its lines' colour, as #rrggbb, { light, dark } or a palette's name: the ink. */
    color?: ColorLike;
    name?: string;
    note?: string;
}
/**
 * A panel: a box with a title round anything, a piece, text, a widget or a 3D shape, or round nothing, a size you
 * give. compose's border() with a size of its own.
 *
 *   panel(spinner("dots", { label: "building" }), { title: "ci", cols: 30, rows: 5 })
 *   panel("hello there", { title: "note", style: "double" })
 */
export declare function panel(content?: Thing, o?: PanelOptions): KitPiece;
export interface CardOptions {
    /** Its heading, in the accent colour: none. */
    title?: string;
    /** Its words, wrapped to its width: none. */
    text?: string;
    /** A line at the bottom, muted and on the right: none. */
    footer?: string;
    /** Its width in columns, border included: 36. */
    width?: number;
    /** Its lines: "rounded" (the default), "single", "double", "heavy" or "ascii". */
    style?: BoxStyle;
    /** A box round it: true. false for none, its words alone, as when a grid() draws its own border round each part. */
    frame?: boolean;
    /** The heading's colour, as #rrggbb, { light, dark } or a palette's name: blue. */
    color?: ColorLike;
    name?: string;
    note?: string;
}
/**
 * A card: a heading, a line under it, words wrapped to its width and a quiet footer, in a box. A still: give it to a
 * motion, floating(card({ ... })), to set it moving.
 *
 *   card({ title: "ascii.rest", text: "Animated ascii art for the web, in one line.", footer: "npm i ascii.rest" })
 */
export declare function card(o: CardOptions): KitPiece;
export interface TypewriterOptions {
    /** How fast it types: "slow", "normal" (14 characters a second, a quick typist) or "fast", or times as fast. */
    speed?: Speed;
    /** The width it wraps to, in columns: 40, or the text's own when narrower. */
    width?: number;
    /** A cursor at the next character, blinking once it is all typed: true. */
    cursor?: boolean;
    /** Seconds it stays typed before typing again: 3, or a little more, so its loop is one other widgets share. "forever" types it once and stays. */
    hold?: number | "forever";
    /** Its colour, as #rrggbb, { light, dark } or a palette's name: the page's ink. */
    color?: ColorLike;
    name?: string;
    note?: string;
}
/**
 * Words typed out a character at a time behind a cursor, wrapped to a width, held, and typed again: fx's typeIn() at a
 * typist's pace.
 *
 *   typewriter("Hello. This sentence types itself out, as if someone were at the keys.")
 */
export declare function typewriter(words: string, o?: TypewriterOptions): KitPiece;
export interface MarqueeOptions {
    /** Its width in columns: 40. */
    width?: number;
    /** How fast it scrolls: "slow", "normal" (about 10 columns a second, its crossing a loop other widgets share) or "fast", or times as fast. */
    speed?: Speed;
    /** Which way it scrolls: "left" (the default) or "right". */
    to?: "left" | "right";
    /** In big block letters, a banner(): false. */
    big?: boolean;
    /** Its colour, as #rrggbb, { light, dark } or a palette's name: the page's ink. */
    color?: ColorLike;
    name?: string;
    note?: string;
}
/**
 * Words scrolling across, off one edge and in at the other, as a ticker or a shop sign does: drifting() of text. With
 * `big`, in block letters.
 *
 *   marquee("breaking: ascii is back")
 *   marquee("sale", { big: true, color: "#f85149" })
 */
export declare function marquee(words: string, o?: MarqueeOptions): KitPiece;
export interface CountdownOptions {
    /** The number it counts down from: 10. */
    from?: number;
    /** The last number it shows: 1. */
    to?: number;
    /** Words it shows after, for 2 seconds: "go!". false for none. */
    then?: string | false;
    /** Seconds each number shows: 1. */
    seconds?: number;
    /** banner()'s font: "block". */
    font?: FontName;
    /** The numbers' colour as #rrggbb, a fade along them as a list, or a palette's name for its fade on each page: the page's ink. */
    color?: PaletteLike;
    /** How one number turns into the next: "cut" (the default), "fade", "dissolve" or "wipe". */
    transition?: "cut" | "fade" | "dissolve" | "wipe";
    name?: string;
    note?: string;
}
/**
 * A countdown in big numbers, a second each, then words, and round again: banners in a sequence().
 *
 *   countdown({ from: 5, then: "liftoff" })
 */
export declare function countdown(o?: CountdownOptions): KitPiece;
