import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./dist-DCi9UB7o.js";
import { t as n } from "./jsx-runtime-lAxUcZjR.js";
import { t as r } from "./clamp-BEXCFueL.js";
import { c as i, n as a, o, r as s, t as c } from "./useRegisterFieldControl-Crjc5EN3.js";
import { l, r as u, s as d, t as f, u as p } from "./useRenderElement-Bc91YjHo.js";
import { t as m } from "./react-D9cguz4v.js";
import { t as h } from "./owner-C-FapX6G.js";
import { t as g } from "./useControlled-BkmszdIY.js";
import { t as _ } from "./useStableCallback-BmDujACN.js";
import { t as v } from "./useValueAsRef-0u0FW33N.js";
import { t as ee } from "./useIsoLayoutEffect-B0B6th0o.js";
import { _ as y, n as te, p as b, t as x } from "./createBaseUIEventDetails-DG51vPHx.js";
import { t as S } from "./useValueChanged-Bwf6UlC_.js";
import { t as C } from "./useBaseUiId-BwhhMxTY.js";
import { n as w, r as T, t as ne } from "./resolveAriaLabelledBy-Dya8t0dh.js";
import { n as re, r as E, t as ie } from "./shadowDom-D66trjQm.js";
import { t as ae } from "./CompositeList-Br8uoKbd.js";
import { d as D, l as oe } from "./floating-ui.utils.dom-Dz-TRm4-.js";
import { t as se } from "./addEventListener-EiVbnOnq.js";
import { n as ce } from "./useAnimationFrame-CMIvKrBf.js";
import { t as le } from "./DirectionContext-CBHZ_yWZ.js";
import { t as ue } from "./shim-CTUSOuUn.js";
import { t as de } from "./visuallyHidden-DvzvoEuP.js";
import { n as O, t as fe } from "./valueToPercent-CG1Ng_RN.js";
import { a as k, d as A, f as pe, i as me, o as j, r as M, s as he, t as ge } from "./composite-DtpIpLt3.js";
import { n as _e } from "./useCompositeListItem-BEyYtHBh.js";
import { t as ve } from "./CSPContext-DMv4_iW-.js";
import { c as ye } from "./element-DbCN1dg9.js";
import { t as be } from "./useLabelableId-VvLeyn8q.js";
// node_modules/@base-ui/react/slider/utils/asc.mjs
function N(e, t) {
	return e - t;
}
// node_modules/@base-ui/react/slider/utils/replaceArrayItemAtIndex.mjs
function xe(e, t, n) {
	let r = e.slice();
	return r[t] = n, r.sort(N);
}
// node_modules/@base-ui/react/slider/utils/getSliderValue.mjs
function Se(e, t, n, i, a, o) {
	let s = e;
	return s = r(s, n, i), a && (s = xe(o, t, r(s, o[t - 1] ?? -Infinity, o[t + 1] ?? Infinity))), s;
}
// node_modules/@base-ui/react/slider/utils/validateMinimumDistance.mjs
function P(e, t, n) {
	if (!Array.isArray(e)) return !0;
	let r = e.reduce((e, t, n, r) => (n === r.length - 1 || e.push(Math.abs(t - r[n + 1])), e), []);
	return Math.min(...r) >= t * n;
}
// node_modules/@base-ui/react/slider/root/stateAttributesMapping.mjs
var Ce = {
	activeThumbIndex: () => null,
	max: () => null,
	min: () => null,
	minStepsBetweenValues: () => null,
	step: () => null,
	values: () => null,
	...i
}, F = /* @__PURE__ */ e(m(), 1), we = /*#__PURE__*/ F.createContext(void 0);
function Te() {
	let e = F.useContext(we);
	if (e === void 0) throw Error(p(62));
	return e;
}
// node_modules/@base-ui/react/slider/root/SliderRoot.mjs
var I = n();
function L(e) {
	return "key" in e ? y : b;
}
function R(e, t) {
	return typeof e == "number" && typeof t == "number" ? e === t : Array.isArray(e) && Array.isArray(t) ? T(e, t) : !1;
}
var Ee = /*#__PURE__*/ F.forwardRef(function(e, t) {
	let { "aria-labelledby": n, className: i, defaultValue: l, disabled: u = !1, id: d, format: p, largeStep: m = 10, locale: y, render: b, max: E = 100, min: D = 0, minStepsBetweenValues: oe = 0, form: se, name: ce, onValueChange: le, onValueCommitted: ue, orientation: de = "horizontal", step: O = 1, thumbCollisionBehavior: fe = "push", thumbAlignment: k = "center", value: A, style: pe, ...me } = e, j = C(d), M = ne(j), he = _(le), ge = _(ue), { clearErrors: _e } = s(), { state: ve, disabled: ye, name: be, setTouched: xe, setDirty: Te, validityData: Ee, validation: De } = o(), { labelId: z } = a(), [Oe, B] = F.useState(), V = n ?? w(z, Oe), H = ye || u, ke = be ?? ce, [U, Ae] = g({
		controlled: A,
		default: l ?? D,
		name: "Slider"
	}), W = F.useRef(null), G = F.useRef(null), je = F.useRef([]), K = F.useRef(null), q = F.useRef(null), Me = F.useRef(-1), Ne = F.useRef(null), Pe = F.useRef("none"), Fe = v(p), [J, Ie] = F.useState(-1), [Le, Y] = F.useState(-1), [X, Z] = F.useState(!1), [Re, ze] = F.useState(() => /* @__PURE__ */ new Map()), [Be, Q] = F.useState([void 0, void 0]), Ve = _((e) => {
		Ie(e), e !== -1 && Y(e);
	});
	c(De.inputRef, j, U, void 0, !H, ce), S(U, () => {
		_e(ke), De.change(U);
		let e = Ee.initialValue, t;
		t = Array.isArray(U) && Array.isArray(e) ? !T(U, e) : U !== e, Te(t);
	});
	let He = _((e) => {
		e && (G.current = e);
	}), Ue = Array.isArray(U), We = F.useMemo(() => Ue ? U.slice().sort(N) : [r(U, D, E)], [
		E,
		D,
		Ue,
		U
	]), Ge = _((e, t) => {
		if (Number.isNaN(e) || R(e, U)) return !1;
		let n = t ?? x("none", void 0, void 0, { activeThumbIndex: -1 }), r = n.event, i = new (r.constructor ?? Event)(r.type, r);
		return Object.defineProperty(i, "target", {
			writable: !0,
			value: {
				value: e,
				name: ke
			}
		}), n.event = i, he(e, n), !n.isCanceled && (Pe.current = n.reason, Ae(e), !0);
	}), Ke = _((e, t, n) => {
		let r = Se(e, t, D, E, Ue, We);
		if (P(r, O, oe)) {
			let e = L(n), i = Ge(r, x(e, n.nativeEvent, void 0, { activeThumbIndex: t }));
			xe(!0), i && ge(r, te(e, n.nativeEvent));
		}
	});
	ee(() => {
		let e = ie(h(W.current));
		H && re(W.current, e) && e.blur();
	}, [H]), H && J !== -1 && Ve(-1);
	let qe = F.useMemo(() => ({
		...ve,
		activeThumbIndex: J,
		disabled: H,
		dragging: X,
		orientation: de,
		max: E,
		min: D,
		minStepsBetweenValues: oe,
		step: O,
		values: We
	}), [
		ve,
		J,
		H,
		X,
		E,
		D,
		oe,
		de,
		O,
		We
	]), Je = F.useMemo(() => ({
		active: J,
		controlRef: G,
		disabled: H,
		dragging: X,
		validation: De,
		formatOptionsRef: Fe,
		handleInputChange: Ke,
		indicatorPosition: Be,
		inset: k !== "center",
		labelId: V,
		rootLabelId: M,
		largeStep: m,
		lastUsedThumbIndex: Le,
		lastChangeReasonRef: Pe,
		form: se,
		locale: y,
		max: E,
		min: D,
		minStepsBetweenValues: oe,
		name: ke,
		onValueCommitted: ge,
		orientation: de,
		pressedInputRef: K,
		pressedThumbCenterOffsetRef: q,
		pressedThumbIndexRef: Me,
		pressedValuesRef: Ne,
		registerFieldControlRef: He,
		renderBeforeHydration: k === "edge",
		setActive: Ve,
		setDragging: Z,
		setIndicatorPosition: Q,
		setLabelId: B,
		setValue: Ge,
		state: qe,
		step: O,
		thumbCollisionBehavior: fe,
		thumbMap: Re,
		thumbRefs: je,
		values: We
	}), [
		J,
		G,
		V,
		M,
		H,
		X,
		De,
		Fe,
		Ke,
		Be,
		m,
		Le,
		Pe,
		se,
		y,
		E,
		D,
		oe,
		ke,
		ge,
		de,
		K,
		q,
		Me,
		Ne,
		He,
		Ve,
		Z,
		Q,
		B,
		Ge,
		qe,
		O,
		fe,
		k,
		Re,
		je,
		We
	]), $ = f("div", e, {
		state: qe,
		ref: [t, W],
		props: [
			{
				"aria-labelledby": V,
				id: j,
				role: "group"
			},
			me,
			(e) => De.getValidationProps(H, e)
		],
		stateAttributesMapping: Ce
	});
	return /*#__PURE__*/ (0, I.jsx)(we.Provider, {
		value: Je,
		children: /*#__PURE__*/ (0, I.jsx)(ae, {
			elementsRef: je,
			onMapChange: ze,
			children: $
		})
	});
});
// node_modules/@base-ui/react/slider/utils/getMidpoint.mjs
function De(e) {
	let t = e.getBoundingClientRect();
	return {
		x: (t.left + t.right) / 2,
		y: (t.top + t.bottom) / 2
	};
}
// node_modules/@base-ui/react/slider/utils/roundValueToStep.mjs
function z(e) {
	if (e === 0) return 0;
	if (Math.abs(e) < 1) {
		let t = e.toExponential().split("e-"), n = t[0].split(".")[1];
		return (n ? n.length : 0) + parseInt(t[1], 10);
	}
	let t = e.toString().split(".")[1];
	return t ? t.length : 0;
}
function Oe(e, t, n) {
	let r = Math.round((e - n) / t) * t + n;
	return Number(r.toFixed(Math.max(z(t), z(n))));
}
// node_modules/@base-ui/react/slider/utils/getPushedThumbValues.mjs
function B({ values: e, index: t, nextValue: n, min: i, max: a, step: o, minStepsBetweenValues: s, initialValues: c }) {
	if (e.length === 0) return [];
	let l = e.slice(), u = o * s, d = l.length - 1, f = c ?? e, p = i + t * u, m = a - (d - t) * u;
	l[t] = r(n, p, m);
	for (let e = t + 1; e <= d; e += 1) {
		let t = l[e - 1] + u, n = a - (d - e) * u, i = f[e] ?? l[e], o = Math.max(l[e], t);
		i < o && (o = Math.max(i, t)), l[e] = r(o, t, n);
	}
	for (let e = t - 1; e >= 0; --e) {
		let t = l[e + 1] - u, n = i + e * u, a = f[e] ?? l[e], o = Math.min(l[e], t);
		a > o && (o = Math.min(a, t)), l[e] = r(o, n, t);
	}
	for (let e = 0; e <= d; e += 1) l[e] = Number(l[e].toFixed(12));
	return l;
}
// node_modules/@base-ui/react/slider/utils/resolveThumbCollision.mjs
function V({ behavior: e, values: t, currentValues: n, initialValues: i, pressedIndex: a, nextValue: o, min: s, max: c, step: l, minStepsBetweenValues: u }) {
	let d = n ?? t, f = i ?? t;
	if (!(d.length > 1)) return {
		value: o,
		thumbIndex: 0,
		didSwap: !1
	};
	let p = l * u;
	switch (e) {
		case "swap": {
			let e = d[a], t = 1e-7, n = d.slice(), i = n[a - 1], m = n[a + 1], h = i == null ? s : i + p, g = m == null ? c : m - p, _ = r(o, h, g), v = Number(_.toFixed(12));
			n[a] = v;
			let ee = o > e, y = o < e, te = ee && m != null && o >= m - t, b = y && i != null && o <= i + t;
			if (!te && !b) return {
				value: n,
				thumbIndex: a,
				didSwap: !1
			};
			let x = te ? a + 1 : a - 1, S = n.map((e, t) => t === a ? v : f[t] ?? d[t]), C = o;
			C = te ? Math.max(o, n[x]) : Math.min(o, n[x]);
			let w = B({
				values: n,
				index: x,
				nextValue: C,
				min: s,
				max: c,
				step: l,
				minStepsBetweenValues: u,
				initialValues: S
			}), T = te ? x - 1 : x + 1;
			if (T >= 0 && T < w.length) {
				let e = w[T - 1], t = w[T + 1], n = e == null ? s : e + p;
				n = Math.max(n, s + T * p);
				let i = t == null ? c : t - p;
				i = Math.min(i, c - (w.length - 1 - T) * p);
				let a = r(v, n, i);
				w[T] = Number(a.toFixed(12));
			}
			return {
				value: w,
				thumbIndex: x,
				didSwap: !0
			};
		}
		case "push": return {
			value: B({
				values: d,
				index: a,
				nextValue: o,
				min: s,
				max: c,
				step: l,
				minStepsBetweenValues: u
			}),
			thumbIndex: a,
			didSwap: !1
		};
		default: {
			let e = d.slice(), t = e[a - 1], n = e[a + 1], i = t == null ? s : t + p, l = n == null ? c : n - p, u = r(o, i, l);
			return e[a] = Number(u.toFixed(12)), {
				value: e,
				thumbIndex: a,
				didSwap: !1
			};
		}
	}
}
// node_modules/@base-ui/react/slider/control/SliderControl.mjs
var H = 2;
function ke(e, t) {
	if (!e) return {
		start: 0,
		end: 0
	};
	function n(e) {
		let t = e == null ? 0 : parseFloat(e);
		return Number.isNaN(t) ? 0 : t;
	}
	let r = t ? "Top" : "InlineStart", i = t ? "Bottom" : "InlineEnd";
	return {
		start: n(e[`border${r}Width`]) + n(e[`padding${r}`]),
		end: n(e[`border${i}Width`]) + n(e[`padding${i}`])
	};
}
function U(e, t) {
	if (t.current != null && e.changedTouches) {
		let n = e;
		for (let e = 0; e < n.changedTouches.length; e += 1) {
			let r = n.changedTouches[e];
			if (r.identifier === t.current) return {
				x: r.clientX,
				y: r.clientY
			};
		}
		return null;
	}
	return {
		x: e.clientX,
		y: e.clientY
	};
}
var Ae = /*#__PURE__*/ F.forwardRef(function(e, t) {
	let { render: n, className: i, style: a, ...o } = e, { disabled: s, dragging: c, inset: l, lastChangeReasonRef: u, max: d, min: p, minStepsBetweenValues: m, onValueCommitted: g, orientation: ee, pressedInputRef: y, pressedThumbCenterOffsetRef: b, pressedThumbIndexRef: S, pressedValuesRef: C, registerFieldControlRef: w, renderBeforeHydration: T, setActive: ne, setDragging: ae, setValue: ue, state: de, step: O, thumbCollisionBehavior: fe, thumbRefs: k, values: A } = Te(), pe = le(), me = A.length > 1, j = ee === "vertical", M = F.useRef(null), he = F.useRef(null), ge = _((e) => {
		e && he.current == null && (he.current = oe(e).getComputedStyle(e));
	}), _e = F.useRef(null), ve = F.useRef(0), ye = F.useRef(0), be = F.useRef(null), N = v(A);
	function xe(e) {
		S.current !== e && (S.current = e);
		let t = k.current[e];
		t ? y.current = t.querySelector("input[type=\"range\"]") : (b.current = null, y.current = null);
	}
	function Se() {
		S.current = -1, b.current = null, y.current = null;
	}
	function we(e) {
		return D(e) ? k.current.some((t) => !D(t) || !re(t, e) ? !1 : t.querySelector("input[type=\"range\"]")?.disabled === !0) : !1;
	}
	function I(e) {
		let t = M.current, n = S.current;
		if (!t || !me && (n < 0 || n >= A.length)) return null;
		let { width: i, height: a, bottom: o, left: s, right: c } = t.getBoundingClientRect(), l = ke(he.current, j), u = ye.current, f = (j ? a : i) - l.start - l.end - u * 2, h = b.current ?? 0, g = e.x - h, _ = e.y - h, v = j ? o - _ - l.end : (pe === "rtl" ? c - g : g - s) - l.start, ee = r((v - u) / f, 0, 1), y = (d - p) * ee + p;
		return y = Oe(y, O, p), y = r(y, p, d), me ? n < 0 ? null : V({
			behavior: fe,
			values: A,
			currentValues: N.current ?? A,
			initialValues: C.current,
			pressedIndex: n,
			nextValue: y,
			min: p,
			max: d,
			step: O,
			minStepsBetweenValues: m
		}) : {
			value: y,
			thumbIndex: n,
			didSwap: !1
		};
	}
	function L(e) {
		C.current = me ? A.slice() : null, be.current = null, N.current = A;
		let t = S.current, n = t;
		if (t > -1 && t < A.length) {
			if (A[t] === d) {
				let e = t;
				for (; e > 0 && A[e - 1] === d;) --e;
				n = e;
			}
		} else {
			let t = j ? "y" : "x", r;
			n = -1;
			for (let i = 0; i < k.current.length; i += 1) {
				let a = k.current[i];
				if (D(a) && !a.querySelector("input[type=\"range\"]")?.disabled) {
					let o = De(a), s = Math.abs(e[t] - o[t]);
					(r === void 0 || s <= r) && (n = i, r = s);
				}
			}
		}
		if (n > -1 && n !== t && xe(n), l) {
			let e = k.current[n];
			if (D(e)) {
				let t = e.getBoundingClientRect();
				ye.current = t[j ? "height" : "width"] / 2;
			}
		}
	}
	function R(e) {
		let t = k.current?.[e]?.querySelector("input[type=\"range\"]");
		t && t.focus({
			preventScroll: !0,
			focusVisible: !1
		});
	}
	function Ee(e, t, n) {
		let r = ue(e.value, x(t, n, void 0, { activeThumbIndex: e.thumbIndex }));
		return r && (be.current = e.value, N.current = Array.isArray(e.value) ? e.value : [e.value], e.didSwap && xe(e.thumbIndex)), r;
	}
	let z = _((e) => {
		let t = U(e, _e);
		if (t == null) return;
		if (ve.current += 1, e.type === "pointermove" && e.buttons === 0) {
			B(e);
			return;
		}
		let n = I(t);
		n != null && P(n.value, O, m) && (!c && ve.current > H && ae(!0), Ee(n, "drag", e) && n.didSwap && R(n.thumbIndex));
	}), B = _((e) => {
		if (ne(-1), ae(!1), y.current = null, b.current = null, be.current != null) {
			let t = u.current;
			g(be.current, te(t, e));
		}
		"pointerType" in e && M.current?.hasPointerCapture(e.pointerId) && M.current?.releasePointerCapture(e.pointerId), S.current = -1, _e.current = null, C.current = null, be.current = null, W();
	}), Ae = _((e) => {
		if (s) return;
		if (we(E(e))) {
			Se();
			return;
		}
		let t = e.changedTouches[0];
		t != null && (_e.current = t.identifier);
		let n = U(e, _e);
		if (n != null) {
			L(n);
			let t = I(n);
			if (t == null) return;
			R(t.thumbIndex), Ee(t, "track-press", e) && t.didSwap && R(t.thumbIndex);
		}
		ve.current = 0;
		let r = h(M.current);
		r.addEventListener("touchmove", z, { passive: !0 }), r.addEventListener("touchend", B, { passive: !0 });
	}), W = _(() => {
		let e = h(M.current);
		e.removeEventListener("pointermove", z), e.removeEventListener("pointerup", B), e.removeEventListener("touchmove", z), e.removeEventListener("touchend", B), C.current = null, be.current = null;
	}), G = ce();
	return F.useEffect(() => {
		let e = M.current;
		if (!e) return () => W();
		let t = se(e, "touchstart", Ae, { passive: !0 });
		return () => {
			t(), G.cancel(), W();
		};
	}, [
		W,
		Ae,
		M,
		G
	]), F.useEffect(() => {
		s && W();
	}, [s, W]), f("div", e, {
		state: de,
		ref: [
			t,
			w,
			M,
			ge
		],
		props: [{
			"data-base-ui-slider-control": T ? "" : void 0,
			onPointerDown(e) {
				let t = M.current, n = E(e.nativeEvent);
				if (!t || s || e.defaultPrevented || !D(n) || e.button !== 0) return;
				if (we(n)) {
					Se();
					return;
				}
				let r = U(e, _e);
				if (r != null) {
					L(r);
					let n = I(r);
					if (n == null) return;
					re(k.current[n.thumbIndex], ie(h(t))) ? e.preventDefault() : G.request(() => {
						R(n.thumbIndex);
					}), ae(!0), b.current == null && Ee(n, "track-press", e.nativeEvent) && n.didSwap && R(n.thumbIndex);
				}
				e.nativeEvent.pointerId && t.setPointerCapture(e.nativeEvent.pointerId), ve.current = 0;
				let i = h(M.current);
				i.addEventListener("pointermove", z, { passive: !0 }), i.addEventListener("pointerup", B, { once: !0 });
			}
		}, o],
		stateAttributesMapping: Ce
	});
}), W = /*#__PURE__*/ F.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...a } = e, { state: o } = Te();
	return f("div", e, {
		state: o,
		ref: t,
		props: [{ style: { position: "relative" } }, a],
		stateAttributesMapping: Ce
	});
}), G = ue();
function je() {
	return d;
}
function K() {
	return !1;
}
function q() {
	return !0;
}
function Me() {
	return (0, G.useSyncExternalStore)(je, K, q);
}
// node_modules/@base-ui/react/slider/thumb/SliderThumbDataAttributes.mjs
var Ne = /*#__PURE__*/ function(e) {
	return e.index = "data-index", e.dragging = "data-dragging", e.orientation = "data-orientation", e.disabled = "data-disabled", e.valid = "data-valid", e.invalid = "data-invalid", e.touched = "data-touched", e.dirty = "data-dirty", e.focused = "data-focused", e;
}({}), Pe = /* @__PURE__ */ new Set([
	...j,
	pe,
	A
]);
function Fe(e, t, n, r) {
	if (!(t < 0)) return e.length === 2 ? t === 0 ? `${O(e[t], r, n)} start range` : `${O(e[t], r, n)} end range` : n ? O(e[t], r, n) : void 0;
}
function J(e, t, n, i, a) {
	let o = n === 1 ? e + t : e - t, s = Number(o.toFixed(Math.max(z(e), z(t), z(i))));
	return r(s, i, a);
}
var Ie = /*#__PURE__*/ F.forwardRef(function(e, t) {
	let { render: n, children: r, className: i, "aria-describedby": a, "aria-label": s, "aria-labelledby": c, "aria-valuetext": d, disabled: p = !1, getAriaLabel: m, getAriaValueText: h, id: g, index: v, inputRef: y, onBlur: te, onFocus: b, onKeyDown: x, tabIndex: S, style: w, ...T } = e, { nonce: ne } = ve(), re = C(g), { active: E, lastUsedThumbIndex: ie, controlRef: ae, disabled: D, validation: se, formatOptionsRef: ce, handleInputChange: ue, inset: N, labelId: xe, largeStep: P, locale: we, max: L, min: R, minStepsBetweenValues: Ee, form: z, name: B, orientation: V, pressedInputRef: H, pressedThumbCenterOffsetRef: ke, pressedThumbIndexRef: U, renderBeforeHydration: Ae, setActive: W, setIndicatorPosition: G, state: je, step: K, values: q } = Te(), Ie = le(), Le = p || D, Y = q.length > 1, X = V === "vertical", Z = Ie === "rtl", { setTouched: Re, setFocused: ze, validationMode: Be } = o(), Q = F.useRef(null), Ve = F.useRef(null), He = F.useRef(!1), Ue = C(), We = be(), Ge = Y ? Ue : We, Ke = F.useMemo(() => ({ inputId: Ge }), [Ge]), { ref: qe, index: Je } = _e({ metadata: Ke }), $ = Y ? v ?? Je : 0, Ye = $ === q.length - 1, Xe = q[$], Ze = fe(Xe, R, L), [Qe, $e] = F.useState(), et = Me(), tt = ie >= 0 && ie < q.length ? ie : -1, nt = _(() => {
		let e = ae.current, t = Q.current;
		if (!e || !t) return;
		let n = t.getBoundingClientRect(), r = e.getBoundingClientRect(), i = X ? "height" : "width", a = r[i] - n[i], o = (n[i] / 2 + a * Ze / 100) / r[i] * 100, s = Number.isFinite(o) ? o : void 0;
		$e(s), $ === 0 ? G((e) => [s, e[1]]) : Ye && G((e) => [e[0], s]);
	});
	ee(() => {
		N && queueMicrotask(nt);
	}, [nt, N]), ee(() => {
		N && nt();
	}, [
		nt,
		N,
		Ze
	]), ee(() => {
		if (!N) return;
		let e = ae.current, t = Q.current;
		if (!e || !t) return;
		let n = oe(e).ResizeObserver;
		if (typeof n != "function") return;
		let r = new n(nt);
		return r.observe(e), r.observe(t), () => {
			r.disconnect();
		};
	}, [
		ae,
		nt,
		N
	]);
	let rt = X ? "bottom" : "insetInlineStart", it = X ? "left" : "top", at;
	Y ? E === $ ? at = 2 : tt === $ && (at = 1) : E === $ && (at = 1);
	let ot;
	ot = N ? {
		"--position": `${Qe ?? 0}%`,
		visibility: Ae && et || Qe === void 0 ? "hidden" : void 0,
		position: "absolute",
		[rt]: "var(--position)",
		[it]: "50%",
		translate: `${(X || !Z ? -1 : 1) * 50}% ${(X ? 1 : -1) * 50}%`,
		zIndex: at
	} : Number.isFinite(Ze) ? {
		position: "absolute",
		[rt]: `${Ze}%`,
		[it]: "50%",
		translate: `${(X || !Z ? -1 : 1) * 50}% ${(X ? 1 : -1) * 50}%`,
		zIndex: at
	} : de;
	let st;
	V === "vertical" && (st = Z ? "vertical-rl" : "vertical-lr");
	let ct = typeof m == "function" ? m($) : s, lt = u({
		"aria-label": ct,
		"aria-labelledby": c ?? (ct == null ? xe : void 0),
		"aria-describedby": a,
		"aria-orientation": V,
		"aria-valuenow": Xe,
		"aria-valuetext": typeof h == "function" ? h(O(Xe, we, ce.current ?? void 0), Xe, $) : d ?? Fe(q, $, ce.current ?? void 0, we),
		disabled: Le,
		form: z,
		id: Ge,
		max: L,
		min: R,
		name: B,
		onChange(e) {
			ue(e.currentTarget.valueAsNumber, $, e);
		},
		onFocus(e) {
			let t = He.current;
			He.current = !1, W($), ze(!0), t && e.stopPropagation();
		},
		onBlur(e) {
			He.current ? e.stopPropagation() : Q.current && (W(-1), Re(!0), ze(!1), Be === "onBlur" && se.commit(Se(Xe, $, R, L, Y, q)));
		},
		onKeyDown(e) {
			if (e.defaultPrevented || !Pe.has(e.key)) return;
			j.has(e.key) && e.stopPropagation();
			let t = null, n = Oe(Xe, K, R);
			switch (e.key) {
				case k:
					t = J(n, e.shiftKey ? P : K, 1, R, L);
					break;
				case me:
					t = J(n, e.shiftKey ? P : K, Z ? -1 : 1, R, L);
					break;
				case ge:
					t = J(n, e.shiftKey ? P : K, -1, R, L);
					break;
				case M:
					t = J(n, e.shiftKey ? P : K, Z ? 1 : -1, R, L);
					break;
				case pe:
					t = J(n, P, 1, R, L);
					break;
				case A:
					t = J(n, P, -1, R, L);
					break;
				case "End":
					t = L, Y && (t = Number.isFinite(q[$ + 1]) ? q[$ + 1] - K * Ee : L);
					break;
				case he: t = R, Y && (t = Number.isFinite(q[$ - 1]) ? q[$ - 1] + K * Ee : R);
			}
			if (t !== null) {
				let n = e.currentTarget;
				ye(n) || (He.current = !0, n.blur(), n.focus({
					preventScroll: !0,
					focusVisible: !0
				})), ue(t, $, e), e.preventDefault();
			}
		},
		step: K,
		style: {
			...de,
			width: "100%",
			height: "100%",
			writingMode: st
		},
		tabIndex: S ?? void 0,
		type: "range",
		value: Xe ?? ""
	}, (e) => se.getValidationProps(Le, e), { onKeyDown: x }), ut = l(Ve, se.inputRef, y);
	return f("div", e, {
		state: je,
		ref: [
			t,
			qe,
			Q
		],
		props: [{
			[Ne.index]: $,
			children: /*#__PURE__*/ (0, I.jsxs)(F.Fragment, { children: [
				r,
				/*#__PURE__*/ (0, I.jsx)("input", {
					ref: ut,
					...lt,
					suppressHydrationWarning: !0
				}),
				N && et && Ae && Ye && /*#__PURE__*/ (0, I.jsx)("script", {
					nonce: ne,
					dangerouslySetInnerHTML: { __html: "!function(){const t=document.currentScript?.parentElement;if(!t)return;const e=t.closest(\"[data-base-ui-slider-control]\");if(!e)return;const r=e.querySelector(\"[data-base-ui-slider-indicator]\"),i=e.getBoundingClientRect(),n=\"vertical\"===e.getAttribute(\"data-orientation\")?\"height\":\"width\",o=e.querySelectorAll('input[type=\"range\"]'),l=o.length>1,s=o.length-1;let a=null,u=null;for(let t=0;t<o.length;t+=1){const e=o[t],y=parseFloat(e.getAttribute(\"value\")??\"\");if(Number.isNaN(y))return;const c=e.parentElement;if(!c)return;const p=parseFloat(e.getAttribute(\"max\")??\"100\"),g=parseFloat(e.getAttribute(\"min\")??\"0\"),b=c?.getBoundingClientRect(),d=i[n]-b[n],m=100*(y-g)/(p-g),v=(b[n]/2+d*m/100)/i[n]*100;c.style.setProperty(\"--position\",`${v}%`),Number.isFinite(v)&&(c.style.removeProperty(\"visibility\"),r&&(0===t?(a=v,r.style.setProperty(\"--start-position\",`${v}%`),l||r.style.removeProperty(\"visibility\")):t===s&&(u=v-(a??0),r.style.setProperty(\"--end-position\",`${v}%`),r.style.setProperty(\"--relative-size\",`${u}%`),r.style.removeProperty(\"visibility\"))))}}();" },
					suppressHydrationWarning: !0
				})
			] }),
			id: re,
			onBlur: te,
			onFocus: b,
			onPointerDown(e) {
				if (!Le) {
					if (U.current = $, Q.current != null) {
						let t = V === "horizontal" ? "x" : "y", n = De(Q.current), r = (V === "horizontal" ? e.clientX : e.clientY) - n[t];
						ke.current = r;
					}
					Ve.current != null && H.current !== Ve.current && (H.current = Ve.current);
				}
			},
			style: ot,
			suppressHydrationWarning: Ae || void 0
		}, T],
		stateAttributesMapping: Ce
	});
});
// node_modules/@base-ui/react/slider/indicator/SliderIndicator.mjs
function Le(e, t, n, r, i, a) {
	let o = n === void 0 || t && r === void 0 ? "hidden" : void 0, s = e ? "bottom" : "insetInlineStart", c = e ? "height" : "width", l = {
		visibility: i && a ? "hidden" : o,
		position: e ? "absolute" : "relative",
		[e ? "width" : "height"]: "inherit"
	};
	return l["--start-position"] = `${n ?? 0}%`, t ? (l["--relative-size"] = `${(r ?? 0) - (n ?? 0)}%`, l[s] = "var(--start-position)", l[c] = "var(--relative-size)", l) : (l[s] = 0, l[c] = "var(--start-position)", l);
}
function Y(e, t, n, r) {
	let i = e ? "bottom" : "insetInlineStart", a = e ? "height" : "width", o = {
		position: e ? "absolute" : "relative",
		[e ? "width" : "height"]: "inherit"
	};
	if (!t) return o[i] = 0, o[a] = `${n}%`, o;
	let s = r - n;
	return o[i] = `${n}%`, o[a] = `${s}%`, o;
}
var X = /*#__PURE__*/ F.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, ...a } = e, { indicatorPosition: o, inset: s, max: c, min: l, orientation: u, renderBeforeHydration: d, state: p, values: m } = Te(), h = Me(), g = u === "vertical", _ = m.length > 1, v = s ? Le(g, _, o[0], o[1], d, h) : Y(g, _, fe(m[0], l, c), fe(m[m.length - 1], l, c));
	return f("div", e, {
		state: p,
		ref: t,
		props: [{
			"data-base-ui-slider-indicator": d ? "" : void 0,
			style: v,
			suppressHydrationWarning: d || void 0
		}, a],
		stateAttributesMapping: Ce
	});
});
// upstream/registry/bases/base/ui/slider.tsx
function Z({ className: e, defaultValue: n, value: r, min: i = 0, max: a = 100, ...o }) {
	let s = Array.isArray(r) ? r : Array.isArray(n) ? n : [i, a];
	return /* @__PURE__ */ (0, I.jsx)(Ee, {
		className: t("data-horizontal:w-full data-vertical:h-full", e),
		"data-slot": "slider",
		defaultValue: n,
		value: r,
		min: i,
		max: a,
		thumbAlignment: "edge",
		...o,
		children: /* @__PURE__ */ (0, I.jsxs)(Ae, {
			className: "cn-slider relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col",
			children: [/* @__PURE__ */ (0, I.jsx)(W, {
				"data-slot": "slider-track",
				className: "cn-slider-track relative grow overflow-hidden select-none",
				children: /* @__PURE__ */ (0, I.jsx)(X, {
					"data-slot": "slider-range",
					className: "cn-slider-range select-none data-horizontal:h-full data-vertical:w-full"
				})
			}), Array.from({ length: s.length }, (e, t) => /* @__PURE__ */ (0, I.jsx)(Ie, {
				"data-slot": "slider-thumb",
				className: "cn-slider-thumb block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
			}, t))]
		})
	});
}
// upstream/examples/base/slider-demo.tsx
function Re() {
	return /* @__PURE__ */ (0, I.jsx)(Z, {
		defaultValue: [75],
		max: 100,
		step: 1,
		className: "mx-auto w-full max-w-xs"
	});
}
export { Re as SliderDemo };
