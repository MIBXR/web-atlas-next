import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./label-LoHsVeB8.js";
import { t as n } from "./dist-DCi9UB7o.js";
import { t as r } from "./jsx-runtime-lAxUcZjR.js";
import { l as ee, o as i, r as a, t as o, u as s } from "./useRenderElement-Bc91YjHo.js";
import { t as c } from "./react-D9cguz4v.js";
import { c as l, n as te, o as u, r as d, t as f } from "./useRegisterFieldControl-Crjc5EN3.js";
import { t as ne } from "./useControlled-BkmszdIY.js";
import { t as re } from "./useIsoLayoutEffect-B0B6th0o.js";
import { n as ie, t as ae } from "./visuallyHidden-DvzvoEuP.js";
import { l as p } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as m } from "./useBaseUiId-BwhhMxTY.js";
import { t as h } from "./useButton-CMNj7XNN.js";
import { t as oe } from "./useAriaLabelledBy-Do7ZgTys.js";
import { t as se } from "./useLabelableId-VvLeyn8q.js";
import { t as g, x as _ } from "./createBaseUIEventDetails-DG51vPHx.js";
import { t as v } from "./useValueChanged-Bwf6UlC_.js";
// node_modules/@base-ui/react/switch/root/SwitchRootContext.mjs
var y = /* @__PURE__ */ e(c(), 1), b = /*#__PURE__*/ y.createContext(void 0);
function x() {
	let e = y.useContext(b);
	if (e === void 0) throw Error(s(63));
	return e;
}
// node_modules/@base-ui/react/switch/root/SwitchRootDataAttributes.mjs
var S = /*#__PURE__*/ function(e) {
	return e.checked = "data-checked", e.unchecked = "data-unchecked", e.disabled = "data-disabled", e.readonly = "data-readonly", e.required = "data-required", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.filled = "data-filled", e.focused = "data-focused", e;
}({}), C = {
	...l,
	checked(e) {
		return e ? { [S.checked]: "" } : { [S.unchecked]: "" };
	}
}, w = r(), T = /*#__PURE__*/ y.forwardRef(function(e, t) {
	let { checked: n, className: r, defaultChecked: s, "aria-labelledby": c, form: l, id: x, inputRef: S, name: T, nativeButton: E = !1, onCheckedChange: D, readOnly: O = !1, required: k = !1, disabled: A = !1, render: ce, uncheckedValue: j, value: M, style: le, ...N } = e, { clearErrors: P } = d(), { state: F, setTouched: I, setDirty: L, validityData: R, setFilled: z, setFocused: B, validationMode: V, disabled: H, name: ue, validation: U } = u(), { labelId: W } = te(), G = H || A, K = ue ?? T, q = y.useRef(null), de = ee(q, S, U.inputRef), J = y.useRef(null), Y = m(), X = se({
		id: x,
		implicit: !1,
		controlRef: J
	}), Z = E ? void 0 : X, [Q, fe] = ne({
		controlled: n,
		default: !!s,
		name: "Switch",
		state: "checked"
	});
	f(J, Y, Q, void 0, !G, T), re(() => {
		q.current && z(q.current.checked);
	}, [q, z]), v(Q, () => {
		P(K), L(Q !== R.initialValue), z(Q), U.change(Q);
	});
	let { getButtonProps: pe, buttonRef: me } = h({
		disabled: G,
		native: E
	}), he = oe(c, W, q, !E, Z), ge = {
		id: E ? X : Y,
		role: "switch",
		"aria-checked": Q,
		"aria-readonly": O || void 0,
		"aria-required": k || void 0,
		"aria-labelledby": he,
		onFocus() {
			G || B(!0);
		},
		onBlur() {
			let e = q.current;
			e && !G && (I(!0), B(!1), V === "onBlur" && U.commit(e.checked));
		},
		onClick(e) {
			if (O || G) return;
			e.preventDefault();
			let t = q.current;
			t && t.dispatchEvent(new (p(t)).PointerEvent("click", {
				bubbles: !0,
				shiftKey: e.shiftKey,
				ctrlKey: e.ctrlKey,
				altKey: e.altKey,
				metaKey: e.metaKey
			}));
		}
	}, _e = a({
		checked: Q,
		disabled: G,
		form: l,
		id: Z,
		name: K,
		required: k,
		style: K ? ie : ae,
		tabIndex: -1,
		type: "checkbox",
		"aria-hidden": !0,
		ref: de,
		onChange(e) {
			if (e.nativeEvent.defaultPrevented) return;
			if (O) {
				e.preventDefault();
				return;
			}
			let t = e.currentTarget.checked, n = g(_, e.nativeEvent);
			D?.(t, n), n.isCanceled || fe(t);
		},
		onFocus() {
			J.current?.focus();
		}
	}, (e) => U.getValidationProps(G, e), M === void 0 ? i : { value: M }), $ = y.useMemo(() => ({
		...F,
		checked: Q,
		disabled: G,
		readOnly: O,
		required: k
	}), [
		F,
		Q,
		G,
		O,
		k
	]), ve = o("span", e, {
		state: $,
		ref: [
			t,
			J,
			me
		],
		props: [
			ge,
			N,
			pe,
			(e) => U.getValidationProps(G, e)
		],
		stateAttributesMapping: C
	});
	return /*#__PURE__*/ (0, w.jsxs)(b.Provider, {
		value: $,
		children: [
			ve,
			!Q && K && j !== void 0 && /*#__PURE__*/ (0, w.jsx)("input", {
				type: "hidden",
				form: l,
				name: K,
				value: j,
				disabled: G
			}),
			/*#__PURE__*/ (0, w.jsx)("input", {
				..._e,
				suppressHydrationWarning: !0
			})
		]
	});
}), E = /*#__PURE__*/ y.forwardRef(function(e, t) {
	let { render: n, className: r, style: ee, ...i } = e, a = x();
	return o("span", e, {
		state: a,
		ref: t,
		stateAttributesMapping: C,
		props: i
	});
});
// upstream/registry/bases/base/ui/switch.tsx
function D({ className: e, size: t = "default", ...r }) {
	return /* @__PURE__ */ (0, w.jsx)(T, {
		"data-slot": "switch",
		"data-size": t,
		className: n("cn-switch peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50", e),
		...r,
		children: /* @__PURE__ */ (0, w.jsx)(E, {
			"data-slot": "switch-thumb",
			className: "cn-switch-thumb pointer-events-none block ring-0 transition-transform"
		})
	});
}
// upstream/examples/base/switch-demo.tsx
function O() {
	return /* @__PURE__ */ (0, w.jsxs)("div", {
		className: "flex items-center space-x-2",
		children: [/* @__PURE__ */ (0, w.jsx)(D, { id: "airplane-mode" }), /* @__PURE__ */ (0, w.jsx)(t, {
			htmlFor: "airplane-mode",
			children: "Airplane Mode"
		})]
	});
}
export { O as SwitchDemo };
