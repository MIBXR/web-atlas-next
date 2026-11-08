import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
import { t as n } from "./react-dom-Dipvgcxr.js";
import { B as r, F as i, H as a, S as o, b as s, n as c, t as l } from "./useKeyboard-CqNSkGJ-.js";
import { t as u } from "./useLayoutEffect-Bx2X4QEP.js";
import { d, m as f } from "./utils-UBVJ5JR_.js";
import { t as p } from "./filterDOMProps-CJYy6efO.js";
import { i as m, r as ee } from "./useHover-DxA7bNQs.js";
import { t as h } from "./useEvent-QtR06JAA.js";
import { t as g } from "./useFormReset-DizqO0T1.js";
import { r as _, t as v } from "./number-DEd1Mp8h.js";
import { t as y } from "./NumberFormatter-C0OI5DOG.js";
import { n as te, t as b } from "./useSpinButton-DgIN7nKK.js";
import { t as x } from "./useNumberFormatter-Bqt6BhxT.js";
import { t as S } from "./LiveAnnouncer-7fiQ12ko.js";
import { t as ne } from "./useControlledState-BbVlCDcL.js";
import { n as re } from "./useLocalizedStringFormatter-tuzNT5MD.js";
import { i as C, s as ie } from "./useFormValidation-NZK9JasV.js";
import { t as w } from "./useTextField-DliTkFQ-.js";
// node_modules/react-aria/dist/private/textfield/useFormattedTextField.mjs
var T = /* @__PURE__ */ e(t(), 1);
function E() {
	return typeof window < "u" && window.InputEvent && typeof InputEvent.prototype.getTargetRanges == "function";
}
function ae(e, t, n) {
	let r = m((e) => {
		let r = n.current;
		if (!r) return;
		let i = null;
		switch (e.inputType) {
			case "historyUndo":
			case "historyRedo": return;
			case "insertLineBreak": return;
			case "deleteContent":
			case "deleteByCut":
			case "deleteByDrag":
				i = r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd);
				break;
			case "deleteContentForward":
				i = r.selectionEnd === r.selectionStart ? r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd + 1) : r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd);
				break;
			case "deleteContentBackward":
				i = r.selectionEnd === r.selectionStart ? r.value.slice(0, r.selectionStart - 1) + r.value.slice(r.selectionStart) : r.value.slice(0, r.selectionStart) + r.value.slice(r.selectionEnd);
				break;
			case "deleteSoftLineBackward":
			case "deleteHardLineBackward":
				i = r.value.slice(r.selectionStart);
				break;
			default: e.data != null && (i = r.value.slice(0, r.selectionStart) + e.data + r.value.slice(r.selectionEnd));
		}
		i != null && t.validate(i) || e.preventDefault();
	});
	(0, T.useEffect)(() => {
		if (!E() || !n.current) return;
		let e = n.current;
		return e.addEventListener("beforeinput", r, !1), () => {
			e.removeEventListener("beforeinput", r, !1);
		};
	}, [n]);
	let i = E() ? null : (e) => {
		let n = o(e).value.slice(0, o(e).selectionStart) + e.data + o(e).value.slice(o(e).selectionEnd);
		t.validate(n) || e.preventDefault();
	}, { labelProps: a, inputProps: s, descriptionProps: c, errorMessageProps: l, ...u } = w(e, n), f = (0, T.useRef)(null);
	return {
		inputProps: d(s, {
			onBeforeInput: i,
			onCompositionStart() {
				let { value: e, selectionStart: t, selectionEnd: r } = n.current;
				f.current = {
					value: e,
					selectionStart: t,
					selectionEnd: r
				};
			},
			onCompositionEnd() {
				if (n.current && !t.validate(n.current.value)) {
					let { value: e, selectionStart: r, selectionEnd: i } = f.current;
					n.current.value = e, n.current.setSelectionRange(r, i), t.setInputValue(e);
				}
			}
		}),
		labelProps: a,
		descriptionProps: c,
		errorMessageProps: l,
		...u
	};
}
// node_modules/react-aria/dist/private/interactions/useScrollWheel.mjs
function oe(e, t) {
	let { onScroll: n, isDisabled: r } = e, i = (0, T.useCallback)((e) => {
		e.ctrlKey || (e.preventDefault(), e.stopPropagation(), n && n({
			deltaX: e.deltaX,
			deltaY: e.deltaY
		}));
	}, [n]);
	h(t, "wheel", r ? void 0 : i);
}
// node_modules/react-aria/dist/private/intl/numberfield/ar-AE.mjs
var D = {};
D = {
	decrease: (e) => `\u{62E}\u{641}\u{636} ${e.fieldLabel}`,
	increase: (e) => `\u{632}\u{64A}\u{627}\u{62F}\u{629} ${e.fieldLabel}`,
	numberField: "حقل رقمي"
};
// node_modules/react-aria/dist/private/intl/numberfield/bg-BG.mjs
var O = {};
O = {
	decrease: (e) => `\u{41D}\u{430}\u{43C}\u{430}\u{43B}\u{44F}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,
	increase: (e) => `\u{423}\u{441}\u{438}\u{43B}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,
	numberField: "Номер на полето"
};
// node_modules/react-aria/dist/private/intl/numberfield/cs-CZ.mjs
var k = {};
k = {
	decrease: (e) => `Sn\xed\u{17E}it ${e.fieldLabel}`,
	increase: (e) => `Zv\xfd\u{161}it ${e.fieldLabel}`,
	numberField: "Číselné pole"
};
// node_modules/react-aria/dist/private/intl/numberfield/da-DK.mjs
var A = {};
A = {
	decrease: (e) => `Reducer ${e.fieldLabel}`,
	increase: (e) => `\xd8g ${e.fieldLabel}`,
	numberField: "Talfelt"
};
// node_modules/react-aria/dist/private/intl/numberfield/de-DE.mjs
var j = {};
j = {
	decrease: (e) => `${e.fieldLabel} verringern`,
	increase: (e) => `${e.fieldLabel} erh\xf6hen`,
	numberField: "Nummernfeld"
};
// node_modules/react-aria/dist/private/intl/numberfield/el-GR.mjs
var M = {};
M = {
	decrease: (e) => `\u{39C}\u{3B5}\u{3AF}\u{3C9}\u{3C3}\u{3B7} ${e.fieldLabel}`,
	increase: (e) => `\u{391}\u{3CD}\u{3BE}\u{3B7}\u{3C3}\u{3B7} ${e.fieldLabel}`,
	numberField: "Πεδίο αριθμού"
};
// node_modules/react-aria/dist/private/intl/numberfield/en-US.mjs
var N = {};
N = {
	decrease: (e) => `Decrease ${e.fieldLabel}`,
	increase: (e) => `Increase ${e.fieldLabel}`,
	numberField: "Number field"
};
// node_modules/react-aria/dist/private/intl/numberfield/es-ES.mjs
var P = {};
P = {
	decrease: (e) => `Reducir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: "Campo de número"
};
// node_modules/react-aria/dist/private/intl/numberfield/et-EE.mjs
var F = {};
F = {
	decrease: (e) => `V\xe4henda ${e.fieldLabel}`,
	increase: (e) => `Suurenda ${e.fieldLabel}`,
	numberField: "Numbri väli"
};
// node_modules/react-aria/dist/private/intl/numberfield/fi-FI.mjs
var I = {};
I = {
	decrease: (e) => `V\xe4henn\xe4 ${e.fieldLabel}`,
	increase: (e) => `Lis\xe4\xe4 ${e.fieldLabel}`,
	numberField: "Numerokenttä"
};
// node_modules/react-aria/dist/private/intl/numberfield/fr-FR.mjs
var L = {};
L = {
	decrease: (e) => `Diminuer ${e.fieldLabel}`,
	increase: (e) => `Augmenter ${e.fieldLabel}`,
	numberField: "Champ de nombre"
};
// node_modules/react-aria/dist/private/intl/numberfield/he-IL.mjs
var R = {};
R = {
	decrease: (e) => `\u{5D4}\u{5E7}\u{5D8}\u{5DF} ${e.fieldLabel}`,
	increase: (e) => `\u{5D4}\u{5D2}\u{5D3}\u{5DC} ${e.fieldLabel}`,
	numberField: "שדה מספר"
};
// node_modules/react-aria/dist/private/intl/numberfield/hr-HR.mjs
var z = {};
z = {
	decrease: (e) => `Smanji ${e.fieldLabel}`,
	increase: (e) => `Pove\u{107}aj ${e.fieldLabel}`,
	numberField: "Polje broja"
};
// node_modules/react-aria/dist/private/intl/numberfield/hu-HU.mjs
var B = {};
B = {
	decrease: (e) => `${e.fieldLabel} cs\xf6kkent\xe9se`,
	increase: (e) => `${e.fieldLabel} n\xf6vel\xe9se`,
	numberField: "Számmező"
};
// node_modules/react-aria/dist/private/intl/numberfield/it-IT.mjs
var V = {};
V = {
	decrease: (e) => `Riduci ${e.fieldLabel}`,
	increase: (e) => `Aumenta ${e.fieldLabel}`,
	numberField: "Campo numero"
};
// node_modules/react-aria/dist/private/intl/numberfield/ja-JP.mjs
var H = {};
H = {
	decrease: (e) => `${e.fieldLabel}\u{3092}\u{7E2E}\u{5C0F}`,
	increase: (e) => `${e.fieldLabel}\u{3092}\u{62E1}\u{5927}`,
	numberField: "数値フィールド"
};
// node_modules/react-aria/dist/private/intl/numberfield/ko-KR.mjs
var U = {};
U = {
	decrease: (e) => `${e.fieldLabel} \u{AC10}\u{C18C}`,
	increase: (e) => `${e.fieldLabel} \u{C99D}\u{AC00}`,
	numberField: "번호 필드"
};
// node_modules/react-aria/dist/private/intl/numberfield/lt-LT.mjs
var W = {};
W = {
	decrease: (e) => `Suma\u{17E}inti ${e.fieldLabel}`,
	increase: (e) => `Padidinti ${e.fieldLabel}`,
	numberField: "Numerio laukas"
};
// node_modules/react-aria/dist/private/intl/numberfield/lv-LV.mjs
var se = {};
se = {
	decrease: (e) => `Samazin\u{101}\u{161}ana ${e.fieldLabel}`,
	increase: (e) => `Palielin\u{101}\u{161}ana ${e.fieldLabel}`,
	numberField: "Skaitļu lauks"
};
// node_modules/react-aria/dist/private/intl/numberfield/nb-NO.mjs
var G = {};
G = {
	decrease: (e) => `Reduser ${e.fieldLabel}`,
	increase: (e) => `\xd8k ${e.fieldLabel}`,
	numberField: "Tallfelt"
};
// node_modules/react-aria/dist/private/intl/numberfield/nl-NL.mjs
var ce = {};
ce = {
	decrease: (e) => `${e.fieldLabel} verlagen`,
	increase: (e) => `${e.fieldLabel} verhogen`,
	numberField: "Getalveld"
};
// node_modules/react-aria/dist/private/intl/numberfield/pl-PL.mjs
var K = {};
K = {
	decrease: (e) => `Zmniejsz ${e.fieldLabel}`,
	increase: (e) => `Zwi\u{119}ksz ${e.fieldLabel}`,
	numberField: "Pole numeru"
};
// node_modules/react-aria/dist/private/intl/numberfield/pt-BR.mjs
var le = {};
le = {
	decrease: (e) => `Diminuir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: "Campo de número"
};
// node_modules/react-aria/dist/private/intl/numberfield/pt-PT.mjs
var q = {};
q = {
	decrease: (e) => `Diminuir ${e.fieldLabel}`,
	increase: (e) => `Aumentar ${e.fieldLabel}`,
	numberField: "Campo numérico"
};
// node_modules/react-aria/dist/private/intl/numberfield/ro-RO.mjs
var ue = {};
ue = {
	decrease: (e) => `Sc\u{103}dere ${e.fieldLabel}`,
	increase: (e) => `Cre\u{219}tere ${e.fieldLabel}`,
	numberField: "Câmp numeric"
};
// node_modules/react-aria/dist/private/intl/numberfield/ru-RU.mjs
var de = {};
de = {
	decrease: (e) => `\u{423}\u{43C}\u{435}\u{43D}\u{44C}\u{448}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,
	increase: (e) => `\u{423}\u{432}\u{435}\u{43B}\u{438}\u{447}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,
	numberField: "Числовое поле"
};
// node_modules/react-aria/dist/private/intl/numberfield/sk-SK.mjs
var fe = {};
fe = {
	decrease: (e) => `Zn\xed\u{17E}i\u{165} ${e.fieldLabel}`,
	increase: (e) => `Zv\xfd\u{161}i\u{165} ${e.fieldLabel}`,
	numberField: "Číselné pole"
};
// node_modules/react-aria/dist/private/intl/numberfield/sl-SI.mjs
var pe = {};
pe = {
	decrease: (e) => `Upadati ${e.fieldLabel}`,
	increase: (e) => `Pove\u{10D}ajte ${e.fieldLabel}`,
	numberField: "Številčno polje"
};
// node_modules/react-aria/dist/private/intl/numberfield/sr-SP.mjs
var me = {};
me = {
	decrease: (e) => `Smanji ${e.fieldLabel}`,
	increase: (e) => `Pove\u{107}aj ${e.fieldLabel}`,
	numberField: "Polje broja"
};
// node_modules/react-aria/dist/private/intl/numberfield/sv-SE.mjs
var he = {};
he = {
	decrease: (e) => `Minska ${e.fieldLabel}`,
	increase: (e) => `\xd6ka ${e.fieldLabel}`,
	numberField: "Nummerfält"
};
// node_modules/react-aria/dist/private/intl/numberfield/tr-TR.mjs
var ge = {};
ge = {
	decrease: (e) => `${e.fieldLabel} azalt`,
	increase: (e) => `${e.fieldLabel} artt\u{131}r`,
	numberField: "Sayı alanı"
};
// node_modules/react-aria/dist/private/intl/numberfield/uk-UA.mjs
var J = {};
J = {
	decrease: (e) => `\u{417}\u{43C}\u{435}\u{43D}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,
	increase: (e) => `\u{417}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,
	numberField: "Поле номера"
};
// node_modules/react-aria/dist/private/intl/numberfield/zh-CN.mjs
var Y = {};
Y = {
	decrease: (e) => `\u{964D}\u{4F4E} ${e.fieldLabel}`,
	increase: (e) => `\u{63D0}\u{9AD8} ${e.fieldLabel}`,
	numberField: "数字字段"
};
// node_modules/react-aria/dist/private/intl/numberfield/zh-TW.mjs
var X = {};
X = {
	decrease: (e) => `\u{7E2E}\u{5C0F} ${e.fieldLabel}`,
	increase: (e) => `\u{653E}\u{5927} ${e.fieldLabel}`,
	numberField: "數字欄位"
};
// node_modules/react-aria/dist/private/numberfield/intlStrings.mjs
var _e = {};
_e = {
	"ar-AE": D,
	"bg-BG": O,
	"cs-CZ": k,
	"da-DK": A,
	"de-DE": j,
	"el-GR": M,
	"en-US": N,
	"es-ES": P,
	"et-EE": F,
	"fi-FI": I,
	"fr-FR": L,
	"he-IL": R,
	"hr-HR": z,
	"hu-HU": B,
	"it-IT": V,
	"ja-JP": H,
	"ko-KR": U,
	"lt-LT": W,
	"lv-LV": se,
	"nb-NO": G,
	"nl-NL": ce,
	"pl-PL": K,
	"pt-BR": le,
	"pt-PT": q,
	"ro-RO": ue,
	"ru-RU": de,
	"sk-SK": fe,
	"sl-SI": pe,
	"sr-SP": me,
	"sv-SE": he,
	"tr-TR": ge,
	"uk-UA": J,
	"zh-CN": Y,
	"zh-TW": X
};
// node_modules/react-aria/dist/private/numberfield/useNumberField.mjs
var ve = /* @__PURE__ */ e(n(), 1);
function ye(e) {
	return e && e.__esModule ? e.default : e;
}
function be(e, t, n) {
	let { id: u, decrementAriaLabel: m, incrementAriaLabel: h, isDisabled: _, isReadOnly: v, isRequired: y, minValue: te, maxValue: ne, autoFocus: ie, label: w, formatOptions: E, onBlur: D = () => {}, onFocus: O, onFocusChange: k, onKeyDown: A, onKeyUp: j, description: M, errorMessage: N, isWheelDisabled: P, ...F } = e, { increment: I, incrementToMax: L, decrement: R, decrementToMin: z, numberValue: B, inputValue: V, commit: H, commitValidation: U } = t, W = re(ye(_e), "@react-aria/numberfield"), se = (0, T.useCallback)(() => {
		let e = n.current?.value ?? "";
		(0, ve.flushSync)(() => {
			H();
		}), n.current?.value !== e && S(n.current?.value ?? "", "assertive");
	}, [H, n]), G = f(u), { focusProps: ce } = c({ onBlur() {
		se();
	} }), K = x(E), le = (0, T.useMemo)(() => K.resolvedOptions(), [K]), q = x({
		...E,
		currencySign: void 0
	}), ue = (0, T.useMemo)(() => isNaN(B) ? "" : q.format(B), [q, B]), { spinButtonProps: de, incrementButtonProps: fe, decrementButtonProps: pe } = b({
		isDisabled: _,
		isReadOnly: v,
		isRequired: y,
		maxValue: ne,
		minValue: te,
		onIncrement: I,
		onIncrementToMax: L,
		onDecrement: R,
		onDecrementToMin: z,
		value: B,
		textValue: ue
	}), [me, he] = (0, T.useState)(!1), { focusWithinProps: ge } = ee({
		isDisabled: _,
		onFocusWithinChange: he
	});
	oe({
		onScroll: (0, T.useCallback)((e) => {
			Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.deltaY > 0 ? I() : e.deltaY < 0 && R());
		}, [R, I]),
		isDisabled: P || _ || v || !me
	}, n);
	let J = (le.maximumFractionDigits ?? 0) > 0, Y = t.minValue === void 0 || isNaN(t.minValue) || t.minValue < 0, X = "numeric";
	i() ? Y ? X = "text" : J && (X = "decimal") : r() && (Y ? X = "numeric" : J && (X = "decimal"));
	let be = (e) => {
		t.validate(e) && t.setInputValue(e);
	}, Z = (t) => {
		e.onPaste?.(t);
		let n = o(t);
		n && (n.selectionEnd ?? -1) - (n.selectionStart ?? 0) === n.value.length && (t.preventDefault(), H(t.clipboardData?.getData?.("text/plain")?.trim() ?? ""));
	}, Se = p(e), { keyboardProps: Ce } = l({
		isDisabled: _ || v,
		shortcuts: { Enter: () => ((0, ve.flushSync)(() => {
			H();
		}), U(), { shouldPreventDefault: !1 }) },
		onKeyDown: A,
		onKeyUp: j
	}), { isInvalid: Q, validationErrors: we, validationDetails: Te } = t.displayValidation, { labelProps: Ee, inputProps: De, descriptionProps: Oe, errorMessageProps: ke } = ae({
		...F,
		...Se,
		name: void 0,
		form: void 0,
		label: w,
		autoFocus: ie,
		isDisabled: _,
		isReadOnly: v,
		isRequired: y,
		validate: void 0,
		[C]: t,
		value: V,
		defaultValue: "!",
		autoComplete: "off",
		"aria-label": e["aria-label"] || void 0,
		"aria-labelledby": e["aria-labelledby"] || void 0,
		id: G,
		type: "text",
		inputMode: X,
		onChange: be,
		onBlur: D,
		onFocus: O,
		onFocusChange: k,
		onPaste: Z,
		description: M,
		errorMessage: N
	}, t, n), Ae = d(Ce, De);
	g(n, t.defaultNumberValue, t.setNumberValue), xe(t, e.validationBehavior, e.commitBehavior, n, t.minValue, t.maxValue, e.step, t.numberValue);
	let je = d(de, ce, Ae, {
		role: null,
		"aria-roledescription": a() ? null : W.format("numberField"),
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuenow": null,
		"aria-valuetext": null,
		autoCorrect: "off",
		spellCheck: "false"
	});
	e.validationBehavior === "native" && (je["aria-required"] = void 0);
	let Me = (e) => {
		s() !== n.current && (e.pointerType === "mouse" ? n.current?.focus() : e.target.focus());
	}, Ne = e["aria-label"] || (typeof e.label == "string" ? e.label : ""), $;
	Ne || ($ = e.label == null ? e["aria-labelledby"] : Ee.id);
	let Pe = f(), Fe = f(), Ie = d(fe, {
		"aria-label": h || W.format("increase", { fieldLabel: Ne }).trim(),
		id: $ && !h ? Pe : null,
		"aria-labelledby": $ && !h ? `${Pe} ${$}` : null,
		"aria-controls": G,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canIncrement,
		onPressStart: Me
	}), Le = d(pe, {
		"aria-label": m || W.format("decrease", { fieldLabel: Ne }).trim(),
		id: $ && !m ? Fe : null,
		"aria-labelledby": $ && !m ? `${Fe} ${$}` : null,
		"aria-controls": G,
		excludeFromTabOrder: !0,
		preventFocusOnPress: !0,
		allowFocusWhenDisabled: !0,
		isDisabled: !t.canDecrement,
		onPressStart: Me
	});
	return {
		groupProps: {
			...ge,
			role: "group",
			"aria-disabled": _,
			"aria-invalid": Q ? "true" : void 0
		},
		labelProps: Ee,
		inputProps: je,
		incrementButtonProps: Ie,
		decrementButtonProps: Le,
		errorMessageProps: ke,
		descriptionProps: Oe,
		isInvalid: Q,
		validationErrors: we,
		validationDetails: Te
	};
}
var Z = null;
function xe(e, t, n, r, i, a, o, s) {
	u(() => {
		let c = r.current;
		if (n !== "validate" || e.realtimeValidation.isInvalid || !c || c.disabled || (!Z && typeof document < "u" && (Z = document.createElement("input"), Z.type = "number"), !Z)) return;
		Z.min = i != null && !isNaN(i) ? String(i) : "", Z.max = a != null && !isNaN(a) ? String(a) : "", Z.step = o != null && !isNaN(o) ? String(o) : "", Z.value = s != null && !isNaN(s) ? String(s) : "";
		let l = c.validity.valid && Z.validity.valid, u = c.validationMessage || Z.validationMessage, d = {
			isInvalid: !l,
			validationErrors: u ? [u] : [],
			validationDetails: {
				badInput: c.validity.badInput,
				customError: c.validity.customError,
				patternMismatch: c.validity.patternMismatch,
				rangeOverflow: Z.validity.rangeOverflow,
				rangeUnderflow: Z.validity.rangeUnderflow,
				stepMismatch: Z.validity.stepMismatch,
				tooLong: c.validity.tooLong,
				tooShort: c.validity.tooShort,
				typeMismatch: c.validity.typeMismatch,
				valueMissing: c.validity.valueMissing,
				valid: l
			}
		};
		e.updateValidation(d), t === "native" && !Z.validity.valid && c.setCustomValidity(Z.validationMessage);
	});
}
// node_modules/react-stately/dist/private/numberfield/useNumberFieldState.mjs
function Se(e) {
	let { minValue: t, maxValue: n, step: r, formatOptions: i, value: a, defaultValue: o = NaN, onChange: s, locale: c, isDisabled: l, isReadOnly: u, commitBehavior: d = "snap" } = e;
	a === null && (a = NaN);
	let f = (0, T.useCallback)((e) => r === void 0 || isNaN(r) ? v(e, t, n) : _(e, t, n, r), [
		r,
		t,
		n
	]);
	a !== void 0 && !isNaN(a) && d === "snap" && (a = f(a)), !isNaN(o) && d === "snap" && (o = f(o));
	let [p, m] = ne(a, isNaN(o) ? NaN : o, s), [ee] = (0, T.useState)(p), [h, g] = (0, T.useState)(() => isNaN(p) ? "" : new y(c, i).format(p)), b = (0, T.useMemo)(() => new te(c, i), [c, i]), x = (0, T.useMemo)(() => b.getNumberingSystem(h), [b, h]), S = (0, T.useMemo)(() => new y(c, {
		...i,
		numberingSystem: x
	}), [
		c,
		i,
		x
	]), re = (0, T.useMemo)(() => S.resolvedOptions(), [S]), C = (0, T.useCallback)((e) => isNaN(e) || e === null ? "" : S.format(e), [S]), w = ie({
		...e,
		value: p
	}), E = r !== void 0 && !isNaN(r) ? r : 1;
	re.style === "percent" && (r === void 0 || isNaN(r)) && (E = .01);
	let [ae, oe] = (0, T.useState)(p), [D, O] = (0, T.useState)(c), [k, A] = (0, T.useState)(i);
	Object.is(p, ae) && c === D && Ce(i, k) || (g(C(p)), oe(p), O(c), A(i));
	let j = (0, T.useMemo)(() => b.parse(h), [b, h]), M = (e) => {
		let t = e === void 0 ? h : e, n = j;
		if (e !== void 0 && (n = b.parse(t)), !t.length) {
			m(NaN), g(a === void 0 ? "" : C(p));
			return;
		}
		if (isNaN(n)) {
			g(C(p));
			return;
		}
		let r = d === "snap" ? f(n) : n;
		r = b.parse(C(r));
		let i = r !== p;
		m(r), g(C(a === void 0 ? r : p)), i && w.commitValidation();
	}, N = (e, r = 0) => {
		let i = j;
		if (isNaN(i)) return _(isNaN(r) ? 0 : r, t, n, E);
		{
			let r = _(i, t, n, E);
			return e === "+" && r > i || e === "-" && r < i ? r : _(Q(e, i, E), t, n, E);
		}
	}, P = () => {
		let e = N("+", t);
		e === p && g(C(e)), m(e), w.commitValidation();
	}, F = () => {
		let e = N("-", n);
		e === p && g(C(e)), m(e), w.commitValidation();
	}, I = () => {
		n != null && (m(_(n, t, n, E)), w.commitValidation());
	}, L = () => {
		t != null && (m(t), w.commitValidation());
	}, R = (0, T.useMemo)(() => !l && !u && (isNaN(j) || n === void 0 || isNaN(n) || _(j, t, n, E) > j || Q("+", j, E) <= n), [
		l,
		u,
		t,
		n,
		E,
		j
	]), z = (0, T.useMemo)(() => !l && !u && (isNaN(j) || t === void 0 || isNaN(t) || _(j, t, n, E) < j || Q("-", j, E) >= t), [
		l,
		u,
		t,
		n,
		E,
		j
	]), B = (e) => b.isValidPartialNumber(e, t, n);
	return {
		...w,
		validate: B,
		increment: P,
		incrementToMax: I,
		decrement: F,
		decrementToMin: L,
		canIncrement: R,
		canDecrement: z,
		minValue: t,
		maxValue: n,
		numberValue: j,
		defaultNumberValue: isNaN(o) ? ee : o,
		setNumberValue: m,
		setInputValue: g,
		inputValue: h,
		commit: M
	};
}
function Ce(e, t) {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (t[r] !== e[r]) return !1;
	return !0;
}
function Q(e, t, n) {
	let r = e === "+" ? t + n : t - n;
	if (t % 1 != 0 || n % 1 != 0) {
		let i = t.toString().split("."), a = n.toString().split("."), o = i[1] && i[1].length || 0, s = a[1] && a[1].length || 0, c = 10 ** Math.max(o, s);
		t = Math.round(t * c), n = Math.round(n * c), r = e === "+" ? t + n : t - n, r /= c;
	}
	return r;
}
export { ae as i, be as n, oe as r, Se as t };
