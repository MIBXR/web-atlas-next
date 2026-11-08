import { t as e } from "./Button-Cnex0dS4.js";
import { c as t, d as n, f as r, i, l as a, m as o, n as s, r as c, s as l, t as u } from "./utils-UBVJ5JR_.js";
import { n as d } from "./FieldError-BDRHklqb.js";
import { n as f } from "./Form-BfBA0JpQ.js";
import { t as p } from "./intlStrings-B6Rkdzvl.js";
import { t as m } from "./Label-CJNHsoCN.js";
import { n as h, r as g } from "./ListBox-DCWNZidc.js";
import { f as _, i as v, u as y } from "./Dialog-C0V2m_6r.js";
import { n as b } from "./Text-CEDDBTEL.js";
import { t as x } from "./filterDOMProps-CJYy6efO.js";
import { t as S } from "./ListKeyboardDelegate-DtpiEoL1.js";
import { S as C, i as w, t as T, v as E } from "./useKeyboard-CqNSkGJ-.js";
import { t as D } from "./useCollator-dflgnzgU.js";
import { t as O } from "./useField-CfrwMMou.js";
import { u as k } from "./useMultipleSelectionState-Bgjz_mf2.js";
import { i as A, n as j } from "./jsx-runtime-C1t0izHF.js";
import { t as M } from "./useFormReset-DizqO0T1.js";
import { s as N, t as P } from "./useFormValidation-NZK9JasV.js";
import { n as F } from "./VisuallyHidden-CRCgxFfe.js";
import { n as I } from "./CollectionBuilder-DSfSS-yC.js";
import { t as L } from "./Hidden-B5FjVPor.js";
import { t as R } from "./useListState-DvZcaErY.js";
import { t as z } from "./useOverlayTriggerState-loftJLxJ.js";
import { t as B } from "./useControlledState-BbVlCDcL.js";
import { n as V } from "./useHover-DxA7bNQs.js";
import { t as H } from "./useListFormatter-B6H1MkdG.js";
import { n as U } from "./useLocalizedStringFormatter-tuzNT5MD.js";
// node_modules/react-aria/dist/private/select/useSelect.mjs
var W = /* @__PURE__ */ A(j(), 1), G = /* @__PURE__ */ new WeakMap();
function K(e, t, i) {
	let { keyboardDelegate: a, isDisabled: s, isRequired: c, name: l, form: u, validationBehavior: d = "aria" } = e, f = D({
		usage: "search",
		sensitivity: "base"
	}), p = (0, W.useMemo)(() => a || new S(t.collection, t.disabledKeys, i, f), [
		a,
		t.collection,
		t.disabledKeys,
		f,
		i
	]), { menuTriggerProps: m, menuProps: h } = y({
		isDisabled: s,
		type: "listbox"
	}, t, i), { keyboardProps: g } = T({
		shortcuts: {
			ArrowLeft: () => {
				if (t.selectionManager.selectionMode === "multiple") return !1;
				let e = t.selectedKey == null ? p.getFirstKey?.() : p.getKeyAbove?.(t.selectedKey);
				e != null && t.setSelectedKey(e);
			},
			ArrowRight: () => {
				if (t.selectionManager.selectionMode === "multiple") return !1;
				let e = t.selectedKey == null ? p.getFirstKey?.() : p.getKeyBelow?.(t.selectedKey);
				e != null && t.setSelectedKey(e);
			}
		},
		allowRepeats: !0,
		onKeyDown: e.onKeyDown,
		onKeyUp: e.onKeyUp
	}), { typeSelectProps: _ } = k({
		keyboardDelegate: p,
		selectionManager: t.selectionManager,
		onTypeSelect(e) {
			t.setSelectedKey(e);
		}
	}), { isInvalid: v, validationErrors: b, validationDetails: C } = t.displayValidation, { labelProps: A, fieldProps: j, descriptionProps: M, errorMessageProps: N } = O({
		...e,
		labelElementType: "span",
		isInvalid: v,
		errorMessage: e.errorMessage || b
	});
	t.selectionManager.selectionMode === "multiple" && (_ = {});
	let P = x(e, { labelable: !0 }), F = n(_, m, j), I = o();
	return G.set(t, {
		isDisabled: s,
		isRequired: c,
		name: l,
		form: u,
		validationBehavior: d
	}), {
		labelProps: {
			...A,
			onClick: () => {
				e.isDisabled || (i.current?.focus(), w("keyboard"));
			}
		},
		triggerProps: n(P, {
			...F,
			isDisabled: s,
			onKeyDown: r(F.onKeyDown, g.onKeyDown),
			onKeyUp: g.onKeyUp,
			"aria-labelledby": [
				I,
				F["aria-labelledby"],
				F["aria-label"] && !F["aria-labelledby"] ? F.id : null
			].filter(Boolean).join(" "),
			onFocus(n) {
				t.isFocused || (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0));
			},
			onBlur(n) {
				t.isOpen || (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
			}
		}),
		valueProps: { id: I },
		menuProps: {
			...h,
			onAction: void 0,
			autoFocus: t.focusStrategy || !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			disallowEmptySelection: !0,
			linkBehavior: "selection",
			onBlur: (n) => {
				E(n.currentTarget, n.relatedTarget) || (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
			},
			"aria-labelledby": [j["aria-labelledby"], F["aria-label"] && !j["aria-labelledby"] ? F.id : null].filter(Boolean).join(" ")
		},
		descriptionProps: M,
		errorMessageProps: N,
		isInvalid: v,
		validationErrors: b,
		validationDetails: C,
		hiddenSelectProps: {
			isDisabled: s,
			name: l,
			label: e.label,
			state: t,
			triggerRef: i,
			form: u
		}
	};
}
// node_modules/react-aria/dist/private/select/HiddenSelect.mjs
function q(e, t, n) {
	let r = G.get(t) || {}, { autoComplete: i, name: a = r.name, form: o = r.form, isDisabled: s = r.isDisabled } = e, { validationBehavior: c, isRequired: l } = r, { visuallyHiddenProps: u } = F({ style: {
		position: "fixed",
		top: 0,
		left: 0
	} });
	M(e.selectRef, t.defaultValue, t.setValue), P({
		validationBehavior: c,
		focus: () => n.current?.focus()
	}, t, e.selectRef);
	let d = t.setValue, f = (0, W.useCallback)((e) => {
		let t = C(e);
		t.multiple ? d(Array.from(t.selectedOptions, (e) => e.value)) : d(e.currentTarget.value);
	}, [d]);
	return {
		containerProps: {
			...u,
			"aria-hidden": !0,
			"data-react-aria-prevent-focus": !0,
			"data-a11y-ignore": "aria-hidden-focus"
		},
		inputProps: { style: { display: "none" } },
		selectProps: {
			tabIndex: -1,
			autoComplete: i,
			disabled: s,
			multiple: t.selectionManager.selectionMode === "multiple",
			required: c === "native" && l,
			name: a,
			form: o,
			value: t.value ?? "",
			onChange: f,
			onInput: f
		}
	};
}
function J(e) {
	let { state: t, triggerRef: n, label: r, name: i, form: a, isDisabled: o } = e, s = (0, W.useRef)(null), c = (0, W.useRef)(null), { containerProps: l, selectProps: u } = q({
		...e,
		selectRef: t.collection.size <= 300 ? s : c
	}, t, n), d = Array.isArray(t.value) ? t.value : [t.value];
	if (t.collection.size <= 300) return /*#__PURE__*/ W.createElement("div", {
		...l,
		"data-testid": "hidden-select-container"
	}, /*#__PURE__*/ W.createElement("label", null, r, /*#__PURE__*/ W.createElement("select", {
		...u,
		ref: s
	}, /*#__PURE__*/ W.createElement("option", {
		value: "",
		label: "\xA0"
	}, "\xA0"), [...t.collection.getKeys()].map((e) => {
		let n = t.collection.getItem(e);
		if (n && n.type === "item") return /*#__PURE__*/ W.createElement("option", {
			key: n.key,
			value: n.key
		}, n.textValue);
	}), t.collection.size === 0 && i && d.map((e, t) => /*#__PURE__*/ W.createElement("option", {
		key: t,
		value: e ?? ""
	})))));
	if (i) {
		let { validationBehavior: e } = G.get(t) || {};
		d.length === 0 && (d = [null]);
		let n = d.map((t, n) => {
			let r = {
				type: "hidden",
				autoComplete: u.autoComplete,
				name: i,
				form: a,
				disabled: o,
				value: t ?? ""
			};
			return e === "native" ? /*#__PURE__*/ W.createElement("input", {
				key: n,
				...r,
				ref: n === 0 ? c : null,
				style: { display: "none" },
				type: "text",
				required: n === 0 && u.required,
				onChange: () => {}
			}) : /*#__PURE__*/ W.createElement("input", {
				key: n,
				...r,
				ref: n === 0 ? c : null
			});
		});
		return /*#__PURE__*/ W.createElement(W.Fragment, null, n);
	}
	return null;
}
// node_modules/react-stately/dist/private/select/useSelectState.mjs
function Y(e) {
	let { selectionMode: t = "single", shouldCloseOnSelect: n = t === "single" } = e, r = z(e), [i, a] = (0, W.useState)(null), o = (0, W.useMemo)(() => e.defaultValue === void 0 ? t === "single" ? e.defaultSelectedKey ?? null : [] : e.defaultValue, [
		e.defaultValue,
		e.defaultSelectedKey,
		t
	]), s = (0, W.useMemo)(() => e.value === void 0 ? t === "single" ? e.selectedKey : void 0 : e.value, [
		e.value,
		e.selectedKey,
		t
	]), [c, l] = B(s, o, e.onChange), u = t === "single" && Array.isArray(c) ? c[0] : c, d = (n) => {
		if (t === "single") {
			let t = Array.isArray(n) ? n[0] ?? null : n;
			l(t), t !== u && e.onSelectionChange?.(t);
		} else {
			let e = [];
			Array.isArray(n) ? e = n : n != null && (e = [n]), l(e);
		}
	}, f = R({
		...e,
		selectionMode: t,
		disallowEmptySelection: t === "single",
		allowDuplicateSelectionEvents: !0,
		selectedKeys: (0, W.useMemo)(() => X(u), [u]),
		onSelectionChange: (e) => {
			if (e !== "all") {
				if (t === "single") {
					let t = e.values().next().value ?? null;
					d(t);
				} else d([...e]);
				n && r.close(), h.commitValidation();
			}
		}
	}), p = f.selectionManager.firstSelectedKey, m = (0, W.useMemo)(() => [...f.selectionManager.selectedKeys].map((e) => f.collection.getItem(e)).filter((e) => e != null), [f.selectionManager.selectedKeys, f.collection]), h = N({
		...e,
		value: Array.isArray(u) && u.length === 0 ? null : u
	}), [g, _] = (0, W.useState)(!1), [v] = (0, W.useState)(u);
	return {
		...h,
		...f,
		...r,
		value: u,
		defaultValue: o ?? v,
		setValue: d,
		selectedKey: p,
		setSelectedKey: d,
		selectedItem: m[0] ?? null,
		selectedItems: m,
		defaultSelectedKey: e.defaultSelectedKey ?? (e.selectionMode === "single" ? v : null),
		focusStrategy: i,
		open(t = null) {
			(f.collection.size !== 0 || e.allowsEmptyCollection) && (a(t), r.open());
		},
		toggle(t = null) {
			(f.collection.size !== 0 || e.allowsEmptyCollection) && (a(t), r.toggle());
		},
		isFocused: g,
		setFocused: _
	};
}
function X(e) {
	if (e !== void 0) return e === null ? [] : Array.isArray(e) ? e : [e];
}
// node_modules/react-aria-components/dist/private/Select.mjs
function ee(e) {
	return e && e.__esModule ? e.default : e;
}
var Z = /*#__PURE__*/ (0, W.createContext)(null), Q = /*#__PURE__*/ (0, W.createContext)(null), te = /*#__PURE__*/ L(function(e, t) {
	[e, t] = s(e, t, Z);
	let { children: n, isDisabled: r = !1, isInvalid: i = !1, isRequired: a = !1 } = e, o = (0, W.useMemo)(() => typeof n == "function" ? n({
		isOpen: !1,
		isDisabled: r,
		isInvalid: i,
		isRequired: a,
		isFocused: !1,
		isFocusVisible: !1,
		defaultChildren: null
	}) : n, [
		n,
		r,
		i,
		a
	]);
	return /*#__PURE__*/ W.createElement(I, { content: o }, (n) => /*#__PURE__*/ W.createElement(re, {
		props: e,
		collection: n,
		selectRef: t
	}));
}), ne = [
	m,
	e,
	b
];
function re({ props: r, selectRef: o, collection: s }) {
	let { validationBehavior: p } = a(f) || {}, y = r.validationBehavior ?? p ?? "native", S = Y({
		...r,
		collection: s,
		children: void 0,
		validationBehavior: y
	}), { isFocusVisible: C, focusProps: w } = V({ within: !0 }), T = (0, W.useRef)(null), [E, D] = i(!r["aria-label"] && !r["aria-labelledby"]), { labelProps: O, triggerProps: k, valueProps: A, menuProps: j, descriptionProps: M, errorMessageProps: N, hiddenSelectProps: P, ...F } = K({
		...t(r),
		label: D,
		validationBehavior: y
	}, S, T), I = (0, W.useMemo)(() => ({
		isOpen: S.isOpen,
		isFocused: S.isFocused,
		isFocusVisible: C,
		isDisabled: r.isDisabled || !1,
		isInvalid: F.isInvalid || !1,
		isRequired: r.isRequired || !1
	}), [
		S.isOpen,
		S.isFocused,
		C,
		r.isDisabled,
		F.isInvalid,
		r.isRequired
	]), L = c({
		...r,
		values: I,
		defaultClassName: "react-aria-Select"
	}), R = x(r, { global: !0 });
	delete R.id;
	let z = (0, W.useRef)(null);
	return /*#__PURE__*/ W.createElement(u, { values: [
		[Z, r],
		[Q, S],
		[$, A],
		[m, {
			...O,
			ref: E,
			elementType: "span"
		}],
		[e, {
			...k,
			ref: T,
			isPressed: S.isOpen,
			autoFocus: r.autoFocus
		}],
		[v, S],
		[_, {
			trigger: "Select",
			triggerRef: T,
			scrollRef: z,
			placement: "bottom start",
			"aria-labelledby": j["aria-labelledby"],
			clearContexts: ne
		}],
		[g, {
			...j,
			ref: z
		}],
		[h, S],
		[b, { slots: {
			description: M,
			errorMessage: N
		} }],
		[d, F]
	] }, /*#__PURE__*/ W.createElement(l.div, {
		...n(R, L, w),
		ref: o,
		slot: r.slot || void 0,
		"data-focused": S.isFocused || void 0,
		"data-focus-visible": C || void 0,
		"data-open": S.isOpen || void 0,
		"data-disabled": r.isDisabled || void 0,
		"data-invalid": F.isInvalid || void 0,
		"data-required": r.isRequired || void 0
	}, L.children, /*#__PURE__*/ W.createElement(J, {
		...P,
		autoComplete: r.autoComplete
	})));
}
var $ = /*#__PURE__*/ (0, W.createContext)(null), ie = /*#__PURE__*/ L(function(e, t) {
	[e, t] = s(e, t, $);
	let n = (0, W.useContext)(Q), { placeholder: r } = a(Z), i = n.selectedItems.map((e) => {
		let t = e.props?.children;
		return typeof t == "function" && (t = t({
			isHovered: !1,
			isPressed: !1,
			isSelected: !1,
			isFocused: !1,
			isFocusVisible: !1,
			isDisabled: !1,
			selectionMode: "single",
			selectionBehavior: "toggle"
		})), t;
	}), o = H(), u = (0, W.useMemo)(() => n.selectedItems.map((e) => e?.textValue), [n.selectedItems]), d = n.selectionManager.selectionMode, f = (0, W.useMemo)(() => d === "single" ? u[0] ?? "" : o.format(u), [
		d,
		o,
		u
	]), m = (0, W.useMemo)(() => {
		if (d === "single") return i[0];
		let e = o.formatToParts(u);
		if (e.length === 0) return null;
		let t = 0;
		return e.map((e) => e.type === "element" ? /*#__PURE__*/ W.createElement(W.Fragment, { key: t }, i[t++]) : e.value);
	}, [
		d,
		o,
		u,
		i
	]), h = U(ee(p), "react-aria-components"), g = c({
		...e,
		defaultChildren: m ?? r ?? h.format("selectPlaceholder"),
		defaultClassName: "react-aria-SelectValue",
		values: {
			selectedItem: n.selectedItems[0]?.value ?? null,
			selectedItems: (0, W.useMemo)(() => n.selectedItems.map((e) => e.value ?? null), [n.selectedItems]),
			selectedText: f,
			isPlaceholder: n.selectedItems.length === 0,
			state: n
		}
	}), _ = x(e, { global: !0 });
	return /*#__PURE__*/ W.createElement(l.span, {
		ref: t,
		..._,
		...g,
		"data-placeholder": n.selectedItems.length === 0 || void 0
	}, /*#__PURE__*/ W.createElement(b.Provider, { value: void 0 }, g.children));
});
export { Q as n, te as r, ie as t };
