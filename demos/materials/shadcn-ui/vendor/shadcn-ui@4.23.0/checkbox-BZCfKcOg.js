import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./useControlled-BkmszdIY.js";
import { d as i, l as a, o, r as s, s as c, t as ee, u as l } from "./useRenderElement-Bc91YjHo.js";
import { t as u } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as d } from "./useBaseUiId-BwhhMxTY.js";
import { t as f, x as te } from "./createBaseUIEventDetails-DG51vPHx.js";
import { a as ne, o as p, t as m } from "./useOpenChangeComplete-BfJk_bnM.js";
import { l as h } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as g } from "./useButton-CMNj7XNN.js";
import { t as _ } from "./dist-DCi9UB7o.js";
import { t as v } from "./icon-placeholder-BTF3H_W7.js";
import { n as re, t as ie } from "./visuallyHidden-DvzvoEuP.js";
import { t as ae } from "./useValueChanged-Bwf6UlC_.js";
import { c as y, n as oe, o as se, r as ce, t as le } from "./useRegisterFieldControl-Crjc5EN3.js";
import { t as ue } from "./useAriaLabelledBy-Do7ZgTys.js";
import { t as de } from "./FieldItemContext-QIs7sf81.js";
// node_modules/@base-ui/react/checkbox-group/CheckboxGroupContext.mjs
var b = /* @__PURE__ */ e(t(), 1), fe = /*#__PURE__*/ b.createContext(void 0);
function pe(e = !0) {
	let t = b.useContext(fe);
	if (t === void 0 && !e) throw Error(l(3));
	return t;
}
// node_modules/@base-ui/utils/getDefaultFormSubmitter.mjs
function me(e) {
	if (!e) return null;
	for (let t of e.elements) {
		let e = t.tagName;
		if (e === "BUTTON" || e === "INPUT") {
			let e = t;
			if (e.type === "submit") return e;
		}
	}
	return null;
}
// node_modules/@base-ui/react/checkbox/root/CheckboxRootDataAttributes.mjs
var x = /*#__PURE__*/ function(e) {
	return e.checked = "data-checked", e.unchecked = "data-unchecked", e.indeterminate = "data-indeterminate", e.disabled = "data-disabled", e.readonly = "data-readonly", e.required = "data-required", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.filled = "data-filled", e.focused = "data-focused", e;
}({});
// node_modules/@base-ui/react/checkbox/utils/useStateAttributesMapping.mjs
function S(e) {
	return b.useMemo(() => ({
		checked(t) {
			return e.indeterminate ? {} : t ? { [x.checked]: "" } : { [x.unchecked]: "" };
		},
		...y
	}), [e.indeterminate]);
}
// node_modules/@base-ui/react/checkbox/root/CheckboxRootContext.mjs
var C = /*#__PURE__*/ b.createContext(void 0);
function w() {
	let e = b.useContext(C);
	if (e === void 0) throw Error(l(14));
	return e;
}
// node_modules/@base-ui/react/checkbox/root/CheckboxRoot.mjs
var T = n(), he = "data-parent", E = /*#__PURE__*/ b.forwardRef(function(e, t) {
	let { checked: n, className: l, defaultChecked: ne = !1, "aria-labelledby": p, disabled: m = !1, form: _, id: v, indeterminate: y = !1, inputRef: fe, name: x, onCheckedChange: w, parent: E = !1, readOnly: D = !1, render: ge, required: O = !1, uncheckedValue: _e, value: k, nativeButton: A = !1, style: ve, ...ye } = e, { clearErrors: be } = ce(), { disabled: xe, name: Se, setDirty: Ce, setFilled: j, setFocused: M, setTouched: we, state: N, validationMode: Te, validityData: Ee, validation: De } = se(), Oe = de(), { labelId: ke, controlId: Ae, registerControlId: P, getDescriptionProps: F } = oe(), I = pe(), L = I?.parent, R = L && I.allValues, z = xe || Oe.disabled || I?.disabled || m, B = Se ?? x, V = k ?? B, je = d(), Me = d(), H = Ae;
	R ? H = E ? Me : `${L.id}-${V}` : v && (H = v);
	let U = {};
	R && (E ? U = I.parent.getParentProps() : V && (U = I.parent.getChildProps(V)));
	let { checked: Ne = n, indeterminate: Pe = y, onCheckedChange: Fe, ...Ie } = U, W = I?.value, Le = I?.setValue, Re = I?.defaultValue, G = b.useRef(null), K = i(() => Symbol("checkbox-control")), q = b.useRef(!1), { getButtonProps: ze, buttonRef: Be } = g({
		disabled: z,
		native: A
	}), J = I?.validation ?? De, [Y, Ve] = r({
		controlled: V && W && !E ? W.includes(V) : Ne,
		default: V && Re && !E ? Re.includes(V) : ne,
		name: "Checkbox",
		state: "checked"
	}), X = R ? !!Ne : Y, Z = R && Pe || y;
	u(() => {
		P !== c && (q.current = !0, P(K.current, H));
	}, [
		H,
		P,
		K
	]), b.useEffect(() => {
		let e = K.current;
		return () => {
			q.current && P !== c && (q.current = !1, P(e, void 0));
		};
	}, [P, K]), le(G, je, Y, void 0, !I && !z, x);
	let Q = b.useRef(null), He = a(fe, Q, J.inputRef, J.registerInput), Ue = ue(p, ke, Q, !A, H ?? void 0);
	u(() => {
		Q.current && (Q.current.indeterminate = Z, Y && j(!0));
	}, [
		Y,
		Z,
		j
	]), ae(Y, () => {
		I || (be(B), j(Y), Ce(Y !== Ee.initialValue), J.change(Y));
	});
	let We = s({
		checked: Y,
		disabled: z,
		form: _,
		name: E ? void 0 : B,
		id: A ? void 0 : H ?? void 0,
		required: O,
		ref: He,
		style: B ? re : ie,
		tabIndex: -1,
		type: "checkbox",
		"aria-hidden": !0,
		onChange(e) {
			if (e.nativeEvent.defaultPrevented) return;
			if (D) {
				e.preventDefault();
				return;
			}
			let t = e.currentTarget.checked, n = f(te, e.nativeEvent);
			if (w?.(t, n), !n.isCanceled && (Fe?.(t, n), !n.isCanceled && (Ve(t), V && W && Le && !E && !R))) {
				let e = t ? [...W, V] : W.filter((e) => e !== V);
				Le(e, n);
			}
		},
		onFocus() {
			G.current?.focus();
		}
	}, k === void 0 ? o : { value: (I ? Y && k : k) || "" }, F, (e) => J.getValidationProps(z, e));
	b.useEffect(() => {
		if (!L || !V) return;
		let e = L.disabledStatesRef.current;
		return e.set(V, z), () => {
			e.delete(V);
		};
	}, [
		L,
		z,
		V
	]);
	let $ = b.useMemo(() => ({
		...N,
		checked: X,
		disabled: z,
		readOnly: D,
		required: O,
		indeterminate: Z
	}), [
		N,
		X,
		z,
		D,
		O,
		Z
	]), Ge = S($), Ke = ee("span", e, {
		state: $,
		ref: [
			Be,
			G,
			t,
			I?.registerControlRef
		],
		props: [
			{
				id: A ? H ?? void 0 : je,
				role: "checkbox",
				"aria-checked": Z ? "mixed" : X,
				"aria-readonly": D || void 0,
				"aria-required": O || void 0,
				"aria-labelledby": Ue,
				[he]: E ? "" : void 0,
				onFocus() {
					z || M(!0);
				},
				onBlur() {
					let e = Q.current;
					e && (we(!0), M(!1), Te === "onBlur" && J.commit(I ? W : e.checked));
				},
				onKeyDown(e) {
					if (e.key !== "Enter" || (e.preventBaseUIHandler(), e.defaultPrevented)) return;
					let t = Q.current?.form ?? null, n = e.currentTarget, r = e.nativeEvent, i = e.preventDefault, a = r.preventDefault, o = !1;
					e.preventDefault = () => {
						o = !0, i.call(e);
					}, r.preventDefault = () => {
						o = !0, a.call(r);
					}, a.call(r), h(n).queueMicrotask(() => {
						e.preventDefault = i, r.preventDefault = a, o || me(t)?.click();
					});
				},
				onClick(e) {
					if (D || z) return;
					e.preventDefault();
					let t = Q.current;
					t && t.dispatchEvent(new (h(t)).PointerEvent("click", {
						bubbles: !0,
						shiftKey: e.shiftKey,
						ctrlKey: e.ctrlKey,
						altKey: e.altKey,
						metaKey: e.metaKey
					}));
				}
			},
			ye,
			Ie,
			ze,
			F,
			(e) => J.getValidationProps(z, e)
		],
		stateAttributesMapping: Ge
	});
	return /*#__PURE__*/ (0, T.jsxs)(C.Provider, {
		value: $,
		children: [
			Ke,
			!Y && !I && B && !E && _e !== void 0 && /*#__PURE__*/ (0, T.jsx)("input", {
				type: "hidden",
				form: _,
				name: B,
				value: _e,
				disabled: z
			}),
			/*#__PURE__*/ (0, T.jsx)("input", {
				...We,
				suppressHydrationWarning: !0
			})
		]
	});
}), D = /*#__PURE__*/ b.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, keepMounted: a = !1, ...o } = e, s = w(), c = s.checked || s.indeterminate, { mounted: l, transitionStatus: u, setMounted: d } = p(c), f = b.useRef(null), te = {
		...s,
		transitionStatus: u
	};
	m({
		open: c,
		ref: f,
		onComplete() {
			c || d(!1);
		}
	});
	let h = {
		...S(s),
		...ne,
		...y
	}, g = a || l, _ = ee("span", e, {
		ref: [t, f],
		state: te,
		stateAttributesMapping: h,
		props: o
	});
	return g ? _ : null;
});
// upstream/registry/bases/base/ui/checkbox.tsx
function ge({ className: e, ...t }) {
	return /* @__PURE__ */ (0, T.jsx)(E, {
		"data-slot": "checkbox",
		className: _("cn-checkbox peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", e),
		...t,
		children: /* @__PURE__ */ (0, T.jsx)(D, {
			"data-slot": "checkbox-indicator",
			className: "cn-checkbox-indicator grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ (0, T.jsx)(v, {
				lucide: "CheckIcon",
				tabler: "IconCheck",
				hugeicons: "Tick02Icon",
				phosphor: "CheckIcon",
				remixicon: "RiCheckLine"
			})
		})
	});
}
export { ge as t };
