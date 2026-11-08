import type { Color, Region, Surface } from "./core.ts";
/** A point as [x, y]: a column and a row, fractions within the cell. */
export type Point = readonly [number, number];
/** Where each line of text sits across its box: at the box's left, in its middle, or at its right. */
export type Align = "left" | "center" | "right";
/** Where the lines sit down their box: from its top, in its middle, or at its bottom. */
export type VAlign = "top" | "middle" | "bottom";
export interface TextOptions {
    /** Its colour: an index into the piece's colours or #rrggbb. None by default: the piece's ink. */
    color?: Color;
    /**
     * How each line sits across the box: "left" by default, starting at x; "center", in its middle, an odd column over
     * going on the right; "right", ending at the box's right edge. With no `width` the box runs to the end of the row,
     * so text(s, 0, 0, "title", { align: "center" }) is centred in the top row and text(s, 0, 0, "9:41", { align:
     * "right" }) is flush with the right edge. To centre text on a point instead, use label(); to centre a block of
     * ascii art whose lines must stay lined up, stamp() with { align: "center" }.
     */
    align?: Align;
    /**
     * The box's width in columns from x, to align and wrap in: the rest of the row by default, from x to the grid's right
     * edge. A line longer than the box is wrapped, or with `wrap: false` cut to it.
     */
    width?: number;
    /**
     * Wrap at spaces to the box's width, a word longer than a line broken across lines: true when `width` is given,
     * false otherwise (a line is then cut where the row ends). A line that fits is kept as it is, spaces and all; a line
     * too long is rewrapped, its words joined with one space. "\n" always starts a new line.
     */
    wrap?: boolean;
    /**
     * How the lines sit down the box: "top" by default, the first on row y; "middle", in its middle, an odd row over
     * going below; "bottom", the last on its bottom row. With no `height` the box runs to the grid's bottom edge, so
     * text(s, 0, 0, "hi", { align: "center", valign: "middle" }) is in the middle of the grid.
     */
    valign?: VAlign;
    /** The box's height in rows from y: the rest of the grid by default, from y to its bottom edge. Lines past it are left out. */
    height?: number;
    /** Spaces in the text leave what is under them, rather than covering it: false by default. */
    transparent?: boolean;
}
/**
 * Text in a box from x, y, in a colour: a string, or a number as it reads. The box is `width` columns by `height` rows,
 * or by default the rest of the grid from x, y; each line sits across it by `align` and the lines down it by `valign`.
 * Given a `width`, lines wrap to it. "\n" starts a new line. Give a region in place of x and y, such as the inside
 * rect() returns, and the box is the region: text(s, region, str) is text(s, region.x, region.y, str, { width:
 * region.cols, height: region.rows }), so it wraps to the region and `align` and `valign` place it in it.
 *
 * Returns the region its lines take (where they start, how wide and how many), which may reach past the grid's edges,
 * for a frame round it or the next text under it. Throws for a control character such as a tab, or one outside the
 * Basic Multilingual Plane (emoji), which a cell can't hold.
 *
 *   text(s, 2, 1, "hello");                                   // from column 2 of row 1
 *   text(s, 0, 0, "ascii.rest", { align: "center" });         // centred in the top row
 *   const box = text(s, 2, 3, notes, { width: 30, color: 1 }); // wrapped to 30 columns
 *   text(s, 2, box.y + box.rows + 1, "the end");              // and a line under it
 *   text(s, rect(s, 0, 0, 30, 5), "ok", { align: "center", valign: "middle" });   // in the middle of a box
 */
export declare function text(s: Surface, x: number, y: number, str: string | number, o?: TextOptions): Region;
export declare function text(s: Surface, region: Region, str: string | number, o?: TextOptions): Region;
/**
 * Text centred on a point, across and down: a number on a dial, a name by a dot, a tag that follows something round.
 * One character lands in the cell x, y is in, as set() would draw it; a longer line has its middle as near to x as
 * whole cells allow, an even one's extra half on the right. "\n" starts a new line, each centred, and the lines
 * together are centred on y the same way. Returns the region it takes, as text() does. `color` is its colour (none by
 * default: the piece's ink); `transparent` lets spaces show what is under them (false by default). For a block of ascii
 * art, whose lines must stay lined up, use stamp() with { align: "center", valign: "middle" }, which centres the block.
 *
 *   for (let h = 1; h <= 12; h++) label(s, ...around(s, 20.5, 10.5, 15, h / 12), h);   // a dial's numbers
 */
