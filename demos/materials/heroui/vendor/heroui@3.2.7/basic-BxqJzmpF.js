import { n as e, r as t, t as n } from "./dist-qnEEIXtT.js";
import { i as r, n as i, t as a } from "./jsx-runtime-C1t0izHF.js";
import { a as o, d as s, i as c, l, n as u, o as d, r as f, t as p, u as m } from "./CollectionBuilder-DSfSS-yC.js";
import { t as h } from "./Button-Cnex0dS4.js";
import { i as g, o as _ } from "./Checkbox-DJXTS0dp.js";
import { d as v, f as y, m as b, n as x, o as S, r as C, s as w, t as T, u as E } from "./utils-UBVJ5JR_.js";
import { r as D, t as O } from "./Collection-DMw2vuUT.js";
import { i as ee, n as k, r as A, t as j } from "./DragAndDrop-C3nrgJup.js";
import { n as M, r as te } from "./Autocomplete-By5miKJr.js";
import { t as N } from "./intlStrings-B6Rkdzvl.js";
import { n as ne } from "./SelectionIndicator-C43cTdGN.js";
import { t as P } from "./SharedElementTransition-C1TNSLy6.js";
import { a as F, c as re, i as I, l as L, n as ie, o as R, p as ae, r as oe, s as z, t as se } from "./useMultipleSelectionState-Bgjz_mf2.js";
import { t as B } from "./filterDOMProps-CJYy6efO.js";
import { n as ce, r as V } from "./FocusScope-C6wAY3W6.js";
import { i as le, n as H, r as ue } from "./scrollIntoView-D_15IrGl.js";
import { n as de, r as fe, t as pe } from "./ListKeyboardDelegate-DtpiEoL1.js";
import { t as me } from "./react-dom-Dipvgcxr.js";
import { t as he } from "./useControlledState-BbVlCDcL.js";
import { i as ge, n as _e, t as ve } from "./useHover-DxA7bNQs.js";
import { t as ye } from "./useLayoutEffect-Bx2X4QEP.js";
import { t as U } from "./I18nProvider-zGzu-4zN.js";
import { n as W } from "./useLocalizedStringFormatter-tuzNT5MD.js";
import { t as be } from "./useResizeObserver-Sa6_Psnw.js";
import { t as xe } from "./LiveAnnouncer-7fiQ12ko.js";
import { B as Se, E as Ce, N as we, S as G, b as Te, o as Ee, s as De, t as Oe, v as K, y as ke } from "./useKeyboard-CqNSkGJ-.js";
import { t as Ae } from "./useCollator-dflgnzgU.js";
import { n as je, r as Me, t as Ne } from "./useHighlightSelectionDescription-DAhAUDHK.js";
import { t as Pe } from "./useHasTabbableChild-D2m5bncm.js";
import { t as Fe } from "./useUpdateEffect-BWSmjBdc.js";
import { n as Ie } from "./useFocusable-D0mnHSRC.js";
import { t as q } from "./focusSafely-BRvDv2aU.js";
import { t as Le } from "./getScrollParent-Bt53c7cQ.js";
import { t as Re } from "./usePress-C9PowRxI.js";
import { t as ze } from "./useMove-C1jPw-e5.js";
import { n as Be } from "./VisuallyHidden-CRCgxFfe.js";
import { t as Ve } from "./useLabels-IW2w8qqV.js";
import { r as J, t as He } from "./compose-ClIOcrt6.js";
import { t as Ue } from "./dom-CdwaDRL5.js";
import { c as We } from "./icons-BUH88Ubz.js";
// node_modules/@heroui/styles/dist/components/table/table.styles.js
var Ge = e({
	defaultVariants: { variant: "primary" },
	slots: {
		base: "table-root",
		body: "table__body",
		cell: "table__cell",
		column: "table__column",
		columnResizer: "table__column-resizer",
		content: "table__content",
		footer: "table__footer",
		header: "table__header",
		loadMore: "table__load-more",
		loadMoreContent: "table__load-more-content",
		resizableContainer: "table__resizable-container",
		row: "table__row",
		scrollContainer: "table__scroll-container",
		sortableColumnHeader: "table__sortable-column-header",
		sortableColumnIndicator: "table__sortable-column-indicator"
	},
	variants: { variant: {
		primary: { base: "table-root--primary" },
		secondary: { base: "table-root--secondary" }
	} }
});
// node_modules/react-aria/dist/private/grid/useGridSelectionCheckbox.mjs
function Ke(e) {
	return e && e.__esModule ? e.default : e;
}
function qe(e, t) {
	let { key: n } = e, r = t.selectionManager, i = b(), a = !t.selectionManager.canSelectItem(n), o = t.selectionManager.isSelected(n);
	return { checkboxProps: {
		id: i,
		"aria-label": W(Ke(Me), "@react-aria/grid").format("select"),
		isSelected: o,
		isDisabled: a,
		onChange: () => r.toggleSelection(n)
	} };
}
for (var Je = 10, Ye = 5, Xe = class {
	setup(e, t, n) {
		this.delegate = e, this.state = t, this.direction = n;
	}
	getDropTargetFromPoint(e, t, n) {
		let r = this.delegate.getDropTargetFromPoint(e, t, n);
		return !r || r.type === "root" ? r : this.resolveDropTarget(r, e, t, n);
	}
	resolveDropTarget(e, t, n, r) {
		let i = this.pointerTracking, a = n - i.lastY, o = t - i.lastX, s = i.yDirection, c = i.xDirection;
		if (Math.abs(a) > Ye && (s = a > 0 ? "down" : "up", i.yDirection = s, i.lastY = n), Math.abs(o) > Je && (c = o > 0 ? "right" : "left", i.xDirection = c, i.lastX = t), e.dropPosition === "before") {
			let t = this.state.collection.getKeyBefore(e.key);
			for (; t != null;) {
				let e = this.state.collection.getItem(t);
				if (e?.type === "item") break;
				t = e?.parentKey ?? null;
			}
			if (t != null) {
				let n = {
					type: "item",
					key: t,
					dropPosition: "after"
				};
				r(n) && (e = n);
			}
		}
		let l = this.getPotentialTargets(e, r);
		if (l.length === 0) return { type: "root" };
		let u;
		return l.length > 1 ? u = this.selectTarget(l, e, t, n, s, c) : (u = l[0], i.boundaryContext = null), u;
	}
	getPotentialTargets(e, t) {
		if (e.dropPosition === "on") return [e];
		let n = e, r = this.state.collection, i = r.getItem(n.key);
		for (; i && i?.type !== "item" && i.nextKey != null;) n.key = i.nextKey, i = r.getItem(i.nextKey);
		let a = [n];
		if (i && i.hasChildNodes && this.state.expandedKeys.has(i.key) && r.getChildren && n.dropPosition === "after") {
			let e = i.firstChildKey == null ? null : r.getItem(i.firstChildKey);
			for (; e && e.type !== "item";) e = e.nextKey == null ? null : r.getItem(e.nextKey);
			if (e?.type === "item") {
				let n = {
					type: "item",
					key: e.key,
					dropPosition: "before"
				};
				return t(n) ? [n] : [];
			}
		}
		if (i?.nextKey != null) return [e];
		let o = i?.parentKey, s = [];
		for (; o != null;) {
			let e = r.getItem(o), n = e?.nextKey == null ? null : r.getItem(e.nextKey);
			if (!n || n.parentKey !== o) {
				if (e?.type === "item") {
					let e = {
						type: "item",
						key: o,
						dropPosition: "after"
					};
					t(e) && s.push(e);
				}
				if (n) break;
			}
			o = e?.parentKey;
		}
		if (s.length > 0 && a.push(...s), a.length === 1) {
			let e = r.getKeyAfter(n.key), a = e == null ? null : r.getItem(e);
			if (e != null && a && i && a.level != null && i.level != null && a.level > i.level) {
				let n = {
					type: "item",
					key: e,
					dropPosition: "before"
				};
				if (t(n)) return [n];
			}
		}
		return a.filter(t);
	}
	selectTarget(e, t, n, r, i, a) {
		if (e.length < 2) return e[0];
		let o = this.pointerTracking, s = this.state.collection.getItem(t.key)?.parentKey;
		if (s == null) return e[0];
		o.boundaryContext && o.boundaryContext.parentKey === s || (o.boundaryContext = {
			parentKey: s,
			preferredTargetIndex: o.yDirection === "up" ? e.length - 1 : 0,
			lastSwitchY: r,
			lastSwitchX: n
		});
		let c = o.boundaryContext, l = Math.abs(n - c.lastSwitchX);
		if (Math.abs(r - c.lastSwitchY) > Ye && i) {
			let t = c.preferredTargetIndex || 0;
			i === "down" && t === 0 ? c.preferredTargetIndex = e.length - 1 : i === "up" && t === e.length - 1 && (c.preferredTargetIndex = 0), o.xDirection = null;
		}
		if (l > Je && a) {
			let t = c.preferredTargetIndex || 0;
			a === "left" ? this.direction === "ltr" ? t < e.length - 1 && (c.preferredTargetIndex = t + 1, c.lastSwitchX = n) : t > 0 && (c.preferredTargetIndex = t - 1, c.lastSwitchX = n) : a === "right" && (this.direction === "ltr" ? t > 0 && (c.preferredTargetIndex = t - 1, c.lastSwitchX = n) : t < e.length - 1 && (c.preferredTargetIndex = t + 1, c.lastSwitchX = n)), o.yDirection = null;
		}
		return e[Math.max(0, Math.min(c.preferredTargetIndex || 0, e.length - 1))];
	}
	constructor() {
		this.delegate = null, this.state = null, this.direction = "ltr", this.pointerTracking = {
			lastY: 0,
			lastX: 0,
			yDirection: null,
			xDirection: null,
			boundaryContext: null
		};
	}
}, Ze = class {
	constructor(e) {
		this.keyMap = /* @__PURE__ */ new Map(), this.keyMap = /* @__PURE__ */ new Map(), this.columnCount = e?.columnCount, this.rows = [];
		let t = (r) => {
			let i = this.keyMap.get(r.key);
			e.visitNode && (r = e.visitNode(r)), this.keyMap.set(r.key, r);
			let a = /* @__PURE__ */ new Set(), o = null, s = !1;
			if (r.type === "item") {
				for (let e of r.childNodes) if (e.props?.colSpan !== void 0) {
					s = !0;
					break;
				}
			}
			for (let e of r.childNodes) e.type === "cell" && s && (e.colspan = e.props?.colSpan, e.colSpan = e.props?.colSpan, e.colIndex = o ? (o.colIndex ?? o.index) + (o.colSpan ?? 1) : e.index), e.type === "cell" && e.parentKey == null && (e.parentKey = r.key), a.add(e.key), o ? (o.nextKey = e.key, e.prevKey = o.key) : e.prevKey = null, t(e), o = e;
			if (o && (o.nextKey = null), i) for (let e of i.childNodes) a.has(e.key) || n(e);
		}, n = (e) => {
			this.keyMap.delete(e.key);
			for (let t of e.childNodes) this.keyMap.get(t.key) === t && n(t);
		}, r = null;
		for (let [n, i] of e.items.entries()) {
			let e = {
				...i,
				level: i.level ?? 0,
				key: i.key ?? "row-" + n,
				type: i.type ?? "row",
				value: i.value ?? null,
				hasChildNodes: !0,
				childNodes: [...i.childNodes],
				rendered: i.rendered,
				textValue: i.textValue ?? "",
				index: i.index ?? n
			};
			r ? (r.nextKey = e.key, e.prevKey = r.key) : e.prevKey = null, this.rows.push(e), t(e), r = e;
		}
		r && (r.nextKey = null);
	}
	*[Symbol.iterator]() {
		yield* [...this.rows];
	}
	get size() {
		return [...this.rows].length;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		let t = this.keyMap.get(e);
		return t ? t.prevKey ?? null : null;
	}
	getKeyAfter(e) {
		let t = this.keyMap.get(e);
		return t ? t.nextKey ?? null : null;
	}
	getFirstKey() {
		return [...this.rows][0]?.key;
	}
	getLastKey() {
		let e = [...this.rows];
		return e[e.length - 1]?.key;
	}
	getItem(e) {
		return this.keyMap.get(e) ?? null;
	}
	at(e) {
		let t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
	getChildren(e) {
		return this.keyMap.get(e)?.childNodes || [];
	}
}, Qe = "row-header-column-" + Math.random().toString(36).slice(2), $e = "row-header-column-" + Math.random().toString(36).slice(2); Qe === $e;) $e = "row-header-column-" + Math.random().toString(36).slice(2);
function et(e, t) {
	if (t.length === 0) return [];
	let n = [], r = /* @__PURE__ */ new Map();
	for (let i of t) {
		let t = i.parentKey, a = [i];
		for (; t != null;) {
			let n = e.get(t);
			if (!n) break;
			if (r.has(n)) {
				n.colSpan ??= 0, n.colSpan++, n.colspan = n.colSpan;
				let { column: e, index: t } = r.get(n);
				if (t > a.length) break;
				for (let n = t; n < a.length; n++) e.splice(n, 0, null);
				for (let t = a.length; t < e.length; t++) e[t] && r.has(e[t]) && (r.get(e[t]).index = t);
			} else n.colSpan = 1, n.colspan = 1, a.push(n), r.set(n, {
				column: a,
				index: a.length - 1
			});
			t = n.parentKey;
		}
		n.push(a), i.index = n.length - 1;
	}
	let i = Math.max(...n.map((e) => e.length)), a = Array(i).fill(0).map(() => []), o = 0;
	for (let e of n) {
		let t = i - 1;
		for (let n of e) {
			if (n) {
				let e = a[t], r = e.reduce((e, t) => e + (t.colSpan ?? 1), 0);
				if (r < o) {
					let i = {
						type: "placeholder",
						key: "placeholder-" + n.key,
						colspan: o - r,
						colSpan: o - r,
						index: r,
						value: null,
						rendered: null,
						level: t,
						hasChildNodes: !1,
						childNodes: [],
						textValue: ""
					};
					e.length > 0 && (e[e.length - 1].nextKey = i.key, i.prevKey = e[e.length - 1].key), e.push(i);
				}
				e.length > 0 && (e[e.length - 1].nextKey = n.key, n.prevKey = e[e.length - 1].key), n.level = t, n.colIndex = o, e.push(n);
			}
			t--;
		}
		o++;
	}
	let s = 0;
	for (let e of a) {
		let n = e.reduce((e, t) => e + (t.colSpan ?? 1), 0);
		if (n < t.length) {
			let r = {
				type: "placeholder",
				key: "placeholder-" + e[e.length - 1].key,
				colSpan: t.length - n,
				colspan: t.length - n,
				index: n,
				value: null,
				rendered: null,
				level: s,
				hasChildNodes: !1,
				childNodes: [],
				textValue: "",
				prevKey: e[e.length - 1].key
			};
			e.push(r);
		}
		s++;
	}
	return a.map((e, t) => ({
		type: "headerrow",
		key: "headerrow-" + t,
		index: t,
		value: null,
		rendered: null,
		level: 0,
		hasChildNodes: !0,
		childNodes: e,
		textValue: ""
	}));
}
var tt = class extends Ze {
	constructor(e, t, n) {
		let r = /* @__PURE__ */ new Set(), i = null, a = [];
		if (n?.showSelectionCheckboxes) {
			let e = {
				type: "column",
				key: Qe,
				value: null,
				textValue: "",
				level: 0,
				index: +!!n?.showDragButtons,
				hasChildNodes: !1,
				rendered: null,
				childNodes: [],
				props: { isSelectionCell: !0 }
			};
			a.unshift(e);
		}
		if (n?.showDragButtons) {
			let e = {
				type: "column",
				key: $e,
				value: null,
				textValue: "",
				level: 0,
				index: 0,
				hasChildNodes: !1,
				rendered: null,
				childNodes: [],
				props: { isDragButtonCell: !0 }
			};
			a.unshift(e);
		}
		let o = [], s = /* @__PURE__ */ new Map(), c = (e) => {
			switch (e.type) {
				case "body":
					i = e;
					break;
				case "column":
					s.set(e.key, e), e.hasChildNodes || (a.push(e), e.props.isRowHeader && r.add(e.key));
					break;
				case "item":
					o.push(e);
					return;
			}
			for (let t of e.childNodes) c(t);
		};
		for (let t of e) c(t);
		let l = et(s, a);
		if (l.forEach((e, t) => o.splice(t, 0, e)), super({
			columnCount: a.length,
			items: o,
			visitNode: (e) => (e.column = a[e.index], e)
		}), this._size = 0, this.columns = a, this.rowHeaderColumnKeys = r, this.body = i, this.headerRows = l, this._size = [...i.childNodes].length, this.rowHeaderColumnKeys.size === 0) {
			let e = this.columns.find((e) => !e.props?.isDragButtonCell && !e.props?.isSelectionCell);
			e && this.rowHeaderColumnKeys.add(e.key);
		}
	}
	*[Symbol.iterator]() {
		yield* this.body.childNodes;
	}
	get size() {
		return this._size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		return this.keyMap.get(e)?.prevKey ?? null;
	}
	getKeyAfter(e) {
		return this.keyMap.get(e)?.nextKey ?? null;
	}
	getFirstKey() {
		return z(this.body.childNodes)?.key ?? null;
	}
	getLastKey() {
		return R(this.body.childNodes)?.key ?? null;
	}
	getItem(e) {
		return e === this.body.key ? this.body : this.keyMap.get(e) ?? null;
	}
	at(e) {
		let t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
	getChildren(e) {
		if (e === this.body.key) return this.body.childNodes;
		let t = this.getItem(e);
		return t?.type === "item" ? [...t.childNodes].filter((e) => e.type === "cell") : super.getChildren(e);
	}
	getTextValue(e) {
		let t = this.getItem(e);
		if (!t) return "";
		if (t.textValue) return t.textValue;
		let n = this.rowHeaderColumnKeys;
		if (n) {
			let e = [];
			for (let r of t.childNodes) {
				let t = this.columns[r.index];
				if (n.has(t.key) && r.textValue && e.push(r.textValue), e.length === n.size) break;
			}
			return e.join(" ");
		}
		return "";
	}
};
// node_modules/react-stately/dist/private/table/TableUtils.mjs
function nt(e) {
	return e != null && (!isNaN(e) || String(e).match(/^(\d+)(?=%$)/) !== null);
}
function rt(e) {
	if (!e || typeof e == "number") return 1;
	let t = e.match(/^(.+)(?=fr$)/);
	return t ? parseFloat(t[0]) : 1;
}
function it(e, t) {
	if (typeof e == "string") {
		let n = e.match(/^(\d+)(?=%$)/);
		if (!n) throw Error("Only percentages or numbers are supported for static column widths");
		return t * (parseFloat(n[0]) / 100);
	}
	return e;
}
function at(e, t) {
	return e == null ? 2 ** 53 - 1 : it(e, t);
}
function ot(e, t) {
	return e == null ? 0 : it(e, t);
}
function st(e, t, n, r, i) {
	let a = e, o = Math.floor(e), s = e - o > 0;
	e = o;
	let c = !1, l = t.map((t, a) => {
		let o = n.get(t.key) == null ? t.width ?? t.defaultWidth ?? r?.(a) ?? "1fr" : n.get(t.key) ?? "1fr", s = !1, l = 0, u = 0, d = 0;
		nt(o) ? (l = it(o, e), s = !0) : (u = rt(o), u <= 0 && (s = !0));
		let f = ot(t.minWidth ?? i?.(a) ?? 0, e), p = at(t.maxWidth, e), m = Math.max(f, Math.min(l, p));
		return s ? d = m : l > m && (s = !0, d = m), s || (c = !0), {
			frozen: s,
			baseSize: l,
			hypotheticalMainSize: m,
			min: f,
			max: p,
			flex: u,
			targetMainSize: d,
			violation: 0
		};
	});
	for (; c;) {
		let t = 0, n = 0;
		l.forEach((e) => {
			e.frozen ? t += e.targetMainSize : (t += e.baseSize, n += e.flex);
		});
		let r = e - t;
		r > 0 && l.forEach((e) => {
			if (!e.frozen) {
				let t = e.flex / n;
				e.targetMainSize = e.baseSize + t * r;
			}
		});
		let i = 0;
		l.forEach((e) => {
			if (e.violation = 0, !e.frozen) {
				let { min: t, max: n, targetMainSize: r } = e;
				e.targetMainSize = Math.max(t, Math.min(r, n)), e.violation = e.targetMainSize - r, i += e.violation;
			}
		}), c = !1, l.forEach((e) => {
			i === 0 || Math.sign(i) === Math.sign(e.violation) ? e.frozen = !0 : e.frozen || (c = !0);
		});
	}
	let u = ct(l);
	if (s && u.length > 0) {
		let e = a.toString().split(".")[1], t = u[u.length - 1].toString();
		u[u.length - 1] = Number(t + "." + e);
	}
	return u;
}
function ct(e) {
	let t = 0, n = 0, r = [];
	return e.forEach(function(e) {
		let i = e.targetMainSize, a = Math.round(i + t) - n;
		t += i, n += a, r.push(a);
	}), r;
}
// node_modules/react-stately/dist/private/table/TableColumnLayout.mjs
var lt = class {
	constructor(e) {
		this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map(), this.getDefaultWidth = e?.getDefaultWidth ?? (() => "1fr"), this.getDefaultMinWidth = e?.getDefaultMinWidth ?? (() => 75);
	}
	splitColumnsIntoControlledAndUncontrolled(e) {
		return e.reduce((e, t) => (t.props.width == null ? e[1].set(t.key, t) : e[0].set(t.key, t), e), [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
	}
	recombineColumns(e, t, n, r) {
		return new Map(e.map((e) => n.has(e.key) ? [e.key, t.get(e.key)] : [e.key, r.get(e.key).props.width]));
	}
	getInitialUncontrolledWidths(e) {
		return new Map(Array.from(e).map(([e, t]) => [e, t.props.defaultWidth ?? this.getDefaultWidth?.(t) ?? "1fr"]));
	}
	getColumnWidth(e) {
		return this.columnWidths.get(e) ?? 0;
	}
	getColumnMinWidth(e) {
		return this.columnMinWidths.get(e) ?? 0;
	}
	getColumnMaxWidth(e) {
		return this.columnMaxWidths.get(e) ?? 0;
	}
	resizeColumnWidth(e, t, n, r) {
		let i = this.columnWidths, a = !0, o = /* @__PURE__ */ new Map();
		return r = Math.max(this.getColumnMinWidth(n), Math.min(this.getColumnMaxWidth(n), Math.floor(r))), e.columns.forEach((e) => {
			e.key === n ? (o.set(e.key, r), a = !1) : a ? o.set(e.key, i.get(e.key) ?? 0) : o.set(e.key, e.props.width ?? t.get(e.key));
		}), o;
	}
	buildColumnWidths(e, t, n) {
		return this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map(), st(e, t.columns.map((e) => ({
			...e.props,
			key: e.key
		})), n, (e) => this.getDefaultWidth(t.columns[e]), (e) => this.getDefaultMinWidth(t.columns[e])).forEach((n, r) => {
			let i = t.columns[r].key, a = t.columns[r];
			this.columnWidths.set(i, n), this.columnMinWidths.set(i, ot(a.props.minWidth ?? this.getDefaultMinWidth(a), e)), this.columnMaxWidths.set(i, at(a.props.maxWidth, e));
		}), this.columnWidths;
	}
}, Y = /* @__PURE__ */ r(i(), 1);
function ut(e, t) {
	let { getDefaultWidth: n, getDefaultMinWidth: r, tableWidth: i = 0 } = e, [a, o] = (0, Y.useState)(null), s = (0, Y.useMemo)(() => new lt({
		getDefaultWidth: n,
		getDefaultMinWidth: r
	}), [n, r]), [c, l] = (0, Y.useMemo)(() => s.splitColumnsIntoControlledAndUncontrolled(t.collection.columns), [t.collection.columns, s]), [u, d] = (0, Y.useState)(() => s.getInitialUncontrolledWidths(l)), [f, p] = (0, Y.useState)(t.collection.columns);
	t.collection.columns !== f && ((t.collection.columns.length !== f.length || t.collection.columns.some((e, t) => e.key !== f[t].key)) && d(s.getInitialUncontrolledWidths(l)), p(t.collection.columns));
	let m = (0, Y.useMemo)(() => s.recombineColumns(t.collection.columns, u, l, c), [
		t.collection.columns,
		u,
		l,
		c,
		s
	]), h = (0, Y.useCallback)((e) => {
		o(e);
	}, [o]), g = (0, Y.useCallback)((e, n) => {
		let r = s.resizeColumnWidth(t.collection, u, e, n), i = new Map(Array.from(l).map(([e]) => [e, r.get(e)]));
		return i.set(e, n), d(i), r;
	}, [
		l,
		d,
		s,
		t.collection,
		u
	]), _ = (0, Y.useCallback)(() => {
		o(null);
	}, [o]), v = (0, Y.useMemo)(() => s.buildColumnWidths(i, t.collection, m), [
		i,
		t.collection,
		m,
		s
	]);
	return (0, Y.useMemo)(() => ({
		resizingColumn: a,
		updateResizedColumns: g,
		startResize: h,
		endResize: _,
		getColumnWidth: (e) => s.getColumnWidth(e),
		getColumnMinWidth: (e) => s.getColumnMinWidth(e),
		getColumnMaxWidth: (e) => s.getColumnMaxWidth(e),
		tableState: t,
		columnWidths: v
	}), [
		s,
		v,
		a,
		g,
		h,
		_,
		t
	]);
}
// node_modules/react-stately/dist/private/grid/useGridState.mjs
function dt(e) {
	let { collection: t, focusMode: n } = e, r = e.UNSAFE_selectionState || se(e), i = (0, Y.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [e.disabledKeys]), a = r.setFocusedKey;
	r.setFocusedKey = (e, r) => {
		if (n === "cell" && e != null) {
			let n = t.getItem(e);
			if (n?.type === "item") {
				let i = I(n, t);
				e = r === "last" ? R(i)?.key ?? null : z(i)?.key ?? null;
			}
		}
		a(e, r);
	};
	let o = (0, Y.useMemo)(() => new oe(t, r), [t, r]), s = (0, Y.useRef)(null);
	return (0, Y.useEffect)(() => {
		if (r.focusedKey != null && s.current && !t.getItem(r.focusedKey)) {
			let e = s.current.getItem(r.focusedKey), n = e?.parentKey != null && (e.type === "cell" || e.type === "rowheader" || e.type === "column") ? s.current.getItem(e.parentKey) : e;
			if (!n) {
				r.setFocusedKey(null);
				return;
			}
			let i = s.current.rows, a = t.rows, c = i.length - a.length, l = Math.min(c > 1 ? Math.max(n.index - c + 1, 0) : n.index, a.length - 1), u = null;
			for (let e = Math.max(0, l); e < a.length; e++) if (!o.isDisabled(a[e].key) && a[e].type !== "headerrow") {
				u = a[e];
				break;
			}
			if (u === null) {
				for (let e = l - 1; e >= 0; e--) if (!o.isDisabled(a[e].key) && a[e].type !== "headerrow") {
					u = a[e];
					break;
				}
			}
			if (u) {
				let i = u.hasChildNodes ? [...I(u, t)] : [], a = u.hasChildNodes && n !== e && e && e.index < i.length ? i[e.index].key : u.key;
				r.setFocusedKey(a);
			} else r.setFocusedKey(null);
		}
		s.current = t;
	}, [
		t,
		o,
		r,
		r.focusedKey
	]), {
		collection: t,
		disabledKeys: i,
		isKeyboardNavigationDisabled: !1,
		selectionManager: o
	};
}
// node_modules/react-stately/dist/private/table/useTableState.mjs
var ft = {
	ascending: "descending",
	descending: "ascending"
};
function pt(e) {
	let [t, n] = (0, Y.useState)(!1), { selectionMode: r = "none", showSelectionCheckboxes: i, showDragButtons: a, treeColumn: o = null } = e, s = (0, Y.useMemo)(() => ({
		showSelectionCheckboxes: i && r !== "none",
		showDragButtons: a,
		selectionMode: r,
		columns: []
	}), [
		e.children,
		i,
		r,
		a
	]), c = ie(e, (0, Y.useCallback)((e) => new tt(e, null, s), [s]), s), { disabledKeys: l, selectionManager: u } = dt({
		...e,
		collection: c,
		disabledBehavior: e.disabledBehavior || "selection"
	}), [d, f] = he(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : /* @__PURE__ */ new Set(), e.onExpandedChange);
	return {
		collection: c,
		disabledKeys: l,
		selectionManager: u,
		showSelectionCheckboxes: e.showSelectionCheckboxes || !1,
		sortDescriptor: e.sortDescriptor ?? null,
		isKeyboardNavigationDisabled: c.size === 0 || t,
		setKeyboardNavigationDisabled: n,
		sort(t, n) {
			e.onSortChange?.({
				column: t,
				direction: n ?? (e.sortDescriptor?.column === t ? ft[e.sortDescriptor.direction] : "ascending")
			});
		},
		expandedKeys: d,
		toggleKey(e) {
			f((t) => {
				let n = new Set(t);
				return n.has(e) ? n.delete(e) : n.add(e), n;
			});
		},
		treeColumn: o
	};
}
function mt(e, t) {
	let n = (0, Y.useMemo)(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]), r = e.selectionManager.withCollection(n);
	return {
		...e,
		collection: n,
		selectionManager: r
	};
}
// node_modules/react-aria/dist/private/grid/GridKeyboardDelegate.mjs
var ht = class {
	constructor(e) {
		if (this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.disabledBehavior = e.disabledBehavior || "all", this.direction = e.direction, this.collator = e.collator, !e.layout && !e.ref) throw Error("Either a layout or a ref must be specified.");
		this.layoutDelegate = e.layoutDelegate || (e.layout ? new gt(e.layout) : new de(e.ref)), this.focusMode = e.focusMode ?? "row";
	}
	isCell(e) {
		return e.type === "cell";
	}
	isRow(e) {
		return e.type === "row" || e.type === "item";
	}
	isDisabled(e) {
		return this.disabledBehavior === "all" && (e.props?.isDisabled || this.disabledKeys.has(e.key)) && e.props?.disabledBehavior !== "selection";
	}
	findPreviousKey(e, t, n = !1) {
		let r = e == null ? this.collection.getLastKey() : this.collection.getKeyBefore(e);
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (!e) return null;
			if ((n || !this.isDisabled(e)) && (!t || t(e))) return r;
			r = this.collection.getKeyBefore(r);
		}
		return null;
	}
	findNextKey(e, t, n = !1) {
		let r = e == null ? this.collection.getFirstKey() : this.collection.getKeyAfter(e);
		for (; r != null;) {
			let e = this.collection.getItem(r);
			if (!e) return null;
			if ((n || !this.isDisabled(e)) && (!t || t(e))) return r;
			if (r = this.collection.getKeyAfter(r), r == null) return null;
		}
		return null;
	}
	getKeyForItemInRowByIndex(e, t = 0) {
		if (t < 0) return null;
		let n = this.collection.getItem(e);
		if (!n) return null;
		let r = 0;
		for (let e of I(n, this.collection)) {
			if (e.colSpan && e.colSpan + r > t || (e.colSpan && (r = r + e.colSpan - 1), r === t)) return e.key ?? null;
			r++;
		}
		return null;
	}
	getKeyBelow(e, t) {
		let n = e, r = this.collection.getItem(n);
		if (!r || (this.isCell(r) && (n = r.parentKey ?? null), n == null)) return null;
		if (n = this.findNextKey(n, (e) => e.type === "item", t?.includeDisabled), n != null) {
			if (this.isCell(r)) {
				let e = r.colIndex ? r.colIndex : r.index;
				return this.getKeyForItemInRowByIndex(n, e);
			}
			if (this.focusMode === "row") return n;
		}
		return null;
	}
	getKeyAbove(e, t) {
		let n = e, r = this.collection.getItem(n);
		if (!r || (this.isCell(r) && (n = r.parentKey ?? null), n == null)) return null;
		if (n = this.findPreviousKey(n, (e) => e.type === "item", t?.includeDisabled), n != null) {
			if (this.isCell(r)) {
				let e = r.colIndex ? r.colIndex : r.index;
				return this.getKeyForItemInRowByIndex(n, e);
			}
			if (this.focusMode === "row") return n;
		}
		return null;
	}
	getKeyRightOf(e) {
		let t = this.collection.getItem(e);
		if (!t) return null;
		if (this.isRow(t)) {
			let e = I(t, this.collection);
			return (this.direction === "rtl" ? R(e)?.key : z(e)?.key) ?? null;
		}
		if (this.isCell(t) && t.parentKey != null) {
			let n = this.collection.getItem(t.parentKey);
			if (!n) return null;
			let r = I(n, this.collection), i = (this.direction === "rtl" ? F(r, t.index - 1) : F(r, t.index + 1)) ?? null;
			return i ? i.key ?? null : this.focusMode === "row" ? t.parentKey ?? null : (this.direction === "rtl" ? this.getFirstKey(e) : this.getLastKey(e)) ?? null;
		}
		return null;
	}
	getKeyLeftOf(e) {
		let t = this.collection.getItem(e);
		if (!t) return null;
		if (this.isRow(t)) {
			let e = I(t, this.collection);
			return (this.direction === "rtl" ? z(e)?.key : R(e)?.key) ?? null;
		}
		if (this.isCell(t) && t.parentKey != null) {
			let n = this.collection.getItem(t.parentKey);
			if (!n) return null;
			let r = I(n, this.collection), i = (this.direction === "rtl" ? F(r, t.index + 1) : F(r, t.index - 1)) ?? null;
			return i ? i.key ?? null : this.focusMode === "row" ? t.parentKey ?? null : (this.direction === "rtl" ? this.getLastKey(e) : this.getFirstKey(e)) ?? null;
		}
		return null;
	}
	getFirstKey(e, t) {
		let n = e ?? null, r;
		if (n != null) {
			if (r = this.collection.getItem(n), !r) return null;
			if (this.isCell(r) && !t && r.parentKey != null) {
				let e = this.collection.getItem(r.parentKey);
				return e ? z(I(e, this.collection))?.key ?? null : null;
			}
		}
		if (n = this.findNextKey(void 0, (e) => e.type === "item"), n != null && (r && this.isCell(r) && t || this.focusMode === "cell")) {
			let e = this.collection.getItem(n);
			if (!e) return null;
			n = z(I(e, this.collection))?.key ?? null;
		}
		return n;
	}
	getLastKey(e, t) {
		let n = e ?? null, r;
		if (n != null) {
			if (r = this.collection.getItem(n), !r) return null;
			if (this.isCell(r) && !t && r.parentKey != null) {
				let e = this.collection.getItem(r.parentKey);
				if (!e) return null;
				let t = I(e, this.collection);
				return R(t)?.key ?? null;
			}
		}
		if (n = this.findPreviousKey(void 0, (e) => e.type === "item"), n != null && (r && this.isCell(r) && t || this.focusMode === "cell")) {
			let e = this.collection.getItem(n);
			if (!e) return null;
			let t = I(e, this.collection);
			n = R(t)?.key ?? null;
		}
		return n;
	}
	getKeyPageAbove(e) {
		let t = e, n = this.layoutDelegate.getItemRect(t);
		if (!n) return null;
		let r = Math.max(0, n.y + n.height - this.layoutDelegate.getVisibleRect().height);
		for (; n && n.y > r && t != null && (t = this.getKeyAbove(t) ?? null, t != null);) n = this.layoutDelegate.getItemRect(t);
		return t;
	}
	getKeyPageBelow(e) {
		let t = e, n = this.layoutDelegate.getItemRect(t);
		if (!n) return null;
		let r = this.layoutDelegate.getVisibleRect().height, i = Math.min(this.layoutDelegate.getContentSize().height, n.y + r);
		for (; n && n.y + n.height < i;) {
			let e = this.getKeyBelow(t);
			if (e == null) break;
			n = this.layoutDelegate.getItemRect(e), t = e;
		}
		return t;
	}
	getKeyForSearch(e, t) {
		let n = t ?? null;
		if (!this.collator) return null;
		let r = this.collection;
		if (n = t ?? this.getFirstKey(), n == null) return null;
		let i = r.getItem(n);
		if (!i) return null;
		i.type === "cell" && (n = i.parentKey ?? null);
		let a = !1;
		for (; n != null;) {
			let t = r.getItem(n);
			if (!t) return null;
			if (t.textValue) {
				let n = t.textValue.slice(0, e.length);
				if (this.collator.compare(n, e) === 0) return this.isRow(t) && this.focusMode === "cell" ? z(I(t, this.collection))?.key ?? null : t.key;
			}
			n = this.findNextKey(n, (e) => e.type === "item"), n == null && !a && (n = this.getFirstKey(), a = !0);
		}
		return null;
	}
}, gt = class {
	constructor(e) {
		this.layout = e;
	}
	getContentSize() {
		return this.layout.getContentSize();
	}
	getItemRect(e) {
		return this.layout.getLayoutInfo(e)?.rect || null;
	}
	getVisibleRect() {
		return this.layout.virtualizer.visibleRect;
	}
}, _t = /* @__PURE__ */ new WeakMap();
// node_modules/react-aria/dist/private/grid/useGrid.mjs
function vt(e, t, n) {
	let { isVirtualized: r, disallowTypeAhead: i, keyboardDelegate: a, focusMode: o, scrollRef: s, getRowText: c, onRowAction: l, onCellAction: u, escapeKeyBehavior: d = "clearSelection", shouldSelectOnPressUp: f, keyboardNavigationBehavior: p = "arrow" } = e, { selectionManager: m } = t;
	!e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
	let h = Ae({
		usage: "search",
		sensitivity: "base"
	}), { direction: g } = U(), _ = t.selectionManager.disabledBehavior, y = (0, Y.useMemo)(() => a || new ht({
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		disabledBehavior: _,
		ref: n,
		direction: g,
		collator: h,
		focusMode: o
	}), [
		a,
		t.collection,
		t.disabledKeys,
		_,
		n,
		g,
		h,
		o
	]), { collectionProps: x } = L({
		ref: n,
		selectionManager: m,
		keyboardDelegate: y,
		isVirtualized: r,
		scrollRef: s,
		disallowTypeAhead: i,
		escapeKeyBehavior: d
	}), S = b(e.id);
	_t.set(t, {
		keyboardDelegate: y,
		actions: {
			onRowAction: l,
			onCellAction: u
		},
		shouldSelectOnPressUp: f,
		keyboardNavigationBehavior: p
	});
	let C = Ne({
		selectionManager: m,
		hasItemActions: !!(l || u)
	}), w = B(e, { labelable: !0 }), T = (0, Y.useCallback)((e) => {
		m.isFocused ? K(e.currentTarget, G(e)) || m.setFocused(!1) : K(e.currentTarget, G(e)) && m.setFocused(!0);
	}, [m]), E = (0, Y.useMemo)(() => ({
		onBlur: x.onBlur,
		onFocus: T
	}), [T, x.onBlur]), D = Pe(n, { isDisabled: t.collection.size !== 0 }), O = v(w, {
		role: "grid",
		id: S,
		"aria-multiselectable": m.selectionMode === "multiple" ? "true" : void 0
	}, t.isKeyboardNavigationDisabled ? E : x, t.collection.size === 0 && { tabIndex: D ? -1 : 0 } || void 0, C);
	return r && (O["aria-rowcount"] = t.collection.size, O["aria-colcount"] = t.collection.columnCount), je({ getRowText: c }, t), { gridProps: O };
}
// node_modules/react-aria/dist/private/table/utils.mjs
var yt = /* @__PURE__ */ new WeakMap();
function bt(e) {
	return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function xt(e, t) {
	let n = yt.get(e);
	if (!n) throw Error("Unknown grid");
	return `${n}-${bt(t)}`;
}
function St(e, t, n) {
	let r = yt.get(e);
	if (!r) throw Error("Unknown grid");
	return `${r}-${bt(t)}-${bt(n)}`;
}
function Ct(e, t) {
	return [...e.collection.rowHeaderColumnKeys].map((n) => St(e, t, n)).join(" ");
}
// node_modules/react-aria/dist/private/intl/table/ar-AE.mjs
var wt = {};
wt = {
	ascending: "تصاعدي",
	ascendingSort: (e) => `\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${e.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{635}\u{627}\u{639}\u{62F}\u{64A}`,
	collapse: "طي",
	columnSize: (e) => `${e.value} \u{628}\u{627}\u{644}\u{628}\u{643}\u{633}\u{644}`,
	descending: "تنازلي",
	descendingSort: (e) => `\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62D}\u{633}\u{628} \u{627}\u{644}\u{639}\u{645}\u{648}\u{62F} ${e.columnName} \u{628}\u{62A}\u{631}\u{62A}\u{64A}\u{628} \u{62A}\u{646}\u{627}\u{632}\u{644}\u{64A}`,
	expand: "تمديد",
	resizerDescription: "اضغط على مفتاح Enter لبدء تغيير الحجم",
	select: "تحديد",
	selectAll: "تحديد الكل",
	sortable: "عمود قابل للترتيب"
};
// node_modules/react-aria/dist/private/intl/table/bg-BG.mjs
var Tt = {};
Tt = {
	ascending: "възходящ",
	ascendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${e.columnName} \u{432}\u{44A}\u{432} \u{432}\u{44A}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
	collapse: "Свиване",
	columnSize: (e) => `${e.value} \u{43F}\u{438}\u{43A}\u{441}\u{435}\u{43B}\u{430}`,
	descending: "низходящ",
	descendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{430}\u{43D}\u{43E} \u{43F}\u{43E} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{430} ${e.columnName} \u{432} \u{43D}\u{438}\u{437}\u{445}\u{43E}\u{434}\u{44F}\u{449} \u{440}\u{435}\u{434}`,
	expand: "Разширяване",
	resizerDescription: "Натиснете „Enter“, за да започнете да преоразмерявате",
	select: "Изберете",
	selectAll: "Изберете всичко",
	sortable: "сортираща колона"
};
// node_modules/react-aria/dist/private/intl/table/cs-CZ.mjs
var Et = {};
Et = {
	ascending: "vzestupně",
	ascendingSort: (e) => `\u{159}azeno vzestupn\u{11B} podle sloupce ${e.columnName}`,
	collapse: "Sbalit",
	columnSize: (e) => `${e.value} pixel\u{16F}`,
	descending: "sestupně",
	descendingSort: (e) => `\u{159}azeno sestupn\u{11B} podle sloupce ${e.columnName}`,
	expand: "Roztáhnout",
	resizerDescription: "Stisknutím klávesy Enter začnete měnit velikost",
	select: "Vybrat",
	selectAll: "Vybrat vše",
	sortable: "sloupec s možností řazení"
};
// node_modules/react-aria/dist/private/intl/table/da-DK.mjs
var Dt = {};
Dt = {
	ascending: "stigende",
	ascendingSort: (e) => `sorteret efter kolonne ${e.columnName} i stigende r\xe6kkef\xf8lge`,
	collapse: "Skjul",
	columnSize: (e) => `${e.value} pixels`,
	descending: "faldende",
	descendingSort: (e) => `sorteret efter kolonne ${e.columnName} i faldende r\xe6kkef\xf8lge`,
	expand: "Udvid",
	resizerDescription: "Tryk på Enter for at ændre størrelse",
	select: "Vælg",
	selectAll: "Vælg alle",
	sortable: "sorterbar kolonne"
};
// node_modules/react-aria/dist/private/intl/table/de-DE.mjs
var Ot = {};
Ot = {
	ascending: "aufsteigend",
	ascendingSort: (e) => `sortiert nach Spalte ${e.columnName} in aufsteigender Reihenfolge`,
	collapse: "Reduzieren",
	columnSize: (e) => `${e.value} Pixel`,
	descending: "absteigend",
	descendingSort: (e) => `sortiert nach Spalte ${e.columnName} in absteigender Reihenfolge`,
	expand: "Erweitern",
	resizerDescription: "Eingabetaste zum Starten der Größenänderung drücken",
	select: "Auswählen",
	selectAll: "Alles auswählen",
	sortable: "sortierbare Spalte"
};
// node_modules/react-aria/dist/private/intl/table/el-GR.mjs
var kt = {};
kt = {
	ascending: "αύξουσα",
	ascendingSort: (e) => `\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${e.columnName} \u{3C3}\u{3B5} \u{3B1}\u{3CD}\u{3BE}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
	collapse: "Σύμπτυξη",
	columnSize: (e) => `${e.value} pixel`,
	descending: "φθίνουσα",
	descendingSort: (e) => `\u{3B4}\u{3B9}\u{3B1}\u{3BB}\u{3BF}\u{3B3}\u{3AE} \u{3B1}\u{3BD}\u{3AC} \u{3C3}\u{3C4}\u{3AE}\u{3BB}\u{3B7} ${e.columnName} \u{3C3}\u{3B5} \u{3C6}\u{3B8}\u{3AF}\u{3BD}\u{3BF}\u{3C5}\u{3C3}\u{3B1} \u{3C3}\u{3B5}\u{3B9}\u{3C1}\u{3AC}`,
	expand: "Ανάπτυξη",
	resizerDescription: "Πατήστε Enter για έναρξη της αλλαγής μεγέθους",
	select: "Επιλογή",
	selectAll: "Επιλογή όλων",
	sortable: "Στήλη διαλογής"
};
// node_modules/react-aria/dist/private/intl/table/en-US.mjs
var At = {};
At = {
	select: "Select",
	selectAll: "Select All",
	sortable: "sortable column",
	ascending: "ascending",
	descending: "descending",
	ascendingSort: (e) => `sorted by column ${e.columnName} in ascending order`,
	descendingSort: (e) => `sorted by column ${e.columnName} in descending order`,
	columnSize: (e) => `${e.value} pixels`,
	resizerDescription: "Press Enter to start resizing",
	expand: "Expand",
	collapse: "Collapse"
};
// node_modules/react-aria/dist/private/intl/table/es-ES.mjs
var jt = {};
jt = {
	ascending: "ascendente",
	ascendingSort: (e) => `ordenado por columna ${e.columnName} en sentido ascendente`,
	collapse: "Contraer",
	columnSize: (e) => `${e.value} p\xedxeles`,
	descending: "descendente",
	descendingSort: (e) => `ordenado por columna ${e.columnName} en orden descendente`,
	expand: "Ampliar",
	resizerDescription: "Pulse Intro para empezar a redimensionar",
	select: "Seleccionar",
	selectAll: "Seleccionar todos",
	sortable: "columna ordenable"
};
// node_modules/react-aria/dist/private/intl/table/et-EE.mjs
var Mt = {};
Mt = {
	ascending: "tõusev järjestus",
	ascendingSort: (e) => `sorditud veeru j\xe4rgi ${e.columnName} t\xf5usvas j\xe4rjestuses`,
	collapse: "Ahenda",
	columnSize: (e) => `${e.value} pikslit`,
	descending: "laskuv järjestus",
	descendingSort: (e) => `sorditud veeru j\xe4rgi ${e.columnName} laskuvas j\xe4rjestuses`,
	expand: "Laienda",
	resizerDescription: "Suuruse muutmise alustamiseks vajutage klahvi Enter",
	select: "Vali",
	selectAll: "Vali kõik",
	sortable: "sorditav veerg"
};
// node_modules/react-aria/dist/private/intl/table/fi-FI.mjs
var Nt = {};
Nt = {
	ascending: "nouseva",
	ascendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan nousevassa j\xe4rjestyksess\xe4`,
	collapse: "Pienennä",
	columnSize: (e) => `${e.value} pikseli\xe4`,
	descending: "laskeva",
	descendingSort: (e) => `lajiteltu sarakkeen ${e.columnName} mukaan laskevassa j\xe4rjestyksess\xe4`,
	expand: "Laajenna",
	resizerDescription: "Aloita koon muutos painamalla Enter-näppäintä",
	select: "Valitse",
	selectAll: "Valitse kaikki",
	sortable: "lajiteltava sarake"
};
// node_modules/react-aria/dist/private/intl/table/fr-FR.mjs
var Pt = {};
Pt = {
	ascending: "croissant",
	ascendingSort: (e) => `tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre croissant`,
	collapse: "Réduire",
	columnSize: (e) => `${e.value}\xa0pixels`,
	descending: "décroissant",
	descendingSort: (e) => `tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre d\xe9croissant`,
	expand: "Développer",
	resizerDescription: "Appuyez sur Entrée pour commencer le redimensionnement.",
	select: "Sélectionner",
	selectAll: "Sélectionner tout",
	sortable: "colonne triable"
};
// node_modules/react-aria/dist/private/intl/table/he-IL.mjs
var Ft = {};
Ft = {
	ascending: "עולה",
	ascendingSort: (e) => `\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${e.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5E2}\u{5D5}\u{5DC}\u{5D4}`,
	collapse: "כווץ",
	columnSize: (e) => `${e.value} \u{5E4}\u{5D9}\u{5E7}\u{5E1}\u{5DC}\u{5D9}\u{5DD}`,
	descending: "יורד",
	descendingSort: (e) => `\u{5DE}\u{5D5}\u{5D9}\u{5DF} \u{5DC}\u{5E4}\u{5D9} \u{5E2}\u{5DE}\u{5D5}\u{5D3}\u{5D4} ${e.columnName} \u{5D1}\u{5E1}\u{5D3}\u{5E8} \u{5D9}\u{5D5}\u{5E8}\u{5D3}`,
	expand: "הרחב",
	resizerDescription: "הקש Enter כדי לשנות את הגודל",
	select: "בחר",
	selectAll: "בחר הכול",
	sortable: "עמודה שניתן למיין"
};
// node_modules/react-aria/dist/private/intl/table/hr-HR.mjs
var It = {};
It = {
	ascending: "rastući",
	ascendingSort: (e) => `razvrstano po stupcima ${e.columnName} rastu\u{107}em redoslijedom`,
	collapse: "Sažmi",
	columnSize: (e) => `${e.value} piksela`,
	descending: "padajući",
	descendingSort: (e) => `razvrstano po stupcima ${e.columnName} padaju\u{107}im redoslijedom`,
	expand: "Proširi",
	resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
	select: "Odaberite",
	selectAll: "Odaberite sve",
	sortable: "stupac koji se može razvrstati"
};
// node_modules/react-aria/dist/private/intl/table/hu-HU.mjs
var Lt = {};
Lt = {
	ascending: "növekvő",
	ascendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, n\xf6vekv\u{151} sorrendben`,
	collapse: "Összecsukás",
	columnSize: (e) => `${e.value} k\xe9ppont`,
	descending: "csökkenő",
	descendingSort: (e) => `rendezve a(z) ${e.columnName} oszlop szerint, cs\xf6kken\u{151} sorrendben`,
	expand: "Kibontás",
	resizerDescription: "Nyomja le az Enter billentyűt az átméretezés megkezdéséhez",
	select: "Kijelölés",
	selectAll: "Összes kijelölése",
	sortable: "rendezendő oszlop"
};
// node_modules/react-aria/dist/private/intl/table/it-IT.mjs
var Rt = {};
Rt = {
	ascending: "crescente",
	ascendingSort: (e) => `in ordine crescente in base alla colonna ${e.columnName}`,
	collapse: "Comprimi",
	columnSize: (e) => `${e.value} pixel`,
	descending: "decrescente",
	descendingSort: (e) => `in ordine decrescente in base alla colonna ${e.columnName}`,
	expand: "Espandi",
	resizerDescription: "Premi Invio per iniziare a ridimensionare",
	select: "Seleziona",
	selectAll: "Seleziona tutto",
	sortable: "colonna ordinabile"
};
// node_modules/react-aria/dist/private/intl/table/ja-JP.mjs
var zt = {};
zt = {
	ascending: "昇順",
	ascendingSort: (e) => `\u{5217} ${e.columnName} \u{3092}\u{6607}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
	collapse: "折りたたむ",
	columnSize: (e) => `${e.value} \u{30D4}\u{30AF}\u{30BB}\u{30EB}`,
	descending: "降順",
	descendingSort: (e) => `\u{5217} ${e.columnName} \u{3092}\u{964D}\u{9806}\u{3067}\u{4E26}\u{3079}\u{66FF}\u{3048}`,
	expand: "展開",
	resizerDescription: "Enter キーを押してサイズ変更を開始",
	select: "選択",
	selectAll: "すべて選択",
	sortable: "並べ替え可能な列"
};
// node_modules/react-aria/dist/private/intl/table/ko-KR.mjs
var Bt = {};
Bt = {
	ascending: "오름차순",
	ascendingSort: (e) => `${e.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{C624}\u{B984}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
	collapse: "접기",
	columnSize: (e) => `${e.value} \u{D53D}\u{C140}`,
	descending: "내림차순",
	descendingSort: (e) => `${e.columnName} \u{C5F4}\u{C744} \u{AE30}\u{C900}\u{C73C}\u{B85C} \u{B0B4}\u{B9BC}\u{CC28}\u{C21C}\u{C73C}\u{B85C} \u{C815}\u{B82C}\u{B428}`,
	expand: "펼치기",
	resizerDescription: "크기 조정을 시작하려면 Enter를 누르세요.",
	select: "선택",
	selectAll: "모두 선택",
	sortable: "정렬 가능한 열"
};
// node_modules/react-aria/dist/private/intl/table/lt-LT.mjs
var Vt = {};
Vt = {
	ascending: "didėjančia tvarka",
	ascendingSort: (e) => `surikiuota pagal stulpel\u{12F} ${e.columnName} did\u{117}jan\u{10D}ia tvarka`,
	collapse: "Sutraukti",
	columnSize: (e) => `${e.value} piks.`,
	descending: "mažėjančia tvarka",
	descendingSort: (e) => `surikiuota pagal stulpel\u{12F} ${e.columnName} ma\u{17E}\u{117}jan\u{10D}ia tvarka`,
	expand: "Išskleisti",
	resizerDescription: "Paspauskite „Enter“, kad pradėtumėte keisti dydį",
	select: "Pasirinkti",
	selectAll: "Pasirinkti viską",
	sortable: "rikiuojamas stulpelis"
};
// node_modules/react-aria/dist/private/intl/table/lv-LV.mjs
var Ht = {};
Ht = {
	ascending: "augošā secībā",
	ascendingSort: (e) => `k\u{101}rtots p\u{113}c kolonnas ${e.columnName} augo\u{161}\u{101} sec\u{12B}b\u{101}`,
	collapse: "Sakļaut",
	columnSize: (e) => `${e.value} pikse\u{13C}i`,
	descending: "dilstošā secībā",
	descendingSort: (e) => `k\u{101}rtots p\u{113}c kolonnas ${e.columnName} dilsto\u{161}\u{101} sec\u{12B}b\u{101}`,
	expand: "Izvērst",
	resizerDescription: "Nospiediet Enter, lai sāktu izmēru mainīšanu",
	select: "Atlasīt",
	selectAll: "Atlasīt visu",
	sortable: "kārtojamā kolonna"
};
// node_modules/react-aria/dist/private/intl/table/nb-NO.mjs
var Ut = {};
Ut = {
	ascending: "stigende",
	ascendingSort: (e) => `sortert etter kolonne ${e.columnName} i stigende rekkef\xf8lge`,
	collapse: "Skjul",
	columnSize: (e) => `${e.value} piksler`,
	descending: "synkende",
	descendingSort: (e) => `sortert etter kolonne ${e.columnName} i synkende rekkef\xf8lge`,
	expand: "Utvid",
	resizerDescription: "Trykk på Enter for å starte størrelsesendring",
	select: "Velg",
	selectAll: "Velg alle",
	sortable: "kolonne som kan sorteres"
};
// node_modules/react-aria/dist/private/intl/table/nl-NL.mjs
var Wt = {};
Wt = {
	ascending: "oplopend",
	ascendingSort: (e) => `gesorteerd in oplopende volgorde in kolom ${e.columnName}`,
	collapse: "Samenvouwen",
	columnSize: (e) => `${e.value} pixels`,
	descending: "aflopend",
	descendingSort: (e) => `gesorteerd in aflopende volgorde in kolom ${e.columnName}`,
	expand: "Uitvouwen",
	resizerDescription: "Druk op Enter om het formaat te wijzigen",
	select: "Selecteren",
	selectAll: "Alles selecteren",
	sortable: "sorteerbare kolom"
};
// node_modules/react-aria/dist/private/intl/table/pl-PL.mjs
var Gt = {};
Gt = {
	ascending: "rosnąco",
	ascendingSort: (e) => `posortowano wed\u{142}ug kolumny ${e.columnName} w porz\u{105}dku rosn\u{105}cym`,
	collapse: "Zwiń",
	columnSize: (e) => `Liczba pikseli: ${e.value}`,
	descending: "malejąco",
	descendingSort: (e) => `posortowano wed\u{142}ug kolumny ${e.columnName} w porz\u{105}dku malej\u{105}cym`,
	expand: "Rozwiń",
	resizerDescription: "Naciśnij Enter, aby rozpocząć zmienianie rozmiaru",
	select: "Zaznacz",
	selectAll: "Zaznacz wszystko",
	sortable: "kolumna z możliwością sortowania"
};
// node_modules/react-aria/dist/private/intl/table/pt-BR.mjs
var Kt = {};
Kt = {
	ascending: "crescente",
	ascendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem crescente`,
	collapse: "Recolher",
	columnSize: (e) => `${e.value} pixels`,
	descending: "decrescente",
	descendingSort: (e) => `classificado pela coluna ${e.columnName} em ordem decrescente`,
	expand: "Expandir",
	resizerDescription: "Pressione Enter para começar a redimensionar",
	select: "Selecionar",
	selectAll: "Selecionar tudo",
	sortable: "coluna classificável"
};
// node_modules/react-aria/dist/private/intl/table/pt-PT.mjs
var qt = {};
qt = {
	ascending: "ascendente",
	ascendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem ascendente`,
	collapse: "Colapsar",
	columnSize: (e) => `${e.value} pixels`,
	descending: "descendente",
	descendingSort: (e) => `Ordenar por coluna ${e.columnName} em ordem descendente`,
	expand: "Expandir",
	resizerDescription: "Prima Enter para iniciar o redimensionamento",
	select: "Selecionar",
	selectAll: "Selecionar tudo",
	sortable: "Coluna ordenável"
};
// node_modules/react-aria/dist/private/intl/table/ro-RO.mjs
var Jt = {};
Jt = {
	ascending: "crescătoare",
	ascendingSort: (e) => `sortate dup\u{103} coloana ${e.columnName} \xeen ordine cresc\u{103}toare`,
	collapse: "Restrângeți",
	columnSize: (e) => `${e.value} pixeli`,
	descending: "descrescătoare",
	descendingSort: (e) => `sortate dup\u{103} coloana ${e.columnName} \xeen ordine descresc\u{103}toare`,
	expand: "Extindeți",
	resizerDescription: "Apăsați pe Enter pentru a începe redimensionarea",
	select: "Selectare",
	selectAll: "Selectare totală",
	sortable: "coloană sortabilă"
};
// node_modules/react-aria/dist/private/intl/table/ru-RU.mjs
var Yt = {};
Yt = {
	ascending: "возрастание",
	ascendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${e.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{432}\u{43E}\u{437}\u{440}\u{430}\u{441}\u{442}\u{430}\u{43D}\u{438}\u{44F}`,
	collapse: "Свернуть",
	columnSize: (e) => `${e.value} \u{43F}\u{438}\u{43A}\u{441}.`,
	descending: "убывание",
	descendingSort: (e) => `\u{441}\u{43E}\u{440}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{441}\u{442}\u{43E}\u{43B}\u{431}\u{435}\u{446} ${e.columnName} \u{432} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{435} \u{443}\u{431}\u{44B}\u{432}\u{430}\u{43D}\u{438}\u{44F}`,
	expand: "Развернуть",
	resizerDescription: "Нажмите клавишу Enter для начала изменения размеров",
	select: "Выбрать",
	selectAll: "Выбрать все",
	sortable: "сортируемый столбец"
};
// node_modules/react-aria/dist/private/intl/table/sk-SK.mjs
var Xt = {};
Xt = {
	ascending: "vzostupne",
	ascendingSort: (e) => `zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${e.columnName}`,
	collapse: "Zbaliť",
	columnSize: (e) => `Po\u{10D}et pixelov: ${e.value}`,
	descending: "zostupne",
	descendingSort: (e) => `zoraden\xe9 zostupne pod\u{13E}a st\u{13A}pca ${e.columnName}`,
	expand: "Rozbaliť",
	resizerDescription: "Stlačením klávesu Enter začnete zmenu veľkosti",
	select: "Vybrať",
	selectAll: "Vybrať všetko",
	sortable: "zoraditeľný stĺpec"
};
// node_modules/react-aria/dist/private/intl/table/sl-SI.mjs
var Zt = {};
Zt = {
	ascending: "naraščajoče",
	ascendingSort: (e) => `razvr\u{161}\u{10D}eno po stolpcu ${e.columnName} v nara\u{161}\u{10D}ajo\u{10D}em vrstnem redu`,
	collapse: "Strni",
	columnSize: (e) => `${e.value} slikovnih pik`,
	descending: "padajoče",
	descendingSort: (e) => `razvr\u{161}\u{10D}eno po stolpcu ${e.columnName} v padajo\u{10D}em vrstnem redu`,
	expand: "Razširi",
	resizerDescription: "Pritisnite tipko Enter da začnete spreminjati velikost",
	select: "Izberite",
	selectAll: "Izberite vse",
	sortable: "razvrstljivi stolpec"
};
// node_modules/react-aria/dist/private/intl/table/sr-SP.mjs
var Qt = {};
Qt = {
	ascending: "rastući",
	ascendingSort: (e) => `sortirano po kolonama ${e.columnName} rastu\u{107}im redosledom`,
	collapse: "Skupi",
	columnSize: (e) => `${e.value} piksela`,
	descending: "padajući",
	descendingSort: (e) => `sortirano po kolonama ${e.columnName} padaju\u{107}im redosledom`,
	expand: "Proširi",
	resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
	select: "Izaberite",
	selectAll: "Izaberite sve",
	sortable: "kolona koja se može sortirati"
};
// node_modules/react-aria/dist/private/intl/table/sv-SE.mjs
var $t = {};
$t = {
	ascending: "stigande",
	ascendingSort: (e) => `sorterat p\xe5 kolumn ${e.columnName} i stigande ordning`,
	collapse: "Dölj",
	columnSize: (e) => `${e.value} pixlar`,
	descending: "fallande",
	descendingSort: (e) => `sorterat p\xe5 kolumn ${e.columnName} i fallande ordning`,
	expand: "Expandera",
	resizerDescription: "Tryck på Retur för att börja ändra storlek",
	select: "Markera",
	selectAll: "Markera allt",
	sortable: "sorterbar kolumn"
};
// node_modules/react-aria/dist/private/intl/table/tr-TR.mjs
var en = {};
en = {
	ascending: "artan sırada",
	ascendingSort: (e) => `${e.columnName} s\xfctuna g\xf6re artan d\xfczende s\u{131}rala`,
	collapse: "Daralt",
	columnSize: (e) => `${e.value} piksel`,
	descending: "azalan sırada",
	descendingSort: (e) => `${e.columnName} s\xfctuna g\xf6re azalan d\xfczende s\u{131}rala`,
	expand: "Genişlet",
	resizerDescription: "Yeniden boyutlandırmak için Enter'a basın",
	select: "Seç",
	selectAll: "Tümünü Seç",
	sortable: "Sıralanabilir sütun"
};
// node_modules/react-aria/dist/private/intl/table/uk-UA.mjs
var tn = {};
tn = {
	ascending: "висхідний",
	ascendingSort: (e) => `\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${e.columnName} \u{443} \u{432}\u{438}\u{441}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
	collapse: "Згорнути",
	columnSize: (e) => `${e.value} \u{43F}\u{456}\u{43A}\u{441}.`,
	descending: "низхідний",
	descendingSort: (e) => `\u{432}\u{456}\u{434}\u{441}\u{43E}\u{440}\u{442}\u{43E}\u{432}\u{430}\u{43D}\u{43E} \u{437}\u{430} \u{441}\u{442}\u{43E}\u{432}\u{43F}\u{446}\u{435}\u{43C} ${e.columnName} \u{443} \u{43D}\u{438}\u{437}\u{445}\u{456}\u{434}\u{43D}\u{43E}\u{43C}\u{443} \u{43F}\u{43E}\u{440}\u{44F}\u{434}\u{43A}\u{443}`,
	expand: "Розгорнути",
	resizerDescription: "Натисніть Enter, щоб почати зміну розміру",
	select: "Вибрати",
	selectAll: "Вибрати все",
	sortable: "сортувальний стовпець"
};
// node_modules/react-aria/dist/private/intl/table/zh-CN.mjs
var nn = {};
nn = {
	ascending: "升序",
	ascendingSort: (e) => `\u{6309}\u{5217} ${e.columnName} \u{5347}\u{5E8F}\u{6392}\u{5E8F}`,
	collapse: "折叠",
	columnSize: (e) => `${e.value} \u{50CF}\u{7D20}`,
	descending: "降序",
	descendingSort: (e) => `\u{6309}\u{5217} ${e.columnName} \u{964D}\u{5E8F}\u{6392}\u{5E8F}`,
	expand: "扩展",
	resizerDescription: "按 Enter 开始调整大小。",
	select: "选择",
	selectAll: "全选",
	sortable: "可排序的列"
};
// node_modules/react-aria/dist/private/intl/table/zh-TW.mjs
var rn = {};
rn = {
	ascending: "遞增",
	ascendingSort: (e) => `\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${e.columnName}\u{300D}\u{6B04}\u{905E}\u{589E}\u{6392}\u{5E8F}`,
	collapse: "收合",
	columnSize: (e) => `${e.value} \u{50CF}\u{7D20}`,
	descending: "遞減",
	descendingSort: (e) => `\u{5DF2}\u{4F9D}\u{64DA}\u{300C}${e.columnName}\u{300D}\u{6B04}\u{905E}\u{6E1B}\u{6392}\u{5E8F}`,
	expand: "展開",
	resizerDescription: "按 Enter 鍵以開始調整大小",
	select: "選取",
	selectAll: "全選",
	sortable: "可排序的欄"
};
// node_modules/react-aria/dist/private/table/intlStrings.mjs
var an = {};
an = {
	"ar-AE": wt,
	"bg-BG": Tt,
	"cs-CZ": Et,
	"da-DK": Dt,
	"de-DE": Ot,
	"el-GR": kt,
	"en-US": At,
	"es-ES": jt,
	"et-EE": Mt,
	"fi-FI": Nt,
	"fr-FR": Pt,
	"he-IL": Ft,
	"hr-HR": It,
	"hu-HU": Lt,
	"it-IT": Rt,
	"ja-JP": zt,
	"ko-KR": Bt,
	"lt-LT": Vt,
	"lv-LV": Ht,
	"nb-NO": Ut,
	"nl-NL": Wt,
	"pl-PL": Gt,
	"pt-BR": Kt,
	"pt-PT": qt,
	"ro-RO": Jt,
	"ru-RU": Yt,
	"sk-SK": Xt,
	"sl-SI": Zt,
	"sr-SP": Qt,
	"sv-SE": $t,
	"tr-TR": en,
	"uk-UA": tn,
	"zh-CN": nn,
	"zh-TW": rn
};
// node_modules/react-aria/dist/private/table/TableKeyboardDelegate.mjs
var on = class extends ht {
	isCell(e) {
		return e.type === "cell" || e.type === "rowheader" || e.type === "column";
	}
	getKeyBelow(e, t) {
		let n = this.collection.getItem(e);
		if (!n) return null;
		if (n.type === "column") {
			let e = z(I(n, this.collection));
			if (e) return e.key;
			let t = this.getFirstKey();
			return t == null || !this.collection.getItem(t) ? null : super.getKeyForItemInRowByIndex(t, n.index);
		}
		return super.getKeyBelow(e, t);
	}
	getKeyAbove(e, t) {
		let n = this.collection.getItem(e);
		if (!n) return null;
		if (n.type === "column") {
			let e = n.parentKey == null ? null : this.collection.getItem(n.parentKey);
			return e && e.type === "column" ? e.key : null;
		}
		let r = super.getKeyAbove(e, t), i = r == null ? null : this.collection.getItem(r);
		return i && i.type !== "headerrow" ? r : this.isCell(n) ? this.collection.columns[n.index].key : this.collection.columns[0].key;
	}
	findNextColumnKey(e) {
		let t = this.findNextKey(e.key, (e) => e.type === "column");
		if (t != null) return t;
		let n = this.collection.headerRows[e.level];
		for (let e of I(n, this.collection)) if (e.type === "column") return e.key;
		return null;
	}
	findPreviousColumnKey(e) {
		let t = this.findPreviousKey(e.key, (e) => e.type === "column");
		if (t != null) return t;
		let n = this.collection.headerRows[e.level], r = [...I(n, this.collection)];
		for (let e = r.length - 1; e >= 0; e--) {
			let t = r[e];
			if (t.type === "column") return t.key;
		}
		return null;
	}
	getKeyRightOf(e) {
		let t = this.collection.getItem(e);
		return t ? t.type === "column" ? this.direction === "rtl" ? this.findPreviousColumnKey(t) : this.findNextColumnKey(t) : super.getKeyRightOf(e) : null;
	}
	getKeyLeftOf(e) {
		let t = this.collection.getItem(e);
		return t ? t.type === "column" ? this.direction === "rtl" ? this.findNextColumnKey(t) : this.findPreviousColumnKey(t) : super.getKeyLeftOf(e) : null;
	}
	getKeyForSearch(e, t) {
		if (!this.collator) return null;
		let n = this.collection, r = t ?? this.getFirstKey();
		if (r == null) return null;
		let i = n.getItem(r);
		i?.type === "cell" && (r = i.parentKey ?? null);
		let a = !1;
		for (; r != null;) {
			let o = n.getItem(r);
			if (!o) return null;
			if (o.textValue) {
				let t = o.textValue.slice(0, e.length);
				if (this.collator.compare(t, e) === 0) return o.key;
			}
			for (let r of I(o, this.collection)) {
				let a = n.columns[r.index];
				if (n.rowHeaderColumnKeys.has(a.key) && r.textValue) {
					let a = r.textValue.slice(0, e.length);
					if (this.collator.compare(a, e) === 0) return (t == null ? i : n.getItem(t))?.type === "cell" ? r.key : o.key;
				}
			}
			r = this.getKeyBelow(r), r == null && !a && (r = this.getFirstKey(), a = !0);
		}
		return null;
	}
};
// node_modules/react-aria/dist/private/table/useTable.mjs
function sn(e) {
	return e && e.__esModule ? e.default : e;
}
function cn(e, t, n) {
	let { keyboardDelegate: r, isVirtualized: i, layoutDelegate: a, layout: o } = e, s = Ae({
		usage: "search",
		sensitivity: "base"
	}), { direction: c } = U(), l = t.selectionManager.disabledBehavior, u = (0, Y.useMemo)(() => r || new on({
		collection: t.collection,
		disabledKeys: t.disabledKeys,
		disabledBehavior: l,
		ref: n,
		direction: c,
		collator: s,
		layoutDelegate: a,
		layout: o
	}), [
		r,
		t.collection,
		t.disabledKeys,
		l,
		n,
		c,
		s,
		a,
		o
	]), d = b(e.id);
	yt.set(t, d);
	let { gridProps: f } = vt({
		...e,
		id: d,
		keyboardDelegate: u
	}, t, n);
	i && (f["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), t.treeColumn != null && (f.role = "treegrid");
	let { column: p, direction: m } = t.sortDescriptor || {}, h = W(sn(an), "@react-aria/table"), g = (0, Y.useMemo)(() => {
		let e = t.collection.columns.find((e) => e.key === p)?.textValue ?? "";
		return m && p ? h.format(`${m}Sort`, { columnName: e }) : void 0;
	}, [
		m,
		p,
		t.collection.columns
	]), _ = ue(g);
	return Fe(() => {
		g && xe(g, "assertive", 500);
	}, [g]), { gridProps: v(f, _, { "aria-describedby": [_["aria-describedby"], f["aria-describedby"]].filter(Boolean).join(" ") }) };
}
// node_modules/react-aria/dist/private/grid/useGridCell.mjs
function ln(e, t, n) {
	let { node: r, isVirtualized: i, focusMode: a, allowsArrowNavigation: o, shouldSelectOnPressUp: s, onAction: c } = e, { direction: l } = U(), { keyboardDelegate: u, actions: { onCellAction: d }, keyboardNavigationBehavior: f } = _t.get(t), p = a ?? (f === "tab" ? "cell" : "child"), m = (0, Y.useRef)(null), h = (0, Y.useRef)(null), g = () => {
		if (n.current) {
			let e = V(n.current);
			if (p === "child") {
				let i = Te(Ce(n.current));
				if (ke(n.current) && n.current !== i) return;
				let a = Ce(n.current);
				if (!i || i === a.body || i === n.current) {
					let e = h.current;
					if (e && m.current === r.key && K(n.current, e)) {
						q(e);
						return;
					}
				}
				let o = t.selectionManager.childFocusStrategy === "last" ? un(e) : e.firstChild();
				if (o) {
					q(o);
					return;
				}
			}
			(m.current != null && r.key !== m.current || !ke(n.current)) && q(n.current);
		}
	}, { itemProps: _, isPressed: y } = re({
		selectionManager: t.selectionManager,
		key: r.key,
		ref: n,
		isVirtualized: i,
		focus: g,
		shouldSelectOnPressUp: s,
		onAction: d ? () => d(r.key) : c,
		isDisabled: t.collection.size === 0
	}), b = v(_, {
		role: "gridcell",
		onKeyDownCapture: f !== "tab" || o ? (e) => {
			let i = Te(Ce(n.current));
			if (!K(e.currentTarget, G(e)) || t.isKeyboardNavigationDisabled || !n.current || !i) return;
			let a = V(n.current);
			switch (a.currentNode = i, e.key) {
				case "ArrowLeft": {
					let t = l === "rtl" ? a.nextNode() : a.previousNode();
					if (p === "child" && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t) q(t), H(t, { containingElement: Le(n.current) });
					else {
						if (u.getKeyLeftOf?.(r.key) !== r.key) {
							n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
							break;
						}
						p === "cell" && l === "rtl" ? (q(n.current), H(n.current, { containingElement: Le(n.current) })) : (a.currentNode = n.current, t = l === "rtl" ? a.firstChild() : un(a), t && (q(t), H(t, { containingElement: Le(n.current) })));
					}
					break;
				}
				case "ArrowRight": {
					let t = l === "rtl" ? a.previousNode() : a.nextNode();
					if (p === "child" && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t) q(t), H(t, { containingElement: Le(n.current) });
					else {
						if (u.getKeyRightOf?.(r.key) !== r.key) {
							n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
							break;
						}
						p === "cell" && l === "ltr" ? (q(n.current), H(n.current, { containingElement: Le(n.current) })) : (a.currentNode = n.current, t = l === "rtl" ? un(a) : a.firstChild(), t && (q(t), H(t, { containingElement: Le(n.current) })));
					}
					break;
				}
				case "ArrowUp":
				case "ArrowDown": !e.altKey && K(n.current, G(e)) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
			}
		} : void 0,
		onKeyDown: f === "tab" ? (e) => {
			let r = Te(Ce(n.current));
			if (K(e.currentTarget, G(e)) && !t.isKeyboardNavigationDisabled && n.current && r) {
				if (f === "tab" && G(e) !== n.current && e.key !== "Tab") e.stopPropagation();
				else if (e.key === "Tab" && f === "tab") {
					let t = V(n.current, { tabbable: !0 });
					t.currentNode = r, (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation();
				}
			}
		} : void 0,
		"aria-colspan": r.colSpan,
		"aria-colindex": r.colIndex == null ? void 0 : r.colIndex + 1,
		colSpan: i ? void 0 : r.colSpan,
		onFocus: (e) => {
			if (m.current = r.key, G(e) !== n.current) {
				let i = G(e);
				n.current && K(n.current, i) && (h.current = i), De() || t.selectionManager.setFocusedKey(r.key);
			} else p === "child" && e.relatedTarget && K(n.current, e.relatedTarget) || requestAnimationFrame(() => {
				p === "child" && Te(Ce(n.current)) === n.current && g();
			});
		},
		...p === "child" && f === "tab" ? { tabIndex: -1 } : {}
	});
	return i && (b["aria-colindex"] = (r.colIndex ?? r.index) + 1), s && b.tabIndex != null && b.onPointerDown == null && (b.onPointerDown = (e) => {
		let t = e.currentTarget, n = t.getAttribute("tabindex");
		t.removeAttribute("tabindex"), requestAnimationFrame(() => {
			n != null && t.setAttribute("tabindex", n);
		});
	}), {
		gridCellProps: b,
		isPressed: y
	};
}
function un(e) {
	let t = null, n = null;
	do
		n = e.lastChild(), n && (t = n);
	while (n);
	return t;
}
// node_modules/react-aria/dist/private/table/useTableColumnHeader.mjs
function dn(e) {
	return e && e.__esModule ? e.default : e;
}
function fn(e, t, n) {
	let { node: r } = e, i = r.props.allowsSorting, { gridCellProps: a } = ln({
		focusMode: "child",
		...e
	}, t, n), o = r.props.isSelectionCell && t.selectionManager.selectionMode === "single", { pressProps: s, isPressed: c } = Re({
		isDisabled: !i || o,
		onPress() {
			t.sort(r.key);
		},
		ref: n
	}), { focusableProps: l } = Ie({}, n), u, d = t.sortDescriptor?.column === r.key, f = t.sortDescriptor?.direction;
	r.props.allowsSorting && !Se() && (u = d ? f : "none");
	let p = W(dn(an), "@react-aria/table"), m;
	i && (m = `${p.format("sortable")}`, d && f && Se() && (m = `${m}, ${p.format(f)}`));
	let h = ue(m), g = t.collection.size === 0;
	return (0, Y.useEffect)(() => {
		g && t.selectionManager.focusedKey === r.key && t.selectionManager.setFocusedKey(null);
	}, [
		g,
		t.selectionManager,
		r.key
	]), {
		columnHeaderProps: {
			...v(l, a, s, h, g ? { tabIndex: -1 } : null),
			role: "columnheader",
			id: xt(t, r.key),
			"aria-colspan": r.colSpan && r.colSpan > 1 ? r.colSpan : void 0,
			"aria-sort": u
		},
		isPressed: c
	};
}
// node_modules/react-aria/dist/private/grid/useGridRow.mjs
function pn(e, t, n) {
	let { node: r, isVirtualized: i, shouldSelectOnPressUp: a, onAction: o } = e, { actions: s, shouldSelectOnPressUp: c } = _t.get(t), l = s.onRowAction ? () => s.onRowAction?.(r.key) : o, { itemProps: u, ...d } = re({
		selectionManager: t.selectionManager,
		key: r.key,
		ref: n,
		isVirtualized: i,
		shouldSelectOnPressUp: c || a,
		onAction: l || r?.props?.onAction ? y(r?.props?.onAction, l) : void 0,
		isDisabled: t.collection.size === 0
	}), f = t.selectionManager.isSelected(r.key), p = {
		role: "row",
		"aria-selected": t.selectionManager.selectionMode === "none" ? void 0 : f,
		"aria-disabled": d.isDisabled || void 0,
		...u
	};
	return i && (p["aria-rowindex"] = r.index + 1), {
		rowProps: p,
		...d
	};
}
// node_modules/react-aria/dist/private/table/useTableRow.mjs
function mn(e) {
	return e && e.__esModule ? e.default : e;
}
var hn = {
	expand: {
		ltr: "ArrowRight",
		rtl: "ArrowLeft"
	},
	collapse: {
		ltr: "ArrowLeft",
		rtl: "ArrowRight"
	}
};
function gn(e, t, n) {
	let { node: r, isVirtualized: i } = e, { rowProps: a, ...o } = pn(e, t, n), { direction: s } = U();
	i && t.treeColumn == null ? a["aria-rowindex"] = r.index + 1 + t.collection.headerRows.length : delete a["aria-rowindex"];
	let c = t.treeColumn != null && (t.expandedKeys === "all" || t.expandedKeys.has(r.key)), l = W(mn(an), "@react-aria/table"), u = Ve({
		"aria-label": c ? l.format("collapse") : l.format("expand"),
		"aria-labelledby": Ct(t, r.key)
	}), d = {}, f = {};
	if (t.treeColumn != null) {
		let e = t.collection.getItem(r.key);
		if (e != null) {
			let n = _n(t.collection, r), i = e.props?.hasChildRows || e.props?.UNSTABLE_childItems || n?.type !== "cell", a = t.collection.getItem(r.parentKey), c = a.type === "tablebody" || a.type === "body", l = _n(t.collection, a);
			for (; l && l.type !== "item" && l.prevKey != null;) l = t.collection.getItem(l.prevKey);
			d = {
				onKeyDown: (n) => {
					n.key === hn.expand[s] && t.selectionManager.focusedKey === e.key && i && t.expandedKeys !== "all" && !t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), n.stopPropagation()) : n.key === hn.collapse[s] && t.selectionManager.focusedKey === e.key && (t.expandedKeys === "all" ? t.expandedKeys === "all" && (t.toggleKey(e.key), n.stopPropagation()) : i && t.expandedKeys.has(e.key) ? (t.toggleKey(e.key), n.stopPropagation()) : !t.expandedKeys.has(e.key) && e.parentKey != null && e.level > 0 && (t.selectionManager.setFocusedKey(e.parentKey), n.stopPropagation()));
				},
				"aria-expanded": i ? t.expandedKeys === "all" || t.expandedKeys.has(r.key) : void 0,
				"aria-level": e.level + 1,
				"aria-posinset": e.index - (c ? 0 : t.collection.columnCount) + 1,
				"aria-setsize": l.index - (c ? 0 : t.collection.columnCount) + 1
			}, f = {
				isDisabled: o.isDisabled,
				onPress: () => {
					o.isDisabled || (t.toggleKey(r.key), t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(r.key));
				},
				excludeFromTabOrder: !0,
				preventFocusOnPress: !0,
				"data-react-aria-prevent-focus": !0,
				...u
			};
		}
	}
	let p = we(r.props), m = o.hasAction ? p : {};
	return {
		rowProps: {
			...v(a, d, m),
			"aria-labelledby": Ct(t, r.key)
		},
		expandButtonProps: f,
		...o
	};
}
function _n(e, t) {
	return "lastChildKey" in t ? t.lastChildKey == null ? null : e.getItem(t.lastChildKey) : Array.from(t.childNodes).findLast((e) => e.parentKey === t.key);
}
// node_modules/react-aria/dist/private/table/useTableHeaderRow.mjs
function vn(e, t, n) {
	let { node: r, isVirtualized: i } = e, a = { role: "row" };
	return i && t.treeColumn == null && (a["aria-rowindex"] = r.index + 1), { rowProps: a };
}
// node_modules/react-aria/dist/private/table/useTableCell.mjs
function yn(e, t, n) {
	let { gridCellProps: r, isPressed: i } = ln(e, t, n), a = e.node.column?.key;
	return a != null && t.collection.rowHeaderColumnKeys.has(a) && (r.role = "rowheader", r.id = St(t, e.node.parentKey, a)), {
		gridCellProps: r,
		isPressed: i
	};
}
// node_modules/react-aria/dist/private/table/useTableSelectionCheckbox.mjs
function bn(e) {
	return e && e.__esModule ? e.default : e;
}
function xn(e, t) {
	let { key: n } = e, { checkboxProps: r } = qe(e, t);
	return { checkboxProps: {
		...r,
		"aria-labelledby": `${r.id} ${Ct(t, n)}`
	} };
}
function Sn(e) {
	let { isEmpty: t, isSelectAll: n, selectionMode: r } = e.selectionManager;
	return { checkboxProps: {
		"aria-label": W(bn(an), "@react-aria/table").format(r === "single" ? "select" : "selectAll"),
		isSelected: n,
		isDisabled: r !== "multiple" || e.collection.size === 0 || e.collection.rows.length === 1 && e.collection.rows[0].type === "loader",
		isIndeterminate: !t && !n,
		onChange: () => e.selectionManager.toggleSelectAll()
	} };
}
// node_modules/react-aria/dist/private/table/useTableColumnResize.mjs
function Cn(e) {
	return e && e.__esModule ? e.default : e;
}
function wn(e, t, n) {
	let { column: r, triggerRef: i, isDisabled: a, onResizeStart: o, onResize: s, onResizeEnd: c, "aria-label": l } = e, u = W(Cn(an), "@react-aria/table"), d = b(), f = t.resizingColumn === r.key, p = (0, Y.useRef)(f), m = (0, Y.useRef)(null), h = (0, Y.useRef)(!1), g = t.tableState.isKeyboardNavigationDisabled, [_, y] = (0, Y.useState)(!1), { direction: x } = U(), S = (0, Y.useCallback)((e) => {
		p.current || (m.current = t.updateResizedColumns(e.key, t.getColumnWidth(e.key)), t.startResize(e.key), t.tableState.setKeyboardNavigationDisabled(!0), o?.(m.current)), p.current = !0;
	}, [t, o]), C = (0, Y.useCallback)((e, n) => {
		let r = t.updateResizedColumns(e.key, n);
		s?.(r), m.current = r;
	}, [t, s]), w = (0, Y.useCallback)((e) => {
		p.current && (m.current ??= t.updateResizedColumns(e.key, t.getColumnWidth(e.key)), t.endResize(), t.tableState.setKeyboardNavigationDisabled(!1), c?.(m.current), p.current = !1, i?.current && !h.current && q(i.current)), m.current = null;
	}, [
		t,
		i,
		c
	]), T = () => {
		if (g) w(r);
		else return !1;
	}, { keyboardProps: E } = Oe({ shortcuts: {
		Escape: () => T(),
		Enter: () => {
			g ? w(r) : S(r);
		},
		" ": () => T(),
		Tab: () => T()
	} }), D = (0, Y.useRef)(0), { moveProps: O } = ze({
		onMoveStart(e) {
			D.current = t.getColumnWidth(r.key), e.pointerType === "mouse" && y(!0), S(r);
		},
		onMove(e) {
			let { deltaX: t, deltaY: n, pointerType: i } = e;
			x === "rtl" && (t *= -1), i === "keyboard" && (n !== 0 && t === 0 && (t = n * -1), t *= 10), t !== 0 && (D.current += t, C(r, D.current));
		},
		onMoveEnd(e) {
			let { pointerType: t } = e;
			D.current = 0, y(!1), (t === "mouse" || t === "touch" && h.current) && w(r);
		}
	}), ee = (0, Y.useCallback)((e) => {
		g && O.onKeyDown?.(e);
	}, [g, O]), k = Math.floor(t.getColumnMinWidth(r.key)), A = Math.floor(t.getColumnMaxWidth(r.key));
	A === Infinity && (A = 2 ** 53 - 1);
	let j = Math.floor(t.getColumnWidth(r.key)), M = Ee();
	M === "virtual" && typeof window < "u" && "ontouchstart" in window && (M = "touch");
	let te = i?.current == null && (M === "keyboard" || M === "virtual") && !f ? u.format("resizerDescription") : void 0, N = ue(te), ne = {
		"aria-label": l,
		"aria-orientation": "horizontal",
		"aria-labelledby": `${d} ${xt(t.tableState, r.key)}`,
		"aria-valuetext": u.format("columnSize", { value: j }),
		type: "range",
		min: k,
		max: A,
		value: j,
		...N
	}, P = (0, Y.useCallback)(() => {
		n.current && q(n.current);
	}, [n]), F = t.resizingColumn, re = (0, Y.useRef)(null), I = ge(S);
	(0, Y.useEffect)(() => {
		if (re.current !== F && F != null && F === r.key) {
			h.current = Te() === n.current, I(r);
			let e = setTimeout(() => P(), 0), t = setTimeout(P, 400);
			return () => {
				clearTimeout(e), clearTimeout(t);
			};
		}
		re.current = F;
	}, [
		F,
		r,
		P,
		n
	]);
	let L = (e) => {
		let n = t.getColumnWidth(r.key), i = parseFloat(G(e).value);
		i = i > n ? n + 10 : n - 10, C(r, i);
	}, { pressProps: ie } = Re({
		preventFocusOnPress: !0,
		onPressStart: (e) => {
			e.ctrlKey || e.altKey || e.metaKey || e.shiftKey || e.pointerType === "keyboard" || (e.pointerType === "virtual" && t.resizingColumn != null ? w(r) : (P(), e.pointerType !== "virtual" && S(r)));
		},
		onPress: (e) => {
			(e.pointerType === "touch" && h.current || e.pointerType === "mouse") && t.resizingColumn != null && w(r);
		}
	}), { visuallyHiddenProps: R } = Be();
	return {
		resizerProps: v(E, {
			...O,
			onKeyDown: ee
		}, ie, { style: { touchAction: "none" } }),
		inputProps: v(R, {
			id: d,
			onBlur: () => {
				w(r);
			},
			onChange: L,
			disabled: a
		}, ne),
		isResizing: f,
		isMouseResizing: _
	};
}
// node_modules/react-aria/dist/private/grid/useGridRowGroup.mjs
function Tn() {
	return { rowGroupProps: { role: "rowgroup" } };
}
// node_modules/react-aria/dist/private/table/useTableRowGroup.mjs
function En() {
	return Tn();
}
// node_modules/react-aria-components/dist/private/Table.mjs
var Dn = /* @__PURE__ */ r(me(), 1);
function On(e) {
	return e && e.__esModule ? e.default : e;
}
var kn = class extends d {
	withExpandedKeys(e) {
		let t = this.clone();
		return t.expandedKeys = e, t.frozen = this.frozen, t.rows = Array.from(t.getRows()), t;
	}
	addNode(e) {
		super.addNode(e), this.columnsDirty ||= e.type === "column", e.type === "tableheader" && (this.head = e);
	}
	getRows() {
		let e = [];
		for (let t of this) (t.type === "tablebody" || t.type === "tablefooter") && e.push(...this.getChildren(t.key));
		return e;
	}
	get body() {
		for (let e of this) if (e.type === "tablebody") return e;
		return new Yn(-2);
	}
	commit(e, t, n = !1) {
		this.updateColumns(n), this.firstKey = e, this.lastKey = t, this.rows = [];
		for (let e of this.getRows()) {
			let t = e.lastChildKey;
			if (t != null) {
				let e = this.getItem(t);
				for (; e && e.type !== "cell";) e = e.prevKey == null ? null : this.getItem(e.prevKey);
				if (e) {
					let t = (e.colIndex ?? e.index) + (e.colSpan ?? 1);
					if (t !== this.columns.length && !n) throw Error(`Cell count must match column count. Found ${t} cells and ${this.columns.length} columns.`);
				}
			}
			this.rows.push(e);
		}
		super.commit(e, t, n);
	}
	updateColumns(e) {
		if (!this.columnsDirty) return;
		this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.columns = [];
		let t = /* @__PURE__ */ new Map(), n = (e) => {
			e.type === "column" && (t.set(e.key, e), e.hasChildNodes || (e.index = this.columns.length, this.columns.push(e), e.props.isRowHeader && this.rowHeaderColumnKeys.add(e.key)));
			for (let t of this.getChildren(e.key)) n(t);
		};
		for (let e of this.getChildren(this.head.key)) n(e);
		if (this.headerRows = et(t, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !e) throw Error("A table must have at least one Column with the isRowHeader prop set to true");
	}
	get columnCount() {
		return this.columns.length;
	}
	*[Symbol.iterator]() {
		let e = this.firstKey;
		for (; e != null;) {
			let t = this.getItem(e);
			t && (yield t), e = t?.nextKey ?? null;
		}
	}
	getFirstKey() {
		for (let e of this) if (e.type === "tablebody") return e.firstChildKey ?? null;
		return null;
	}
	getLastKey() {
		let e = this.lastKey;
		if (e == null) return null;
		let t = this.getItem(e);
		for (; t?.lastChildKey != null && (t.type !== "item" || this.expandedKeys.has(t.key));) t = this.getItem(t.lastChildKey);
		return t?.key;
	}
	getKeyAfter(e) {
		let t = this.getItem(e);
		if (t?.type === "column") return t.nextKey ?? null;
		if (!t) return null;
		if (t.type === "item" && t.firstChildKey != null && this.expandedKeys.has(t.key)) {
			let e = this.getItem(t.firstChildKey);
			for (; e;) {
				if (e.type === "item") return e.key;
				e = e.nextKey == null ? null : this.getItem(e.nextKey);
			}
		}
		return super.getKeyAfter(e);
	}
	getKeyBefore(e) {
		let t = this.getItem(e);
		if (t?.type === "column") return t.prevKey ?? null;
		if (!t) return null;
		let n = null;
		if (t.prevKey != null) {
			for (t = this.getItem(t.prevKey); t && (t.type !== "item" || this.expandedKeys.has(t.key)) && t.lastChildKey != null;) t = this.getItem(t.lastChildKey);
			n = t?.key ?? null;
		}
		return n ??= t.parentKey, n != null && this.getItem(n)?.type === "tableheader" ? null : n;
	}
	getChildren(e) {
		let t = this.getItem(e);
		if (!t) {
			for (let t of this.headerRows) if (t.key === e) return t.childNodes;
		}
		let n = this;
		return t?.type === "tablebody" || t?.type === "tablefooter" ? { *[Symbol.iterator]() {
			let e = t.firstChildKey, r = e == null ? null : n.getItem(e);
			for (; r;) {
				yield r;
				let e = n.getKeyAfter(r.key);
				if (r = e == null ? null : n.getItem(e), r && r.parentKey === t.parentKey) break;
			}
		} } : { *[Symbol.iterator]() {
			let t = n.getItem(e), r = t?.firstChildKey == null ? null : n.getItem(t.firstChildKey);
			for (; r && (yield r, r = r.nextKey == null ? null : n.getItem(r.nextKey), t?.type !== "item" || r?.type === "cell"););
		} };
	}
	clone() {
		let e = super.clone();
		return e.headerRows = this.headerRows, e.columns = this.columns, e.rows = this.rows, e.rowHeaderColumnKeys = this.rowHeaderColumnKeys, e.head = this.head, e;
	}
	getTextValue(e) {
		let t = this.getItem(e);
		if (!t) return "";
		if (t.textValue) return t.textValue;
		let n = this.rowHeaderColumnKeys, r = [];
		for (let t of this.getChildren(e)) {
			let e = this.columns[t.index];
			if (n.has(e.key) && t.textValue && r.push(t.textValue), r.length === n.size) break;
		}
		return r.join(" ");
	}
	constructor(...e) {
		super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.head = new zn(-1), this.columnsDirty = !0, this.expandedKeys = /* @__PURE__ */ new Set();
	}
}, An = /*#__PURE__*/ (0, Y.createContext)(null), jn = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	let n = E(t), r = (0, Y.useRef)(null), i = (0, Y.useRef)(null), [a, o] = (0, Y.useState)(0);
	ye(() => {
		let e = r.current;
		for (; e && e !== n.current && !le(e);) e = e.parentElement;
		i.current = e;
	}, [n]), be({
		ref: i,
		box: "border-box",
		onResize() {
			o(i.current?.clientWidth ?? 0);
		}
	}), ye(() => {
		o(i.current?.clientWidth ?? 0);
	}, []);
	let s = (0, Y.useMemo)(() => ({
		tableRef: r,
		scrollRef: i,
		tableWidth: a,
		useTableColumnResizeState: ut,
		onResizeStart: e.onResizeStart,
		onResize: e.onResize,
		onResizeEnd: e.onResizeEnd
	}), [
		r,
		a,
		e.onResizeStart,
		e.onResize,
		e.onResizeEnd
	]);
	return /*#__PURE__*/ Y.createElement(w.div, {
		render: e.render,
		...B(e, { global: !0 }),
		ref: n,
		className: e.className || "react-aria-ResizableTableContainer",
		style: e.style,
		onScroll: e.onScroll
	}, /*#__PURE__*/ Y.createElement(An.Provider, { value: s }, e.children));
}), Mn = /*#__PURE__*/ (0, Y.createContext)(null), X = /*#__PURE__*/ (0, Y.createContext)(null), Nn = /*#__PURE__*/ (0, Y.createContext)(null), Pn = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	[e, t] = x(e, t, Mn);
	let n = se(e), { selectionBehavior: r, selectionMode: i, disallowEmptySelection: a } = n, o = !!e.dragAndDropHooks?.useDraggableCollectionState, s = (0, Y.useMemo)(() => ({
		selectionBehavior: i === "none" ? null : r,
		selectionMode: i,
		disallowEmptySelection: a,
		allowsDragging: o
	}), [
		r,
		i,
		a,
		o
	]), l = /*#__PURE__*/ Y.createElement(Rn.Provider, { value: s }, /*#__PURE__*/ Y.createElement(c, e));
	return /*#__PURE__*/ Y.createElement(u, {
		content: l,
		createCollection: () => new kn()
	}, (r) => /*#__PURE__*/ Y.createElement(Ln, {
		props: e,
		forwardedRef: t,
		selectionState: n,
		collection: r
	}));
}), Fn = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, Y.useContext)(O);
	return n ? /*#__PURE__*/ Y.createElement(w.div, {
		...e,
		ref: t
	}) : /*#__PURE__*/ Y.createElement(w.table, {
		...e,
		ref: t
	});
}), In = {
	expand: {
		ltr: "ArrowRight",
		rtl: "ArrowLeft"
	},
	collapse: {
		ltr: "ArrowLeft",
		rtl: "ArrowRight"
	}
};
function Ln({ props: e, forwardedRef: n, selectionState: r, collection: i }) {
	[e, n] = x(e, n, te);
	let { shouldUseVirtualFocus: a, disallowTypeAhead: o, filter: s, ...c } = e, l = (0, Y.useContext)(An);
	n = E((0, Y.useMemo)(() => t(n, l?.tableRef), [n, l?.tableRef]));
	let [u, d] = he(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : /* @__PURE__ */ new Set(), e.onExpandedChange);
	i = (0, Y.useMemo)(() => i.withExpandedKeys(u), [i, u]);
	let f = pt({
		...c,
		collection: i,
		children: void 0,
		UNSAFE_selectionState: r,
		expandedKeys: u,
		onExpandedChange: d
	}), p = mt(f, s), { isVirtualized: m, layoutDelegate: h, dropTargetDelegate: g, CollectionRoot: _ } = (0, Y.useContext)(O), { dragAndDropHooks: y } = e, { gridProps: b } = cn({
		...c,
		layoutDelegate: h,
		isVirtualized: m
	}, p, n), S = p.selectionManager, w = !!y?.useDraggableCollectionState, D = !!y?.useDroppableCollectionState;
	(0, Y.useRef)(w), (0, Y.useRef)(D), (0, Y.useEffect)(() => {}, [w, D]);
	let j, N, ne, F = !1, re = null, I = (0, Y.useRef)(null), { direction: L } = U(), [ie] = (0, Y.useState)(() => new Xe());
	if (w && y) {
		j = y.useDraggableCollectionState({
			collection: p.collection,
			selectionManager: S,
			preview: y.renderDragPreview ? I : void 0
		}), y.useDraggableCollection({}, j, n);
		let e = y.DragPreview;
		re = y.renderDragPreview ? /*#__PURE__*/ Y.createElement(e, { ref: I }, y.renderDragPreview) : null;
	}
	if (D && y) {
		N = y.useDroppableCollectionState({
			collection: p.collection,
			selectionManager: S
		});
		let e = new pe({
			collection: p.collection,
			disabledKeys: S.disabledKeys,
			disabledBehavior: S.disabledBehavior,
			ref: n,
			layoutDelegate: h
		}), t = y.dropTargetDelegate || g || new y.ListDropTargetDelegate(i.rows, n);
		ie.setup(t, f, L), ne = y.useDroppableCollection({
			keyboardDelegate: e,
			dropTargetDelegate: ie,
			onDropActivate: (e) => {
				if (e.target.type === "item") {
					let t = e.target.key, n = f.collection.getItem(t), r = u.has(t);
					n && n.hasChildNodes && (!r || y?.isVirtualDragging?.()) && f.toggleKey(t);
				}
			},
			onKeyDown: (e) => {
				let t = N?.target;
				if (t && t.type === "item" && t.dropPosition === "on") {
					let n = f.collection.getItem(t.key);
					(e.key === In.expand[L] && n?.hasChildNodes && !f.expandedKeys.has(t.key) || e.key === In.collapse[L] && n?.hasChildNodes && f.expandedKeys.has(t.key)) && f.toggleKey(t.key);
				}
			}
		}, N, n), F = N.isDropTarget({ type: "root" });
	}
	let { focusProps: R, isFocused: ae, isFocusVisible: oe } = _e(), z = C({
		...e,
		children: void 0,
		defaultClassName: "react-aria-Table",
		values: {
			isDropTarget: F,
			isFocused: ae,
			isFocusVisible: oe,
			state: p
		}
	}), se = !(!w || j?.isDisabled), V = z.style, le = null;
	l && (le = l.useTableColumnResizeState({ tableWidth: l.tableWidth }, p), m || (V = {
		...V,
		tableLayout: "fixed",
		width: "min-content"
	}));
	let H = B(e, { global: !0 });
	return /*#__PURE__*/ Y.createElement(T, { values: [
		[X, p],
		[Nn, le],
		[k, {
			dragAndDropHooks: y,
			dragState: j,
			dropState: N
		}],
		[ee, { render: ar }],
		[te, null],
		[M, null]
	] }, /*#__PURE__*/ Y.createElement(ce, null, /*#__PURE__*/ Y.createElement(Fn, {
		...v(H, z, b, R, ne?.collectionProps),
		style: V,
		ref: n,
		slot: e.slot || void 0,
		onScroll: e.onScroll,
		"data-allows-dragging": se || void 0,
		"data-drop-target": F || void 0,
		"data-focused": ae || void 0,
		"data-focus-visible": oe || void 0
	}, /*#__PURE__*/ Y.createElement(P, null, /*#__PURE__*/ Y.createElement(_, {
		collection: p.collection,
		scrollRef: l?.scrollRef ?? n,
		persistedKeys: A(S, y, N)
	})))), re);
}
var Rn = /*#__PURE__*/ (0, Y.createContext)(null), zn = class extends s {
	static {
		this.type = "tableheader";
	}
}, Bn = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, Y.useContext)(O);
	return n ? /*#__PURE__*/ Y.createElement(w.div, {
		...e,
		ref: t
	}) : /*#__PURE__*/ Y.createElement(w.thead, {
		...e,
		ref: t
	});
}), Vn = /*#__PURE__*/ f(zn, (e, t) => {
	let n = (0, Y.useContext)(X).collection, r = o({
		items: n.headerRows,
		children: (0, Y.useCallback)((e) => {
			switch (e.type) {
				case "headerrow": return /*#__PURE__*/ Y.createElement(Un, { item: e });
				default: throw Error("Unsupported node type in TableHeader: " + e.type);
			}
		}, [])
	}), { rowGroupProps: i } = En(), { hoverProps: a, isHovered: s } = ve({
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), c = C({
		...e,
		children: void 0,
		defaultClassName: "react-aria-TableHeader",
		values: { isHovered: s }
	});
	return /*#__PURE__*/ Y.createElement(Bn, {
		...v(B(e, { global: !0 }), i, a),
		...c,
		ref: t,
		"data-hovered": s || void 0
	}, r);
}, (e) => /*#__PURE__*/ Y.createElement(c, {
	dependencies: e.dependencies,
	items: e.columns
}, e.children)), Hn = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, Y.useContext)(O);
	return n ? /*#__PURE__*/ Y.createElement("div", {
		...e,
		ref: t
	}) : /*#__PURE__*/ Y.createElement("tr", {
		...e,
		ref: t
	});
});
function Un({ item: e }) {
	let t = (0, Y.useRef)(null), n = (0, Y.useContext)(X), { isVirtualized: r, CollectionBranch: i } = (0, Y.useContext)(O), { rowProps: a } = vn({
		node: e,
		isVirtualized: r
	}, n, t), { checkboxProps: o } = Sn(n);
	return /*#__PURE__*/ Y.createElement(Hn, {
		...a,
		ref: t
	}, /*#__PURE__*/ Y.createElement(T, { values: [[g, { slots: { selection: o } }], [_, { slots: { selection: o } }]] }, /*#__PURE__*/ Y.createElement(i, {
		collection: n.collection,
		parent: e
	})));
}
var Wn = class extends s {
	static {
		this.type = "column";
	}
}, Gn = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, Y.useContext)(O);
	return n ? /*#__PURE__*/ Y.createElement(w.div, {
		...e,
		ref: t
	}) : /*#__PURE__*/ Y.createElement(w.th, {
		...e,
		ref: t
	});
}), Kn = /*#__PURE__*/ p(Wn, (e, t, n) => {
	let r = E(t), i = (0, Y.useContext)(X), { isVirtualized: a } = (0, Y.useContext)(O), { columnHeaderProps: o, isPressed: s } = fn({
		node: n,
		isVirtualized: a,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, i, r), { isFocused: c, isFocusVisible: l, focusProps: u } = _e(), d = (0, Y.useContext)(Nn), f = !1;
	d && (f = d.resizingColumn === n.key);
	let { hoverProps: p, isHovered: m } = ve({ isDisabled: !e.allowsSorting }), h = C({
		...e,
		id: void 0,
		children: n.rendered,
		defaultClassName: "react-aria-Column",
		values: {
			isHovered: m,
			isPressed: s,
			isFocused: c,
			isFocusVisible: l,
			allowsSorting: n.props.allowsSorting,
			sortDirection: i.sortDescriptor?.column === n.key ? i.sortDescriptor.direction : void 0,
			isResizing: f,
			startResize: () => {
				if (d) d.startResize(n.key), i.setKeyboardNavigationDisabled(!0);
				else throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
			},
			sort: (e) => {
				i.sort(n.key, e);
			}
		}
	}), g = h.style;
	d && (g = {
		...g,
		width: d.getColumnWidth(n.key)
	});
	let _ = B(e, { global: !0 });
	return delete _.id, /*#__PURE__*/ Y.createElement(Gn, {
		...v(_, o, u, p),
		...h,
		style: g,
		ref: r,
		"data-hovered": m || void 0,
		"data-pressed": s || void 0,
		"data-focused": c || void 0,
		"data-focus-visible": l || void 0,
		"data-resizing": f || void 0,
		"data-allows-sorting": n.props.allowsSorting || void 0,
		"data-sort-direction": i.sortDescriptor?.column === n.key ? i.sortDescriptor.direction : void 0
	}, /*#__PURE__*/ Y.createElement(T, { values: [[qn, {
		column: n,
		triggerRef: r
	}], [O, D]] }, h.children));
}), qn = /*#__PURE__*/ (0, Y.createContext)(null), Jn = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	let n = (0, Y.useContext)(Nn);
	if (!n) throw Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
	let r = W(On(N), "react-aria-components"), { onResizeStart: i, onResize: a, onResizeEnd: o } = (0, Y.useContext)(An), { column: s, triggerRef: c } = (0, Y.useContext)(qn), l = (0, Y.useRef)(null), { resizerProps: u, inputProps: d, isResizing: f, isMouseResizing: p } = wn({
		column: s,
		"aria-label": e["aria-label"] || r.format("tableResizer"),
		onResizeStart: i,
		onResize: a,
		onResizeEnd: o,
		triggerRef: c
	}, n, l), { focusProps: m, isFocused: h, isFocusVisible: g } = _e(), { hoverProps: _, isHovered: y } = ve(e), b = n.getColumnMinWidth(s.key) >= n.getColumnWidth(s.key), x = n.getColumnMaxWidth(s.key) <= n.getColumnWidth(s.key), { direction: S } = U(), T = "both";
	T = b ? S === "rtl" ? "right" : "left" : x ? S === "rtl" ? "left" : "right" : "both";
	let D = E(t), [O, ee] = (0, Y.useState)("");
	(0, Y.useEffect)(() => {
		if (!D.current) return;
		let e = window.getComputedStyle(D.current);
		ee(e.cursor);
	}, [D, T]);
	let k = C({
		...e,
		defaultClassName: "react-aria-ColumnResizer",
		values: {
			isFocused: h,
			isFocusVisible: g,
			isResizing: f,
			isHovered: y,
			resizableDirection: T
		}
	}), A = B(e, { global: !0 });
	return /*#__PURE__*/ Y.createElement(w.div, {
		ref: D,
		role: "presentation",
		...v(A, k, u, _),
		"data-hovered": y || void 0,
		"data-focused": h || void 0,
		"data-focus-visible": g || void 0,
		"data-resizing": f || void 0,
		"data-resizable-direction": T
	}, k.children, /*#__PURE__*/ Y.createElement("input", {
		ref: l,
		...v(d, m)
	}), f && p && /*#__PURE__*/ Dn.createPortal(/*#__PURE__*/ Y.createElement("div", {
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			cursor: O
		},
		"data-testid": "cursor-overlay"
	}), document.body));
}), Yn = class extends m {
	static {
		this.type = "tablebody";
	}
}, Xn = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, Y.useContext)(O);
	return n ? /*#__PURE__*/ Y.createElement(w.div, {
		...e,
		ref: t
	}) : /*#__PURE__*/ Y.createElement(w.tbody, {
		...e,
		ref: t
	});
}), Zn = /*#__PURE__*/ f(Yn, (e, t, n) => {
	let r = (0, Y.useContext)(X), { isVirtualized: i } = (0, Y.useContext)(O), a = r.collection, { CollectionBranch: o } = (0, Y.useContext)(O), { dragAndDropHooks: s, dropState: c } = (0, Y.useContext)(k), l = !!s?.useDroppableCollectionState && !c?.isDisabled, u = l && !!c && (c.isDropTarget({ type: "root" }) ?? !1), d = a.size === 0, f = {
		isDropTarget: u,
		isEmpty: d
	}, p = C({
		...e,
		id: void 0,
		children: void 0,
		defaultClassName: "react-aria-TableBody",
		values: f
	}), m, h = a.columnCount;
	if (d && e.renderEmptyState && r) {
		let t = {}, n = {}, r = {};
		i ? (n["aria-colspan"] = h, r = { display: "contents" }) : n.colSpan = h, m = /*#__PURE__*/ Y.createElement(er, {
			role: "row",
			...t,
			style: r
		}, /*#__PURE__*/ Y.createElement(rr, {
			role: "rowheader",
			...n,
			style: r
		}, e.renderEmptyState(f)));
	}
	let { rowGroupProps: g } = En(), _ = B(e, { global: !0 });
	return /*#__PURE__*/ Y.createElement(Xn, {
		...v(_, p, g),
		ref: t,
		"data-empty": d || void 0
	}, l && /*#__PURE__*/ Y.createElement(ur, null), /*#__PURE__*/ Y.createElement(o, {
		collection: a,
		parent: n,
		renderDropIndicator: j(s, c)
	}), m);
});
(class extends m {
	static {
		this.type = "tablefooter";
	}
});
var Qn = /*#__PURE__*/ (0, Y.createContext)({ isFocusVisibleWithinRow: !1 }), $n = class extends s {
	static {
		this.type = "item";
	}
	filter(e, t, n) {
		let r = e.getChildren(this.key);
		for (let i of r) if (n(i.textValue, i)) {
			let n = this.clone();
			return t.addDescendants(n, e), n;
		}
		return null;
	}
}, er = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, Y.useContext)(O);
	return n ? /*#__PURE__*/ Y.createElement(w.div, {
		...e,
		ref: t
	}) : /*#__PURE__*/ Y.createElement(w.tr, {
		...e,
		ref: t
	});
}), tr = /*#__PURE__*/ f($n, (e, t, n) => {
	let r = E(t), i = (0, Y.useContext)(X), { dragAndDropHooks: a, dragState: o, dropState: s } = (0, Y.useContext)(k), { isVirtualized: c, CollectionBranch: l } = (0, Y.useContext)(O), u = o && !(o.isDisabled || o.selectionManager.isDisabled(n.key)), { rowProps: d, expandButtonProps: f, ...p } = gn({
		node: n,
		shouldSelectOnPressUp: !!o,
		isVirtualized: c
	}, i, r), { isFocused: m, isFocusVisible: y, focusProps: b } = _e(), { isFocusVisible: x, focusProps: w } = _e({ within: !0 }), { hoverProps: D, isHovered: ee } = ve({
		isDisabled: !p.allowsSelection && !p.hasAction && !u,
		onHoverStart: e.onHoverStart,
		onHoverChange: e.onHoverChange,
		onHoverEnd: e.onHoverEnd
	}), { checkboxProps: A } = xn({ key: n.key }, i), j;
	o && a && (j = a.useDraggableItem({
		key: n.key,
		hasDragButton: !0
	}, o));
	let M, te = (0, Y.useRef)(null), { visuallyHiddenProps: N } = Be();
	s && a && (M = a.useDropIndicator({ target: {
		type: "item",
		key: n.key,
		dropPosition: "on"
	} }, s, te));
	let P = (0, Y.useRef)(null);
	(0, Y.useEffect)(() => {
		o && P.current;
	}, []);
	let F = o && o.isDragging(n.key), { children: re, ...I } = e, L = e.hasChildItems || i.collection.getItem(n.lastChildKey)?.type !== "cell", ie = L && i.expandedKeys.has(n.key), R = C({
		...I,
		id: void 0,
		defaultClassName: "react-aria-Row",
		defaultStyle: { "--table-row-level": n.level + 1 },
		values: {
			...p,
			state: i,
			isHovered: ee,
			isFocused: m,
			isFocusVisible: y,
			selectionMode: i.selectionManager.selectionMode,
			selectionBehavior: i.selectionManager.selectionBehavior,
			isDragging: F,
			isDropTarget: M?.isDropTarget,
			isFocusVisibleWithin: x,
			id: n.key,
			hasChildItems: L,
			isExpanded: ie,
			level: n.level + 1
		}
	}), ae = B(e, { global: !0 });
	return delete ae.id, delete ae.onClick, /*#__PURE__*/ Y.createElement(Y.Fragment, null, M && !M.isHidden && /*#__PURE__*/ Y.createElement(er, {
		role: "row",
		style: { height: 0 }
	}, /*#__PURE__*/ Y.createElement(rr, {
		role: "gridcell",
		colSpan: i.collection.columnCount,
		style: { padding: 0 }
	}, /*#__PURE__*/ Y.createElement("div", {
		role: "button",
		...N,
		...M.dropIndicatorProps,
		ref: te
	}))), /*#__PURE__*/ Y.createElement(er, {
		...v(ae, R, d, b, D, j?.dragProps, w),
		ref: r,
		"data-disabled": p.isDisabled || void 0,
		"data-selected": p.isSelected || void 0,
		"data-hovered": ee || void 0,
		"data-focused": p.isFocused || void 0,
		"data-focus-visible": y || void 0,
		"data-pressed": p.isPressed || void 0,
		"data-dragging": F || void 0,
		"data-drop-target": M?.isDropTarget || void 0,
		"data-selection-mode": i.selectionManager.selectionMode === "none" ? void 0 : i.selectionManager.selectionMode,
		"data-focus-visible-within": x || void 0,
		"data-expanded": ie || void 0,
		"data-has-child-items": L || void 0,
		"data-level": n.level + 1
	}, /*#__PURE__*/ Y.createElement(T, { values: [
		[g, { slots: {
			[S]: {},
			selection: A
		} }],
		[_, { slots: {
			[S]: {},
			selection: A
		} }],
		[h, { slots: {
			[S]: {},
			chevron: f,
			drag: {
				...j?.dragButtonProps,
				ref: P,
				style: { pointerEvents: "none" }
			}
		} }],
		[ne, { isSelected: p.isSelected }],
		[Qn, { isFocusVisibleWithinRow: x }]
	] }, /*#__PURE__*/ Y.createElement(l, {
		collection: i.collection,
		parent: n
	}))));
}, (e) => {
	if (e.id == null && typeof e.children == "function") throw Error("No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.");
	let t = [e.value].concat(e.dependencies);
	return /*#__PURE__*/ Y.createElement(c, {
		dependencies: t,
		items: e.columns,
		idScope: e.id
	}, e.children);
}), nr = class extends s {
	static {
		this.type = "cell";
	}
}, rr = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, Y.useContext)(O);
	return n ? /*#__PURE__*/ Y.createElement(w.div, {
		...e,
		ref: t
	}) : /*#__PURE__*/ Y.createElement(w.td, {
		...e,
		ref: t
	});
}), ir = /*#__PURE__*/ p(nr, (e, t, n) => {
	let r = E(t), i = (0, Y.useContext)(X), { dragState: a } = (0, Y.useContext)(k), { isVirtualized: o } = (0, Y.useContext)(O);
	n.column = i.collection.columns[n.index];
	let { gridCellProps: s, isPressed: c } = yn({
		node: n,
		shouldSelectOnPressUp: !!a,
		isVirtualized: o,
		focusMode: e.focusMode,
		allowsArrowNavigation: e.allowsArrowNavigation
	}, i, r), { isFocused: l, isFocusVisible: u, focusProps: d } = _e(), { hoverProps: f, isHovered: p } = ve({}), { isFocusVisibleWithinRow: m } = (0, Y.useContext)(Qn), h = n.parentKey != null && i.selectionManager.isSelected(n.parentKey), g = n.colIndex || n.index, _ = i.collection.getItem(n.parentKey), y = _.props.hasChildItems || i.collection.getItem(_.lastChildKey)?.type !== "cell", b = y && i.expandedKeys.has(n.parentKey), x = i.selectionManager.isDisabled(n.parentKey), S = C({
		...e,
		id: void 0,
		defaultClassName: "react-aria-Cell",
		values: {
			isFocused: l,
			isFocusVisible: u,
			isFocusVisibleWithinRow: m,
			isPressed: c,
			isHovered: p,
			isSelected: h,
			id: n.key,
			columnIndex: g,
			hasChildItems: y,
			isExpanded: b,
			isDisabled: x,
			level: _.level + 1,
			isTreeColumn: n.column.key === i.treeColumn
		}
	}), w = B(e, { global: !0 });
	return delete w.id, /*#__PURE__*/ Y.createElement(rr, {
		...v(w, S, s, d, f),
		ref: r,
		"data-focused": l || void 0,
		"data-focus-visible": u || void 0,
		"data-focus-visible-within-row": m || void 0,
		"data-pressed": c || void 0,
		"data-selected": h || void 0,
		"data-column-index": g,
		"data-expanded": b || void 0,
		"data-has-child-items": y || void 0,
		"data-level": _.level + 1,
		"data-tree-column": n.column.key === i.treeColumn || void 0,
		"data-disabled": x || void 0
	}, /*#__PURE__*/ Y.createElement(O.Provider, { value: D }, S.children));
});
function ar(e, t) {
	t = E(t);
	let { dragAndDropHooks: n, dropState: r } = (0, Y.useContext)(k), i = (0, Y.useRef)(null), { dropIndicatorProps: a, isHidden: o, isDropTarget: s } = n.useDropIndicator(e, r, i);
	if (o) return null;
	let c = r && e.target.type === "item" ? (r.collection.getItem(e.target.key)?.level || 0) + 1 : 1;
	return /*#__PURE__*/ Y.createElement(lr, {
		...e,
		dropIndicatorProps: a,
		isDropTarget: s,
		buttonRef: i,
		level: c,
		ref: t
	});
}
var or = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, Y.useContext)(O);
	return n ? /*#__PURE__*/ Y.createElement(w.div, {
		...e,
		ref: t
	}) : /*#__PURE__*/ Y.createElement(w.tr, {
		...e,
		ref: t
	});
}), sr = /*#__PURE__*/ (0, Y.forwardRef)(function(e, t) {
	let { isVirtualized: n } = (0, Y.useContext)(O);
	return n ? /*#__PURE__*/ Y.createElement(w.div, {
		...e,
		ref: t
	}) : /*#__PURE__*/ Y.createElement(w.td, {
		...e,
		ref: t
	});
});
function cr(e, t) {
	let { dropIndicatorProps: n, isDropTarget: r, buttonRef: i, level: a, ...o } = e, s = (0, Y.useContext)(X), { visuallyHiddenProps: c } = Be(), l = C({
		...o,
		defaultClassName: "react-aria-DropIndicator",
		defaultStyle: { "--table-row-level": a + 1 },
		values: { isDropTarget: r }
	});
	return /*#__PURE__*/ Y.createElement(or, {
		...B(e, { global: !0 }),
		...l,
		role: "row",
		ref: t,
		"data-drop-target": r || void 0,
		"aria-level": a
	}, /*#__PURE__*/ Y.createElement(sr, {
		role: "gridcell",
		colSpan: s.collection.columnCount,
		style: { padding: 0 }
	}, /*#__PURE__*/ Y.createElement("div", {
		...c,
		role: "button",
		...n,
		ref: i
	}), l.children));
}
var lr = /*#__PURE__*/ (0, Y.forwardRef)(cr);
function ur() {
	let e = (0, Y.useContext)(X), { dragAndDropHooks: t, dropState: n } = (0, Y.useContext)(k), r = (0, Y.useRef)(null), { dropIndicatorProps: i } = t.useDropIndicator({ target: { type: "root" } }, n, r), a = n.isDropTarget({ type: "root" }), { visuallyHiddenProps: o } = Be();
	return !a && i["aria-hidden"] ? null : /*#__PURE__*/ Y.createElement(er, {
		role: "row",
		"aria-hidden": i["aria-hidden"],
		style: { height: 0 }
	}, /*#__PURE__*/ Y.createElement(rr, {
		role: "gridcell",
		colSpan: e.collection.columnCount,
		style: { padding: 0 }
	}, /*#__PURE__*/ Y.createElement("div", {
		role: "button",
		...o,
		...i,
		ref: r
	})));
}
var dr = p(l, function(e, t, n) {
	let r = (0, Y.useContext)(X), { isVirtualized: i } = (0, Y.useContext)(O), { isLoading: a, onLoadMore: o, scrollOffset: s, ...c } = e, l = r.collection.columns.length, u = (0, Y.useRef)(null), d = (0, Y.useMemo)(() => ({
		onLoadMore: o,
		collection: r?.collection,
		sentinelRef: u,
		scrollOffset: s
	}), [
		o,
		s,
		r?.collection
	]);
	fe(d, u);
	let f = C({
		...c,
		id: void 0,
		children: n.rendered,
		defaultClassName: "react-aria-TableLoadingIndicator",
		defaultStyle: { "--table-row-level": n.level + 1 },
		values: void 0
	}), p = {}, m = {}, h = {};
	return i ? (m["aria-colspan"] = l, h = { display: "contents" }) : m.colSpan = l, /*#__PURE__*/ Y.createElement(Y.Fragment, null, /*#__PURE__*/ Y.createElement(er, {
		style: { height: 0 },
		inert: ae(!0)
	}, /*#__PURE__*/ Y.createElement(rr, { style: {
		padding: 0,
		border: 0
	} }, /*#__PURE__*/ Y.createElement("div", {
		"data-testid": "loadMoreSentinel",
		ref: u,
		style: {
			position: "relative",
			height: 1,
			width: 1
		}
	}))), a && f.children && /*#__PURE__*/ Y.createElement(er, {
		...v(B(e, { global: !0 }), p),
		...f,
		role: "row",
		ref: t,
		"aria-level": n.level + 1,
		"data-level": n.level + 1
	}, /*#__PURE__*/ Y.createElement(rr, {
		role: "rowheader",
		...m,
		style: h
	}, f.children)));
}), Z = a(), Q = /*#__PURE__*/ (0, Y.createContext)({}), fr = ({ children: e, className: t, variant: n, ...r }) => {
	let i = Y.useMemo(() => Ge({ variant: n }), [n]), a = Y.useMemo(() => ({ slots: i }), [i]);
	return /*#__PURE__*/ (0, Z.jsx)(Q, {
		value: a,
		children: /*#__PURE__*/ (0, Z.jsx)(Ue.div, {
			className: i.base({ className: t }),
			"data-slot": "table",
			...r,
			children: e
		})
	});
};
fr.displayName = "HeroUI.Table";
var pr = ({ className: e, ...t }) => {
	let { slots: n } = (0, Y.use)(Q);
	return /*#__PURE__*/ (0, Z.jsx)(Ue.div, {
		className: He(n?.scrollContainer, e),
		"data-slot": "table-scroll-container",
		...t
	});
};
pr.displayName = "HeroUI.Table.ScrollContainer";
function mr({ className: e, keyboardNavigationBehavior: t = "tab", ...n }) {
	let { slots: r } = (0, Y.use)(Q);
	return /*#__PURE__*/ (0, Z.jsx)(Pn, {
		className: J(e, r?.content()),
		"data-slot": "table-content",
		keyboardNavigationBehavior: t,
		...n
	});
}
mr.displayName = "HeroUI.Table.Content";
function hr({ className: e, ...t }) {
	let { slots: n } = (0, Y.use)(Q);
	return /*#__PURE__*/ (0, Z.jsx)(Vn, {
		className: J(e, n?.header()),
		"data-slot": "table-header",
		...t
	});
}
hr.displayName = "HeroUI.Table.Header";
var gr = ({ className: e, ref: t, ...n }) => {
	let { slots: r } = (0, Y.use)(Q);
	return /*#__PURE__*/ (0, Z.jsx)(Kn, {
		ref: t,
		className: J(e, r?.column()),
		"data-slot": "table-column",
		...n
	});
};
gr.displayName = "HeroUI.Table.Column";
function _r({ className: e, ...t }) {
	let { slots: n } = (0, Y.use)(Q);
	return /*#__PURE__*/ (0, Z.jsx)(Zn, {
		className: J(e, n?.body()),
		"data-slot": "table-body",
		...t
	});
}
_r.displayName = "HeroUI.Table.Body";
function vr({ className: e, ...t }) {
	let { slots: n } = (0, Y.use)(Q);
	return /*#__PURE__*/ (0, Z.jsx)(tr, {
		className: J(e, n?.row()),
		"data-slot": "table-row",
		...t
	});
}
vr.displayName = "HeroUI.Table.Row";
var yr = ({ className: e, ref: t, ...n }) => {
	let { slots: r } = (0, Y.use)(Q);
	return /*#__PURE__*/ (0, Z.jsx)(ir, {
		ref: t,
		className: J(e, r?.cell()),
		"data-slot": "table-cell",
		...n
	});
};
yr.displayName = "HeroUI.Table.Cell";
var br = ({ className: e, ...t }) => {
	let { slots: n } = (0, Y.use)(Q);
	return /*#__PURE__*/ (0, Z.jsx)(Ue.div, {
		className: He(n?.footer, e),
		"data-slot": "table-footer",
		...t
	});
};
br.displayName = "HeroUI.Table.Footer";
var xr = ({ className: e, ref: t, ...r }) => /*#__PURE__*/ (0, Z.jsx)(jn, {
	ref: t,
	className: n("table__resizable-container", e),
	"data-slot": "table-resizable-container",
	...r
});
xr.displayName = "HeroUI.Table.ResizableContainer";
var Sr = ({ className: e, ref: t, ...n }) => {
	let { slots: r } = (0, Y.use)(Q);
	return /*#__PURE__*/ (0, Z.jsx)(Jn, {
		ref: t,
		className: J(e, r?.columnResizer()),
		"data-slot": "table-column-resizer",
		...n
	});
};
Sr.displayName = "HeroUI.Table.ColumnResizer";
var Cr = ({ className: e, ref: t, ...n }) => {
	let { slots: r } = (0, Y.use)(Q);
	return /*#__PURE__*/ (0, Z.jsx)(dr, {
		ref: t,
		className: He(r?.loadMore, e),
		"data-slot": "table-load-more",
		...n
	});
};
Cr.displayName = "HeroUI.Table.LoadMore";
var wr = ({ className: e, ...t }) => {
	let { slots: n } = (0, Y.use)(Q);
	return /*#__PURE__*/ (0, Z.jsx)(Ue.div, {
		className: He(n?.loadMoreContent, e),
		"data-slot": "table-load-more-content",
		...t
	});
};
wr.displayName = "HeroUI.Table.LoadMoreContent";
var Tr = ({ children: e, className: t, indicator: n, ref: r, showIndicator: i = !0, sortDirection: a, ...o }) => {
	let { slots: s } = (0, Y.use)(Q), c = i && !!a, l = null;
	if (c) {
		if (n === void 0) l = /*#__PURE__*/ (0, Z.jsx)(We, {
			className: s?.sortableColumnIndicator(),
			"data-direction": a,
			"data-slot": "table-sortable-column-indicator"
		});
		else if (/*#__PURE__*/ Y.isValidElement(n)) {
			let e = n;
			l = /*#__PURE__*/ Y.cloneElement(e, {
				className: He(s?.sortableColumnIndicator, e.props.className),
				"data-direction": a,
				"data-slot": "table-sortable-column-indicator"
			});
		} else l = n;
	}
	return /*#__PURE__*/ (0, Z.jsxs)("span", {
		ref: r,
		className: He(s?.sortableColumnHeader, t),
		"data-direction": a,
		"data-slot": "table-sortable-column-header",
		...o,
		children: [e, l]
	});
};
Tr.displayName = "HeroUI.Table.SortableColumnHeader";
// node_modules/@heroui/react/dist/components/table/index.js
var $ = Object.assign(fr, {
	Body: _r,
	Cell: yr,
	Collection: c,
	Column: gr,
	ColumnResizer: Sr,
	Content: mr,
	Footer: br,
	Header: hr,
	LoadMore: Cr,
	LoadMoreContent: wr,
	ResizableContainer: xr,
	Root: fr,
	Row: vr,
	ScrollContainer: pr,
	SortableColumnHeader: Tr
});
// upstream/demos/en/table/basic.tsx
function Er() {
	return /* @__PURE__ */ (0, Z.jsx)($, { children: /* @__PURE__ */ (0, Z.jsx)($.ScrollContainer, { children: /* @__PURE__ */ (0, Z.jsxs)($.Content, {
		"aria-label": "Team members",
		className: "min-w-[600px]",
		children: [/* @__PURE__ */ (0, Z.jsxs)($.Header, { children: [
			/* @__PURE__ */ (0, Z.jsx)($.Column, {
				isRowHeader: !0,
				children: "Name"
			}),
			/* @__PURE__ */ (0, Z.jsx)($.Column, { children: "Role" }),
			/* @__PURE__ */ (0, Z.jsx)($.Column, { children: "Status" }),
			/* @__PURE__ */ (0, Z.jsx)($.Column, { children: "Email" })
		] }), /* @__PURE__ */ (0, Z.jsxs)($.Body, { children: [
			/* @__PURE__ */ (0, Z.jsxs)($.Row, { children: [
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "Kate Moore" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "CEO" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "Active" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "kate@acme.com" })
			] }),
			/* @__PURE__ */ (0, Z.jsxs)($.Row, { children: [
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "John Smith" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "CTO" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "Active" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "john@acme.com" })
			] }),
			/* @__PURE__ */ (0, Z.jsxs)($.Row, { children: [
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "Sara Johnson" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "CMO" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "On Leave" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "sara@acme.com" })
			] }),
			/* @__PURE__ */ (0, Z.jsxs)($.Row, { children: [
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "Michael Brown" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "CFO" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "Active" }),
				/* @__PURE__ */ (0, Z.jsx)($.Cell, { children: "michael@acme.com" })
			] })
		] })]
	}) }) });
}
export { Er as Basic };
