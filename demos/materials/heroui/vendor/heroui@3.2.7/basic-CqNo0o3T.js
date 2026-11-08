import { t as e } from "./button-Dd5iSf4T.js";
import { n as t } from "./dist-qnEEIXtT.js";
import { i as n, n as r, t as i } from "./jsx-runtime-C1t0izHF.js";
import { d as a, f as o, n as s, t as c } from "./Dialog-C0V2m_6r.js";
import { t as l } from "./Heading-CdGE8g_3.js";
import { o as u } from "./useOverlayTriggerState-loftJLxJ.js";
import { t as d } from "./Pressable-9oq7KJrE.js";
import { l as f } from "./utils-UBVJ5JR_.js";
import { r as p, t as m } from "./compose-ClIOcrt6.js";
import { t as h } from "./dom-CdwaDRL5.js";
import { t as g } from "./use-popover-exit-hold-Bs6k_a58.js";
import { t as _ } from "./surface-YzNgM-6T.js";
// node_modules/@heroui/styles/dist/components/popover/popover.styles.js
var v = t({ slots: {
	base: "popover",
	dialog: "popover__dialog",
	heading: "popover__heading",
	trigger: "popover__trigger"
} }), y = /* @__PURE__ */ n(r(), 1), b = i(), x = /*#__PURE__*/ (0, y.createContext)({}), S = { variant: "default" }, C = ({ children: e, ...t }) => {
	let n = y.useMemo(() => v(), []), r = y.useMemo(() => ({ slots: n }), [n]);
	return /*#__PURE__*/ (0, b.jsx)(x, {
		value: r,
		children: /*#__PURE__*/ (0, b.jsx)(c, {
			"data-slot": "popover-root",
			...t,
			children: e
		})
	});
};
C.displayName = "HeroUI.Popover";
var w = ({ children: e, className: t, defaultOpen: n, isExiting: r, isOpen: i, ref: s, render: c, ...l }) => {
	let { slots: u } = (0, y.use)(x), d = f(o, l.slot), m = c ?? d?.render, h = y.useMemo(() => ({ slots: u }), [u]), { isExiting: v, ref: C } = g({
		...l,
		defaultOpen: n,
		isOpen: i
	}, { ref: s });
	return /*#__PURE__*/ (0, b.jsx)(x, {
		value: h,
		children: /*#__PURE__*/ (0, b.jsx)(_, {
			value: S,
			children: /*#__PURE__*/ (0, b.jsx)(a, {
				...l,
				ref: C,
				className: p(t, u?.base()),
				defaultOpen: n,
				isExiting: v || r,
				isOpen: i,
				render: (e, t) => {
					if (m) return m(e, t);
					let n = {
						...e,
						"aria-label": e.role ? e["aria-label"] : void 0,
						"aria-labelledby": e.role ? e["aria-labelledby"] : void 0
					};
					return /*#__PURE__*/ (0, b.jsx)("div", { ...n });
				},
				children: e
			})
		})
	});
};
w.displayName = "HeroUI.Popover.Content";
var T = ({ children: e, className: t, ...n }) => {
	let r = /*#__PURE__*/ (0, b.jsx)("svg", {
		"data-slot": "popover-overlay-arrow",
		fill: "none",
		height: "12",
		viewBox: "0 0 12 12",
		width: "12",
		xmlns: "http://www.w3.org/2000/svg",
		children: /*#__PURE__*/ (0, b.jsx)("path", { d: "M0 0C5.48483 8 6.5 8 12 0Z" })
	}), i = /*#__PURE__*/ y.isValidElement(e) ? /*#__PURE__*/ y.cloneElement(e, { "data-slot": "popover-overlay-arrow" }) : r;
	return /*#__PURE__*/ (0, b.jsx)(u, {
		"data-slot": "popover-overlay-arrow-group",
		...n,
		className: t,
		children: i
	});
};
T.displayName = "HeroUI.Popover.Arrow";
var E = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, y.use)(x);
	return /*#__PURE__*/ (0, b.jsx)(s, {
		"data-slot": "popover-dialog",
		...n,
		className: m(r?.dialog, t),
		children: e
	});
};
E.displayName = "HeroUI.Popover.Dialog";
var D = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, y.use)(x);
	return /*#__PURE__*/ (0, b.jsx)(d, { children: /*#__PURE__*/ (0, b.jsx)(h.div, {
		className: m(r?.trigger, t),
		"data-slot": "popover-trigger",
		role: "button",
		...n,
		children: e
	}) });
};
D.displayName = "HeroUI.Popover.Trigger";
var O = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, y.use)(x);
	return /*#__PURE__*/ (0, b.jsx)(l, {
		slot: "title",
		...n,
		className: m(r?.heading, t),
		children: e
	});
};
O.displayName = "HeroUI.Popover.Heading";
// node_modules/@heroui/react/dist/components/popover/index.js
var k = Object.assign(C, {
	Root: C,
	Trigger: D,
	Dialog: E,
	Arrow: T,
	Content: w,
	Heading: O
});
// upstream/demos/en/popover/basic.tsx
function A() {
	return /* @__PURE__ */ (0, b.jsx)("div", {
		className: "flex items-center gap-4",
		children: /* @__PURE__ */ (0, b.jsxs)(k, { children: [/* @__PURE__ */ (0, b.jsx)(e, { children: "Click me" }), /* @__PURE__ */ (0, b.jsx)(k.Content, {
			className: "max-w-64",
			children: /* @__PURE__ */ (0, b.jsxs)(k.Dialog, { children: [/* @__PURE__ */ (0, b.jsx)(k.Heading, { children: "Popover Title" }), /* @__PURE__ */ (0, b.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "This is the popover content. You can put any content here."
			})] })
		})] })
	});
}
export { A as PopoverBasic };