export declare function label(s: Surface, x: number, y: number, str: string | number, o?: {
    color?: Color;
    transparent?: boolean;
}): Region;
export interface LineOptions {
    /**
     * What it is drawn with: "auto" by default, which picks - | / \ and _ by the slope as it goes; or one character as
     * a brush; or "" to clear the cells it crosses.
     */
    char?: string;
    /**
     * Draws it in a box's lines instead, as rect() draws its border: "single" (─ │), "double", "rounded", "heavy" or
     * "ascii" (- | +). Straight across or down it is one of these lines, with corners where a polyline turns and joins
     * where it meets one already drawn; a slanting stretch is drawn as "auto" draws it. Give a char or a style, not both.
     */
    style?: BoxStyle;
    /** Its colour: an index into the piece's colours or #rrggbb. None by default: the piece's ink. */
    color?: Color;
    /**
     * Box-drawing characters join those already under them, their arms merged: ─ over │ is ┼, and a line ending on a box's
     * edge makes ┬ or ├. A loose end is left out where another line joins it, so a box and the lines in a style join in
     * whichever order they are drawn. True by default; false draws over them as they are.
     */
    join?: boolean;
}
/**
 * A straight line from the cell of x0, y0 to the cell of x1, y1, both ends drawn: Bresenham's, so it is one cell
 * thick and has no gaps. With the default "auto" character it picks its own slope characters, | / \ - and runs of _,
 * judged on screen, where a cell is s.aspect (2 by default) times as tall as it is wide. With a `style` it is a box's
 * line, joined to the lines it meets: a divider across a frame.
 *
 *   line(s, 2, 10, 30, 3);                                // auto: ___/ steps up to the right
 *   line(s, 0, 0, 9, 9, { char: "#", color: "#f97316" }); // a brush
 *   line(s, 0, 2, s.cols - 1, 2, { style: "single" });    // ├────┤ across a box drawn first
 */
export declare function line(s: Surface, x0: number, y0: number, x1: number, y1: number, o?: LineOptions): void;
/**
 * Lines through points in turn, each drawn as line() draws; `closed` joins the last back to the first (false by
 * default). In a box style its corners turn with ┐ └ and the rest: a path between boxes, a wire, a pipe.
 *
 *   polyline(s, [[4, 2], [20, 2], [20, 8], [34, 8]], { style: "rounded" });   // ──╮ down, then ╰──
 */
export declare function polyline(s: Surface, points: readonly Point[], o?: LineOptions & {
    closed?: boolean;
}): void;
/**
 * The point `turn` of the way round a circle of radius `r` about cx, cy, as a clock's hand goes: 0 at the top, 0.25 at
 * the right, 0.5 at the bottom, 0.75 at the left, and on round. So h / 12 is the hour h on a dial, and t / 60 goes round
 * once a minute. `r` is in columns (dots or pixels on a canvas), and the rows are scaled so the circle looks round, as
 * circle() draws it. A point that lands exactly between two cells is taken a hair towards the centre, so the cells
 * either side of a dial mirror each other. Give it the grid, or a braille() or pixels() canvas, to draw on.
 *
 *   for (let h = 1; h <= 12; h++) label(s, ...around(s, 20.5, 10.5, 15, h / 12), h);
 *   polygon(s, [0, 1, 2, 3, 4].map((k) => around(s, 20, 10, 12, k / 5 + t / 8)), { fill: ":" });   // a pentagon, turning
 */
export declare function around(on: Surface | Braille | Pixels, cx: number, cy: number, r: number, turn: number): Point;
/**
 * A line from x, y, `length` columns long, pointing `turn` of the way round as a clock's hand does (0 up, 0.25 right,
 * 0.5 down): a hand, a needle, a ray of the sun. Drawn as line() draws it, with "auto" slope characters by default.
 *
 *   ray(s, 20.5, 10.5, 12, t / 60, { color: 1 });   // a second hand, once round a minute
 *   ray(s, 20.5, 10.5, 7, 10 / 12);                 // an hour hand at ten
 */
