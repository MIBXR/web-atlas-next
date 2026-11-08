import { t as e } from "./avatar-fiWA5aWw.js";
import { n as t, t as n } from "./dist-qnEEIXtT.js";
import { i as r, n as i, t as a } from "./jsx-runtime-C1t0izHF.js";
import { t as o } from "./compose-ClIOcrt6.js";
import { t as s } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/badge/badge.styles.js
var c = t({
	defaultVariants: {
		color: "default",
		placement: "top-right",
		size: "md",
		variant: "primary"
	},
	slots: {
		anchor: "badge-anchor",
		base: "badge",
		label: "badge__label"
	},
	variants: {
		color: {
			accent: { base: "badge--accent" },
			danger: { base: "badge--danger" },
			default: { base: "badge--default" },
			success: { base: "badge--success" },
			warning: { base: "badge--warning" }
		},
		placement: {
			"bottom-left": { base: "badge--bottom-left" },
			"bottom-right": { base: "badge--bottom-right" },
			"top-left": { base: "badge--top-left" },
			"top-right": { base: "badge--top-right" }
		},
		size: {
			lg: { base: "badge--lg" },
			md: { base: "badge--md" },
			sm: { base: "badge--sm" }
		},
		variant: {
			primary: { base: "badge--primary" },
			secondary: { base: "badge--secondary" },
			soft: { base: "badge--soft" }
		}
	}
}), l = /* @__PURE__ */ r(i(), 1), u = a(), d = /*#__PURE__*/ (0, l.createContext)({}), f = ({ children: e, className: t, ...r }) => /*#__PURE__*/ (0, u.jsx)(s.span, {
	...r,
	className: n("badge-anchor", t) ?? void 0,
	"data-slot": "badge-anchor",
	children: e
});
f.displayName = "HeroUI.Badge.Anchor";
var p = ({ children: e, className: t, color: n, placement: r, size: i, variant: a, ...f }) => {
	let p = l.useMemo(() => c({
		color: n,
		placement: r,
		size: i,
		variant: a
	}), [
		n,
		r,
		i,
		a
	]), h = l.useMemo(() => typeof e == "string" || typeof e == "number" ? /*#__PURE__*/ (0, u.jsx)(m, { children: e }) : e, [e]), g = l.useMemo(() => ({ slots: p }), [p]);
	return /*#__PURE__*/ (0, u.jsx)(d, {
		value: g,
		children: /*#__PURE__*/ (0, u.jsx)(s.span, {
			...f,
			className: o(p.base, t),
			"data-slot": "badge",
			children: h
		})
	});
};
p.displayName = "HeroUI.Badge";
var m = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, l.use)(d);
	return /*#__PURE__*/ (0, u.jsx)(s.span, {
		className: o(r?.label, t),
		"data-slot": "badge-label",
		...n,
		children: e
	});
};
m.displayName = "HeroUI.Badge.Label";
// node_modules/@heroui/react/dist/components/badge/index.js
var h = Object.assign(p, {
	Anchor: f,
	Label: m,
	Root: p
}), g = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%2353623e%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EB%3C%2Ftext%3E%3C%2Fsvg%3E", _ = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%236a466e%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EC%3C%2Ftext%3E%3C%2Fsvg%3E", v = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%23224462%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3EA%3C%2Ftext%3E%3C%2Fsvg%3E";
function y() {
	return /* @__PURE__ */ (0, u.jsxs)("div", {
		className: "flex items-center gap-6",
		children: [
			/* @__PURE__ */ (0, u.jsxs)(h.Anchor, { children: [/* @__PURE__ */ (0, u.jsxs)(e, { children: [/* @__PURE__ */ (0, u.jsx)(e.Image, { src: g }), /* @__PURE__ */ (0, u.jsx)(e.Fallback, { children: "JD" })] }), /* @__PURE__ */ (0, u.jsx)(h, {
				color: "danger",
				size: "sm",
				children: "5"
			})] }),
			/* @__PURE__ */ (0, u.jsxs)(h.Anchor, { children: [/* @__PURE__ */ (0, u.jsxs)(e, { children: [/* @__PURE__ */ (0, u.jsx)(e.Image, { src: _ }), /* @__PURE__ */ (0, u.jsx)(e.Fallback, { children: "AB" })] }), /* @__PURE__ */ (0, u.jsx)(h, {
				color: "accent",
				size: "sm",
				children: "New"
			})] }),
			/* @__PURE__ */ (0, u.jsxs)(h.Anchor, { children: [/* @__PURE__ */ (0, u.jsxs)(e, { children: [/* @__PURE__ */ (0, u.jsx)(e.Image, { src: v }), /* @__PURE__ */ (0, u.jsx)(e.Fallback, { children: "CD" })] }), /* @__PURE__ */ (0, u.jsx)(h, {
				color: "success",
				placement: "bottom-right",
				size: "sm"
			})] })
		]
	});
}
export { y as BadgeBasic };
