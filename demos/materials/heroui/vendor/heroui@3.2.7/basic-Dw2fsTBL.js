import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i } from "./Button-Cnex0dS4.js";
import { r as a, t as o } from "./compose-ClIOcrt6.js";
import { t as s } from "./dom-CdwaDRL5.js";
import { o as c, s as l } from "./icons-BUH88Ubz.js";
// node_modules/@heroui/styles/dist/components/pagination/pagination.styles.js
var u = e({
	defaultVariants: { size: "md" },
	slots: {
		base: "pagination",
		content: "pagination__content",
		ellipsis: "pagination__ellipsis",
		item: "pagination__item",
		link: "pagination__link",
		summary: "pagination__summary"
	},
	variants: { size: {
		lg: { base: "pagination--lg" },
		md: { base: "pagination--md" },
		sm: { base: "pagination--sm" }
	} }
}), d = /* @__PURE__ */ t(n(), 1), f = r(), p = /*#__PURE__*/ (0, d.createContext)({}), m = ({ children: e, className: t, size: n, ...r }) => {
	let i = d.useMemo(() => u({ size: n }), [n]), a = d.useMemo(() => ({ slots: i }), [i]);
	return /*#__PURE__*/ (0, f.jsx)(p, {
		value: a,
		children: /*#__PURE__*/ (0, f.jsx)(s.nav, {
			"aria-label": "pagination",
			"data-slot": "pagination",
			role: "navigation",
			...r,
			className: o(i.base, t),
			children: e
		})
	});
};
m.displayName = "HeroUI.Pagination";
var h = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, d.use)(p);
	return /*#__PURE__*/ (0, f.jsx)(s.div, {
		className: o(r?.summary, t),
		"data-slot": "pagination-summary",
		dir: "auto",
		...n,
		children: e
	});
};
h.displayName = "HeroUI.Pagination.Summary";
var g = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, d.use)(p);
	return /*#__PURE__*/ (0, f.jsx)(s.ul, {
		className: o(r?.content, t),
		"data-slot": "pagination-content",
		...n,
		children: e
	});
};
g.displayName = "HeroUI.Pagination.Content";
var _ = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, d.use)(p);
	return /*#__PURE__*/ (0, f.jsx)(s.li, {
		className: o(r?.item, t),
		"data-slot": "pagination-item",
		...n,
		children: e
	});
};
_.displayName = "HeroUI.Pagination.Item";
var v = ({ children: e, className: t, isActive: n, ...r }) => {
	let { slots: o } = (0, d.use)(p);
	return /*#__PURE__*/ (0, f.jsx)(i, {
		"aria-current": n ? "page" : void 0,
		className: a(t, o?.link()),
		"data-active": n ? "true" : void 0,
		"data-slot": "pagination-link",
		...r,
		children: e
	});
};
v.displayName = "HeroUI.Pagination.Link";
var y = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, d.use)(p), o = `${r?.link() ?? ""} pagination__link--nav`.trim();
	return /*#__PURE__*/ (0, f.jsx)(i, {
		className: a(t, o),
		"data-slot": "pagination-previous",
		...n,
		children: e
	});
};
y.displayName = "HeroUI.Pagination.Previous";
var b = ({ children: e, className: t, ...n }) => /*#__PURE__*/ (0, f.jsx)(s.span, {
	"aria-hidden": "true",
	className: t,
	"data-slot": "pagination-previous-icon",
	...n,
	children: e ?? /*#__PURE__*/ (0, f.jsx)(c, {})
});
b.displayName = "HeroUI.Pagination.PreviousIcon";
var x = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, d.use)(p), o = `${r?.link() ?? ""} pagination__link--nav`.trim();
	return /*#__PURE__*/ (0, f.jsx)(i, {
		className: a(t, o),
		"data-slot": "pagination-next",
		...n,
		children: e
	});
};
x.displayName = "HeroUI.Pagination.Next";
var S = ({ children: e, className: t, ...n }) => /*#__PURE__*/ (0, f.jsx)(s.span, {
	"aria-hidden": "true",
	className: t,
	"data-slot": "pagination-next-icon",
	...n,
	children: e ?? /*#__PURE__*/ (0, f.jsx)(l, {})
});
S.displayName = "HeroUI.Pagination.NextIcon";
var C = ({ className: e, ...t }) => {
	let { slots: n } = (0, d.use)(p);
	return /*#__PURE__*/ (0, f.jsx)(s.span, {
		"aria-hidden": "true",
		className: o(n?.ellipsis, e),
		"data-slot": "pagination-ellipsis",
		...t,
		children: "…"
	});
};
C.displayName = "HeroUI.Pagination.Ellipsis";
// node_modules/@heroui/react/dist/components/pagination/index.js
var w = Object.assign(m, {
	Content: g,
	Ellipsis: C,
	Item: _,
	Link: v,
	Next: x,
	NextIcon: S,
	Previous: y,
	PreviousIcon: b,
	Root: m,
	Summary: h
});
// upstream/demos/en/pagination/basic.tsx
function T() {
	let [e, t] = (0, d.useState)(1);
	return /* @__PURE__ */ (0, f.jsx)(w, {
		className: "justify-center",
		children: /* @__PURE__ */ (0, f.jsxs)(w.Content, { children: [
			/* @__PURE__ */ (0, f.jsx)(w.Item, { children: /* @__PURE__ */ (0, f.jsxs)(w.Previous, {
				isDisabled: e === 1,
				onPress: () => t((e) => e - 1),
				children: [/* @__PURE__ */ (0, f.jsx)(w.PreviousIcon, {}), /* @__PURE__ */ (0, f.jsx)("span", { children: "Previous" })]
			}) }),
			Array.from({ length: 3 }, (e, t) => t + 1).map((n) => /* @__PURE__ */ (0, f.jsx)(w.Item, { children: /* @__PURE__ */ (0, f.jsx)(w.Link, {
				isActive: n === e,
				onPress: () => t(n),
				children: n
			}) }, n)),
			/* @__PURE__ */ (0, f.jsx)(w.Item, { children: /* @__PURE__ */ (0, f.jsxs)(w.Next, {
				isDisabled: e === 3,
				onPress: () => t((e) => e + 1),
				children: [/* @__PURE__ */ (0, f.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, f.jsx)(w.NextIcon, {})]
			}) })
		] })
	});
}
export { T as PaginationBasic };