export declare function ray(s: Surface, x: number, y: number, length: number, turn: number, o?: LineOptions): void;
/** A box's border: one of `boxes` by name. */
export type BoxStyle = "single" | "double" | "rounded" | "heavy" | "ascii";
/** The borders, 6 characters each: top left, top right, bottom left, bottom right, across, down. Frozen: a border of your own is rect()'s style as 6 characters. */
export declare const boxes: Readonly<Record<BoxStyle, string>>;
export interface RectOptions {
    /**
     * The border: "single" by default, "double", "rounded", "heavy", "ascii", 6 characters of your own as `boxes` lays
     * them out (not all letters, which would be a name spelt wrong), or "none".
     */
    style?: BoxStyle | "none" | (string & {});
    /** The inside's character: false by default, for none, so what is under it shows. With style "none", the whole box. "" clears it. */
    fill?: string | false;
    /** The border's (and title's) colour. None by default: the piece's ink. */
    color?: Color;
    /** The inside's colour: the border's by default. */
    fillColor?: Color;
    /** A title on the top edge, after the corner and one across, with a space either side; cut to fit, and left out if the box is narrower than 7. */
    title?: string;
    /**
     * The border joins box-drawing lines already under it, as a line's do: two boxes sharing an edge meet with ┬ and ┴,
     * and a box over a line crossing it makes ┼. True by default; false draws the border over them as it is.
     */
    join?: boolean;
}
/**
 * A box `w` columns by `h` rows with its top left at x, y: a border in one of five styles or your own, a fill, a title.
 * A box one row tall is a line across; one column wide, a line down. Returns the region inside the border (all of the
 * box with style "none"), to draw in: braille(s, inside), text(s, inside, "..."), a rect in a rect.
 *
 *   const inside = rect(s, 0, 0, s.cols, s.rows, { style: "rounded", title: "status" });
 *   rect(s, 4, 2, 10, 4, { style: "none", fill: "░", color: 2 });   // a filled block
 */
export declare function rect(s: Surface, x: number, y: number, w: number, h: number, o?: RectOptions): Region;
export interface ShapeOptions {
    /**
     * The outline's character: "*" by default; "auto" draws it as a line's "auto" does, runs of _ where it is flat
     * stepped with / and \, and | where it is steep; "" clears the outline's cells.
     */
    char?: string;
    /** The inside's character: false by default, for none, so what is under it shows. "" clears it. */
    fill?: string | false;
    /** The outline's colour. None by default: the piece's ink. */
    color?: Color;
    /** The inside's colour: the outline's by default. */
    fillColor?: Color;
    /** A box-drawing character in the outline joins those under it, as a line's does: true by default. */
    join?: boolean;
}
/**
 * A circle that looks round: centred at cx, cy with a radius of `r` columns, its rows scaled by the cell's shape
 * (s.aspect, 2 by default), so r 8 is about 16 columns and 8 rows across. Its outline is the cell the curve passes
 * through in each column (or row, where it is steep): one cell thick, no gaps. Its fill is every other cell whose
 * centre is inside. circle(s, s.cols / 2, s.rows / 2, 8) is centred in the grid, whatever its size. A circle too
 * small to reach a cell's centre is the cell it is in.
 *
 *   circle(s, 20, 10, 9, { char: "o", fill: "·", fillColor: 2 });
 *   circle(s, s.cols / 2, s.rows / 2, 16, { char: "auto" });   // a clock face: ___/ and \___ round the top and bottom, | at the sides
 */
export declare function circle(s: Surface, cx: number, cy: number, r: number, o?: ShapeOptions): void;
/** An ellipse centred at cx, cy, `rx` columns and `ry` rows from its centre to its edge; otherwise as circle(). */
export declare function ellipse(s: Surface, cx: number, cy: number, rx: number, ry: number, o?: ShapeOptions): void;
/**
 * Part of a circle, clockwise from `from` to `to` of the way round, as a clock's hand goes: 0 at the top, 0.25 at the
 * right. A gauge, a spinner, a rainbow; with `fill`, a slice of pie. `to` a whole turn or more past `from` is the whole
 * circle, `to` equal to `from` is nothing, and `to` before `from` goes round through the top, so arc(s, x, y, r, 0.75,
 * 0.25) is the top half. Otherwise as circle(): the radius in columns, the same options, the same cells.
 *
 *   arc(s, 20, 10, 12, -0.375, -0.375 + 0.75 * k, { char: "█" });   // a gauge's reading, k of the way round its dial
 *   arc(s, 20, 10, 8, t, t + 0.3, { char: "auto" });                 // a spinner, once round a second
 */
