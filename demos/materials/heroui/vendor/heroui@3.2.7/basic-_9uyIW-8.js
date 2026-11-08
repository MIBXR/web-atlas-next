import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i } from "./FieldError-BDRHklqb.js";
import { t as a } from "./assertion-CKDD-Pvc.js";
import { t as o } from "./compose-ClIOcrt6.js";
import { t as s } from "./label-Wq1WAbJ3.js";
import { t as c } from "./link-vZNhpvw9.js";
// node_modules/@heroui/styles/dist/components/input-otp/input-otp.styles.js
var l = e({
	defaultVariants: { variant: "primary" },
	slots: {
		base: "input-otp",
		caret: "input-otp__caret",
		group: "input-otp__group",
		input: "input-otp__input",
		separator: "input-otp__separator",
		slot: "input-otp__slot",
		slotValue: "input-otp__slot-value"
	},
	variants: { variant: {
		primary: { base: "input-otp--primary" },
		secondary: { base: "input-otp--secondary" }
	} }
}), u = /* @__PURE__ */ t(n(), 1), d = Object.defineProperty, f = Object.defineProperties, p = Object.getOwnPropertyDescriptors, m = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable, _ = (e, t, n) => t in e ? d(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, v = (e, t) => {
	for (var n in t ||= {}) h.call(t, n) && _(e, n, t[n]);
	if (m) for (var n of m(t)) g.call(t, n) && _(e, n, t[n]);
	return e;
}, y = (e, t) => f(e, p(t)), b = (e, t) => {
	var n = {};
	for (var r in e) h.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && m) for (var r of m(e)) t.indexOf(r) < 0 && g.call(e, r) && (n[r] = e[r]);
	return n;
};
function x(e) {
	return [
		setTimeout(e, 0),
		setTimeout(e, 10),
		setTimeout(e, 50)
	];
}
function S(e) {
	let t = u.useRef();
	return u.useEffect(() => {
		t.current = e;
	}), t.current;
}
var C = 18, w = 40, T = `${w}px`;
function E(e) {
	let t = e.getBoundingClientRect().right, n = e;
	for (; n;) {
		if (getComputedStyle(n).overflowX !== "visible") return n.getBoundingClientRect().left + n.clientLeft + n.clientWidth - t;
		n = n.parentElement;
	}
	return document.documentElement.clientWidth - t;
}
var D = "[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$=\"2147483647 !important;\"]";
function O({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
	let [i, a] = u.useState(!1), [o, s] = u.useState(!1), [c, l] = u.useState(!1), d = u.useMemo(() => n !== "none" && (n === "increase-width" || n === "experimental-no-flickering") && i && o, [
		i,
		o,
		n
	]), f = u.useCallback(() => {
		let r = e.current, i = t.current;
		if (!r || !i || c || n === "none") return;
		let o = r, u = o.getBoundingClientRect().left + o.offsetWidth, d = o.getBoundingClientRect().top + o.offsetHeight / 2, f = u - C, p = d;
		document.querySelectorAll(D).length === 0 && document.elementFromPoint(f, p) === r || (s(E(r) >= w), a(!0), l(!0));
	}, [
		e,
		t,
		c,
		n
	]);
	return u.useEffect(() => {
		let t = e.current;
		if (!t || n === "none") return;
		function r() {
			s(E(t) >= w);
		}
		r();
		let i = setInterval(r, 1e3);
		return () => {
			clearInterval(i);
		};
	}, [e, n]), u.useEffect(() => {
		let e = r || document.activeElement === t.current;
		if (n === "none" || !e) return;
		let i = setTimeout(f, 0), a = setTimeout(f, 2e3), o = setTimeout(f, 5e3), s = setTimeout(() => {
			l(!0);
		}, 6e3);
		return () => {
			clearTimeout(i), clearTimeout(a), clearTimeout(o), clearTimeout(s);
		};
	}, [
		t,
		r,
		n,
		f
	]), {
		hasPWMBadge: i,
		willPushPWMBadge: d,
		PWM_BADGE_SPACE_WIDTH: T
	};
}
var k = u.createContext({}), A = u.forwardRef((e, t) => {
	var n = e, { value: r, onChange: i, maxLength: a, textAlign: o = "left", pattern: s, placeholder: c, inputMode: l = "numeric", onComplete: d, pushPasswordManagerStrategy: f = "increase-width", pasteTransformer: p, containerClassName: m, noScriptCSSFallback: h = ee, nonce: g, render: _, children: C } = n, w = b(n, [
		"value",
		"onChange",
		"maxLength",
		"textAlign",
		"pattern",
		"placeholder",
		"inputMode",
		"onComplete",
		"pushPasswordManagerStrategy",
		"pasteTransformer",
		"containerClassName",
		"noScriptCSSFallback",
		"nonce",
		"render",
		"children"
	]), T;
	let [E, D] = u.useState(typeof w.defaultValue == "string" ? w.defaultValue : ""), A = r ?? E, M = S(A), N = u.useCallback((e) => {
		i?.(e), D(e);
	}, [i]), P = u.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), F = u.useRef(null), I = u.useRef(null), L = u.useRef({
		value: A,
		onChange: N,
		isIOS: typeof window < "u" && ((T = window == null ? void 0 : window.CSS)?.supports)?.call(T, "-webkit-touch-callout", "none")
	}), R = u.useRef({ prev: [
		F.current?.selectionStart,
		F.current?.selectionEnd,
		F.current?.selectionDirection
	] });
	u.useImperativeHandle(t, () => F.current, []), u.useEffect(() => {
		let e = F.current, t = I.current;
		if (!e || !t) return;
		L.current.value !== e.value && L.current.onChange(e.value), R.current.prev = [
			e.selectionStart,
			e.selectionEnd,
			e.selectionDirection
		];
		function n() {
			if (document.activeElement !== e) {
				W(null), K(null);
				return;
			}
			let t = e.selectionStart, n = e.selectionEnd, r = e.selectionDirection, i = e.maxLength, a = e.value, o = R.current.prev, s = -1, c = -1, l;
			if (a.length !== 0 && t !== null && n !== null) {
				let r = t === n, u = t === a.length && a.length < i;
				if (r && !u) {
					let e = t;
					if (e === 0) s = 0, c = 1, l = "forward";
					else if (e === i) s = e - 1, c = e, l = "backward";
					else if (i > 1 && a.length > 1) {
						let t = 0;
						if (o[0] !== null && o[1] !== null) {
							l = e < o[1] ? "backward" : "forward";
							let n = o[0] === o[1] && o[0] < i;
							l === "backward" && !n && (t = -1);
						}
						s = t + e, c = t + e + 1;
					}
				}
				s !== -1 && c !== -1 && s !== c && e.setSelectionRange(s, c, l);
			}
			let u = s === -1 ? t : s, d = c === -1 ? n : c, f = l ?? r;
			W(u), K(d), R.current.prev = [
				u,
				d,
				f
			];
		}
		if (document.addEventListener("selectionchange", n, { capture: !0 }), n(), document.activeElement === e && H(!0), !document.getElementById("input-otp-style")) {
			let e = document.createElement("style");
			if (e.id = "input-otp-style", g && e.setAttribute("nonce", g), document.head.appendChild(e), e.sheet) {
				let t = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
				j(e.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), j(e.sheet, `[data-input-otp]:autofill { ${t} }`), j(e.sheet, `[data-input-otp]:-webkit-autofill { ${t} }`), j(e.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), j(e.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
			}
		}
		let r = () => {
			t && t.style.setProperty("--root-height", `${e.clientHeight}px`);
		};
		r();
		let i = typeof ResizeObserver > "u" ? null : new ResizeObserver(r);
		return i?.observe(e), () => {
			document.removeEventListener("selectionchange", n, { capture: !0 }), i?.disconnect();
		};
	}, []);
	let [z, B] = u.useState(!1), [V, H] = u.useState(!1), [U, W] = u.useState(null), [G, K] = u.useState(null);
	u.useEffect(() => {
		let e = x(() => {
			var e;
			(e = F.current) == null || e.dispatchEvent(new Event("input"));
			let t = F.current?.selectionStart, n = F.current?.selectionEnd, r = F.current?.selectionDirection;
			t !== null && n !== null && (W(t), K(n), R.current.prev = [
				t,
				n,
				r
			]);
		});
		return () => {
			e.forEach((e) => clearTimeout(e));
		};
	}, [A, V]), u.useEffect(() => {
		M !== void 0 && A !== M && M.length < a && A.length === a && d?.(A);
	}, [
		a,
		d,
		M,
		A
	]);
	let q = O({
		containerRef: I,
		inputRef: F,
		pushPasswordManagerStrategy: f,
		isFocused: V
	}), J = u.useCallback((e) => {
		let t = e.currentTarget.value.slice(0, a);
		t.length > 0 && P && !P.test(t) ? e.preventDefault() : (typeof M == "string" && t.length < M.length && document.dispatchEvent(new Event("selectionchange")), N(t));
	}, [
		a,
		N,
		M,
		P
	]), Y = u.useCallback(() => {
		var e;
		if (F.current) {
			let t = Math.min(F.current.value.length, a - 1), n = F.current.value.length;
			(e = F.current) == null || e.setSelectionRange(t, n), W(t), K(n);
		}
		H(!0);
	}, [a]), X = u.useCallback((e) => {
		let t = F.current;
		if (!p && (!L.current.isIOS || !e.clipboardData || !t)) return;
		let n = e.clipboardData.getData("text/plain"), r = p ? p(n) : n;
		e.preventDefault();
		let i = F.current?.selectionStart, o = F.current?.selectionEnd, s = (i === o ? A.slice(0, i) + r + A.slice(i) : A.slice(0, i) + r + A.slice(o)).slice(0, a);
		if (s.length > 0 && P && !P.test(s)) return;
		t.value = s, N(s);
		let c = Math.min(s.length, a - 1), l = s.length;
		t.setSelectionRange(c, l), W(c), K(l);
	}, [
		a,
		N,
		p,
		P,
		A
	]), Z = u.useMemo(() => ({
		position: "relative",
		cursor: w.disabled ? "default" : "text",
		userSelect: "none",
		WebkitUserSelect: "none",
		pointerEvents: "none"
	}), [w.disabled]), Q = u.useMemo(() => ({
		position: "absolute",
		inset: 0,
		width: q.willPushPWMBadge ? `calc(100% + ${q.PWM_BADGE_SPACE_WIDTH})` : "100%",
		clipPath: q.willPushPWMBadge ? `inset(0 ${q.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
		height: "100%",
		display: "flex",
		textAlign: o,
		opacity: "1",
		color: "transparent",
		pointerEvents: "all",
		background: "transparent",
		caretColor: "transparent",
		border: "0 solid transparent",
		outline: "0 solid transparent",
		boxShadow: "none",
		lineHeight: "1",
		letterSpacing: "-.5em",
		fontSize: "var(--root-height, 16px)",
		fontFamily: "monospace",
		fontVariantNumeric: "tabular-nums"
	}), [
		q.PWM_BADGE_SPACE_WIDTH,
		q.willPushPWMBadge,
		o
	]), te = u.useMemo(() => u.createElement("input", y(v({ autoComplete: w.autoComplete || "one-time-code" }, w), {
		"data-input-otp": !0,
		"data-input-otp-placeholder-shown": A.length === 0 || void 0,
		"data-input-otp-mss": U,
		"data-input-otp-mse": G,
		inputMode: l,
		pattern: P?.source,
		"aria-placeholder": c,
		style: Q,
		maxLength: a,
		value: A,
		ref: F,
		spellCheck: w.spellCheck ?? !1,
		onPaste: (e) => {
			var t;
			X(e), (t = w.onPaste) == null || t.call(w, e);
		},
		onChange: J,
		onMouseOver: (e) => {
			var t;
			B(!0), (t = w.onMouseOver) == null || t.call(w, e);
		},
		onMouseLeave: (e) => {
			var t;
			B(!1), (t = w.onMouseLeave) == null || t.call(w, e);
		},
		onFocus: (e) => {
			var t;
			Y(), (t = w.onFocus) == null || t.call(w, e);
		},
		onBlur: (e) => {
			var t;
			H(!1), (t = w.onBlur) == null || t.call(w, e);
		}
	})), [
		J,
		Y,
		X,
		l,
		Q,
		a,
		G,
		U,
		c,
		w,
		P?.source,
		A
	]), $ = u.useMemo(() => ({
		slots: Array.from({ length: a }).map((e, t) => {
			let n = V && U !== null && G !== null && (U === G && t === U || t >= U && t < G), r = A[t] === void 0 ? null : A[t];
			return {
				char: r,
				placeholderChar: A[0] === void 0 ? c?.[t] ?? null : null,
				isActive: n,
				hasFakeCaret: n && r === null
			};
		}),
		isFocused: V,
		isHovering: !w.disabled && z
	}), [
		V,
		z,
		a,
		G,
		U,
		c,
		w.disabled,
		A
	]), ne = u.useMemo(() => _ ? _($) : u.createElement(k.Provider, { value: $ }, C), [
		C,
		$,
		_
	]);
	return u.createElement(u.Fragment, null, h !== null && u.createElement("noscript", null, u.createElement("style", null, h)), u.createElement("div", {
		ref: I,
		"data-input-otp-container": !0,
		translate: "no",
		style: Z,
		className: m
	}, ne, u.createElement("div", { style: {
		position: "absolute",
		inset: 0,
		pointerEvents: "none"
	} }, te)));
});
A.displayName = "Input";
function j(e, t) {
	try {
		e.insertRule(t);
	} catch {
		console.warn("input-otp could not insert CSS rule:", t);
	}
}
var ee = "\n[data-input-otp] {\n  --nojs-bg: white !important;\n  --nojs-fg: black !important;\n\n  background-color: var(--nojs-bg) !important;\n  color: var(--nojs-fg) !important;\n  caret-color: var(--nojs-fg) !important;\n  letter-spacing: .25em !important;\n  text-align: center !important;\n  border: 1px solid var(--nojs-fg) !important;\n  border-radius: 4px !important;\n  width: 100% !important;\n}\n@media (prefers-color-scheme: dark) {\n  [data-input-otp] {\n    --nojs-bg: black !important;\n    --nojs-fg: white !important;\n  }\n}", M = r(), N = [], P = /*#__PURE__*/ (0, u.createContext)({
	isDisabled: !1,
	isInvalid: !1
}), F = ({ className: e, inputClassName: t, isDisabled: n = !1, isInvalid: r = !1, validationDetails: o, validationErrors: s = N, variant: c, ...d }) => {
	let f = u.useMemo(() => l({ variant: c }), [c]), p = u.useMemo(() => ({
		isInvalid: r,
		validationErrors: s,
		validationDetails: o
	}), [
		r,
		s,
		o
	]), m = u.useMemo(() => ({
		slots: f,
		isDisabled: n,
		isInvalid: r
	}), [
		f,
		n,
		r
	]);
	return /*#__PURE__*/ (0, M.jsx)(P, {
		value: m,
		children: /*#__PURE__*/ (0, M.jsx)(i, {
			value: p,
			children: /*#__PURE__*/ (0, M.jsx)(A, {
				className: f.input({ className: t }),
				containerClassName: f.base({ className: e }),
				"data-disabled": a(n),
				"data-invalid": a(r),
				"data-slot": "input-otp",
				disabled: n,
				...d
			})
		})
	});
};
F.displayName = "HeroUI.InputOTP";
var I = ({ className: e, ...t }) => {
	let { slots: n } = (0, u.use)(P);
	return /*#__PURE__*/ (0, M.jsx)("div", {
		className: o(n?.group, e),
		"data-slot": "input-otp-group",
		...t
	});
};
I.displayName = "HeroUI.InputOTP.Group";
var L = ({ className: e, index: t, ...n }) => {
	let { isDisabled: r, isInvalid: i, slots: s } = (0, u.use)(P), { char: c, hasFakeCaret: l, isActive: d } = (0, u.use)(k)?.slots[t] ?? {};
	return /*#__PURE__*/ (0, M.jsxs)("div", {
		...n,
		className: o(s?.slot, e),
		"data-active": a(d),
		"data-disabled": a(r),
		"data-filled": a(!!c),
		"data-invalid": a(i),
		"data-slot": "input-otp-slot",
		children: [c ? /*#__PURE__*/ (0, M.jsx)("div", {
			className: s?.slotValue(),
			"data-slot": "input-otp-slot-value",
			children: c
		}) : null, l && d ? /*#__PURE__*/ (0, M.jsx)("div", {
			className: s?.caret(),
			"data-slot": "input-otp-caret"
		}) : null]
	});
};
L.displayName = "HeroUI.InputOTP.Slot";
var R = ({ className: e, ...t }) => {
	let { slots: n } = (0, u.use)(P);
	return /*#__PURE__*/ (0, M.jsx)("div", {
		className: o(n?.separator, e),
		"data-slot": "input-otp-separator",
		...t
	});
};
R.displayName = "HeroUI.InputOTP.Separator";
// node_modules/@heroui/react/dist/components/input-otp/index.js
var z = Object.assign(F, {
	Root: F,
	Group: I,
	Slot: L,
	Separator: R
});
// upstream/demos/en/input-otp/basic.tsx
function B() {
	return /* @__PURE__ */ (0, M.jsxs)("div", {
		className: "flex w-[280px] flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, M.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ (0, M.jsx)(s, { children: "Verify account" }), /* @__PURE__ */ (0, M.jsx)("p", {
					className: "text-sm text-muted",
					children: "We've sent a code to a****@gmail.com"
				})]
			}),
			/* @__PURE__ */ (0, M.jsxs)(z, {
				maxLength: 6,
				children: [
					/* @__PURE__ */ (0, M.jsxs)(z.Group, { children: [
						/* @__PURE__ */ (0, M.jsx)(z.Slot, { index: 0 }),
						/* @__PURE__ */ (0, M.jsx)(z.Slot, { index: 1 }),
						/* @__PURE__ */ (0, M.jsx)(z.Slot, { index: 2 })
					] }),
					/* @__PURE__ */ (0, M.jsx)(z.Separator, {}),
					/* @__PURE__ */ (0, M.jsxs)(z.Group, { children: [
						/* @__PURE__ */ (0, M.jsx)(z.Slot, { index: 3 }),
						/* @__PURE__ */ (0, M.jsx)(z.Slot, { index: 4 }),
						/* @__PURE__ */ (0, M.jsx)(z.Slot, { index: 5 })
					] })
				]
			}),
			/* @__PURE__ */ (0, M.jsxs)("div", {
				className: "flex items-center gap-[5px] px-1 pt-1",
				children: [/* @__PURE__ */ (0, M.jsx)("p", {
					className: "text-sm text-muted",
					children: "Didn't receive a code?"
				}), /* @__PURE__ */ (0, M.jsx)(c, {
					className: "text-foreground underline",
					href: "#",
					children: "Resend"
				})]
			})
		]
	});
}
export { B as Basic };
