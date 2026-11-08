import { r as e } from "./utils-UBVJ5JR_.js";
import { t } from "./Text-CEDDBTEL.js";
import { t as n } from "./filterDOMProps-CJYy6efO.js";
import { i as r, n as i } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria-components/dist/private/FieldError.mjs
var a = /* @__PURE__ */ r(i(), 1), o = /*#__PURE__*/ (0, a.createContext)(null), s = /*#__PURE__*/ (0, a.forwardRef)(function(e, t) {
	return (0, a.useContext)(o)?.isInvalid ? /*#__PURE__*/ a.createElement(c, {
		...e,
		ref: t
	}) : null;
}), c = /*#__PURE__*/ (0, a.forwardRef)((r, i) => {
	let s = (0, a.useContext)(o), { elementType: c, ...l } = r, u = n(l, { global: !0 }), d = e({
		...l,
		defaultClassName: "react-aria-FieldError",
		defaultChildren: s.validationErrors.length === 0 ? void 0 : s.validationErrors.join(" "),
		values: s
	});
	return d.children == null ? null : /*#__PURE__*/ a.createElement(t, {
		slot: "errorMessage",
		elementType: c,
		...u,
		...d,
		ref: i
	});
});
export { o as n, s as t };
