import { n as e, s as t } from "./utils-UBVJ5JR_.js";
import { n } from "./useFormValidation-NZK9JasV.js";
import { i as r, n as i } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria-components/dist/private/Form.mjs
var a = /* @__PURE__ */ r(i(), 1), o = /*#__PURE__*/ (0, a.createContext)(null), s = /*#__PURE__*/ (0, a.forwardRef)(function(r, i) {
	[r, i] = e(r, i, o);
	let { validationErrors: s, validationBehavior: c = "native", children: l, className: u, ...d } = r;
	return /*#__PURE__*/ a.createElement(t.form, {
		noValidate: c !== "native",
		...d,
		ref: i,
		className: u || "react-aria-Form"
	}, /*#__PURE__*/ a.createElement(o.Provider, { value: {
		...r,
		validationBehavior: c
	} }, /*#__PURE__*/ a.createElement(n.Provider, { value: s ?? {} }, l)));
});
export { o as n, s as t };
