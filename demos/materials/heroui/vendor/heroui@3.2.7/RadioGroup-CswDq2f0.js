import { c as e, d as t, i as n, l as r, m as i, n as a, r as o, s, t as c, u as l } from "./utils-UBVJ5JR_.js";
import { n as u } from "./FieldError-BDRHklqb.js";
import { n as d } from "./Form-BfBA0JpQ.js";
import { t as f } from "./Label-CJNHsoCN.js";
import { n as p } from "./SelectionIndicator-C43cTdGN.js";
import { t as m } from "./SharedElementTransition-C1TNSLy6.js";
import { n as h } from "./Text-CEDDBTEL.js";
import { t as g } from "./filterDOMProps-CJYy6efO.js";
import { D as _, S as v, t as y } from "./useKeyboard-CqNSkGJ-.js";
import { r as b } from "./FocusScope-C6wAY3W6.js";
import { t as x } from "./useField-CfrwMMou.js";
import { n as S, r as C, t as w } from "./useHover-DxA7bNQs.js";
import { t as T } from "./I18nProvider-zGzu-4zN.js";
import { n as E } from "./useFocusable-D0mnHSRC.js";
import { t as D } from "./useFormReset-DizqO0T1.js";
import { s as O, t as k } from "./useFormValidation-NZK9JasV.js";
import { t as A } from "./usePress-C9PowRxI.js";
import { t as j } from "./useSlot-Bg_cubCK.js";
import { i as M, n as N } from "./jsx-runtime-C1t0izHF.js";
import { r as P } from "./dist-qnEEIXtT.js";
import { t as F } from "./useControlledState-BbVlCDcL.js";
import { t as I } from "./VisuallyHidden-CRCgxFfe.js";
// node_modules/react-aria/dist/private/radio/utils.mjs
var L = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ M(N(), 1);
function z(e, n, r) {
	let { value: i, children: a, "aria-label": o, "aria-labelledby": s, onPressStart: c, onPressEnd: l, onPressChange: u, onPress: d, onPressUp: f, onClick: p } = e, m = e.isDisabled || n.isDisabled, h = n.selectedValue === i, _ = (e) => {
		e.stopPropagation(), n.setSelectedValue(i);
	}, { pressProps: v, isPressed: y } = A({
		onPressStart: c,
		onPressEnd: l,
		onPressChange: u,
		onPress: d,
		onPressUp: f,
		onClick: p,
		isDisabled: m
	}), { pressProps: b, isPressed: x } = A({
		onPressStart: c,
		onPressEnd: l,
		onPressChange: u,
		onPressUp: f,
		onClick: p,
		isDisabled: m,
		onPress(e) {
			d?.(e), n.setSelectedValue(i), r.current?.focus();
		}
	}), { focusableProps: S } = E(t(e, { onFocus: () => n.setLastFocusedValue(i) }), r), C = t(v, S), w = g(e, { labelable: !0 }), T = -1;
	n.selectedValue == null ? (n.lastFocusedValue === i || n.lastFocusedValue == null) && (T = 0) : n.selectedValue === i && (T = 0), m && (T = void 0);
	let { name: O, form: M, descriptionId: N, errorMessageId: P, validationBehavior: F } = L.get(n);
	D(r, n.defaultSelectedValue, n.setSelectedValue), k({ validationBehavior: F }, n, r);
	let I = j();
	return {
		labelProps: t(b, (0, R.useMemo)(() => ({
			onClick: (e) => e.preventDefault(),
			onMouseDown: (e) => e.preventDefault()
		}), [])),
		inputProps: t(w, {
			...C,
			type: "radio",
			name: O,
			form: M,
			tabIndex: T,
			disabled: m,
			required: n.isRequired && F === "native",
			checked: h,
			value: i,
			onChange: _,
			"aria-describedby": [
				e["aria-describedby"],
				I.id,
				n.isInvalid ? P : null,
				N
			].filter(Boolean).join(" ") || void 0
		}),
		descriptionProps: I,
		isDisabled: m,
		isSelected: h,
		isPressed: y || x
	};
}
// node_modules/react-aria/dist/private/radio/useRadioGroup.mjs
function B(e, n) {
	let { name: r, form: a, isReadOnly: o, isRequired: s, isDisabled: c, orientation: l = "vertical", validationBehavior: u = "aria" } = e, { direction: d } = T(), { isInvalid: f, validationErrors: p, validationDetails: m } = n.displayValidation, { labelProps: h, fieldProps: S, descriptionProps: w, errorMessageProps: E } = x({
		...e,
		labelElementType: "span",
		isInvalid: n.isInvalid,
		errorMessage: e.errorMessage || p
	}), D = g(e, { labelable: !0 }), { focusWithinProps: O } = C({
		onBlurWithin(t) {
			e.onBlur?.(t), n.selectedValue || n.setLastFocusedValue(null);
		},
		onFocusWithin: e.onFocus,
		onFocusWithinChange: e.onFocusChange
	});
	function k(e, t) {
		let r = b(t.currentTarget, {
			from: v(t),
			accept: (e) => e instanceof _(e).HTMLInputElement && e.type === "radio"
		}), i;
		return e === "next" ? (i = r.nextNode(), i ||= (r.currentNode = t.currentTarget, r.firstChild())) : (i = r.previousNode(), i ||= (r.currentNode = t.currentTarget, r.lastChild())), i ? (i.focus(), n.setSelectedValue(i.value), !0) : !1;
	}
	let { keyboardProps: A } = y({
		shortcuts: {
			ArrowRight: (e) => k(d === "rtl" && l !== "vertical" ? "prev" : "next", e),
			ArrowLeft: (e) => k(d === "rtl" && l !== "vertical" ? "next" : "prev", e),
			ArrowDown: (e) => k("next", e),
			ArrowUp: (e) => k("prev", e)
		},
		allowRepeats: !0
	}), j = i(r);
	return L.set(n, {
		name: j,
		form: a,
		descriptionId: w.id,
		errorMessageId: E.id,
		validationBehavior: u
	}), {
		radioGroupProps: t(D, {
			role: "radiogroup",
			...A,
			"aria-invalid": n.isInvalid || void 0,
			"aria-errormessage": e["aria-errormessage"],
			"aria-readonly": o || void 0,
			"aria-required": s || void 0,
			"aria-disabled": c || void 0,
			"aria-orientation": l,
			...S,
			...O
		}),
		labelProps: h,
		descriptionProps: w,
		errorMessageProps: E,
		isInvalid: f,
		validationErrors: p,
		validationDetails: m
	};
}
// node_modules/react-stately/dist/private/radio/useRadioGroupState.mjs
var V = Math.round(Math.random() * 1e10), H = 0;
function U(e) {
	let t = (0, R.useMemo)(() => e.name || `radio-group-${V}-${++H}`, [e.name]), [n, r] = F(e.value, e.defaultValue ?? null, e.onChange), [i] = (0, R.useState)(n), [a, o] = (0, R.useState)(null), s = O({
		...e,
		value: n
	}), c = (t) => {
		!e.isReadOnly && !e.isDisabled && (r(t), s.commitValidation());
	}, l = s.displayValidation.isInvalid;
	return {
		...s,
		name: t,
		selectedValue: n,
		defaultSelectedValue: e.value === void 0 ? e.defaultValue ?? null : i,
		setSelectedValue: c,
		lastFocusedValue: a,
		setLastFocusedValue: o,
		isDisabled: e.isDisabled || !1,
		isReadOnly: e.isReadOnly || !1,
		isRequired: e.isRequired || !1,
		validationState: e.validationState || (l ? "invalid" : null),
		isInvalid: l
	};
}
// node_modules/react-aria-components/dist/private/RadioGroup.mjs
var W = /*#__PURE__*/ (0, R.createContext)(null), G = /*#__PURE__*/ (0, R.createContext)(null), K = /*#__PURE__*/ (0, R.createContext)(null), q = /*#__PURE__*/ (0, R.forwardRef)(function(e, i) {
	[e, i] = a(e, i, W);
	let { validationBehavior: l } = r(d) || {}, p = e.validationBehavior ?? l ?? "native", _ = U({
		...e,
		validationBehavior: p
	}), [v, y] = n(!e["aria-label"] && !e["aria-labelledby"]), { radioGroupProps: b, labelProps: x, descriptionProps: S, errorMessageProps: C, ...w } = B({
		...e,
		label: y,
		validationBehavior: p
	}, _), T = o({
		...e,
		values: {
			orientation: e.orientation || "vertical",
			isDisabled: _.isDisabled,
			isReadOnly: _.isReadOnly,
			isRequired: _.isRequired,
			isInvalid: _.isInvalid,
			state: _
		},
		defaultClassName: "react-aria-RadioGroup"
	}), E = g(e, { global: !0 });
	return /*#__PURE__*/ R.createElement(s.div, {
		...t(E, T, b),
		ref: i,
		slot: e.slot || void 0,
		"data-orientation": e.orientation || "vertical",
		"data-invalid": _.isInvalid || void 0,
		"data-disabled": _.isDisabled || void 0,
		"data-readonly": _.isReadOnly || void 0,
		"data-required": _.isRequired || void 0
	}, /*#__PURE__*/ R.createElement(c, { values: [
		[K, _],
		[f, {
			...x,
			ref: v,
			elementType: "span"
		}],
		[h, { slots: {
			description: S,
			errorMessage: C
		} }],
		[u, w]
	] }, /*#__PURE__*/ R.createElement(m, null, T.children)));
}), J = /*#__PURE__*/ (0, R.createContext)(null), Y = /*#__PURE__*/ (0, R.forwardRef)(function(n, r) {
	let { inputRef: i = null, ...u } = n;
	[n, r] = a(u, r, G);
	let d = R.useContext(K), f = l((0, R.useMemo)(() => P(i, n.inputRef === void 0 ? null : n.inputRef), [i, n.inputRef])), m = z({
		...e(n),
		children: typeof n.children == "function" || n.children
	}, d, f), { descriptionProps: _, isSelected: v, isDisabled: y } = m, b = o({
		...n,
		defaultClassName: "react-aria-RadioField",
		values: {
			isSelected: v,
			isDisabled: y,
			isReadOnly: d.isReadOnly,
			isInvalid: d.isInvalid,
			isRequired: d.isRequired
		}
	}), x = g(n, { global: !0 });
	return delete x.id, delete x.onClick, /*#__PURE__*/ R.createElement(s.div, {
		...t(x, b),
		ref: r,
		"data-selected": v || void 0,
		"data-disabled": y || void 0,
		"data-readonly": d.isReadOnly || void 0,
		"data-invalid": d.isInvalid || void 0,
		"data-required": d.isRequired || void 0
	}, /*#__PURE__*/ R.createElement(c, { values: [
		[p, { isSelected: v }],
		[J, {
			...m,
			inputRef: f,
			defaultClassName: "react-aria-RadioButton"
		}],
		[h, { slots: { description: _ } }]
	] }, b.children));
}), X = /*#__PURE__*/ (0, R.forwardRef)(function(e, n) {
	let { labelProps: r, inputProps: i, isSelected: a, isDisabled: c, isPressed: l, defaultClassName: u, inputRef: d } = (0, R.useContext)(J), f = R.useContext(K), { isFocused: p, isFocusVisible: m, focusProps: h } = S(), _ = c || f.isReadOnly, { hoverProps: v, isHovered: y } = w({
		...e,
		isDisabled: _
	}), b = o({
		...e,
		defaultClassName: u,
		values: {
			isSelected: a,
			isPressed: l,
			isHovered: y,
			isFocused: p,
			isFocusVisible: m,
			isDisabled: c,
			isReadOnly: f.isReadOnly,
			isInvalid: f.isInvalid,
			isRequired: f.isRequired
		}
	}), x = g(e, { global: !0 });
	return delete x.id, delete x.onClick, /*#__PURE__*/ R.createElement(s.label, {
		...t(x, r, v, b),
		ref: n,
		"data-selected": a || void 0,
		"data-pressed": l || void 0,
		"data-hovered": y || void 0,
		"data-focused": p || void 0,
		"data-focus-visible": m || void 0,
		"data-disabled": c || void 0,
		"data-readonly": f.isReadOnly || void 0,
		"data-invalid": f.isInvalid || void 0,
		"data-required": f.isRequired || void 0
	}, /*#__PURE__*/ R.createElement(I, { elementType: "span" }, /*#__PURE__*/ R.createElement("input", {
		...t(i, h),
		ref: d
	})), b.children);
});
export { X as i, W as n, q as r, Y as t };
