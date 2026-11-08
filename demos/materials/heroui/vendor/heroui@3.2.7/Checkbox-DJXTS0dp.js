import { c as e, d as t, i as n, l as r, n as i, r as a, s as o, t as s, u as c } from "./utils-UBVJ5JR_.js";
import { n as l } from "./FieldError-BDRHklqb.js";
import { n as u } from "./Form-BfBA0JpQ.js";
import { t as d } from "./Label-CJNHsoCN.js";
import { n as f } from "./Text-CEDDBTEL.js";
import { t as p } from "./filterDOMProps-CJYy6efO.js";
import { t as m } from "./useField-CfrwMMou.js";
import { n as h, r as g, t as _ } from "./useHover-DxA7bNQs.js";
import { t as v } from "./useToggle-LBfAX9Xd.js";
import { i as y, n as b } from "./jsx-runtime-C1t0izHF.js";
import { i as x, o as S, r as C, s as w } from "./useFormValidation-NZK9JasV.js";
import { t as T } from "./useToggleState-COCZgzVz.js";
import { t as E } from "./useControlledState-BbVlCDcL.js";
import { r as D } from "./dist-qnEEIXtT.js";
import { t as O } from "./VisuallyHidden-CRCgxFfe.js";
// node_modules/react-aria/dist/private/checkbox/utils.mjs
var k = /* @__PURE__ */ new WeakMap();
// node_modules/react-aria/dist/private/checkbox/useCheckboxGroup.mjs
function A(e, n) {
	let { isDisabled: r, name: i, form: a, validationBehavior: o = "aria" } = e, { isInvalid: s, validationErrors: c, validationDetails: l } = n.displayValidation, { labelProps: u, fieldProps: d, descriptionProps: f, errorMessageProps: h } = m({
		...e,
		labelElementType: "span",
		isInvalid: s,
		errorMessage: e.errorMessage || c
	});
	k.set(n, {
		name: i,
		form: a,
		descriptionId: f.id,
		errorMessageId: h.id,
		validationBehavior: o
	});
	let _ = p(e, { labelable: !0 }), { focusWithinProps: v } = g({
		onBlurWithin: e.onBlur,
		onFocusWithin: e.onFocus,
		onFocusWithinChange: e.onFocusChange
	});
	return {
		groupProps: t(_, {
			role: "group",
			"aria-disabled": r || void 0,
			...d,
			...v
		}),
		labelProps: u,
		descriptionProps: f,
		errorMessageProps: h,
		isInvalid: s,
		validationErrors: c,
		validationDetails: l
	};
}
// node_modules/react-aria/dist/private/checkbox/useCheckbox.mjs
var j = /* @__PURE__ */ y(b(), 1);
function M(e, n, r) {
	let { labelProps: i, inputProps: a, descriptionProps: o, errorMessageProps: s, isSelected: c, isPressed: l, isDisabled: u, isReadOnly: d, isInvalid: f, validationErrors: p, validationDetails: m } = v(e, n, r), { isIndeterminate: h } = e;
	return (0, j.useEffect)(() => {
		r.current && (r.current.indeterminate = !!h);
	}), {
		labelProps: t(i, (0, j.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), [])),
		inputProps: a,
		descriptionProps: o,
		errorMessageProps: s,
		isSelected: c,
		isPressed: l,
		isDisabled: u,
		isReadOnly: d,
		isInvalid: f,
		validationErrors: p,
		validationDetails: m
	};
}
// node_modules/react-aria/dist/private/checkbox/useCheckboxGroupItem.mjs
function N(e, t, n) {
	let r = T({
		isReadOnly: e.isReadOnly || t.isReadOnly,
		isSelected: t.isSelected(e.value),
		defaultSelected: t.defaultValue.includes(e.value),
		onChange(n) {
			n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n);
		}
	}), { name: i, form: a, descriptionId: o, errorMessageId: s, validationBehavior: c } = k.get(t);
	c = e.validationBehavior ?? c;
	let { realtimeValidation: l } = w({
		...e,
		value: r.isSelected,
		name: void 0,
		validationBehavior: "aria"
	}), u = (0, j.useRef)(S), d = () => {
		t.setInvalid(e.value, l.isInvalid ? l : u.current);
	};
	(0, j.useEffect)(d);
	let f = t.realtimeValidation.isInvalid ? t.realtimeValidation : l, p = c === "native" ? t.displayValidation : f, m = M({
		...e,
		isReadOnly: e.isReadOnly || t.isReadOnly,
		isDisabled: e.isDisabled || t.isDisabled,
		name: e.name || i,
		form: e.form || a,
		isRequired: e.isRequired ?? t.isRequired,
		validationBehavior: c,
		[x]: {
			realtimeValidation: f,
			displayValidation: p,
			resetValidation: t.resetValidation,
			commitValidation: t.commitValidation,
			updateValidation(e) {
				u.current = e, d();
			}
		}
	}, r, n);
	return {
		...m,
		inputProps: {
			...m.inputProps,
			"aria-describedby": [
				m.inputProps["aria-describedby"],
				t.isInvalid ? s : null,
				o
			].filter(Boolean).join(" ") || void 0
		}
	};
}
// node_modules/react-stately/dist/private/checkbox/useCheckboxGroupState.mjs
function P(e = {}) {
	let [t, n] = E(e.value, e.defaultValue || [], e.onChange), [r] = (0, j.useState)(t), i = !!e.isRequired && t.length === 0, a = (0, j.useRef)(/* @__PURE__ */ new Map()), o = w({
		...e,
		value: t
	}), s = o.displayValidation.isInvalid;
	return {
		...o,
		value: t,
		defaultValue: e.defaultValue ?? r,
		setValue(t) {
			e.isReadOnly || e.isDisabled || n(t);
		},
		isDisabled: e.isDisabled || !1,
		isReadOnly: e.isReadOnly || !1,
		isSelected(e) {
			return t.includes(e);
		},
		addValue(t) {
			e.isReadOnly || e.isDisabled || n((e) => e.includes(t) ? e : e.concat(t));
		},
		removeValue(r) {
			e.isReadOnly || e.isDisabled || t.includes(r) && n(t.filter((e) => e !== r));
		},
		toggleValue(r) {
			e.isReadOnly || e.isDisabled || (t.includes(r) ? n(t.filter((e) => e !== r)) : n(t.concat(r)));
		},
		setInvalid(e, t) {
			let n = new Map(a.current);
			t.isInvalid ? n.set(e, t) : n.delete(e), a.current = n, o.updateValidation(C(...n.values()));
		},
		validationState: e.validationState ?? (s ? "invalid" : null),
		isInvalid: s,
		isRequired: i
	};
}
// node_modules/react-aria-components/dist/private/Checkbox.mjs
var F = /*#__PURE__*/ (0, j.createContext)(null), I = /*#__PURE__*/ (0, j.createContext)(null), L = /*#__PURE__*/ (0, j.createContext)(null), R = /*#__PURE__*/ (0, j.createContext)(null), z = /*#__PURE__*/ (0, j.forwardRef)(function(e, c) {
	[e, c] = i(e, c, L);
	let { validationBehavior: m } = r(u) || {}, h = e.validationBehavior ?? m ?? "native", g = P({
		...e,
		validationBehavior: h
	}), [_, v] = n(!e["aria-label"] && !e["aria-labelledby"]), { groupProps: y, labelProps: b, descriptionProps: x, errorMessageProps: S, ...C } = A({
		...e,
		label: v,
		validationBehavior: h
	}, g), w = a({
		...e,
		values: {
			isDisabled: g.isDisabled,
			isReadOnly: g.isReadOnly,
			isRequired: e.isRequired || !1,
			isInvalid: g.isInvalid,
			state: g
		},
		defaultClassName: "react-aria-CheckboxGroup"
	}), T = p(e, { global: !0 });
	return /*#__PURE__*/ j.createElement(o.div, {
		...t(T, w, y),
		ref: c,
		slot: e.slot || void 0,
		"data-readonly": g.isReadOnly || void 0,
		"data-required": e.isRequired || void 0,
		"data-invalid": g.isInvalid || void 0,
		"data-disabled": e.isDisabled || void 0
	}, /*#__PURE__*/ j.createElement(s, { values: [
		[R, g],
		[d, {
			...b,
			ref: _,
			elementType: "span"
		}],
		[f, { slots: {
			description: x,
			errorMessage: S
		} }],
		[l, C]
	] }, w.children));
}), B = /*#__PURE__*/ (0, j.createContext)(null), V = /*#__PURE__*/ (0, j.forwardRef)(function(e, n) {
	let { inputRef: r = null, ...c } = e;
	[e, n] = i(c, n, I);
	let u = (0, j.useContext)(R), [d, m] = H(e, r), { descriptionProps: h, errorMessageProps: g, isSelected: _, isDisabled: v, isReadOnly: y, isInvalid: b, validationDetails: x, validationErrors: S } = d, C = a({
		...e,
		defaultClassName: "react-aria-CheckboxField",
		values: {
			isSelected: _,
			isIndeterminate: e.isIndeterminate || !1,
			isDisabled: v,
			isReadOnly: y,
			isInvalid: b,
			isRequired: e.isRequired || !1
		}
	}), w = p(e, { global: !0 });
	return delete w.id, delete w.onClick, /*#__PURE__*/ j.createElement(o.div, {
		...t(w, C),
		ref: n,
		slot: e.slot || void 0,
		"data-selected": _ || void 0,
		"data-indeterminate": e.isIndeterminate || void 0,
		"data-disabled": v || void 0,
		"data-readonly": y || void 0,
		"data-invalid": b || void 0,
		"data-required": e.isRequired || void 0
	}, /*#__PURE__*/ j.createElement(s, { values: [
		[B, {
			...d,
			inputRef: m,
			defaultClassName: "react-aria-CheckboxButton",
			isIndeterminate: e.isIndeterminate,
			isRequired: e.isRequired
		}],
		[f, { slots: {
			description: h,
			errorMessage: g
		} }],
		[l, u ? null : {
			isInvalid: b,
			validationDetails: x,
			validationErrors: S
		}]
	] }, C.children));
});
function H(t, n) {
	let { validationBehavior: i } = r(u) || {}, a = t.validationBehavior ?? i ?? "native", o = (0, j.useContext)(R), s = c((0, j.useMemo)(() => D(n, t.inputRef === void 0 ? null : t.inputRef), [n, t.inputRef])), l = {
		...e(t),
		children: typeof t.children == "function" || t.children,
		value: t.value,
		validationBehavior: a
	};
	return [o ? N(l, o, s) : M(l, T(t), s), s];
}
var U = /*#__PURE__*/ (0, j.forwardRef)(function(e, n) {
	let { labelProps: r, inputProps: i, isSelected: s, isDisabled: c, isReadOnly: l, isPressed: u, isInvalid: d, inputRef: f, defaultClassName: m, isIndeterminate: g, isRequired: v } = (0, j.useContext)(B), { isFocused: y, isFocusVisible: b, focusProps: x } = h(), S = c || l, { hoverProps: C, isHovered: w } = _({
		...e,
		isDisabled: S
	}), T = a({
		...e,
		defaultClassName: m,
		values: {
			isSelected: s,
			isIndeterminate: g || !1,
			isPressed: u,
			isHovered: w,
			isFocused: y,
			isFocusVisible: b,
			isDisabled: c,
			isReadOnly: l,
			isInvalid: d,
			isRequired: v || !1
		}
	}), E = p(e, { global: !0 });
	return delete E.id, delete E.onClick, /*#__PURE__*/ j.createElement(o.label, {
		...t(E, r, C, T),
		ref: n,
		slot: e.slot || void 0,
		"data-selected": s || void 0,
		"data-indeterminate": g || void 0,
		"data-pressed": u || void 0,
		"data-hovered": w || void 0,
		"data-focused": y || void 0,
		"data-focus-visible": b || void 0,
		"data-disabled": c || void 0,
		"data-readonly": l || void 0,
		"data-invalid": d || void 0,
		"data-required": v || void 0
	}, /*#__PURE__*/ j.createElement(O, { elementType: "span" }, /*#__PURE__*/ j.createElement("input", {
		...t(i, x),
		ref: f
	})), T.children);
});
export { L as a, F as i, U as n, I as o, V as r, z as t };
