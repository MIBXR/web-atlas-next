import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./dist-DCi9UB7o.js";
import "./button-DmMhlFcj.js";
import { i as r, n as i, r as a, t as o } from "./input-group-Dqr1UK_p.js";
import { t as s } from "./icon-placeholder-BTF3H_W7.js";
import { t as c } from "./jsx-runtime-lAxUcZjR.js";
import { I as l, N as u, P as ee, n as te, o as d } from "./composite-BYPOq3H3.js";
import { a as f, d as p, l as m, o as h, r as g, s as _, t as ne, u as v } from "./useRenderElement-Bc91YjHo.js";
import { D as y, a as b, i as x, l as S, m as C, p as w, r as T, u as E, x as D } from "./popupStateMapping-CSyRbb7j.js";
import { a as O, c as k, d as re, l as A, n as j, o as M, s as ie, t as ae, u as oe } from "./resolveValueLabel-DDH_MAMp.js";
import { t as N } from "./stringifyLocale-C6rrgktz.js";
import { t as se } from "./useControlled-BkmszdIY.js";
import { t as P } from "./useIsoLayoutEffect-B0B6th0o.js";
import { h as ce, t as le } from "./popupStoreUtils-DmfT7kYW.js";
import { t as F } from "./useStableCallback-BmDujACN.js";
import { t as ue } from "./useValueAsRef-0u0FW33N.js";
import { n as de, t as fe } from "./visuallyHidden-DvzvoEuP.js";
import { a as pe, i as me, n as he, t as ge } from "./usePositioner-D8Ld0Xcc.js";
import { n as _e, t as I } from "./useTypeahead-BhzPbvix.js";
import { t as ve } from "./useClick-B0N8YgwG.js";
import { t as ye } from "./engine-DPfrNvZF.js";
import { n as L, r as be } from "./shadowDom-D66trjQm.js";
import { a as xe, g as Se, h as Ce, i as we, l as Te, m as Ee, n as De, p as Oe, t as R, x as ke, y as Ae } from "./createBaseUIEventDetails-DG51vPHx.js";
import { a as je, o as Me, t as Ne } from "./useOpenChangeComplete-BfJk_bnM.js";
import { a as Pe, c as Fe, i as Ie, n as Le, o as Re, r as ze, s as Be, t as Ve } from "./useRegisterFieldControl-Crjc5EN3.js";
import { t as He } from "./useLabelableId-VvLeyn8q.js";
import { i as Ue, r as We, t as Ge } from "./useOpenInteractionType-DPoQCspH.js";
import { t as Ke } from "./useValueChanged-Bwf6UlC_.js";
import { n as qe, r as Je } from "./resolveAriaLabelledBy-Dya8t0dh.js";
import { t as Ye } from "./DirectionContext-CBHZ_yWZ.js";
import { n as Xe } from "./useTimeout-CP4j_cva.js";
import { t as Ze } from "./owner-C-FapX6G.js";
import { t as Qe } from "./useButton-CMNj7XNN.js";
import { t as $e } from "./getPseudoElementBounds-Du39E_1D.js";
import { t as et } from "./useBaseUiId-BwhhMxTY.js";
import { t as tt } from "./CompositeList-Br8uoKbd.js";
import { t as nt } from "./inertValue-cHK2-C55.js";
import { t as rt } from "./useAnchoredPopupScrollLock-CgAWC3OP.js";
import { t as it } from "./react-dom-BasjwewA.js";
import { n as at, t as ot } from "./useCompositeListItem-BEyYtHBh.js";
// node_modules/@base-ui/react/floating-ui-react/hooks/gridNavigation.mjs
function st(e, t, n, r, i, a, o, s, c, l = 2) {
	let u = te(n.current, {
		event: e,
		orientation: r,
		loopFocus: i,
		rtl: a,
		cols: l,
		disabledIndices: o,
		minIndex: s,
		maxIndex: c,
		prevIndex: t > c ? s : t,
		stopEvent: !0
	});
	return d(n.current, u) ? void 0 : u;
}
// node_modules/@base-ui/react/combobox/root/ComboboxRootContext.mjs
var z = /* @__PURE__ */ e(t(), 1), ct = /*#__PURE__*/ z.createContext(void 0), lt = /*#__PURE__*/ z.createContext(void 0), ut = /*#__PURE__*/ z.createContext(void 0), dt = /*#__PURE__*/ z.createContext(!1), ft = /*#__PURE__*/ z.createContext("");
function B() {
	let e = z.useContext(ct);
	if (!e) throw Error(v(22));
	return e;
}
function pt() {
	let e = z.useContext(lt);
	if (!e) throw Error(v(23));
	return e;
}
function mt() {
	let e = z.useContext(ut);
	if (!e) throw Error(v(24));
	return e;
}
function ht() {
	return z.useContext(ft);
}
function gt() {
	return z.useContext(dt);
}
// node_modules/@base-ui/react/combobox/store.mjs
var V = {
	id: w((e) => e.id),
	labelId: w((e) => e.labelId),
	items: w((e) => e.items),
	selectedValue: w((e) => e.selectedValue),
	hasSelectionChips: w((e) => {
		let t = e.selectedValue;
		return Array.isArray(t) && t.length > 0;
	}),
	hasSelectedValue: w((e) => {
		let { selectedValue: t, selectionMode: n } = e;
		return t == null ? !1 : n === "multiple" && Array.isArray(t) ? t.length > 0 : !0;
	}),
	hasNullItemLabel: w((e, t) => t ? ae(e.items) : !1),
	open: w((e) => e.open),
	mounted: w((e) => e.mounted),
	forceMounted: w((e) => e.forceMounted),
	inline: w((e) => e.inline),
	activeIndex: w((e) => e.activeIndex),
	selectedIndex: w((e) => e.selectedIndex),
	isActive: w((e, t) => e.activeIndex === t),
	isSelected: w((e, t) => {
		let n = e.isItemEqualToValue, r = e.selectedValue;
		return Array.isArray(r) ? r.some((e) => ie(t, e, n)) : ie(t, r, n);
	}),
	transitionStatus: w((e) => e.transitionStatus),
	popupProps: w((e) => e.popupProps),
	inputProps: w((e) => e.inputProps),
	triggerProps: w((e) => e.triggerProps),
	itemProps: w((e) => e.itemProps),
	positionerElement: w((e) => e.positionerElement),
	listElement: w((e) => e.listElement),
	popupId: w((e) => e.popupId),
	triggerElement: w((e) => e.triggerElement),
	inputElement: w((e) => e.inputElement),
	inputGroupElement: w((e) => e.inputGroupElement),
	popupSide: w((e) => e.popupSide),
	openMethod: w((e) => e.openMethod),
	inputInsidePopup: w((e) => e.inputInsidePopup),
	inputOwnsFormValue: w((e) => e.inputOwnsFormValue),
	selectionMode: w((e) => e.selectionMode),
	name: w((e) => e.name),
	form: w((e) => e.form),
	disabled: w((e) => e.disabled),
	readOnly: w((e) => e.readOnly),
	required: w((e) => e.required),
	grid: w((e) => e.grid),
	virtualized: w((e) => e.virtualized),
	itemToStringLabel: w((e) => e.itemToStringLabel),
	isItemEqualToValue: w((e) => e.isItemEqualToValue),
	modal: w((e) => e.modal),
	autoHighlight: w((e) => e.autoHighlight),
	submitOnItemClick: w((e) => e.submitOnItemClick)
};
// node_modules/@base-ui/react/combobox/root/utils/index.mjs
function H(e) {
	return e == null ? void 0 : `${e}-popup`;
}
function _t(e, t) {
	return (n, r) => {
		if (n == null) return !1;
		let i = O(n, t);
		return e.contains(i, r);
	};
}
function vt(e, t, n) {
	return (r, i) => {
		if (r == null) return !1;
		if (!i) return !0;
		let a = O(r, t), o = n == null ? "" : O(n, t);
		return o && e.contains(o, i) && o.length === i.length ? !0 : e.contains(a, i);
	};
}
// node_modules/@base-ui/react/internals/filter.mjs
var yt = /* @__PURE__ */ new Map();
function bt(e = {}) {
	let t = {
		usage: "search",
		sensitivity: "base",
		ignorePunctuation: !0,
		...e
	}, n = `${N(e.locale)}|${JSON.stringify(t)}`, r = yt.get(n);
	if (r) return r;
	let i = new Intl.Collator(e.locale, t), a = {
		contains(e, t, n) {
			if (!t) return !0;
			let r = O(e, n);
			for (let e = 0; e <= r.length - t.length; e += 1) if (i.compare(r.slice(e, e + t.length), t) === 0) return !0;
			return !1;
		},
		startsWith(e, t, n) {
			if (!t) return !0;
			let r = O(e, n);
			return i.compare(r.slice(0, t.length), t) === 0;
		},
		endsWith(e, t, n) {
			if (!t) return !0;
			let r = O(e, n), a = t.length;
			return r.length >= a && i.compare(r.slice(r.length - a), t) === 0;
		}
	};
	return yt.set(n, a), a;
}
// node_modules/@base-ui/react/combobox/root/utils/useFilter.mjs
var xt = bt, St = Symbol("none"), Ct = {
	value: St,
	index: -1
}, U = c();
function wt(e) {
	let { id: t, onOpenChangeComplete: n, defaultSelectedValue: r = null, selectedValue: i, onSelectedValueChange: a, defaultInputValue: o, inputValue: s, open: c, defaultOpen: l = !1, selectionMode: u = "none", onItemHighlighted: ee, name: te, form: d, disabled: ne = !1, readOnly: v = !1, required: y = !1, inputRef: b, grid: x = !1, items: w, filteredItems: T, filter: D, openOnInputClick: ae = !0, autoHighlight: N = !1, keepHighlight: me = !1, highlightItemOnHover: he = !0, loopFocus: ge = !0, itemToStringLabel: I, itemToStringValue: ye, isItemEqualToValue: xe = k, virtualized: we = !1, inline: Te = !1, fillInputOnItemPress: Oe = !0, modal: Ae = !1, limit: je = -1, autoComplete: Pe = "list", formAutoComplete: Fe, locale: Ie, submitOnItemClick: Le = !1 } = e, { clearErrors: Be } = ze(), { setDirty: Ue, validityData: We, setFilled: qe, name: Xe, disabled: Ze, setTouched: Qe, setFocused: $e, validationMode: et, validation: tt } = Re(), nt = Ye(), rt = He({ id: t }), it = xt({ locale: Ie }), [at, ot] = z.useState(!1), [B, pt] = z.useState(null), mt = z.useRef([]), ht = z.useRef([]), gt = z.useRef(null), H = z.useRef(null), yt = z.useRef(null), bt = z.useRef(null), wt = z.useRef(null), Tt = z.useRef(!0), Et = z.useRef(!1), Dt = z.useRef(null), Ot = z.useRef(null), kt = z.useRef(null), At = z.useRef(Ct), jt = z.useRef(null), Mt = z.useRef([]), Nt = z.useRef([]), W = Ze || ne, Pt = Xe ?? te, G = u === "multiple", K = u === "single", Ft = s !== void 0 || o !== void 0, It = w !== void 0, Lt = T !== void 0, q;
	q = N === "always" ? "always" : N ? "input-change" : !1;
	let [J, Rt] = se({
		controlled: i,
		default: G ? r ?? f : r,
		name: "Combobox",
		state: "selectedValue"
	}), zt = z.useMemo(() => D === null ? () => !0 : D === void 0 ? K && !at ? vt(it, I, J) : _t(it, I) : D, [
		D,
		K,
		J,
		at,
		it,
		I
	]), Bt = p(() => Ft ? o ?? "" : K ? O(J, I) : "").current, [Y, Vt] = se({
		controlled: s,
		default: Bt,
		name: "Combobox",
		state: "inputValue"
	}), [X, Ht] = se({
		controlled: c,
		default: l,
		name: "Combobox",
		state: "open"
	}), Ut = j(w), Z = B ?? (Y === "" ? "" : String(Y).trim()), Wt = K ? O(J, I) : "", Gt = K && !at && Z !== "" && Wt !== "" && Wt.length === Z.length && it.contains(Wt, Z), Kt = Gt ? "" : Z, qt = It && Lt && Gt, Jt = z.useMemo(() => w ? Ut ? w.flatMap((e) => e.items) : w : f, [w, Ut]), Yt = z.useMemo(() => {
		if (T && !qt) return T;
		if (!w) return f;
		if (Ut) {
			let e = w, t = [], n = 0;
			for (let r of e) {
				if (je > -1 && n >= je) break;
				let e = Kt === "" ? r.items : r.items.filter((e) => zt(e, Kt, I));
				if (e.length === 0) continue;
				let i = je > -1 ? je - n : Infinity, a = e.slice(0, i);
				if (a.length > 0) {
					let e = {
						...r,
						items: a
					};
					t.push(e), n += a.length;
				}
			}
			return t;
		}
		if (Kt === "") return je > -1 ? Jt.slice(0, je) : Jt;
		let e = [];
		for (let t of Jt) {
			if (je > -1 && e.length >= je) break;
			zt(t, Kt, I) && e.push(t);
		}
		return e;
	}, [
		T,
		qt,
		w,
		Ut,
		Kt,
		je,
		zt,
		I,
		Jt
	]), Xt = z.useMemo(() => Ut ? Yt.flatMap((e) => e.items) : Yt, [Yt, Ut]), Q = p(() => new S({
		id: rt,
		labelId: void 0,
		selectedValue: J,
		open: X,
		filter: zt,
		query: Z,
		items: w,
		selectionMode: u,
		listRef: mt,
		labelsRef: ht,
		popupRef: gt,
		emptyRef: wt,
		inputRef: H,
		startDismissRef: yt,
		endDismissRef: bt,
		keyboardActiveRef: Tt,
		chipsContainerRef: Dt,
		clearRef: Ot,
		valuesRef: Mt,
		allValuesRef: Nt,
		selectionEventRef: kt,
		name: Pt,
		form: d,
		disabled: W,
		readOnly: v,
		required: y,
		grid: x,
		isGrouped: Ut,
		virtualized: we,
		openOnInputClick: ae,
		itemToStringLabel: I,
		isItemEqualToValue: xe,
		modal: Ae,
		autoHighlight: q,
		submitOnItemClick: Le,
		hasInputValue: Ft,
		mounted: !1,
		forceMounted: !1,
		transitionStatus: "idle",
		inline: Te,
		activeIndex: null,
		selectedIndex: null,
		popupProps: {},
		inputProps: {},
		triggerProps: {},
		itemProps: h,
		positionerElement: null,
		listElement: null,
		popupId: void 0,
		triggerElement: null,
		inputElement: null,
		inputGroupElement: null,
		popupSide: null,
		openMethod: null,
		inputInsidePopup: !0,
		inputOwnsFormValue: u === "none",
		onOpenChangeComplete: n || _,
		setOpen: _,
		setInputValue: _,
		setSelectedValue: _,
		setIndices: _,
		onItemHighlighted: _,
		handleSelection: _,
		forceMount: _,
		requestSubmit: _
	})).current, Zt = u === "none" ? Y : J, Qt = z.useMemo(() => u === "none" ? Zt : Array.isArray(J) ? J.map((e) => M(e, ye)) : M(J, ye), [
		Zt,
		ye,
		u,
		J
	]), $t = F(ee), en = F(n), tn = E(Q, V.activeIndex), nn = E(Q, V.selectedIndex), rn = E(Q, V.positionerElement), an = E(Q, V.listElement), on = E(Q, V.triggerElement), sn = E(Q, V.inputElement), cn = E(Q, V.inputGroupElement), $ = E(Q, V.inline), ln = E(Q, V.inputInsidePopup), un = E(Q, V.inputOwnsFormValue), dn = ue(on), { mounted: fn, setMounted: pn, transitionStatus: mn } = Me(X), { openMethod: hn, triggerProps: gn } = Ge(X), _n = F(() => Qt);
	Ve(ln ? dn : H, rt, Zt, _n, !W, te);
	let vn = F(() => {
		w ? ht.current = Xt.map((e) => O(e, I)) : Q.set("forceMounted", !0);
	}), yn = z.useRef(J);
	P(() => {
		J !== yn.current && vn();
	}, [vn, J]);
	let bn = F((e) => {
		Q.update(e);
		let t = e.type || "none";
		if (e.activeIndex !== void 0) {
			if (e.activeIndex === null) At.current !== Ct && (At.current = Ct, $t(void 0, De(t, void 0, { index: -1 })));
			else {
				let n = Mt.current[e.activeIndex];
				At.current = {
					value: n,
					index: e.activeIndex
				}, $t(n, De(t, void 0, { index: e.activeIndex }));
			}
		}
	}), xn = F((t, n) => {
		if (Et.current = n.reason === Ee, e.onInputValueChange?.(t, n), !n.isCanceled) {
			if (n.reason === "input-change") {
				let e = n.event, r = e.inputType;
				if (e.type === "compositionend" || r != null && r !== "" && r !== "insertReplacementText") {
					let e = t.trim() !== "";
					e && ot(!0), jt.current = { hasQuery: e }, e && q && Q.state.activeIndex == null && Q.set("activeIndex", 0);
				}
			}
			Vt(t);
		}
	}), Sn = F((t, n) => {
		if (X !== t && (n.reason === "escape-key" && It && Xt.length === 0 && !Q.state.emptyRef.current && n.allowPropagation(), e.onOpenChange?.(t, n), !n.isCanceled && (t && G && ln && !$ && B !== null && (ot(!1), pt(null), Y !== "" && xn("", R(Ee, n.event))), !t && at && (K ? ($ || pt(Z), Z === "" && ot(!1)) : G && ($ || pt(Z), ln && bn({ activeIndex: null }), (!ln || $) && xn("", R(Ee, n.event)))), Ht(t), !t && ln && (n.reason === "focus-out" || n.reason === "outside-press") && (Qe(!0), $e(!1), et === "onBlur")))) {
			let e = u === "none" ? Y : J;
			tt.commit(e);
		}
	}), Cn = F((e, t) => {
		a?.(e, t), t.isCanceled || (Rt(e), (u === "none" && gt.current && Oe || K && !Q.state.inputInsidePopup) && xn(O(e, I), R(t.reason, t.event)), K && e != null && t.reason !== "input-change" && at && !$ && pt(Z));
	}), wn = F((e, t) => {
		let n = t;
		if (n === void 0) {
			if (tn === null) return;
			n = Mt.current[tn];
		}
		let r = be(e), i = kt.current ?? e;
		kt.current = null;
		let a = R(Se, i), o = r?.closest("a")?.getAttribute("href");
		if (o) o.startsWith("#") && Sn(!1, a);
		else if (G) {
			let e = Array.isArray(J) ? J : [], t = re(e, n, Q.state.isItemEqualToValue) ? oe(e, n, Q.state.isItemEqualToValue) : [...e, n];
			if (Cn(t, a), a.isCanceled || !(H.current && H.current.value.trim() !== "")) return;
			Q.state.inputInsidePopup ? xn("", R(Ee, a.event)) : Sn(!1, a);
		} else {
			if (Cn(n, a), a.isCanceled) return;
			Sn(!1, a);
		}
	}), Tn = F(() => {
		if (!Q.state.submitOnItemClick) return;
		let e = tt.inputRef.current?.form ?? Q.state.inputElement?.form;
		e && typeof e.requestSubmit == "function" && e.requestSubmit();
	}), En = F(() => {
		if (pn(!1), en?.(!1), ot(!1), pt(null), bn(u === "none" ? {
			activeIndex: null,
			selectedIndex: null
		} : { activeIndex: null }), G && H.current && H.current.value !== "" && !Et.current && xn("", R(Ee)), K) {
			if (Q.state.inputInsidePopup) H.current && H.current.value !== "" && xn("", R(Ee));
			else {
				let e = O(J, I);
				H.current && H.current.value !== e && xn(e, R(e === "" ? Ee : ke));
			}
		}
	}), Dn = z.useMemo(() => $ && rn ? { current: rn.closest("[role=\"dialog\"]") } : gt, [$, rn]);
	Ne({
		enabled: !e.actionsRef,
		open: X,
		ref: Dn,
		onComplete() {
			X || En();
		}
	}), z.useImperativeHandle(e.actionsRef, () => ({ unmount: En }), [En]), P(function() {
		if (X || u === "none") return;
		let e = w ? Jt : Nt.current;
		if (G) {
			let t = Array.isArray(J) ? J : [], n = t[t.length - 1], r = A(e, n, xe);
			bn({ selectedIndex: r === -1 ? null : r });
		} else {
			let t = A(e, J, xe);
			bn({ selectedIndex: t === -1 ? null : t });
		}
	}, [
		X,
		J,
		w,
		u,
		Jt,
		G,
		xe,
		bn
	]), P(() => {
		w && (Mt.current = Xt, mt.current.length = Xt.length);
	}, [w, Xt]), P(() => {
		let e = jt.current;
		if (e && (e.hasQuery ? q && Q.set("activeIndex", 0) : q === "always" && Q.set("activeIndex", 0), jt.current = null), !X && !$) return;
		let t = It || Lt ? Xt : Mt.current, n = Q.state.activeIndex;
		if (n == null) {
			if (q === "always" && t.length > 0) {
				Q.set("activeIndex", 0);
				return;
			}
			At.current !== Ct && (At.current = Ct, Q.state.onItemHighlighted(void 0, De(ke, void 0, { index: -1 })));
			return;
		}
		if (n >= t.length) {
			At.current !== Ct && (At.current = Ct, Q.state.onItemHighlighted(void 0, De(ke, void 0, { index: -1 }))), Q.set("activeIndex", null);
			return;
		}
		let r = t[n], i = At.current.value, a = i !== St && ie(r, i, Q.state.isItemEqualToValue);
		At.current.index === n && a || (At.current = {
			value: r,
			index: n
		}, Q.state.onItemHighlighted(r, De(ke, void 0, { index: n })));
	}, [
		tn,
		q,
		Lt,
		It,
		Xt,
		$,
		X,
		Q
	]), P(() => {
		qe(u === "none" ? String(Y) !== "" : G ? Array.isArray(J) && J.length > 0 : J != null);
	}, [
		qe,
		u,
		Y,
		J,
		G
	]), z.useEffect(() => {
		It && q && Xt.length === 0 && bn({ activeIndex: null });
	}, [
		It,
		q,
		Xt.length,
		bn
	]);
	function On(e) {
		let t = We.initialValue;
		return Array.isArray(e) && Array.isArray(t) ? !Je(e, t, (e, t) => ie(e, t, xe)) : e !== t;
	}
	Ke(Z, () => {
		X && Z !== "" && Z !== String(Bt) && ot(!0);
	}), Ke(J, () => {
		if (u !== "none" && (Be(Pt), Ue(On(J)), tt.change(J), K && !Ft && !ln)) {
			let e = O(J, I);
			Y !== e && xn(e, R(ke));
		}
	}), Ke(Y, () => {
		u === "none" && (Be(Pt), Ue(Y !== We.initialValue), tt.change(Y));
	}), Ke(w, () => {
		if (!K || Ft || ln || at) return;
		let e = O(J, I);
		Y !== e && xn(e, R(ke));
	});
	let kn = pe({
		open: $ ? !0 : X,
		onOpenChange: Sn,
		elements: {
			reference: ln ? on : sn,
			floating: rn
		}
	}), An, jn;
	$ || (An = x ? "grid" : "listbox", jn = X ? "true" : "false");
	let Mn = z.useMemo(() => {
		let e = sn?.tagName === "INPUT", t = sn == null || e, n = t || X, r = t ? {
			autoComplete: "off",
			spellCheck: "false",
			autoCorrect: "off",
			autoCapitalize: "none"
		} : {};
		return n && (r.role = "combobox", r["aria-expanded"] = jn, r["aria-haspopup"] = An, r["aria-controls"] = X ? an?.id : void 0, r["aria-autocomplete"] = Pe), {
			reference: r,
			floating: { role: "presentation" }
		};
	}, [
		sn,
		X,
		jn,
		An,
		an?.id,
		Pe
	]), Nn = ve(kn, {
		enabled: !v && !W && ae,
		event: "mousedown-only",
		toggle: !1,
		touchOpenDelay: ln ? 0 : 100,
		reason: Ce
	}), Pn = C(kn, {
		enabled: !v && !W && !$,
		outsidePressEvent: {
			mouse: "sloppy",
			touch: "intentional"
		},
		bubbles: $ ? !0 : void 0,
		outsidePress(e) {
			let t = be(e);
			return !L(on, t) && !L(Ot.current, t) && !L(Dt.current, t) && !L(cn, t);
		}
	}), Fn = _e(kn, {
		enabled: !v && !W,
		id: rt,
		listRef: mt,
		activeIndex: tn,
		selectedIndex: nn,
		virtual: !0,
		loopFocus: ge,
		allowEscape: ge && !q,
		focusItemOnOpen: at || u === "none" && !q ? !1 : "auto",
		focusItemOnHover: he,
		resetOnPointerLeave: !me,
		orientation: x ? "horizontal" : void 0,
		rtl: nt === "rtl",
		disabledIndices: f,
		grid: x ? st : void 0,
		onNavigate(e, t) {
			(t || X) && mn !== "ending" && bn(t ? {
				activeIndex: e,
				type: Tt.current ? "keyboard" : "pointer"
			} : { activeIndex: e });
		}
	}), In = z.useMemo(() => g(Fn.reference, { onKeyDown(e) {
		x && Q.state.activeIndex == null && (e.key === "ArrowLeft" || e.key === "ArrowRight") && e.preventBaseUIHandler();
	} }, Pn.reference, Nn.reference, Mn.reference), [
		Fn.reference,
		Pn.reference,
		Nn.reference,
		Mn.reference,
		x,
		Q
	]), Ln = z.useMemo(() => g(le, Fn.floating, Pn.floating, Mn.floating), [
		Fn.floating,
		Pn.floating,
		Mn.floating
	]), Rn = z.useMemo(() => {
		let e = Fn.item;
		return e ? {
			...e,
			onFocus: void 0
		} : h;
	}, [Fn.item]);
	ce(() => {
		Q.update({
			inline: Te,
			popupProps: Ln,
			inputProps: In,
			triggerProps: gn,
			itemProps: Rn,
			setOpen: Sn,
			setInputValue: xn,
			setSelectedValue: Cn,
			setIndices: bn,
			onItemHighlighted: $t,
			handleSelection: wn,
			forceMount: vn,
			requestSubmit: Tn
		});
	}), P(() => {
		Q.update({
			id: rt,
			selectedValue: J,
			open: X,
			mounted: fn,
			transitionStatus: mn,
			items: w,
			inline: Te,
			popupProps: Ln,
			inputProps: In,
			triggerProps: gn,
			openMethod: hn,
			itemProps: Rn,
			selectionMode: u,
			name: Pt,
			form: d,
			disabled: W,
			readOnly: v,
			required: y,
			grid: x,
			isGrouped: Ut,
			virtualized: we,
			onOpenChangeComplete: en,
			openOnInputClick: ae,
			itemToStringLabel: I,
			modal: Ae,
			autoHighlight: q,
			isItemEqualToValue: xe,
			submitOnItemClick: Le,
			hasInputValue: Ft,
			requestSubmit: Tn,
			inputOwnsFormValue: u === "none" && (Te || !Q.state.inputInsidePopup)
		});
	}, [
		Q,
		rt,
		J,
		X,
		fn,
		mn,
		w,
		Ln,
		In,
		Rn,
		hn,
		gn,
		u,
		Pt,
		W,
		v,
		y,
		tt,
		x,
		Ut,
		we,
		en,
		ae,
		I,
		Ae,
		xe,
		Le,
		Ft,
		Te,
		Tn,
		q,
		d
	]);
	let zn = m(b, tt.inputRef), Bn = z.useMemo(() => ({
		query: Z,
		hasItems: It,
		filteredItems: Yt,
		flatFilteredItems: Xt
	}), [
		Z,
		It,
		Yt,
		Xt
	]), Vn = z.useMemo(() => Array.isArray(Zt) ? "" : M(Zt, ye), [Zt, ye]), Hn = G && Array.isArray(J) && J.length > 0, Un = G || u === "none" && un ? void 0 : Pt, Wn = z.useMemo(() => !G || !Array.isArray(J) || !Pt ? null : J.map((e) => {
		let t = M(e, ye);
		return /*#__PURE__*/ (0, U.jsx)("input", {
			type: "hidden",
			form: d,
			name: Pt,
			value: t,
			disabled: W
		}, t);
	}), [
		G,
		J,
		d,
		Pt,
		ye,
		W
	]), Gn = /*#__PURE__*/ (0, U.jsxs)(z.Fragment, { children: [
		e.children,
		/*#__PURE__*/ (0, U.jsx)("input", {
			...tt.getValidationProps(W, {
				onFocus() {
					ln ? on?.focus() : (H.current || on)?.focus();
				},
				onChange(e) {
					if (e.nativeEvent.defaultPrevented || W || v) return;
					let t = e.currentTarget.value, n = t.toLowerCase(), r = R(ke, e.nativeEvent), i = () => Mt.current.findIndex((e) => M(e, ye).toLowerCase() === n || O(e, I).toLowerCase() === n);
					function a() {
						if (G) return;
						if (u === "none") {
							xn(t, r);
							return;
						}
						let e = i();
						e === -1 && (e = Mt.current.findIndex((e, t) => {
							let r = ht.current[t];
							return r != null && r.toLowerCase() === n;
						}));
						let a = e === -1 ? void 0 : Mt.current[e];
						a != null && Cn?.(a, r);
					}
					K && (vn(), w && i() === -1 && Q.set("forceMounted", !0)), queueMicrotask(a);
				}
			}),
			id: rt && Un == null ? `${rt}-hidden-input` : void 0,
			form: d,
			name: Un,
			autoComplete: Fe,
			disabled: W,
			required: y && !Hn,
			readOnly: v,
			value: Vn,
			ref: zn,
			style: Un ? de : fe,
			tabIndex: -1,
			"aria-hidden": !0,
			suppressHydrationWarning: !0
		}),
		Wn
	] });
	return /*#__PURE__*/ (0, U.jsx)(ct.Provider, {
		value: Q,
		children: /*#__PURE__*/ (0, U.jsx)(lt.Provider, {
			value: kn,
			children: /*#__PURE__*/ (0, U.jsx)(dt.Provider, {
				value: It,
				children: /*#__PURE__*/ (0, U.jsx)(ut.Provider, {
					value: Bn,
					children: /*#__PURE__*/ (0, U.jsx)(ft.Provider, {
						value: Y,
						children: Gn
					})
				})
			})
		})
	});
}
// node_modules/@base-ui/react/combobox/utils/stateAttributesMapping.mjs
var Tt = {
	...x,
	...Fe,
	popupSide: (e) => e ? { "data-popup-side": e } : null,
	listEmpty: (e) => e ? { "data-list-empty": "" } : null
}, Et = 2, Dt = /*#__PURE__*/ z.forwardRef(function(e, t) {
	let { render: n, className: r, nativeButton: i = !0, disabled: a = !1, id: o, style: s, ...c } = e, { state: l, disabled: ee, setTouched: te, setFocused: d, validationMode: f, validation: p } = Re(), { labelId: m } = Le(), h = B(), { filteredItems: g } = mt(), _ = E(h, V.selectionMode), v = E(h, V.disabled), y = E(h, V.readOnly), b = E(h, V.required), x = E(h, V.mounted), S = E(h, V.popupSide), C = E(h, V.positionerElement), w = E(h, V.listElement), T = E(h, V.popupId), D = E(h, V.triggerProps), O = E(h, V.triggerElement), k = E(h, V.inputInsidePopup), re = E(h, V.id), A = E(h, V.labelId), j = E(h, V.open), M = E(h, V.selectedValue), ie = E(h, V.activeIndex), ae = E(h, V.selectedIndex), oe = E(h, V.hasSelectedValue), N = pt(), se = ht(), P = Xe(), ce = ee || v || a, le = g.length === 0, ue = x && C ? S : null;
	He({ id: k ? o : void 0 });
	let de = k ? o ?? re : o, fe = qe(m, A), pe;
	j && k ? pe = T ?? H(re) : j && (pe = w?.id);
	let me = z.useRef("");
	function he(e) {
		me.current = e.pointerType;
	}
	let ge = N.useState("domReferenceElement");
	z.useEffect(() => {
		k && O && O !== ge && N.set("domReferenceElement", O);
	}, [
		O,
		ge,
		N,
		k
	]);
	let { reference: _e } = I(N, {
		enabled: !j && !y && !v && _ === "single",
		listRef: h.state.labelsRef,
		activeIndex: ie,
		selectedIndex: ae,
		onMatch(e) {
			let t = h.state.valuesRef.current[e];
			t !== void 0 && h.state.setSelectedValue(t, R("none"));
		}
	}), { reference: ye } = ve(N, {
		enabled: !y && !v,
		event: "mousedown"
	}), { buttonRef: xe, getButtonProps: Se } = Qe({
		native: i,
		disabled: ce
	}), Ce = {
		...l,
		open: j,
		disabled: ce,
		popupSide: ue,
		listEmpty: le,
		placeholder: _ !== "none" && !oe
	}, we = F((e) => {
		h.set("triggerElement", e);
	});
	return ne("button", e, {
		ref: [
			t,
			xe,
			we
		],
		state: Ce,
		props: [
			D,
			ye,
			_e,
			{
				id: de,
				tabIndex: k ? 0 : -1,
				role: k ? "combobox" : void 0,
				"aria-expanded": j ? "true" : "false",
				"aria-haspopup": k ? "dialog" : "listbox",
				"aria-controls": pe,
				"aria-required": k && b || void 0,
				"aria-labelledby": fe,
				onPointerDown: he,
				onPointerEnter: he,
				onFocus() {
					d(!0), ce || y || P.start(0, h.state.forceMount);
				},
				onBlur(e) {
					if (!L(C, e.relatedTarget) && (te(!0), d(!1), f === "onBlur")) {
						let e = _ === "none" ? se : M;
						p.commit(e);
					}
				},
				onMouseDown(e) {
					if (ce || y || (k || N.set("domReferenceElement", e.currentTarget), h.state.forceMount(), me.current !== "touch" && (h.state.inputRef.current?.focus(), k || e.preventDefault()), j)) return;
					let t = Ze(e.currentTarget);
					function n(e) {
						if (!O) return;
						let t = be(e), n = h.state.positionerElement, r = h.state.listElement;
						if (L(O, t) || L(n, t) || L(r, t) || t === O) return;
						let i = $e(O), a = e.clientX >= i.left - Et && e.clientX <= i.right + Et, o = e.clientY >= i.top - Et && e.clientY <= i.bottom + Et;
						a && o || h.state.setOpen(!1, R("cancel-open", e));
					}
					k && t.addEventListener("mouseup", n, { once: !0 });
				},
				onKeyDown(e) {
					ce || y || (e.key === "ArrowDown" || e.key === "ArrowUp") && (u(e), h.state.setOpen(!0, R(Ae, e.nativeEvent)), h.state.inputRef.current?.focus());
				}
			},
			p ? p.getValidationProps(ce, c) : c,
			Se
		],
		stateAttributesMapping: Tt
	});
}), Ot = /*#__PURE__*/ z.createContext(void 0);
function kt() {
	return z.useContext(Ot);
}
// node_modules/@base-ui/react/combobox/positioner/ComboboxPositionerContext.mjs
var At = /*#__PURE__*/ z.createContext(void 0);
function jt(e) {
	let t = z.useContext(At);
	if (t === void 0 && !e) throw Error(v(21));
	return t;
}
// node_modules/@base-ui/react/combobox/utils/ComboboxInternalDismissButton.mjs
var Mt = /*#__PURE__*/ z.forwardRef(function(e, t) {
	let n = B(), { buttonRef: r, getButtonProps: i } = Qe({ native: !1 }), a = m(t, r);
	function o(e) {
		n.state.setOpen(!1, R(xe, e.nativeEvent, e.currentTarget));
	}
	let s = i({ onClick: o });
	return /*#__PURE__*/ (0, U.jsx)("span", {
		ref: a,
		...s,
		"aria-label": "Dismiss",
		tabIndex: void 0,
		style: de
	});
}), Nt = /*#__PURE__*/ z.forwardRef(function(e, t) {
	let { render: n, className: r, disabled: i = !1, id: a, style: o, ...s } = e, { state: c, disabled: l, setTouched: te, setFocused: d, validationMode: f, validation: p } = Re(), { labelId: m } = Le(), h = kt(), g = !!jt(!0), _ = B(), { filteredItems: v } = mt(), y = ht(), b = Ye(), x = E(_, V.required), S = E(_, V.disabled), C = E(_, V.readOnly), w = E(_, V.name), T = E(_, V.form), D = E(_, V.selectionMode), O = E(_, V.autoHighlight), k = E(_, V.inputProps), re = E(_, V.triggerProps), A = E(_, V.open), j = E(_, V.mounted), M = E(_, V.selectedValue), ie = E(_, V.popupSide), ae = E(_, V.positionerElement), oe = E(_, V.id), N = E(_, V.inline), se = E(_, V.modal), P = !!O, ce = j && ae ? ie : null, le = l || S || i, ue = v.length === 0, de = g || N, fe = !de || se, pe = et(a ?? (de ? void 0 : oe)), me = qe(m, void 0), he = g ? Be : c, [ge, _e] = z.useState(null), I = z.useRef(!1), ve = z.useRef(null), L = z.useRef(!1), be = D === "none" && !g, xe = F((e) => {
		let t = g || _.state.inline;
		t && !_.state.hasInputValue && _.state.setInputValue("", R(ke)), _.update({
			inputElement: e,
			inputInsidePopup: t,
			inputOwnsFormValue: be
		});
	}), Se = g || !p ? s : p.getValidationProps(le, s), Ce = {
		...he,
		open: A,
		disabled: le,
		readOnly: C,
		popupSide: ce,
		listEmpty: ue
	};
	function we(e) {
		if (!h) return;
		let t, { highlightedChipIndex: n } = h, r = h.chipsRef.current.length, i = b === "rtl", a = i ? "ArrowRight" : "ArrowLeft", o = i ? "ArrowLeft" : "ArrowRight";
		if (n !== void 0) {
			if (e.key === a) e.preventDefault(), t = n > 0 ? n - 1 : void 0;
			else if (e.key === o) e.preventDefault(), t = n < r - 1 ? n + 1 : void 0;
			else if (e.key === "Backspace" || e.key === "Delete") {
				e.preventDefault();
				let r = n >= M.length - 1 ? M.length - 2 : n;
				t = r >= 0 ? r : void 0, _.state.setIndices({
					activeIndex: null,
					selectedIndex: null,
					type: "keyboard"
				});
			}
			return t;
		}
		return e.key === a && (e.currentTarget.selectionStart ?? 0) === 0 && M.length > 0 ? (e.preventDefault(), t = r > 0 ? r - 1 : void 0) : e.key === "Backspace" && e.currentTarget.value === "" && M.length > 0 && (_.state.setIndices({
			activeIndex: null,
			selectedIndex: null,
			type: "keyboard"
		}), e.preventDefault()), t;
	}
	let De = ne("input", e, {
		state: Ce,
		ref: [
			t,
			_.state.inputRef,
			xe
		],
		props: [
			k,
			re,
			{
				type: "text",
				value: e.value ?? ge ?? y,
				"aria-readonly": C || void 0,
				"aria-required": x || void 0,
				"aria-labelledby": me,
				disabled: le,
				readOnly: C,
				required: D === "none" ? x : void 0,
				form: T,
				...be && w && { name: w },
				id: pe,
				onFocus() {
					if (d(!0), !N || !L.current) return;
					L.current = !1;
					let e = ve.current;
					e != null && Object.hasOwn(_.state.valuesRef.current, e) && _.state.setIndices({ activeIndex: e });
				},
				onBlur() {
					te(!0), d(!1);
					let e = _.state.activeIndex;
					if (N && e !== null && O !== "always" && (ve.current = e, L.current = !0, _.state.setIndices({ activeIndex: null })), f === "onBlur") {
						let e = D === "none" ? y : M;
						p.commit(e);
					}
				},
				onCompositionStart(e) {
					ee || (I.current = !0, _e(e.currentTarget.value));
				},
				onCompositionEnd(e) {
					I.current = !1;
					let t = e.currentTarget.value;
					_e(null), _.state.setInputValue(t, R(Oe, e.nativeEvent));
				},
				onChange(e) {
					let t = e.nativeEvent.inputType, n = !t || t === "insertReplacementText", r = I.current || !n;
					if (I.current) {
						let t = e.currentTarget.value;
						_e(t), t === "" && !_.state.openOnInputClick && !_.state.inputInsidePopup && _.state.setOpen(!1, R(Ee, e.nativeEvent));
						let n = t.trim(), i = P && n !== "";
						!C && !le && n && r && (_.state.setOpen(!0, R(Oe, e.nativeEvent)), P || _.state.setIndices({
							activeIndex: null,
							selectedIndex: null,
							type: _.state.keyboardActiveRef.current ? "keyboard" : "pointer"
						})), A && _.state.activeIndex !== null && !i && _.state.setIndices({
							activeIndex: null,
							selectedIndex: null,
							type: _.state.keyboardActiveRef.current ? "keyboard" : "pointer"
						});
						return;
					}
					let i = R(Oe, e.nativeEvent);
					if (_.state.setInputValue(e.currentTarget.value, i), i.isCanceled) return;
					let a = e.currentTarget.value === "", o = R(Ee, e.nativeEvent);
					a && !_.state.inputInsidePopup && (D === "single" && _.state.setSelectedValue(null, o), _.state.openOnInputClick || _.state.setOpen(!1, o));
					let s = e.currentTarget.value.trim();
					!C && !le && s && r && (_.state.setOpen(!0, R(Oe, e.nativeEvent)), P || _.state.setIndices({
						activeIndex: null,
						selectedIndex: null,
						type: _.state.keyboardActiveRef.current ? "keyboard" : "pointer"
					})), A && _.state.activeIndex !== null && !P && _.state.setIndices({
						activeIndex: null,
						selectedIndex: null,
						type: _.state.keyboardActiveRef.current ? "keyboard" : "pointer"
					});
				},
				onKeyDown(e) {
					if (le || C || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;
					_.state.keyboardActiveRef.current = !0;
					let t = e.currentTarget, n = t.scrollWidth - t.clientWidth, r = b === "rtl";
					if (e.key === "Home") {
						u(e);
						let n = ye && r ? t.value.length : 0;
						t.setSelectionRange(n, n), t.scrollLeft = 0;
						return;
					}
					if (e.key === "End") {
						u(e);
						let i = ye && r ? 0 : t.value.length;
						t.setSelectionRange(i, i), t.scrollLeft = r ? -n : n;
						return;
					}
					if (!j && e.key === "Escape") {
						let t = D === "multiple" && Array.isArray(M) ? M.length === 0 : M === null, n = R(Te, e.nativeEvent), r = D === "multiple" ? [] : null;
						_.state.setInputValue("", n), _.state.setSelectedValue(r, n), t || _.state.inline || n.isPropagationAllowed || e.stopPropagation();
						return;
					}
					if (h && e.key === "Backspace" && t.value === "" && h.highlightedChipIndex === void 0 && Array.isArray(M) && M.length > 0) {
						let t = h.chipsRef.current.length, n = t > 0 ? t - 1 : M.length - 1, r = M.filter((e, t) => t !== n);
						_.state.setIndices({
							activeIndex: null,
							selectedIndex: null,
							type: _.state.keyboardActiveRef.current ? "keyboard" : "pointer"
						}), _.state.setSelectedValue(r, R(ke, e.nativeEvent));
						return;
					}
					let i = h?.highlightedChipIndex !== void 0, a = we(e);
					if (h?.setHighlightedChipIndex(a), a === void 0 ? i && _.state.inputRef.current?.focus() : h?.chipsRef.current[a]?.focus(), e.which !== 229 && e.key === "Enter" && A) {
						let t = _.state.activeIndex, n = e.nativeEvent;
						if (t === null) {
							if (N) return;
							_.state.setOpen(!1, R(ke, n));
							return;
						}
						u(e);
						let r = _.state.listRef.current[t];
						r && (_.state.selectionEventRef.current = n, r.click(), _.state.selectionEventRef.current = null);
					}
				},
				onPointerMove() {
					_.state.keyboardActiveRef.current = !1;
				},
				onPointerDown() {
					_.state.keyboardActiveRef.current = !1;
				}
			},
			Se
		],
		stateAttributesMapping: Tt
	}), Ae = g ? /*#__PURE__*/ (0, U.jsx)(Pe.Provider, {
		value: Ie,
		children: De
	}) : De;
	return /*#__PURE__*/ (0, U.jsxs)(z.Fragment, { children: [A && fe && /*#__PURE__*/ (0, U.jsx)(Mt, { ref: _.state.startDismissRef }), Ae] });
}), W = {
	...je,
	...b
}, Pt = /*#__PURE__*/ z.forwardRef(function(e, t) {
	let { render: n, className: r, disabled: i = !1, nativeButton: a = !0, keepMounted: o = !1, style: s, ...c } = e, { disabled: l } = Re(), u = B(), ee = E(u, V.selectionMode), te = E(u, V.disabled), d = E(u, V.readOnly), f = E(u, V.open), p = E(u, V.selectedValue), m = E(u, V.hasSelectionChips), h = ht(), g = !1;
	g = ee === "none" ? h !== "" : ee === "single" ? p != null : m;
	let _ = l || te || i, { buttonRef: v, getButtonProps: y } = Qe({
		native: a,
		disabled: _
	}), { mounted: b, transitionStatus: x, setMounted: S } = Me(g), C = {
		disabled: _,
		visible: g,
		open: f,
		transitionStatus: x
	};
	Ne({
		open: g,
		ref: u.state.clearRef,
		onComplete() {
			g || S(!1);
		}
	});
	let w = ne("button", e, {
		state: C,
		ref: [
			t,
			v,
			u.state.clearRef
		],
		props: [
			{
				tabIndex: -1,
				children: "x",
				onMouseDown(e) {
					e.preventDefault();
				},
				onClick(e) {
					if (_ || d) return;
					let t = u.state.keyboardActiveRef;
					u.state.setInputValue("", R(we, e.nativeEvent)), ee === "none" ? u.state.setIndices({
						activeIndex: null,
						type: t.current ? "keyboard" : "pointer"
					}) : (u.state.setSelectedValue(Array.isArray(p) ? [] : null, R(we, e.nativeEvent)), u.state.setIndices({
						activeIndex: null,
						selectedIndex: null,
						type: t.current ? "keyboard" : "pointer"
					})), u.state.inputRef.current?.focus();
				}
			},
			c,
			y
		],
		stateAttributesMapping: W
	});
	return o || b ? w : null;
}), G = /*#__PURE__*/ z.createContext(null);
function K() {
	return z.useContext(G);
}
// node_modules/@base-ui/react/combobox/collection/ComboboxCollection.mjs
function Ft(e) {
	let { children: t } = e, { filteredItems: n } = mt(), r = K(), i = r ? r.items : n;
	return i ? /*#__PURE__*/ (0, U.jsx)(z.Fragment, { children: i.map(t) }) : null;
}
// node_modules/@base-ui/react/combobox/list/ComboboxList.mjs
var It = /*#__PURE__*/ z.forwardRef(function(e, t) {
	var n;
	let { render: r, className: i, style: a, children: o, ...s } = e, c = B(), l = pt(), ee = !!jt(!0), { filteredItems: te, hasItems: d } = mt(), f = E(c, V.selectionMode), p = E(c, V.grid), m = E(c, V.popupProps), h = E(c, V.virtualized), g = E(c, V.forceMounted), _ = f === "multiple", v = te.length === 0, y = F((e) => {
		c.set("positionerElement", e);
	}), b = F((e) => {
		c.set("listElement", e);
	}), x = z.useMemo(() => typeof o == "function" ? n ||= /*#__PURE__*/ (0, U.jsx)(Ft, { children: o }) : o, [o]), S = { empty: v }, C = l.useState("floatingId"), w = ne("div", e, {
		state: S,
		ref: [
			t,
			b,
			ee ? null : y
		],
		props: [
			m,
			{
				children: x,
				tabIndex: -1,
				id: C,
				role: p ? "grid" : "listbox",
				"aria-multiselectable": _ ? "true" : void 0,
				onKeyDown(e) {
					if (!(c.state.disabled || c.state.readOnly) && e.key === "Enter") {
						let t = c.state.activeIndex;
						if (t == null) return;
						u(e);
						let n = e.nativeEvent, r = c.state.listRef.current[t];
						r && (c.state.selectionEventRef.current = n, r.click(), c.state.selectionEventRef.current = null);
					}
				},
				onKeyDownCapture() {
					c.state.keyboardActiveRef.current = !0;
				},
				onPointerMoveCapture() {
					c.state.keyboardActiveRef.current = !1;
				}
			},
			s
		]
	});
	if (h) return w;
	let T = d && !g ? void 0 : c.state.labelsRef;
	return /*#__PURE__*/ (0, U.jsx)(tt, {
		elementsRef: c.state.listRef,
		labelsRef: T,
		children: w
	});
}), Lt = "⁠";
function q(e) {
	let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT), n = null;
	for (; t.nextNode();) {
		let e = t.currentNode;
		e.nodeValue !== "" && (n = e);
	}
	return n;
}
function J() {
	let e = Xe(), t = z.useRef(null);
	return z.useEffect(() => {
		if (l) return;
		let n = t.current;
		if (n == null) return;
		let r = q(n);
		if (r == null) return;
		let i = r.nodeValue ?? "", a = `${i}${Lt}`;
		return r.nodeValue = a, e.start(200, () => {
			r.nodeValue === a && (r.nodeValue = i);
		}), () => {
			e.clear(), r.nodeValue === a && (r.nodeValue = i);
		};
	}, [t, e]), t;
}
// node_modules/@base-ui/react/combobox/portal/ComboboxPortalContext.mjs
var Rt = /*#__PURE__*/ z.createContext(void 0);
function zt() {
	let e = z.useContext(Rt);
	if (e === void 0) throw Error(v(20));
	return e;
}
// node_modules/@base-ui/react/combobox/portal/ComboboxPortal.mjs
var Bt = /*#__PURE__*/ z.forwardRef(function(e, t) {
	let { keepMounted: n = !1, ...r } = e, i = B(), a = E(i, V.mounted), o = E(i, V.forceMounted);
	return a || n || o ? /*#__PURE__*/ (0, U.jsx)(Rt.Provider, {
		value: n,
		children: /*#__PURE__*/ (0, U.jsx)(D, {
			ref: t,
			...r
		})
	}) : null;
}), Y = /*#__PURE__*/ z.forwardRef(function(e, t) {
	let { render: n, className: r, anchor: i, positionMethod: a = "absolute", side: o = "bottom", align: s = "center", sideOffset: c = 0, alignOffset: l = 0, collisionBoundary: u = "clipping-ancestors", collisionPadding: ee = 5, arrowPadding: te = 5, sticky: d = !1, disableAnchorTracking: f = !1, collisionAvoidance: p = y, style: m, ...h } = e, g = B(), { filteredItems: _ } = mt(), ne = pt(), v = zt(), b = E(g, V.modal), x = E(g, V.open), S = E(g, V.mounted), C = E(g, V.openMethod), w = E(g, V.positionerElement), T = E(g, V.triggerElement), D = E(g, V.inputElement), O = E(g, V.inputGroupElement), k = E(g, V.inputInsidePopup), re = E(g, V.transitionStatus), A = _.length === 0, j = he({
		anchor: i ?? (k ? T : O ?? D),
		floatingRootContext: ne,
		positionMethod: a,
		mounted: S,
		side: o,
		sideOffset: c,
		align: s,
		alignOffset: l,
		arrowPadding: te,
		collisionBoundary: u,
		collisionPadding: ee,
		sticky: d,
		disableAnchorTracking: f,
		keepMounted: v,
		collisionAvoidance: p,
		lazyFlip: !0
	});
	rt(x && b, C === "touch", w, T);
	let M = {
		open: x,
		side: j.side,
		align: j.align,
		anchorHidden: j.anchorHidden,
		empty: A
	};
	P(() => {
		g.set("popupSide", j.side);
	}, [g, j.side]);
	let ie = F((e) => {
		g.set("positionerElement", e);
	}), ae = ge(e, M, {
		styles: j.positionerStyles,
		transitionStatus: re,
		props: h,
		refs: [t, ie],
		hidden: !S,
		inert: !x
	});
	return /*#__PURE__*/ (0, U.jsxs)(At.Provider, {
		value: j,
		children: [S && b && /*#__PURE__*/ (0, U.jsx)(We, {
			inert: nt(!x),
			cutout: O ?? D ?? T
		}), ae]
	});
}), Vt = {
	...T,
	...je
}, X = /*#__PURE__*/ z.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, initialFocus: a, finalFocus: o, ...s } = e, c = B(), l = jt(), u = pt(), { filteredItems: ee } = mt(), te = E(c, V.mounted), d = E(c, V.open), f = E(c, V.openMethod), p = E(c, V.transitionStatus), m = E(c, V.inputInsidePopup), h = E(c, V.inputElement), g = E(c, V.modal), _ = E(c, V.id), v = ee.length === 0, y = s.id ?? (m ? H(_) : void 0);
	P(() => (c.set("popupId", c.state.popupRef.current?.id || y), () => {
		c.set("popupId", void 0);
	}), [c, y]), Ne({
		open: d,
		ref: c.state.popupRef,
		onComplete() {
			d && c.state.onOpenChangeComplete(!0);
		}
	});
	let b = {
		open: d,
		side: l.side,
		align: l.align,
		anchorHidden: l.anchorHidden,
		transitionStatus: p,
		empty: v
	}, x = ne("div", e, {
		state: b,
		ref: [t, c.state.popupRef],
		props: [
			{
				id: y,
				role: m ? "dialog" : "presentation",
				tabIndex: -1,
				onFocus(e) {
					let t = be(e.nativeEvent);
					f !== "touch" && (L(c.state.listElement, t) || t === e.currentTarget) && c.state.inputRef.current?.focus();
				}
			},
			me(p),
			s
		],
		stateAttributesMapping: Vt
	}), S = a === void 0 ? m ? (e) => e === "touch" ? c.state.popupRef.current : h : !1 : a, C;
	C = o ?? (m ? void 0 : !1);
	let w = !m || g;
	return /*#__PURE__*/ (0, U.jsx)(Ue, {
		context: u,
		disabled: !te,
		modal: w,
		openInteractionType: f,
		initialFocus: S,
		returnFocus: C,
		getInsideElements: () => [c.state.startDismissRef.current, c.state.endDismissRef.current],
		children: /*#__PURE__*/ (0, U.jsxs)(z.Fragment, { children: [x, w && /*#__PURE__*/ (0, U.jsx)(Mt, { ref: c.state.endDismissRef })] })
	});
}), Ht = /*#__PURE__*/ z.createContext(void 0);
function Ut() {
	let e = z.useContext(Ht);
	if (!e) throw Error(v(19));
	return e;
}
// node_modules/@base-ui/react/combobox/row/ComboboxRowContext.mjs
var Z = /*#__PURE__*/ z.createContext(!1);
function Wt() {
	return z.useContext(Z);
}
// node_modules/@base-ui/react/combobox/item/ComboboxItem.mjs
var Gt = /* @__PURE__ */ e(it(), 1);
function Kt(e) {
	let { componentProps: t, forwardedRef: n, virtualized: r, indexFromFilter: i } = e, { render: a, className: o, style: s, value: c = null, index: l, disabled: u = !1, nativeButton: ee = !1, ...te } = t, d = z.useRef(!1), f = z.useRef(null), p = at({
		index: l,
		textRef: f,
		indexGuessBehavior: ot.GuessFromOrder
	}), m = B(), h = Wt(), g = gt(), _ = E(m, V.open), v = E(m, V.selectionMode), y = E(m, V.readOnly), b = E(m, V.isItemEqualToValue), x = v !== "none", S = l ?? (r ? i ?? -1 : p.index), C = p.index !== -1, w = E(m, V.id), T = E(m, V.isActive, S), D = E(m, V.isSelected, c), O = E(m, V.itemProps), k = z.useRef(null), re = w != null && C ? `${w}-${S}` : void 0, A = D && x;
	P(() => {
		if (!C || !r && l == null) return;
		let e = m.state.listRef.current;
		return e[S] = k.current, () => {
			delete e[S];
		};
	}, [
		C,
		r,
		S,
		l,
		m
	]), P(() => {
		if (!C || g) return;
		let e = m.state.valuesRef.current;
		return e[S] = c, v !== "none" && m.state.allValuesRef.current.push(c), () => {
			delete e[S];
		};
	}, [
		C,
		g,
		S,
		c,
		m,
		v
	]), P(() => {
		if (!_) {
			d.current = !1;
			return;
		}
		if (!C || g) return;
		let e = m.state.selectedValue, t = Array.isArray(e) ? e[e.length - 1] : e;
		ie(c, t, b) && m.set("selectedIndex", S);
	}, [
		C,
		g,
		_,
		m,
		S,
		c,
		b
	]);
	let { getButtonProps: j, buttonRef: M } = Qe({
		disabled: u,
		focusableWhenDisabled: !0,
		native: ee,
		composite: !0
	}), ae = {
		disabled: u,
		selected: A,
		highlighted: T
	};
	function oe(e) {
		function t() {
			m.state.handleSelection(e, c);
		}
		m.state.submitOnItemClick ? (Gt.flushSync(t), m.state.requestSubmit()) : t();
	}
	let N = {
		id: re,
		role: h ? "gridcell" : "option",
		"aria-selected": x ? A : void 0,
		tabIndex: void 0,
		onPointerDownCapture(e) {
			d.current = !0, e.preventDefault();
		},
		onMouseDown(e) {
			e.preventDefault();
		},
		onClick(e) {
			u || y || oe(e.nativeEvent);
		},
		onMouseUp(e) {
			let t = d.current;
			d.current = !1, u || y || e.button !== 0 || t || !T || oe(e.nativeEvent);
		}
	}, se = ne("div", t, {
		ref: [
			M,
			n,
			p.ref,
			k
		],
		state: ae,
		props: [
			O,
			N,
			te,
			j
		]
	}), ce = z.useMemo(() => ({
		selected: A,
		textRef: f
	}), [A, f]);
	return /*#__PURE__*/ (0, U.jsx)(Ht.Provider, {
		value: ce,
		children: se
	});
}
function qt(e) {
	let { componentProps: t, forwardedRef: n } = e, r = B(), i = E(r, V.isItemEqualToValue), { flatFilteredItems: a } = mt(), o = A(a, t.value ?? null, i);
	return /*#__PURE__*/ (0, U.jsx)(Kt, {
		componentProps: t,
		forwardedRef: n,
		virtualized: !0,
		indexFromFilter: o
	});
}
var Jt = /*#__PURE__*/ z.memo(/*#__PURE__*/ z.forwardRef(function(e, t) {
	let n = B(), r = E(n, V.virtualized);
	return r && e.index == null ? /*#__PURE__*/ (0, U.jsx)(qt, {
		componentProps: e,
		forwardedRef: t
	}) : /*#__PURE__*/ (0, U.jsx)(Kt, {
		componentProps: e,
		forwardedRef: t,
		virtualized: r,
		indexFromFilter: void 0
	});
})), Yt = /*#__PURE__*/ z.forwardRef(function(e, t) {
	let { render: n, className: r, style: i, children: a, ...o } = e, { filteredItems: s } = mt(), c = B(), l = J(), u = s.length === 0 ? a : null;
	return ne("div", e, {
		ref: [
			t,
			c.state.emptyRef,
			l
		],
		props: [{
			children: u,
			role: "status",
			"aria-live": "polite",
			"aria-atomic": !0
		}, o]
	});
});
// node_modules/@base-ui/react/combobox/root/ComboboxRoot.mjs
function Xt(e) {
	let { multiple: t = !1, defaultValue: n, value: r, onValueChange: i, autoComplete: a, ...o } = e;
	return /*#__PURE__*/ (0, U.jsx)(wt, {
		...o,
		selectionMode: t ? "multiple" : "single",
		selectedValue: r,
		defaultSelectedValue: n,
		onSelectedValueChange: i,
		formAutoComplete: a
	});
}
// node_modules/@base-ui/react/combobox/item-indicator/ComboboxItemIndicator.mjs
var Q = /*#__PURE__*/ z.forwardRef(function(e, t) {
	let n = e.keepMounted ?? !1, { selected: r } = Ut();
	return n || r ? /*#__PURE__*/ (0, U.jsx)(Zt, {
		...e,
		ref: t
	}) : null;
}), Zt = /*#__PURE__*/ z.memo(/*#__PURE__*/ z.forwardRef((e, t) => {
	let { render: n, className: r, style: i, keepMounted: a, ...o } = e, { selected: s } = Ut(), c = z.useRef(null), { transitionStatus: l, setMounted: u } = Me(s), ee = ne("span", e, {
		ref: [t, c],
		state: {
			selected: s,
			transitionStatus: l
		},
		props: [{
			"aria-hidden": !0,
			children: "✔️"
		}, o],
		stateAttributesMapping: je
	});
	return Ne({
		open: s,
		ref: c,
		onComplete() {
			s || u(!1);
		}
	}), ee;
})), Qt = Xt;
function $t({ className: e, children: t, ...r }) {
	return /* @__PURE__ */ (0, U.jsxs)(Dt, {
		"data-slot": "combobox-trigger",
		className: n("cn-combobox-trigger", e),
		...r,
		children: [t, /* @__PURE__ */ (0, U.jsx)(s, {
			lucide: "ChevronDownIcon",
			tabler: "IconChevronDown",
			hugeicons: "ArrowDown01Icon",
			phosphor: "CaretDownIcon",
			remixicon: "RiArrowDownSLine",
			className: "cn-combobox-trigger-icon pointer-events-none"
		})]
	});
}
function en({ className: e, ...t }) {
	return /* @__PURE__ */ (0, U.jsx)(Pt, {
		"data-slot": "combobox-clear",
		render: /* @__PURE__ */ (0, U.jsx)(a, {
			variant: "ghost",
			size: "icon-xs"
		}),
		className: n("cn-combobox-clear", e),
		...t,
		children: /* @__PURE__ */ (0, U.jsx)(s, {
			lucide: "XIcon",
			tabler: "IconX",
			hugeicons: "Cancel01Icon",
			phosphor: "XIcon",
			remixicon: "RiCloseLine",
			className: "cn-combobox-clear-icon pointer-events-none"
		})
	});
}
function tn({ className: e, children: t, disabled: s = !1, showTrigger: c = !0, showClear: l = !1, ...u }) {
	return /* @__PURE__ */ (0, U.jsxs)(o, {
		className: n("cn-combobox-input w-auto", e),
		children: [
			/* @__PURE__ */ (0, U.jsx)(Nt, {
				render: /* @__PURE__ */ (0, U.jsx)(r, { disabled: s }),
				...u
			}),
			/* @__PURE__ */ (0, U.jsxs)(i, {
				align: "inline-end",
				children: [c && /* @__PURE__ */ (0, U.jsx)(a, {
					size: "icon-xs",
					variant: "ghost",
					render: /* @__PURE__ */ (0, U.jsx)($t, {}),
					"data-slot": "input-group-button",
					className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
					disabled: s
				}), l && /* @__PURE__ */ (0, U.jsx)(en, { disabled: s })]
			}),
			t
		]
	});
}
function nn({ className: e, side: t = "bottom", sideOffset: r = 6, align: i = "start", alignOffset: a = 0, anchor: o, ...s }) {
	return /* @__PURE__ */ (0, U.jsx)(Bt, { children: /* @__PURE__ */ (0, U.jsx)(Y, {
		side: t,
		sideOffset: r,
		align: i,
		alignOffset: a,
		anchor: o,
		className: "isolate z-50",
		children: /* @__PURE__ */ (0, U.jsx)(X, {
			"data-slot": "combobox-content",
			"data-chips": !!o,
			className: n("cn-combobox-content cn-combobox-content-logical cn-menu-target cn-menu-translucent group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) data-[chips=true]:min-w-(--anchor-width)", e),
			...s
		})
	}) });
}
function rn({ className: e, ...t }) {
	return /* @__PURE__ */ (0, U.jsx)(It, {
		"data-slot": "combobox-list",
		className: n("cn-combobox-list overflow-y-auto overscroll-contain", e),
		...t
	});
}
function an({ className: e, children: t, ...r }) {
	return /* @__PURE__ */ (0, U.jsxs)(Jt, {
		"data-slot": "combobox-item",
		className: n("cn-combobox-item relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", e),
		...r,
		children: [t, /* @__PURE__ */ (0, U.jsx)(Q, {
			render: /* @__PURE__ */ (0, U.jsx)("span", { className: "cn-combobox-item-indicator" }),
			children: /* @__PURE__ */ (0, U.jsx)(s, {
				lucide: "CheckIcon",
				tabler: "IconCheck",
				hugeicons: "Tick02Icon",
				phosphor: "CheckIcon",
				remixicon: "RiCheckLine",
				className: "cn-combobox-item-indicator-icon pointer-events-none"
			})
		})]
	});
}
function on({ className: e, ...t }) {
	return /* @__PURE__ */ (0, U.jsx)(Yt, {
		"data-slot": "combobox-empty",
		className: n("cn-combobox-empty", e),
		...t
	});
}
// upstream/examples/base/combobox-demo.tsx
var sn = [
	"Next.js",
	"SvelteKit",
	"Nuxt.js",
	"Remix",
	"Astro"
];
function cn() {
	return /* @__PURE__ */ (0, U.jsxs)(Qt, {
		items: sn,
		children: [/* @__PURE__ */ (0, U.jsx)(tn, { placeholder: "Select a framework" }), /* @__PURE__ */ (0, U.jsxs)(nn, { children: [/* @__PURE__ */ (0, U.jsx)(on, { children: "No items found." }), /* @__PURE__ */ (0, U.jsx)(rn, { children: (e) => /* @__PURE__ */ (0, U.jsx)(an, {
			value: e,
			children: e
		}, e) })] })]
	});
}
export { cn as default };
