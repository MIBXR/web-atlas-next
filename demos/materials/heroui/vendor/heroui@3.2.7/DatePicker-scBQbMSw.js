import { t as e } from "./Button-Cnex0dS4.js";
import { d as t, f as n } from "./calendar-day-view-grid-header-B5WNMglO.js";
import { c as r, d as i, i as a, l as o, m as s, n as c, r as l, s as u, t as d } from "./utils-UBVJ5JR_.js";
import { _ as f, c as p, d as m, f as h, g, h as _, m as v, p as y, u as b, v as x, y as S } from "./date-input-group-C8SQNwkE.js";
import { f as C, i as w, r as T } from "./Dialog-C0V2m_6r.js";
import { n as E } from "./FieldError-BDRHklqb.js";
import { n as D } from "./Form-BfBA0JpQ.js";
import { n as O } from "./Group-VeeQ5avm.js";
import { t as k } from "./Label-CJNHsoCN.js";
import { n as A } from "./Text-CEDDBTEL.js";
import { i as j } from "./FocusScope-C6wAY3W6.js";
import { t as M } from "./filterDOMProps-CJYy6efO.js";
import { v as N } from "./useKeyboard-CqNSkGJ-.js";
import { r as P } from "./scrollIntoView-D_15IrGl.js";
import { t as F } from "./useField-CfrwMMou.js";
import { n as I, r as L } from "./useHover-DxA7bNQs.js";
import { t as R } from "./I18nProvider-zGzu-4zN.js";
import { n as z } from "./useLocalizedStringFormatter-tuzNT5MD.js";
import { i as B, o as V, r as H, s as U } from "./useFormValidation-NZK9JasV.js";
import { i as W, n as G } from "./jsx-runtime-C1t0izHF.js";
import { t as K } from "./useOverlayTriggerState-loftJLxJ.js";
import { t as q } from "./useControlledState-BbVlCDcL.js";
import { l as J, n as Y, u as X } from "./useDateFormatter-l1bqfb5m.js";
// node_modules/react-aria/dist/private/datepicker/useDatePicker.mjs
var Z = /* @__PURE__ */ W(G(), 1);
function ee(e) {
	return e && e.__esModule ? e.default : e;
}
function te(e, t, n) {
	let r = s(), a = s(), o = s(), c = z(ee(x), "@react-aria/datepicker"), { isInvalid: l, validationErrors: u, validationDetails: d } = t.displayValidation, { labelProps: p, fieldProps: m, descriptionProps: h, errorMessageProps: g } = F({
		...e,
		labelElementType: "span",
		isInvalid: l,
		errorMessage: e.errorMessage || u
	}), v = f(t, n), y = m["aria-labelledby"] || m.id, { locale: b } = R(), S = t.formatValue(b, { month: "long" }), C = S ? c.format("selectedDateDescription", { date: S }) : "", w = P(C), T = [w["aria-describedby"], m["aria-describedby"]].filter(Boolean).join(" ") || void 0, E = M(e), D = (0, Z.useMemo)(() => j(n), [n]), O = (0, Z.useRef)(!1), { focusWithinProps: k } = L({
		...e,
		isDisabled: t.isOpen,
		onBlurWithin: (t) => {
			let n = document.getElementById(a);
			N(n, t.relatedTarget) || (O.current = !1, e.onBlur?.(t), e.onFocusChange?.(!1));
		},
		onFocusWithin: (t) => {
			O.current || (O.current = !0, e.onFocus?.(t), e.onFocusChange?.(!0));
		}
	});
	return {
		groupProps: i(E, v, m, w, k, {
			role: "group",
			"aria-disabled": e.isDisabled || null,
			"aria-labelledby": y,
			"aria-describedby": T,
			onKeyDown(n) {
				t.isOpen || e.onKeyDown && e.onKeyDown(n);
			},
			onKeyUp(n) {
				t.isOpen || e.onKeyUp && e.onKeyUp(n);
			}
		}),
		labelProps: {
			...p,
			onClick: () => {
				D.focusFirst();
			}
		},
		fieldProps: {
			...m,
			id: o,
			[_]: "presentation",
			"aria-describedby": T,
			value: t.value,
			defaultValue: t.defaultValue,
			onChange: t.setValue,
			placeholderValue: e.placeholderValue,
			hideTimeZone: e.hideTimeZone,
			hourCycle: e.hourCycle,
			shouldForceLeadingZeros: e.shouldForceLeadingZeros,
			granularity: e.granularity,
			isDisabled: e.isDisabled,
			isReadOnly: e.isReadOnly,
			isRequired: e.isRequired,
			validationBehavior: e.validationBehavior,
			[B]: t,
			autoFocus: e.autoFocus,
			name: e.name,
			form: e.form
		},
		descriptionProps: h,
		errorMessageProps: g,
		buttonProps: {
			...w,
			id: r,
			"aria-haspopup": "dialog",
			"aria-label": c.format("calendar"),
			"aria-labelledby": `${r} ${y}`,
			"aria-describedby": T,
			"aria-expanded": t.isOpen,
			isDisabled: e.isDisabled || e.isReadOnly,
			onPress: () => t.setOpen(!0)
		},
		dialogProps: {
			id: a,
			"aria-labelledby": `${r} ${y}`
		},
		calendarProps: {
			autoFocus: !0,
			value: t.dateValue,
			onChange: t.setDateValue,
			minValue: e.minValue,
			maxValue: e.maxValue,
			isDisabled: e.isDisabled,
			isReadOnly: e.isReadOnly,
			isDateUnavailable: e.isDateUnavailable,
			defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
			isInvalid: t.isInvalid,
			errorMessage: typeof e.errorMessage == "function" ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(" "),
			firstDayOfWeek: e.firstDayOfWeek,
			pageBehavior: e.pageBehavior
		},
		isInvalid: l,
		validationErrors: u,
		validationDetails: d
	};
}
// node_modules/react-aria/dist/private/datepicker/useDateRangePicker.mjs
function ne(e) {
	return e && e.__esModule ? e.default : e;
}
function re(e, t, n) {
	let r = z(ne(x), "@react-aria/datepicker"), { isInvalid: a, validationErrors: o, validationDetails: c } = t.displayValidation, { labelProps: l, fieldProps: u, descriptionProps: d, errorMessageProps: p } = F({
		...e,
		labelElementType: "span",
		isInvalid: a,
		errorMessage: e.errorMessage || o
	}), m = u["aria-labelledby"] || u.id, { locale: h } = R(), v = t.formatValue(h, { month: "long" }), y = v ? r.format("selectedRangeDescription", {
		startDate: v.start,
		endDate: v.end
	}) : "", b = P(y), S = {
		"aria-label": r.format("startDate"),
		"aria-labelledby": m
	}, C = {
		"aria-label": r.format("endDate"),
		"aria-labelledby": m
	}, w = s(), T = s(), E = f(t, n), D = [b["aria-describedby"], u["aria-describedby"]].filter(Boolean).join(" ") || void 0, O = (0, Z.useMemo)(() => j(n, { accept: (e) => e.id !== w }), [n, w]), k = {
		[g]: O,
		[_]: "presentation",
		"aria-describedby": D,
		placeholderValue: e.placeholderValue,
		hideTimeZone: e.hideTimeZone,
		hourCycle: e.hourCycle,
		granularity: e.granularity,
		shouldForceLeadingZeros: e.shouldForceLeadingZeros,
		isDisabled: e.isDisabled,
		isReadOnly: e.isReadOnly,
		isRequired: e.isRequired,
		validationBehavior: e.validationBehavior
	}, A = M(e), I = (0, Z.useRef)(!1), { focusWithinProps: U } = L({
		...e,
		isDisabled: t.isOpen,
		onBlurWithin: (t) => {
			let n = document.getElementById(T);
			N(n, t.relatedTarget) || (I.current = !1, e.onBlur?.(t), e.onFocusChange?.(!1));
		},
		onFocusWithin: (t) => {
			I.current || (I.current = !0, e.onFocus?.(t), e.onFocusChange?.(!0));
		}
	}), W = (0, Z.useRef)(V), G = (0, Z.useRef)(V);
	return {
		groupProps: i(A, E, u, b, U, {
			role: "group",
			"aria-disabled": e.isDisabled || null,
			"aria-describedby": D,
			onKeyDown(n) {
				t.isOpen || e.onKeyDown && e.onKeyDown(n);
			},
			onKeyUp(n) {
				t.isOpen || e.onKeyUp && e.onKeyUp(n);
			}
		}),
		labelProps: {
			...l,
			onClick: () => {
				O.focusFirst();
			}
		},
		buttonProps: {
			...b,
			id: w,
			"aria-haspopup": "dialog",
			"aria-label": r.format("calendar"),
			"aria-labelledby": `${w} ${m}`,
			"aria-describedby": D,
			"aria-expanded": t.isOpen,
			isDisabled: e.isDisabled || e.isReadOnly,
			onPress: () => t.setOpen(!0)
		},
		dialogProps: {
			id: T,
			"aria-labelledby": `${w} ${m}`
		},
		startFieldProps: {
			...S,
			...k,
			value: t.value?.start ?? null,
			defaultValue: t.defaultValue?.start,
			onChange: (e) => t.setDateTime("start", e),
			autoFocus: e.autoFocus,
			name: e.startName,
			form: e.form,
			[B]: {
				realtimeValidation: t.realtimeValidation,
				displayValidation: t.displayValidation,
				updateValidation(e) {
					W.current = e, t.updateValidation(H(e, G.current));
				},
				resetValidation: t.resetValidation,
				commitValidation: t.commitValidation
			}
		},
		endFieldProps: {
			...C,
			...k,
			value: t.value?.end ?? null,
			defaultValue: t.defaultValue?.end,
			onChange: (e) => t.setDateTime("end", e),
			name: e.endName,
			form: e.form,
			[B]: {
				realtimeValidation: t.realtimeValidation,
				displayValidation: t.displayValidation,
				updateValidation(e) {
					G.current = e, t.updateValidation(H(W.current, e));
				},
				resetValidation: t.resetValidation,
				commitValidation: t.commitValidation
			}
		},
		descriptionProps: d,
		errorMessageProps: p,
		calendarProps: {
			autoFocus: !0,
			value: t.dateRange?.start && t.dateRange.end ? t.dateRange : null,
			onChange: t.setDateRange,
			minValue: e.minValue,
			maxValue: e.maxValue,
			isDisabled: e.isDisabled,
			isReadOnly: e.isReadOnly,
			isDateUnavailable: e.isDateUnavailable,
			allowsNonContiguousRanges: e.allowsNonContiguousRanges,
			defaultFocusedValue: t.dateRange ? void 0 : e.placeholderValue,
			isInvalid: t.isInvalid,
			errorMessage: typeof e.errorMessage == "function" ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(" "),
			firstDayOfWeek: e.firstDayOfWeek,
			pageBehavior: e.pageBehavior
		},
		isInvalid: a,
		validationErrors: o,
		validationDetails: c
	};
}
// node_modules/react-stately/dist/private/datepicker/useDatePickerState.mjs
function ie(e) {
	let t = K(e), [n, r] = q(e.value, e.defaultValue || null, e.onChange), [i] = (0, Z.useState)(n), a = n || e.placeholderValue || null, [o, s] = b(a, e.granularity), c = n == null ? null : n.toDate(s ?? "UTC"), l = o === "hour" || o === "minute" || o === "second", u = e.shouldCloseOnSelect ?? !0, [d, f] = (0, Z.useState)(null), [p, h] = (0, Z.useState)(null);
	if (n && (d = n, "hour" in n && (p = n)), a && !(o in a)) throw Error("Invalid granularity " + o + " for value " + a.toString());
	let g = n?.calendar.identifier === "gregory" && n.era === "BC", _ = (0, Z.useMemo)(() => ({
		granularity: o,
		timeZone: s,
		hideTimeZone: e.hideTimeZone,
		hourCycle: e.hourCycle,
		shouldForceLeadingZeros: e.shouldForceLeadingZeros,
		showEra: g
	}), [
		o,
		e.hourCycle,
		e.shouldForceLeadingZeros,
		s,
		e.hideTimeZone,
		g
	]), { minValue: x, maxValue: S, isDateUnavailable: C } = e, w = (0, Z.useMemo)(() => v(n, x, S, C, _), [
		n,
		x,
		S,
		C,
		_
	]), T = U({
		...e,
		value: n,
		builtinValidation: w
	}), E = T.displayValidation.isInvalid, D = e.validationState || (E ? "invalid" : null), O = (e, t) => {
		r("timeZone" in t ? t.set(J(e)) : X(e, t)), f(null), h(null), T.commitValidation();
	}, k = (n) => {
		let i = typeof u == "function" ? u() : u;
		l ? p || i ? O(n, p || y(e.defaultValue || e.placeholderValue)) : f(n) : (r(n), T.commitValidation()), i && t.setOpen(!1);
	}, A = (e) => {
		d && e ? O(d, e) : h(e);
	};
	return {
		...T,
		value: n,
		defaultValue: e.defaultValue ?? i,
		setValue: r,
		dateValue: d,
		timeValue: p,
		setDateValue: k,
		setTimeValue: A,
		granularity: o,
		hasTime: l,
		...t,
		setOpen(r) {
			!r && !n && d && l && O(d, p || y(e.defaultValue || e.placeholderValue)), t.setOpen(r);
		},
		validationState: D,
		isInvalid: E,
		formatValue(e, t) {
			if (!c) return "";
			let n = m(t, _);
			return new Y(e, n).format(c);
		},
		getDateFormatter(e, t) {
			let n = {
				..._,
				...t
			}, r = m({}, n);
			return new Y(e, r);
		}
	};
}
// node_modules/react-stately/dist/private/datepicker/useDateRangePickerState.mjs
function ae(e) {
	let t = K(e), [n, r] = q(e.value, e.defaultValue || null, e.onChange), [i] = (0, Z.useState)(n), [a, o] = (0, Z.useState)(() => n || {
		start: null,
		end: null
	});
	n == null && a.start && a.end && (a = {
		start: null,
		end: null
	}, o(a));
	let s = n || a, c = (e) => {
		s = e || {
			start: null,
			end: null
		}, o(s), Q(s) ? r(s) : r(null);
	}, l = s?.start || s?.end || e.placeholderValue || null, [u, d] = b(l, e.granularity), f = u === "hour" || u === "minute" || u === "second", p = e.shouldCloseOnSelect ?? !0, [g, _] = (0, Z.useState)(null), [v, x] = (0, Z.useState)(null);
	s && Q(s) && (g = s, "hour" in s.start && (v = s));
	let S = (e, t) => {
		c({
			start: "timeZone" in t.start ? t.start.set(J(e.start)) : X(e.start, t.start),
			end: "timeZone" in t.end ? t.end.set(J(e.end)) : X(e.end, t.end)
		}), _(null), x(null), j.commitValidation();
	}, C = (n) => {
		let r = typeof p == "function" ? p() : p;
		f ? Q(n) && (r || v?.start && v?.end) ? S(n, {
			start: v?.start || y(e.placeholderValue),
			end: v?.end || y(e.placeholderValue)
		}) : _(n) : Q(n) ? (c(n), j.commitValidation()) : _(n), r && t.setOpen(!1);
	}, w = (e) => {
		Q(g) && Q(e) ? S(g, e) : x(e);
	}, T = s?.start?.calendar.identifier === "gregory" && s.start.era === "BC" || s?.end?.calendar.identifier === "gregory" && s.end.era === "BC", E = (0, Z.useMemo)(() => ({
		granularity: u,
		timeZone: d,
		hideTimeZone: e.hideTimeZone,
		hourCycle: e.hourCycle,
		shouldForceLeadingZeros: e.shouldForceLeadingZeros,
		showEra: T
	}), [
		u,
		e.hourCycle,
		e.shouldForceLeadingZeros,
		d,
		e.hideTimeZone,
		T
	]), { minValue: D, maxValue: O, isDateUnavailable: k } = e, A = (0, Z.useMemo)(() => h(s, D, O, k ? (e) => k(e, null) : void 0, E), [
		s,
		D,
		O,
		k,
		E
	]), j = U({
		...e,
		value: n,
		name: (0, Z.useMemo)(() => [e.startName, e.endName].filter((e) => e != null), [e.startName, e.endName]),
		builtinValidation: A
	}), M = j.displayValidation.isInvalid, N = e.validationState || (M ? "invalid" : null);
	return {
		...j,
		value: s,
		defaultValue: e.defaultValue ?? i,
		setValue: c,
		dateRange: g,
		timeRange: v,
		granularity: u,
		hasTime: f,
		setDate(e, t) {
			C(e === "start" ? {
				start: t,
				end: g?.end ?? null
			} : {
				start: g?.start ?? null,
				end: t
			});
		},
		setTime(e, t) {
			w(e === "start" ? {
				start: t,
				end: v?.end ?? null
			} : {
				start: v?.start ?? null,
				end: t
			});
		},
		setDateTime(e, t) {
			c(e === "start" ? {
				start: t,
				end: s?.end ?? null
			} : {
				start: s?.start ?? null,
				end: t
			});
		},
		setDateRange: C,
		setTimeRange: w,
		...t,
		setOpen(n) {
			!n && !(s?.start && s?.end) && Q(g) && f && S(g, {
				start: v?.start || y(e.placeholderValue),
				end: v?.end || y(e.placeholderValue)
			}), t.setOpen(n);
		},
		validationState: N,
		isInvalid: M,
		formatValue(t, n) {
			if (!s || !s.start || !s.end) return null;
			let r = "timeZone" in s.start ? s.start.timeZone : void 0, i = e.granularity || (s.start && "minute" in s.start ? "minute" : "day"), a = "timeZone" in s.end ? s.end.timeZone : void 0, o = e.granularity || (s.end && "minute" in s.end ? "minute" : "day"), c = m(n, {
				granularity: i,
				timeZone: r,
				hideTimeZone: e.hideTimeZone,
				hourCycle: e.hourCycle,
				showEra: s.start.calendar.identifier === "gregory" && s.start.era === "BC" || s.end.calendar.identifier === "gregory" && s.end.era === "BC"
			}), l = s.start.toDate(r || "UTC"), u = s.end.toDate(a || "UTC"), d = new Y(t, c), f;
			if (r === a && i === o && s.start.compare(s.end) !== 0) {
				try {
					let e = d.formatRangeToParts(l, u), t = -1;
					for (let n = 0; n < e.length; n++) {
						let r = e[n];
						if (r.source === "shared" && r.type === "literal") t = n;
						else if (r.source === "endRange") break;
					}
					let n = "", r = "";
					for (let i = 0; i < e.length; i++) i < t ? n += e[i].value : i > t && (r += e[i].value);
					return {
						start: n,
						end: r
					};
				} catch {}
				f = d;
			} else {
				let r = m(n, {
					granularity: o,
					timeZone: a,
					hideTimeZone: e.hideTimeZone,
					hourCycle: e.hourCycle
				});
				f = new Y(t, r);
			}
			return {
				start: d.format(l),
				end: f.format(u)
			};
		},
		getDateFormatter(e, t) {
			let n = {
				...E,
				...t
			}, r = m({}, n);
			return new Y(e, r);
		}
	};
}
function Q(e) {
	return e?.start != null && e.end != null;
}
// node_modules/react-aria-components/dist/private/DatePicker.mjs
var oe = /*#__PURE__*/ (0, Z.createContext)(null), se = /*#__PURE__*/ (0, Z.createContext)(null), ce = /*#__PURE__*/ (0, Z.createContext)(null), le = /*#__PURE__*/ (0, Z.createContext)(null), $ = [
	O,
	e,
	k,
	A
], ue = /*#__PURE__*/ (0, Z.forwardRef)(function(t, s) {
	[t, s] = c(t, s, oe);
	let { validationBehavior: f } = o(D) || {}, m = t.validationBehavior ?? f ?? "native", h = ie({
		...t,
		validationBehavior: m
	}), g = (0, Z.useRef)(null), [_, v] = a(!t["aria-label"] && !t["aria-labelledby"]), { groupProps: y, labelProps: b, fieldProps: x, buttonProps: j, dialogProps: N, calendarProps: P, descriptionProps: F, errorMessageProps: L, ...R } = te({
		...r(t),
		label: v,
		validationBehavior: m
	}, h, g), { focusProps: z, isFocused: B, isFocusVisible: V } = I({ within: !0 }), H = l({
		...t,
		values: {
			state: h,
			isFocusWithin: B,
			isFocusVisible: V,
			isDisabled: t.isDisabled || !1,
			isInvalid: h.isInvalid,
			isOpen: h.isOpen,
			isReadOnly: t.isReadOnly || !1,
			isRequired: t.isRequired || !1
		},
		defaultClassName: "react-aria-DatePicker"
	}), U = M(t, { global: !0 });
	return delete U.id, /*#__PURE__*/ Z.createElement(d, { values: [
		[ce, h],
		[O, {
			...y,
			ref: g,
			isInvalid: h.isInvalid
		}],
		[p, x],
		[e, {
			...j,
			isPressed: h.isOpen
		}],
		[k, {
			...b,
			ref: _,
			elementType: "span"
		}],
		[n, P],
		[w, h],
		[C, {
			trigger: "DatePicker",
			triggerRef: g,
			placement: "bottom start",
			clearContexts: $
		}],
		[T, N],
		[A, { slots: {
			description: F,
			errorMessage: L
		} }],
		[E, R]
	] }, /*#__PURE__*/ Z.createElement(u.div, {
		...i(U, H, z),
		ref: s,
		slot: t.slot || void 0,
		"data-focus-within": B || void 0,
		"data-invalid": h.isInvalid || void 0,
		"data-focus-visible": V || void 0,
		"data-disabled": t.isDisabled || void 0,
		"data-readonly": t.isReadOnly || void 0,
		"data-required": t.isRequired || void 0,
		"data-open": h.isOpen || void 0
	}), /*#__PURE__*/ Z.createElement(S, {
		autoComplete: t.autoComplete,
		name: t.name,
		isDisabled: t.isDisabled,
		state: h
	}));
}), de = /*#__PURE__*/ (0, Z.forwardRef)(function(n, s) {
	[n, s] = c(n, s, se);
	let { validationBehavior: f } = o(D) || {}, m = n.validationBehavior ?? f ?? "native", h = ae({
		...n,
		validationBehavior: m
	}), g = (0, Z.useRef)(null), [_, v] = a(!n["aria-label"] && !n["aria-labelledby"]), { groupProps: y, labelProps: b, startFieldProps: x, endFieldProps: S, buttonProps: j, dialogProps: N, calendarProps: P, descriptionProps: F, errorMessageProps: L, ...R } = re({
		...r(n),
		label: v,
		validationBehavior: m
	}, h, g), { focusProps: z, isFocused: B, isFocusVisible: V } = I({ within: !0 }), H = l({
		...n,
		values: {
			state: h,
			isFocusWithin: B,
			isFocusVisible: V,
			isDisabled: n.isDisabled || !1,
			isInvalid: h.isInvalid,
			isOpen: h.isOpen,
			isReadOnly: n.isReadOnly || !1,
			isRequired: n.isRequired || !1
		},
		defaultClassName: "react-aria-DateRangePicker"
	}), U = M(n, { global: !0 });
	return delete U.id, /*#__PURE__*/ Z.createElement(d, { values: [
		[le, h],
		[O, {
			...y,
			ref: g,
			isInvalid: h.isInvalid
		}],
		[e, {
			...j,
			isPressed: h.isOpen
		}],
		[k, {
			...b,
			ref: _,
			elementType: "span"
		}],
		[t, P],
		[w, h],
		[C, {
			trigger: "DateRangePicker",
			triggerRef: g,
			placement: "bottom start",
			clearContexts: $
		}],
		[T, N],
		[p, { slots: {
			start: x,
			end: S
		} }],
		[A, { slots: {
			description: F,
			errorMessage: L
		} }],
		[E, R]
	] }, /*#__PURE__*/ Z.createElement(u.div, {
		...i(U, H, z),
		ref: s,
		slot: n.slot || void 0,
		"data-focus-within": B || void 0,
		"data-invalid": h.isInvalid || void 0,
		"data-focus-visible": V || void 0,
		"data-disabled": n.isDisabled || void 0,
		"data-readonly": n.isReadOnly || void 0,
		"data-required": n.isRequired || void 0,
		"data-open": h.isOpen || void 0
	}));
});
export { ue as n, de as t };
