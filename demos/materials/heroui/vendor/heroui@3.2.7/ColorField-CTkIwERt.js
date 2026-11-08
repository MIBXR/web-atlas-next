import { c as e, d as t, i as n, m as r, n as i, r as a, s as o, t as s } from "./utils-UBVJ5JR_.js";
import { n as c } from "./FieldError-BDRHklqb.js";
import { n as l } from "./Group-VeeQ5avm.js";
import { t as u } from "./Input-DWAXtMrJ.js";
import { t as d } from "./Label-CJNHsoCN.js";
import { n as f } from "./Text-CEDDBTEL.js";
import { i as p, n as m, r as h, t as g } from "./useNumberFieldState-CItsPCOI.js";
import { t as _ } from "./I18nProvider-zGzu-4zN.js";
import { r as v } from "./useHover-DxA7bNQs.js";
import { t as y } from "./useFormReset-DizqO0T1.js";
import { t as b } from "./useKeyboard-CqNSkGJ-.js";
import { t as x } from "./useSpinButton-DgIN7nKK.js";
import { t as S } from "./react-dom-Dipvgcxr.js";
import { i as C, n as w } from "./jsx-runtime-C1t0izHF.js";
import { i as T, s as E } from "./useFormValidation-NZK9JasV.js";
import { t as D } from "./useColor-C_cR5xYb.js";
import { t as O } from "./useControlledState-BbVlCDcL.js";
import { n as k } from "./Color-DBUN1_WA.js";
import { t as A } from "./filterDOMProps-CJYy6efO.js";
// node_modules/react-aria/dist/private/color/useColorField.mjs
var j = /* @__PURE__ */ C(S(), 1), M = /* @__PURE__ */ C(w(), 1);
function N(e, n, i) {
	let { isDisabled: a, isReadOnly: o, isRequired: s, isWheelDisabled: c, validationBehavior: l = "aria", onKeyDown: u, onKeyUp: d } = e, { colorValue: f, inputValue: m, increment: g, decrement: _, incrementToMax: S, decrementToMin: C, commit: w, commitValidation: E } = n, D = r(), { spinButtonProps: O } = x({
		isDisabled: a,
		isReadOnly: o,
		isRequired: s,
		maxValue: 16777215,
		minValue: 0,
		onIncrement: g,
		onIncrementToMax: S,
		onDecrement: _,
		onDecrementToMin: C,
		value: f ? f.toHexInt() : void 0,
		textValue: f ? f.toString("hex") : void 0
	}), [k, A] = (0, M.useState)(!1), { focusWithinProps: N } = v({
		isDisabled: a,
		onFocusWithinChange: A
	}), P = (0, M.useCallback)((e) => {
		Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.deltaY > 0 ? g() : e.deltaY < 0 && _());
	}, [_, g]);
	h({
		onScroll: P,
		isDisabled: c || a || o || !k
	}, i);
	let { keyboardProps: F } = b({
		isDisabled: a || o,
		shortcuts: { Enter: () => ((0, j.flushSync)(() => {
			w();
		}), E(), { shouldPreventDefault: !1 }) },
		onKeyDown: u,
		onKeyUp: d
	}), I = (e) => {
		n.validate(e) && n.setInputValue(e);
	}, { inputProps: L, ...R } = p({
		...e,
		id: D,
		value: m,
		defaultValue: "!",
		validate: void 0,
		[T]: n,
		type: "text",
		autoComplete: "off",
		onChange: I,
		onKeyDown: void 0,
		onKeyUp: void 0
	}, n, i);
	return y(i, n.defaultColorValue, n.setColorValue), L = t(F, L, O, N, {
		role: "textbox",
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuenow": null,
		"aria-valuetext": null,
		autoCorrect: "off",
		spellCheck: "false",
		onBlur: w
	}), l === "native" && (L["aria-required"] = void 0), {
		inputProps: L,
		...R
	};
}
// node_modules/react-aria/dist/private/color/useColorChannelField.mjs
function P(e, t, n) {
	let { locale: r } = _();
	return m({
		...e,
		value: void 0,
		defaultValue: void 0,
		onChange: void 0,
		validate: void 0,
		"aria-label": e["aria-label"] || (e.label || e["aria-labelledby"] ? void 0 : t.colorValue.getChannelName(e.channel, r))
	}, t, n);
}
// node_modules/react-stately/dist/private/color/useColorFieldState.mjs
var F = k("#000000"), I = k("#FFFFFF"), L = F.toHexInt(), R = I.toHexInt();
function z(e) {
	let { value: t, defaultValue: n, onChange: r } = e, { step: i } = F.getChannelRange("red"), a = D(n), [o, s] = O(D(t), a, r), [c] = (0, M.useState)(o), [l, u] = (0, M.useState)(() => (t || n) && o ? o.toString("hex") : ""), d = E({
		...e,
		value: o
	}), f = (e) => {
		o && e && e.toHexInt() === o.toHexInt() || s(e);
	}, [p, m] = (0, M.useState)(o);
	p !== o && (u(o ? o.toString("hex") : ""), m(o));
	let h = (0, M.useMemo)(() => {
		let e;
		try {
			e = k(l.startsWith("#") ? l : `#${l}`);
		} catch {
			e = null;
		}
		return e;
	}, [l]), g = () => {
		if (!l.length) {
			f(null), u(t === void 0 || o === null ? "" : o.toString("hex"));
			return;
		}
		if (h == null) {
			u(o ? o.toString("hex") : "");
			return;
		}
		f(h);
		let e = "";
		o && (e = o.toString("hex")), u(e), d.commitValidation();
	}, _ = () => {
		let e = B(h, i);
		e === o && u(e.toString("hex")), f(e), d.commitValidation();
	}, v = () => {
		let e = B(h, -i);
		e === o && u(e.toString("hex")), f(e), d.commitValidation();
	}, y = () => f(I), b = () => f(F), x = (e) => e === "" || !!e.match(/^#?[0-9a-f]{0,6}$/i)?.[0];
	return {
		...d,
		validate: x,
		colorValue: o,
		defaultColorValue: a ?? c,
		setColorValue: s,
		inputValue: l,
		setInputValue: u,
		commit: g,
		increment: _,
		incrementToMax: y,
		decrement: v,
		decrementToMin: b
	};
}
function B(e, t) {
	let n = e || F, r = n.toHexInt(), i = Math.min(Math.max(r + t, L), R);
	if (i !== r) {
		let e = `#${i.toString(16).padStart(6, "0").toUpperCase()}`;
		n = k(e);
	}
	return n;
}
// node_modules/react-stately/dist/private/color/useColorChannelFieldState.mjs
function V(e) {
	let { channel: t, colorSpace: n, locale: r } = e, i = D(e.value), a = D(e.defaultValue), [o, s] = O(i, a ?? null, e.onChange), c = H(o, n), [l] = (0, M.useState)(o), u = a ?? l, d = H(u, n), f = c.getChannelValue(t), p = c.getChannelRange(t), m = (0, M.useMemo)(() => c.getChannelFormatOptions(t), [c, t]), h = m.style === "percent" && p.maxValue === 100 ? 100 : 1;
	return {
		...g({
			locale: r,
			value: o === null ? NaN : f / h,
			defaultValue: u === null ? NaN : d.getChannelValue(t) / h,
			onChange: (e) => {
				s(Number.isNaN(e) ? null : c.withChannelValue(t, e * h));
			},
			minValue: p.minValue / h,
			maxValue: p.maxValue / h,
			step: p.step / h,
			formatOptions: m
		}),
		colorValue: c,
		defaultColorValue: u,
		setColorValue: s
	};
}
function H(e, t) {
	let n = D("#000");
	return (0, M.useMemo)(() => {
		let r = e || n;
		return t && r ? r.toFormat(t) : r;
	}, [
		n,
		e,
		t
	]);
}
// node_modules/react-aria-components/dist/private/ColorField.mjs
var U = /*#__PURE__*/ (0, M.createContext)(null), W = /*#__PURE__*/ (0, M.createContext)(null), G = /*#__PURE__*/ (0, M.forwardRef)(function(e, t) {
	return [e, t] = i(e, t, U), e.channel ? /*#__PURE__*/ M.createElement(K, {
		...e,
		channel: e.channel,
		forwardedRef: t
	}) : /*#__PURE__*/ M.createElement(q, {
		...e,
		forwardedRef: t
	});
});
function K(t) {
	let { locale: r } = _(), i = V({
		...t,
		locale: r
	}), a = (0, M.useRef)(null), [o, s] = n(!t["aria-label"] && !t["aria-labelledby"]), { labelProps: c, inputProps: l, descriptionProps: u, errorMessageProps: d, ...f } = P({
		...e(t),
		label: s,
		validationBehavior: t.validationBehavior ?? "native"
	}, i, a);
	return /*#__PURE__*/ M.createElement(M.Fragment, null, J(t, i, t.forwardedRef, l, a, c, o, u, d, f), t.name && /*#__PURE__*/ M.createElement("input", {
		type: "hidden",
		name: t.name,
		form: t.form,
		value: isNaN(i.numberValue) ? "" : i.numberValue
	}));
}
function q(t) {
	let r = z({
		...t,
		validationBehavior: t.validationBehavior ?? "native"
	}), i = (0, M.useRef)(null), [a, o] = n(!t["aria-label"] && !t["aria-labelledby"]), { labelProps: s, inputProps: c, descriptionProps: l, errorMessageProps: u, ...d } = N({
		...e(t),
		label: o,
		validationBehavior: t.validationBehavior ?? "native"
	}, r, i);
	return J(t, r, t.forwardedRef, c, i, s, a, l, u, d);
}
function J(e, t, n, r, i, p, m, h, g, _) {
	let v = a({
		...e,
		values: {
			state: t,
			channel: e.channel || "hex",
			isDisabled: e.isDisabled || !1,
			isInvalid: _.isInvalid || !1,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1
		},
		defaultClassName: "react-aria-ColorField"
	}), y = A(e, { global: !0 });
	return delete y.id, /*#__PURE__*/ M.createElement(s, { values: [
		[W, t],
		[u, {
			...r,
			ref: i
		}],
		[d, {
			...p,
			ref: m
		}],
		[l, {
			role: "presentation",
			isInvalid: _.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[f, { slots: {
			description: h,
			errorMessage: g
		} }],
		[c, _]
	] }, /*#__PURE__*/ M.createElement(o.div, {
		...y,
		...v,
		ref: n,
		slot: e.slot || void 0,
		"data-channel": e.channel || "hex",
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": _.isInvalid || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}));
}
export { G as n, U as t };
