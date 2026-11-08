import { t as e } from "./jsx-runtime-lAxUcZjR.js";
import { t } from "./clamp-BEXCFueL.js";
function n(e, t) {
	return Math.max(0, e - t);
}
function r(e, n) {
	if (n <= 0) return 0;
	let r = t(e, 0, n), i = r, a = n - r, o = i <= 1, s = a <= 1;
	return o && s ? i <= a ? 0 : n : o ? 0 : s ? n : r;
}
// node_modules/@base-ui/react/utils/styles.mjs
var i = e(), a = "base-ui-disable-scrollbar", o = {
	className: a,
	getElement(e) {
		return /*#__PURE__*/ (0, i.jsx)("style", {
			nonce: e,
			href: a,
			precedence: "base-ui:low",
			children: `.${a}{scrollbar-width:none}.${a}::-webkit-scrollbar{display:none}`
		});
	}
};
export { n, r, o as t };
