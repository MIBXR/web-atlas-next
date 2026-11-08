import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { t as i } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/surface/surface.styles.js
var a = e({
	base: "surface",
	defaultVariants: { variant: "default" },
	variants: { variant: {
		default: "surface--default",
		secondary: "surface--secondary",
		tertiary: "surface--tertiary",
		transparent: "surface--transparent"
	} }
}), o = /* @__PURE__ */ t(n(), 1), s = r(), c = /*#__PURE__*/ (0, o.createContext)({}), l = ({ children: e, className: t, variant: n = "default", ...r }) => {
	let l = o.useMemo(() => ({ variant: n }), [n]), u = (0, o.useMemo)(() => a({
		className: t,
		variant: n
	}), [t, n]);
	return /*#__PURE__*/ (0, s.jsx)(c, {
		value: l,
		children: /*#__PURE__*/ (0, s.jsx)(i.div, {
			className: u,
			"data-slot": "surface",
			...r,
			children: e
		})
	});
};
l.displayName = "HeroUI.Surface";
export { l as n, c as t };
