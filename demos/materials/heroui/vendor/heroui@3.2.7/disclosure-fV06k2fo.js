import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i } from "./Button-Cnex0dS4.js";
import { i as a, r as o, t as s } from "./Disclosure-C7qrn_Ga.js";
import { t as c } from "./Heading-CdGE8g_3.js";
import { t as l } from "./assertion-CKDD-Pvc.js";
import { r as u, t as d } from "./compose-ClIOcrt6.js";
import { t as f } from "./dom-CdwaDRL5.js";
import { a as p } from "./icons-BUH88Ubz.js";
// node_modules/@heroui/styles/dist/components/disclosure/disclosure.styles.js
var m = e({
	defaultVariants: {},
	slots: {
		base: "disclosure",
		body: "disclosure__body",
		bodyInner: "disclosure__body-inner",
		content: "disclosure__content",
		heading: "disclosure__heading",
		indicator: "disclosure__indicator",
		trigger: "disclosure__trigger"
	},
	variants: {}
}), h = /* @__PURE__ */ t(n(), 1), g = r(), _ = /*#__PURE__*/ (0, h.createContext)({}), v = ({ children: e, className: t, ...n }) => {
	let r = h.useMemo(() => m({}), []), i = h.useMemo(() => ({ slots: r }), [r]);
	return /*#__PURE__*/ (0, g.jsx)(_, {
		value: i,
		children: /*#__PURE__*/ (0, g.jsx)(s, {
			"data-slot": "disclosure",
			...n,
			className: u(t, r.base()),
			children: e
		})
	});
};
v.displayName = "HeroUI.Disclosure";
var y = ({ className: e, ...t }) => {
	let { slots: n } = (0, h.use)(_);
	return /*#__PURE__*/ (0, g.jsx)(c, {
		className: d(n?.heading, e),
		"data-slot": "disclosure-heading",
		...t
	});
};
y.displayName = "HeroUI.Disclosure.Heading";
var b = ({ className: e, ...t }) => {
	let { slots: n } = (0, h.use)(_);
	return /*#__PURE__*/ (0, g.jsx)(i, {
		className: u(e, n?.trigger()),
		"data-slot": "disclosure-trigger",
		slot: "trigger",
		...t,
		children: (e) => /*#__PURE__*/ (0, g.jsx)(g.Fragment, { children: typeof t.children == "function" ? t.children(e) : t.children })
	});
};
b.displayName = "HeroUI.Disclosure.Trigger";
var x = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, h.use)(_), i = (0, h.useRef)(null), { isExpanded: s } = (0, h.use)(o);
	return /*#__PURE__*/ (0, g.jsx)(a, {
		ref: i,
		className: u(t, r?.content()),
		"data-expanded": l(s),
		"data-slot": "disclosure-content",
		...n,
		children: e
	});
};
x.displayName = "HeroUI.Disclosure.Content";
var S = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, h.use)(_);
	return /*#__PURE__*/ (0, g.jsx)(f.div, {
		className: r?.body({}),
		"data-slot": "disclosure-body",
		...n,
		children: /*#__PURE__*/ (0, g.jsx)("div", {
			className: d(r?.bodyInner, t),
			children: e
		})
	});
};
S.displayName = "HeroUI.Disclosure.Body";
var C = ({ children: e, className: t, ...n }) => {
	let { isExpanded: r } = (0, h.use)(o), { slots: i } = (0, h.use)(_);
	return e && /*#__PURE__*/ h.isValidElement(e) ? /*#__PURE__*/ h.cloneElement(e, {
		...n,
		"data-expanded": l(r),
		className: d(i?.indicator, t),
		"data-slot": "disclosure-indicator"
	}) : /*#__PURE__*/ (0, g.jsx)(p, {
		className: d(i?.indicator, t),
		"data-expanded": l(r),
		"data-slot": "disclosure-indicator",
		...n
	});
};
C.displayName = "HeroUI.Disclosure.Indicator";
// node_modules/@heroui/react/dist/components/disclosure/index.js
var w = Object.assign(v, {
	Root: v,
	Heading: y,
	Trigger: b,
	Content: x,
	Body: S,
	Indicator: C
});
export { w as t };
