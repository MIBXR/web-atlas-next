import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i } from "./ColorField-CTkIwERt.js";
import { t as a } from "./assertion-CKDD-Pvc.js";
import { r as o, t as s } from "./compose-ClIOcrt6.js";
import { t as c } from "./Group-VeeQ5avm.js";
import { n as l } from "./Input-DWAXtMrJ.js";
import { t as u } from "./dom-CdwaDRL5.js";
import { t as d } from "./color-swatch-BTtmjsuT.js";
import { t as f } from "./label-Wq1WAbJ3.js";
import { n as p } from "./Color-DBUN1_WA.js";
// node_modules/@heroui/styles/dist/components/color-field/color-field.styles.js
var m = e({
	base: "color-field",
	defaultVariants: { fullWidth: !1 },
	variants: { fullWidth: {
		false: "",
		true: "color-field--full-width"
	} }
}), h = e({
	defaultVariants: {
		fullWidth: !1,
		variant: "primary"
	},
	slots: {
		base: "color-input-group",
		input: "color-input-group__input",
		prefix: "color-input-group__prefix",
		suffix: "color-input-group__suffix"
	},
	variants: {
		fullWidth: {
			false: {},
			true: { base: "color-input-group--full-width" }
		},
		variant: {
			primary: { base: "color-input-group--primary" },
			secondary: { base: "color-input-group--secondary" }
		}
	}
}), g = /* @__PURE__ */ t(n(), 1), _ = r(), v = /*#__PURE__*/ (0, g.createContext)({}), y = ({ children: e, className: t, fullWidth: n, variant: r, ...i }) => {
	let a = g.useMemo(() => h({
		fullWidth: n,
		variant: r
	}), [n, r]), s = g.useMemo(() => ({ slots: a }), [a]);
	return /*#__PURE__*/ (0, _.jsx)(v, {
		value: s,
		children: /*#__PURE__*/ (0, _.jsx)(c, {
			className: o(t, a?.base()),
			"data-slot": "color-input-group",
			...i,
			children: e
		})
	});
};
y.displayName = "HeroUI.ColorInputGroup";
var b = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, g.use)(v);
	return /*#__PURE__*/ (0, _.jsx)(u.div, {
		className: s(r?.prefix, t),
		"data-slot": "color-input-group-prefix",
		...n,
		children: e
	});
};
b.displayName = "HeroUI.ColorInputGroup.Prefix";
var x = ({ className: e, ...t }) => {
	let { slots: n } = (0, g.use)(v);
	return /*#__PURE__*/ (0, _.jsx)(l, {
		className: o(e, n?.input()),
		"data-slot": "color-input-group-input",
		...t
	});
};
x.displayName = "HeroUI.ColorInputGroup.Input";
var S = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, g.use)(v);
	return /*#__PURE__*/ (0, _.jsx)(u.div, {
		className: s(r?.suffix, t),
		"data-slot": "color-input-group-suffix",
		...n,
		children: e
	});
};
S.displayName = "HeroUI.ColorInputGroup.Suffix";
// node_modules/@heroui/react/dist/components/color-field/color-field.js
function C({ children: e, className: t, fullWidth: n, ...r }) {
	let s = g.useMemo(() => m({ fullWidth: n }), [n]);
	return /*#__PURE__*/ (0, _.jsx)(i, {
		"data-required": a(r.isRequired),
		"data-slot": "color-field",
		...r,
		className: o(t, s),
		children: e
	});
}
C.displayName = "HeroUI.ColorField";
// node_modules/@heroui/react/dist/components/color-field/index.js
var w = Object.assign(C, {
	Root: C,
	Group: y,
	Input: x,
	Prefix: b,
	Suffix: S
});
// upstream/demos/en/color-field/basic.tsx
function T() {
	let [e, t] = (0, g.useState)(p("#0485F7"));
	return /* @__PURE__ */ (0, _.jsxs)(w, {
		className: "w-[280px]",
		name: "color",
		value: e,
		onChange: t,
		children: [/* @__PURE__ */ (0, _.jsx)(f, { children: "Color" }), /* @__PURE__ */ (0, _.jsxs)(w.Group, { children: [/* @__PURE__ */ (0, _.jsx)(w.Prefix, { children: /* @__PURE__ */ (0, _.jsx)(d, {
			color: e ?? void 0,
			size: "xs"
		}) }), /* @__PURE__ */ (0, _.jsx)(w.Input, {})] })]
	});
}
export { T as Basic };
