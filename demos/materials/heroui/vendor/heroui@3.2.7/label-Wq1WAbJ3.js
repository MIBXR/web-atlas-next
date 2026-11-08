import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i } from "./Label-CJNHsoCN.js";
// node_modules/@heroui/styles/dist/components/label/label.styles.js
var a = e({
	base: "label",
	defaultVariants: {
		isDisabled: !1,
		isInvalid: !1,
		isRequired: !1
	},
	variants: {
		isDisabled: { true: "label--disabled" },
		isInvalid: { true: "label--invalid" },
		isRequired: { true: "label--required" }
	}
}), o = /* @__PURE__ */ t(n(), 1), s = r(), c = ({ children: e, className: t, isDisabled: n, isInvalid: r, isRequired: c, ...l }) => {
	let u = (0, o.useMemo)(() => a({
		className: t,
		isDisabled: n,
		isInvalid: r,
		isRequired: c
	}), [
		t,
		n,
		r,
		c
	]);
	return /*#__PURE__*/ (0, s.jsx)(i, {
		className: u,
		"data-slot": "label",
		...l,
		children: e
	});
};
c.displayName = "HeroUI.Label";
// node_modules/@heroui/react/dist/components/label/index.js
var l = Object.assign(c, { Root: c });
export { l as t };
