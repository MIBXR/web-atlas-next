import { t as e } from "./label-Wq1WAbJ3.js";
import { n as t } from "./dist-qnEEIXtT.js";
import { i as n, n as r, t as i } from "./jsx-runtime-C1t0izHF.js";
import { t as a } from "./I18nProvider-zGzu-4zN.js";
import { i as o, o as s, r as c, t as l } from "./Slider-fuumTqJf.js";
import { t as u } from "./assertion-CKDD-Pvc.js";
import { r as d, t as f } from "./compose-ClIOcrt6.js";
import { t as p } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/slider/slider.styles.js
var m = t({ slots: {
	base: "slider",
	fill: "slider__fill",
	mark: "slider__mark",
	marks: "slider__marks",
	output: "slider__output",
	step: "slider__step",
	steps: "slider__steps",
	thumb: "slider__thumb",
	track: "slider__track"
} }), h = /* @__PURE__ */ n(r(), 1), g = i(), _ = /*#__PURE__*/ (0, h.createContext)({}), v = ({ children: e, className: t, orientation: n = "horizontal", ...r }) => {
	let i = h.useMemo(() => m({}), []);
	return /*#__PURE__*/ (0, g.jsx)(o, {
		"data-slot": "slider",
		orientation: n,
		...r,
		className: d(t, i.base()),
		children: (t) => /*#__PURE__*/ (0, g.jsx)(_, {
			value: {
				slots: i,
				state: t
			},
			children: typeof e == "function" ? e(t) : e
		})
	});
};
v.displayName = "HeroUI.Slider";
var y = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, h.use)(_);
	return /*#__PURE__*/ (0, g.jsx)(s, {
		className: d(t, r?.output()),
		"data-slot": "slider-output",
		...n,
		children: e || (({ state: e }) => e.values.map((t, n) => e.getThumbValueLabel(n)).join(" – "))
	});
};
y.displayName = "HeroUI.Slider.Output";
var b = ({ children: e, className: t, ...n }) => {
	let { slots: r, state: i } = (0, h.use)(_), { getThumbPercent: a, values: o } = i?.state || {}, s = o?.length && o.length === 1, [c, f] = [o?.length && o.length > 1 ? a?.(0) : 0, a?.(o?.length ? o.length - 1 : 0)].sort(), p = (f - c) * 100;
	return /*#__PURE__*/ (0, g.jsx)(l, {
		className: d(t, r?.track()),
		"data-disabled": u(i?.isDisabled),
		"data-slot": "slider-track",
		...s ? {
			"data-fill-end": u(p == 100),
			"data-fill-start": u(p > 0)
		} : {
			"data-fill-end": u(c * 100 + p == 100),
			"data-fill-start": u(c == 0)
		},
		...n,
		children: e
	});
};
b.displayName = "HeroUI.Slider.Track";
var x = ({ className: e, style: t, ...n }) => {
	let { slots: r, state: i } = (0, h.use)(_), { direction: o } = a(), { getThumbPercent: s, orientation: c, values: l } = i?.state || {}, [d, m] = [l?.length && l.length > 1 ? s?.(0) : 0, s?.(l?.length ? l.length - 1 : 0)].sort(), v = c === "vertical";
	return /*#__PURE__*/ (0, g.jsx)(p.div, {
		className: f(r?.fill, e),
		"data-disabled": u(i?.isDisabled),
		"data-slot": "slider-fill",
		style: {
			...t,
			[v ? "bottom" : o === "rtl" ? "right" : "left"]: `${d * 100}%`,
			...v ? { height: `${(m - d) * 100}%` } : { width: `${(m - d) * 100}%` }
		},
		...n
	});
};
x.displayName = "HeroUI.Slider.Fill";
var S = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, h.use)(_);
	return /*#__PURE__*/ (0, g.jsx)(c, {
		className: d(t, r?.thumb()),
		"data-slot": "slider-thumb",
		...n,
		children: e
	});
};
S.displayName = "HeroUI.Slider.Thumb";
function C(e, t, n) {
	let r = e.getThumbMinValue(0), i = e.getThumbMaxValue(e.values.length - 1), a = e.values.length > 1 ? e.values[0] : r, o = e.values[e.values.length - 1], s = r === i ? 0 : e.getValuePercent(t);
	return {
		"data-disabled": u(e.isDisabled),
		"data-filled": u(t >= a && t <= o),
		"data-value": t,
		style: { [e.orientation === "vertical" ? "bottom" : n === "rtl" ? "right" : "left"]: `${s * 100}%` }
	};
}
function w(e) {
	let [t, n = "0"] = e.toString().split("e");
	return Math.max(0, (t.split(".")[1]?.length ?? 0) - Number(n));
}
var T = ({ className: e, ...t }) => {
	let { slots: n, state: r } = (0, h.use)(_), { direction: i } = a(), o = r?.state;
	if (!o) return null;
	let s = o.getThumbMinValue(0), c = o.getThumbMaxValue(o.values.length - 1), l = (c - s) / o.step, d = Math.floor(l + 2 ** -52 * Math.max(1, l) * 4) + 1;
	if (!Number.isFinite(s) || !Number.isFinite(c) || c < s || !Number.isFinite(o.step) || o.step <= 0 || !Number.isFinite(d) || d <= 0 || d > 1e3) return null;
	let m = Math.max(w(s), w(o.step));
	return /*#__PURE__*/ (0, g.jsx)(p.div, {
		className: f(n?.steps, e),
		"data-direction": i,
		"data-disabled": u(o.isDisabled),
		"data-orientation": o.orientation,
		"data-slot": "slider-steps",
		...t,
		"aria-hidden": "true",
		children: Array.from({ length: d }, (e, t) => {
			let r = s + t * o.step, a = Math.min(c, m <= 100 ? Number(r.toFixed(m)) : r);
			return /*#__PURE__*/ (0, g.jsx)("span", {
				className: n?.step(),
				"data-slot": "slider-step",
				...C(o, a, i)
			}, t);
		})
	});
};
T.displayName = "HeroUI.Slider.Steps";
var E = ({ className: e, ...t }) => {
	let { slots: n, state: r } = (0, h.use)(_), { direction: i } = a();
	return /*#__PURE__*/ (0, g.jsx)(p.div, {
		className: f(n?.marks, e),
		"data-direction": i,
		"data-disabled": u(r?.isDisabled),
		"data-orientation": r?.state.orientation,
		"data-slot": "slider-marks",
		dir: i,
		...t
	});
};
E.displayName = "HeroUI.Slider.Marks";
var D = ({ children: e, className: t, style: n, value: r, ...i }) => {
	let { slots: o, state: s } = (0, h.use)(_), { direction: c } = a(), l = s?.state;
	if (!l || !Number.isFinite(r) || r < l.getThumbMinValue(0) || r > l.getThumbMaxValue(l.values.length - 1)) return null;
	let { style: u, ...d } = C(l, r, c);
	return /*#__PURE__*/ (0, g.jsx)(p.div, {
		className: f(o?.mark, t),
		"data-slot": "slider-mark",
		...d,
		...i,
		style: {
			...n,
			...u
		},
		children: e ?? l.getFormattedValue(r)
	});
};
D.displayName = "HeroUI.Slider.Mark";
// node_modules/@heroui/react/dist/components/slider/index.js
var O = Object.assign(v, {
	Fill: x,
	Mark: D,
	Marks: E,
	Output: y,
	Root: v,
	Steps: T,
	Thumb: S,
	Track: b
});
// upstream/demos/en/slider/default.tsx
function k() {
	return /* @__PURE__ */ (0, g.jsxs)(O, {
		className: "w-full max-w-xs",
		defaultValue: 30,
		children: [
			/* @__PURE__ */ (0, g.jsx)(e, { children: "Volume" }),
			/* @__PURE__ */ (0, g.jsx)(O.Output, {}),
			/* @__PURE__ */ (0, g.jsxs)(O.Track, { children: [/* @__PURE__ */ (0, g.jsx)(O.Fill, {}), /* @__PURE__ */ (0, g.jsx)(O.Thumb, {})] })
		]
	});
}
export { k as Default };
