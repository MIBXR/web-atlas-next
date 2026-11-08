import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { c as i, d as a, i as o, l as s, n as c, r as l, s as u, t as d } from "./utils-UBVJ5JR_.js";
import { n as f } from "./FieldError-BDRHklqb.js";
import { n as p } from "./Autocomplete-By5miKJr.js";
import { n as m } from "./Form-BfBA0JpQ.js";
import { n as h } from "./Group-VeeQ5avm.js";
import { t as g } from "./Input-DWAXtMrJ.js";
import { t as _ } from "./Label-CJNHsoCN.js";
import { n as v, t as y } from "./useHover-DxA7bNQs.js";
import { n as b } from "./Text-CEDDBTEL.js";
import { t as x } from "./useTextField-DliTkFQ-.js";
import { t as S } from "./Hidden-B5FjVPor.js";
import { t as C } from "./filterDOMProps-CJYy6efO.js";
import { r as w } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/textfield/textfield.styles.js
var T = e({
	base: "textfield",
	defaultVariants: { fullWidth: !1 },
	variants: { fullWidth: {
		false: "",
		true: "textfield--full-width"
	} }
}), E = /* @__PURE__ */ t(n(), 1), D = /*#__PURE__*/ (0, E.createContext)({}), O = (e) => {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, ...i } = e;
	return i;
}, k = /*#__PURE__*/ (0, E.forwardRef)(function(e, t) {
	[e, t] = c(e, t, D);
	let { hoverProps: n, isHovered: r } = y(e), { isFocused: i, isFocusVisible: o, focusProps: s } = v({
		isTextInput: !0,
		autoFocus: e.autoFocus
	}), d = !!e["aria-invalid"] && e["aria-invalid"] !== "false", f = l({
		...e,
		values: {
			isHovered: r,
			isFocused: i,
			isFocusVisible: o,
			isDisabled: e.disabled || !1,
			isInvalid: d
		},
		defaultClassName: "react-aria-TextArea"
	});
	return /*#__PURE__*/ E.createElement(u.textarea, {
		...a(O(e), s, n),
		...f,
		ref: t,
		"data-focused": i || void 0,
		"data-disabled": e.disabled || void 0,
		"data-hovered": r || void 0,
		"data-focus-visible": o || void 0,
		"data-invalid": d || void 0
	});
}), A = /*#__PURE__*/ (0, E.createContext)(null), j = /*#__PURE__*/ S(function(e, t) {
	[e, t] = c(e, t, A);
	let { validationBehavior: n } = s(m) || {}, r = e.validationBehavior ?? n ?? "native", a = (0, E.useRef)(null);
	[e, a] = c(e, a, p);
	let [v, y] = o(!e["aria-label"] && !e["aria-labelledby"]), [S, w] = (0, E.useState)("input"), { labelProps: T, inputProps: O, descriptionProps: k, errorMessageProps: j, ...M } = x({
		...i(e),
		inputElementType: S,
		label: y,
		validationBehavior: r
	}, a), N = (0, E.useCallback)((e) => {
		a.current = e, e && w(e instanceof HTMLTextAreaElement ? "textarea" : "input");
	}, [a]), P = l({
		...e,
		values: {
			isDisabled: e.isDisabled || !1,
			isInvalid: M.isInvalid,
			isReadOnly: e.isReadOnly || !1,
			isRequired: e.isRequired || !1
		},
		defaultClassName: "react-aria-TextField"
	}), F = C(e, { global: !0 });
	return delete F.id, /*#__PURE__*/ E.createElement(u.div, {
		...F,
		...P,
		ref: t,
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0,
		"data-invalid": M.isInvalid || void 0,
		"data-readonly": e.isReadOnly || void 0,
		"data-required": e.isRequired || void 0
	}, /*#__PURE__*/ E.createElement(d, { values: [
		[_, {
			...T,
			ref: v
		}],
		[g, {
			...O,
			ref: N
		}],
		[D, {
			...O,
			ref: N
		}],
		[h, {
			role: "presentation",
			isInvalid: M.isInvalid,
			isDisabled: e.isDisabled || !1
		}],
		[b, { slots: {
			description: k,
			errorMessage: j
		} }],
		[f, M]
	] }, P.children));
}), M = r(), N = /*#__PURE__*/ (0, E.createContext)({}), P = ({ children: e, className: t, fullWidth: n, variant: r, ...i }) => {
	let a = E.useMemo(() => T({ fullWidth: n }), [n]), o = E.useMemo(() => ({ variant: r }), [r]), s = w(t, a);
	return /*#__PURE__*/ (0, M.jsx)(N, {
		value: o,
		children: /*#__PURE__*/ (0, M.jsx)(j, {
			"data-slot": "textfield",
			...i,
			className: s,
			children: e
		})
	});
};
P.displayName = "HeroUI.TextField";
export { P as n, k as r, N as t };
