import { d as e, f as t } from "./utils-UBVJ5JR_.js";
import { D as n, E as r, P as i, S as a, d as o, f as s, j as c, l as ee, m as l, p as u, v as d, z as f } from "./useKeyboard-CqNSkGJ-.js";
import { n as p, t as m } from "./textSelection-FLhV5J9J.js";
import { t as h } from "./getMetaValue-BWDF30Qb.js";
import { i as g, n as _ } from "./jsx-runtime-C1t0izHF.js";
import { a as v, i as y } from "./useHover-DxA7bNQs.js";
import { n as b } from "./focusSafely-BRvDv2aU.js";
import { t as x } from "./react-dom-Dipvgcxr.js";
// node_modules/react-aria/dist/private/utils/getNonce.mjs
var S = /* @__PURE__ */ new WeakMap();
function C(e) {
	let t = r(e), n = S.get(t);
	return n ??= h("csp-nonce", t), n !== void 0 && S.set(t, n), n;
}
// node_modules/react-aria/dist/private/interactions/context.mjs
var w = /* @__PURE__ */ g(_(), 1), T = w.createContext({ register: () => {} });
T.displayName = "PressResponderContext", x();
function te(t) {
	let n = (0, w.useContext)(T);
	if (n) {
		let { register: r, ref: i, ...a } = n;
		t = e(a, t), r();
	}
	return b(n, t.ref), t;
}
var E = class {
	#e;
	constructor(e, t, n, r) {
		this.#e = !0;
		let i = (r?.target ?? n.currentTarget)?.getBoundingClientRect(), a, o = 0, s, c = null;
		n.clientX != null && n.clientY != null && (s = n.clientX, c = n.clientY), i && (s != null && c != null ? (a = s - i.left, o = c - i.top) : (a = i.width / 2, o = i.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = a, this.y = o, this.key = n.key;
	}
	continuePropagation() {
		this.#e = !1;
	}
	get shouldStopPropagation() {
		return this.#e;
	}
}, D = Symbol("linkClicked"), O = "react-aria-pressable-style", k = "data-react-aria-pressable";
function A(n) {
	let { onPress: h, onPressChange: g, onPressStart: _, onPressEnd: b, onPressUp: x, onClick: S, isDisabled: T, isPressed: A, preventFocusOnPress: P, shouldCancelOnPointerExit: I, allowTextSelectionOnPress: L, ref: R, ...z } = te(n), [B, V] = (0, w.useState)(!1), H = (0, w.useRef)({
		isPressed: !1,
		ignoreEmulatedMouseEvents: !1,
		didFirePressStart: !1,
		isTriggeringEvent: !1,
		activePointerId: null,
		target: null,
		isOverTarget: !1,
		pointerType: null,
		disposables: []
	}), { addGlobalListener: U, removeAllGlobalListeners: W } = v(), G = (0, w.useCallback)((e, t) => {
		let n = H.current;
		if (T || n.didFirePressStart) return !1;
		let r = !0;
		if (n.isTriggeringEvent = !0, _) {
			let n = new E("pressstart", t, e);
			_(n), r = n.shouldStopPropagation;
		}
		return g && g(!0), n.isTriggeringEvent = !1, n.didFirePressStart = !0, V(!0), r;
	}, [
		T,
		_,
		g
	]), K = (0, w.useCallback)((e, t, n = !0) => {
		let r = H.current;
		if (!r.didFirePressStart) return !1;
		r.didFirePressStart = !1, r.isTriggeringEvent = !0;
		let i = !0;
		if (b) {
			let n = new E("pressend", t, e);
			b(n), i = n.shouldStopPropagation;
		}
		if (g && g(!1), V(!1), h && n && !T) {
			let n = new E("press", t, e);
			h(n), i &&= n.shouldStopPropagation;
		}
		return r.isTriggeringEvent = !1, i;
	}, [
		T,
		b,
		g,
		h
	]), q = y(K), ne = (0, w.useCallback)((e, t) => {
		let n = H.current;
		if (T) return !1;
		if (x) {
			n.isTriggeringEvent = !0;
			let r = new E("pressup", t, e);
			return x(r), n.isTriggeringEvent = !1, r.shouldStopPropagation;
		}
		return !0;
	}, [T, x]), J = y(ne), Y = (0, w.useCallback)((e) => {
		let t = H.current;
		if (t.isPressed && t.target) {
			t.didFirePressStart && t.pointerType != null && K(N(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, W(), L || p(t.target);
			for (let e of t.disposables) e();
			t.disposables = [];
		}
	}, [
		L,
		W,
		K
	]), X = y(Y);
	(0, w.useEffect)(() => {
		T && H.current.isPressed && X({
			currentTarget: H.current.target,
			shiftKey: !1,
			ctrlKey: !1,
			metaKey: !1,
			altKey: !1
		});
	}, [T]);
	let Z = (0, w.useCallback)((e) => {
		I && Y(e);
	}, [I, Y]), Q = (0, w.useCallback)((e) => {
		T || S?.(e);
	}, [T, S]), $ = (0, w.useCallback)((e, t) => {
		if (!T && S) {
			let n = new MouseEvent("click", e);
			o(n, t), S(ee(n));
		}
	}, [T, S]), re = (0, w.useMemo)(() => {
		let e = H.current, n = {
			onKeyDown(n) {
				if (M(n.nativeEvent, n.currentTarget) && d(n.currentTarget, a(n))) {
					F(a(n), n.key) && n.preventDefault();
					let i = !0;
					!e.isPressed && !n.repeat && (e.target = n.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", i = G(n, "keyboard"));
					let s = n.currentTarget;
					U(r(n.currentTarget), "keyup", t((t) => {
						M(t, s) && !t.repeat && d(s, a(t)) && e.target && J(N(e.target, t), "keyboard");
					}, o), !0), i && n.stopPropagation(), n.metaKey && f() && e.metaKeyEvents?.set(n.key, n.nativeEvent);
				} else n.key === "Meta" && (e.metaKeyEvents = /* @__PURE__ */ new Map());
			},
			onClick(t) {
				if ((!t || d(t.currentTarget, a(t))) && t && t.button === 0 && !e.isTriggeringEvent && !c.isOpening) {
					let n = !0;
					if (T && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && (e.pointerType === "virtual" || l(t.nativeEvent))) {
						let e = G(t, "virtual"), r = J(t, "virtual"), i = q(t, "virtual");
						Q(t), n = e && r && i;
					} else if (e.isPressed && e.pointerType !== "keyboard") {
						let r = e.pointerType || t.nativeEvent.pointerType || "virtual", i = J(N(t.currentTarget, t), r), a = q(N(t.currentTarget, t), r, !0);
						n = i && a, e.isOverTarget = !1, Q(t), X(t);
					}
					e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation();
				}
			}
		}, o = (t) => {
			if (e.isPressed && e.target && M(t, e.target)) {
				F(a(t), t.key) && t.preventDefault();
				let n = a(t), r = d(e.target, n);
				q(N(e.target, t), "keyboard", r), r && $(t, e.target), W(), t.key !== "Enter" && j(e.target) && d(e.target, n) && !t[D] && (t[D] = !0, c(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key);
			} else if (t.key === "Meta" && e.metaKeyEvents?.size) {
				let t = e.metaKeyEvents;
				e.metaKeyEvents = void 0;
				for (let n of t.values()) e.target?.dispatchEvent(new KeyboardEvent("keyup", n));
			}
		};
		if (typeof PointerEvent < "u") {
			n.onPointerDown = (n) => {
				if (n.button !== 0 || !d(n.currentTarget, a(n))) return;
				if (u(n.nativeEvent)) {
					e.pointerType = "virtual";
					return;
				}
				e.pointerType = n.pointerType;
				let i = !0;
				if (!e.isPressed) {
					e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = n.pointerId, e.target = n.currentTarget, L || m(e.target), i = G(n, e.pointerType);
					let s = a(n);
					"releasePointerCapture" in s && ("hasPointerCapture" in s ? s.hasPointerCapture(n.pointerId) && s.releasePointerCapture(n.pointerId) : s.releasePointerCapture(n.pointerId)), U(r(n.currentTarget), "pointerup", t, !1), U(r(n.currentTarget), "pointercancel", o, !1);
				}
				i && n.stopPropagation();
			}, n.onMouseDown = (t) => {
				if (d(t.currentTarget, a(t)) && t.button === 0) {
					if (P) {
						let n = s(t.target);
						n && e.disposables.push(n);
					}
					t.stopPropagation();
				}
			}, n.onPointerUp = (t) => {
				d(t.currentTarget, a(t)) && e.pointerType !== "virtual" && t.button === 0 && !e.isPressed && J(t, e.pointerType || t.pointerType);
			}, n.onPointerEnter = (t) => {
				t.pointerId === e.activePointerId && e.target && !e.isOverTarget && e.pointerType != null && (e.isOverTarget = !0, G(N(e.target, t), e.pointerType));
			}, n.onPointerLeave = (t) => {
				t.pointerId === e.activePointerId && e.target && e.isOverTarget && e.pointerType != null && (e.isOverTarget = !1, q(N(e.target, t), e.pointerType, !1), Z(t));
			};
			let t = (t) => {
				if (t.pointerId === e.activePointerId && e.isPressed && t.button === 0 && e.target) {
					if (d(e.target, a(t)) && e.pointerType != null) {
						let n = !1, r = setTimeout(() => {
							e.isPressed && e.target instanceof HTMLElement && (n ? X(t) : (i(e.target), e.target.click()));
						}, 80);
						U(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r));
					} else X(t);
					e.isOverTarget = !1;
				}
			}, o = (e) => {
				X(e);
			};
			n.onDragStart = (e) => {
				d(e.currentTarget, a(e)) && X(e);
			};
		}
		return n;
	}, [
		U,
		T,
		P,
		W,
		L,
		Z,
		G,
		Q,
		$
	]);
	return (0, w.useEffect)(() => {
		if (!R) return;
		let e = r(R.current);
		if (!e || !e.head || e.getElementById(O)) return;
		let t = e.createElement("style");
		t.id = O;
		let n = C(e);
		n && (t.nonce = n), t.textContent = `
@layer {
  [${k}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t);
	}, [R]), (0, w.useEffect)(() => {
		let e = H.current;
		return () => {
			L || p(e.target ?? void 0);
			for (let t of e.disposables) t();
			e.disposables = [];
		};
	}, [L]), {
		isPressed: A || B,
		pressProps: e(z, re, { [k]: !0 })
	};
}
function j(e) {
	return e.tagName === "A" && e.hasAttribute("href");
}
function M(e, t) {
	let { key: r, code: i } = e, a = t, o = a.getAttribute("role");
	return (r === "Enter" || r === " " || r === "Spacebar" || i === "Space") && !(a instanceof n(a).HTMLInputElement && !L(a, r) || a instanceof n(a).HTMLTextAreaElement || a.isContentEditable) && !((o === "link" || !o && j(a)) && r !== "Enter");
}
function N(e, t) {
	let n = t.clientX, r = t.clientY;
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
		clientX: n,
		clientY: r,
		key: t.key
	};
}
function P(e) {
	return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !j(e);
}
function F(e, t) {
	return f() && t === "Enter" ? !1 : e instanceof HTMLInputElement ? t === "Enter" && (e.type === "checkbox" || e.type === "radio") ? !1 : !L(e, t) : P(e);
}
var I = /* @__PURE__ */ new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]);
function L(e, t) {
	return e.type === "checkbox" || e.type === "radio" ? t === " " : I.has(e.type);
}
export { T as n, C as r, A as t };
