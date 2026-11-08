import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { o as n, s as r, u as i } from "./useRenderElement-Bc91YjHo.js";
import { t as a } from "./useIsoLayoutEffect-B0B6th0o.js";
// node_modules/@base-ui/react/field/control/FieldControlDataAttributes.mjs
var o = /* @__PURE__ */ e(t(), 1), s = /*#__PURE__*/ function(e) {
	return e.disabled = "data-disabled", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.filled = "data-filled", e.focused = "data-focused", e;
}({}), c = {
	badInput: !1,
	customError: !1,
	patternMismatch: !1,
	rangeOverflow: !1,
	rangeUnderflow: !1,
	stepMismatch: !1,
	tooLong: !1,
	tooShort: !1,
	typeMismatch: !1,
	valid: null,
	valueMissing: !1
}, l = {
	valid: null,
	touched: !1,
	dirty: !1,
	filled: !1,
	focused: !1
}, u = {
	disabled: !1,
	...l
}, d = { valid(e) {
	return e === null ? null : e ? { [s.valid]: "" } : { [s.invalid]: "" };
} }, f = {
	invalid: void 0,
	name: void 0,
	validityData: {
		state: c,
		errors: [],
		error: "",
		value: "",
		initialValue: null
	},
	setValidityData: r,
	disabled: void 0,
	touched: l.touched,
	setTouched: r,
	dirty: l.dirty,
	setDirty: r,
	filled: l.filled,
	setFilled: r,
	focused: l.focused,
	setFocused: r,
	validate: () => null,
	validationMode: "onSubmit",
	validationDebounceTime: 0,
	shouldValidateOnChange: () => !1,
	state: u,
	markedDirtyRef: { current: !1 },
	registerFieldControl: r,
	validation: {
		getValidationProps: (e, t = n) => t,
		inputRef: { current: null },
		registerInput: r,
		commit: async () => {},
		change: r
	}
}, p = /*#__PURE__*/ o.createContext(f);
function m(e = !0) {
	let t = o.useContext(p);
	if (t.setValidityData === r && !e) throw Error(i(28));
	return t;
}
// node_modules/@base-ui/react/internals/form-context/FormContext.mjs
var h = /*#__PURE__*/ o.createContext({
	formRef: { current: { fields: /* @__PURE__ */ new Map() } },
	errors: {},
	clearErrors: r,
	validationMode: "onSubmit",
	submitAttemptedRef: { current: !1 }
});
function g() {
	return o.useContext(h);
}
// node_modules/@base-ui/react/internals/labelable-provider/LabelableContext.mjs
var _ = /*#__PURE__*/ o.createContext({
	controlId: void 0,
	registerControlId: r,
	labelId: void 0,
	setLabelId: r,
	messageIds: [],
	setMessageIds: r,
	getDescriptionProps: (e) => e
});
function v() {
	return o.useContext(_);
}
// node_modules/@base-ui/react/internals/field-register-control/useRegisterFieldControl.mjs
function y(e, t, n, r, i = !0, s) {
	let { registerFieldControl: c } = m(), l = o.useRef(null);
	l.current ||= Symbol(), a(() => {
		let a = l.current;
		if (a && i) return c(a, {
			controlRef: e,
			getValue: r,
			id: t,
			name: s,
			value: n
		}), () => {
			c(a, void 0);
		};
	}, [
		e,
		i,
		r,
		t,
		s,
		c,
		n
	]);
}
export { p as a, d as c, f as i, v as n, m as o, g as r, l as s, y as t };
