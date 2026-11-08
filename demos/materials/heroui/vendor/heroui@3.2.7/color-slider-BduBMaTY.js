import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { d as i, i as a, n as o, r as s, s as c, t as l } from "./utils-UBVJ5JR_.js";
import { n as u, t as d } from "./ColorThumb-CVKu4qxQ.js";
import { t as f } from "./Label-CJNHsoCN.js";
import { a as p, c as m, d as h, l as g, n as _, o as v, t as y, u as b } from "./Slider-fuumTqJf.js";
import { t as x } from "./I18nProvider-zGzu-4zN.js";
import { n as S } from "./VisuallyHidden-CRCgxFfe.js";
import { n as C, t as w } from "./Color-DBUN1_WA.js";
import { t as T } from "./useControlledState-BbVlCDcL.js";
import { t as E } from "./filterDOMProps-CJYy6efO.js";
import { r as D } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/color-slider/color-slider.styles.js
var O = e({ slots: {
	base: "color-slider",
	output: "color-slider__output",
	thumb: "color-slider__thumb",
	track: "color-slider__track"
} });
// node_modules/react-aria/dist/private/color/useColorSlider.mjs
function k(e, t) {
	let { trackRef: n, inputRef: r, orientation: a, channel: o, "aria-label": s, name: c, form: l } = e, { locale: u, direction: d } = x();
	e.label || s || e["aria-labelledby"] || (s = t.value.getChannelName(o, u));
	let { groupProps: f, trackProps: p, labelProps: m, outputProps: g } = h({
		...e,
		"aria-label": s
	}, t, n), { inputProps: _, thumbProps: v } = b({
		index: 0,
		orientation: a,
		isDisabled: e.isDisabled,
		name: c,
		form: l,
		trackRef: n,
		inputRef: r
	}, t), y = t.getDisplayColor(), C = () => {
		let e;
		switch (e = a === "vertical" ? "top" : d === "ltr" ? "right" : "left", o) {
			case "hue": {
				let t = [
					0,
					60,
					120,
					180,
					240,
					300,
					360
				].map((e) => y.withChannelValue("hue", e).toString("css")).join(", ");
				return `linear-gradient(to ${e}, ${t})`;
			}
			case "lightness": {
				let n = t.getThumbMinValue(0), r = t.getThumbMaxValue(0), i = y.withChannelValue(o, n).toString("css"), a = y.withChannelValue(o, (r - n) / 2).toString("css"), s = y.withChannelValue(o, r).toString("css");
				return `linear-gradient(to ${e}, ${i}, ${a}, ${s})`;
			}
			case "saturation":
			case "brightness":
			case "red":
			case "green":
			case "blue":
			case "alpha": {
				let n = y.withChannelValue(o, t.getThumbMinValue(0)).toString("css"), r = y.withChannelValue(o, t.getThumbMaxValue(0)).toString("css");
				return `linear-gradient(to ${e}, ${n}, ${r})`;
			}
			default: throw Error("Unknown color channel: " + o);
		}
	}, w = { forcedColorAdjust: "none" };
	o === "hue" ? _["aria-valuetext"] += `, ${y.getHueName(u)}` : o !== "alpha" && (_["aria-valuetext"] += `, ${y.getColorName(u)}`);
	let { visuallyHiddenProps: T } = S({ style: {
		opacity: "0.0001",
		width: "100%",
		height: "100%",
		pointerEvents: "none"
	} });
	return {
		trackProps: {
			...i(f, p),
			style: {
				...p.style,
				...w,
				background: C()
			}
		},
		inputProps: {
			..._,
			style: {
				..._.style,
				...T.style
			}
		},
		thumbProps: {
			...v,
			style: {
				...v.style,
				...w
			}
		},
		labelProps: m,
		outputProps: g
	};
}
// node_modules/react-stately/dist/private/color/useColorSliderState.mjs
var A = /* @__PURE__ */ t(n(), 1);
function j(e) {
	let { channel: t, colorSpace: n, value: r, defaultValue: i, onChange: a, locale: o, ...s } = e;
	if (r == null && i == null) throw Error("useColorSliderState requires a value or defaultValue");
	r &&= w(r), i &&= w(i);
	let [c, l] = T(r, i, a), u = (0, A.useMemo)(() => n && c ? c.toFormat(n) : c, [c, n]), [d] = (0, A.useState)(c), f = i ?? d, p = (0, A.useMemo)(() => n && f ? f.toFormat(n) : f, [f, n]), m = (0, A.useMemo)(() => new Intl.NumberFormat(), []), h = g({
		...u.getChannelRange(t),
		...s,
		numberFormatter: m,
		value: u.getChannelValue(t),
		defaultValue: p.getChannelValue(t),
		onChange(e) {
			l(u.withChannelValue(t, e));
		},
		onChangeEnd(n) {
			e.onChangeEnd && e.onChangeEnd(u.withChannelValue(t, n));
		}
	}), { step: _, pageSize: v } = u.getChannelRange(t);
	return {
		...h,
		value: u,
		setValue(e) {
			l(w(e));
		},
		getDisplayColor() {
			switch (t) {
				case "hue": return C(`hsl(${u.getChannelValue("hue")}, 100%, 50%)`);
				case "lightness":
				case "brightness":
				case "saturation":
				case "red":
				case "green":
				case "blue": return u.withChannelValue("alpha", 1);
				case "alpha": return u;
				default: throw Error("Unknown color channel: " + t);
			}
		},
		getThumbValueLabel() {
			return u.formatChannelValue(t, o);
		},
		getFormattedValue() {
			return u.formatChannelValue(t, o);
		},
		step: _,
		pageSize: v,
		isDragging: h.isThumbDragging(0)
	};
}
// node_modules/react-aria-components/dist/private/ColorSlider.mjs
var M = /*#__PURE__*/ (0, A.createContext)(null), N = /*#__PURE__*/ (0, A.createContext)(null), P = /*#__PURE__*/ (0, A.forwardRef)(function(e, t) {
	[e, t] = o(e, t, M);
	let { locale: n } = x(), r = j({
		...e,
		locale: n
	}), i = A.useRef(null), d = A.useRef(null), [h, g] = a(!e["aria-label"] && !e["aria-labelledby"]), { trackProps: v, thumbProps: y, inputProps: b, labelProps: S, outputProps: C } = k({
		...e,
		label: g,
		trackRef: i,
		inputRef: d
	}, r), w = s({
		...e,
		values: {
			orientation: r.orientation,
			isDisabled: r.isDisabled,
			state: r
		},
		defaultClassName: "react-aria-ColorSlider"
	}), T = E(e, { global: !0 });
	return delete T.id, /*#__PURE__*/ A.createElement(l, { values: [
		[N, r],
		[_, r],
		[m, {
			...v,
			ref: i
		}],
		[p, C],
		[f, {
			...S,
			ref: h,
			children: r.value.getChannelName(e.channel, n)
		}],
		[u, {
			state: r,
			thumbProps: y,
			inputXRef: d,
			xInputProps: b,
			isDisabled: e.isDisabled
		}]
	] }, /*#__PURE__*/ A.createElement(c.div, {
		...T,
		...w,
		ref: t,
		slot: e.slot || void 0,
		"data-orientation": r.orientation,
		"data-disabled": r.isDisabled || void 0
	}));
}), F = r(), I = {
	red: "rgb",
	green: "rgb",
	blue: "rgb",
	lightness: "hsl",
	brightness: "hsb"
}, L = /* @__PURE__ */ new Set(["hue", "saturation"]);
function R(e, t) {
	let n = I[e];
	return n && t && t !== n ? (`${e}${n}${t}${n}`, n) : L.has(e) && t === "rgb" ? (`${e}`, "hsl") : t;
}
var z = /*#__PURE__*/ (0, A.createContext)({}), B = ({ channel: e, children: t, className: n, colorSpace: r, orientation: i = "horizontal", ...a }) => {
	let o = A.useMemo(() => O({}), []), s = R(e, r);
	return /*#__PURE__*/ (0, F.jsx)(P, {
		channel: e,
		colorSpace: s,
		"data-slot": "color-slider",
		orientation: i,
		...a,
		className: D(n, o.base()),
		children: (n) => /*#__PURE__*/ (0, F.jsx)(z, {
			value: {
				channel: e,
				slots: o,
				state: n
			},
			children: typeof t == "function" ? t(n) : t
		})
	});
};
B.displayName = "HeroUI.ColorSlider";
var V = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, A.use)(z);
	return /*#__PURE__*/ (0, F.jsx)(v, {
		className: D(t, r?.output()),
		"data-slot": "color-slider-output",
		...n,
		children: e || (({ state: e }) => e.getThumbValueLabel(0))
	});
};
V.displayName = "HeroUI.ColorSlider.Output";
var H = ({ children: e, className: t, style: n, ...r }) => {
	let { channel: i, slots: a, state: o } = (0, A.use)(z), s = o?.state?.getDisplayColor(), c = A.useMemo(() => {
		if (!s || !i) return {
			end: "transparent",
			start: "transparent"
		};
		let e = s.getChannelRange(i), t = s.withChannelValue(i, e.minValue);
		return {
			end: s.withChannelValue(i, e.maxValue).toString("css"),
			start: t.toString("css")
		};
	}, [i, s]);
	return /*#__PURE__*/ (0, F.jsx)(y, {
		className: D(t, a?.track()),
		"data-slot": "color-slider-track",
		style: ({ defaultStyle: e, ...t }) => ({
			background: `${e.background}, repeating-conic-gradient(#efefef 0% 25%, #f7f7f7 0% 50%) 50% / 16px 16px`,
			"--track-end-color": c.end,
			"--track-start-color": c.start,
			...typeof n == "function" ? n({
				defaultStyle: e,
				...t
			}) : n
		}),
		...r,
		children: e
	});
};
H.displayName = "HeroUI.ColorSlider.Track";
var U = ({ children: e, className: t, style: n, ...r }) => {
	let { slots: i } = (0, A.use)(z);
	return /*#__PURE__*/ (0, F.jsx)(d, {
		className: D(t, i?.thumb()),
		"data-slot": "color-slider-thumb",
		style: ({ defaultStyle: e, isDisabled: t, ...r }) => ({
			...e,
			backgroundColor: t ? void 0 : e.backgroundColor,
			...typeof n == "function" ? n({
				defaultStyle: e,
				isDisabled: t,
				...r
			}) : n
		}),
		...r,
		children: e
	});
};
U.displayName = "HeroUI.ColorSlider.Thumb";
// node_modules/@heroui/react/dist/components/color-slider/index.js
var W = Object.assign(B, {
	Root: B,
	Output: V,
	Track: H,
	Thumb: U
});
export { M as n, W as t };