export declare function arc(s: Surface, cx: number, cy: number, r: number, from: number, to: number, o?: ShapeOptions): void;
/** A polygon's options: a shape's, and a box style for its outline. */
export interface PolygonOptions extends ShapeOptions {
    /** Its outline in a box's lines, as a line's `style` draws: "single", "double", "rounded", "heavy" or "ascii". Give a char or a style, not both. */
    style?: BoxStyle;
}
/**
 * A polygon through points, closed: its outline as lines (char "*" by default; "auto" for slope characters, or a box
 * `style`), and with `fill`, its inside by the even-odd rule, so a star's middle stays empty. The outline joins the
 * cells the points are in, as line() does, and the fill is every cell whose centre is inside the polygon through those
 * cells' centres, so it meets the outline and never pokes past it.
 *
 *   polygon(s, [[4, 10], [16, 1], [28, 10]], { char: "auto", fill: ":" });                       // a tent
 *   polygon(s, [[2, 1], [20, 1], [20, 5], [10, 5], [10, 9], [2, 9]], { style: "double", fill: "." });   // a room shaped like an L
 */
export declare function polygon(s: Surface, points: readonly Point[], o?: PolygonOptions): void;
export interface StampOptions {
    /**
     * The character that lets what is under it show, besides an EMPTY cell: " " by default, so a frame read back from a
     * piece lays over another; null for none, so spaces cover what is under them.
     */
    mask?: string | null;
    /** One colour for everything stamped. Without, a grid's own colours are kept, found in this piece's colours if it has others. */
    color?: Color;
    /** A grid's colours mapped to this one's: map[i] for its colour i, as mergePalettes() makes. */
    map?: ArrayLike<number>;
    /**
     * Which part of the block x stands for: "left" by default, its left edge; "center", its middle, as label() centres
     * text on a point; "right", its right edge. So { align: "center" } at s.cols / 2 centres it across the grid, and the
     * block's lines stay lined up, as they would not each centred on their own.
     */
    align?: Align;
    /** Which part of the block y stands for: "top" by default, its top edge; "middle", its middle; "bottom", its bottom edge. */
    valign?: VAlign;
}
/**
 * Another grid, or a block of text such as a frame, laid over this one with its top left at x, y, or placed by x and y
 * as `align` and `valign` say. Its EMPTY cells and its `mask` character (a space by default) let this one show
 * through. A grid keeps its colours: as they are when it has this grid's palette, through `map` when given, else each
 * found in this grid's colours (the nearest for the page's theme); on a grid with no colours they are left out. Text
 * written in a template literal that starts with a line break is taken as sprite() takes its art: that first empty
 * line, a blank last line and the indent its lines share are left out. Returns the region the block covers, which may
 * reach past the grid's edges.
 *
 *   const cat = `
 *      /\\_/\\
 *     ( o.o )
 *      > ^ <`;
 *   stamp(s, cat, s.cols / 2, s.rows / 2, { align: "center", valign: "middle" });   // a cat in the middle
 */
export declare function stamp(s: Surface, src: Surface | string, x: number, y: number, o?: StampOptions): Region;
/** What plot() takes besides the curve. */
export interface PlotOptions {
    /** The x the left edge stands for, given a function: 0 by default. */
    x0?: number;
    /** The x the right edge stands for, given a function: TAU by default, so Math.sin is one whole wave across. */
    x1?: number;
    /** The value at the bottom row: -1 by default for a function; for a list, its smallest number. */
    y0?: number;
    /** The value at the top row: 1 by default for a function; for a list, its largest number. */
    y1?: number;
    /** The curve's colour. None by default: each cell keeps the colour it has. */
    color?: Color;
    /** Fills under the curve down to the bottom edge: an area chart, a range of hills, a sea. False by default. */
    fill?: boolean;
}
/**
 * A braille canvas: 2 by 4 dots a cell (U+2800 to U+28FF), for smooth lines, curves and plots. Dots are square on a
 * cell twice as tall as it is wide. Coordinates are in dots from the top left of its region; fractions are taken down,
 * and dots outside are left out. Draw on it, then call draw() to write it into the grid.
 */
