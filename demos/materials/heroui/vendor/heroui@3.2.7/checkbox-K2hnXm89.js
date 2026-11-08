import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i, r as a, t as o } from "./Checkbox-DJXTS0dp.js";
import { t as s } from "./Label-CJNHsoCN.js";
import { r as c, t as l } from "./compose-ClIOcrt6.js";
import { t as u } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/checkbox-group/checkbox-group.styles.js
var d = e({
	base: "checkbox-group",
	defaultVariants: { variant: "primary" },
	variants: { variant: {
		primary: "checkbox-group--primary",
		secondary: "checkbox-group--secondary"
	} }
}), f = e({
	defaultVariants: { variant: "primary" },
	slots: {
		base: "checkbox",
		content: "checkbox__content",
		control: "checkbox__control",
		indicator: "checkbox__indicator"
	},
	variants: { variant: {
		primary: { base: "checkbox--primary" },
		secondary: { base: "checkbox--secondary" }
	} }
}), p = /* @__PURE__ */ t(n(), 1), m = r(), h = /*#__PURE__*/ (0, p.createContext)({}), g = ({ children: e, className: t, variant: n, ...r }) => {
	let i = p.useMemo(() => d({ variant: n }), [n]);
	return /*#__PURE__*/ (0, m.jsx)(h.Provider, {
		value: { variant: n },
		children: /*#__PURE__*/ (0, m.jsx)(o, {
			className: c(t, i),
			"data-slot": "checkbox-group",
			...r,
			children: e
		})
	});
};
g.displayName = "HeroUI.CheckboxGroup";
// node_modules/@heroui/react/dist/components/checkbox/checkbox.js
var _ = { elementType: "span" }, v = /*#__PURE__*/ (0, p.createContext)({}), y = ({ children: e, className: t, variant: n, ...r }) => {
	let i = (0, p.use)(h), o = n ?? i.variant, s = p.useMemo(() => f({ variant: o }), [o]);
	return /*#__PURE__*/ (0, m.jsx)(a, {
		"data-slot": "checkbox",
		...r,
		className: c(t, s.base()),
		children: (t) => /*#__PURE__*/ (0, m.jsx)(v, {
			value: {
				slots: s,
				state: t
			},
			children: typeof e == "function" ? e(t) : e
		})
	});
};
y.displayName = "HeroUI.Checkbox";
var b = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, p.use)(v);
	return /*#__PURE__*/ (0, m.jsx)(i, {
		"data-slot": "checkbox-content",
		...n,
		className: c(t, r?.content()),
		children: (t) => /*#__PURE__*/ (0, m.jsx)(s, {
			value: _,
			children: typeof e == "function" ? e(t) : e
		})
	});
};
b.displayName = "HeroUI.Checkbox.Content";
var x = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, p.use)(v);
	return /*#__PURE__*/ (0, m.jsx)(u.span, {
		className: l(r?.control, t),
		"data-slot": "checkbox-control",
		...n,
		children: e
	});
};
x.displayName = "HeroUI.Checkbox.Control";
var S = ({ children: e, className: t, ...n }) => {
	let { slots: r, state: i } = (0, p.use)(v), a = i?.isSelected, o = i?.isIndeterminate, s = typeof e == "function" ? e(i ?? {}) : e || /*#__PURE__*/ (0, m.jsxs)(m.Fragment, { children: [/*#__PURE__*/ (0, m.jsx)("svg", {
		"aria-hidden": "true",
		"data-slot": "checkbox-default-indicator--checkmark",
		fill: "none",
		role: "presentation",
		stroke: "currentColor",
		strokeDasharray: 22,
		strokeDashoffset: a ? 44 : 66,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: 2,
		viewBox: "0 0 17 18",
		children: /*#__PURE__*/ (0, m.jsx)("polyline", { points: "1 9 7 14 15 4" })
	}), o ? /*#__PURE__*/ (0, m.jsx)("svg", {
		"aria-hidden": "true",
		"data-slot": "checkbox-default-indicator--indeterminate",
		fill: "none",
		role: "presentation",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeWidth: 3,
		viewBox: "0 0 24 24",
		children: /*#__PURE__*/ (0, m.jsx)("line", {
			x1: "21",
			x2: "3",
			y1: "12",
			y2: "12"
		})
	}) : null] });
	return /*#__PURE__*/ (0, m.jsx)(u.span, {
		"aria-hidden": "true",
		className: l(r?.indicator, t),
		"data-slot": "checkbox-indicator",
		...n,
		children: s
	});
};
S.displayName = "HeroUI.Checkbox.Indicator";
// node_modules/@heroui/react/dist/components/checkbox/index.js
var C = Object.assign(y, {
	Root: y,
	Content: b,
	Control: x,
	Indicator: S
});
export { g as n, C as t };
