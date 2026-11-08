import { n as e, r as t, t as n } from "./useMultipleSelectionState-Bgjz_mf2.js";
import { i as r, n as i } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-stately/dist/private/list/ListCollection.mjs
var a = class {
	constructor(e) {
		this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = e;
		let t = (e) => {
			if (this.keyMap.set(e.key, e), e.childNodes && e.type === "section") for (let n of e.childNodes) t(n);
		};
		for (let n of e) t(n);
		let n = null, r = 0, i = 0;
		for (let [e, t] of this.keyMap) n ? (n.nextKey = e, t.prevKey = n.key) : (this.firstKey = e, t.prevKey = void 0), t.type === "item" && (t.index = r++), (t.type === "section" || t.type === "item") && i++, n = t, n.nextKey = void 0;
		this._size = i, this.lastKey = n?.key ?? null;
	}
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this._size;
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
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
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
}, o = /* @__PURE__ */ r(i(), 1);
function s(r) {
	let { filter: i, layoutDelegate: s } = r, c = n(r), u = (0, o.useMemo)(() => r.disabledKeys ? new Set(r.disabledKeys) : /* @__PURE__ */ new Set(), [r.disabledKeys]), d = (0, o.useCallback)((e) => i ? new a(i(e)) : new a(e), [i]), f = (0, o.useMemo)(() => ({ suppressTextValueWarning: r.suppressTextValueWarning }), [r.suppressTextValueWarning]), p = e(r, d, f), m = (0, o.useMemo)(() => new t(p, c, { layoutDelegate: s }), [
		p,
		c,
		s
	]);
	return l(p, m), {
		collection: p,
		disabledKeys: u,
		selectionManager: m
	};
}
function c(e, t) {
	let n = (0, o.useMemo)(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]), r = e.selectionManager.withCollection(n);
	return l(n, r), {
		collection: n,
		selectionManager: r,
		disabledKeys: e.disabledKeys
	};
}
function l(e, t) {
	let n = (0, o.useRef)(null);
	(0, o.useEffect)(() => {
		if (t.focusedKey != null && !e.getItem(t.focusedKey) && n.current) {
			let r = n.current.getKeyAfter(t.focusedKey), i = null;
			for (; r != null;) {
				let a = e.getItem(r);
				if (a && a.type === "item" && !t.isDisabled(r)) {
					i = r;
					break;
				}
				r = n.current.getKeyAfter(r);
			}
			if (i == null) for (r = n.current.getKeyBefore(t.focusedKey); r != null;) {
				let a = e.getItem(r);
				if (a && a.type === "item" && !t.isDisabled(r)) {
					i = r;
					break;
				}
				r = n.current.getKeyBefore(r);
			}
			t.setFocusedKey(i);
		}
		n.current = e;
	}, [e, t]);
}
export { c as n, a as r, s as t };