export interface Braille {
    /** Dots across: 2 a column of its region. */
    readonly width: number;
    /** Dots down: 4 a row of its region. */
    readonly height: number;
    /** A dot's height in its widths: 1 on the usual 1:2 cell, so circles are round; 0.5 on a square grid. around() reads it. */
    readonly aspect: number;
    /**
     * Puts a dot at x, y. With a colour, the cell the dot is in takes it; without, that cell keeps the colour the canvas
     * last gave it (none at first: the piece's ink). Every drawing below takes its colour the same way.
     */
    set(x: number, y: number, color?: Color): void;
    /** Takes the dot at x, y away. */
    unset(x: number, y: number): void;
    /** Puts a dot at x, y if there is none, else takes it away. */
    toggle(x: number, y: number): void;
    /** True if there is a dot at x, y. */
    get(x: number, y: number): boolean;
    /** A line of dots from x0, y0 to x1, y1, both ends set: Bresenham's. */
    line(x0: number, y0: number, x1: number, y1: number, color?: Color): void;
    /** A line of dots from x, y, `length` dots long, `turn` of the way round as a clock's hand goes (0 up, 0.25 right), as ray() draws on the grid. */
    ray(x: number, y: number, length: number, turn: number, color?: Color): void;
    /** A round circle of radius r dots at cx, cy, its outline one dot thick; `fill: true` makes it a disc (false by default). */
    circle(cx: number, cy: number, r: number, o?: {
        fill?: boolean;
        color?: Color;
    }): void;
    /** Part of a circle of radius r dots, clockwise from `from` to `to` of the way round (0 at the top), as arc() draws on the grid; `fill: true` makes it a slice of pie. */
    arc(cx: number, cy: number, r: number, from: number, to: number, o?: {
        fill?: boolean;
        color?: Color;
    }): void;
    /** A rectangle w by h dots from x, y, its edge one dot thick; `fill: true` sets all of it (false by default). */
    rect(x: number, y: number, w: number, h: number, o?: {
        fill?: boolean;
        color?: Color;
    }): void;
    /**
     * A curve across the whole canvas, scaled to fit, its points joined so it has no gaps. Give it a function, y = f(x)
     * for x from x0 to x1 (0 to TAU by default), drawn so y0 (-1) is the bottom row and y1 (1) the top; or a list of
     * numbers, spread evenly from the left edge to the right, its smallest at the bottom and its largest at the top
     * unless y0 and y1 say otherwise. Past y0 and y1 the curve goes off the canvas and is cut where it leaves; a value
     * that is not a number (NaN, Infinity) leaves a gap. `fill: true` fills under it to the bottom edge.
     *
     *   b.plot(Math.sin);                                          // one wave across
     *   b.plot([3, 5, 2, 8, 6, 9], { color: 1 });                  // a list of numbers, scaled for you
     *   b.plot(load, { x0: t - 8, x1: t, y0: 0, y1: 1, fill: true });   // the last 8 seconds of load(t), as an area
     */
    plot(f: ((x: number) => number) | readonly number[], o?: PlotOptions): void;
    /** Takes every dot and colour away. */
    clear(): void;
    /** Writes the dots into the grid, a braille character a cell. A cell with no dots is left as it was. */
    draw(): void;
}
/**
 * A braille canvas on the grid, or on a region of it: 2 by 4 dots a cell, for lines, curves and plots far smoother
 * than whole characters. Draw on it, then call draw(). Making one is cheap: make it in the drawing, each frame. A
 * region is cut to the grid first, so one reaching past an edge starts where the grid does.
 *
 *   const b = braille(s);
 *   b.plot((x) => Math.sin(x + t), { color: 1 });
 *   b.circle(b.width / 2, b.height / 2, 20);
 *   b.draw();
 */
