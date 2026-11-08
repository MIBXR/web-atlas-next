import { t as e } from "./filterDOMProps-CJYy6efO.js";
import { S as t } from "./useKeyboard-CqNSkGJ-.js";
import { d as n } from "./utils-UBVJ5JR_.js";
import { n as r } from "./useFocusable-D0mnHSRC.js";
import { t as i } from "./useFormReset-DizqO0T1.js";
import { i as a, s as o, t as s } from "./useFormValidation-NZK9JasV.js";
import { t as c } from "./usePress-C9PowRxI.js";
import { t as l } from "./useSlot-Bg_cubCK.js";
import { i as u, n as d } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/toggle/useToggle.mjs
var f = /* @__PURE__ */ u(d(), 1);
function p(u, d, p) {
	let { isDisabled: m = !1, isReadOnly: h = !1, value: g, name: _, form: v, children: y, isRequired: b, validationBehavior: x = "aria", "aria-label": S, "aria-labelledby": C, "aria-describedby": w, onPressStart: T, onPressEnd: E, onPressChange: D, onPress: O, onPressUp: k, onClick: A } = u, j = o({
		...u,
		value: d.isSelected
	}), { isInvalid: M, validationErrors: N, validationDetails: P } = j.displayValidation;
	s(u, j, p);
	let F = (e) => {
		e.stopPropagation(), d.setSelected(t(e).checked);
	}, { pressProps: I, isPressed: L } = c({
		onPressStart: T,
		onPressEnd: E,
		onPressChange: D,
		onPress: O,
		onPressUp: k,
		onClick: A,
		isDisabled: m
	}), [R, z] = (0, f.useState)(!1), { pressProps: B } = c({
		onPressStart(e) {
			e.pointerType === "keyboard" || e.pointerType === "virtual" ? e.continuePropagation() : (T?.(e), D?.(!0), z(!0));
		},
		onPressEnd(e) {
			e.pointerType === "keyboard" || e.pointerType === "virtual" ? e.continuePropagation() : (E?.(e), D?.(!1), z(!1));
		},
		onPressUp(e) {
			e.pointerType === "keyboard" || e.pointerType === "virtual" ? e.continuePropagation() : k?.(e);
		},
		onClick: A,
		onPress(e) {
			if (e.pointerType === "keyboard" || e.pointerType === "virtual") {
				e.continuePropagation();
				return;
			}
			O?.(e), d.toggle(), p.current?.focus();
			let { [a]: t } = u, { commitValidation: n } = t || j;
			n();
		},
		isDisabled: m || h
	}), { focusableProps: V } = r(u, p), H = n(I, V), U = e(u, { labelable: !0 });
	i(p, d.defaultSelected, d.setSelected);
	let W = l(), G = l();
	return {
		labelProps: n(B, { onClick: (e) => e.preventDefault() }),
		inputProps: n(U, {
			checked: d.isSelected,
			"aria-required": b && x === "aria" || void 0,
			required: b && x === "native",
			"aria-invalid": M || u.validationState === "invalid" || void 0,
			"aria-errormessage": u["aria-errormessage"],
			"aria-controls": u["aria-controls"],
			"aria-readonly": h || void 0,
			"aria-describedby": [
				W.id,
				G.id,
				w
			].filter(Boolean).join(" ") || void 0,
			onChange: F,
			disabled: m,
			...g == null ? {} : { value: g },
			name: _,
			form: v,
			type: "checkbox",
			...H
		}),
		descriptionProps: W,
		errorMessageProps: G,
		isSelected: d.isSelected,
		isPressed: L || R,
		isDisabled: m,
		isReadOnly: h,
		isInvalid: M || u.validationState === "invalid",
		validationErrors: N,
		validationDetails: P
	};
}
export { p as t };
