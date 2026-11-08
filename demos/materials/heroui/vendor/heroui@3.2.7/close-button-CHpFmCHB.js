import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i, t as a } from "./Button-Cnex0dS4.js";
import { l as o } from "./utils-UBVJ5JR_.js";
import { t as s } from "./icons-BUH88Ubz.js";
import { r as c } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/close-button/close-button.styles.js
var l = e({
	base: "close-button",
	defaultVariants: { variant: "default" },
	variants: { variant: { default: "close-button--default" } }
}), u = /* @__PURE__ */ t(n(), 1), d = r(), f = ({ "aria-label": e, children: t, className: n, slot: r, style: f, variant: p, ...m }) => {
	let h = (0, u.useMemo)(() => l({ variant: p }), [p]), g = o(a, r), _ = e ?? (m["aria-labelledby"] != null || g != null && (g["aria-label"] != null || g["aria-labelledby"] != null) ? void 0 : "Close");
	return /*#__PURE__*/ (0, d.jsx)(i, {
		"aria-label": _,
		className: c(n, h),
		"data-slot": "close-button",
		slot: r,
		style: f,
		type: "button",
		...m,
		children: typeof t == "function" ? t : t ?? /*#__PURE__*/ (0, d.jsx)(s, { "data-slot": "close-button-icon" })
	});
};
f.displayName = "HeroUI.CloseButton";
// node_modules/@heroui/react/dist/components/close-button/index.js
var p = Object.assign(f, { Root: f });
export { p as t };
