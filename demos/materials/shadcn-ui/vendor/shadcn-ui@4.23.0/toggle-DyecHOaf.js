import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./useControlled-BkmszdIY.js";
import { t as r } from "./useBaseUiId-BwhhMxTY.js";
import { t as i, u as a } from "./useRenderElement-Bc91YjHo.js";
import { t as o } from "./useButton-CMNj7XNN.js";
import { t as s } from "./CompositeItem-Vp60fN0N.js";
import { t as c, x as l } from "./createBaseUIEventDetails-DG51vPHx.js";
import { t as u } from "./jsx-runtime-lAxUcZjR.js";
import { t as d } from "./dist-zgg4f6ja.js";
import { t as f } from "./dist-DCi9UB7o.js";
// node_modules/@base-ui/react/toggle-group/ToggleGroupContext.mjs
var p = /* @__PURE__ */ e(t(), 1), m = /*#__PURE__*/ p.createContext(void 0);
function h(e = !0) {
	let t = p.useContext(m);
	if (t === void 0 && !e) throw Error(a(7));
	return t;
}
// node_modules/@base-ui/react/toggle/Toggle.mjs
var g = u(), _ = /*#__PURE__*/ p.forwardRef(function(e, t) {
	let { className: a, defaultPressed: u = !1, disabled: d = !1, form: f, onPressedChange: m, pressed: _, render: v, type: y, value: b, nativeButton: x = !0, style: S, ...C } = e, w = r(b || void 0), T = h(), E = T?.value ?? [], D = T ? void 0 : u, O = (d || T?.disabled) ?? !1, [k, A] = n({
		controlled: T ? w !== void 0 && E.indexOf(w) > -1 : _,
		default: D,
		name: "Toggle",
		state: "pressed"
	}), { getButtonProps: j, buttonRef: M } = o({
		disabled: O,
		native: x
	}), N = {
		disabled: O,
		pressed: k
	}, P = [M, t], F = [
		{
			"aria-pressed": k,
			onClick(e) {
				let t = !k, n = c(l, e.nativeEvent);
				m?.(t, n), n.isCanceled || (w && T?.setGroupValue?.(w, t, n), n.isCanceled || A(t));
			}
		},
		C,
		j
	], I = i("button", e, {
		enabled: !T,
		state: N,
		ref: P,
		props: F
	}), L = p.useMemo(() => ({
		disabled: O,
		focusableWhenDisabled: !1
	}), [O]);
	return T ? /*#__PURE__*/ (0, g.jsx)(s, {
		tag: "button",
		render: v,
		className: a,
		style: S,
		metadata: L,
		state: N,
		refs: P,
		props: F
	}) : I;
}), v = d("cn-toggle group/toggle inline-flex items-center justify-center whitespace-nowrap outline-none hover:bg-muted focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "cn-toggle-variant-default",
			outline: "cn-toggle-variant-outline"
		},
		size: {
			default: "cn-toggle-size-default",
			sm: "cn-toggle-size-sm",
			lg: "cn-toggle-size-lg"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function y({ className: e, variant: t = "default", size: n = "default", ...r }) {
	return /* @__PURE__ */ (0, g.jsx)(_, {
		"data-slot": "toggle",
		className: f(v({
			variant: t,
			size: n,
			className: e
		})),
		...r
	});
}
export { m as i, v as n, _ as r, y as t };
