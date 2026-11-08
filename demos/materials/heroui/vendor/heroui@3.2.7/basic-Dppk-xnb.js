import { n as e, t } from "./color-area-38gRqLMJ.js";
import { n } from "./dist-qnEEIXtT.js";
import { i as r, n as i, t as a } from "./jsx-runtime-C1t0izHF.js";
import { n as o } from "./Button-Cnex0dS4.js";
import { d as s, l as c, r as l, t as u } from "./utils-UBVJ5JR_.js";
import { t as d } from "./ColorField-CTkIwERt.js";
import { n as f, t as p } from "./color-slider-BduBMaTY.js";
import { t as m } from "./ColorSwatch-D-eXJKEM.js";
import { i as h, t as g } from "./ColorSwatchPicker-BdD0Ukyj.js";
import { d as _, t as v } from "./Dialog-C0V2m_6r.js";
import { r as y, t as b } from "./compose-ClIOcrt6.js";
import { t as x } from "./use-popover-exit-hold-Bs6k_a58.js";
import { t as S } from "./surface-YzNgM-6T.js";
import { t as C } from "./color-swatch-BTtmjsuT.js";
import { t as w } from "./label-Wq1WAbJ3.js";
// node_modules/@heroui/styles/dist/components/color-picker/color-picker.styles.js
var T = n({ slots: {
	base: "color-picker",
	popover: "color-picker__popover",
	trigger: "color-picker__trigger"
} }), E = /* @__PURE__ */ r(i(), 1), D = /*#__PURE__*/ (0, E.createContext)(null), O = /*#__PURE__*/ (0, E.createContext)(null), k = /*#__PURE__*/ (0, E.createContext)(null);
function A(t) {
	let n = c(O, t.slot);
	t = s(n, t);
	let r = h(t), i = l({
		...t,
		values: { color: r.color }
	});
	return /*#__PURE__*/ E.createElement(u, { values: [
		[k, r],
		[f, {
			value: r.color,
			onChange: r.setColor
		}],
		[e, {
			value: r.color,
			onChange: r.setColor
		}],
		[D, {
			value: r.color,
			onChange: r.setColor
		}],
		[d, {
			value: r.color,
			onChange: r.setColor
		}],
		[m, { color: r.color }],
		[g, {
			value: r.color,
			onChange: r.setColor
		}]
	] }, i.children);
}
// node_modules/@heroui/react/dist/components/color-picker/color-picker.js
var j = a(), M = /*#__PURE__*/ (0, E.createContext)({}), N = ({ children: e, className: t, ...n }) => {
	let r = E.useMemo(() => T(), []), i = E.useMemo(() => ({ slots: r }), [r]);
	return /*#__PURE__*/ (0, j.jsx)(M, {
		value: i,
		children: /*#__PURE__*/ (0, j.jsx)(A, {
			...n,
			children: /*#__PURE__*/ (0, j.jsx)(v, { children: /*#__PURE__*/ (0, j.jsx)("div", {
				className: b(r?.base, t),
				"data-slot": "color-picker",
				children: e
			}) })
		})
	});
};
N.displayName = "HeroUI.ColorPicker";
var P = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, E.use)(M);
	return /*#__PURE__*/ (0, j.jsx)(o, {
		className: y(t, r?.trigger()),
		"data-slot": "color-picker-trigger",
		...n,
		children: e
	});
};
P.displayName = "HeroUI.ColorPicker.Trigger";
var F = ({ children: e, className: t, defaultOpen: n, isExiting: r, isOpen: i, placement: a = "bottom left", ref: o, ...s }) => {
	let { slots: c } = (0, E.use)(M), { isExiting: l, ref: u } = x({
		...s,
		defaultOpen: n,
		isOpen: i
	}, { ref: o });
	return /*#__PURE__*/ (0, j.jsx)(S, {
		value: { variant: "default" },
		children: /*#__PURE__*/ (0, j.jsx)(_, {
			...s,
			ref: u,
			className: y(t, c?.popover()),
			"data-slot": "color-picker-popover",
			defaultOpen: n,
			isExiting: l || r,
			isOpen: i,
			placement: a,
			children: e
		})
	});
};
F.displayName = "HeroUI.ColorPicker.Popover";
// node_modules/@heroui/react/dist/components/color-picker/index.js
var I = Object.assign(N, {
	Root: N,
	Trigger: P,
	Popover: F
});
// upstream/demos/en/color-picker/basic.tsx
function L() {
	return /* @__PURE__ */ (0, j.jsxs)(I, {
		defaultValue: "#0485F7",
		children: [/* @__PURE__ */ (0, j.jsxs)(I.Trigger, { children: [/* @__PURE__ */ (0, j.jsx)(C, { size: "lg" }), /* @__PURE__ */ (0, j.jsx)(w, { children: "Pick a color" })] }), /* @__PURE__ */ (0, j.jsxs)(I.Popover, { children: [/* @__PURE__ */ (0, j.jsx)(t, {
			"aria-label": "Color area",
			className: "max-w-full",
			colorSpace: "hsb",
			xChannel: "saturation",
			yChannel: "brightness",
			children: /* @__PURE__ */ (0, j.jsx)(t.Thumb, {})
		}), /* @__PURE__ */ (0, j.jsxs)(p, {
			channel: "hue",
			className: "gap-1 px-1",
			colorSpace: "hsb",
			children: [
				/* @__PURE__ */ (0, j.jsx)(w, { children: "Hue" }),
				/* @__PURE__ */ (0, j.jsx)(p.Output, { className: "text-muted" }),
				/* @__PURE__ */ (0, j.jsx)(p.Track, { children: /* @__PURE__ */ (0, j.jsx)(p.Thumb, {}) })
			]
		})] })]
	});
}
export { L as Basic };
