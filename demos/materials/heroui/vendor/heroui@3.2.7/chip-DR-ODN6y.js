import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { t as i } from "./compose-ClIOcrt6.js";
import { t as a } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/chip/chip.styles.js
var o = e({
	defaultVariants: {
		color: "default",
		variant: "secondary"
	},
	slots: {
		base: "chip",
		label: "chip__label"
	},
	variants: {
		color: {
			accent: { base: "chip--accent" },
			danger: { base: "chip--danger" },
			default: { base: "chip--default" },
			success: { base: "chip--success" },
			warning: { base: "chip--warning" }
		},
		size: {
			lg: { base: "chip--lg" },
			md: { base: "chip--md" },
			sm: { base: "chip--sm" }
		},
		variant: {
			primary: { base: "chip--primary" },
			secondary: { base: "chip--secondary" },
			soft: { base: "chip--soft" },
			tertiary: { base: "chip--tertiary" }
		}
	}
}), s = /* @__PURE__ */ t(n(), 1), c = r(), l = /*#__PURE__*/ (0, s.createContext)({}), u = ({ children: e, className: t, color: n, size: r, variant: u, ...f }) => {
	let p = s.useMemo(() => o({
		color: n,
		size: r,
		variant: u
	}), [
		n,
		r,
		u
	]), m = s.useMemo(() => typeof e == "string" || typeof e == "number" ? /*#__PURE__*/ (0, c.jsx)(d, { children: e }) : e, [e]), h = s.useMemo(() => ({ slots: p }), [p]);
	return /*#__PURE__*/ (0, c.jsx)(l, {
		value: h,
		children: /*#__PURE__*/ (0, c.jsx)(a.span, {
			...f,
			className: i(p.base, t),
			"data-slot": "chip",
			children: m
		})
	});
};
u.displayName = "HeroUI.Chip";
var d = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, s.use)(l);
	return /*#__PURE__*/ (0, c.jsx)(a.span, {
		className: i(r?.label, t),
		"data-slot": "chip-label",
		...n,
		children: e
	});
};
d.displayName = "HeroUI.Chip.Label";
// node_modules/@heroui/react/dist/components/chip/index.js
var f = Object.assign(u, {
	Root: u,
	Label: d
});
export { f as t };
