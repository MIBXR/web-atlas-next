import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./dist-DffedT9e.js";
import { n as r, r as i, t as a } from "./chunk-HBS6WEDP-DTh5Z2I9.js";
import { t as o } from "./jsx-runtime-lAxUcZjR.js";
import { t as s } from "./dist-DCi9UB7o.js";
import { n as c } from "./button-DmMhlFcj.js";
import { t as l } from "./icon-placeholder-BTF3H_W7.js";
// node_modules/@shadcn/react/dist/questionnaire/index.js
var u = /* @__PURE__ */ e(t(), 1), d = o(), f = u.createContext(null), p = u.createContext(null), m = u.createContext(null);
function h(e) {
	let t = u.useContext(p);
	if (!t) throw Error(`${e} must be used within a Questionnaire.Root component.`);
	return t;
}
function g(e) {
	let t = u.useContext(f);
	if (!t) throw Error(`${e} must be used within a Questionnaire.Choice component.`);
	return t;
}
function _(e) {
	let t = u.useContext(m);
	if (!t) throw Error(`${e} must be used within a Questionnaire.Item component.`);
	return t;
}
function v(e) {
	return Array.isArray(e) ? e.some((e) => String(e).trim().length > 0) : e != null && String(e).trim().length > 0;
}
function y(e) {
	return e === "letters" ? Array.from({ length: 26 }, (e, t) => String.fromCharCode(65 + t)) : e === "numbers" ? Array.from({ length: 9 }, (e, t) => String(t + 1)) : [];
}
function b(e, t) {
	let n = t === "letters" ? e.toUpperCase() : e;
	return y(t).includes(n) ? n : null;
}
function x(e, t) {
	return [e, t ? "Enter" : null].filter(Boolean).join(" ") || void 0;
}
function S(e) {
	return e.type === "choice" ? e.element.checked : e.element.hasAttribute("name") && v(e.element.value);
}
function C(e) {
	return e?.type === "input" && [
		"email",
		"password",
		"search",
		"tel",
		"text",
		"url"
	].includes(e.element.type) && !v(e.element.value);
}
function w(e) {
	return e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement ? !0 : e instanceof HTMLInputElement ? ![
		"button",
		"checkbox",
		"radio",
		"reset",
		"submit"
	].includes(e.type) : e instanceof HTMLElement && e.isContentEditable;
}
function T(e) {
	return e instanceof HTMLInputElement && e.type === "radio";
}
function E(e, t) {
	if (e.element === t.element) return 0;
	let n = e.element.compareDocumentPosition(t.element);
	return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
}
function D(e, t) {
	if (e.element === t.element) return 0;
	let n = e.element.compareDocumentPosition(t.element);
	return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
}
function O({ checked: e, defaultChecked: t = !1, disabled: n = !1, onChange: r, value: i }) {
	let { disabled: a, hasInputAnswer: o, invalid: s, multiple: c, name: l, registerAnswerControl: d, registerAnswerSelection: f, required: p, resetVersion: m, selectedAnswerIds: h, setAnswerDefault: g, setAnswerSelectionFromInteraction: v, shortcutByAnswerId: y, shortcutByChoiceValue: b, status: S, syncControlledAnswerSelection: C } = _("Questionnaire.Choice"), w = u.useId(), [T, E] = u.useState(null), D = u.useRef(t), O = e !== void 0, k = a || n, A = h.includes(w), j = O ? S !== "skipped" && e : A, M = c ? "checkbox" : "radio", N = b?.get(i) ?? y.get(w) ?? null;
	u.useLayoutEffect(() => f(w, D.current), [w, f]), u.useLayoutEffect(() => g(w, t), [
		w,
		t,
		g
	]), u.useLayoutEffect(() => {
		if (T) return d({
			disabled: k,
			element: T,
			id: w,
			ownDisabled: n,
			type: "choice",
			value: i
		});
	}, [
		w,
		n,
		k,
		T,
		d,
		i
	]), u.useLayoutEffect(() => {
		O && C(w, e);
	}, [
		w,
		O,
		e,
		m,
		C
	]), u.useLayoutEffect(() => {
		T && (T.defaultChecked = O ? e : t, m > 0 && (T.checked = j));
	}, [
		j,
		O,
		e,
		t,
		T,
		m
	]);
	function P(t) {
		if (r?.(t), !t.defaultPrevented) {
			if (!O) {
				v(w, t.target.checked);
				return;
			}
			S === "skipped" && e === t.target.checked && v(w, e);
		}
	}
	let F = {
		checked: j,
		disabled: k,
		invalid: s,
		shortcut: N,
		type: M
	};
	return {
		inputProps: {
			ref: E,
			"aria-invalid": s || void 0,
			"aria-keyshortcuts": x(N, !k && j),
			checked: j,
			disabled: k,
			id: w,
			name: S === "skipped" ? void 0 : l,
			onChange: P,
			required: p && !c && !o,
			type: M,
			value: i
		},
		state: F
	};
}
function k({ defaultValue: e, disabled: t = !1, onChange: n, ref: r, type: a = "text", value: o }) {
	let { disabled: s, invalid: c, name: l, registerAnswerControl: d, registerAnswerSelection: f, resetVersion: p, selectedAnswerIds: m, setAnswerDefault: h, setAnswerSelectionFromInteraction: g, syncControlledAnswerSelection: y } = _("Questionnaire.Input"), b = u.useId(), S = u.useRef(null), C = u.useRef(v(e)), w = o !== void 0, T = v(e), E = v(o), [D, O] = u.useState(T), k = s || t, A = w ? E : D, j = m.includes(b);
	u.useLayoutEffect(() => f(b, C.current), [b, f]), u.useLayoutEffect(() => h(b, T), [
		T,
		b,
		h
	]), u.useLayoutEffect(() => {
		let e = S.current;
		if (e) return d({
			disabled: k,
			element: e,
			id: b,
			type: "input"
		});
	}, [
		k,
		b,
		d
	]), u.useLayoutEffect(() => {
		w ? y(b, E) : p > 0 && O(T);
	}, [
		w,
		E,
		o,
		T,
		b,
		p,
		y
	]), u.useLayoutEffect(() => {
		let e = S.current;
		!e || !w || (e.defaultValue = String(o));
	}, [w, o]);
	function M(e) {
		if (n?.(e), e.defaultPrevented) return;
		let t = e.target.value.trim().length > 0;
		w || (O(t), g(b, t));
	}
	let N = {
		disabled: k,
		filled: A,
		invalid: c
	}, P = u.useCallback((e) => {
		S.current = e, i(r)?.(e);
	}, [r]);
	return {
		inputProps: {
			"aria-invalid": c || void 0,
			"aria-keyshortcuts": x(null, !k && A && j),
			defaultValue: w ? void 0 : e,
			disabled: k,
			form: j ? void 0 : "",
			id: b,
			name: j ? l : void 0,
			onChange: M,
			ref: P,
			type: a,
			value: w ? o : void 0
		},
		state: N
	};
}
function A(e) {
	return e === void 0 ? null : {
		enabledItems: e.filter((e) => !e.disabled),
		itemByName: new Map(e.map((e) => [e.name, e])),
		items: e
	};
}
function j(e, t) {
	if (!e) return t ?? null;
	let n = t ? e.itemByName.get(t) : void 0;
	return n && !n.disabled ? n.name : e.enabledItems[0]?.name ?? null;
}
function M(e, t) {
	let n = /* @__PURE__ */ new Map();
	if (!e || !t) return n;
	let r = y(t), i = 0;
	for (let t of e.choices ?? []) {
		if (t.disabled) continue;
		let e = r[i];
		if (!e) break;
		n.set(t.value, e), i += 1;
	}
	return n;
}
function N({ "aria-describedby": e, "aria-keyshortcuts": t, disabled: n = !1, invalid: r = !1, multiple: a = !1, name: o, onStatusChange: s, ref: c, required: l = !1 }) {
	let { activeItemName: d, domVersion: f, first: p, itemDefinitionByName: m, last: g, nativeValidation: _, registerItem: v, shortcuts: b } = h("Questionnaire.Item"), [x, E] = u.useState(null), [O, k] = u.useState([]), [A, j] = u.useState(!1), [N, P] = u.useState([]), [F, I] = u.useState(!1), [L, ee] = u.useState(0), [te, R] = u.useState([]), [ne, z] = u.useState([]), B = u.useRef([]), V = u.useRef(a), H = u.useRef(a);
	V.current = a;
	let U = !n && d === o, W = u.useMemo(() => [...O].sort(D), [O, f]), G = u.useMemo(() => W.filter((e) => !e.disabled), [W]), K = G.some((e) => N.includes(e.id)), q = F ? "skipped" : K ? "answered" : "unanswered", J = q === "skipped" && !l, Y = n || J || !r && q === "answered", X = !n && !J && (r || A && !Y), re = G.some((e) => e.type === "input"), Z = u.useRef(q), ie = m?.get(o), Q = u.useMemo(() => m ? M(ie, b) : null, [
		ie,
		m,
		b
	]), $ = u.useMemo(() => {
		if (Q) return /* @__PURE__ */ new Map();
		let e = y(b), t = G.filter((e) => e.type === "choice");
		return new Map(t.slice(0, e.length).map((t, n) => [t.id, e[n]]));
	}, [
		G,
		Q,
		b
	]), ae = u.useCallback((e) => (k((t) => [...t.filter((t) => t.element !== e.element && t.id !== e.id), e]), () => {
		k((t) => t.filter((t) => t !== e));
	}), []);
	u.useLayoutEffect(() => {
		Z.current !== q && (Z.current = q, s?.(q));
	}, [s, q]);
	let oe = u.useCallback((e, t) => {
		P((n) => t ? a ? n.includes(e) ? n : [...n, e] : [e] : n.filter((t) => t !== e));
	}, [a]), se = u.useCallback((e, t) => {
		I(!1), oe(e, t);
	}, [oe]), ce = u.useCallback((e, t) => {
		t && I(!1), oe(e, t);
	}, [oe]), le = u.useCallback((e, t) => (t && (B.current = [...B.current.filter((t) => t !== e), e], P((t) => V.current ? t.includes(e) ? t : [...t, e] : t.length ? t : [e])), () => {
		B.current = B.current.filter((t) => t !== e), P((t) => t.filter((t) => t !== e));
	}), []), ue = u.useCallback((e, t) => {
		t ? B.current = B.current.includes(e) ? B.current : [...B.current, e] : B.current = B.current.filter((t) => t !== e);
	}, []), de = u.useCallback((e) => (R((t) => t.includes(e) ? t : [...t, e]), () => {
		R((t) => t.filter((t) => t !== e));
	}), []), fe = u.useCallback((e) => (z((t) => t.includes(e) ? t : [...t, e]), () => {
		z((t) => t.filter((t) => t !== e));
	}), []), pe = u.useCallback(() => {
		if (j(!0), !Y) return !1;
		if (!_) return !0;
		let e = G.find((e) => S(e) && e.element.willValidate && !e.element.validity.valid);
		return !e || (e.element.focus(), e.element.reportValidity(), !1);
	}, [
		G,
		_,
		Y
	]), me = u.useCallback(() => {
		x?.focus();
	}, [x]), he = u.useCallback(() => {
		let e = x?.querySelector("input[data-filled][name]:not(:disabled)"), t = x?.querySelector("input:not([type=hidden]):not(:disabled), textarea:not(:disabled)");
		(e ?? t ?? x)?.focus();
	}, [x]), ge = u.useCallback(() => {
		j(!1), I(!1), P(a ? [...B.current] : B.current.slice(0, 1)), ee((e) => e + 1);
	}, [a]), _e = u.useCallback(() => {
		l || (P([]), I(!0));
	}, [l]);
	u.useLayoutEffect(() => {
		let e = H.current;
		H.current = a, e && !a && P((e) => {
			let t = G.find((t) => e.includes(t.id));
			return t ? [t.id] : [];
		});
	}, [G, a]);
	let ve = u.useCallback((e) => G.find((t) => t.element === e) ?? null, [G]), ye = u.useCallback((e) => {
		if (Q) {
			let t = Array.from(Q.entries()).find(([, t]) => t === e)?.[0];
			return G.find((e) => e.type === "choice" && e.value === t) ?? null;
		}
		let t = Array.from($.entries()).find(([, t]) => t === e)?.[0];
		return G.find((e) => e.id === t) ?? null;
	}, [
		G,
		$,
		Q
	]), be = u.useCallback((e, t) => {
		let n = G.findIndex((t) => t.element === e), r = n < 0 ? null : G[n] ?? null;
		if (!G.length || w(e) && !C(r) || n < 0 && e !== x) return !1;
		let i = n < 0 ? G.find(S) ?? (t === "next" ? G[0] : G[G.length - 1]) : G[(n + (t === "next" ? 1 : -1) + G.length) % G.length];
		return !i || i.element === e || n >= 0 && T(e) && T(i.element) ? !1 : (i.element.focus(), i.type === "choice" && T(i.element) && i.element.click(), !0);
	}, [G, x]);
	u.useLayoutEffect(() => {
		if (x) return v({
			choices: W.flatMap((e) => e.type === "choice" ? [{
				disabled: e.ownDisabled,
				value: e.value
			}] : []),
			disabled: n,
			element: x,
			focus: me,
			focusInvalid: he,
			getAnswerByElement: ve,
			getAnswerByShortcut: ye,
			moveAnswerFocus: be,
			name: o,
			required: l,
			reset: ge,
			skip: _e,
			status: q,
			validate: pe
		});
	}, [
		W,
		n,
		x,
		me,
		he,
		ve,
		ye,
		be,
		o,
		v,
		l,
		ge,
		_e,
		q,
		pe
	]);
	let xe = u.useMemo(() => ({
		active: U,
		disabled: n,
		hasInputAnswer: re,
		invalid: X,
		multiple: a,
		name: o,
		registerAnswerControl: ae,
		registerAnswerSelection: le,
		registerDescription: de,
		registerError: fe,
		required: l,
		resetVersion: L,
		selectedAnswerIds: N,
		setAnswerDefault: ue,
		setAnswerSelectionFromInteraction: se,
		shortcutByAnswerId: $,
		shortcutByChoiceValue: Q,
		shortcuts: b,
		status: q,
		syncControlledAnswerSelection: ce
	}), [
		U,
		n,
		re,
		X,
		a,
		o,
		ae,
		le,
		de,
		fe,
		l,
		L,
		N,
		ue,
		se,
		$,
		Q,
		b,
		q,
		ce
	]), Se = u.useCallback((e) => {
		E(e), i(c)?.(e);
	}, [c]), Ce = [
		...te,
		...X ? ne : [],
		e
	].filter(Boolean).join(" ") || void 0, we = [
		t,
		U ? "Meta+Enter Control+Enter" : void 0,
		U && G.length ? "ArrowUp ArrowDown" : void 0,
		U && !p ? "ArrowLeft" : void 0,
		U && !g && q !== "unanswered" ? "ArrowRight" : void 0
	].filter(Boolean).join(" ") || void 0;
	return {
		context: xe,
		itemProps: {
			"aria-describedby": Ce,
			"aria-invalid": X || void 0,
			"aria-keyshortcuts": we,
			disabled: n,
			hidden: !U,
			inert: !U,
			ref: Se,
			tabIndex: -1
		},
		state: {
			active: U,
			disabled: n,
			invalid: X,
			multiple: a,
			required: l,
			status: q
		}
	};
}
function P({ defaultItem: e, item: t, items: n, noValidate: r, onItemChange: a, onReset: o, onSubmit: s, ref: c, shortcuts: l }) {
	let d = u.useMemo(() => A(n), [n]), [f, p] = u.useState([]), [m, h] = u.useState(() => j(d, e)), [g, _] = u.useState(null), [v, y] = u.useState(0), x = u.useRef(null), C = t !== void 0, D = C ? t : m, O = u.useRef(D), k = r === !1, M = l ?? null;
	u.useRef(/* @__PURE__ */ new Set()), u.useLayoutEffect(() => {}, [
		d,
		e,
		f,
		g,
		M
	]), u.useLayoutEffect(() => {
		if (!g || typeof MutationObserver > "u") return;
		let e = new MutationObserver(() => {
			y((e) => e + 1);
		});
		return e.observe(g, {
			childList: !0,
			subtree: !0
		}), () => e.disconnect();
	}, [g]);
	let N = u.useMemo(() => f.filter((e) => !e.disabled).sort(E), [v, f]), P = u.useMemo(() => new Map(N.map((e) => [e.name, e])), [N]), F = d?.enabledItems ?? N, I = F.findIndex((e) => e.name === D), L = I < 0 || !D ? null : P.get(D) ?? null, ee = D ? d?.itemByName.get(D) : void 0, te = I < 0 ? null : ee ? !!ee.required : L?.required ?? !1, R = I < 0 ? null : L?.status ?? (D ? "unanswered" : null), ne = u.useMemo(() => d ? d.enabledItems.flatMap((e) => {
		let t = P.get(e.name);
		return t ? [t] : [];
	}) : N, [
		d,
		P,
		N
	]), z = F.length, B = I < 0 ? 0 : I + 1, V = z > 0 && I === 0, H = z > 0 && I === z - 1, U = u.useCallback((e, t = "item") => {
		e !== D && (x.current = {
			name: e,
			target: t
		}, C || h(e), a?.(e));
	}, [
		D,
		C,
		a
	]);
	u.useLayoutEffect(() => {
		if (z === 0) return;
		if (I < 0) {
			if (!C && D === null) {
				h(F[0].name);
				return;
			}
			U(F[0].name);
			return;
		}
		let e = x.current, t = O.current !== D;
		O.current = D, !e || e.name !== D ? C && t && (x.current = null, L?.focus()) : (e.target === "invalid" ? L?.focusInvalid() : L?.focus(), x.current = null);
	}, [
		L,
		D,
		C,
		I,
		F,
		U,
		z
	]);
	let W = u.useCallback((e) => (p((t) => [...t.filter((t) => t.element !== e.element && t.name !== e.name), e]), () => {
		p((t) => t.filter((t) => t !== e));
	}), []), G = u.useCallback(() => {
		I <= 0 || U(F[I - 1].name);
	}, [
		I,
		F,
		U
	]), K = u.useCallback(() => {
		if (!(!L || I >= z - 1)) {
			if (!L.validate()) {
				L.focusInvalid();
				return;
			}
			U(F[I + 1].name);
		}
	}, [
		L,
		I,
		F,
		U,
		z
	]), q = u.useCallback(() => {
		if (L) {
			if (!L.validate()) {
				L.focusInvalid();
				return;
			}
			if (H) {
				g?.requestSubmit();
				return;
			}
			U(F[I + 1].name);
		}
	}, [
		L,
		I,
		H,
		F,
		g,
		U
	]), J = u.useCallback(() => {
		if (L && !L.required) {
			if (L.skip(), !H) {
				U(F[I + 1].name);
				return;
			}
			queueMicrotask(() => {
				g?.requestSubmit();
			});
		}
	}, [
		L,
		I,
		H,
		F,
		g,
		U
	]);
	function Y(t) {
		if (o?.(t), t.defaultPrevented) return;
		for (let e of f) e.reset();
		let n = d ? j(d, e) : N.find((t) => t.name === e)?.name ?? N[0]?.name;
		n && U(n);
	}
	function X(e) {
		let t = ne.find((e) => !e.validate());
		t ? (e.preventDefault(), U(t.name, "invalid"), t.name === D && (t.focusInvalid(), x.current = null)) : s?.(e);
	}
	function re(e) {
		if (e.defaultPrevented || e.nativeEvent.isComposing || e.keyCode === 229 || !L || !(e.target instanceof Element)) return;
		if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey) {
			e.preventDefault(), e.repeat || q();
			return;
		}
		if (e.metaKey || e.ctrlKey || e.altKey) return;
		if ((e.key === "ArrowUp" || e.key === "ArrowDown") && L.moveAnswerFocus(e.target, e.key === "ArrowDown" ? "next" : "previous")) {
			e.preventDefault();
			return;
		}
		if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && !w(e.target) && !T(e.target)) {
			if (e.preventDefault(), e.repeat) return;
			e.key === "ArrowLeft" ? G() : L.status !== "unanswered" && K();
			return;
		}
		if (e.key === "Enter") {
			let t = L.getAnswerByElement(e.target);
			if (!t) return;
			e.preventDefault(), !e.repeat && S(t) && q();
			return;
		}
		if (!M || w(e.target)) return;
		let t = b(e.key, M), n = t ? L.getAnswerByShortcut(t) : null;
		n && (e.preventDefault(), !e.repeat && (n.element.focus(), n.type === "choice" && n.element.click()));
	}
	let Z = {
		current: B,
		first: V,
		last: H,
		total: z
	}, ie = u.useMemo(() => ({
		...Z,
		activeItem: L,
		activeItemName: D,
		activeItemRequired: te,
		activeItemStatus: R,
		domVersion: v,
		goNext: K,
		goPrevious: G,
		itemDefinitionByName: d?.itemByName ?? null,
		nativeValidation: k,
		registerItem: W,
		shortcuts: M,
		skipCurrent: J
	}), [
		L,
		D,
		te,
		R,
		d,
		B,
		v,
		V,
		K,
		G,
		H,
		k,
		W,
		M,
		J,
		z
	]), Q = u.useCallback((e) => {
		_(e), i(c)?.(e);
	}, [c]);
	return {
		context: ie,
		rootProps: {
			"data-shortcuts": M ?? void 0,
			onKeyDown: re,
			onReset: Y,
			onSubmit: X,
			ref: Q
		},
		state: Z
	};
}
function F({ defaultItem: e, item: t, items: n, noValidate: i = !0, onItemChange: o, onReset: s, onSubmit: c, ref: l, shortcuts: u, ...f }) {
	let { context: m, rootProps: h, state: g } = P({
		defaultItem: e,
		item: t,
		items: n,
		noValidate: i,
		onItemChange: o,
		onReset: s,
		onSubmit: c,
		ref: l,
		shortcuts: u
	}), _ = a({
		defaultTagName: "form",
		props: r({
			...h,
			noValidate: i
		}, f),
		state: g
	});
	return (0, d.jsx)(p.Provider, {
		value: m,
		children: _
	});
}
function I({ children: e, render: t, ...n }) {
	let { current: i, first: o, last: s, total: c } = h("Questionnaire.Progress"), l = c ? `Question ${i} of ${c}` : void 0;
	return a({
		defaultTagName: "div",
		props: r({
			"aria-label": "Questionnaire progress",
			"aria-live": "polite",
			"aria-valuemax": c || void 0,
			"aria-valuemin": c ? 1 : void 0,
			"aria-valuenow": c ? i : void 0,
			"aria-valuetext": l,
			children: e ?? l,
			role: "progressbar"
		}, n),
		render: t,
		state: {
			current: i,
			first: o,
			last: s,
			total: c
		}
	});
}
function L({ "aria-describedby": e, "aria-keyshortcuts": t, children: n, disabled: i = !1, invalid: o = !1, multiple: s = !1, name: c, onStatusChange: l, ref: u, required: f = !1, ...p }) {
	let { context: h, itemProps: g, state: _ } = N({
		"aria-describedby": e,
		"aria-keyshortcuts": t,
		disabled: i,
		invalid: o,
		multiple: s,
		name: c,
		onStatusChange: l,
		ref: u,
		required: f
	}), v = a({
		defaultTagName: "fieldset",
		props: r({
			...g,
			children: n
		}, p),
		state: _,
		stateAttributesMapping: { active: (e) => ({ "data-active": e ? "" : void 0 }) }
	});
	return (0, d.jsx)(m.Provider, {
		value: h,
		children: v
	});
}
function ee({ render: e, ...t }) {
	return _("Questionnaire.Title"), a({
		defaultTagName: "legend",
		props: t,
		render: e
	});
}
function te({ id: e, render: t, ...n }) {
	let { registerDescription: i } = _("Questionnaire.Description"), o = u.useId(), s = e ?? o;
	return u.useLayoutEffect(() => i(s), [s, i]), a({
		defaultTagName: "p",
		props: r({ id: s }, n),
		render: t
	});
}
function R({ render: e, ...t }) {
	let { shortcuts: n } = _("Questionnaire.Choices");
	return a({
		defaultTagName: "div",
		props: t,
		render: e,
		state: { shortcuts: n }
	});
}
function ne({ checked: e, children: t, defaultChecked: n = !1, disabled: i = !1, onChange: o, render: s, value: c, ...l }) {
	let { inputProps: u, state: p } = O({
		checked: e,
		defaultChecked: n,
		disabled: i,
		onChange: o,
		value: c
	}), m = a({
		defaultTagName: "label",
		props: r({ children: t }, l),
		render: s,
		state: p,
		stateAttributesMapping: { checked: (e) => ({
			"data-checked": e ? "" : void 0,
			"data-unchecked": e ? void 0 : ""
		}) }
	});
	return (0, d.jsx)(f.Provider, {
		value: {
			inputProps: u,
			state: p
		},
		children: m
	});
}
function z({ render: e, ...t }) {
	let { inputProps: n, state: i } = g("Questionnaire.ChoiceInput");
	return a({
		defaultTagName: "input",
		props: r(n, t),
		render: e,
		state: i,
		stateAttributesMapping: { checked: (e) => ({
			"data-checked": e ? "" : void 0,
			"data-unchecked": e ? void 0 : ""
		}) }
	});
}
function B({ render: e, ...t }) {
	return g("Questionnaire.ChoiceLabel"), a({
		defaultTagName: "span",
		props: t,
		render: e
	});
}
function V({ children: e, render: t, ...n }) {
	let { state: i } = g("Questionnaire.ChoiceShortcut"), o = { shortcut: i.shortcut };
	return a({
		defaultTagName: "span",
		props: r({
			"aria-hidden": !0,
			children: e ?? i.shortcut,
			hidden: i.shortcut === null
		}, n),
		render: t,
		state: o
	});
}
function H({ defaultValue: e, disabled: t = !1, onChange: n, ref: i, render: o, type: s = "text", value: c, ...l }) {
	let { inputProps: u, state: d } = k({
		defaultValue: e,
		disabled: t,
		onChange: n,
		ref: i,
		type: s,
		value: c
	});
	return a({
		defaultTagName: "input",
		props: r(u, l),
		render: o,
		state: d,
		stateAttributesMapping: { filled: (e) => ({
			"data-empty": e ? void 0 : "",
			"data-filled": e ? "" : void 0
		}) }
	});
}
function U({ children: e, id: t, render: n, ...i }) {
	let { invalid: o, registerError: s, required: c } = _("Questionnaire.Error"), l = u.useId(), d = t ?? l;
	return u.useLayoutEffect(() => s(d), [d, s]), a({
		defaultTagName: "p",
		props: r({
			children: e ?? (c ? "Choose an answer to continue." : "Choose an answer or skip this question."),
			hidden: !o,
			id: d,
			role: o ? "alert" : void 0
		}, i),
		render: n,
		state: { invalid: o }
	});
}
function W({ children: e, disabled: t = !1, onClick: n, render: r, tabIndex: i, type: a = "button", ...o }) {
	let s = h("Questionnaire.Previous"), c = s.total > 1 && !s.first;
	function l(e) {
		n?.(e), e.defaultPrevented || s.goPrevious();
	}
	return J({
		children: e ?? "Previous",
		disabled: t,
		onClick: l,
		props: o,
		render: r,
		status: s.activeItemStatus,
		tabIndex: i,
		type: a,
		visible: c
	});
}
function G({ children: e, disabled: t = !1, onClick: n, render: r, tabIndex: i, type: a = "button", ...o }) {
	let s = h("Questionnaire.Skip"), c = s.activeItemRequired === !1;
	function l(e) {
		n?.(e), e.defaultPrevented || s.skipCurrent();
	}
	return J({
		children: e ?? "Skip",
		disabled: t,
		onClick: l,
		props: o,
		render: r,
		status: s.activeItemStatus,
		tabIndex: i,
		type: a,
		visible: c
	});
}
function K({ children: e, disabled: t = !1, onClick: n, render: r, tabIndex: i, type: a = "button", ...o }) {
	let s = h("Questionnaire.Next"), c = s.total > 1 && !s.last;
	function l(e) {
		n?.(e), e.defaultPrevented || s.goNext();
	}
	return J({
		children: e ?? "Next",
		disabled: t,
		onClick: l,
		props: o,
		render: r,
		shortcut: "Enter",
		status: s.activeItemStatus,
		tabIndex: i,
		type: a,
		visible: c
	});
}
function q({ children: e, disabled: t = !1, render: n, tabIndex: r, type: i = "submit", ...a }) {
	let o = h("Questionnaire.Submit"), s = o.total > 0 && o.last;
	return J({
		children: e ?? "Submit",
		disabled: t,
		props: a,
		render: n,
		shortcut: "Enter",
		status: o.activeItemStatus,
		tabIndex: r,
		type: i,
		visible: s
	});
}
function J({ children: e, disabled: t, onClick: n, props: i, render: o, shortcut: s, status: c, tabIndex: l, type: u, visible: d }) {
	let f = d && !t ? s ?? null : null, p = {
		disabled: t,
		shortcut: f,
		status: c,
		visible: d
	};
	return a({
		defaultTagName: "button",
		props: r({
			"aria-hidden": !d || void 0,
			"aria-keyshortcuts": f ?? void 0,
			children: e,
			disabled: t,
			hidden: !d,
			inert: !d,
			onClick: n,
			tabIndex: d ? l : -1,
			type: u
		}, i),
		render: o,
		state: p,
		stateAttributesMapping: { visible: (e) => ({
			"data-hidden": e ? void 0 : "",
			"data-visible": e ? "" : void 0
		}) }
	});
}
var Y = {
	Root: F,
	Progress: I,
	Item: L,
	Title: ee,
	Description: te,
	Choices: R,
	Choice: ne,
	ChoiceInput: z,
	ChoiceLabel: B,
	ChoiceShortcut: V,
	Input: H,
	Error: U,
	Previous: W,
	Skip: G,
	Next: K,
	Submit: q
};
// upstream/registry/bases/base/ui/questionnaire.tsx
function X({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)(Y.Root, {
		"data-slot": "questionnaire",
		className: s("cn-questionnaire flex w-full min-w-0 flex-col", e),
		...t
	});
}
function re({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)(Y.Progress, {
		"data-slot": "questionnaire-progress",
		className: s("cn-questionnaire-progress min-h-[1lh] w-fit min-w-[14ch] font-medium text-muted-foreground tabular-nums", e),
		...t
	});
}
function Z({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)(Y.Item, {
		"data-slot": "questionnaire-item",
		className: s("cn-questionnaire-item min-w-0 border-0 p-0 outline-none", e),
		...t
	});
}
function ie({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)(Y.Title, {
		"data-slot": "questionnaire-title",
		className: s("cn-questionnaire-title cn-font-heading text-pretty", e),
		...t
	});
}
function Q({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)(Y.Description, {
		"data-slot": "questionnaire-description",
		className: s("cn-questionnaire-description text-pretty text-muted-foreground", e),
		...t
	});
}
function $({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)(Y.Choices, {
		"data-slot": "questionnaire-choices",
		className: s("cn-questionnaire-choices group/questionnaire-choices grid min-w-0", e),
		...t
	});
}
function ae({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ (0, d.jsxs)(Y.Choice, {
		"data-slot": "questionnaire-choice",
		className: s("cn-questionnaire-choice group/questionnaire-choice relative flex min-h-11 cursor-pointer items-start text-start transition-colors outline-none select-none", "data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50", t),
		...n,
		children: [
			/* @__PURE__ */ (0, d.jsx)(Y.ChoiceInput, {
				"data-slot": "questionnaire-choice-input",
				className: "cn-questionnaire-choice-input absolute inset-0 z-10 size-full cursor-pointer opacity-0"
			}),
			/* @__PURE__ */ (0, d.jsxs)("span", {
				"aria-hidden": "true",
				"data-slot": "questionnaire-choice-indicator",
				className: "cn-questionnaire-choice-indicator pointer-events-none relative flex shrink-0 items-center justify-center border group-data-[type=radio]/questionnaire-choice:rounded-full",
				children: [/* @__PURE__ */ (0, d.jsx)("span", {
					"data-slot": "questionnaire-choice-indicator-dot",
					className: "cn-questionnaire-choice-indicator-dot hidden rounded-full group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block"
				}), /* @__PURE__ */ (0, d.jsx)(l, {
					"data-slot": "questionnaire-choice-indicator-check",
					className: "cn-questionnaire-choice-indicator-check hidden group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block",
					lucide: "CheckIcon",
					tabler: "IconCheck",
					hugeicons: "Tick02Icon",
					phosphor: "CheckIcon",
					remixicon: "RiCheckLine"
				})]
			}),
			/* @__PURE__ */ (0, d.jsx)(Y.ChoiceLabel, {
				"data-slot": "questionnaire-choice-label",
				className: "cn-questionnaire-choice-label cn-questionnaire-choice-content flex min-w-0 flex-1 flex-col leading-snug",
				children: e
			}),
			/* @__PURE__ */ (0, d.jsx)(Y.ChoiceShortcut, {
				"data-slot": "questionnaire-choice-shortcut",
				className: "cn-questionnaire-choice-shortcut cn-questionnaire-shortcut pointer-events-none ms-auto hidden shrink-0 group-data-[shortcut]/questionnaire-choice:inline-flex"
			})
		]
	});
}
function oe({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)("div", {
		"data-slot": "questionnaire-input-wrapper",
		className: "cn-questionnaire-input-wrapper group/questionnaire-input relative min-w-0",
		children: /* @__PURE__ */ (0, d.jsx)(Y.Input, {
			"data-slot": "questionnaire-input",
			className: s("cn-questionnaire-input min-h-11 w-full min-w-0 transition-[color,box-shadow,background-color] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-0", "selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground", e),
			...t
		})
	});
}
function se({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)(Y.Error, {
		"data-slot": "questionnaire-error",
		className: s("cn-questionnaire-error text-destructive", e),
		...t
	});
}
function ce({ className: e, ...t }) {
	return /* @__PURE__ */ (0, d.jsx)("div", {
		"data-slot": "questionnaire-actions",
		className: s("cn-questionnaire-actions grid min-h-11 w-full grid-cols-[minmax(0,1fr)_auto_auto] items-center", e),
		...t
	});
}
function le({ children: e, className: t, size: n = "default", variant: r = "outline", ...i }) {
	return /* @__PURE__ */ (0, d.jsx)(Y.Previous, {
		"data-slot": "questionnaire-previous",
		"data-size": n,
		"data-variant": r,
		className: s(c({
			size: n,
			variant: r
		}), "cn-questionnaire-previous col-start-1 row-start-1 min-h-11 justify-self-start sm:min-h-0", t),
		...i,
		children: e ?? "Previous"
	});
}
function ue({ children: e, className: t, size: n = "default", variant: r = "outline", ...i }) {
	return /* @__PURE__ */ (0, d.jsx)(Y.Skip, {
		"data-slot": "questionnaire-skip",
		"data-size": n,
		"data-variant": r,
		className: s(c({
			size: n,
			variant: r
		}), "cn-questionnaire-skip col-start-2 row-start-1 min-h-11 justify-self-end sm:min-h-0", t),
		...i,
		children: e ?? "Skip"
	});
}
function de({ children: e, className: t, size: n = "default", variant: r = "default", ...i }) {
	return /* @__PURE__ */ (0, d.jsx)(Y.Next, {
		"data-slot": "questionnaire-next",
		"data-size": n,
		"data-variant": r,
		className: s(c({
			size: n,
			variant: r
		}), "cn-questionnaire-next col-start-3 row-start-1 min-h-11 justify-self-end sm:min-h-0", t),
		...i,
		children: e ?? "Next"
	});
}
function fe({ children: e, className: t, size: n = "default", variant: r = "default", ...i }) {
	return /* @__PURE__ */ (0, d.jsx)(Y.Submit, {
		"data-slot": "questionnaire-submit",
		"data-size": n,
		"data-variant": r,
		className: s(c({
			size: n,
			variant: r
		}), "cn-questionnaire-submit col-start-3 row-start-1 min-h-11 justify-self-end sm:min-h-0", t),
		...i,
		children: e ?? "Submit"
	});
}
// upstream/examples/base/questionnaire-demo.tsx
var pe = [
	{
		choices: [
			{
				description: "Show what the agent ran and what came back.",
				label: "Tool call timeline",
				value: "tool-calls"
			},
			{
				description: "Ask before sensitive or destructive actions.",
				label: "Approval checkpoints",
				value: "approvals"
			},
			{
				description: "Make delegated work and results easier to follow.",
				label: "Sub-agent handoffs",
				value: "handoffs"
			}
		],
		description: "Choose a direction or describe another task.",
		input: {
			label: "Another agent feature",
			placeholder: "Describe another feature…"
		},
		name: "direction",
		required: !0,
		title: "What should the agent build next?"
	},
	{
		choices: [
			{
				label: "Progress",
				value: "progress"
			},
			{
				label: "Decisions",
				value: "decisions"
			},
			{
				label: "Risks",
				value: "risks"
			},
			{
				label: "Next step",
				value: "next-step"
			}
		],
		description: "Select all that apply, or skip this question.",
		multiple: !0,
		name: "signals",
		required: !1,
		title: "What should every progress update include?"
	},
	{
		choices: [
			{
				label: "Start now",
				value: "now"
			},
			{
				label: "Next development cycle",
				value: "next-cycle"
			},
			{
				label: "Add it to the backlog",
				value: "backlog"
			}
		],
		description: "Choose when the agent should begin the work.",
		name: "timing",
		required: !0,
		title: "When should work begin?"
	}
];
function me() {
	function e(e) {
		e.preventDefault();
		let t = new FormData(e.currentTarget), r = {
			direction: t.get("direction"),
			signals: t.getAll("signals"),
			timing: t.get("timing")
		};
		n("Agent plan saved", { description: `Direction: ${r.direction ?? "None"} · Progress signals: ${r.signals.join(", ") || "None"} · Timing: ${r.timing ?? "None"}` });
	}
	return /* @__PURE__ */ (0, d.jsxs)(X, {
		className: "mx-auto max-w-md",
		defaultItem: "direction",
		items: pe,
		shortcuts: "letters",
		onSubmit: e,
		children: [
			/* @__PURE__ */ (0, d.jsx)(re, {}),
			pe.map((e) => /* @__PURE__ */ (0, d.jsxs)(Z, {
				multiple: "multiple" in e && e.multiple,
				name: e.name,
				required: e.required,
				children: [
					/* @__PURE__ */ (0, d.jsx)(ie, { children: e.title }),
					/* @__PURE__ */ (0, d.jsx)(Q, { children: e.description }),
					/* @__PURE__ */ (0, d.jsxs)($, { children: [e.choices.map((e) => /* @__PURE__ */ (0, d.jsxs)(ae, {
						value: e.value,
						children: [/* @__PURE__ */ (0, d.jsx)("span", {
							className: "font-medium",
							children: e.label
						}), "description" in e ? /* @__PURE__ */ (0, d.jsx)("span", {
							className: "text-muted-foreground",
							children: e.description
						}) : null]
					}, e.value)), "input" in e ? /* @__PURE__ */ (0, d.jsx)(oe, {
						"aria-label": e.input.label,
						placeholder: e.input.placeholder
					}) : null] }),
					/* @__PURE__ */ (0, d.jsx)(se, {})
				]
			}, e.name)),
			/* @__PURE__ */ (0, d.jsxs)(ce, { children: [
				/* @__PURE__ */ (0, d.jsx)(le, {}),
				/* @__PURE__ */ (0, d.jsx)(ue, {}),
				/* @__PURE__ */ (0, d.jsx)(de, { children: "Next" }),
				/* @__PURE__ */ (0, d.jsx)(fe, { children: "Save plan" })
			] })
		]
	});
}
export { me as QuestionnaireDemo };
