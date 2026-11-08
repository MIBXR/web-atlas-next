import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i, r as a } from "./ColorSwatchPicker-BdD0Ukyj.js";
import { n as o } from "./ColorSwatch-D-eXJKEM.js";
import { r as s, t as c } from "./compose-ClIOcrt6.js";
import { t as l } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/color-swatch-picker/color-swatch-picker.styles.js
var u = e({
	defaultVariants: {
		layout: "grid",
		size: "md",
		variant: "circle"
	},
	slots: {
		base: "color-swatch-picker",
		indicator: "color-swatch-picker__indicator",
		item: "color-swatch-picker__item",
		swatch: "color-swatch-picker__swatch"
	},
	variants: {
		layout: {
			grid: { base: "color-swatch-picker--grid" },
			stack: { base: "color-swatch-picker--stack" }
		},
		size: {
			lg: { base: "color-swatch-picker--lg" },
			md: { base: "color-swatch-picker--md" },
			sm: { base: "color-swatch-picker--sm" },
			xl: { base: "color-swatch-picker--xl" },
			xs: { base: "color-swatch-picker--xs" }
		},
		variant: {
			circle: { base: "color-swatch-picker--circle" },
			square: { base: "color-swatch-picker--square" }
		}
	}
}), d = /* @__PURE__ */ t(n(), 1), f = r(), p = /*#__PURE__*/ (0, d.createContext)({}), m = /*#__PURE__*/ (0, d.createContext)({}), h = ({ children: e, className: t, layout: n, size: r, variant: i, ...o }) => {
	let c = d.useMemo(() => u({
		layout: n,
		size: r,
		variant: i
	}), [
		n,
		r,
		i
	]), l = d.useMemo(() => ({ slots: c }), [c]);
	return /*#__PURE__*/ (0, f.jsx)(p, {
		value: l,
		children: /*#__PURE__*/ (0, f.jsx)(a, {
			"data-slot": "color-swatch-picker",
			...o,
			className: s(t, c.base()),
			children: e
		})
	});
};
h.displayName = "HeroUI.ColorSwatchPicker";
var g = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, d.use)(p);
	return /*#__PURE__*/ (0, f.jsx)(i, {
		"data-slot": "color-swatch-picker-item",
		...n,
		className: s(t, r?.item()),
		style: (e) => ({ "--color-swatch-current": e.color.toString("css") }),
		children: (t) => /*#__PURE__*/ (0, f.jsx)(m, {
			value: { state: t },
			children: typeof e == "function" ? e(t) : e
		})
	});
};
g.displayName = "HeroUI.ColorSwatchPicker.Item";
var _ = ({ className: e, ...t }) => {
	let { slots: n } = (0, d.use)(p);
	return /*#__PURE__*/ (0, f.jsx)(o, {
		className: s(e, n?.swatch()),
		"data-slot": "color-swatch-picker-swatch",
		...t
	});
};
_.displayName = "HeroUI.ColorSwatchPicker.Swatch";
function v(e) {
	let t = e.getChannelValue("red"), n = e.getChannelValue("green"), r = e.getChannelValue("blue");
	return (.2126 * t + .7152 * n + .0722 * r) / 255;
}
var y = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, d.use)(p), { state: i } = (0, d.use)(m), a = i?.color ? v(i.color) > .5 : !1, o = typeof e == "function" ? e(i ?? {}) : e || /*#__PURE__*/ (0, f.jsx)("svg", {
		"aria-hidden": "true",
		"data-slot": "color-swatch-picker-checkmark",
		fill: "none",
		role: "presentation",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: 1.5,
		viewBox: "0 0 12 12",
		children: /*#__PURE__*/ (0, f.jsx)("polyline", { points: "2.5 6 5 8.5 9.5 3" })
	});
	return /*#__PURE__*/ (0, f.jsx)(l.span, {
		"aria-hidden": "true",
		className: c(r?.indicator, t),
		"data-light-color": a ? "true" : void 0,
		"data-slot": "color-swatch-picker-indicator",
		...n,
		children: o
	});
};
y.displayName = "HeroUI.ColorSwatchPicker.Indicator";
// node_modules/@heroui/react/dist/components/color-swatch-picker/index.js
var b = Object.assign(h, {
	Root: h,
	Item: g,
	Swatch: _,
	Indicator: y
}), x = [
	"#F43F5E",
	"#D946EF",
	"#8B5CF6",
	"#3B82F6",
	"#06B6D4",
	"#10B981",
	"#84CC16"
];
function S() {
	return /* @__PURE__ */ (0, f.jsx)(b, { children: x.map((e) => /* @__PURE__ */ (0, f.jsxs)(b.Item, {
		color: e,
		children: [/* @__PURE__ */ (0, f.jsx)(b.Swatch, {}), /* @__PURE__ */ (0, f.jsx)(b.Indicator, {})]
	}, e)) });
}
export { S as Basic };
