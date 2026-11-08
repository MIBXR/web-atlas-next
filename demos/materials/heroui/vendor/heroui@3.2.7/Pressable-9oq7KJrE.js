import { d as e, u as t } from "./utils-UBVJ5JR_.js";
import { r as n } from "./dist-qnEEIXtT.js";
import { t as r } from "./usePress-C9PowRxI.js";
import { n as i } from "./useFocusable-D0mnHSRC.js";
import { i as a, n as o } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/interactions/Pressable.mjs
var s = /* @__PURE__ */ a(o(), 1), c = /*#__PURE__*/ s.forwardRef(({ children: a, ...o }, c) => {
	c = t(c);
	let { pressProps: l } = r({
		...o,
		ref: c
	}), { focusableProps: u } = i(o, c), d = s.Children.only(a);
	(0, s.useEffect)(() => {}, [c, o.isDisabled]);
	let f = d.props.ref;
	return /*#__PURE__*/ s.cloneElement(d, {
		...e(l, u, d.props),
		ref: n(f, c)
	});
});
export { c as t };
