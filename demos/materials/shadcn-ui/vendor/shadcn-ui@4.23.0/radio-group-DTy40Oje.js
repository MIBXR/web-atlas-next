import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as ee } from "./useControlled-BkmszdIY.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { l as i, o as a, s as o, t as s, u as c } from "./useRenderElement-Bc91YjHo.js";
import { t as l } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as u } from "./useBaseUiId-BwhhMxTY.js";
import { t as d, x as f } from "./createBaseUIEventDetails-DG51vPHx.js";
import { a as p, o as m, t as h } from "./useOpenChangeComplete-BfJk_bnM.js";
import { l as g } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as _ } from "./useButton-CMNj7XNN.js";
import { t as v } from "./dist-DCi9UB7o.js";
import { n as te } from "./shadowDom-D66trjQm.js";
import { n as y, t as ne } from "./visuallyHidden-DvzvoEuP.js";
import { p as b } from "./composite-DtpIpLt3.js";
import { t as re } from "./useValueChanged-Bwf6UlC_.js";
import { t as ie } from "./CompositeItem-Vp60fN0N.js";
import { c as x, n as ae, o as oe, r as S, t as C } from "./useRegisterFieldControl-Crjc5EN3.js";
import { t as w } from "./useAriaLabelledBy-Do7ZgTys.js";
import { t as T } from "./useLabelableId-VvLeyn8q.js";
import { t as E } from "./FieldItemContext-QIs7sf81.js";
import { t as se } from "./serializeValue-Cke3Fc7m.js";
import { n as ce, t as le } from "./CompositeRoot-BhZOjAjJ.js";
// node_modules/@base-ui/react/fieldset/root/FieldsetRootContext.mjs
var D = n(), O = /* @__PURE__ */ e(t(), 1), k = /*#__PURE__*/ O.createContext(void 0);
function ue(e = !1) {
	let t = O.useContext(k);
	if (!t && !e) throw Error(c(86));
	return t;
}
// node_modules/@base-ui/react/radio/root/RadioRootDataAttributes.mjs
var A = /*#__PURE__*/ function(e) {
	return e.checked = "data-checked", e.unchecked = "data-unchecked", e.disabled = "data-disabled", e.readonly = "data-readonly", e.required = "data-required", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.filled = "data-filled", e.focused = "data-focused", e;
}({}), j = {
	checked(e) {
		return e ? { [A.checked]: "" } : { [A.unchecked]: "" };
	},
	...p,
	...x
}, M = /*#__PURE__*/ O.createContext(void 0);
function N() {
	return O.useContext(M);
}
// node_modules/@base-ui/react/radio/root/RadioRootContext.mjs
var P = /*#__PURE__*/ O.createContext(void 0);
function F() {
	let e = O.useContext(P);
	if (e === void 0) throw Error(c(52));
	return e;
}
// node_modules/@base-ui/react/radio/root/RadioRoot.mjs
var I = /*#__PURE__*/ O.forwardRef(function(e, t) {
	let { render: n, className: ee, disabled: c = !1, readOnly: p = !1, required: m = !1, "aria-labelledby": h, value: v, inputRef: te, nativeButton: b = !1, id: re, style: x, ...S } = e, C = N(), { disabled: le, readOnly: k, required: ue, form: A, checkedValue: M, touched: F = !1, validation: I, name: L } = C ?? {}, de = C?.setCheckedValue ?? o, R = C?.setTouched ?? o, z = C?.registerControlRef ?? o, B = C?.registerInputRef ?? o, { setTouched: V, setFilled: H, state: U, disabled: W } = oe(), G = E(), { labelId: K, getDescriptionProps: fe } = ae(), q = W || G.disabled || le || c, J = k || p, Y = ue || m, pe = A, X = C ? M === v : v === "", Z = O.useRef(null), Q = O.useRef(null), me = r((e) => {
		e && z(e, q);
	}), he = i(te, Q, B);
	l(() => {
		Q.current?.checked && H(!0);
	}, [H]), l(() => {
		Q.current && (q && X ? B(null) : (Z.current && z(Z.current, q), B(Q.current)));
	}, [
		X,
		q,
		z,
		B
	]);
	let ge = u(), _e = T({
		id: re,
		implicit: !1,
		controlRef: Z
	}), ve = b ? void 0 : _e, ye = w(h, K, Q, !b, ve), be = {
		role: "radio",
		"aria-checked": X,
		"aria-required": Y || void 0,
		"aria-readonly": J || void 0,
		"aria-labelledby": ye,
		[ce]: X ? "" : void 0,
		id: b ? _e : ge,
		onKeyDown(e) {
			e.key === "Enter" && e.preventDefault();
		},
		onClick(e) {
			if (e.defaultPrevented || q || J) return;
			e.preventDefault();
			let t = Q.current;
			t && t.dispatchEvent(new (g(t)).PointerEvent("click", {
				bubbles: !0,
				shiftKey: e.shiftKey,
				ctrlKey: e.ctrlKey,
				altKey: e.altKey,
				metaKey: e.metaKey
			}));
		},
		onFocus(e) {
			e.defaultPrevented || q || J || !F || (Q.current?.click(), R(!1));
		}
	}, { getButtonProps: xe, buttonRef: Se } = _({
		disabled: q,
		native: b,
		composite: !1
	}), Ce = {
		type: "radio",
		ref: he,
		form: pe,
		id: ve,
		name: L,
		tabIndex: -1,
		style: L ? y : ne,
		"aria-hidden": !0,
		...v === void 0 ? a : { value: se(v) },
		disabled: q,
		checked: X,
		required: Y,
		readOnly: J,
		onChange(e) {
			if (e.nativeEvent.defaultPrevented || q || J || v === void 0) return;
			let t = d(f, e.nativeEvent);
			de(v, t), t.isCanceled || V(!0);
		},
		onFocus() {
			Z.current?.focus();
		}
	}, $ = O.useMemo(() => ({
		...U,
		required: Y,
		disabled: q,
		readOnly: J,
		checked: X
	}), [
		U,
		q,
		J,
		X,
		Y
	]), we = $, Te = C !== void 0, Ee = [
		t,
		Z,
		Se,
		me
	], De = [
		be,
		S,
		xe,
		fe,
		I ? (e) => I.getValidationProps(q, e) : a
	], Oe = s("span", e, {
		enabled: !Te,
		state: $,
		ref: Ee,
		props: De,
		stateAttributesMapping: j
	});
	return /*#__PURE__*/ (0, D.jsxs)(P.Provider, {
		value: we,
		children: [Te ? /*#__PURE__*/ (0, D.jsx)(ie, {
			tag: "span",
			render: n,
			className: ee,
			style: x,
			state: $,
			refs: Ee,
			props: De,
			stateAttributesMapping: j
		}) : Oe, /*#__PURE__*/ (0, D.jsx)("input", {
			...Ce,
			suppressHydrationWarning: !0
		})]
	});
}), L = /*#__PURE__*/ O.forwardRef(function(e, t) {
	let { render: n, className: ee, style: r, keepMounted: i = !1, ...a } = e, o = F(), c = o.checked, { mounted: l, transitionStatus: u, setMounted: d } = m(c), f = {
		...o,
		transitionStatus: u
	}, p = O.useRef(null), g = i || l, _ = s("span", e, {
		ref: [t, p],
		state: f,
		props: a,
		stateAttributesMapping: j
	});
	return h({
		open: c,
		ref: p,
		onComplete() {
			c || d(!1);
		}
	}), g ? _ : null;
}), de = [b], R = /*#__PURE__*/ O.forwardRef(function(e, t) {
	let { render: n, className: i, disabled: a, readOnly: o, required: s, onValueChange: c, value: l, defaultValue: d, form: f, name: p, inputRef: m, id: h, style: g, ..._ } = e, { setTouched: v, setFocused: y, validationMode: ne, name: b, disabled: ie, state: w, validation: T, setDirty: E, setFilled: se, validityData: ce } = oe(), { labelId: k } = ae(), { clearErrors: A } = S(), j = ue(!0), N = ie || a, P = b ?? p, F = u(h), [I, L] = ee({
		controlled: l,
		default: d,
		name: "RadioGroup",
		state: "value"
	}), [R, z] = O.useState(!1), B = r((e, t) => {
		c?.(e, t), t.isCanceled || L(e);
	}), V = O.useRef(null), H = O.useRef(null), U = O.useRef(null);
	function W(e) {
		let t;
		return m && (typeof m == "function" ? t = m(e) : m.current = e), H.current = e, T.inputRef.current = e, t;
	}
	let G = r((e, t = !1) => {
		e && (t ? V.current === e && (V.current = null) : V.current ??= e);
	}), K = r((e) => {
		if (!e || e.disabled) return;
		U.current ||= e;
		let t = H.current;
		if (e.checked || t == null || t.disabled) return W(e);
	}), fe = r(() => {
		let e = H.current;
		return !e || e.disabled || !e.checked ? null : I ?? null;
	});
	C(V, F, I ?? null, fe, !N, p), re(I, () => {
		A(P), E(I !== ce.initialValue), se(I != null), T.change(I);
		let e = U.current;
		I == null && e && !e.disabled && W(e);
	});
	let q = _["aria-labelledby"] ?? k ?? j?.legendId, J = {
		...w,
		disabled: N ?? !1,
		required: s ?? !1,
		readOnly: o ?? !1
	}, Y = O.useMemo(() => ({
		...w,
		checkedValue: I,
		disabled: N,
		form: f,
		validation: T,
		name: P,
		readOnly: o,
		registerControlRef: G,
		registerInputRef: K,
		required: s,
		setCheckedValue: B,
		setTouched: z,
		touched: R
	}), [
		I,
		N,
		f,
		T,
		w,
		P,
		o,
		G,
		K,
		s,
		B,
		z,
		R
	]), pe = {
		id: h,
		role: "radiogroup",
		"aria-required": s || void 0,
		"aria-disabled": N || void 0,
		"aria-readonly": o || void 0,
		"aria-labelledby": q,
		onFocus() {
			y(!0);
		},
		onBlur(e) {
			te(e.currentTarget, e.relatedTarget) || (v(!0), y(!1), ne === "onBlur" && T.commit(I));
		},
		onKeyDownCapture(e) {
			e.key.startsWith("Arrow") && (z(!0), y(!0));
		}
	};
	return /*#__PURE__*/ (0, D.jsx)(M.Provider, {
		value: Y,
		children: /*#__PURE__*/ (0, D.jsx)(le, {
			render: n,
			className: i,
			style: g,
			state: J,
			props: [
				pe,
				_,
				(e) => T.getValidationProps(N ?? !1, e)
			],
			refs: [t],
			stateAttributesMapping: x,
			enableHomeAndEndKeys: !1,
			modifierKeys: de
		})
	});
});
// upstream/registry/bases/base/ui/radio-group.tsx
function z({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)(R, {
		"data-slot": "radio-group",
		className: v("cn-radio-group w-full", e),
		...t
	});
}
function B({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)(I, {
		"data-slot": "radio-group-item",
		className: v("cn-radio-group-item group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", e),
		...t,
		children: /* @__PURE__ */ (0, D.jsx)(L, {
			"data-slot": "radio-group-indicator",
			className: "cn-radio-group-indicator",
			children: /* @__PURE__ */ (0, D.jsx)("span", { className: "cn-radio-group-indicator-icon" })
		})
	});
}
export { B as n, z as t };
