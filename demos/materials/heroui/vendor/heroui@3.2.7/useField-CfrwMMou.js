import { t as e } from "./useLabel-xEmSShhj.js";
import { d as t, p as n } from "./utils-UBVJ5JR_.js";
// node_modules/react-aria/dist/private/label/useField.mjs
function r(r) {
	let { description: i, errorMessage: a, isInvalid: o, validationState: s } = r, { labelProps: c, fieldProps: l } = e(r), u = n([
		!!i,
		!!a,
		o,
		s
	]), d = n([
		!!i,
		!!a,
		o,
		s
	]);
	return l = t(l, { "aria-describedby": [
		u,
		d,
		r["aria-describedby"]
	].filter(Boolean).join(" ") || void 0 }), {
		labelProps: c,
		fieldProps: l,
		descriptionProps: { id: u },
		errorMessageProps: { id: d }
	};
}
export { r as t };
