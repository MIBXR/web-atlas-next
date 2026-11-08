import { i as e, n as t, t as n } from "./jsx-runtime-C1t0izHF.js";
import { E as r, N as i, S as a, b as o, o as s, s as c, t as l, v as u, y as d } from "./useKeyboard-CqNSkGJ-.js";
import { d as f, f as p, i as m, m as h, n as g, p as _, r as v, s as y, t as b, u as x } from "./utils-UBVJ5JR_.js";
import { r as S } from "./FocusScope-C6wAY3W6.js";
import { n as C } from "./dist-qnEEIXtT.js";
import { t as w } from "./filterDOMProps-CJYy6efO.js";
import { n as T, r as E, t as D } from "./useHover-DxA7bNQs.js";
import { c as O } from "./useMultipleSelectionState-Bgjz_mf2.js";
import { t as k } from "./focusSafely-BRvDv2aU.js";
import { n as A, r as ee } from "./scrollIntoView-D_15IrGl.js";
import { t as j } from "./getScrollParent-Bt53c7cQ.js";
import { t as M } from "./ListKeyboardDelegate-DtpiEoL1.js";
import { t as N } from "./close-button-CHpFmCHB.js";
import { t as te } from "./Label-CJNHsoCN.js";
import { t as ne } from "./I18nProvider-zGzu-4zN.js";
import { n as P } from "./useFocusable-D0mnHSRC.js";
import { t as F } from "./Button-Cnex0dS4.js";
import { r as I } from "./compose-ClIOcrt6.js";
import { n as L } from "./useLocalizedStringFormatter-tuzNT5MD.js";
import { f as R, i as re, n as ie, t as ae } from "./CollectionBuilder-DSfSS-yC.js";
import { n as oe, r as se, t as z } from "./Collection-DMw2vuUT.js";
import { r as ce } from "./Autocomplete-By5miKJr.js";
import { n as le } from "./getItemCount-DbQDCr5r.js";
import { t as ue } from "./SharedElementTransition-C1TNSLy6.js";
import { n as de } from "./SelectionIndicator-C43cTdGN.js";
import { n as fe } from "./Text-CEDDBTEL.js";
import { n as B } from "./ListBox-DCWNZidc.js";
import { n as pe, t as me } from "./useListState-DvZcaErY.js";
import { t as he } from "./useField-CfrwMMou.js";
import { t as ge } from "./field-slots-gate-CeBWAnDc.js";
import { n as _e, t as ve } from "./useHighlightSelectionDescription-DAhAUDHK.js";
import { t as ye } from "./useHasTabbableChild-D2m5bncm.js";
// node_modules/@heroui/styles/dist/components/tag-group/tag-group.styles.js
var be = C({ slots: {
	base: "tag-group",
	list: "tag-group__list"
} }), xe = C({
	defaultVariants: {
		size: "md",
		variant: "default"
	},
	slots: {
		base: "tag",
		removeButton: "tag__remove-button"
	},
	variants: {
		size: {
			lg: { base: "tag--lg" },
			md: { base: "tag--md" },
			sm: { base: "tag--sm" }
		},
		variant: {
			default: { base: "tag--default" },
			surface: { base: "tag--surface" }
		}
	}
}), V = /* @__PURE__ */ new WeakMap();
function H(e, t) {
	let { id: n } = V.get(e) ?? {};
	if (!n) throw Error("Unknown list");
	return `${n}-${Se(t)}`;
}
function Se(e) {
	return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
// node_modules/react-aria/dist/private/gridlist/useGridList.mjs
function Ce(e, t, n) {
	let { isVirtualized: r, keyboardDelegate: i, layoutDelegate: a, onAction: o, disallowTypeAhead: s, linkBehavior: c = "action", keyboardNavigationBehavior: l = "arrow", escapeKeyBehavior: u = "clearSelection", shouldSelectOnPressUp: d } = e;
	!e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
	let { listProps: p } = le({
		selectionManager: t.selectionManager,
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		ref: n,
		keyboardDelegate: i,
		layoutDelegate: a,
		isVirtualized: r,
		selectOnFocus: t.selectionManager.selectionBehavior === "replace",
		shouldFocusWrap: e.shouldFocusWrap,
		linkBehavior: c,
		disallowTypeAhead: s,
		autoFocus: e.autoFocus,
		escapeKeyBehavior: u,
		UNSTABLE_focusOnEntry: e.UNSTABLE_focusOnEntry
	}), m = h(e.id);
	V.set(t, {
		id: m,
		onAction: o,
		linkBehavior: c,
		keyboardNavigationBehavior: l,
		shouldSelectOnPressUp: d
	});
	let g = ve({
		selectionManager: t.selectionManager,
		hasItemActions: !!o
	}), _ = ye(n, { isDisabled: t.collection.size !== 0 }), v = w(e, { labelable: !0 }), y = f(v, {
		role: "grid",
		id: m,
		"aria-multiselectable": t.selectionManager.selectionMode === "multiple" ? "true" : void 0
	}, t.collection.size === 0 ? { tabIndex: _ ? -1 : 0 } : p, g);
	return r && (y["aria-rowcount"] = t.collection.size, y["aria-colcount"] = 1), _e({}, t), { gridProps: y };
}
// node_modules/react-aria/dist/private/gridlist/useGridListItem.mjs
var U = /* @__PURE__ */ e(t(), 1), W = {
	expand: {
		ltr: "ArrowRight",
		rtl: "ArrowLeft"
	},
	collapse: {
		ltr: "ArrowLeft",
		rtl: "ArrowRight"
	}
};
function we(e, t, n) {
	let { node: s, isVirtualized: l, focusMode: m = "row", allowsArrowNavigation: h } = e, { direction: g } = ne(), { onAction: v, linkBehavior: y, keyboardNavigationBehavior: b, shouldSelectOnPressUp: x } = V.get(t), C = _(), w = (0, U.useRef)(null), T = () => {
		if (n.current !== null) {
			if (m === "child") {
				if (d(n.current) && n.current !== o(r(n.current))) return;
				let e = S(n.current, { tabbable: !0 }).firstChild();
				if (e) {
					k(e), A(e, { containingElement: j(e) });
					return;
				}
			}
			(w.current != null && s.key !== w.current || !d(n.current)) && k(n.current);
		}
	}, E = {}, D = e.hasChildItems, ee = t.selectionManager.isLink(s.key);
	if (s != null && "expandedKeys" in t) {
		let e = t.collection.getChildren?.(s.key);
		D ||= [...e ?? []].length > 1, v == null && !ee && t.selectionManager.selectionMode === "none" && D && (v = () => t.toggleKey(s.key));
		let n = D ? t.expandedKeys.has(s.key) : void 0, r = 1, i = s.index;
		if (s.level >= 0 && s?.parentKey != null) {
			let e = t.collection.getItem(s.parentKey);
			if (e) {
				let n = Te(e, t.collection);
				r = [...n].filter((e) => e.type === "item").length, i > 0 && n[0].type !== "item" && --i;
			}
		} else r = [...t.collection].filter((e) => e.level === 0 && e.type === "item").length;
		E = {
			"aria-expanded": n,
			"aria-level": s.level + 1,
			"aria-posinset": i + 1,
			"aria-setsize": r
		};
	}
	let { itemProps: M, ...N } = O({
		selectionManager: t.selectionManager,
		key: s.key,
		ref: n,
		isVirtualized: l,
		shouldSelectOnPressUp: e.shouldSelectOnPressUp || x,
		onAction: v || s.props?.onAction ? p(s.props?.onAction, v ? () => v(s.key) : void 0) : void 0,
		focus: T,
		linkBehavior: y
	}), te = (e) => {
		let i = o(r(n.current));
		if (!u(e.currentTarget, a(e)) || !n.current || !i) return;
		let c = S(n.current);
		if (c.currentNode = i, !G(e, t, s, D, g, i, n.current, h)) switch (e.key) {
			case "ArrowLeft":
				if (b === "arrow") {
					let t = g === "rtl" ? c.nextNode() : c.previousNode();
					if (t) e.preventDefault(), e.stopPropagation(), k(t), A(t, { containingElement: j(n.current) });
					else if (e.preventDefault(), e.stopPropagation(), g === "rtl") k(n.current), A(n.current, { containingElement: j(n.current) });
					else {
						c.currentNode = n.current;
						let e = K(c);
						e && (k(e), A(e, { containingElement: j(n.current) }));
					}
				}
				break;
			case "ArrowRight":
				if (b === "arrow") {
					let t = g === "rtl" ? c.previousNode() : c.nextNode();
					if (t) e.preventDefault(), e.stopPropagation(), k(t), A(t, { containingElement: j(n.current) });
					else if (e.preventDefault(), e.stopPropagation(), g === "ltr") k(n.current), A(n.current, { containingElement: j(n.current) });
					else {
						c.currentNode = n.current;
						let e = K(c);
						e && (k(e), A(e, { containingElement: j(n.current) }));
					}
				}
				break;
			case "ArrowUp":
			case "ArrowDown": !e.altKey && u(n.current, a(e)) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
		}
	}, P = (e) => {
		w.current = s.key, a(e) === n.current ? m === "child" && e.relatedTarget && u(n.current, e.relatedTarget) || requestAnimationFrame(() => {
			m === "child" && o(r(n.current)) === n.current && T();
		}) : c() || t.selectionManager.setFocusedKey(s.key);
	}, F = (e) => {
		let i = o(r(n.current));
		if (u(e.currentTarget, a(e)) && n.current && i) {
			if (b === "tab") {
				if (a(e) !== n.current && e.key !== "Tab") {
					e.stopPropagation();
					return;
				}
				if (G(e, t, s, D, g, i, n.current, h)) return;
			}
			if (e.key === "Tab" && b === "tab") {
				let t = S(n.current, { tabbable: !0 });
				t.currentNode = i, (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
			}
		}
	}, I = i(s.props), L = N.hasAction ? I : {}, R = f(M, L, {
		role: "row",
		onKeyDownCapture: b === "arrow" || h ? te : void 0,
		onFocus: P,
		"aria-label": s["aria-label"] || s.textValue || void 0,
		"aria-selected": t.selectionManager.canSelectItem(s.key) ? t.selectionManager.isSelected(s.key) : void 0,
		"aria-disabled": t.selectionManager.isDisabled(s.key) || void 0,
		"aria-labelledby": C && (s["aria-label"] || s.textValue) ? `${H(t, s.key)} ${C}` : void 0,
		id: H(t, s.key)
	});
	m === "child" && h && b === "tab" && (R.tabIndex = -1);
	let re = R.onKeyDown;
	if (R.onKeyDown = (e) => {
		F(e), e.isPropagationStopped() || re?.(e);
	}, l) {
		let { collection: e } = t;
		R["aria-rowindex"] = [...e].find((e) => e.type === "section") ? [...e.getKeys()].filter((t) => e.getItem(t)?.type !== "section").findIndex((e) => e === s.key) + 1 : s.index + 1;
	}
	let ie = {
		role: "gridcell",
		"aria-colindex": 1
	};
	return {
		rowProps: { ...f(R, E) },
		gridCellProps: ie,
		descriptionProps: { id: C },
		...N
	};
}
function G(e, t, n, r, i, a, o, s) {
	if (!("expandedKeys" in t) || !s && a !== o) return !1;
	if (e.key === W.expand[i] && t.selectionManager.focusedKey === n.key && r && !t.expandedKeys.has(n.key)) return t.toggleKey(n.key), e.stopPropagation(), !0;
	if (e.key === W.collapse[i] && t.selectionManager.focusedKey === n.key) {
		if (r && t.expandedKeys.has(n.key)) return t.toggleKey(n.key), e.stopPropagation(), !0;
		if (!t.expandedKeys.has(n.key) && n.parentKey && t.collection.getItem(n.parentKey)?.type === "item") return t.selectionManager.setFocusedKey(n.parentKey), e.stopPropagation(), !0;
	}
	return !1;
}
function K(e) {
	let t = null, n = null;
	do
		n = e.lastChild(), n && (t = n);
	while (n);
	return t;
}
function Te(e, t) {
	let n = t.getChildren?.(e.key), r = n ? Array.from(n) : [], i = r.length > 0 ? r[0] : null, a = [];
	for (; i;) a.push(i), i = i.nextKey == null ? null : t.getItem(i.nextKey);
	return a;
}
// node_modules/react-aria/dist/private/tag/useTagGroup.mjs
var q = /* @__PURE__ */ new WeakMap();
function Ee(e, t, n) {
	let { direction: r } = ne(), i = e.keyboardDelegate || new M({
		collection: t.collection,
		ref: n,
		orientation: "horizontal",
		direction: r,
		disabledKeys: t.disabledKeys,
		disabledBehavior: t.selectionManager.disabledBehavior
	}), { labelProps: a, fieldProps: o, descriptionProps: s, errorMessageProps: c } = he({
		...e,
		labelElementType: "span"
	}), { gridProps: l } = Ce({
		...e,
		...o,
		keyboardDelegate: i,
		shouldFocusWrap: !0,
		linkBehavior: "override",
		keyboardNavigationBehavior: "tab"
	}, t, n), [u, d] = (0, U.useState)(!1), { focusWithinProps: p } = E({ onFocusWithinChange: d }), m = w(e), h = (0, U.useRef)(t.collection.size);
	return (0, U.useEffect)(() => {
		n.current && h.current > 0 && t.collection.size === 0 && u && n.current.focus(), h.current = t.collection.size;
	}, [
		t.collection.size,
		u,
		n
	]), q.set(t, { onRemove: e.onRemove }), {
		gridProps: f(l, m, {
			role: t.collection.size ? "grid" : "group",
			"aria-atomic": !1,
			"aria-relevant": "additions",
			"aria-live": u ? "polite" : "off",
			...p,
			...o
		}),
		labelProps: a,
		descriptionProps: s,
		errorMessageProps: c
	};
}
// node_modules/react-aria/dist/private/intl/tag/ar-AE.mjs
var J = {};
J = {
	removeButtonLabel: "إزالة",
	removeDescription: "اضغط على مفتاح DELETE لإزالة علامة."
};
// node_modules/react-aria/dist/private/intl/tag/bg-BG.mjs
var De = {};
De = {
	removeButtonLabel: "Премахване",
	removeDescription: "Натиснете Delete, за да премахнете маркера."
};
// node_modules/react-aria/dist/private/intl/tag/cs-CZ.mjs
var Oe = {};
Oe = {
	removeButtonLabel: "Odebrat",
	removeDescription: "Stisknutím klávesy Delete odeberete značku."
};
// node_modules/react-aria/dist/private/intl/tag/da-DK.mjs
var ke = {};
ke = {
	removeButtonLabel: "Fjern",
	removeDescription: "Tryk på Slet for at fjerne tag."
};
// node_modules/react-aria/dist/private/intl/tag/de-DE.mjs
var Ae = {};
Ae = {
	removeButtonLabel: "Entfernen",
	removeDescription: "Auf „Löschen“ drücken, um das Tag zu entfernen."
};
// node_modules/react-aria/dist/private/intl/tag/el-GR.mjs
var je = {};
je = {
	removeButtonLabel: "Κατάργηση",
	removeDescription: "Πατήστε Διαγραφή για να καταργήσετε την ετικέτα."
};
// node_modules/react-aria/dist/private/intl/tag/en-US.mjs
var Me = {};
Me = {
	removeDescription: "Press Delete to remove tag.",
	removeButtonLabel: "Remove"
};
// node_modules/react-aria/dist/private/intl/tag/es-ES.mjs
var Ne = {};
Ne = {
	removeButtonLabel: "Quitar",
	removeDescription: "Pulse Eliminar para quitar la etiqueta."
};
// node_modules/react-aria/dist/private/intl/tag/et-EE.mjs
var Pe = {};
Pe = {
	removeButtonLabel: "Eemalda",
	removeDescription: "Sildi eemaldamiseks vajutage kustutusklahvi Delete."
};
// node_modules/react-aria/dist/private/intl/tag/fi-FI.mjs
var Fe = {};
Fe = {
	removeButtonLabel: "Poista",
	removeDescription: "Poista tunniste painamalla Poista-painiketta."
};
// node_modules/react-aria/dist/private/intl/tag/fr-FR.mjs
var Ie = {};
Ie = {
	removeButtonLabel: "Supprimer",
	removeDescription: "Appuyez sur Supprimer pour supprimer l’étiquette."
};
// node_modules/react-aria/dist/private/intl/tag/he-IL.mjs
var Le = {};
Le = {
	removeButtonLabel: "הסר",
	removeDescription: "לחץ על מחק כדי להסיר תג."
};
// node_modules/react-aria/dist/private/intl/tag/hr-HR.mjs
var Re = {};
Re = {
	removeButtonLabel: "Ukloni",
	removeDescription: "Pritisnite Delete za uklanjanje oznake."
};
// node_modules/react-aria/dist/private/intl/tag/hu-HU.mjs
var ze = {};
ze = {
	removeButtonLabel: "Eltávolítás",
	removeDescription: "Nyomja meg a Delete billentyűt a címke eltávolításához."
};
// node_modules/react-aria/dist/private/intl/tag/it-IT.mjs
var Be = {};
Be = {
	removeButtonLabel: "Rimuovi",
	removeDescription: "Premi Elimina per rimuovere il tag."
};
// node_modules/react-aria/dist/private/intl/tag/ja-JP.mjs
var Ve = {};
Ve = {
	removeButtonLabel: "削除",
	removeDescription: "タグを削除するには、Delete キーを押します。"
};
// node_modules/react-aria/dist/private/intl/tag/ko-KR.mjs
var He = {};
He = {
	removeButtonLabel: "제거",
	removeDescription: "태그를 제거하려면 Delete 키를 누르십시오."
};
// node_modules/react-aria/dist/private/intl/tag/lt-LT.mjs
var Ue = {};
Ue = {
	removeButtonLabel: "Pašalinti",
	removeDescription: "Norėdami pašalinti žymą, paspauskite „Delete“ klavišą."
};
// node_modules/react-aria/dist/private/intl/tag/lv-LV.mjs
var We = {};
We = {
	removeButtonLabel: "Noņemt",
	removeDescription: "Nospiediet Delete [Dzēst], lai noņemtu tagu."
};
// node_modules/react-aria/dist/private/intl/tag/nb-NO.mjs
var Ge = {};
Ge = {
	removeButtonLabel: "Fjern",
	removeDescription: "Trykk på Slett for å fjerne taggen."
};
// node_modules/react-aria/dist/private/intl/tag/nl-NL.mjs
var Ke = {};
Ke = {
	removeButtonLabel: "Verwijderen",
	removeDescription: "Druk op Verwijderen om de tag te verwijderen."
};
// node_modules/react-aria/dist/private/intl/tag/pl-PL.mjs
var qe = {};
qe = {
	removeButtonLabel: "Usuń",
	removeDescription: "Naciśnij Usuń, aby usunąć znacznik."
};
// node_modules/react-aria/dist/private/intl/tag/pt-BR.mjs
var Je = {};
Je = {
	removeButtonLabel: "Remover",
	removeDescription: "Pressione Delete para remover a tag."
};
// node_modules/react-aria/dist/private/intl/tag/pt-PT.mjs
var Ye = {};
Ye = {
	removeButtonLabel: "Eliminar",
	removeDescription: "Prima Delete para eliminar a tag."
};
// node_modules/react-aria/dist/private/intl/tag/ro-RO.mjs
var Xe = {};
Xe = {
	removeButtonLabel: "Îndepărtaţi",
	removeDescription: "Apăsați pe Delete (Ștergere) pentru a elimina eticheta."
};
// node_modules/react-aria/dist/private/intl/tag/ru-RU.mjs
var Ze = {};
Ze = {
	removeButtonLabel: "Удалить",
	removeDescription: "Нажмите DELETE, чтобы удалить тег."
};
// node_modules/react-aria/dist/private/intl/tag/sk-SK.mjs
var Qe = {};
Qe = {
	removeButtonLabel: "Odstrániť",
	removeDescription: "Ak chcete odstrániť značku, stlačte kláves Delete."
};
// node_modules/react-aria/dist/private/intl/tag/sl-SI.mjs
var $e = {};
$e = {
	removeButtonLabel: "Odstrani",
	removeDescription: "Pritisnite Delete, da odstranite oznako."
};
// node_modules/react-aria/dist/private/intl/tag/sr-SP.mjs
var et = {};
et = {
	removeButtonLabel: "Ukloni",
	removeDescription: "Pritisnite Obriši da biste uklonili oznaku."
};
// node_modules/react-aria/dist/private/intl/tag/sv-SE.mjs
var tt = {};
tt = {
	removeButtonLabel: "Ta bort",
	removeDescription: "Tryck på Radera för att ta bort taggen."
};
// node_modules/react-aria/dist/private/intl/tag/tr-TR.mjs
var nt = {};
nt = {
	removeButtonLabel: "Kaldır",
	removeDescription: "Etiketi kaldırmak için Sil tuşuna basın."
};
// node_modules/react-aria/dist/private/intl/tag/uk-UA.mjs
var rt = {};
rt = {
	removeButtonLabel: "Вилучити",
	removeDescription: "Натисніть Delete, щоб вилучити тег."
};
// node_modules/react-aria/dist/private/intl/tag/zh-CN.mjs
var it = {};
it = {
	removeButtonLabel: "删除",
	removeDescription: "按下“删除”以删除标记。"
};
// node_modules/react-aria/dist/private/intl/tag/zh-TW.mjs
var at = {};
at = {
	removeButtonLabel: "移除",
	removeDescription: "按 Delete 鍵以移除標記。"
};
// node_modules/react-aria/dist/private/tag/intlStrings.mjs
var ot = {};
ot = {
	"ar-AE": J,
	"bg-BG": De,
	"cs-CZ": Oe,
	"da-DK": ke,
	"de-DE": Ae,
	"el-GR": je,
	"en-US": Me,
	"es-ES": Ne,
	"et-EE": Pe,
	"fi-FI": Fe,
	"fr-FR": Ie,
	"he-IL": Le,
	"hr-HR": Re,
	"hu-HU": ze,
	"it-IT": Be,
	"ja-JP": Ve,
	"ko-KR": He,
	"lt-LT": Ue,
	"lv-LV": We,
	"nb-NO": Ge,
	"nl-NL": Ke,
	"pl-PL": qe,
	"pt-BR": Je,
	"pt-PT": Ye,
	"ro-RO": Xe,
	"ru-RU": Ze,
	"sk-SK": Qe,
	"sl-SI": $e,
	"sr-SP": et,
	"sv-SE": tt,
	"tr-TR": nt,
	"uk-UA": rt,
	"zh-CN": it,
	"zh-TW": at
};
// node_modules/react-aria/dist/private/tag/useTag.mjs
function st(e) {
	return e && e.__esModule ? e.default : e;
}
function ct(e, t, n) {
	let { item: r } = e, a = L(st(ot), "@react-aria/tag"), o = h(), { onRemove: c } = q.get(t) || {}, { rowProps: u, gridCellProps: d, ...p } = we({ node: r }, t, n), { descriptionProps: m, ...g } = p, _ = t.disabledKeys.has(r.key) || r.props.isDisabled, { keyboardProps: v } = l({
		isDisabled: _,
		shortcuts: {
			Delete: () => {
				t.selectionManager.isSelected(r.key) ? c?.(new Set(t.selectionManager.selectedKeys)) : c?.(/* @__PURE__ */ new Set([r.key]));
			},
			Backspace: () => {
				t.selectionManager.isSelected(r.key) ? c?.(new Set(t.selectionManager.selectedKeys)) : c?.(/* @__PURE__ */ new Set([r.key]));
			}
		},
		allowRepeats: !0
	}), y = s();
	y === "virtual" && typeof window < "u" && "ontouchstart" in window && (y = "pointer");
	let b = c && (y === "keyboard" || y === "virtual") ? a.format("removeDescription") : "", x = ee(b), S = r.key === t.selectionManager.focusedKey, C = t.selectionManager.focusedKey != null, T = -1;
	_ || !S && C || (T = 0);
	let E = w(r.props), D = i(r.props), { focusableProps: O } = P({
		...r.props,
		isDisabled: _
	}, n);
	return {
		removeButtonProps: {
			"aria-label": a.format("removeButtonLabel"),
			"aria-labelledby": `${o} ${u.id}`,
			isDisabled: _,
			id: o,
			onPress: () => c ? c(/* @__PURE__ */ new Set([r.key])) : null
		},
		rowProps: f(O, u, E, D, {
			tabIndex: T,
			...c ? v : {},
			"aria-describedby": x["aria-describedby"]
		}),
		gridCellProps: f(d, {
			"aria-errormessage": e["aria-errormessage"],
			"aria-label": e["aria-label"]
		}),
		...g,
		allowsRemoving: !!c
	};
}
// node_modules/react-aria-components/dist/private/TagGroup.mjs
var lt = /*#__PURE__*/ (0, U.createContext)(null), ut = /*#__PURE__*/ (0, U.createContext)(null), dt = /*#__PURE__*/ (0, U.forwardRef)(function(e, t) {
	return [e, t] = g(e, t, lt), /*#__PURE__*/ U.createElement(B.Provider, { value: null }, /*#__PURE__*/ U.createElement(ie, { content: e.children }, (n) => /*#__PURE__*/ U.createElement(ft, {
		props: e,
		forwardedRef: t,
		collection: n
	})));
});
function ft({ props: e, forwardedRef: t, collection: n }) {
	let r = (0, U.useRef)(null), { id: i, ...a } = e;
	[a, r] = g(a, r, ce);
	let { filter: o, shouldUseVirtualFocus: s, ...c } = a, [l, u] = m(!e["aria-label"] && !e["aria-labelledby"]), d = me({
		...c,
		children: void 0,
		collection: n
	}), f = pe(d, o), p = w(a, { global: !0 }), h = Object.fromEntries(Object.entries(p).map(([e, t]) => [e, e === "id" ? t : void 0])), { gridProps: _, labelProps: v, descriptionProps: x, errorMessageProps: S } = Ee({
		...c,
		...h,
		label: u
	}, f, r);
	return /*#__PURE__*/ U.createElement(y.div, {
		render: e.render,
		...p,
		id: i,
		ref: t,
		slot: e.slot || void 0,
		className: e.className ?? "react-aria-TagGroup",
		style: e.style
	}, /*#__PURE__*/ U.createElement(b, { values: [
		[te, {
			...v,
			elementType: "span",
			ref: l
		}],
		[ut, {
			..._,
			ref: r
		}],
		[B, f],
		[fe, { slots: {
			description: x,
			errorMessage: S
		} }]
	] }, e.children));
}
var pt = /*#__PURE__*/ (0, U.forwardRef)(function(e, t) {
	return (0, U.useContext)(B) ? /*#__PURE__*/ U.createElement(mt, {
		props: e,
		forwardedRef: t
	}) : /*#__PURE__*/ U.createElement(re, e);
});
function mt({ props: e, forwardedRef: t }) {
	let n = (0, U.useContext)(B), { CollectionRoot: r } = (0, U.useContext)(z), [i, a] = g({}, t, ut), { focusProps: o, isFocused: s, isFocusVisible: c } = T(), l = {
		isEmpty: n.collection.size === 0,
		isFocused: s,
		isFocusVisible: c,
		state: n
	}, u = v({
		...e,
		children: void 0,
		defaultClassName: "react-aria-TagList",
		values: l
	}), d = oe(n.selectionManager.focusedKey), p = w(e, { global: !0 });
	return /*#__PURE__*/ U.createElement(y.div, {
		...f(p, u, i, o),
		ref: a,
		"data-empty": n.collection.size === 0 || void 0,
		"data-focused": s || void 0,
		"data-focus-visible": c || void 0
	}, /*#__PURE__*/ U.createElement(ue, null, n.collection.size === 0 && e.renderEmptyState ? e.renderEmptyState(l) : /*#__PURE__*/ U.createElement(r, {
		collection: n.collection,
		persistedKeys: d
	})));
}
var ht = /*#__PURE__*/ ae(R, (e, t, n) => {
	let r = (0, U.useContext)(B), i = x(t), { focusProps: a, isFocusVisible: o } = T({ within: !1 }), { rowProps: s, gridCellProps: c, removeButtonProps: l, ...u } = ct({ item: n }, r, i), { hoverProps: d, isHovered: p } = D({
		isDisabled: !u.allowsSelection && !u.hasAction,
		onHoverStart: n.props.onHoverStart,
		onHoverChange: n.props.onHoverChange,
		onHoverEnd: n.props.onHoverEnd
	}), m = v({
		...e,
		id: void 0,
		children: n.rendered,
		defaultClassName: "react-aria-Tag",
		values: {
			...u,
			isFocusVisible: o,
			isHovered: p,
			selectionMode: r.selectionManager.selectionMode,
			selectionBehavior: r.selectionManager.selectionBehavior
		}
	});
	(0, U.useEffect)(() => {
		n.textValue;
	}, [n.textValue]);
	let h = w(e, { global: !0 });
	return delete h.id, delete h.onClick, /*#__PURE__*/ U.createElement(y.div, {
		ref: i,
		...f(h, m, s, a, d),
		"data-selected": u.isSelected || void 0,
		"data-disabled": u.isDisabled || void 0,
		"data-hovered": p || void 0,
		"data-focused": u.isFocused || void 0,
		"data-focus-visible": o || void 0,
		"data-pressed": u.isPressed || void 0,
		"data-allows-removing": u.allowsRemoving || void 0,
		"data-selection-mode": r.selectionManager.selectionMode === "none" ? void 0 : r.selectionManager.selectionMode
	}, /*#__PURE__*/ U.createElement("div", {
		...c,
		style: { display: "contents" }
	}, /*#__PURE__*/ U.createElement(b, { values: [
		[F, { slots: { remove: l } }],
		[z, se],
		[de, { isSelected: u.isSelected }]
	] }, m.children)));
}), gt = (e, t) => {
	let n = [];
	return [U.Children.map(e, (e) => /*#__PURE__*/ (0, U.isValidElement)(e) && e.type === t ? (n.push(e), null) : e)?.filter(Boolean), n.length > 0 ? n : void 0];
}, Y = n(), X = /*#__PURE__*/ (0, U.createContext)({}), Z = ({ children: e, className: t, size: n, variant: r, ...i }) => {
	let a = (0, U.useMemo)(() => be(), []), o = (0, U.useMemo)(() => ({
		slots: a,
		size: n,
		variant: r
	}), [
		a,
		n,
		r
	]);
	return /*#__PURE__*/ (0, Y.jsx)(ge, { children: /*#__PURE__*/ (0, Y.jsx)(X, {
		value: o,
		children: /*#__PURE__*/ (0, Y.jsx)(dt, {
			className: a.base({ className: t }),
			"data-slot": "tag-group",
			...i,
			children: e
		})
	}) });
};
Z.displayName = "HeroUI.TagGroup";
var _t = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, U.use)(X);
	return /*#__PURE__*/ (0, Y.jsx)(pt, {
		className: I(t, r?.list()),
		"data-slot": "tag-group-list",
		...n,
		children: e
	});
};
_t.displayName = "HeroUI.TagGroup.List";
// node_modules/@heroui/react/dist/components/tag-group/index.js
var vt = Object.assign(Z, {
	Root: Z,
	List: _t
}), yt = /*#__PURE__*/ (0, U.createContext)({}), Q = ({ children: e, className: t, ...n }) => {
	let { size: r, variant: i } = (0, U.use)(X), a = (0, U.useMemo)(() => xe({
		size: r,
		variant: i
	}), [r, i]), o = (0, U.useMemo)(() => {
		if (typeof e == "string") return e;
		if (typeof e == "object") return U.Children.toArray(e).filter((e) => typeof e == "string").at(0);
	}, [e]), [s, c] = (0, U.useMemo)(() => typeof e == "function" ? [e, void 0] : gt(e, $), [e]), l = (0, U.useMemo)(() => ({ slots: a }), [a]);
	return /*#__PURE__*/ (0, Y.jsx)(ht, {
		className: I(t, a.base()),
		"data-slot": "tag",
		textValue: o,
		...n,
		children: (t) => /*#__PURE__*/ (0, Y.jsx)(yt, {
			value: l,
			children: typeof e == "function" ? e(t) : /*#__PURE__*/ (0, Y.jsxs)(Y.Fragment, { children: [s, !!t.allowsRemoving && (c && c.length > 0 ? c : /*#__PURE__*/ (0, Y.jsx)($, {}))] })
		})
	});
};
Q.displayName = "HeroUI.Tag";
var $ = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, U.use)(yt);
	return /*#__PURE__*/ (0, Y.jsx)(N, {
		"aria-label": "Remove tag",
		className: I(t, r?.removeButton()),
		"data-slot": "tag-remove-button",
		slot: "remove",
		...n,
		children: e
	});
};
$.displayName = "HeroUI.Tag.RemoveButton";
// node_modules/@heroui/react/dist/components/tag/index.js
var bt = Object.assign(Q, {
	Root: Q,
	RemoveButton: $
});
export { vt as n, bt as t };
