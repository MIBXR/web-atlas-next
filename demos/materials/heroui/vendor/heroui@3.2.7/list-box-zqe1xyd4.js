import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { a as i, i as a, t as o } from "./ListBox-DCWNZidc.js";
import { t as s } from "./dom-CdwaDRL5.js";
import { r as c, t as l } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/list-box-item/list-box-item.styles.js
var u = e({
	defaultVariants: { variant: "default" },
	slots: {
		indicator: "list-box-item__indicator",
		item: "list-box-item"
	},
	variants: { variant: {
		danger: { item: "list-box-item--danger" },
		default: { item: "list-box-item--default" }
	} }
}), d = e({ base: "list-box-section" }), f = e({
	base: "list-box",
	defaultVariants: { variant: "default" },
	variants: { variant: {
		danger: "list-box--danger",
		default: "list-box--default"
	} }
}), p = /* @__PURE__ */ t(n(), 1), m = r(), h = /*#__PURE__*/ (0, p.createContext)({}), g = ({ children: e, className: t, variant: n, ...r }) => {
	let i = p.useMemo(() => u({ variant: n }), [n]);
	return /*#__PURE__*/ (0, m.jsx)(a, {
		className: c(t, i.item()),
		"data-slot": "list-box-item",
		...r,
		children: (t) => /*#__PURE__*/ (0, m.jsx)(h, {
			value: {
				slots: i,
				state: t
			},
			children: typeof e == "function" ? e(t) : e
		})
	});
};
g.displayName = "HeroUI.ListBoxItem";
var _ = ({ children: e, className: t, ...n }) => {
	let { slots: r, state: i } = (0, p.use)(h), a = i?.isSelected, o = typeof e == "function" ? e(i ?? {}) : e || /*#__PURE__*/ (0, m.jsx)("svg", {
		"aria-hidden": "true",
		"data-slot": "list-box-item-indicator--checkmark",
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
	});
	return /*#__PURE__*/ (0, m.jsx)(s.span, {
		"aria-hidden": "true",
		className: l(r?.indicator, t),
		"data-slot": "list-box-item-indicator",
		"data-visible": a || void 0,
		...n,
		children: o
	});
};
_.displayName = "HeroUI.ListBoxItem.Indicator";
// node_modules/@heroui/react/dist/components/list-box-item/index.js
var v = Object.assign(g, {
	Root: g,
	Indicator: _
}), y = ({ children: e, className: t, ...n }) => {
	let r = p.useMemo(() => d({ class: typeof t == "string" ? t : void 0 }), [t]);
	return /*#__PURE__*/ (0, m.jsx)(i, {
		className: r,
		...n,
		children: e
	});
};
y.displayName = "HeroUI.ListBoxSection";
// node_modules/@heroui/react/dist/components/list-box-section/index.js
var b = y;
// node_modules/@heroui/react/dist/components/list-box/list-box.js
function x({ className: e, variant: t, ...n }) {
	let r = p.useMemo(() => f({ variant: t }), [t]);
	return /*#__PURE__*/ (0, m.jsx)(o, {
		className: c(e, r),
		"data-slot": "list-box",
		...n
	});
}
x.displayName = "HeroUI.ListBox";
// node_modules/@heroui/react/dist/components/list-box/index.js
var S = Object.assign(x, {
	Root: x,
	Item: v,
	ItemIndicator: _,
	Section: b
});
export { S as t };
