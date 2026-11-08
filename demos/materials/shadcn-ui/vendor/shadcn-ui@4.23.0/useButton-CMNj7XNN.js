import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { f as n } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as r } from "./useStableCallback-BmDujACN.js";
import { t as i } from "./useIsoLayoutEffect-B0B6th0o.js";
import { n as a, r as o, u as s } from "./useRenderElement-Bc91YjHo.js";
// node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
var c = /* @__PURE__ */ e(t(), 1), l = /*#__PURE__*/ c.createContext(void 0);
function u(e = !1) {
	let t = c.useContext(l);
	if (t === void 0 && !e) throw Error(s(16));
	return t;
}
// node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
function d(e) {
	let { focusableWhenDisabled: t, disabled: n, composite: r = !1, tabIndex: i = 0, isNativeButton: a } = e, o = r && t !== !1, s = r && t === !1;
	return { props: c.useMemo(() => {
		let e = { onKeyDown(e) {
			n && t && e.key !== "Tab" && e.preventDefault();
		} };
		return r || (e.tabIndex = i, !a && n && (e.tabIndex = t ? i : -1)), (a && (t || o) || !a && n) && (e["aria-disabled"] = n), a && (!t || s) && (e.disabled = n), e;
	}, [
		r,
		n,
		t,
		o,
		s,
		a,
		i
	]) };
}
// node_modules/@base-ui/react/internals/use-button/useButton.mjs
function f(e = {}) {
	let { disabled: t = !1, focusableWhenDisabled: n, tabIndex: s = 0, native: l = !0, composite: f } = e, h = c.useRef(null), g = u(!0), _ = f ?? g !== void 0, { props: v } = d({
		focusableWhenDisabled: n,
		disabled: t,
		composite: _,
		tabIndex: s,
		isNativeButton: l
	}), y = c.useCallback(() => {
		let e = h.current;
		p(e) && _ && t && v.disabled === void 0 && e.disabled && (e.disabled = !1);
	}, [
		t,
		v.disabled,
		_
	]);
	return i(y, [y]), {
		getButtonProps: c.useCallback((e = {}) => {
			let { onClick: n, onMouseDown: r, onKeyUp: i, onKeyDown: s, onPointerDown: c, ...u } = e;
			return o({
				onClick(e) {
					t ? e.preventDefault() : n?.(e);
				},
				onMouseDown(e) {
					t || r?.(e);
				},
				onKeyDown(e) {
					if (t || (a(e), s?.(e), e.baseUIHandlerPrevented)) return;
					let r = e.target === e.currentTarget, i = e.currentTarget, o = p(i), c = !l && m(i), u = r && (l ? o : !c), d = e.key === "Enter", f = e.key === " ", h = i.getAttribute("role"), g = h?.startsWith("menuitem") || h === "option" || h === "gridcell";
					if (r && _ && f) {
						if (e.defaultPrevented && g) return;
						e.preventDefault(), c || l && o ? (i.click(), e.preventBaseUIHandler()) : u && (n?.(e), e.preventBaseUIHandler());
					} else u && (!l && (f || d) && e.preventDefault(), !l && d && n?.(e));
				},
				onKeyUp(e) {
					t || (a(e), i?.(e), e.target === e.currentTarget && l && _ && p(e.currentTarget) && e.key === " " ? e.preventDefault() : e.baseUIHandlerPrevented || e.target === e.currentTarget && !l && !_ && e.key === " " && n?.(e));
				},
				onPointerDown(e) {
					t ? e.preventDefault() : c?.(e);
				}
			}, l ? { type: "button" } : { role: "button" }, v, u);
		}, [
			t,
			v,
			_,
			l
		]),
		buttonRef: r((e) => {
			h.current = e, y();
		})
	};
}
function p(e) {
	return n(e) && e.tagName === "BUTTON";
}
function m(e) {
	return !!(e?.tagName === "A" && e?.href);
}
export { l as n, u as r, f as t };
