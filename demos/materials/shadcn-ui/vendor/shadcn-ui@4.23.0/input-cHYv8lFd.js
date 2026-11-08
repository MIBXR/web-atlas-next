import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./useControlled-BkmszdIY.js";
import { t as i } from "./useStableCallback-BmDujACN.js";
import { t as a } from "./useRenderElement-Bc91YjHo.js";
import { t as o } from "./useIsoLayoutEffect-B0B6th0o.js";
import { t as s, x as c } from "./createBaseUIEventDetails-DG51vPHx.js";
import { t as l } from "./owner-C-FapX6G.js";
import { t as u } from "./dist-DCi9UB7o.js";
import { t as d } from "./shadowDom-D66trjQm.js";
import { c as f, n as p, o as m, r as h, t as g } from "./useRegisterFieldControl-Crjc5EN3.js";
import { t as _ } from "./useLabelableId-VvLeyn8q.js";
// node_modules/@base-ui/react/field/control/FieldControl.mjs
var v = /* @__PURE__ */ e(t(), 1), y = /*#__PURE__*/ v.forwardRef(function(e, t) {
	let { render: n, className: u, id: y, name: b, value: x, disabled: S = !1, onValueChange: C, defaultValue: w, autoFocus: T = !1, style: E, ...D } = e, { state: O, name: k, disabled: A, setTouched: j, setDirty: M, validityData: N, setFocused: P, setFilled: F, validationMode: I, validation: L } = m(), { clearErrors: R } = h(), z = A || S, B = k ?? b, V = {
		...O,
		disabled: z
	}, { labelId: H } = p(), U = _({ id: y });
	o(() => {
		let e = x != null;
		L.inputRef.current?.value || e && x !== "" ? F(!0) : e && x === "" && F(!1);
	}, [
		L.inputRef,
		F,
		x
	]);
	let W = v.useRef(null);
	o(() => {
		T && W.current === d(l(W.current)) && P(!0);
	}, [T, P]);
	let [G] = r({
		controlled: x,
		default: w,
		name: "FieldControl",
		state: "value"
	}), K = x !== void 0, q = K ? G : void 0, J = i(() => L.inputRef.current?.value);
	return g(L.inputRef, U, q, J, !z, b), a("input", e, {
		ref: [t, W],
		state: V,
		props: [
			{
				id: U,
				disabled: z,
				name: B,
				ref: L.inputRef,
				"aria-labelledby": H,
				autoFocus: T,
				...K ? { value: q } : { defaultValue: w },
				onChange(e) {
					let t = e.currentTarget.value;
					C?.(t, s(c, e.nativeEvent)), M(t !== N.initialValue), F(t !== ""), e.nativeEvent.defaultPrevented || (R(B), L.change(t));
				},
				onFocus() {
					P(!0);
				},
				onBlur(e) {
					j(!0), P(!1), I === "onBlur" && L.commit(e.currentTarget.value);
				},
				onKeyDown(e) {
					e.currentTarget.tagName === "INPUT" && e.key === "Enter" && (j(!0), L.commit(e.currentTarget.value));
				}
			},
			D,
			(e) => L.getValidationProps(z, e)
		],
		stateAttributesMapping: f
	});
}), b = n(), x = /*#__PURE__*/ v.forwardRef(function(e, t) {
	return /*#__PURE__*/ (0, b.jsx)(y, {
		ref: t,
		...e
	});
});
// upstream/registry/bases/base/ui/input.tsx
function S({ className: e, type: t, ...n }) {
	return /* @__PURE__ */ (0, b.jsx)(x, {
		type: t,
		"data-slot": "input",
		className: u("cn-input w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", e),
		...n
	});
}
export { S as t };
