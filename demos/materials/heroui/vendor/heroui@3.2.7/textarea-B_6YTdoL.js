import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { r as i, t as a } from "./textfield-DBeG7ze6.js";
import { r as o } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/textarea/textarea.styles.js
var s = e({
	base: "textarea",
	defaultVariants: {
		fullWidth: !1,
		variant: "primary"
	},
	variants: {
		fullWidth: {
			false: "",
			true: "textarea--full-width"
		},
		variant: {
			primary: "textarea--primary",
			secondary: "textarea--secondary"
		}
	}
}), c = /* @__PURE__ */ t(n(), 1), l = r(), u = ({ className: e, fullWidth: t, variant: n, ...r }) => {
	let u = (0, c.use)(a), d = n ?? u?.variant, f = (0, c.useMemo)(() => s({
		fullWidth: t,
		variant: d
	}), [t, d]), p = o(e, f);
	return /*#__PURE__*/ (0, l.jsx)(i, {
		className: p,
		"data-slot": "textarea",
		...r
	});
};
u.displayName = "HeroUI.TextArea";
// node_modules/@heroui/react/dist/components/textarea/index.js
var d = Object.assign(u, { Root: u });
export { d as t };
