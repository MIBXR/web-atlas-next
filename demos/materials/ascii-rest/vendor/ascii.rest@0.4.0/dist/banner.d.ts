import type { Piece } from "./types.ts";
/**
 * A pixel font: each character's rows joined by "|", "#" for a pixel and anything else for none, every row as wide as
 * the first. `height` is the number of rows. Without `cased`, text is drawn in capitals.
 */
export interface Font {
    height: number;
    glyphs: Readonly<Record<string, string>>;
    cased?: boolean;
}
/**
 * The built-in fonts. block: five rows, letters of four or five pixels. slim: five rows, three pixels wide.
 * tall: seven rows, capitals five pixels wide in one-pixel strokes, a dot-matrix display face.
 * bold: seven rows, letters six pixels wide on two-pixel stems, a heavy display face.
 * round: six rows, letters five pixels wide with their corners rounded off.
 * wide: five rows, an extended face, letters six or seven pixels wide in one-pixel strokes.
 * mixed: nine rows, capitals and lower case with ascenders and descenders, five pixels wide. It is `cased`.
 * italic: five rows, capitals that lean right a pixel every two rows.
 */
export declare const fonts: {
    readonly block: {
        readonly height: 5;
        readonly glyphs: {
            readonly A: ".##.|#..#|####|#..#|#..#";
            readonly B: "###.|#..#|###.|#..#|###.";
            readonly C: ".###|#...|#...|#...|.###";
            readonly D: "###.|#..#|#..#|#..#|###.";
            readonly E: "####|#...|###.|#...|####";
            readonly F: "####|#...|###.|#...|#...";
            readonly G: ".###|#...|#.##|#..#|.###";
            readonly H: "#..#|#..#|####|#..#|#..#";
            readonly I: "#|#|#|#|#";
            readonly J: "...#|...#|...#|#..#|.##.";
            readonly K: "#..#|#.#.|##..|#.#.|#..#";
            readonly L: "#...|#...|#...|#...|####";
            readonly M: "#...#|##.##|#.#.#|#...#|#...#";
            readonly N: "#...#|##..#|#.#.#|#..##|#...#";
            readonly O: ".##.|#..#|#..#|#..#|.##.";
            readonly P: "###.|#..#|###.|#...|#...";
            readonly Q: ".##.|#..#|#..#|#.#.|.#.#";
            readonly R: "###.|#..#|###.|#.#.|#..#";
            readonly S: ".###|#...|.##.|...#|###.";
            readonly T: "#####|..#..|..#..|..#..|..#..";
            readonly U: "#..#|#..#|#..#|#..#|.##.";
            readonly V: "#...#|#...#|#...#|.#.#.|..#..";
            readonly W: "#...#|#...#|#.#.#|##.##|#...#";
            readonly X: "#...#|.#.#.|..#..|.#.#.|#...#";
            readonly Y: "#...#|.#.#.|..#..|..#..|..#..";
            readonly Z: "####|...#|..#.|.#..|####";
            readonly 0: "###|#.#|#.#|#.#|###";
            readonly 1: ".#.|##.|.#.|.#.|###";
            readonly 2: "###|..#|###|#..|###";
            readonly 3: "###|..#|.##|..#|###";
            readonly 4: "#.#|#.#|###|..#|..#";
            readonly 5: "###|#..|###|..#|###";
            readonly 6: "###|#..|###|#.#|###";
            readonly 7: "###|..#|..#|..#|..#";
            readonly 8: "###|#.#|###|#.#|###";
            readonly 9: "###|#.#|###|..#|###";
            readonly ".": ".|.|.|.|#";
            readonly ",": ".|.|.|#|#";
            readonly "!": "#|#|#|.|#";
            readonly "?": "###|..#|.##|...|.#.";
            readonly "'": "#|#|.|.|.";
            readonly ":": ".|#|.|#|.";
            readonly "-": "...|...|###|...|...";
            readonly "+": "...|.#.|###|.#.|...";
            readonly "=": "...|###|...|###|...";
            readonly "/": "..#|..#|.#.|#..|#..";
            readonly _: "...|...|...|...|###";
            readonly " ": "..";
        };
    };
    readonly slim: {
        readonly height: 5;
        readonly glyphs: {
            readonly A: ".#.|#.#|###|#.#|#.#";
            readonly B: "##.|#.#|##.|#.#|##.";
            readonly C: ".##|#..|#..|#..|.##";
            readonly D: "##.|#.#|#.#|#.#|##.";
            readonly E: "###|#..|##.|#..|###";
            readonly F: "###|#..|##.|#..|#..";
            readonly G: ".##|#..|#.#|#.#|.##";
            readonly H: "#.#|#.#|###|#.#|#.#";
            readonly I: "###|.#.|.#.|.#.|###";
            readonly J: "..#|..#|..#|#.#|.#.";
            readonly K: "#.#|#.#|##.|#.#|#.#";
            readonly L: "#..|#..|#..|#..|###";
            readonly M: "#.#|###|#.#|#.#|#.#";
            readonly N: "##.|#.#|#.#|#.#|#.#";
            readonly O: ".#.|#.#|#.#|#.#|.#.";
            readonly P: "##.|#.#|##.|#..|#..";
            readonly Q: ".#.|#.#|#.#|##.|.##";
            readonly R: "##.|#.#|##.|#.#|#.#";
            readonly S: ".##|#..|.#.|..#|##.";
            readonly T: "###|.#.|.#.|.#.|.#.";
            readonly U: "#.#|#.#|#.#|#.#|###";
            readonly V: "#.#|#.#|#.#|.#.|.#.";
            readonly W: "#.#|#.#|#.#|###|#.#";
            readonly X: "#.#|#.#|.#.|#.#|#.#";
            readonly Y: "#.#|#.#|.#.|.#.|.#.";
            readonly Z: "###|..#|.#.|#..|###";
            readonly 0: "###|#.#|#.#|#.#|###";
            readonly 1: ".#.|##.|.#.|.#.|###";
            readonly 2: "##.|..#|.#.|#..|###";
            readonly 3: "##.|..#|.#.|..#|##.";
            readonly 4: "#.#|#.#|###|..#|..#";
            readonly 5: "###|#..|##.|..#|##.";
            readonly 6: ".##|#..|###|#.#|###";
            readonly 7: "###|..#|.#.|.#.|.#.";
            readonly 8: "###|#.#|###|#.#|###";
            readonly 9: "###|#.#|###|..#|##.";
            readonly ".": ".|.|.|.|#";
            readonly ",": ".|.|.|#|#";
            readonly "!": "#|#|#|.|#";
            readonly "?": "##.|..#|.#.|...|.#.";
            readonly "'": "#|#|.|.|.";
            readonly ":": ".|#|.|#|.";
            readonly "-": "...|...|###|...|...";
            readonly "+": "...|.#.|###|.#.|...";
            readonly "=": "...|###|...|###|...";
            readonly "/": "..#|..#|.#.|#..|#..";
            readonly _: "...|...|...|...|###";
            readonly " ": "..";
        };
    };
    readonly tall: {
        readonly height: 7;
        readonly glyphs: {
            readonly A: ".###.|#...#|#...#|#####|#...#|#...#|#...#";
            readonly B: "####.|#...#|#...#|####.|#...#|#...#|####.";
            readonly C: ".###.|#...#|#....|#....|#....|#...#|.###.";
            readonly D: "###..|#..#.|#...#|#...#|#...#|#..#.|###..";
            readonly E: "#####|#....|#....|####.|#....|#....|#####";
            readonly F: "#####|#....|#....|####.|#....|#....|#....";
            readonly G: ".###.|#...#|#....|#.###|#...#|#...#|.###.";
            readonly H: "#...#|#...#|#...#|#####|#...#|#...#|#...#";
            readonly I: "###|.#.|.#.|.#.|.#.|.#.|###";
            readonly J: "....#|....#|....#|....#|....#|#...#|.###.";
            readonly K: "#...#|#..#.|#.#..|##...|#.#..|#..#.|#...#";
            readonly L: "#....|#....|#....|#....|#....|#....|#####";
            readonly M: "#...#|##.##|#.#.#|#.#.#|#...#|#...#|#...#";
            readonly N: "#...#|#...#|##..#|#.#.#|#..##|#...#|#...#";
            readonly O: ".###.|#...#|#...#|#...#|#...#|#...#|.###.";
            readonly P: "####.|#...#|#...#|####.|#....|#....|#....";
            readonly Q: ".###.|#...#|#...#|#...#|#.#.#|#..#.|.##.#";
            readonly R: "####.|#...#|#...#|####.|#.#..|#..#.|#...#";
            readonly S: ".###.|#...#|#....|.###.|....#|#...#|.###.";
            readonly T: "#####|..#..|..#..|..#..|..#..|..#..|..#..";
            readonly U: "#...#|#...#|#...#|#...#|#...#|#...#|.###.";
            readonly V: "#...#|#...#|#...#|#...#|#...#|.#.#.|..#..";
            readonly W: "#...#|#...#|#...#|#.#.#|#.#.#|##.##|#...#";
            readonly X: "#...#|#...#|.#.#.|..#..|.#.#.|#...#|#...#";
            readonly Y: "#...#|#...#|.#.#.|..#..|..#..|..#..|..#..";
            readonly Z: "#####|....#|...#.|..#..|.#...|#....|#####";
            readonly 0: ".###.|#...#|#..##|#.#.#|##..#|#...#|.###.";
            readonly 1: "..#|.##|#.#|..#|..#|..#|..#";
            readonly 2: ".###.|#...#|....#|...#.|..#..|.#...|#####";
            readonly 3: ".###.|#...#|....#|..##.|....#|#...#|.###.";
            readonly 4: "...#.|..##.|.#.#.|#..#.|#####|...#.|...#.";
            readonly 5: "#####|#....|####.|....#|....#|#...#|.###.";
            readonly 6: "..##.|.#...|#....|####.|#...#|#...#|.###.";
            readonly 7: "#####|....#|...#.|..#..|..#..|..#..|..#..";
            readonly 8: ".###.|#...#|#...#|.###.|#...#|#...#|.###.";
            readonly 9: ".###.|#...#|#...#|.####|....#|...#.|.##..";
            readonly ".": ".|.|.|.|.|.|#";
            readonly ",": "..|..|..|..|..|.#|#.";
            readonly "!": "#|#|#|#|#|.|#";
            readonly "?": ".###.|#...#|....#|...#.|..#..|.....|..#..";
            readonly "'": "#|#|.|.|.|.|.";
            readonly ":": ".|.|#|.|.|.|#";
            readonly "-": "....|....|....|####|....|....|....";
            readonly "+": ".....|..#..|..#..|#####|..#..|..#..|.....";
            readonly "=": ".....|.....|#####|.....|#####|.....|.....";
            readonly "/": "....#|....#|...#.|..#..|.#...|#....|#....";
            readonly _: ".....|.....|.....|.....|.....|.....|#####";
            readonly " ": "...|...|...|...|...|...|...";
        };
    };
    readonly bold: {
        readonly height: 7;
        readonly glyphs: {
            readonly A: ".####.|##..##|##..##|######|##..##|##..##|##..##";
            readonly B: "#####.|##..##|##..##|#####.|##..##|##..##|#####.";
            readonly C: ".####.|##..##|##....|##....|##....|##..##|.####.";
            readonly D: "####..|##.##.|##..##|##..##|##..##|##.##.|####..";
            readonly E: "######|##....|##....|#####.|##....|##....|######";
            readonly F: "######|##....|##....|#####.|##....|##....|##....";
            readonly G: ".####.|##..##|##....|##.###|##..##|##..##|.#####";
            readonly H: "##..##|##..##|##..##|######|##..##|##..##|##..##";
            readonly I: "####|.##.|.##.|.##.|.##.|.##.|####";
            readonly J: "....##|....##|....##|....##|##..##|##..##|.####.";
            readonly K: "##..##|##.##.|####..|###...|####..|##.##.|##..##";
            readonly L: "##....|##....|##....|##....|##....|##....|######";
            readonly M: "##....##|###..###|########|##.##.##|##....##|##....##|##....##";
            readonly N: "##...##|###..##|####.##|##.####|##..###|##...##|##...##";
            readonly O: ".####.|##..##|##..##|##..##|##..##|##..##|.####.";
            readonly P: "#####.|##..##|##..##|#####.|##....|##....|##....";
            readonly Q: ".####.|##..##|##..##|##..##|##.###|##.##.|.##.##";
            readonly R: "#####.|##..##|##..##|#####.|##.##.|##..##|##..##";
            readonly S: ".####.|##..##|##....|.####.|....##|##..##|.####.";
            readonly T: "######|..##..|..##..|..##..|..##..|..##..|..##..";
            readonly U: "##..##|##..##|##..##|##..##|##..##|##..##|.####.";
            readonly V: "##..##|##..##|##..##|##..##|##..##|.####.|..##..";
            readonly W: "##....##|##....##|##....##|##.##.##|########|###..###|##....##";
            readonly X: "##..##|##..##|.####.|..##..|.####.|##..##|##..##";
            readonly Y: "##..##|##..##|.####.|..##..|..##..|..##..|..##..";
            readonly Z: "######|....##|...##.|..##..|.##...|##....|######";
            readonly 0: ".####.|##..##|##..##|##.###|###.##|##..##|.####.";
            readonly 1: "..##|.###|####|..##|..##|..##|..##";
            readonly 2: ".####.|##..##|....##|...##.|..##..|.##...|######";
            readonly 3: ".####.|##..##|....##|..###.|....##|##..##|.####.";
            readonly 4: "...###|..####|.##.##|##..##|######|....##|....##";
            readonly 5: "######|##....|#####.|....##|....##|##..##|.####.";
            readonly 6: "..###.|.##...|##....|#####.|##..##|##..##|.####.";
            readonly 7: "######|....##|...##.|..##..|..##..|..##..|..##..";
            readonly 8: ".####.|##..##|##..##|.####.|##..##|##..##|.####.";
            readonly 9: ".####.|##..##|##..##|.#####|....##|...##.|.###..";
            readonly ".": "..|..|..|..|..|##|##";
            readonly ",": "..|..|..|..|##|##|#.";
            readonly "!": "##|##|##|##|..|##|##";
            readonly "?": ".####.|##..##|...##.|..##..|......|..##..|..##..";
            readonly "'": "##|##|..|..|..|..|..";
            readonly ":": "..|##|##|..|..|##|##";
            readonly "-": "....|....|....|####|....|....|....";
            readonly "+": "......|..##..|..##..|######|..##..|..##..|......";
            readonly "=": "......|......|######|......|######|......|......";
            readonly "/": "....##|....##|...##.|..##..|.##...|##....|##....";
            readonly _: "......|......|......|......|......|......|######";
            readonly " ": "...|...|...|...|...|...|...";
        };
    };
    readonly round: {
        readonly height: 6;
        readonly glyphs: {
            readonly 0: ".###.|#...#|#.#.#|#.#.#|#...#|.###.";
            readonly 1: ".#.|##.|.#.|.#.|.#.|###";
            readonly 2: ".###.|#...#|...#.|..#..|.#...|#####";
            readonly 3: ".###.|#...#|..##.|....#|#...#|.###.";
            readonly 4: "...#.|..##.|.#.#.|#..#.|#####|...#.";
            readonly 5: "#####|#....|####.|....#|#...#|.###.";
            readonly 6: "..##.|.#...|#....|####.|#...#|.###.";
            readonly 7: "####.|....#|...#.|..#..|..#..|..#..";
            readonly 8: ".###.|#...#|.###.|#...#|#...#|.###.";
            readonly 9: ".###.|#...#|.####|....#|...#.|.##..";
            readonly A: ".###.|#...#|#...#|#####|#...#|#...#";
            readonly B: "###..|#..#.|###..|#..#.|#...#|####.";
            readonly C: ".####|#....|#....|#....|#....|.####";
            readonly D: "###..|#..#.|#...#|#...#|#..#.|###..";
            readonly E: ".####|#....|####.|#....|#....|.####";
            readonly F: ".####|#....|####.|#....|#....|#....";
            readonly G: ".####|#....|#....|#.##.|#...#|.###.";
            readonly H: "#...#|#...#|#####|#...#|#...#|#...#";
            readonly I: "###|.#.|.#.|.#.|.#.|###";
            readonly J: "....#|....#|....#|....#|#...#|.###.";
            readonly K: "#...#|#..#.|###..|#..#.|#...#|#...#";
            readonly L: "#....|#....|#....|#....|#....|.####";
            readonly M: "#...#|##.##|#.#.#|#...#|#...#|#...#";
            readonly N: "#...#|##..#|#.#.#|#.#.#|#..##|#...#";
            readonly O: ".###.|#...#|#...#|#...#|#...#|.###.";
            readonly P: ".###.|#...#|#...#|####.|#....|#....";
            readonly Q: ".###.|#...#|#...#|#.#.#|#..#.|.##.#";
            readonly R: ".###.|#...#|#..#.|###..|#..#.|#...#";
            readonly S: ".###.|#....|.##..|...#.|....#|####.";
            readonly T: "#####|..#..|..#..|..#..|..#..|..#..";
            readonly U: "#...#|#...#|#...#|#...#|#...#|.###.";
            readonly V: "#...#|#...#|#...#|.#.#.|.#.#.|..#..";
            readonly W: "#...#|#...#|#...#|#.#.#|#.#.#|.#.#.";
            readonly X: "#...#|.#.#.|..#..|..#..|.#.#.|#...#";
            readonly Y: "#...#|#...#|.#.#.|..#..|..#..|..#..";
            readonly Z: "#####|...#.|..#..|..#..|.#...|#####";
            readonly ".": ".|.|.|.|.|#";
            readonly ",": ".|.|.|.|#|#";
            readonly "!": "#|#|#|#|.|#";
            readonly "?": ".###.|#...#|...#.|..#..|.....|..#..";
            readonly "'": "#|#|.|.|.|.";
            readonly ":": ".|#|.|.|#|.";
            readonly "-": "...|...|###|...|...|...";
            readonly "+": "...|.#.|###|.#.|...|...";
            readonly "=": "...|###|...|###|...|...";
            readonly "/": "..#|..#|.#.|.#.|#..|#..";
            readonly _: "....|....|....|....|....|####";
            readonly " ": "...|...|...|...|...|...";
        };
    };
    readonly wide: {
        readonly height: 5;
        readonly glyphs: {
            readonly 0: ".####.|#...##|#.##.#|##...#|.####.";
            readonly 1: "..#|.##|..#|..#|..#";
            readonly 2: "#####.|.....#|.####.|#.....|######";
            readonly 3: "#####.|.....#|.####.|.....#|#####.";
            readonly 4: "#...#.|#...#.|######|....#.|....#.";
            readonly 5: "######|#.....|#####.|.....#|#####.";
            readonly 6: ".####.|#.....|#####.|#....#|.####.";
            readonly 7: "######|.....#|....#.|...#..|..#...";
            readonly 8: ".####.|#....#|.####.|#....#|.####.";
            readonly 9: ".####.|#....#|.#####|.....#|.####.";
            readonly A: ".####.|#....#|######|#....#|#....#";
            readonly B: "#####.|#....#|######|#....#|#####.";
            readonly C: ".#####|#.....|#.....|#.....|.#####";
            readonly D: "#####.|#....#|#....#|#....#|#####.";
            readonly E: "######|#.....|#####.|#.....|######";
            readonly F: "######|#.....|#####.|#.....|#.....";
            readonly G: ".#####|#.....|#..###|#....#|.####.";
            readonly H: "#....#|#....#|######|#....#|#....#";
            readonly I: "###|.#.|.#.|.#.|###";
            readonly J: ".....#|.....#|.....#|#....#|.####.";
            readonly K: "#....#|#...#.|#####.|#...#.|#....#";
            readonly L: "#.....|#.....|#.....|#.....|######";
            readonly M: "#.....#|##...##|#.#.#.#|#..#..#|#.....#";
            readonly N: "#....#|##...#|#.#..#|#..#.#|#...##";
            readonly O: ".####.|#....#|#....#|#....#|.####.";
            readonly P: "#####.|#....#|#####.|#.....|#.....";
            readonly Q: ".####.|#....#|#....#|#...#.|.###.#";
            readonly R: "#####.|#....#|#####.|#...#.|#....#";
            readonly S: ".####.|#.....|.####.|.....#|.####.";
            readonly T: "#######|...#...|...#...|...#...|...#...";
            readonly U: "#....#|#....#|#....#|#....#|.####.";
            readonly V: "#.....#|#.....#|.#...#.|..#.#..|...#...";
            readonly W: "#.....#|#..#..#|#.#.#.#|##...##|#.....#";
            readonly X: "#....#|.#..#.|..##..|.#..#.|#....#";
            readonly Y: "#.....#|.#...#.|..#.#..|...#...|...#...";
            readonly Z: "######|....#.|..##..|.#....|######";
            readonly ".": ".|.|.|.|#";
            readonly ",": ".|.|.|#|#";
            readonly "!": "#|#|#|.|#";
            readonly "?": "#####.|.....#|..###.|......|..#...";
            readonly "'": "#|#|.|.|.";
            readonly ":": ".|#|.|#|.";
            readonly "-": "....|....|####|....|....";
            readonly "+": ".....|..#..|#####|..#..|.....";
            readonly "=": "....|####|....|####|....";
            readonly "/": "....#|...#.|..#..|.#...|#....";
            readonly _: "......|......|......|......|######";
            readonly " ": "....|....|....|....|....";
        };
    };
    readonly mixed: {
        readonly height: 9;
        readonly cased: true;
        readonly glyphs: {
            readonly A: ".###.|#...#|#...#|#####|#...#|#...#|#...#|.....|.....";
            readonly B: "####.|#...#|#...#|####.|#...#|#...#|####.|.....|.....";
            readonly C: ".###.|#...#|#....|#....|#....|#...#|.###.|.....|.....";
            readonly D: "####.|#...#|#...#|#...#|#...#|#...#|####.|.....|.....";
            readonly E: "#####|#....|#....|####.|#....|#....|#####|.....|.....";
            readonly F: "#####|#....|#....|####.|#....|#....|#....|.....|.....";
            readonly G: ".###.|#...#|#....|#.###|#...#|#...#|.####|.....|.....";
            readonly H: "#...#|#...#|#...#|#####|#...#|#...#|#...#|.....|.....";
            readonly I: "###|.#.|.#.|.#.|.#.|.#.|###|...|...";
            readonly J: "....#|....#|....#|....#|....#|#...#|.###.|.....|.....";
            readonly K: "#...#|#..#.|#.#..|##...|#.#..|#..#.|#...#|.....|.....";
            readonly L: "#....|#....|#....|#....|#....|#....|#####|.....|.....";
            readonly M: "#...#|##.##|#.#.#|#.#.#|#...#|#...#|#...#|.....|.....";
            readonly N: "#...#|#...#|##..#|#.#.#|#..##|#...#|#...#|.....|.....";
            readonly O: ".###.|#...#|#...#|#...#|#...#|#...#|.###.|.....|.....";
            readonly P: "####.|#...#|#...#|####.|#....|#....|#....|.....|.....";
            readonly Q: ".###.|#...#|#...#|#...#|#.#.#|#..#.|.##.#|.....|.....";
            readonly R: "####.|#...#|#...#|####.|#.#..|#..#.|#...#|.....|.....";
            readonly S: ".###.|#...#|#....|.###.|....#|#...#|.###.|.....|.....";
            readonly T: "#####|..#..|..#..|..#..|..#..|..#..|..#..|.....|.....";
            readonly U: "#...#|#...#|#...#|#...#|#...#|#...#|.###.|.....|.....";
            readonly V: "#...#|#...#|#...#|#...#|#...#|.#.#.|..#..|.....|.....";
            readonly W: "#...#|#...#|#...#|#.#.#|#.#.#|#.#.#|.#.#.|.....|.....";
            readonly X: "#...#|#...#|.#.#.|..#..|.#.#.|#...#|#...#|.....|.....";
            readonly Y: "#...#|#...#|.#.#.|..#..|..#..|..#..|..#..|.....|.....";
            readonly Z: "#####|....#|...#.|..#..|.#...|#....|#####|.....|.....";
            readonly a: ".....|.....|.###.|....#|.####|#...#|.####|.....|.....";
            readonly b: "#....|#....|####.|#...#|#...#|#...#|####.|.....|.....";
            readonly c: "....|....|.###|#...|#...|#...|.###|....|....";
            readonly d: "....#|....#|.####|#...#|#...#|#...#|.####|.....|.....";
            readonly e: ".....|.....|.###.|#...#|#####|#....|.####|.....|.....";
            readonly f: "..##|.#..|###.|.#..|.#..|.#..|.#..|....|....";
            readonly g: ".....|.....|.####|#...#|#...#|#...#|.####|....#|.###.";
            readonly h: "#....|#....|#.##.|##..#|#...#|#...#|#...#|.....|.....";
            readonly i: "#|.|#|#|#|#|#|.|.";
            readonly j: "..#|...|..#|..#|..#|..#|..#|..#|##.";
            readonly k: "#...|#...|#..#|#.#.|##..|#.#.|#..#|....|....";
            readonly l: "#.|#.|#.|#.|#.|#.|.#|..|..";
            readonly m: ".....|.....|##.#.|#.#.#|#.#.#|#.#.#|#.#.#|.....|.....";
            readonly n: ".....|.....|#.##.|##..#|#...#|#...#|#...#|.....|.....";
            readonly o: ".....|.....|.###.|#...#|#...#|#...#|.###.|.....|.....";
            readonly p: ".....|.....|####.|#...#|#...#|#...#|####.|#....|#....";
            readonly q: ".....|.....|.####|#...#|#...#|#...#|.####|....#|....#";
            readonly r: "....|....|#.##|##..|#...|#...|#...|....|....";
            readonly s: ".....|.....|.####|#....|.###.|....#|####.|.....|.....";
            readonly t: ".#..|.#..|###.|.#..|.#..|.#..|..##|....|....";
            readonly u: ".....|.....|#...#|#...#|#...#|#...#|.####|.....|.....";
            readonly v: ".....|.....|#...#|#...#|#...#|.#.#.|..#..|.....|.....";
            readonly w: ".....|.....|#...#|#...#|#.#.#|#.#.#|.#.#.|.....|.....";
            readonly x: ".....|.....|#...#|.#.#.|..#..|.#.#.|#...#|.....|.....";
            readonly y: ".....|.....|#...#|#...#|#...#|#...#|.####|....#|.###.";
            readonly z: ".....|.....|#####|...#.|..#..|.#...|#####|.....|.....";
            readonly 0: ".###.|#...#|#..##|#.#.#|##..#|#...#|.###.|.....|.....";
            readonly 1: ".#.|##.|.#.|.#.|.#.|.#.|###|...|...";
            readonly 2: ".###.|#...#|....#|...#.|..#..|.#...|#####|.....|.....";
            readonly 3: ".###.|#...#|....#|..##.|....#|#...#|.###.|.....|.....";
            readonly 4: "...#.|..##.|.#.#.|#..#.|#####|...#.|...#.|.....|.....";
            readonly 5: "#####|#....|####.|....#|....#|#...#|.###.|.....|.....";
            readonly 6: "..##.|.#...|#....|####.|#...#|#...#|.###.|.....|.....";
            readonly 7: "#####|....#|...#.|..#..|.#...|.#...|.#...|.....|.....";
            readonly 8: ".###.|#...#|#...#|.###.|#...#|#...#|.###.|.....|.....";
            readonly 9: ".###.|#...#|#...#|.####|....#|...#.|.##..|.....|.....";
            readonly ".": ".|.|.|.|.|.|#|.|.";
            readonly ",": "..|..|..|..|..|..|.#|#.|..";
            readonly "!": "#|#|#|#|#|.|#|.|.";
            readonly "?": ".###.|#...#|....#|...#.|..#..|.....|..#..|.....|.....";
            readonly "'": "#|#|.|.|.|.|.|.|.";
            readonly ":": ".|.|.|#|.|.|#|.|.";
            readonly "-": "....|....|....|....|####|....|....|....|....";
            readonly "+": ".....|.....|..#..|..#..|#####|..#..|..#..|.....|.....";
            readonly "=": ".....|.....|.....|#####|.....|#####|.....|.....|.....";
            readonly "/": "....#|....#|...#.|..#..|.#...|#....|#....|.....|.....";
            readonly _: ".....|.....|.....|.....|.....|.....|#####|.....|.....";
            readonly " ": "...|...|...|...|...|...|...|...|...";
        };
    };
    readonly italic: {
        readonly height: 5;
        readonly glyphs: {
            readonly 0: "..##.|.#..#|.#.##|##.#.|.##..";
            readonly 1: "...#|.##.|..#.|.#..|###.";
            readonly 2: "..###|....#|..##.|.#...|####.";
            readonly 3: "..###|....#|..##.|...#.|###..";
            readonly 4: ".#..#|#..#.|####.|..#..|..#..";
            readonly 5: "..####|.#....|.###..|...#..|###...";
            readonly 6: "..##.|.#...|.###.|#..#.|.##..";
            readonly 7: ".####|...#.|..#..|.#...|#....";
            readonly 8: "..##.|.#..#|..##.|#..#.|.##..";
            readonly 9: "..##.|.#..#|..###|...#.|.##..";
            readonly A: "..##.|.#..#|.####|#..#.|#..#.";
            readonly B: "..###|.#..#|.###.|#..#.|###..";
            readonly C: "..###|.#...|.#...|#....|.###.";
            readonly D: "..###|.#..#|.#..#|#..#.|###..";
            readonly E: "..####|.#....|.###..|#.....|####..";
            readonly F: "..####|.#....|.###..|#.....|#.....";
            readonly G: "..###|.#...|.#.##|#..#.|.###.";
            readonly H: "..#..#|.#..#.|.####.|#..#..|#..#..";
            readonly I: ".###.|..#..|..#..|.#...|###..";
            readonly J: ".....#|....#.|....#.|#..#..|.##...";
            readonly K: "..#.#|.#.#.|.##..|#.#..|#..#.";
            readonly L: "..#.|.#..|.#..|#...|####";
            readonly M: "..#...#|.##.##.|.#.#.#.|#...#..|#...#..";
            readonly N: "..#..#|.##.#.|.#.##.|#..#..|#..#..";
            readonly O: "..##.|.#..#|.#..#|#..#.|.##..";
            readonly P: "..###|.#..#|.###.|#....|#....";
            readonly Q: "..##.|.#..#|.#..#|#.##.|.##.#";
            readonly R: "..###|.#..#|.###.|#.#..|#..#.";
            readonly S: "..###|.#...|..##.|...#.|###..";
            readonly T: "#####|..#..|..#..|.#...|.#...";
            readonly U: "..#..#|.#..#.|.#..#.|#..#..|.##...";
            readonly V: "..#..#|.#..#.|.#.#..|#.#...|.#....";
            readonly W: "..#...#|.#...#.|.#.#.#.|#.#.#..|.#.#...";
            readonly X: "..#...#|..#.#..|...#...|.#.#...|#...#..";
            readonly Y: "#...#|.#.#.|..#..|.#...|.#...";
            readonly Z: "..####|....#.|..##..|.#....|####..";
            readonly ".": ".|.|.|.|#";
            readonly ",": "..|..|..|.#|#.";
            readonly "!": "..#|.#.|.#.|...|#..";
            readonly "?": "###|..#|.#.|...|#..";
            readonly "'": ".#|#.|..|..|..";
            readonly ":": "..|.#|..|..|#.";
            readonly "-": "...|...|###|...|...";
            readonly "+": "...|.#.|###|.#.|...";
            readonly "=": "....|.###|....|###.|....";
            readonly "/": "....#|...#.|..#..|.#...|#....";
            readonly _: "....|....|....|....|####";
            readonly " ": "...|...|...|...|...";
        };
    };
};
/** A built-in font's name, a key of `fonts`. */
export type FontName = keyof typeof fonts;
/**
 * The shadow's line styles, each the 16 characters of a cell by the edges that meet in it: up 1, down 2, left 4,
 * right 8, so " ║║║═╝╗╣═╚╔╠═╩╦╬" for double. Pass 16 characters of your own for any other.
 */
