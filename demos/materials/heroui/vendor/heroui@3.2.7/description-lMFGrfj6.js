import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { t as i } from "./Text-CEDDBTEL.js";
import { n as a } from "./use-has-text-slot-D2WxsmuX.js";
// node_modules/@heroui/styles/dist/components/description/description.styles.js
var o = e({ base: "description" }), s = /* @__PURE__ */ t(n(), 1), c = r(), l = ({ children: e, className: t, ...n }) => {
	let r = (0, s.useMemo)(() => o({ className: t }), [t]);
	return a("description") ? /*#__PURE__*/ (0, c.jsx)(i, {
		className: r,
		"data-slot": "description",
		slot: "description",
		...n,
		children: e
	}) : null;
};
l.displayName = "HeroUI.Description";
// node_modules/@heroui/react/dist/components/description/index.js
var u = Object.assign(l, { Root: l });
export { u as t };
