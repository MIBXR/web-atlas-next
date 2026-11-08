import { t as e } from "./useControlledState-BbVlCDcL.js";
import { i as t, n } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-stately/dist/private/toggle/useToggleState.mjs
var r = /* @__PURE__ */ t(n(), 1);
function i(t = {}) {
	let { isReadOnly: n } = t, [i, a] = e(t.isSelected, t.defaultSelected || !1, t.onChange), [o] = (0, r.useState)(i);
	function s(e) {
		n || a(e);
	}
	function c() {
		n || a(!i);
	}
	return {
		isSelected: i,
		defaultSelected: t.defaultSelected ?? o,
		setSelected: s,
		toggle: c
	};
}
export { i as t };
