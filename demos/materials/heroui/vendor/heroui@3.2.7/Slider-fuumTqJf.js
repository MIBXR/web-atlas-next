import { d as e, i as t, l as n, n as r, r as i, s as a, t as o } from "./utils-UBVJ5JR_.js";
import { t as s } from "./Label-CJNHsoCN.js";
import { P as c, S as l, i as u, t as d } from "./useKeyboard-CqNSkGJ-.js";
import { a as f, n as p, t as m } from "./useHover-DxA7bNQs.js";
import { t as h } from "./useLabel-xEmSShhj.js";
import { t as g } from "./I18nProvider-zGzu-4zN.js";
import { t as _ } from "./useMove-C1jPw-e5.js";
import { r as v, t as y } from "./number-DEd1Mp8h.js";
import { i as b, n as x } from "./jsx-runtime-C1t0izHF.js";
import { n as S } from "./useFocusable-D0mnHSRC.js";
import { t as C } from "./useFormReset-DizqO0T1.js";
import { t as w } from "./filterDOMProps-CJYy6efO.js";
import { t as T } from "./useControlledState-BbVlCDcL.js";
import { t as E } from "./useNumberFormatter-Bqt6BhxT.js";
import { t as D } from "./VisuallyHidden-CRCgxFfe.js";
// node_modules/react-aria/dist/private/slider/utils.mjs
var O = /* @__PURE__ */ new WeakMap();
function k(e, t) {
	let n = O.get(e);
	if (!n) throw Error("Unknown slider state");
	return `${n.id}-${t}`;
}
// node_modules/react-aria/dist/private/slider/useSlider.mjs
var A = /* @__PURE__ */ b(x(), 1);
function j(t, n, r) {
	let { labelProps: i, fieldProps: a } = h(t), o = t.orientation === "vertical";
	O.set(n, {
		id: i.id ?? a.id,
		"aria-describedby": t["aria-describedby"],
		"aria-details": t["aria-details"]
	});
	let { direction: s } = g(), { addGlobalListener: c, removeGlobalListener: l } = f(), d = (0, A.useRef)(null), p = s === "rtl", m = (0, A.useRef)(null), { moveProps: v } = _({
		onMoveStart() {
			m.current = null;
		},
		onMove({ deltaX: e, deltaY: t }) {
			if (!r.current) return;
			let { height: i, width: a } = r.current.getBoundingClientRect(), s = o ? i : a;
			m.current == null && d.current != null && (m.current = n.getThumbPercent(d.current) * s);
			let c = o ? t : e;
			if ((o || p) && (c = -c), m.current += c, d.current != null && r.current) {
				let e = y(m.current / s, 0, 1);
				n.setThumbPercent(d.current, e);
			}
		},
		onMoveEnd() {
			d.current != null && (n.setThumbDragging(d.current, !1), d.current = null);
		}
	}), b = (0, A.useRef)(void 0), x = (e, i, a, l) => {
		if (r.current && !t.isDisabled && n.values.every((e, t) => !n.isThumbDragging(t))) {
			let { height: t, width: u, top: f, left: p } = r.current.getBoundingClientRect(), m = o ? t : u, h = ((o ? l : a) - (o ? f : p)) / m;
			(s === "rtl" || o) && (h = 1 - h);
			let g = n.getPercentValue(h), _, v = n.values.findIndex((e) => g - e < 0);
			if (v === 0) _ = v;
			else if (v === -1) _ = n.values.length - 1;
			else {
				let e = n.values[v - 1], t = n.values[v];
				_ = Math.abs(e - g) < Math.abs(t - g) ? v - 1 : v;
			}
			_ >= 0 && n.isThumbEditable(_) ? (e.preventDefault(), d.current = _, n.setFocusedThumb(_), b.current = i, n.setThumbDragging(d.current, !0), n.setThumbValue(_, g), c(window, "mouseup", S, !1), c(window, "touchend", S, !1), c(window, "pointerup", S, !1)) : d.current = null;
		}
	}, S = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === b.current && (d.current != null && (n.setThumbDragging(d.current, !1), d.current = null), l(window, "mouseup", S, !1), l(window, "touchend", S, !1), l(window, "pointerup", S, !1));
	};
	return "htmlFor" in i && i.htmlFor && (delete i.htmlFor, i.onClick = () => {
		document.getElementById(k(n, 0))?.focus(), u("keyboard");
	}), {
		labelProps: i,
		groupProps: {
			role: "group",
			...a
		},
		trackProps: e({
			onMouseDown(e) {
				e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || x(e, void 0, e.clientX, e.clientY);
			},
			onPointerDown(e) {
				e.pointerType === "mouse" && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) || x(e, e.pointerId, e.clientX, e.clientY);
			},
			onTouchStart(e) {
				x(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
			},
			style: {
				position: "relative",
				touchAction: "none"
			}
		}, v),
		outputProps: {
			htmlFor: n.values.map((e, t) => k(n, t)).join(" "),
			"aria-live": "off"
		}
	};
}
// node_modules/react-aria/dist/private/slider/useSliderThumb.mjs
function M(t, n) {
	let { index: r = 0, isRequired: i, validationState: a, isInvalid: o, trackRef: s, inputRef: u, orientation: p = n.orientation, name: m, form: v } = t, b = t.isDisabled || n.isDisabled, x = p === "vertical", { direction: w } = g(), { addGlobalListener: T, removeGlobalListener: E } = f(), D = O.get(n), { labelProps: j, fieldProps: M } = h({
		...t,
		id: k(n, r),
		"aria-labelledby": `${D.id} ${t["aria-labelledby"] ?? ""}`.trim()
	}), N = n.values[r], P = (0, A.useCallback)(() => {
		u.current && c(u.current);
	}, [u]), F = n.focusedThumb === r;
	(0, A.useEffect)(() => {
		F && P();
	}, [F, P]);
	let I = w === "rtl", L = (0, A.useRef)(null), R = (e) => {
		n.setThumbDragging(r, !0), e(), n.setThumbDragging(r, !1);
	}, { keyboardProps: z } = d({
		shortcuts: {
			PageUp: () => R(() => {
				n.incrementThumb(r, n.pageSize);
			}),
			PageDown: () => R(() => {
				n.decrementThumb(r, n.pageSize);
			}),
			Home: () => R(() => {
				n.setThumbValue(r, n.getThumbMinValue(r));
			}),
			End: () => R(() => {
				n.setThumbValue(r, n.getThumbMaxValue(r));
			})
		},
		allowRepeats: !0
	}), { moveProps: B } = _({
		onMoveStart() {
			L.current = null, n.setThumbDragging(r, !0);
		},
		onMove({ deltaX: e, deltaY: t, pointerType: i, shiftKey: a }) {
			let { getThumbPercent: o, setThumbPercent: c, decrementThumb: l, incrementThumb: u, step: d, pageSize: f } = n;
			if (!s.current) return;
			let { width: p, height: m } = s.current.getBoundingClientRect(), h = x ? m : p;
			if (L.current ??= o(r) * h, i === "keyboard") e > 0 && I || e < 0 && !I || t > 0 ? l(r, a ? f : d) : u(r, a ? f : d);
			else {
				let n = x ? t : e;
				(x || I) && (n = -n), L.current += n, c(r, y(L.current / h, 0, 1));
			}
		},
		onMoveEnd() {
			n.setThumbDragging(r, !1);
		}
	});
	n.setThumbEditable(r, !b);
	let { focusableProps: V } = S(e(t, {
		onFocus: () => n.setFocusedThumb(r),
		onBlur: () => n.setFocusedThumb(void 0)
	}), u), H = (0, A.useRef)(void 0), U = (e) => {
		P(), H.current = e, n.setThumbDragging(r, !0), T(window, "mouseup", W, !1), T(window, "touchend", W, !1), T(window, "pointerup", W, !1);
	}, W = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === H.current && (P(), n.setThumbDragging(r, !1), E(window, "mouseup", W, !1), E(window, "touchend", W, !1), E(window, "pointerup", W, !1));
	}, G = n.getThumbPercent(r);
	(x || w === "rtl") && (G = 1 - G);
	let K = b ? {} : e(z, B, {
		onMouseDown: (e) => {
			e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || U();
		},
		onPointerDown: (e) => {
			e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || U(e.pointerId);
		},
		onTouchStart: (e) => {
			U(e.changedTouches[0].identifier);
		}
	});
	return C(u, n.defaultValues[r], (e) => {
		n.setThumbValue(r, e);
	}), {
		inputProps: e(V, M, {
			type: "range",
			tabIndex: b ? void 0 : 0,
			min: n.getThumbMinValue(r),
			max: n.getThumbMaxValue(r),
			step: n.step,
			value: N,
			name: m,
			form: v,
			disabled: b,
			"aria-orientation": p,
			"aria-valuetext": n.getThumbValueLabel(r),
			"aria-required": i || void 0,
			"aria-invalid": o || a === "invalid" || void 0,
			"aria-errormessage": t["aria-errormessage"],
			"aria-describedby": [D["aria-describedby"], t["aria-describedby"]].filter(Boolean).join(" "),
			"aria-details": [D["aria-details"], t["aria-details"]].filter(Boolean).join(" "),
			onChange: (e) => {
				n.setThumbValue(r, parseFloat(l(e).value));
			}
		}),
		thumbProps: {
			...K,
			style: {
				position: "absolute",
				[x ? "top" : "left"]: `${G * 100}%`,
				transform: "translate(-50%, -50%)",
				touchAction: "none"
			}
		},
		labelProps: j,
		isDragging: n.isThumbDragging(r),
		isDisabled: b,
		isFocused: F
	};
}
// node_modules/react-stately/dist/private/slider/useSliderState.mjs
var N = 0, P = 100, F = 1;
function I(e) {
	let { isDisabled: t = !1, minValue: n = N, maxValue: r = P, numberFormatter: i, step: a = F, orientation: o = "horizontal" } = e, s = (0, A.useMemo)(() => {
		let e = (r - n) / 10;
		return e = v(e, 0, e + a, a), Math.max(e, a);
	}, [
		a,
		r,
		n
	]), c = (0, A.useCallback)((e) => e?.map((t, i) => {
		let o = i === 0 ? n : e[i - 1], s = i === e.length - 1 ? r : e[i + 1];
		return v(t, o, s, a);
	}), [
		n,
		r,
		a
	]), l = (0, A.useMemo)(() => c(R(e.value)), [e.value, c]), u = (0, A.useMemo)(() => c(R(e.defaultValue) ?? [n]), [
		e.defaultValue,
		n,
		c
	]), d = z(e.value, e.defaultValue, e.onChange), f = z(e.value, e.defaultValue, e.onChangeEnd), [p, m] = T(l, u, d), [h] = (0, A.useState)(p), [g, _] = (0, A.useState)(Array(p.length).fill(!1)), b = (0, A.useRef)(Array(p.length).fill(!0)), [x, S] = (0, A.useState)(void 0), C = (0, A.useRef)(p), w = (0, A.useRef)(g), E = (e) => {
		C.current = e, m(e);
	}, D = (e) => {
		w.current = e, _(e);
	};
	function O(e) {
		return (e - n) / (r - n);
	}
	function k(e) {
		return e === 0 ? n : p[e - 1];
	}
	function j(e) {
		return e === p.length - 1 ? r : p[e + 1];
	}
	function M(e) {
		return b.current[e];
	}
	function I(e, t) {
		b.current[e] = t;
	}
	function B(e, n) {
		if (t || !M(e)) return;
		let r = k(e), i = j(e);
		n = v(n, r, i, a);
		let o = L(C.current, e, n);
		E(o);
	}
	function V(e, n) {
		if (t || !M(e)) return;
		n && (C.current = p);
		let r = w.current[e];
		w.current = L(w.current, e, n), D(w.current), f && r && !w.current.some(Boolean) && f(C.current);
	}
	let H = (0, A.useRef)(null);
	function U(e = p) {
		switch (typeof e == "number" && (e = [e]), e.length) {
			case 0: return "";
			case 1: return i.format(e[0]);
			case 2: return i.formatRange(e[0], e[1]);
			default: {
				let t = e.map((e) => i.format(e)), n = H.current;
				return n && n.resolvedOptions().locale === i.resolvedOptions().locale || (n = H.current = new Intl.ListFormat(i.resolvedOptions().locale, { type: "unit" })), n.format(t);
			}
		}
	}
	function W(e, t) {
		B(e, K(t));
	}
	function G(e) {
		return Math.round((e - n) / a) * a + n;
	}
	function K(e) {
		let t = e * (r - n) + n;
		return y(G(t), n, r);
	}
	function q(e, t = 1) {
		let i = Math.max(t, a);
		B(e, v(p[e] + i, n, r, a));
	}
	function J(e, t = 1) {
		let i = Math.max(t, a);
		B(e, v(p[e] - i, n, r, a));
	}
	return {
		values: p,
		defaultValues: e.defaultValue === void 0 ? h : u,
		getThumbValue: (e) => p[e],
		setThumbValue: B,
		setThumbPercent: W,
		isThumbDragging: (e) => g[e],
		setThumbDragging: V,
		focusedThumb: x,
		setFocusedThumb: S,
		getThumbPercent: (e) => O(p[e]),
		getValuePercent: O,
		getThumbValueLabel: (e) => U(p[e]),
		getFormattedValue: U,
		getThumbMinValue: k,
		getThumbMaxValue: j,
		getPercentValue: K,
		isThumbEditable: M,
		setThumbEditable: I,
		incrementThumb: q,
		decrementThumb: J,
		step: a,
		pageSize: s,
		orientation: o,
		isDisabled: t
	};
}
function L(e, t, n) {
	return e[t] === n ? e : [
		...e.slice(0, t),
		n,
		...e.slice(t + 1)
	];
}
function R(e) {
	if (e != null) return Array.isArray(e) ? e : [e];
}
function z(e, t, n) {
	return (r) => {
		typeof e == "number" || typeof t == "number" ? n?.(r[0]) : n?.(r);
	};
}
// node_modules/react-aria-components/dist/private/Slider.mjs
var B = /*#__PURE__*/ (0, A.createContext)(null), V = /*#__PURE__*/ (0, A.createContext)(null), H = /*#__PURE__*/ (0, A.createContext)(null), U = /*#__PURE__*/ (0, A.createContext)(null), W = /*#__PURE__*/ (0, A.forwardRef)(function(n, c) {
	[n, c] = r(n, c, B);
	let l = (0, A.useRef)(null), u = E(n.formatOptions), d = I({
		...n,
		numberFormatter: u
	}), [f, p] = t(!n["aria-label"] && !n["aria-labelledby"]), { groupProps: m, trackProps: h, labelProps: g, outputProps: _ } = j({
		...n,
		label: p
	}, d, l), v = i({
		...n,
		values: {
			orientation: d.orientation,
			isDisabled: d.isDisabled,
			state: d
		},
		defaultClassName: "react-aria-Slider"
	}), y = w(n, { global: !0 });
	return delete y.id, /*#__PURE__*/ A.createElement(o, { values: [
		[V, d],
		[H, {
			...h,
			ref: l
		}],
		[U, _],
		[s, {
			...g,
			ref: f
		}]
	] }, /*#__PURE__*/ A.createElement(a.div, {
		...e(y, v, m),
		ref: c,
		slot: n.slot || void 0,
		"data-orientation": d.orientation,
		"data-disabled": d.isDisabled || void 0
	}));
}), G = /*#__PURE__*/ (0, A.forwardRef)(function(e, t) {
	[e, t] = r(e, t, U);
	let { children: n, style: o, className: s, render: c, ...l } = e, u = (0, A.useContext)(V), d = i({
		className: s,
		style: o,
		children: n,
		render: c,
		defaultChildren: u.getFormattedValue(),
		defaultClassName: "react-aria-SliderOutput",
		values: {
			orientation: u.orientation,
			isDisabled: u.isDisabled,
			state: u
		}
	});
	return /*#__PURE__*/ A.createElement(a.output, {
		...l,
		...d,
		ref: t,
		"data-orientation": u.orientation || void 0,
		"data-disabled": u.isDisabled || void 0
	});
}), K = /*#__PURE__*/ (0, A.forwardRef)(function(t, n) {
	[t, n] = r(t, n, H);
	let o = (0, A.useContext)(V), { onHoverStart: s, onHoverEnd: c, onHoverChange: l, ...u } = t, { hoverProps: d, isHovered: f } = m({
		onHoverStart: s,
		onHoverEnd: c,
		onHoverChange: l
	}), p = i({
		...t,
		defaultClassName: "react-aria-SliderTrack",
		values: {
			orientation: o.orientation,
			isDisabled: o.isDisabled,
			isHovered: f,
			state: o
		}
	});
	return /*#__PURE__*/ A.createElement(a.div, {
		...e(u, d),
		...p,
		ref: n,
		"data-hovered": f || void 0,
		"data-orientation": o.orientation || void 0,
		"data-disabled": o.isDisabled || void 0
	});
}), q = /*#__PURE__*/ (0, A.forwardRef)(function(r, c) {
	let { inputRef: l = null } = r, u = (0, A.useContext)(V), { ref: d } = n(H), { index: f = 0 } = r, h = (0, A.useRef)(null), g = l || h, [_, v] = t(!r["aria-label"] && !r["aria-labelledby"]), { thumbProps: y, inputProps: b, labelProps: x, isDragging: S, isFocused: C, isDisabled: T } = M({
		...r,
		index: f,
		trackRef: d,
		inputRef: g,
		label: v
	}, u), { focusProps: E, isFocusVisible: O } = p(), { hoverProps: k, isHovered: j } = m(r), N = i({
		...r,
		defaultClassName: "react-aria-SliderThumb",
		values: {
			state: u,
			isHovered: j,
			isDragging: S,
			isFocused: C,
			isFocusVisible: O,
			isDisabled: T
		}
	}), P = w(r, { global: !0 });
	return delete P.id, /*#__PURE__*/ A.createElement(a.div, {
		...e(P, y, k),
		...N,
		ref: c,
		style: {
			...y.style,
			...N.style
		},
		"data-hovered": j || void 0,
		"data-dragging": S || void 0,
		"data-focused": C || void 0,
		"data-focus-visible": O || void 0,
		"data-disabled": T || void 0
	}, /*#__PURE__*/ A.createElement(D, null, /*#__PURE__*/ A.createElement("input", {
		ref: g,
		...e(b, E)
	})), /*#__PURE__*/ A.createElement(o, { values: [[s, {
		...x,
		ref: _
	}]] }, N.children));
});
export { U as a, H as c, j as d, W as i, I as l, V as n, G as o, q as r, B as s, K as t, M as u };
