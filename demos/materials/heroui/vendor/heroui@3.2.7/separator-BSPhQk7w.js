import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i, t as a } from "./Separator-CZCR6UjL.js";
import { l as o } from "./utils-UBVJ5JR_.js";
// node_modules/@heroui/styles/dist/components/separator/separator.styles.js
var s = e({
	base: "separator",
	defaultVariants: {
		orientation: "horizontal",
		variant: "default"
	},
	variants: {
		orientation: {
			horizontal: "separator--horizontal",
			vertical: "separator--vertical"
		},
		variant: {
			default: "separator--default",
			secondary: "separator--secondary",
			tertiary: "separator--tertiary"
		}
	}
}), c = /* @__PURE__ */ t(n(), 1), l = r(), u = ({ className: e, isDecorative: t = !1, orientation: n, render: r, variant: u, ...d }) => {
	let f = o(i, d.slot), p = r ?? f?.render, m = n ?? f?.orientation ?? "horizontal", h = d.elementType ?? f?.elementType ?? "div", g = (0, c.useMemo)(() => s({
		className: e,
		orientation: m,
		variant: u
	}), [
		e,
		m,
		u
	]);
	return /*#__PURE__*/ (0, l.jsx)(a, {
		className: g,
		"data-orientation": m,
		"data-slot": "separator",
		orientation: m,
		...d,
		render: t ? (e, t) => {
			let n = {
				...e,
				"aria-hidden": !0,
				"aria-orientation": void 0,
				role: "presentation"
			};
			return p ? p(n, t) : /*#__PURE__*/ c.createElement(h === "hr" && m === "vertical" ? "div" : h, n);
		} : r
	});
};
u.displayName = "HeroUI.Separator";
// node_modules/@heroui/react/dist/components/separator/index.js
var d = Object.assign(u, { Root: u });
export { d as t };
