import { t as e } from "./Button-Cnex0dS4.js";
import { d as t, m as n, n as r, o as i, r as a, s as o, t as s } from "./utils-UBVJ5JR_.js";
import { t as c } from "./useEvent-QtR06JAA.js";
import { t as l } from "./SSRProvider-DmcnjAEC.js";
import { t as u } from "./useLayoutEffect-Bx2X4QEP.js";
import { t as d } from "./react-dom-Dipvgcxr.js";
import { i as f, n as p } from "./jsx-runtime-C1t0izHF.js";
import { t as m } from "./useControlledState-BbVlCDcL.js";
import { t as h } from "./filterDOMProps-CJYy6efO.js";
import { r as g } from "./dist-qnEEIXtT.js";
import { n as _ } from "./useHover-DxA7bNQs.js";
// node_modules/react-aria/dist/private/disclosure/useDisclosure.mjs
var v = /* @__PURE__ */ f(d(), 1), y = /* @__PURE__ */ f(p(), 1);
function b(e, t, r) {
	let { isDisabled: i } = e, a = n(), o = n(), s = l(), d = (0, y.useRef)(null), f = (0, y.useCallback)(() => {
		d.current = requestAnimationFrame(() => {
			r.current && r.current.setAttribute("hidden", "until-found");
		}), (0, v.flushSync)(() => {
			t.toggle();
		});
	}, [r, t]);
	c(r, "beforematch", f);
	let p = (0, y.useRef)(null);
	return u(() => {
		if (d.current && cancelAnimationFrame(d.current), r.current && !s) {
			let e = r.current;
			p.current == null || typeof e.getAnimations != "function" ? t.isExpanded ? (e.removeAttribute("hidden"), e.style.setProperty("--disclosure-panel-width", "auto"), e.style.setProperty("--disclosure-panel-height", "auto")) : (e.setAttribute("hidden", "until-found"), e.style.setProperty("--disclosure-panel-width", "0px"), e.style.setProperty("--disclosure-panel-height", "0px")) : t.isExpanded !== p.current && (t.isExpanded ? (e.removeAttribute("hidden"), e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"), e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"), Promise.all(e.getAnimations().map((e) => e.finished)).then(() => {
				e.style.setProperty("--disclosure-panel-width", "auto"), e.style.setProperty("--disclosure-panel-height", "auto");
			}).catch(() => {})) : (e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"), e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"), window.getComputedStyle(e).height, e.style.setProperty("--disclosure-panel-width", "0px"), e.style.setProperty("--disclosure-panel-height", "0px"), Promise.all(e.getAnimations().map((e) => e.finished)).then(() => e.setAttribute("hidden", "until-found")).catch(() => {}))), p.current = t.isExpanded;
		}
	}, [
		i,
		r,
		t.isExpanded,
		s
	]), (0, y.useEffect)(() => () => {
		d.current && cancelAnimationFrame(d.current);
	}, []), {
		buttonProps: {
			id: a,
			"aria-expanded": t.isExpanded,
			"aria-controls": o,
			onPress: (e) => {
				!i && e.pointerType !== "keyboard" && t.toggle();
			},
			isDisabled: i,
			onPressStart(e) {
				e.pointerType === "keyboard" && !i && t.toggle();
			}
		},
		panelProps: {
			id: o,
			role: "group",
			"aria-labelledby": a,
			"aria-hidden": !t.isExpanded,
			hidden: s ? !t.isExpanded : void 0
		}
	};
}
// node_modules/react-stately/dist/private/disclosure/useDisclosureGroupState.mjs
function x(e) {
	let { allowsMultipleExpanded: t = !1, isDisabled: n = !1 } = e, [r, i] = m((0, y.useMemo)(() => e.expandedKeys ? new Set(e.expandedKeys) : void 0, [e.expandedKeys]), (0, y.useMemo)(() => e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : /* @__PURE__ */ new Set(), [e.defaultExpandedKeys]), e.onExpandedChange);
	return (0, y.useEffect)(() => {
		if (!t && r.size > 1) {
			let e = r.values().next().value;
			e != null && i(/* @__PURE__ */ new Set([e]));
		}
	}), {
		allowsMultipleExpanded: t,
		isDisabled: n,
		expandedKeys: r,
		setExpandedKeys: i,
		toggleKey(e) {
			let n;
			t ? (n = new Set(r), n.has(e) ? n.delete(e) : n.add(e)) : n = new Set(r.has(e) ? [] : [e]), i(n);
		}
	};
}
// node_modules/react-stately/dist/private/disclosure/useDisclosureState.mjs
function S(e) {
	let [t, n] = m(e.isExpanded, e.defaultExpanded || !1, e.onExpandedChange);
	return {
		isExpanded: t,
		setExpanded: n,
		expand: (0, y.useCallback)(() => {
			n(!0);
		}, [n]),
		collapse: (0, y.useCallback)(() => {
			n(!1);
		}, [n]),
		toggle: (0, y.useCallback)(() => {
			n(!t);
		}, [n, t])
	};
}
// node_modules/react-aria-components/dist/private/Disclosure.mjs
var C = /*#__PURE__*/ (0, y.createContext)(null), w = /*#__PURE__*/ (0, y.forwardRef)(function(e, t) {
	let n = x(e), r = a({
		...e,
		defaultClassName: "react-aria-DisclosureGroup",
		values: {
			isDisabled: n.isDisabled,
			state: n
		}
	}), i = h(e, { global: !0 });
	return /*#__PURE__*/ y.createElement(o.div, {
		...i,
		...r,
		ref: t,
		"data-disabled": e.isDisabled || void 0
	}, /*#__PURE__*/ y.createElement(C.Provider, { value: n }, r.children));
}), T = /*#__PURE__*/ (0, y.createContext)(null), E = /*#__PURE__*/ (0, y.createContext)(null), D = /*#__PURE__*/ (0, y.createContext)(null), O = /*#__PURE__*/ (0, y.forwardRef)(function(c, l) {
	[c, l] = r(c, l, T);
	let u = (0, y.useContext)(C), { id: d, ...f } = c, p = n();
	d ||= p;
	let m = u ? u.expandedKeys.has(d) : c.isExpanded, g = S({
		...c,
		isExpanded: m,
		onExpandedChange(e) {
			u && u.toggleKey(d), c.onExpandedChange?.(e);
		}
	}), v = y.useRef(null), x = c.isDisabled || u?.isDisabled || !1, { buttonProps: w, panelProps: O } = b({
		...c,
		isExpanded: m,
		isDisabled: x
	}, g, v), { isFocusVisible: k, focusProps: A } = _({ within: !0 }), j = a({
		...c,
		id: void 0,
		defaultClassName: "react-aria-Disclosure",
		values: {
			isExpanded: g.isExpanded,
			isDisabled: x,
			isFocusVisibleWithin: k,
			state: g
		}
	}), M = h(f, { global: !0 });
	return /*#__PURE__*/ y.createElement(s, { values: [
		[e, { slots: {
			[i]: {},
			trigger: w
		} }],
		[D, {
			panelProps: O,
			panelRef: v
		}],
		[E, g]
	] }, /*#__PURE__*/ y.createElement(o.div, {
		...t(M, j, A),
		ref: l,
		"data-expanded": g.isExpanded || void 0,
		"data-disabled": x || void 0,
		"data-focus-visible-within": k || void 0
	}, j.children));
}), k = /*#__PURE__*/ (0, y.forwardRef)(function(n, r) {
	let { role: i = "group" } = n, { panelProps: c, panelRef: l } = (0, y.useContext)(D), { isFocusVisible: u, focusProps: d } = _({ within: !0 }), f = a({
		...n,
		defaultClassName: "react-aria-DisclosurePanel",
		values: { isFocusVisibleWithin: u }
	}), p = h(n, {
		global: !0,
		labelable: !0
	});
	return /*#__PURE__*/ y.createElement(o.div, {
		...t(p, f, c, d),
		ref: g(r, l),
		role: i,
		"data-focus-visible-within": u || void 0
	}, /*#__PURE__*/ y.createElement(s, { values: [[e, null]] }, n.children));
});
export { k as i, w as n, E as r, O as t };
