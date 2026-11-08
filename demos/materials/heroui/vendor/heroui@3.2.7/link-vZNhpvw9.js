import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { t as i } from "./Link-BxYXBw9T.js";
import { t as a } from "./assertion-CKDD-Pvc.js";
import { r as o, t as s } from "./compose-ClIOcrt6.js";
import { t as c } from "./dom-CdwaDRL5.js";
import { r as l } from "./icons-BUH88Ubz.js";
// node_modules/@heroui/styles/dist/components/link/link.styles.js
var u = e({ slots: {
	base: "link",
	icon: "link__icon"
} }), d = /* @__PURE__ */ t(n(), 1), f = r(), p = /*#__PURE__*/ (0, d.createContext)({}), m = ({ children: e, className: t, ...n }) => {
	let r = d.useMemo(() => u(), []), a = d.useMemo(() => ({ slots: r }), [r]);
	return /*#__PURE__*/ (0, f.jsx)(p, {
		value: a,
		children: /*#__PURE__*/ (0, f.jsx)(i, {
			"data-slot": "link",
			...n,
			className: o(t, r?.base()),
			children: e
		})
	});
};
m.displayName = "HeroUI.Link";
var h = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, d.use)(p);
	return /*#__PURE__*/ (0, f.jsx)(c.span, {
		className: s(r?.icon, t),
		"data-default-icon": a(!e),
		"data-slot": "link-icon",
		...n,
		children: e ?? /*#__PURE__*/ (0, f.jsx)(l, { "data-slot": "link-default-icon" })
	});
};
h.displayName = "HeroUI.Link.Icon";
// node_modules/@heroui/react/dist/components/link/index.js
var g = Object.assign(m, {
	Root: m,
	Icon: h
});
export { g as t };
