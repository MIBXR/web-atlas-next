import { t as e } from "./label-Wq1WAbJ3.js";
import { n as t } from "./dist-qnEEIXtT.js";
import { i as n, n as r, t as i } from "./jsx-runtime-C1t0izHF.js";
import { a, i as o, n as s, o as c, r as l, s as u, t as d } from "./date-input-group-C8SQNwkE.js";
import { t as f } from "./assertion-CKDD-Pvc.js";
import { r as p } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/time-field/time-field.styles.js
var m = t({
	base: "time-field",
	defaultVariants: { fullWidth: !1 },
	variants: { fullWidth: {
		false: "",
		true: "time-field--full-width"
	} }
}), h = /* @__PURE__ */ n(r(), 1), g = i();
function _({ children: e, className: t, fullWidth: n, ...r }) {
	let i = h.useMemo(() => m({ fullWidth: n }), [n]);
	return /*#__PURE__*/ (0, g.jsx)(u, {
		"data-required": f(r.isRequired),
		"data-slot": "time-field",
		...r,
		className: p(t, i),
		children: e
	});
}
_.displayName = "HeroUI.TimeField";
// node_modules/@heroui/react/dist/components/time-field/index.js
var v = Object.assign(_, {
	Root: _,
	Group: o,
	Input: d,
	InputContainer: s,
	Segment: a,
	Prefix: l,
	Suffix: c
});
// upstream/demos/en/time-field/basic.tsx
function y() {
	return /* @__PURE__ */ (0, g.jsxs)(v, {
		className: "w-[256px]",
		name: "time",
		children: [/* @__PURE__ */ (0, g.jsx)(e, { children: "Time" }), /* @__PURE__ */ (0, g.jsx)(v.Group, { children: /* @__PURE__ */ (0, g.jsx)(v.Input, { children: (e) => /* @__PURE__ */ (0, g.jsx)(v.Segment, { segment: e }) }) })]
	});
}
export { y as Basic };