export declare function braille(s: Surface, region?: Region): Braille;
/** What sprite() takes besides the art, its colours and where it goes. */
export interface SpriteOptions {
    /**
     * How many frames the art holds side by side, a sprite sheet: 1 by default. With 2, the left half of every row is
     * the first frame and the right half the second. A list of drawings is cut the same way, each in turn.
     */
    frames?: number;
    /**
     * Which frame to draw: a number that counts up, taken down to a whole one and round the frames, so `frame: t * 4`
     * shows four frames a second, over and over. 0 by default.
     */
    frame?: number;
    /**
     * Pixels past an edge come back in at the opposite one, so a sprite at x = t * 12 walks off the right and back on at
     * the left, for ever, with no sums to do: false by default.
     */
    wrap?: boolean;
}
/**
 * A half-block canvas: two square pixels a cell, the upper and the lower half, for pixel art. A cell can hold one
 * colour, so where both halves are lit in different colours the cell is a full block in the upper one. Coordinates
 * are in pixels from the top left of its region; fractions are taken down, and pixels outside are left out. Draw on
 * it, then call draw() to write it into the grid.
 */
export interface Pixels {
    /** Pixels across: one a column of its region. */
    readonly width: number;
    /** Pixels down: two a row of its region. */
    readonly height: number;
    /** A pixel's height in its widths: 1 on the usual 1:2 cell, so circles are round; 0.5 on a square grid. around() reads it. */
    readonly aspect: number;
    /** Lights the pixel at x, y, in a colour: none by default, the piece's ink. Every drawing below takes its colour the same way. */
    set(x: number, y: number, color?: Color): void;
    /** Clears the pixel at x, y. */
    unset(x: number, y: number): void;
    /** True if the pixel at x, y is lit. */
    get(x: number, y: number): boolean;
    /** A line of pixels from x0, y0 to x1, y1, both ends lit: Bresenham's. */
    line(x0: number, y0: number, x1: number, y1: number, color?: Color): void;
    /** A line of pixels from x, y, `length` pixels long, `turn` of the way round as a clock's hand goes (0 up, 0.25 right), as ray() draws on the grid. */
    ray(x: number, y: number, length: number, turn: number, color?: Color): void;
    /** A rectangle w by h pixels from x, y, its edge one pixel thick; `fill: true` lights all of it (false by default). */
    rect(x: number, y: number, w: number, h: number, o?: {
        fill?: boolean;
        color?: Color;
    }): void;
    /** A round circle of radius r pixels at cx, cy, its outline one pixel thick; `fill: true` makes it a disc (false by default). */
    circle(cx: number, cy: number, r: number, o?: {
        fill?: boolean;
        color?: Color;
    }): void;
    /** Part of a circle of radius r pixels, clockwise from `from` to `to` of the way round (0 at the top), as arc() draws on the grid; `fill: true` makes it a slice of pie. */
    arc(cx: number, cy: number, r: number, from: number, to: number, o?: {
        fill?: boolean;
        color?: Color;
    }): void;
    /**
     * Pixel art from text, its top left at x, y: one character a pixel, a line a row. "." and " " are clear, letting what
     * is under show; every other character is lit in its colour from `colors`, or the piece's ink if it has none there.
     * Written in a template literal, its blank first and last lines and the indent its lines share are left out. To
     * animate, draw the frames side by side and say how many (`frames`), or give a list of drawings, and pick one with
     * `frame`; `wrap` brings it round the edges.
     *
     *   p.sprite(walker, { h: "#7d4e24", b: "#2f81f7" }, t * 12, 10, { frames: 2, frame: t * 4, wrap: true });
     */
    sprite(art: string | readonly string[], colors: Record<string, Color>, x: number, y: number, o?: SpriteOptions): void;
    /** Clears every pixel. */
    clear(): void;
    /** Writes the pixels into the grid: ▀ ▄ or █ a cell. A cell with no pixel lit is left as it was. */
    draw(): void;
}
/**
 * A half-block canvas on the grid, or on a region of it: two square pixels a cell, for pixel art and sprites. Draw on
 * it, then call draw(). Making one is cheap: make it in the drawing, each frame. A region is cut to the grid first, so
 * one reaching past an edge starts where the grid does.
 *
 *   const p = pixels(s);
 *   p.sprite(`
 *     .rr.
 *     rrrr
 *     .rr.`, { r: "#e11d48" }, 10, 4);
 *   p.draw();
 */
export declare function pixels(s: Surface, region?: Region): Pixels;
