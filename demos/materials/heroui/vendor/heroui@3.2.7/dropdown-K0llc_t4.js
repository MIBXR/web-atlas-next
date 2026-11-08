import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i } from "./Button-Cnex0dS4.js";
import { a, c as o, d as s, l as c, o as l, s as u } from "./Dialog-C0V2m_6r.js";
import { r as d, t as f } from "./compose-ClIOcrt6.js";
import { t as p } from "./use-popover-exit-hold-Bs6k_a58.js";
import { t as m } from "./dom-CdwaDRL5.js";
import { s as h } from "./icons-BUH88Ubz.js";
import { t as g } from "./surface-YzNgM-6T.js";
// node_modules/@heroui/styles/dist/components/dropdown/dropdown.styles.js
var _ = e({ slots: {
	menu: "dropdown__menu",
	popover: "dropdown__popover",
	root: "dropdown",
	trigger: "dropdown__trigger"
} }), v = e({
	defaultVariants: { variant: "default" },
	slots: {
		indicator: "menu-item__indicator",
		item: "menu-item",
		submenuIndicator: "menu-item__indicator menu-item__indicator--submenu"
	},
	variants: { variant: {
		danger: { item: "menu-item--danger" },
		default: { item: "menu-item--default" }
	} }
}), y = e({ base: "menu-section" }), b = /* @__PURE__ */ t(n(), 1), x = r(), S = /*#__PURE__*/ (0, b.createContext)({}), C = ({ children: e, className: t, variant: n, ...r }) => {
	let i = b.useMemo(() => v({ variant: n }), [n]);
	return /*#__PURE__*/ (0, x.jsx)(l, {
		className: d(t, i.item()),
		"data-slot": "menu-item",
		...r,
		children: (t) => /*#__PURE__*/ (0, x.jsx)(S, {
			value: {
				slots: i,
				state: t
			},
			children: typeof e == "function" ? e(t) : e
		})
	});
};
C.displayName = "HeroUI.MenuItem";
var w = ({ children: e, className: t, type: n = "checkmark", ...r }) => {
	let { slots: i, state: a } = (0, b.use)(S), o = a?.isSelected, s = typeof e == "function" ? e(a ?? {}) : e || (n === "dot" ? /*#__PURE__*/ (0, x.jsx)("svg", {
		"aria-hidden": "true",
		"data-slot": "menu-item-indicator--dot",
		fill: "currentColor",
		fillRule: "evenodd",
		role: "presentation",
		viewBox: "0 0 16 16",
		xmlns: "http://www.w3.org/2000/svg",
		children: /*#__PURE__*/ (0, x.jsx)("path", {
			clipRule: "evenodd",
			d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14",
			fillRule: "evenodd"
		})
	}) : /*#__PURE__*/ (0, x.jsx)("svg", {
		"aria-hidden": "true",
		"data-slot": "menu-item-indicator--checkmark",
		fill: "none",
		role: "presentation",
		stroke: "currentColor",
		strokeDasharray: 22,
		strokeDashoffset: o ? 44 : 66,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: 2,
		viewBox: "0 0 17 18",
		children: /*#__PURE__*/ (0, x.jsx)("polyline", { points: "1 9 7 14 15 4" })
	}));
	return /*#__PURE__*/ (0, x.jsx)(m.span, {
		"aria-hidden": "true",
		className: f(i?.indicator, t),
		"data-slot": "menu-item-indicator",
		"data-type": n,
		"data-visible": o || void 0,
		...r,
		children: s
	});
};
w.displayName = "HeroUI.MenuItem.Indicator";
var T = ({ children: e, className: t, ...n }) => {
	let { slots: r, state: i } = (0, b.use)(S);
	if (!i?.hasSubmenu) return null;
	let a = e ?? /* @__PURE__ */ (0, x.jsx)(h, {});
	return /*#__PURE__*/ (0, x.jsx)(m.span, {
		"aria-hidden": "true",
		className: f(r?.submenuIndicator, t),
		"data-slot": "submenu-indicator",
		...n,
		children: a
	});
};
T.displayName = "HeroUI.MenuItem.SubmenuIndicator";
// node_modules/@heroui/react/dist/components/menu-section/menu-section.js
var E = ({ children: e, className: t, ...n }) => {
	let r = b.useMemo(() => y({ class: typeof t == "string" ? t : void 0 }), [t]);
	return /*#__PURE__*/ (0, x.jsx)(u, {
		className: r,
		...n,
		children: e
	});
};
E.displayName = "HeroUI.MenuSection";
// node_modules/@heroui/react/dist/components/dropdown/dropdown.js
var D = /*#__PURE__*/ (0, b.createContext)({}), O = (e) => {
	e.style.clip = "auto", e.style.clipPath = "none", e.style.maskImage = "none";
}, k = ({ children: e, ...t }) => {
	let n = b.useMemo(() => _(), []), r = b.useMemo(() => ({ slots: n }), [n]);
	return /*#__PURE__*/ (0, x.jsx)(D, {
		value: r,
		children: /*#__PURE__*/ (0, x.jsx)(a, {
			...t,
			children: e
		})
	});
};
k.displayName = "HeroUI.Dropdown";
var A = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, b.use)(D);
	return /*#__PURE__*/ (0, x.jsx)(i, {
		className: d(t, r?.trigger()),
		"data-slot": "dropdown-trigger",
		...n,
		children: e
	});
};
A.displayName = "HeroUI.Dropdown.Trigger";
var j = ({ children: e, className: t, defaultOpen: n, isExiting: r, isOpen: i, placement: a, ref: o, ...c }) => {
	let { slots: l } = (0, b.use)(D), { isExiting: u, ref: f } = p({
		...c,
		defaultOpen: n,
		isOpen: i
	}, {
		prepare: O,
		ref: o
	}), m = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
	return /*#__PURE__*/ (0, x.jsx)(g, {
		value: { variant: "default" },
		children: /*#__PURE__*/ (0, x.jsx)(s, {
			...c,
			ref: f,
			className: d(t, l?.popover()),
			"data-slot": "dropdown-popover",
			defaultOpen: n,
			isExiting: u || r,
			isOpen: i,
			placement: a,
			shouldSkipAnimation: m || c.shouldSkipAnimation,
			children: e
		})
	});
};
j.displayName = "HeroUI.Dropdown.Popover";
function M({ className: e, ...t }) {
	let { slots: n } = (0, b.use)(D);
	return /*#__PURE__*/ (0, x.jsx)(o, {
		className: d(e, n?.menu()),
		"data-selection-mode": t.selectionMode,
		"data-slot": "dropdown-menu",
		...t
	});
}
M.displayName = "HeroUI.Dropdown.Menu";
var N = (e) => /*#__PURE__*/ (0, x.jsx)(C, { ...e });
N.displayName = "HeroUI.Dropdown.Item";
var P = (e) => /*#__PURE__*/ (0, x.jsx)(T, { ...e });
P.displayName = "HeroUI.Dropdown.SubmenuIndicator";
var F = ({ children: e, ...t }) => /*#__PURE__*/ (0, x.jsx)(c, {
	"data-slot": "dropdown-submenu-trigger",
	...t,
	children: e
});
F.displayName = "HeroUI.Dropdown.SubmenuTrigger";
var I = (e) => /*#__PURE__*/ (0, x.jsx)(w, { ...e });
I.displayName = "HeroUI.Dropdown.ItemIndicator";
var L = (e) => /*#__PURE__*/ (0, x.jsx)(E, { ...e });
L.displayName = "HeroUI.Dropdown.Section";
// node_modules/@heroui/react/dist/components/dropdown/index.js
var R = Object.assign(k, {
	Root: k,
	Trigger: A,
	Popover: j,
	Menu: M,
	Section: L,
	Item: N,
	ItemIndicator: I,
	SubmenuIndicator: P,
	SubmenuTrigger: F
});
export { R as t };
