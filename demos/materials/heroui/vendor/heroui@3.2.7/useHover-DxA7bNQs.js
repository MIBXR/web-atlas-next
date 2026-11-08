import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
import { E as n, S as r, b as i, c as a, d as o, l as s, n as c, s as l, u, v as d } from "./useKeyboard-CqNSkGJ-.js";
import { t as f } from "./useLayoutEffect-Bx2X4QEP.js";
// node_modules/react-aria/dist/private/utils/useGlobalListeners.mjs
var p = /* @__PURE__ */ e(t(), 1);
function m() {
	let e = (0, p.useRef)(/* @__PURE__ */ new Map()), t = (0, p.useCallback)((t, n, r, i) => {
		let a = i?.once ? (...t) => {
			e.current.delete(r), r(...t);
		} : r;
		e.current.set(r, {
			type: n,
			eventTarget: t,
			fn: a,
			options: i
		}), t.addEventListener(n, a, i);
	}, []), n = (0, p.useCallback)((t, n, r, i) => {
		let a = e.current.get(r)?.fn || r;
		t.removeEventListener(n, a, i), e.current.delete(r);
	}, []), r = (0, p.useCallback)(() => {
		e.current.forEach((e, t) => {
			n(e.eventTarget, e.type, t, e.options);
		});
	}, [n]);
	return (0, p.useEffect)(() => r, [r]), {
		addGlobalListener: t,
		removeGlobalListener: n,
		removeAllGlobalListeners: r
	};
}
// node_modules/react-aria/dist/private/utils/useEffectEvent.mjs
var h = p.useInsertionEffect ?? f;
function g(e) {
	let t = (0, p.useRef)(null);
	return h(() => {
		t.current = e;
	}, [e]), (0, p.useCallback)((...e) => {
		let n = t.current;
		return n?.(...e);
	}, []);
}
// node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
function _(e) {
	let { isDisabled: t, onBlurWithin: a, onFocusWithin: c, onFocusWithinChange: l } = e, f = (0, p.useRef)({ isFocusWithin: !1 }), { addGlobalListener: h, removeAllGlobalListeners: g } = m(), _ = (0, p.useCallback)((e) => {
		d(e.currentTarget, r(e)) && f.current.isFocusWithin && !d(e.currentTarget, e.relatedTarget) && (f.current.isFocusWithin = !1, g(), a && a(e), l && l(!1));
	}, [
		a,
		l,
		f,
		g
	]), v = u(_), y = (0, p.useCallback)((e) => {
		if (!d(e.currentTarget, r(e))) return;
		let t = r(e), a = n(t), u = i(a);
		if (!f.current.isFocusWithin && u === t) {
			c && c(e), l && l(!0), f.current.isFocusWithin = !0, v(e);
			let t = e.currentTarget;
			h(a, "focus", (e) => {
				let n = r(e);
				if (f.current.isFocusWithin && !d(t, n)) {
					let e = new a.defaultView.FocusEvent("blur", { relatedTarget: n });
					o(e, t);
					let r = s(e);
					_(r);
				}
			}, { capture: !0 });
		}
	}, [
		c,
		l,
		v,
		h,
		_
	]);
	return t ? { focusWithinProps: {
		onFocus: void 0,
		onBlur: void 0
	} } : { focusWithinProps: {
		onFocus: y,
		onBlur: _
	} };
}
// node_modules/react-aria/dist/private/focus/useFocusRing.mjs
function v(e = {}) {
	let { autoFocus: t = !1, isTextInput: n, within: r } = e, i = (0, p.useRef)({
		isFocused: !1,
		isFocusVisible: t || l()
	}), [o, s] = (0, p.useState)(!1), [u, d] = (0, p.useState)(() => i.current.isFocused && i.current.isFocusVisible), f = (0, p.useCallback)(() => d(i.current.isFocused && i.current.isFocusVisible), []), m = (0, p.useCallback)((e) => {
		i.current.isFocused = e, i.current.isFocusVisible = l(), s(e), f();
	}, [f]);
	a((e) => {
		i.current.isFocusVisible = e, f();
	}, [n, o], {
		enabled: o,
		isTextInput: n
	});
	let { focusProps: h } = c({
		isDisabled: r,
		onFocusChange: m
	}), { focusWithinProps: g } = _({
		isDisabled: !r,
		onFocusWithinChange: m
	});
	return {
		isFocused: o,
		isFocusVisible: u,
		focusProps: r ? g : h
	};
}
// node_modules/react-aria/dist/private/interactions/useHover.mjs
var y = !1, b = 0;
function x() {
	y = !0, setTimeout(() => {
		y = !1;
	}, 500);
}
function S(e) {
	e.pointerType === "touch" && x();
}
function C() {
	let e = n(null);
	if (e !== void 0) return b === 0 && typeof PointerEvent < "u" && e.addEventListener("pointerup", S), b++, () => {
		b--, b > 0 || typeof PointerEvent < "u" && e.removeEventListener("pointerup", S);
	};
}
function w(e) {
	let { onHoverStart: t, onHoverChange: i, onHoverEnd: a, isDisabled: o } = e, [s, c] = (0, p.useState)(!1), l = (0, p.useRef)({
		isHovered: !1,
		ignoreEmulatedMouseEvents: !1,
		pointerType: "",
		target: null
	}).current;
	(0, p.useEffect)(C, []);
	let { addGlobalListener: u, removeAllGlobalListeners: f } = m(), { hoverProps: h, triggerHoverEnd: g } = (0, p.useMemo)(() => {
		let e = (e, a) => {
			if (l.pointerType = a, o || a === "touch" || l.isHovered || !d(e.currentTarget, r(e))) return;
			l.isHovered = !0;
			let f = e.currentTarget;
			l.target = f, u(n(r(e)), "pointerover", (e) => {
				l.isHovered && l.target && !d(l.target, r(e)) && s(e, e.pointerType);
			}, { capture: !0 }), t && t({
				type: "hoverstart",
				target: f,
				pointerType: a
			}), i && i(!0), c(!0);
		}, s = (e, t) => {
			let n = l.target;
			l.pointerType = "", l.target = null, t !== "touch" && l.isHovered && n && (l.isHovered = !1, f(), a && a({
				type: "hoverend",
				target: n,
				pointerType: t
			}), i && i(!1), c(!1));
		}, p = {};
		return typeof PointerEvent < "u" && (p.onPointerEnter = (t) => {
			y && t.pointerType === "mouse" || e(t, t.pointerType);
		}, p.onPointerLeave = (e) => {
			!o && d(e.currentTarget, r(e)) && s(e, e.pointerType);
		}), {
			hoverProps: p,
			triggerHoverEnd: s
		};
	}, [
		t,
		i,
		a,
		o,
		l,
		u,
		f
	]);
	return (0, p.useEffect)(() => {
		o && g({ currentTarget: l.target }, l.pointerType);
	}, [o]), {
		hoverProps: h,
		isHovered: s
	};
}
export { m as a, g as i, v as n, _ as r, w as t };
