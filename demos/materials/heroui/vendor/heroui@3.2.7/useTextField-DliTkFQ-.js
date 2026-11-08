import { t as e } from "./filterDOMProps-CJYy6efO.js";
import { S as t } from "./useKeyboard-CqNSkGJ-.js";
import { d as n } from "./utils-UBVJ5JR_.js";
import { t as r } from "./useField-CfrwMMou.js";
import { n as i } from "./useFocusable-D0mnHSRC.js";
import { t as a } from "./useFormReset-DizqO0T1.js";
import { s as o, t as s } from "./useFormValidation-NZK9JasV.js";
import { i as c, n as l } from "./jsx-runtime-C1t0izHF.js";
import { t as u } from "./useControlledState-BbVlCDcL.js";
// node_modules/react-aria/dist/private/textfield/useTextField.mjs
var d = /* @__PURE__ */ c(l(), 1);
function f(c, l) {
	let { inputElementType: f = "input", isDisabled: p = !1, isRequired: m = !1, isReadOnly: h = !1, type: g = "text", validationBehavior: _ = "aria" } = c, [v, y] = u(c.value, c.defaultValue || "", c.onChange), { focusableProps: b } = i(c, l), x = o({
		...c,
		value: v
	}), { isInvalid: S, validationErrors: C, validationDetails: w } = x.displayValidation, { labelProps: T, fieldProps: E, descriptionProps: D, errorMessageProps: O } = r({
		...c,
		isInvalid: S,
		errorMessage: c.errorMessage || C
	}), k = e(c, { labelable: !0 }), A = {
		type: g,
		pattern: c.pattern
	}, [j] = (0, d.useState)(v);
	return a(l, c.defaultValue ?? j, y), s(c, x, l), {
		labelProps: T,
		inputProps: n(k, f === "input" ? A : void 0, {
			disabled: p,
			readOnly: h,
			required: m && _ === "native",
			"aria-required": m && _ === "aria" || void 0,
			"aria-invalid": S || void 0,
			"aria-errormessage": c["aria-errormessage"],
			"aria-activedescendant": c["aria-activedescendant"],
			"aria-autocomplete": c["aria-autocomplete"],
			"aria-haspopup": c["aria-haspopup"],
			"aria-controls": c["aria-controls"],
			value: v,
			onChange: (e) => y(t(e).value),
			autoComplete: c.autoComplete,
			autoCapitalize: c.autoCapitalize,
			maxLength: c.maxLength,
			minLength: c.minLength,
			name: c.name,
			form: c.form,
			placeholder: c.placeholder,
			inputMode: c.inputMode,
			autoCorrect: c.autoCorrect,
			spellCheck: c.spellCheck,
			enterKeyHint: c.enterKeyHint,
			onCopy: c.onCopy,
			onCut: c.onCut,
			onPaste: c.onPaste,
			onCompositionEnd: c.onCompositionEnd,
			onCompositionStart: c.onCompositionStart,
			onCompositionUpdate: c.onCompositionUpdate,
			onSelect: c.onSelect,
			onBeforeInput: c.onBeforeInput,
			onInput: c.onInput,
			...b,
			...E
		}),
		descriptionProps: D,
		errorMessageProps: O,
		isInvalid: S,
		validationErrors: C,
		validationDetails: w
	};
}
export { f as t };
