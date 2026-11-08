import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i } from "./ColorSwatch-D-eXJKEM.js";
import { r as a } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/color-swatch/color-swatch.styles.js
var o = e({
	base: "color-swatch",
	defaultVariants: {
		shape: "circle",
		size: "md"
	},
	variants: {
		shape: {
			circle: "color-swatch--circle",
			square: "color-swatch--square"
		},
		size: {
			lg: "color-swatch--lg",
			md: "color-swatch--md",
			sm: "color-swatch--sm",
			xl: "color-swatch--xl",
			xs: "color-swatch--xs"
		}
	}
}), s = /* @__PURE__ */ t(n(), 1), c = r(), l = ({ className: e, shape: t, size: n, style: r, ...l }) => {
	let u = (0, s.useMemo)(() => o({
		shape: t,
		size: n
	}), [t, n]), d = a(e, u);
	return /*#__PURE__*/ (0, c.jsx)(i, {
		...l,
		className: d,
		"data-slot": "color-swatch",
		style: (e) => {
			let t = typeof r == "function" ? r(e) : r;
			return {
				"--color-swatch-current": e.color.toString("css"),
				...t
			};
		}
	});
};
l.displayName = "HeroUI.ColorSwatch";
// node_modules/@heroui/react/dist/components/color-swatch/index.js
var u = Object.assign(l, { Root: l });
export { u as t };
