import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { a as i, i as a, l as o, n as s, o as c, r as l, t as u } from "./date-input-group-C8SQNwkE.js";
import { t as d } from "./assertion-CKDD-Pvc.js";
import { r as f } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/date-field/date-field.styles.js
var p = e({
	base: "date-field",
	defaultVariants: { fullWidth: !1 },
	variants: { fullWidth: {
		false: "",
		true: "date-field--full-width"
	} }
}), m = /* @__PURE__ */ t(n(), 1), h = r();
function g({ children: e, className: t, fullWidth: n, ...r }) {
	let i = m.useMemo(() => p({ fullWidth: n }), [n]);
	return /*#__PURE__*/ (0, h.jsx)(o, {
		"data-required": d(r.isRequired),
		"data-slot": "date-field",
		...r,
		className: f(t, i),
		children: e
	});
}
g.displayName = "HeroUI.DateField";
// node_modules/@heroui/react/dist/components/date-field/index.js
var _ = Object.assign(g, {
	Root: g,
	Group: a,
	Input: u,
	InputContainer: s,
	Segment: i,
	Prefix: l,
	Suffix: c
});
export { _ as t };