export declare const shadows: {
    readonly double: " ║║║═╝╗╣═╚╔╠═╩╦╬";
    readonly single: " │││─┘┐┤─└┌├─┴┬┼";
    readonly heavy: " ┃┃┃━┛┓┫━┗┏┣━┻┳╋";
    readonly rounded: " │││─╯╮┤─╰╭├─┴┬┼";
    readonly ascii: " |||-+++-+++-+++";
};
export type ShadowName = keyof typeof shadows;
/** How it moves. glint: a glint crosses it now and then. type: its letters type in, one at a time, and stay. still. */
export type Effect = "glint" | "type" | "still";
/** A colour as #rrggbb, or two or more for a fade along the letters from the first to the last. */
export type Colors = string | readonly string[];
/** One colour, or fade, for both a light page and a dark one, or one of each. */
export type Themed<T> = T | {
    light?: T;
    dark?: T;
};
/** Characters by the ground they are drawn on. */
type Grounds = {
    dark?: string;
    light?: string;
};
export interface BannerOptions {
    /** The letters: "block" by default, another of `fonts` by name, or a font of your own. */
    font?: FontName | Font;
    /** Columns a pixel of the font takes: 2 by default, so the pixels are square on a 1:2 cell; 1 for narrow letters. */
    pixel?: number;
    /** Columns between letters: 2. */
    gap?: number;
    /** The drop shadow's lines: "double" by default, "single", "heavy", "rounded", "ascii", 16 characters of your own, or "none". */
    shadow?: ShadowName | "none" | (string & {});
    /** The letters' character: "▓" on a dark page and "█" on a light one, or one for both. */
    fill?: string | Grounds;
    /** How it moves: "glint" by default, "type" or "still". */
    effect?: Effect;
    /** How fast it moves: 1 by default, 2 for twice as fast. */
    speed?: number;
    /** The glint: when it first crosses, how long it takes, how often it comes, its width and slant in cells, its characters. */
    glint?: {
        first?: number;
        sweep?: number;
        every?: number;
        width?: number;
        slant?: number;
        chars?: string | Grounds;
    };
    /** Typing: seconds for each letter. */
    type?: {
        step?: number;
    };
    /** The letters' colour, a fade of several, or one for each theme. Without any colour, it is text in the page's colour. */
    color?: Themed<Colors>;
    /** The shadow's colour, or one for each theme; a quieter one by default when the letters have a colour. */
    shadowColor?: Themed<string>;
    /** Blank cells around it: one number for every side, or [rows, columns]. */
    pad?: number | readonly [number, number];
    /**
     * A fixed size to centre it in, rather than its own, so `pad` does not apply: narrower pixels, a column at a time, if
     * it would not fit, and cropped if it still would not.
     */
    size?: {
        cols: number;
        rows: number;
    };
    /**
     * The widest it should be: narrower pixels, a column at a time, while it is wider. At one column a pixel it can still be
     * wider; `size` crops to a width.
     */
    max?: number;
    /** Its name, for screen readers and titles: the text by default. */
    name?: string;
}
/** A banner: a piece, and what it drew and how its motion runs. */
export interface BannerPiece extends Piece {
    /** The characters it drew, in the case they came in. */
    text: string;
    /**
     * Its motion: a loop of `seconds` from `from` for a glint, whose first pass runs from `pass[0]` to `pass[1]`; one play
     * of `seconds` for typing; 0 seconds for a still.
     */
    motion: {
        seconds: number;
        from: number;
        once: boolean;
        pass?: readonly [number, number];
    };
}
/** The characters of a text that a font draws, in the case they came in; a banner leaves out the rest. */
export declare function drawable(text: string, font?: BannerOptions["font"]): string;
/**
 * A banner of `text`, as a piece. It throws, with a message that says what to change, when the font draws none of the
 * text, and for an option it can't take: a font or shadow it doesn't know, a colour that isn't #rrggbb, a fill that
 * isn't one character, a gap, pad or pixel that isn't a whole number, an effect that isn't glint, type or still.
 */
export declare function banner(text: string, options?: BannerOptions): BannerPiece;
export {};
