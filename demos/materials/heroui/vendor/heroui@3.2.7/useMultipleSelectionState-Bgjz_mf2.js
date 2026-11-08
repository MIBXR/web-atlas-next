import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
import { t as n } from "./react-dom-Dipvgcxr.js";
import { a as r, i, l as a, t as o, u as s } from "./virtualFocus-D_kYTh--.js";
import { D as c, E as l, M as u, P as d, S as f, V as p, b as m, g as h, j as g, r as _, t as v, v as y, y as b, z as x } from "./useKeyboard-CqNSkGJ-.js";
import { t as S } from "./useLayoutEffect-Bx2X4QEP.js";
import { d as C, f as ee, m as w } from "./utils-UBVJ5JR_.js";
import { r as te } from "./FocusScope-C6wAY3W6.js";
import { a as T } from "./useHover-DxA7bNQs.js";
import { t as ne } from "./focusSafely-BRvDv2aU.js";
import { n as E, r as D, t as O } from "./scrollIntoView-D_15IrGl.js";
import { t as k } from "./useEvent-QtR06JAA.js";
import { t as A } from "./usePress-C9PowRxI.js";
import { t as j } from "./I18nProvider-zGzu-4zN.js";
import { t as M } from "./useControlledState-BbVlCDcL.js";
// node_modules/react-aria/dist/private/utils/useUpdateLayoutEffect.mjs
var N = /* @__PURE__ */ e(t(), 1);
function P(e, t) {
	let n = (0, N.useRef)(!0), r = (0, N.useRef)(null);
	S(() => (n.current = !0, () => {
		n.current = !1;
	}), []), S(() => {
		n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t;
	}, t);
}
// node_modules/react-aria/dist/private/utils/inertValue.mjs
function F(e) {
	let t = N.version.split(".");
	return parseInt(t[0], 10) >= 19 ? e : e ? "true" : void 0;
}
// node_modules/react-aria/dist/private/interactions/useLongPress.mjs
var re = /* @__PURE__ */ e(n(), 1), I = 500;
function L(e) {
	let { isDisabled: t, pointerType: n, onLongPressStart: r, onLongPressEnd: i, onLongPress: a, threshold: o = I, accessibilityDescription: s } = e, u = (0, N.useRef)(void 0), { addGlobalListener: f, removeAllGlobalListeners: p } = T(), m = (e) => n ? e.pointerType === n : e.pointerType === "mouse" || e.pointerType === "touch", { pressProps: h } = A({
		isDisabled: t,
		onPressStart(e) {
			if (e.continuePropagation(), m(e)) {
				r && r({
					...e,
					type: "longpressstart"
				}), u.current = setTimeout(() => {
					e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: !0 })), f(e.target, "click", (e) => e.preventDefault(), { once: !0 }), l(e.target).activeElement !== e.target && d(e.target), a && a({
						...e,
						type: "longpress"
					}), u.current = void 0;
				}, o), e.pointerType === "touch" && f(e.target, "contextmenu", (e) => e.preventDefault(), { once: !0 });
				let t = c(e.target);
				f(t, "pointerup", () => {
					setTimeout(() => {
						p();
					}, 100);
				}, { once: !0 });
			}
		},
		onPressEnd(e) {
			u.current && clearTimeout(u.current), i && m(e) && i({
				...e,
				type: "longpressend"
			});
		}
	}), g = D(a && !t ? s : void 0);
	return { longPressProps: C(h, g) };
}
// node_modules/react-aria/dist/private/selection/utils.mjs
function ie(e) {
	return p() ? e.altKey : e.ctrlKey;
}
function R(e, t) {
	let n = `[data-key="${CSS.escape(String(t))}"]`, r = e.current?.dataset.collection;
	return r && (n = `[data-collection="${CSS.escape(r)}"]${n}`), e.current?.querySelector(n);
}
var z = /* @__PURE__ */ new WeakMap();
function ae(e) {
	let t = w();
	return z.set(e, t), t;
}
function B(e) {
	return z.get(e);
}
// node_modules/react-aria/dist/private/selection/useTypeSelect.mjs
var V = 1e3;
function oe(e) {
	let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e, i = (0, N.useRef)({
		search: "",
		timeout: void 0
	});
	return (0, N.useEffect)(() => {
		let e = i.current.timeout;
		return () => {
			clearTimeout(e);
		};
	}, [i]), { typeSelectProps: {
		onKeyDownCapture: t.getKeyForSearch ? (e) => {
			if (i.current.search.length > 0 && e.key === " ") {
				if (e.preventDefault(), (!("continuePropagation" in e) || "continuePropagation" in e && !e.isPropagationStopped()) && e.stopPropagation(), i.current.search += " ", t.getKeyForSearch != null) {
					let e = t.getKeyForSearch(i.current.search, n.focusedKey);
					e ??= t.getKeyForSearch(i.current.search), e != null && (n.setFocusedKey(e), r && r(e));
				}
				clearTimeout(i.current.timeout), i.current.timeout = setTimeout(() => {
					i.current.search = "";
				}, V);
			}
		} : void 0,
		onKeyDown: t.getKeyForSearch ? (e) => {
			let a = se(e.key);
			if (!(!a || e.ctrlKey || e.metaKey || e.altKey || !y(e.currentTarget, f(e)) || i.current.search.length === 0 && a === " ")) {
				if (i.current.search += a, t.getKeyForSearch != null) {
					let a = t.getKeyForSearch(i.current.search, n.focusedKey);
					if (a ??= t.getKeyForSearch(i.current.search), a != null) n.setFocusedKey(a), r && r(a), e.preventDefault(), "continuePropagation" in e || e.stopPropagation();
					else {
						i.current.search = "", clearTimeout(i.current.timeout), i.current.timeout = void 0;
						return;
					}
				}
				clearTimeout(i.current.timeout), i.current.timeout = setTimeout(() => {
					i.current.search = "";
				}, V);
			}
		} : void 0
	} };
}
function se(e) {
	return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
// node_modules/react-aria/dist/private/selection/useSelectableCollection.mjs
function ce(e) {
	let { selectionManager: t, keyboardDelegate: n, ref: c, autoFocus: l = !1, shouldFocusWrap: p = !1, disallowEmptySelection: g = !1, disallowSelectAll: S = !1, escapeKeyBehavior: ee = "clearSelection", selectOnFocus: w = t.selectionBehavior === "replace", disallowTypeAhead: T = !1, shouldUseVirtualFocus: D, allowsTabNavigation: A = !1, scrollRef: M = c, linkBehavior: F = "action", UNSTABLE_focusOnEntry: I } = e, { direction: L } = j(), z = u(), B = (e, n, r) => {
		if (n != null) {
			if (t.isLink(n) && F === "selection" && w && !ie(e)) {
				(0, re.flushSync)(() => {
					t.setFocusedKey(n, r);
				});
				let i = R(c, n), a = t.getItemProps(n);
				if (i) {
					z.open(i, e, a.href, a.routerOptions);
					return;
				}
				return !1;
			}
			if (t.setFocusedKey(n, r), t.isLink(n) && F === "override") return !1;
			if (e.shiftKey && t.selectionMode === "multiple") {
				t.extendSelection(n);
				return;
			}
			if (w && !ie(e)) {
				t.replaceSelection(n);
				return;
			}
		}
		return !1;
	}, V = (e) => {
		if (n.getKeyBelow) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyBelow?.(t.focusedKey);
			if (r == null && p && (r = n.getFirstKey?.(t.focusedKey)), r != null) {
				B(e, r);
				return;
			}
		}
		return !1;
	}, se = (e) => {
		if (n.getKeyAbove) {
			let r = t.focusedKey == null ? n.getLastKey?.() : n.getKeyAbove?.(t.focusedKey);
			if (r == null && p && (r = n.getLastKey?.(t.focusedKey)), r != null) {
				B(e, r);
				return;
			}
		}
		return !1;
	}, ce = (e) => {
		if (n.getFirstKey) {
			if (t.focusedKey === null && e.shiftKey) return !1;
			let i = n.getFirstKey(t.focusedKey, r(e));
			if (t.setFocusedKey(i), i != null) {
				if (r(e) && e.shiftKey && t.selectionMode === "multiple") {
					t.extendSelection(i);
					return;
				}
				if (w) {
					t.replaceSelection(i);
					return;
				}
			}
		}
		return !1;
	}, H = (e) => {
		if (n.getKeyLeftOf) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyLeftOf?.(t.focusedKey);
			if (r == null && p && (r = L === "rtl" ? n.getFirstKey?.(t.focusedKey) : n.getLastKey?.(t.focusedKey)), r != null) {
				B(e, r, L === "rtl" ? "first" : "last");
				return;
			}
		}
		return !1;
	}, le = (e) => {
		if (n.getKeyRightOf) {
			let r = t.focusedKey == null ? n.getFirstKey?.() : n.getKeyRightOf?.(t.focusedKey);
			if (r == null && p && (r = L === "rtl" ? n.getLastKey?.(t.focusedKey) : n.getFirstKey?.(t.focusedKey)), r != null) {
				B(e, r, L === "rtl" ? "last" : "first");
				return;
			}
		}
		return !1;
	}, ue = (e) => {
		if (n.getLastKey) {
			if (t.focusedKey === null && e.shiftKey) return !1;
			let i = n.getLastKey(t.focusedKey, r(e));
			if (t.setFocusedKey(i), i != null) {
				if (r(e) && e.shiftKey && t.selectionMode === "multiple") {
					t.extendSelection(i);
					return;
				}
				if (w) {
					t.replaceSelection(i);
					return;
				}
			}
		}
		return !1;
	}, U = (e) => {
		if (n.getKeyPageBelow && t.focusedKey != null) {
			let r = n.getKeyPageBelow(t.focusedKey);
			if (r != null) return B(e, r);
		}
		return !1;
	}, W = (e) => {
		if (n.getKeyPageAbove && t.focusedKey != null) {
			let r = n.getKeyPageAbove(t.focusedKey);
			if (r != null) return B(e, r);
		}
		return !1;
	}, G = () => {
		if (t.selectionMode === "multiple" && S !== !0) t.selectAll();
		else return !1;
	}, de = () => {
		if (ee === "clearSelection" && !g && t.selectedKeys.size !== 0) t.clearSelection();
		else return !1;
	}, K = () => {
		if (!A && c.current) {
			let e = te(c.current, { tabbable: !0 }), t, n;
			do
				n = e.lastChild(), n && (t = n);
			while (n);
			let r = m();
			t && (!b(t) || r && !h(r)) && d(t);
		}
		return {
			shouldContinuePropagation: !0,
			shouldPreventDefault: !1
		};
	}, fe = () => (!A && c.current && c.current.focus(), {
		shouldContinuePropagation: !0,
		shouldPreventDefault: !1
	}), q = (e, t) => ({
		[x() ? e + "+Shift+Alt" : e + "+Shift+Control"]: t,
		[e + "+Shift"]: t,
		[x() ? e + "+Alt" : e + "+Control"]: t,
		[e]: t
	}), { keyboardProps: pe } = v({
		shortcuts: {
			...q("ArrowDown", V),
			...q("ArrowUp", se),
			...q("ArrowLeft", H),
			...q("ArrowRight", le),
			...q("PageDown", U),
			...q("PageUp", W)
		},
		allowRepeats: !0
	}), { keyboardProps: me } = v({ shortcuts: {
		...q("Home", ce),
		...q("End", ue),
		"Mod+A": G,
		Escape: de,
		Tab: K,
		"Tab+Shift": fe
	} }), J = (0, N.useRef)({
		top: 0,
		left: 0
	});
	k(M, "scroll", () => {
		J.current = {
			top: M.current?.scrollTop ?? 0,
			left: M.current?.scrollLeft ?? 0
		};
	});
	let he = (e) => {
		if (t.isFocused) {
			y(e.currentTarget, f(e)) || t.setFocused(!1);
			return;
		}
		if (!y(e.currentTarget, f(e))) return;
		let r = _();
		t.setFocused(!0);
		let i = (e) => {
			e != null && (t.setFocusedKey(e), w && !t.isSelected(e) && t.replaceSelection(e));
		};
		if (I && (r === "keyboard" || r === "virtual")) i(I === "first" ? n.getFirstKey?.() : n.getLastKey?.());
		else if (t.focusedKey == null) {
			let r = e.relatedTarget;
			r && e.currentTarget.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING ? i(t.lastSelectedKey ?? n.getLastKey?.()) : i(t.firstSelectedKey ?? n.getFirstKey?.());
		} else M.current && (M.current.scrollTop = J.current.top, M.current.scrollLeft = J.current.left);
		if (t.focusedKey != null && M.current) {
			let e = R(c, t.focusedKey);
			e instanceof HTMLElement && (!b(e) && !D && d(e), (r === "keyboard" || I && r === "virtual") && E(e, { containingElement: c.current }));
		}
	}, Y = (e) => {
		y(e.currentTarget, e.relatedTarget) || t.setFocused(!1);
	}, X = (0, N.useRef)(!1);
	k(c, s, D ? (e) => {
		let { detail: n } = e;
		e.stopPropagation(), t.setFocused(!0), n?.focusStrategy === "first" && (X.current = !0);
	} : void 0);
	let Z = n.getFirstKey?.() ?? null;
	P(() => {
		if (X.current) {
			if (Z == null) {
				let e = m();
				i(c.current), o(e, null), t.collection.size > 0 && (X.current = !1);
			} else t.setFocusedKey(Z), X.current = !1;
		}
	}, [Z, t.collection.size]), P(() => {
		t.collection.size > 0 && (X.current = !1);
	}, [t.focusedKey]), k(c, a, D ? (e) => {
		e.stopPropagation(), t.setFocused(!1), e.detail?.clearFocusKey && t.setFocusedKey(null);
	} : void 0);
	let ge = (0, N.useRef)(l), Q = (0, N.useRef)(!1);
	(0, N.useEffect)(() => {
		if (ge.current) {
			let e = null;
			l === "first" && (e = n.getFirstKey?.() ?? null), l === "last" && (e = n.getLastKey?.() ?? null);
			let r = t.selectedKeys;
			if (r.size) {
				for (let n of r) if (t.canSelectItem(n)) {
					e = n;
					break;
				}
			}
			t.setFocused(!0), t.setFocusedKey(e), e != null && w && !r.size && t.canSelectItem(e) && t.replaceSelection(e), e == null && !D && c.current && ne(c.current), t.collection.size > 0 && (ge.current = !1, Q.current = !0);
		}
	});
	let _e = (0, N.useRef)(t.focusedKey), $ = (0, N.useRef)(null);
	(0, N.useEffect)(() => {
		if (t.isFocused && t.focusedKey != null && (t.focusedKey !== _e.current || Q.current) && M.current && c.current) {
			let e = _(), n = R(c, t.focusedKey);
			if (!(n instanceof HTMLElement)) return;
			(e === "keyboard" || Q.current) && ($.current && cancelAnimationFrame($.current), $.current = requestAnimationFrame(() => {
				M.current && (O(M.current, n), e !== "virtual" && E(n, { containingElement: c.current }));
			}));
		}
		!D && t.isFocused && t.focusedKey == null && _e.current != null && c.current && ne(c.current), _e.current = t.focusedKey, Q.current = !1;
	}), (0, N.useEffect)(() => () => {
		$.current && cancelAnimationFrame($.current);
	}, []), k(c, "react-aria-focus-scope-restore", (e) => {
		e.preventDefault(), t.setFocused(!0);
	});
	let ve = {
		...C(me, pe),
		onFocus: he,
		onBlur: Y,
		onMouseDown(e) {
			M.current === f(e) && e.preventDefault();
		}
	}, { typeSelectProps: ye } = oe({
		keyboardDelegate: n,
		selectionManager: t
	});
	T || (ve = C(ye, ve));
	let be;
	D || (be = t.focusedKey == null ? 0 : -1);
	let xe = ae(t.collection);
	return { collectionProps: C(ve, {
		tabIndex: be,
		"data-collection": xe
	}) };
}
// node_modules/react-aria/dist/private/selection/useSelectableItem.mjs
function H(e) {
	let { id: t, selectionManager: n, key: a, ref: o, shouldSelectOnPressUp: s, shouldUseVirtualFocus: c, focus: l, isDisabled: d, onAction: p, allowsDifferentPressOrigin: _, linkBehavior: v = "action" } = e, y = u();
	t = w(t);
	let b = (e) => {
		if (e.pointerType === "keyboard" && ie(e)) n.toggleSelection(a);
		else {
			if (n.selectionMode === "none") return;
			if (n.isLink(a)) {
				if (v === "selection" && o.current) {
					let t = n.getItemProps(a);
					y.open(o.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
					return;
				}
				if (v === "override" || v === "none") return;
			}
			n.selectionMode === "single" ? n.isSelected(a) && !n.disallowEmptySelection ? n.toggleSelection(a) : n.replaceSelection(a) : e && e.shiftKey ? n.extendSelection(a) : n.selectionBehavior === "toggle" || e && (r(e) || e.pointerType === "touch" || e.pointerType === "virtual") ? n.toggleSelection(a) : n.replaceSelection(a);
		}
	};
	(0, N.useEffect)(() => {
		a === n.focusedKey && n.isFocused && (c ? i(o.current) : l ? l() : m() !== o.current && o.current && ne(o.current));
	}, [
		o,
		a,
		n.focusedKey,
		n.childFocusStrategy,
		n.isFocused,
		c
	]), d ||= n.isDisabled(a);
	let x = {};
	!c && !d ? x = {
		tabIndex: a === n.focusedKey ? 0 : -1,
		onFocus(e) {
			f(e) === o.current && n.setFocusedKey(a);
		}
	} : d && (x.onMouseDown = (e) => {
		e.preventDefault();
	}), (0, N.useEffect)(() => {
		d && n.focusedKey === a && n.setFocusedKey(null);
	}, [
		n,
		d,
		a
	]);
	let S = n.isLink(a) && v === "override", te = p && e.UNSTABLE_itemBehavior === "action", T = n.isLink(a) && v !== "selection" && v !== "none", E = !d && n.canSelectItem(a) && !S && !te, D = (p || T) && !d, O = D && (n.selectionBehavior === "replace" ? !E : !E || n.isEmpty), k = D && E && n.selectionBehavior === "replace", j = O || k, M = (0, N.useRef)(null), P = j && E, F = (0, N.useRef)(!1), re = (0, N.useRef)(!1), I = n.getItemProps(a), R = (e) => {
		p && (p(), o.current?.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: !0 }))), T && o.current && y.open(o.current, e, I.href, I.routerOptions);
	}, z = { ref: o };
	s ? (z.onPressStart = (e) => {
		M.current = e.pointerType, F.current = P, e.pointerType === "keyboard" && (!j || ue(e.key)) && b(e);
	}, _ ? (z.onPressUp = O ? void 0 : (e) => {
		e.pointerType === "mouse" && E && b(e);
	}, z.onPress = O ? R : (e) => {
		e.pointerType !== "keyboard" && e.pointerType !== "mouse" && E && b(e);
	}) : z.onPress = (e) => {
		if (O || k && e.pointerType !== "mouse") {
			if (e.pointerType === "keyboard" && !le(e.key)) return;
			R(e);
		} else e.pointerType !== "keyboard" && E && b(e);
	}) : (z.onPressStart = (e) => {
		M.current = e.pointerType, F.current = P, re.current = O, E && (e.pointerType === "mouse" && !O || e.pointerType === "keyboard" && (!D || ue(e.key))) && b(e);
	}, z.onPress = (e) => {
		(e.pointerType === "touch" || e.pointerType === "pen" || e.pointerType === "virtual" || e.pointerType === "keyboard" && j && le(e.key) || e.pointerType === "mouse" && re.current) && (j ? R(e) : E && b(e));
	});
	let ae = B(n.collection);
	if (x["data-collection"] = ae, x["data-key"] = a, z.preventFocusOnPress = c, c && (z = C(z, {
		onPressStart(e) {
			e.pointerType !== "touch" && (n.setFocused(!0), n.setFocusedKey(a));
		},
		onPress(e) {
			e.pointerType === "touch" && (n.setFocused(!0), n.setFocusedKey(a));
		}
	})), I) for (let e of [
		"onPressStart",
		"onPressEnd",
		"onPressChange",
		"onPress",
		"onPressUp",
		"onClick"
	]) I[e] && (z[e] = ee(z[e], I[e]));
	let { pressProps: V, isPressed: oe } = A(z), se = k ? (e) => {
		M.current === "mouse" && (e.stopPropagation(), e.preventDefault(), R(e));
	} : void 0, { longPressProps: ce } = L({
		isDisabled: !P,
		onLongPress(e) {
			e.pointerType === "touch" && (b(e), n.setSelectionBehavior("toggle"));
		}
	}), H = (e) => {
		M.current === "touch" && F.current && e.preventDefault();
	}, U = v !== "none" && n.isLink(a) ? (e) => {
		g.isOpening || e.preventDefault();
	} : void 0, W = C(x, E || O || c && !d ? V : {}, P ? ce : {}, {
		onDoubleClick: se,
		onDragStartCapture: H,
		onClick: U,
		id: t
	}, c ? { onMouseDown: (e) => e.preventDefault() } : void 0), G = (e) => {
		let t = e;
		for (; t && t !== o.current;) {
			let e = t.getAttribute("data-collection");
			if (e != null) return e !== ae;
			t = t.parentElement;
		}
		return h(e);
	}, de = W.onPointerDown;
	W.onPointerDown = (e) => {
		let t = f(e);
		t && t !== o.current && G(t) ? e.stopPropagation() : de?.(e);
	};
	let K = W.onMouseDown;
	return W.onMouseDown = (e) => {
		let t = f(e);
		t && t !== o.current && G(t) ? e.stopPropagation() : K?.(e);
	}, {
		itemProps: W,
		isPressed: oe,
		isSelected: n.isSelected(a),
		isFocused: n.isFocused && n.focusedKey === a,
		isDisabled: d,
		allowsSelection: E,
		hasAction: j
	};
}
function le(e) {
	return e === "Enter";
}
function ue(e) {
	return e === " ";
}
// node_modules/react-stately/dist/private/collections/getChildNodes.mjs
function U(e, t) {
	return typeof t.getChildren == "function" ? t.getChildren(e.key) : e.childNodes;
}
function W(e) {
	return G(e, 0);
}
function G(e, t) {
	if (t < 0) return;
	let n = 0;
	for (let r of e) {
		if (n === t) return r;
		n++;
	}
}
function de(e) {
	let t;
	for (let n of e) t = n;
	return t;
}
function K(e, t, n) {
	if (t.parentKey === n.parentKey) return t.index - n.index;
	let r = [...fe(e, t), t], i = [...fe(e, n), n], a = r.slice(0, i.length).findIndex((e, t) => e !== i[t]);
	return a === -1 ? r.findIndex((e) => e === n) >= 0 ? 1 : (i.findIndex((e) => e === t), -1) : (t = r[a], n = i[a], t.index - n.index);
}
function fe(e, t) {
	let n = [], r = t;
	for (; r?.parentKey != null;) r = e.getItem(r.parentKey), r && n.unshift(r);
	return n;
}
// node_modules/react-stately/dist/private/selection/Selection.mjs
var q = class e extends Set {
	constructor(t, n, r) {
		super(t), t instanceof e ? (this.anchorKey = n ?? t.anchorKey, this.currentKey = r ?? t.currentKey) : (this.anchorKey = n ?? null, this.currentKey = r ?? null);
	}
}, pe = class e {
	constructor(e, t, n) {
		this.collection = e, this.state = t, this.allowsCellSelection = n?.allowsCellSelection ?? !1, this._isSelectAll = null, this.layoutDelegate = n?.layoutDelegate || null, this.fullCollection = n?.fullCollection || null;
	}
	get selectionMode() {
		return this.state.selectionMode;
	}
	get disallowEmptySelection() {
		return this.state.disallowEmptySelection;
	}
	get selectionBehavior() {
		return this.state.selectionBehavior;
	}
	setSelectionBehavior(e) {
		this.state.setSelectionBehavior(e);
	}
	get isFocused() {
		return this.state.isFocused;
	}
	setFocused(e) {
		this.state.setFocused(e);
	}
	get focusedKey() {
		return this.state.focusedKey;
	}
	get childFocusStrategy() {
		return this.state.childFocusStrategy;
	}
	setFocusedKey(e, t) {
		(e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, t);
	}
	get selectedKeys() {
		return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
	}
	get rawSelection() {
		return this.state.selectedKeys;
	}
	isSelected(e) {
		if (this.state.selectionMode === "none") return !1;
		let t = this.getKey(e);
		return t == null ? !1 : this.state.selectedKeys === "all" ? this.canSelectItem(t) : this.state.selectedKeys.has(t);
	}
	get isEmpty() {
		return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
	}
	get isSelectAll() {
		if (this.isEmpty) return !1;
		if (this.state.selectedKeys === "all") return !0;
		if (this._isSelectAll != null) return this._isSelectAll;
		let e = this.getSelectAllKeys(), t = this.state.selectedKeys;
		return this._isSelectAll = e.every((e) => t.has(e)), this._isSelectAll;
	}
	get firstSelectedKey() {
		let e = null;
		for (let t of this.state.selectedKeys) {
			let n = this.collection.getItem(t);
			(!e || n && K(this.collection, n, e) < 0) && (e = n);
		}
		return e?.key ?? null;
	}
	get lastSelectedKey() {
		let e = null;
		for (let t of this.state.selectedKeys) {
			let n = this.collection.getItem(t);
			(!e || n && K(this.collection, n, e) > 0) && (e = n);
		}
		return e?.key ?? null;
	}
	get disabledKeys() {
		return this.state.disabledKeys;
	}
	get disabledBehavior() {
		return this.state.disabledBehavior;
	}
	extendSelection(e) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single") {
			this.replaceSelection(e);
			return;
		}
		let t = this.getKey(e);
		if (t == null) return;
		let n;
		if (this.state.selectedKeys === "all") n = new q([t], t, t);
		else {
			let e = this.state.selectedKeys, r = e.anchorKey ?? t;
			n = new q(e, r, t);
			for (let i of this.getKeyRange(r, e.currentKey ?? t)) n.delete(i);
			for (let e of this.getKeyRange(t, r)) this.canSelectItem(e) && n.add(e);
		}
		this.state.setSelectedKeys(n);
	}
	getKeyRange(e, t) {
		let n = this.collection.getItem(e), r = this.collection.getItem(t);
		return n && r ? K(this.collection, n, r) <= 0 ? this.getKeyRangeInternal(e, t) : this.getKeyRangeInternal(t, e) : [];
	}
	getKeyRangeInternal(e, t) {
		if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(e, t);
		let n = [], r = e;
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (e && (e.type === "item" || e.type === "cell" && this.allowsCellSelection) && n.push(r), r === t) return n;
			r = this.collection.getKeyAfter(r);
		}
		return [];
	}
	getKey(e) {
		let t = this.collection.getItem(e);
		if (!t || t.type === "cell" && this.allowsCellSelection) return e;
		for (; t && t.type !== "item" && t.parentKey != null;) t = this.collection.getItem(t.parentKey);
		return !t || t.type !== "item" ? null : t.key;
	}
	toggleSelection(e) {
		if (this.selectionMode === "none") return;
		if (this.selectionMode === "single" && !this.isSelected(e)) {
			this.replaceSelection(e);
			return;
		}
		let t = this.getKey(e);
		if (t == null) return;
		let n = new q(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
		n.has(t) ? n.delete(t) : this.canSelectItem(t) && (n.add(t), n.anchorKey = t, n.currentKey = t), this.disallowEmptySelection && n.size === 0 || this.state.setSelectedKeys(n);
	}
	replaceSelection(e) {
		if (this.selectionMode === "none") return;
		let t = this.getKey(e);
		if (t == null) return;
		let n = this.canSelectItem(t) ? new q([t], t, t) : new q();
		this.state.setSelectedKeys(n);
	}
	setSelectedKeys(e) {
		if (this.selectionMode === "none") return;
		let t = new q();
		for (let n of e) {
			let e = this.getKey(n);
			if (e != null && (t.add(e), this.selectionMode === "single")) break;
		}
		this.state.setSelectedKeys(t);
	}
	getSelectAllKeys() {
		let e = this.fullCollection ?? this.collection, t = [], n = (r) => {
			for (; r != null;) {
				if (this.canSelectItemIn(r, e)) {
					let i = e.getItem(r);
					i?.type === "item" && t.push(r), i?.hasChildNodes && (this.allowsCellSelection || i.type !== "item") && n(W(U(i, e))?.key ?? null);
				}
				r = e.getKeyAfter(r);
			}
		};
		return n(e.getFirstKey()), t;
	}
	selectAll() {
		!this.isSelectAll && this.selectionMode === "multiple" && this.state.setSelectedKeys("all");
	}
	clearSelection() {
		!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new q());
	}
	toggleSelectAll() {
		this.isSelectAll ? this.clearSelection() : this.selectAll();
	}
	select(e, t) {
		this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : this.selectionBehavior === "toggle" || t && (t.pointerType === "touch" || t.pointerType === "virtual") ? this.toggleSelection(e) : this.replaceSelection(e));
	}
	isSelectionEqual(e) {
		if (e === this.state.selectedKeys) return !0;
		let t = this.selectedKeys;
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	canSelectItem(e) {
		return this.canSelectItemIn(e, this.collection);
	}
	canSelectItemIn(e, t) {
		if (this.state.selectionMode === "none" || this.state.disabledKeys.has(e)) return !1;
		let n = t.getItem(e);
		return !(!n || n?.props?.isDisabled || n.type === "cell" && !this.allowsCellSelection);
	}
	isDisabled(e) {
		let t = this.collection.getItem(e);
		return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(e) || !!t?.props?.isDisabled) && t?.props?.disabledBehavior !== "selection";
	}
	isLink(e) {
		return !!this.collection.getItem(e)?.props?.href;
	}
	getItemProps(e) {
		return this.collection.getItem(e)?.props;
	}
	withCollection(t) {
		return new e(t, this.state, {
			allowsCellSelection: this.allowsCellSelection,
			layoutDelegate: this.layoutDelegate || void 0,
			fullCollection: this.fullCollection ?? this.collection
		});
	}
}, me = class {
	build(e, t) {
		return this.context = t, J(() => this.iterateCollection(e));
	}
	*iterateCollection(e) {
		let { children: t, items: n } = e;
		if (N.isValidElement(t) && t.type === N.Fragment) yield* this.iterateCollection({
			children: t.props.children,
			items: n
		});
		else if (typeof t == "function") {
			if (!n) throw Error("props.children was a function but props.items is missing");
			let e = 0;
			for (let r of n) yield* this.getFullNode({
				value: r,
				index: e
			}, { renderer: t }), e++;
		} else {
			let e = [];
			N.Children.forEach(t, (t) => {
				t && e.push(t);
			});
			let n = 0;
			for (let t of e) {
				let e = this.getFullNode({
					element: t,
					index: n
				}, {});
				for (let t of e) n++, yield t;
			}
		}
	}
	getKey(e, t, n, r) {
		if (e.key != null) return e.key;
		if (t.type === "cell" && t.key != null) return `${r}${t.key}`;
		let i = t.value;
		if (i != null) {
			let e = i.key ?? i.id;
			if (e == null) throw Error("No key found for item");
			return e;
		}
		return r ? `${r}.${t.index}` : `$.${t.index}`;
	}
	getChildState(e, t) {
		return { renderer: t.renderer || e.renderer };
	}
	*getFullNode(e, t, n, r) {
		if (N.isValidElement(e.element) && e.element.type === N.Fragment) {
			let i = [];
			N.Children.forEach(e.element.props.children, (e) => {
				i.push(e);
			});
			let a = e.index ?? 0;
			for (let e of i) yield* this.getFullNode({
				element: e,
				index: a++
			}, t, n, r);
			return;
		}
		let i = e.element;
		if (!i && e.value && t && t.renderer) {
			let n = this.cache.get(e.value);
			if (n && (!n.shouldInvalidate || !n.shouldInvalidate(this.context))) {
				n.index = e.index, n.parentKey = r ? r.key : null, yield n;
				return;
			}
			i = t.renderer(e.value);
		}
		if (N.isValidElement(i)) {
			let a = i.type;
			if (typeof a != "function" && typeof a.getCollectionNode != "function") {
				let e = i.type;
				throw Error(`Unknown element <${e}> in collection.`);
			}
			let o = a.getCollectionNode(i.props, this.context), s = e.index ?? 0, c = o.next();
			for (; !c.done && c.value;) {
				let a = c.value;
				e.index = s;
				let l = a.key ?? null;
				l ??= a.element ? null : this.getKey(i, e, t, n);
				let u = [...this.getFullNode({
					...a,
					key: l,
					index: s,
					wrapper: he(e.wrapper, a.wrapper)
				}, this.getChildState(t, a), n ? `${n}${i.key}` : i.key, r)];
				for (let t of u) {
					if (t.value = a.value ?? e.value ?? null, t.value && this.cache.set(t.value, t), e.type && t.type !== e.type) throw Error(`Unsupported type <${Y(t.type)}> in <${Y(r?.type ?? "unknown parent type")}>. Only <${Y(e.type)}> is supported.`);
					s++, yield t;
				}
				c = o.next(u);
			}
			return;
		}
		if (e.key == null || e.type == null) return;
		let a = this, o = {
			type: e.type,
			props: e.props,
			key: e.key,
			parentKey: r ? r.key : null,
			value: e.value ?? null,
			level: (r?.level ?? 0) + +(r?.type === "item"),
			index: e.index,
			rendered: e.rendered,
			textValue: e.textValue ?? "",
			"aria-label": e["aria-label"],
			wrapper: e.wrapper,
			shouldInvalidate: e.shouldInvalidate,
			hasChildNodes: e.hasChildNodes || !1,
			childNodes: J(function* () {
				if (!e.hasChildNodes || !e.childNodes) return;
				let n = 0;
				for (let r of e.childNodes()) {
					r.key != null && (r.key = `${o.key}${r.key}`);
					let e = a.getFullNode({
						...r,
						index: n
					}, a.getChildState(t, r), o.key, o);
					for (let t of e) n++, yield t;
				}
			})
		};
		yield o;
	}
	constructor() {
		this.cache = /* @__PURE__ */ new WeakMap();
	}
};
function J(e) {
	let t = [], n = null;
	return { *[Symbol.iterator]() {
		for (let e of t) yield e;
		n ||= e();
		for (let e of n) t.push(e), yield e;
	} };
}
function he(e, t) {
	if (e && t) return (n) => e(t(n));
	if (e) return e;
	if (t) return t;
}
function Y(e) {
	return e[0].toUpperCase() + e.slice(1);
}
// node_modules/react-stately/dist/private/collections/useCollection.mjs
function X(e, t, n) {
	let r = (0, N.useMemo)(() => new me(), []), { children: i, items: a, collection: o } = e;
	return (0, N.useMemo)(() => o || t(r.build({
		children: i,
		items: a
	}, n)), [
		r,
		i,
		a,
		o,
		n,
		t
	]);
}
// node_modules/react-stately/dist/private/selection/useMultipleSelectionState.mjs
function Z(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function ge(e) {
	let { selectionMode: t = "none", disallowEmptySelection: n = !1, allowDuplicateSelectionEvents: r, selectionBehavior: i = "toggle", disabledBehavior: a = "all" } = e, o = (0, N.useRef)(!1), [, s] = (0, N.useState)(!1), c = (0, N.useRef)(null), l = (0, N.useRef)(null), [, u] = (0, N.useState)(null), d = (0, N.useMemo)(() => Q(e.selectedKeys), [e.selectedKeys]), f = (0, N.useMemo)(() => Q(e.defaultSelectedKeys, new q()), [e.defaultSelectedKeys]), [p, m] = M(d, f, e.onSelectionChange), h = (0, N.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [e.disabledKeys]), [g, _] = (0, N.useState)(i);
	i === "replace" && g === "toggle" && typeof p == "object" && p.size === 0 && _("replace");
	let v = (0, N.useRef)(i);
	return (0, N.useEffect)(() => {
		i !== v.current && (_(i), v.current = i);
	}, [i]), {
		selectionMode: t,
		disallowEmptySelection: n,
		selectionBehavior: g,
		setSelectionBehavior: _,
		get isFocused() {
			return o.current;
		},
		setFocused(e) {
			o.current = e, s(e);
		},
		get focusedKey() {
			return c.current;
		},
		get childFocusStrategy() {
			return l.current;
		},
		setFocusedKey(e, t = "first") {
			c.current = e, l.current = t, u(e);
		},
		selectedKeys: p,
		setSelectedKeys(e) {
			(r || !Z(e, p)) && m(e);
		},
		disabledKeys: h,
		disabledBehavior: a
	};
}
function Q(e, t) {
	return e ? e === "all" ? "all" : new q(e) : t;
}
export { G as a, H as c, R as d, L as f, U as i, ce as l, X as n, de as o, F as p, pe as r, W as s, ge as t, oe as u };
