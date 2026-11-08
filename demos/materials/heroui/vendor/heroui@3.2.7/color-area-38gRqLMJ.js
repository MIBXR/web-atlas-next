import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { d as i, n as a, r as o, s, t as c } from "./utils-UBVJ5JR_.js";
import { n as l, t as u } from "./ColorThumb-CVKu4qxQ.js";
import { B as d, H as f, P as p, n as m, t as h } from "./useKeyboard-CqNSkGJ-.js";
import { t as g } from "./intlStrings-CddZy4Ou.js";
import { n as _, t as v } from "./Color-DBUN1_WA.js";
import { a as y, r as b } from "./useHover-DxA7bNQs.js";
import { t as ee } from "./useFormReset-DizqO0T1.js";
import { t as x } from "./useLabels-IW2w8qqV.js";
import { t as S } from "./I18nProvider-zGzu-4zN.js";
import { n as C } from "./useLocalizedStringFormatter-tuzNT5MD.js";
import { t as w } from "./useMove-C1jPw-e5.js";
import { n as te } from "./VisuallyHidden-CRCgxFfe.js";
import { r as T, t as E } from "./number-DEd1Mp8h.js";
import { t as D } from "./useControlledState-BbVlCDcL.js";
import { t as O } from "./filterDOMProps-CJYy6efO.js";
import { r as k } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/color-area/color-area.styles.js
var A = e({
	defaultVariants: { showDots: !1 },
	slots: {
		base: "color-area",
		thumb: "color-area__thumb"
	},
	variants: { showDots: {
		false: {},
		true: { base: "color-area--show-dots" }
	} }
}), j = /* @__PURE__ */ t(n(), 1), M = (e) => [
	0,
	60,
	120,
	180,
	240,
	300,
	360
].map((t) => e.withChannelValue("hue", t).toString("css")).join(", "), N = (e) => `${e.withChannelValue("saturation", 0)}, transparent`, P = {
	hue: M,
	saturation: N,
	lightness: () => "black, transparent, white"
}, F = {
	hue: M,
	saturation: N,
	brightness: () => "black, transparent"
};
function ne({ direction: e, state: t, zChannel: n, xChannel: r, yChannel: i }) {
	return (0, j.useMemo)(() => {
		let a = e === "rtl" ? "left" : "right", o = {}, s = t.value.getChannelValue(n);
		switch (t.value.getColorSpace()) {
			case "rgb": {
				let e = _("rgb(0, 0, 0)");
				o = {
					background: [
						`linear-gradient(to ${a}, ${e.withChannelValue(r, 0)}, ${e.withChannelValue(r, 255)})`,
						`linear-gradient(to top, ${e.withChannelValue(i, 0)}, ${e.withChannelValue(i, 255)})`,
						e.withChannelValue(n, s)
					].join(","),
					backgroundBlendMode: "screen"
				};
				break;
			}
			case "hsl": {
				let e = t.value.getColorChannels(), i = _("hsl(0, 100%, 50%)").withChannelValue(n, s), c = e.filter((e) => e !== n).map((e) => `linear-gradient(to ${e === r ? a : "top"}, ${P[e](i)})`).reverse();
				n === "hue" && c.push(i.toString("css")), o = { background: c.join(", ") };
				break;
			}
			case "hsb": {
				let e = t.value.getColorChannels(), i = _("hsb(0, 100%, 100%)").withChannelValue(n, s), c = e.filter((e) => e !== n).map((e) => `linear-gradient(to ${e === r ? a : "top"}, ${F[e](i)})`).reverse();
				n === "hue" && c.push(i.toString("css")), o = { background: c.join(", ") };
				break;
			}
		}
		let { x: c, y: l } = t.getThumbPosition();
		e === "rtl" && (c = 1 - c);
		let u = { forcedColorAdjust: "none" };
		return {
			colorAreaStyleProps: { style: {
				position: "relative",
				touchAction: "none",
				...u,
				...o
			} },
			thumbStyleProps: { style: {
				position: "absolute",
				left: `${c * 100}%`,
				top: `${l * 100}%`,
				transform: "translate(-50%, -50%)",
				touchAction: "none",
				...u
			} }
		};
	}, [
		e,
		t,
		n,
		r,
		i
	]);
}
// node_modules/react-aria/dist/private/color/useColorArea.mjs
function re(e) {
	return e && e.__esModule ? e.default : e;
}
function I(e, t) {
	let { isDisabled: n, inputXRef: r, inputYRef: a, containerRef: o, "aria-label": s, xName: c, yName: l, form: u } = e, _ = C(re(g), "@react-aria/color"), { addGlobalListener: v, removeGlobalListener: T } = y(), { direction: E, locale: D } = S(), [O, k] = (0, j.useState)(null), A = (0, j.useCallback)((e = r) => {
		e.current && p(e.current);
	}, [r]);
	ee(r, t.defaultValue, t.setValue);
	let [M, N] = (0, j.useState)(!1), [P, F] = (0, j.useState)(!1), { xChannel: I, yChannel: L, zChannel: R } = t.channels, z = t.xChannelStep, ie = t.yChannelStep, B = (0, j.useRef)(null), V = (e, n, r) => {
		t.setDragging(!0), N(!0), e(), t.setDragging(!1), A(n), k(r);
	}, { keyboardProps: H } = h({
		shortcuts: {
			PageUp: () => V(() => {
				t.incrementY(t.yChannelPageStep);
			}, a, "y"),
			PageDown: () => V(() => {
				t.decrementY(t.yChannelPageStep);
			}, a, "y"),
			Home: () => V(() => {
				E === "rtl" ? t.incrementX(t.xChannelPageStep) : t.decrementX(t.xChannelPageStep);
			}, r, "x"),
			End: () => V(() => {
				E === "rtl" ? t.decrementX(t.xChannelPageStep) : t.incrementX(t.xChannelPageStep);
			}, r, "x")
		},
		allowRepeats: !0
	}), U = {
		onMoveStart() {
			B.current = null, t.setDragging(!0);
		},
		onMove({ deltaX: e, deltaY: n, pointerType: r, shiftKey: i }) {
			let { incrementX: a, decrementX: s, incrementY: c, decrementY: l, xChannelPageStep: u, xChannelStep: d, yChannelPageStep: f, yChannelStep: p, getThumbPosition: m, setColorFromPoint: h } = t;
			B.current ??= m();
			let { width: g, height: _ } = o.current?.getBoundingClientRect() || {
				width: 0,
				height: 0
			}, v = e !== 0 || n !== 0;
			if (r === "keyboard") {
				let t = i && u > d ? u : d, r = i && f > p ? f : p;
				e > 0 && E === "ltr" || e < 0 && E === "rtl" ? a(t) : e < 0 && E === "ltr" || e > 0 && E === "rtl" ? s(t) : n > 0 ? l(r) : n < 0 && c(r), N(v), O = v && Math.abs(n) > Math.abs(e) ? "y" : "x", k(O);
			} else B.current.x += (E === "rtl" ? -1 : 1) * e / g, B.current.y += n / _, h(B.current.x, B.current.y);
		},
		onMoveEnd() {
			K.current = !1, t.setDragging(!1), A(O === "x" ? r : a);
		}
	}, { moveProps: W } = w(U), { focusWithinProps: ae } = b({ onFocusWithinChange: (e) => {
		e || (N(!1), F(!1));
	} }), G = (0, j.useRef)(void 0), K = (0, j.useRef)(!1), { moveProps: oe } = w({
		onMoveStart() {
			K.current && U.onMoveStart();
		},
		onMove(e) {
			K.current && U.onMove(e);
		},
		onMoveEnd() {
			K.current && U.onMoveEnd();
		}
	}), q = (e) => {
		t.isDragging || (G.current = e, N(!1), A(), t.setDragging(!0), typeof PointerEvent < "u" ? v(window, "pointerup", J, !1) : (v(window, "mouseup", J, !1), v(window, "touchend", J, !1)));
	}, J = (e) => {
		(e.pointerId ?? e.changedTouches?.[0].identifier) === G.current && (N(!1), A(), t.setDragging(!1), G.current = void 0, K.current = !1, typeof PointerEvent < "u" ? T(window, "pointerup", J, !1) : (T(window, "mouseup", J, !1), T(window, "touchend", J, !1)));
	}, Y = (e, n, r, i) => {
		let a = e.getBoundingClientRect(), { width: o, height: s } = a, c = (r - a.x) / o, l = (i - a.y) / s;
		E === "rtl" && (c = 1 - c), c >= 0 && c <= 1 && l >= 0 && l <= 1 && !t.isDragging && G.current === void 0 && (K.current = !0, N(!1), G.current = n, t.setColorFromPoint(c, l), A(), t.setDragging(!0), typeof PointerEvent < "u" ? v(window, "pointerup", X, !1) : (v(window, "mouseup", X, !1), v(window, "touchend", X, !1)));
	}, X = (e) => {
		let n = e.pointerId ?? e.changedTouches?.[0].identifier;
		K.current && n === G.current && (K.current = !1, N(!1), G.current = void 0, t.setDragging(!1), A(), typeof PointerEvent < "u" ? T(window, "pointerup", X, !1) : (T(window, "mouseup", X, !1), T(window, "touchend", X, !1)));
	}, se = n ? {} : i({ ...typeof PointerEvent < "u" ? { onPointerDown: (e) => {
		e.pointerType === "mouse" && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) || Y(e.currentTarget, e.pointerId, e.clientX, e.clientY);
	} } : {
		onMouseDown: (e) => {
			e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || Y(e.currentTarget, void 0, e.clientX, e.clientY);
		},
		onTouchStart: (e) => {
			Y(e.currentTarget, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
		}
	} }, oe), ce = n ? {} : i({ ...typeof PointerEvent < "u" ? { onPointerDown: (e) => {
		e.pointerType === "mouse" && (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey) || q(e.pointerId);
	} } : {
		onMouseDown: (e) => {
			e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || q(void 0);
		},
		onTouchStart: (e) => {
			q(e.changedTouches[0].identifier);
		}
	} }, ae, H, W), { focusProps: le } = m({ onFocus: () => {
		k("x");
	} }), { focusProps: ue } = m({ onFocus: () => {
		k("y");
	} }), de = (e) => {
		let { target: n } = e;
		F(!0), n === r.current ? t.setXValue(parseFloat(n.value)) : n === a.current && t.setYValue(parseFloat(n.value));
	}, Z = f() || d(), Q = t.getDisplayColor(), fe = (0, j.useCallback)((e) => `${P || M ? _.format("colorNameAndValue", {
		name: Q.getChannelName(e, D),
		value: Q.formatChannelValue(e, D)
	}) : [
		_.format("colorNameAndValue", {
			name: Q.getChannelName(e, D),
			value: Q.formatChannelValue(e, D)
		}),
		_.format("colorNameAndValue", {
			name: Q.getChannelName(e === L ? I : L, D),
			value: Q.formatChannelValue(e === L ? I : L, D)
		}),
		_.format("colorNameAndValue", {
			name: Q.getChannelName(R, D),
			value: Q.formatChannelValue(R, D)
		})
	].join(", ")}, ${Q.getColorName(D)}`, [
		D,
		Q,
		_,
		P,
		M,
		I,
		L,
		R
	]), $ = _.format("colorPicker"), pe = x({
		...e,
		"aria-label": s ? _.format("colorInputLabel", {
			label: s,
			channelLabel: $
		}) : $
	}), me = x({
		...e,
		"aria-label": s ? _.format("colorInputLabel", {
			label: s,
			channelLabel: $
		}) : $
	}), he = x({
		...e,
		"aria-label": s ? `${s}, ${$}` : void 0
	}, Z ? $ : void 0), ge = _.format("twoDimensionalSlider"), { visuallyHiddenProps: _e } = te({ style: {
		opacity: "0.0001",
		width: "100%",
		height: "100%",
		pointerEvents: "none"
	} }), { colorAreaStyleProps: ve, thumbStyleProps: ye } = ne({
		direction: E,
		state: t,
		xChannel: I,
		yChannel: L,
		zChannel: R
	});
	return {
		colorAreaProps: {
			...he,
			...se,
			...ve,
			role: "group"
		},
		thumbProps: {
			...ce,
			...ye,
			role: "presentation"
		},
		xInputProps: {
			...pe,
			..._e,
			...le,
			type: "range",
			min: t.value.getChannelRange(I).minValue,
			max: t.value.getChannelRange(I).maxValue,
			step: z,
			"aria-roledescription": ge,
			"aria-valuetext": fe(I),
			"aria-orientation": "horizontal",
			"aria-describedby": e["aria-describedby"],
			"aria-details": e["aria-details"],
			disabled: n,
			value: t.value.getChannelValue(I),
			name: c,
			form: u,
			tabIndex: Z || !O || O === "x" ? void 0 : -1,
			"aria-hidden": Z || !O || O === "x" || M ? void 0 : "true",
			onChange: de
		},
		yInputProps: {
			...me,
			..._e,
			...ue,
			type: "range",
			min: t.value.getChannelRange(L).minValue,
			max: t.value.getChannelRange(L).maxValue,
			step: ie,
			"aria-roledescription": ge,
			"aria-valuetext": fe(L),
			"aria-orientation": "vertical",
			"aria-describedby": e["aria-describedby"],
			"aria-details": e["aria-details"],
			disabled: n,
			value: t.value.getChannelValue(L),
			name: l,
			form: u,
			tabIndex: Z || O === "y" ? void 0 : -1,
			"aria-hidden": Z || O === "y" || M ? void 0 : "true",
			onChange: de
		}
	};
}
// node_modules/react-stately/dist/private/color/useColorAreaState.mjs
var L = _("#ffffff");
function R(e) {
	let { value: t, defaultValue: n, colorSpace: r, xChannel: i, yChannel: a, onChange: o, onChangeEnd: s } = e;
	!t && !n && (n = L), t &&= v(t), n &&= v(n);
	let [c, l] = D(t, n, o), [u] = (0, j.useState)(c), d = (0, j.useMemo)(() => r && c ? c.toFormat(r) : c, [c, r]), f = (0, j.useRef)(d), p = (e) => {
		f.current = e, l(e);
	}, m = (0, j.useMemo)(() => d.getColorSpaceAxes({
		xChannel: i,
		yChannel: a
	}), [
		d,
		i,
		a
	]), h = d.getChannelRange(m.xChannel), g = d.getChannelRange(m.yChannel), { minValue: _, maxValue: y, step: b, pageSize: ee } = h, { minValue: x, maxValue: S, step: C, pageSize: w } = g, [te, O] = (0, j.useState)(!1), k = (0, j.useRef)(!1), A = d.getChannelValue(m.xChannel), M = d.getChannelValue(m.yChannel), N = (e) => {
		if (e === A) return;
		let t = d.withChannelValue(m.xChannel, e);
		p(t);
	}, P = (e) => {
		if (e === M) return;
		let t = d.withChannelValue(m.yChannel, e);
		p(t);
	};
	return {
		channels: m,
		xChannelStep: b,
		yChannelStep: C,
		xChannelPageStep: ee,
		yChannelPageStep: w,
		value: d,
		defaultValue: t === void 0 ? n : u,
		setValue(e) {
			p(v(e));
		},
		xValue: A,
		setXValue: N,
		yValue: M,
		setYValue: P,
		setColorFromPoint(e, t) {
			let n = _ + E(e, 0, 1) * (y - _), r = x + (1 - E(t, 0, 1)) * (S - x), i;
			n !== A && (n = T(n, _, y, b), i = d.withChannelValue(m.xChannel, n)), r !== M && (r = T(r, x, S, C), i = (i || d).withChannelValue(m.yChannel, r)), i && p(i);
		},
		getThumbPosition() {
			return {
				x: (A - _) / (y - _),
				y: 1 - (M - x) / (S - x)
			};
		},
		incrementX(e = 1) {
			N(A + e > y ? y : T(A + e, _, y, b));
		},
		incrementY(e = 1) {
			P(M + e > S ? S : T(M + e, x, S, C));
		},
		decrementX(e = 1) {
			N(T(A - e, _, y, b));
		},
		decrementY(e = 1) {
			P(T(M - e, x, S, C));
		},
		setDragging(e) {
			let t = k.current;
			k.current = e, s && !e && t && s(f.current), O(e);
		},
		isDragging: te,
		getDisplayColor() {
			return d.withChannelValue("alpha", 1);
		}
	};
}
// node_modules/react-aria-components/dist/private/ColorArea.mjs
var z = /*#__PURE__*/ (0, j.createContext)(null), ie = /*#__PURE__*/ (0, j.createContext)(null), B = /*#__PURE__*/ (0, j.forwardRef)(function(e, t) {
	[e, t] = a(e, t, z);
	let n = (0, j.useRef)(null), r = (0, j.useRef)(null), u = R(e), { colorAreaProps: d, xInputProps: f, yInputProps: p, thumbProps: m } = I({
		...e,
		inputXRef: n,
		inputYRef: r,
		containerRef: t
	}, u), h = o({
		...e,
		defaultClassName: "react-aria-ColorArea",
		defaultStyle: d.style,
		values: {
			state: u,
			isDisabled: e.isDisabled || !1
		}
	}), g = O(e, { global: !0 });
	return delete g.id, /*#__PURE__*/ j.createElement(s.div, {
		ref: t,
		...i(g, d, h),
		slot: e.slot || void 0,
		"data-disabled": e.isDisabled || void 0
	}, /*#__PURE__*/ j.createElement(c, { values: [[ie, u], [l, {
		state: u,
		thumbProps: m,
		inputXRef: n,
		xInputProps: f,
		inputYRef: r,
		yInputProps: p,
		isDisabled: e.isDisabled
	}]] }, h.children));
}), V = r(), H = /*#__PURE__*/ (0, j.createContext)({}), U = ({ children: e, className: t, showDots: n, style: r, ...i }) => {
	let a = j.useMemo(() => A({ showDots: n }), [n]), o = j.useMemo(() => ({ slots: a }), [a]);
	return /*#__PURE__*/ (0, V.jsx)(H, {
		value: o,
		children: /*#__PURE__*/ (0, V.jsx)(B, {
			...i,
			className: k(t, a.base()),
			"data-slot": "color-area",
			style: (e) => {
				let t = typeof r == "function" ? r(e) : r;
				return {
					"--color-area-background": e.defaultStyle.background,
					...t
				};
			},
			children: e
		})
	});
};
U.displayName = "HeroUI.ColorArea";
var W = ({ className: e, style: t, ...n }) => {
	let { slots: r } = (0, j.use)(H);
	return /*#__PURE__*/ (0, V.jsx)(u, {
		className: k(e, r?.thumb()),
		"data-slot": "color-area-thumb",
		style: (e) => {
			let n = typeof t == "function" ? t(e) : t;
			return {
				"--color-area-thumb-color": e.defaultStyle.backgroundColor,
				...n
			};
		},
		...n
	});
};
W.displayName = "HeroUI.ColorArea.Thumb";
// node_modules/@heroui/react/dist/components/color-area/index.js
var ae = Object.assign(U, {
	Root: U,
	Thumb: W
});
export { z as n, ae as t };
