import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./with-selector-CUW-qLSb.js";
// node_modules/@tanstack/react-table/dist/FlexRender.js
var r = n(), i = /* @__PURE__ */ e(t(), 1);
function a(e) {
	return o(e) || typeof e == "function" || s(e);
}
function o(e) {
	return typeof e == "function" && (() => {
		let t = Object.getPrototypeOf(e);
		return t.prototype && t.prototype.isReactComponent;
	})();
}
function s(e) {
	return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function c(e, t) {
	return e == null ? null : a(e) ? /* @__PURE__ */ i.createElement(e, t) : e;
}
function l(e) {
	if ("cell" in e && e.cell) {
		let t = e.cell, n = t.column.columnDef, r = t, i = n;
		return r.getIsAggregated?.() ? c(i.aggregatedCell ?? n.cell, t.getContext()) : r.getIsPlaceholder?.() ? null : c(n.cell, t.getContext());
	}
	return "header" in e && e.header ? c(e.header.column.columnDef.header, e.header.getContext()) : "footer" in e && e.footer ? c(e.footer.column.columnDef.footer, e.footer.getContext()) : null;
}
// node_modules/@tanstack/store/dist/alien.js
/* @__NO_SIDE_EFFECTS__ */
function u({ update: e, notify: t, unwatched: n }) {
	return {
		link: r,
		unlink: i,
		propagate: a,
		checkDirty: o,
		shallowPropagate: s
	};
	function r(e, t, n) {
		let r = t.depsTail;
		if (r !== void 0 && r.dep === e) return;
		let i = r === void 0 ? t.deps : r.nextDep;
		if (i !== void 0 && i.dep === e) {
			i.version = n, t.depsTail = i;
			return;
		}
		let a = e.subsTail;
		if (a !== void 0 && a.version === n && a.sub === t) return;
		let o = t.depsTail = e.subsTail = {
			version: n,
			dep: e,
			sub: t,
			prevDep: r,
			nextDep: i,
			prevSub: a,
			nextSub: void 0
		};
		i !== void 0 && (i.prevDep = o), r === void 0 ? t.deps = o : r.nextDep = o, a === void 0 ? e.subs = o : a.nextSub = o;
	}
	function i(e, t = e.sub) {
		let r = e.dep, i = e.prevDep, a = e.nextDep, o = e.nextSub, s = e.prevSub;
		return a === void 0 ? t.depsTail = i : a.prevDep = i, i === void 0 ? t.deps = a : i.nextDep = a, o === void 0 ? r.subsTail = s : o.prevSub = s, s === void 0 ? (r.subs = o) === void 0 && n(r) : s.nextSub = o, a;
	}
	function a(e) {
		let n = e.nextSub, r;
		top: do {
			let i = e.sub, a = i.flags;
			if (a & 60 ? a & 12 ? a & 4 ? !(a & 48) && c(e, i) ? (i.flags = a | 40, a &= 1) : a = 0 : i.flags = a & -9 | 32 : a = 0 : i.flags = a | 32, a & 2 && t(i), a & 1) {
				let t = i.subs;
				if (t !== void 0) {
					let i = (e = t).nextSub;
					i !== void 0 && (r = {
						value: n,
						prev: r
					}, n = i);
					continue;
				}
			}
			if ((e = n) !== void 0) n = e.nextSub;
			else {
				for (; r !== void 0;) if (e = r.value, r = r.prev, e !== void 0) {
					n = e.nextSub;
					continue top;
				}
				break;
			}
		} while (1);
	}
	function o(t, n) {
		let r, i = 0, a = !1;
		top: do {
			let o = t.dep, c = o.flags;
			if (n.flags & 16) a = !0;
			else if ((c & 17) == 17) {
				if (e(o)) {
					let e = o.subs;
					e.nextSub !== void 0 && s(e), a = !0;
				}
			} else if ((c & 33) == 33) {
				(t.nextSub !== void 0 || t.prevSub !== void 0) && (r = {
					value: t,
					prev: r
				}), t = o.deps, n = o, ++i;
				continue;
			}
			if (!a) {
				let e = t.nextDep;
				if (e !== void 0) {
					t = e;
					continue;
				}
			}
			for (; i--;) {
				let i = n.subs, o = i.nextSub !== void 0;
				if (o ? (t = r.value, r = r.prev) : t = i, a) {
					if (e(n)) {
						o && s(i), n = t.sub;
						continue;
					}
					a = !1;
				} else n.flags &= -33;
				n = t.sub;
				let c = t.nextDep;
				if (c !== void 0) {
					t = c;
					continue top;
				}
			}
			return a;
		} while (1);
	}
	function s(e) {
		do {
			let n = e.sub, r = n.flags;
			(r & 48) == 32 && (n.flags = r | 16, (r & 6) == 2 && t(n));
		} while ((e = e.nextSub) !== void 0);
	}
	function c(e, t) {
		let n = t.depsTail;
		for (; n !== void 0;) {
			if (n === e) return !0;
			n = n.prevDep;
		}
		return !1;
	}
}
// node_modules/@tanstack/store/dist/atom.js
function d(e, t, n) {
	let r = typeof e == "object", i = r ? e : void 0;
	return {
		next: (r ? e.next : e)?.bind(i),
		error: (r ? e.error : t)?.bind(i),
		complete: (r ? e.complete : n)?.bind(i)
	};
}
var f = [], p = 0, { link: ee, unlink: te, propagate: ne, checkDirty: re, shallowPropagate: m } = /* @__PURE__ */ u({
	update(e) {
		return e._update();
	},
	notify(e) {
		f[g++] = e, e.flags &= -3;
	},
	unwatched(e) {
		e.depsTail !== void 0 && (e.depsTail = void 0, e.flags = 17, v(e));
	}
}), h = 0, g = 0, _, ie = 0;
function ae(e) {
	try {
		++ie, e();
	} finally {
		--ie || oe();
	}
}
function v(e) {
	let t = e.depsTail, n = t === void 0 ? e.deps : t.nextDep;
	for (; n !== void 0;) n = te(n, e);
}
function oe() {
	if (!(ie > 0)) {
		for (; h < g;) {
			let e = f[h];
			f[h++] = void 0, e.notify();
		}
		h = 0, g = 0;
	}
}
function se(e, t) {
	let n = typeof e == "function", r = e, i = {
		_snapshot: n ? void 0 : e,
		subs: void 0,
		subsTail: void 0,
		deps: void 0,
		depsTail: void 0,
		flags: +!n,
		get() {
			return _ !== void 0 && ee(i, _, p), i._snapshot;
		},
		subscribe(e) {
			let t = d(e), n = { current: !1 }, r = ce(() => {
				i.get(), n.current ? (_ = void 0, t.next?.(i._snapshot)) : n.current = !0;
			});
			return { unsubscribe: () => {
				r.stop();
			} };
		},
		_update(e) {
			let a = _, o = t?.compare ?? Object.is;
			if (n) _ = i, ++p, i.depsTail = void 0;
			else if (e === void 0) return !1;
			n && (i.flags = 5);
			try {
				let t = i._snapshot, a = typeof e == "function" ? e(t) : e === void 0 && n ? r(t) : e;
				return t === void 0 || !o(t, a) ? (i._snapshot = a, !0) : !1;
			} finally {
				_ = a, n && (i.flags &= -5), v(i);
			}
		}
	};
	return n ? (i.flags = 17, i.get = function() {
		let e = i.flags;
		if (e & 16 || e & 32 && re(i.deps, i)) {
			if (i._update()) {
				let e = i.subs;
				e !== void 0 && m(e);
			}
		} else e & 32 && (i.flags = e & -33);
		return _ !== void 0 && ee(i, _, p), i._snapshot;
	}) : i.set = function(e) {
		if (i._update(e)) {
			let e = i.subs;
			e !== void 0 && (ne(e), m(e), oe());
		}
	}, i;
}
function ce(e) {
	let t = () => {
		let t = _;
		_ = n, ++p, n.depsTail = void 0, n.flags = 6;
		try {
			return e();
		} finally {
			_ = t, n.flags &= -5, v(n);
		}
	}, n = {
		deps: void 0,
		depsTail: void 0,
		subs: void 0,
		subsTail: void 0,
		flags: 6,
		notify() {
			let e = this.flags;
			e & 16 || e & 32 && re(this.deps, this) ? t() : this.flags = 2;
		},
		stop() {
			this.flags = 0, this.depsTail = void 0, v(this);
		}
	};
	return t(), n;
}
// node_modules/@tanstack/store/dist/shallow.js
function y(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	if (e instanceof Map && t instanceof Map) {
		if (e.size !== t.size) return !1;
		for (let [n, r] of e) if (!t.has(n) || !Object.is(r, t.get(n))) return !1;
		return !0;
	}
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
	let n = le(e);
	if (n.length !== le(t).length) return !1;
	for (let r = 0; r < n.length; r++) if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
	return !0;
}
function le(e) {
	return Object.keys(e).concat(Object.getOwnPropertySymbols(e));
}
// node_modules/@tanstack/react-table/node_modules/@tanstack/react-store/dist/useSelector.js
function ue(e, t) {
	return e === t;
}
function de(e, t = (e) => e, n) {
	let a = n?.compare ?? ue, o = (0, i.useCallback)((t) => {
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), s = (0, i.useCallback)(() => e.get(), [e]);
	return (0, r.useSyncExternalStoreWithSelector)(o, s, s, t, a);
}
// node_modules/@tanstack/react-table/dist/Subscribe.js
function fe(e) {
	let t = de(e.source, e.selector, { compare: y });
	return typeof e.children == "function" ? e.children(t) : e.children;
}
// node_modules/@tanstack/table-core/dist/core/reactivity/coreReactivityFeature.utils.js
function pe(e) {
	let t = e;
	return Object.defineProperty(e, "state", { get() {
		return e.get();
	} }), "set" in e && (t.setState = e.set.bind(e)), t;
}
// node_modules/@tanstack/table-core/dist/core/reactivity/renderPhaseReactivity.js
function me(e) {
	let { createAtom: t, batch: n } = e, r = t(0);
	return {
		createOptionsStore: !1,
		wrapExternalAtoms: !1,
		addSubscription: () => {
			throw Error("Feature not supported in current reactivity implementation");
		},
		unmount: () => {
			throw Error("Feature not supported in current reactivity implementation");
		},
		schedule: e.schedule ?? ((e) => queueMicrotask(e)),
		batch: n,
		untrack: (e) => e(),
		createReadonlyAtom: (e, n) => {
			let i = n?.compare ?? Object.is, a = !1, o, s = () => {
				let t = e();
				return a && i(o, t) || (o = t, a = !0), o;
			}, c = t(() => (r.get(), s()), { compare: i });
			return {
				get: s,
				subscribe: c.subscribe.bind(c)
			};
		},
		createWritableAtom: (e, n) => t(e, { compare: n?.compare }),
		commit: () => {
			r.set((e) => e + 1);
		}
	};
}
function he(e, t = Object.is) {
	let n = !1, r;
	return {
		get: e.get,
		markCommitted: (e) => {
			r = e, n = !0;
		},
		subscribe: (i) => e.subscribe((e) => {
			n && t(r, e) || i(e);
		})
	};
}
// node_modules/@tanstack/react-table/dist/reactivity.js
function ge() {
	return me({
		createAtom: se,
		batch: ae
	});
}
// node_modules/@tanstack/table-core/dist/utils.js
function b(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function x(e) {
	if (Array.isArray(e)) return e.map(x);
	if (e && typeof e == "object") {
		let t = Object.getPrototypeOf(e);
		if (t !== Object.prototype && t !== null) return e;
		let n = t === null ? S() : {}, r = Object.keys(e);
		for (let t = 0; t < r.length; t++) {
			let i = r[t];
			Object.defineProperty(n, i, {
				configurable: !0,
				enumerable: !0,
				value: x(e[i]),
				writable: !0
			});
		}
		return n;
	}
	return e;
}
function _e(e, t) {
	let n = Object.keys(t), r = e;
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		!i.startsWith("_memo_") && i !== "_cellsCache" && (r[i] = t[i]);
	}
	return e;
}
function S() {
	return Object.create(null);
}
function C(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function w(e, t) {
	return (n) => {
		(t.options.atoms?.[e] ?? t.baseAtoms[e]).set((e) => b(n, e));
	};
}
function ve(e) {
	return e instanceof Function;
}
function ye(e, t) {
	let n = [], r = (e) => {
		e.forEach((e) => {
			n.push(e);
			let i = t(e);
			i.length && r(i);
		});
	};
	return r(e), n;
}
var be = ({ fn: e, memoDeps: t, onAfterCompare: n, onAfterUpdate: r, onBeforeCompare: i, onBeforeUpdate: a }) => {
	let o = [], s;
	return (c) => {
		i?.();
		let l = t?.(c), u = !l || l.length !== o?.length;
		if (!u && l) {
			for (let e = 0; e < l.length; e++) if (l[e] !== o[e]) {
				u = !0;
				break;
			}
		}
		return n?.(u), u && (o = l, a?.(), s = e(...l ?? []), r?.(s)), s;
	};
};
function xe(e) {
	let t = !1;
	return () => {
		t ? e() : t = !0;
	};
}
function T({ feature: e, fnName: t, objectId: n, onAfterUpdate: r, table: i, ...a }) {
	let o = () => {
		if (!r) return;
		let { schedule: e, untrack: t } = i._reactivity;
		e(() => t(() => r()));
	}, s = { onAfterUpdate: () => {
		o();
	} };
	return be({
		...a,
		...s
	});
}
function Se(e, t = "_") {
	let [n, r] = e.split(t);
	return {
		fnKey: r,
		fnName: `${n}.${r}`,
		parentName: n
	};
}
function E(e, t, n) {
	for (let [r, { fn: i, memoDeps: a }] of Object.entries(n)) {
		let { fnKey: n, fnName: o } = Se(r);
		t[n] = a ? T({
			memoDeps: a,
			fn: i,
			fnName: o,
			table: t,
			feature: e
		}) : i;
	}
}
function D(e, t, n, r) {
	for (let [i, { fn: a, memoDeps: o }] of Object.entries(r)) {
		let { fnKey: r, fnName: s } = Se(i);
		if (o) {
			let i = `_memo_${r}`;
			t[r] = function(...t) {
				if (!this[i]) {
					let t = this;
					this[i] = T({
						memoDeps: (e) => o(t, e),
						fn: (...e) => a(t, ...e),
						fnName: s,
						objectId: t.id,
						table: n,
						feature: e
					});
				}
				return this[i](...t);
			};
		} else t[r] = function(...e) {
			return a(this, ...e);
		};
	}
}
function O(e, t, n, ...r) {
	return e[t]?.(...r) ?? n(e, ...r);
}
// node_modules/@tanstack/table-core/dist/core/cells/coreCellsFeature.utils.js
function Ce(e) {
	return e.row.getValue(e.column.id);
}
function we(e) {
	return e.getValue() ?? e.table.options.renderFallbackValue;
}
function Te(e) {
	return {
		table: e.table,
		column: e.column,
		row: e.row,
		cell: e,
		getValue: () => e.getValue(),
		renderValue: () => e.renderValue()
	};
}
// node_modules/@tanstack/table-core/dist/core/cells/coreCellsFeature.js
var Ee = { assignCellPrototype: (e, t) => {
	D("coreCellsFeature", e, t, {
		cell_getValue: { fn: (e) => Ce(e) },
		cell_renderValue: { fn: (e) => we(e) },
		cell_getContext: {
			fn: (e) => Te(e),
			memoDeps: (e) => [e]
		}
	});
} };
// node_modules/@tanstack/table-core/dist/core/headers/constructHeader.js
function De(e) {
	if (!e._headerPrototype) {
		e._headerPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignHeaderPrototype?.(e._headerPrototype, e);
	}
	return e._headerPrototype;
}
function Oe(e, t, n) {
	let r = De(e), i = Object.create(r);
	i.colSpan = 0, i.column = t, i.depth = n.depth, i.headerGroup = null, i.id = n.id ?? t.id, i.index = n.index, i.isPlaceholder = !!n.isPlaceholder, i.placeholderId = n.placeholderId, i.rowSpan = 0, i.subHeaders = [];
	let a = e._headerInstanceInitFns;
	for (let e = 0; e < a.length; e++) a[e](i);
	return i;
}
// node_modules/@tanstack/table-core/dist/features/column-pinning/columnPinningFeature.utils.js
function ke() {
	return {
		start: [],
		end: []
	};
}
// node_modules/@tanstack/table-core/dist/features/column-visibility/columnVisibilityFeature.utils.js
function Ae() {
	return S();
}
function je(e, t) {
	A(e) && j(e.table, (n) => {
		let r = Object.assign(S(), n), i = t ?? !O(e, "getIsVisible", k), a = e.getLeafColumns();
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			A(t) && (r[t.id] = i);
		}
		return r;
	});
}
function k(e) {
	let t = e.table.atoms.columnVisibility?.get();
	if (!t) return !0;
	let n = e.columns;
	return n.length ? n.some((e) => O(e, "getIsVisible", k)) : (C(t, e.id) ? t[e.id] : void 0) ?? !0;
}
function A(e) {
	return (e.columnDef.enableHiding ?? !0) && (e.table.options.enableHiding ?? !0);
}
function Me(e) {
	return (t) => {
		je(e, t.target.checked);
	};
}
function Ne(e) {
	let t = e.getAllCells(), n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		O(r.column, "getIsVisible", k) && n.push(r);
	}
	let { start: r, end: i } = e.table.atoms.columnPinning?.get() ?? ke();
	if (!r.length && !i.length) return n;
	let a = O(e, "getVisibleCellsByColumnId", Pe), o = [];
	for (let e = 0; e < r.length; e++) {
		let t = a[r[e]];
		t && o.push(t);
	}
	let s = [];
	for (let e = 0; e < i.length; e++) {
		let t = a[i[e]];
		t && s.push(t);
	}
	let c = [];
	for (let e = 0; e < n.length; e++) {
		let t = n[e], a = t.column.id;
		!r.includes(a) && !i.includes(a) && c.push(t);
	}
	return [
		...o,
		...c,
		...s
	];
}
function Pe(e) {
	let t = S(), n = e.getAllCells();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		O(r.column, "getIsVisible", k) && (t[r.column.id] = r);
	}
	return t;
}
function Fe(e) {
	return e.getAllFlatColumns().filter((e) => O(e, "getIsVisible", k));
}
function Ie(e) {
	return e.getAllLeafColumns().filter((e) => O(e, "getIsVisible", k));
}
function j(e, t) {
	e.options.onColumnVisibilityChange?.(t);
}
function Le(e, t) {
	j(e, t ? S() : Object.assign(S(), x(e.initialState.columnVisibility ?? {})));
}
function Re(e, t) {
	t ??= !ze(e);
	let n = S(), r = e.getAllLeafColumns();
	for (let e = 0; e < r.length; e++) {
		let i = r[e];
		n[i.id] = t || !A(i);
	}
	j(e, n);
}
function ze(e) {
	return !e.getAllLeafColumns().some((e) => !O(e, "getIsVisible", k));
}
function Be(e) {
	return e.getAllLeafColumns().some((e) => O(e, "getIsVisible", k));
}
function Ve(e) {
	return (t) => {
		Re(e, t.target.checked);
	};
}
// node_modules/@tanstack/table-core/dist/core/headers/buildHeaderGroups.js
function He(e, t = 1) {
	let n = t;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		O(i, "getIsVisible", k) && i.columns.length && (n = Math.max(n, He(i.columns, t + 1)));
	}
	return n;
}
function Ue(e, t) {
	return e ? `${e}_${t}` : String(t);
}
function We(e, t, n, r) {
	let i = e ?? "";
	return t && (i = i ? `${i}_${t}` : String(t)), n && (i = i ? `${i}_${n}` : n), r && (i = i ? `${i}_${r}` : r), i;
}
function Ge(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) e[r].column === t && n++;
	return n;
}
function Ke(e, t, n, r, i, a) {
	let o = {
		depth: t,
		id: Ue(r, t),
		headers: []
	}, s = [];
	for (let i = 0; i < e.length; i++) {
		if (!(i in e)) continue;
		let a = e[i], c = s[s.length - 1], l = a.column.depth === o.depth, u, d = !1;
		if (l && a.column.parent ? u = a.column.parent : (u = a.column, d = !0), c && c.column === u) c.subHeaders.push(a);
		else {
			let e = Oe(n, u, {
				id: We(r, t, u.id, a.id),
				isPlaceholder: d,
				placeholderId: d ? String(Ge(s, u)) : void 0,
				depth: t,
				index: s.length
			});
			e.subHeaders.push(a), s.push(e);
		}
		o.headers.push(a), a.headerGroup = o;
	}
	for (let e = 0; e < a.length; e++) a[e](o);
	i.push(o), t > 0 && Ke(s, t - 1, n, r, i, a);
}
function qe(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (!O(n.column, "getIsVisible", k)) continue;
		let r = 0;
		if (n.subHeaders.length) {
			qe(n.subHeaders);
			for (let e = 0; e < n.subHeaders.length; e++) {
				let t = n.subHeaders[e];
				O(t.column, "getIsVisible", k) && (r += t.colSpan);
			}
		} else r = 1;
		if (n.colSpan = r, n.isPlaceholder && n.subHeaders.length === 1 && n.subHeaders[0].column === n.column) {
			let e = 1, t = n.subHeaders[0];
			for (; t;) t.rowSpan = 0, e++, t = t.subHeaders.length === 1 && t.subHeaders[0].column === n.column ? t.subHeaders[0] : void 0;
			n.rowSpan = e;
		} else n.rowSpan = 1;
	}
}
function Je(e, t, n, r) {
	let i = He(e), a = [], o = n._headerGroupInstanceInitFns, s = Array(t.length);
	for (let e = 0; e < t.length; e++) e in t && (s[e] = Oe(n, t[e], {
		depth: i,
		index: e
	}));
	return Ke(s, i - 1, n, r, a, o), a.reverse(), qe(a[0]?.headers ?? []), a;
}
// node_modules/@tanstack/table-core/dist/core/columns/constructColumn.js
function Ye(e) {
	if (!e._columnPrototype) {
		e._columnPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignColumnPrototype?.(e._columnPrototype, e);
	}
	return e._columnPrototype;
}
function Xe(e, t, n, r) {
	let i = {
		...e.getDefaultColumnDef(),
		...t
	}, a = i.accessorKey, o = a === void 0 ? void 0 : String(a), s = i.id ?? o?.replaceAll(".", "_") ?? (typeof i.header == "string" ? i.header : void 0), c;
	if (i.accessorFn) c = i.accessorFn;
	else if (a !== void 0) {
		if (typeof a == "string" && a.includes(".")) {
			let e = a.split(".");
			c = (t) => {
				let n = t;
				for (let t = 0; t < e.length; t++) {
					let r = e[t];
					n = n?.[r];
				}
				return n;
			};
		} else c = (e) => e[i.accessorKey];
	}
	if (!s) throw Error();
	let l = Ye(e), u = Object.create(l);
	u.accessorFn = c, u.columnDef = i, u.columns = [], u.depth = n, u.id = `${String(s)}`, u.parent = r;
	let d = e._columnInstanceInitFns;
	for (let e = 0; e < d.length; e++) d[e](u);
	return u;
}
// node_modules/@tanstack/table-core/dist/features/column-ordering/columnOrderingFeature.utils.js
function Ze(e) {
	let t = e.atoms.columnOrder?.get();
	return (n) => {
		let r = [];
		if (!t?.length) r = n;
		else {
			let e = /* @__PURE__ */ new Map();
			for (let t = 0; t < n.length; t++) {
				let r = n[t];
				e.set(r.id, r);
			}
			for (let n = 0; n < t.length; n++) {
				let i = t[n], a = e.get(i);
				a && (r.push(a), e.delete(i));
			}
			for (let t = 0; t < n.length; t++) {
				let i = n[t];
				e.has(i.id) && r.push(i);
			}
		}
		return Qe(e, r);
	};
}
function Qe(e, t) {
	let n = e.atoms.grouping?.get() ?? [], { groupedColumnMode: r } = e.options;
	if (!n.length || !r) return t;
	let i = t.filter((e) => !n.includes(e.id));
	if (r === "remove") return i;
	let a = /* @__PURE__ */ new Map();
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		a.set(n.id, n);
	}
	let o = [];
	for (let e = 0; e < n.length; e++) {
		let t = a.get(n[e]);
		t && o.push(t);
	}
	return [...o, ...i];
}
// node_modules/@tanstack/table-core/dist/core/columns/coreColumnsFeature.utils.js
function $e(e) {
	return [e, ...e.columns.flatMap((e) => e.getFlatColumns())];
}
function et(e) {
	if (e.columns.length) {
		let t = e.columns.flatMap((e) => e.getLeafColumns());
		return O(e.table, "getOrderColumns", Ze)(t);
	}
	return [e];
}
function tt(e) {
	return {
		header: (e) => {
			let t = e.header.column.columnDef;
			return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
		},
		cell: (e) => e.renderValue()?.toString?.() ?? null,
		...Object.values(e._features).reduce((e, t) => Object.assign(e, t.getDefaultColumnDef?.()), {}),
		...e.options.defaultColumn
	};
}
function nt(e, t, n, r = 0) {
	let i = Array(t.length);
	for (let a = 0; a < t.length; a++) {
		if (!(a in t)) continue;
		let o = t[a], s = Xe(e, o, r, n), c = o;
		s.columns = c.columns ? nt(e, c.columns, s, r + 1) : [], i[a] = s;
	}
	return i;
}
function rt(e) {
	return nt(e, e.options.columns);
}
function it(e) {
	return e.getAllColumns().flatMap((e) => e.getFlatColumns());
}
function at(e) {
	let t = S(), n = e.getAllFlatColumns();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.id] = r;
	}
	return t;
}
function ot(e) {
	let t = e.getAllColumns().flatMap((e) => e.getLeafColumns());
	return O(e, "getOrderColumns", Ze)(t);
}
function st(e) {
	let t = S(), n = e.getAllLeafColumns();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.id] = r;
	}
	return t;
}
function ct(e, t) {
	return e.getAllFlatColumnsById()[t];
}
// node_modules/@tanstack/table-core/dist/core/columns/coreColumnsFeature.js
var lt = {
	assignColumnPrototype: (e, t) => {
		D("coreColumnsFeature", e, t, {
			column_getFlatColumns: {
				fn: (e) => $e(e),
				memoDeps: (e) => [e.table.options.columns]
			},
			column_getLeafColumns: {
				fn: (e) => et(e),
				memoDeps: (e) => [
					e.table.atoms.columnOrder?.get(),
					e.table.atoms.grouping?.get(),
					e.table.options.columns,
					e.table.options.groupedColumnMode
				]
			}
		});
	},
	constructTableAPIs: (e) => {
		E("coreColumnsFeature", e, {
			table_getDefaultColumnDef: {
				fn: () => tt(e),
				memoDeps: () => [e.options.defaultColumn]
			},
			table_getAllColumns: {
				fn: () => rt(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllFlatColumns: {
				fn: () => it(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllFlatColumnsById: {
				fn: () => at(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllLeafColumns: {
				fn: () => ot(e),
				memoDeps: () => [
					e.atoms.columnOrder?.get(),
					e.atoms.grouping?.get(),
					e.options.columns,
					e.options.groupedColumnMode
				]
			},
			table_getAllLeafColumnsById: {
				fn: () => st(e),
				memoDeps: () => [e.getAllLeafColumns()]
			},
			table_getColumn: { fn: (t) => ct(e, t) }
		});
	}
};
// node_modules/@tanstack/table-core/dist/core/headers/coreHeadersFeature.utils.js
function ut(e, t) {
	for (let n = 0; n < e.subHeaders.length; n++) ut(e.subHeaders[n], t);
	t.push(e);
}
function dt(e) {
	let t = [];
	return ut(e, t), t;
}
function ft(e) {
	return {
		column: e.column,
		header: e,
		table: e.column.table
	};
}
function pt(e) {
	let { start: t, end: n } = e.atoms.columnPinning?.get() ?? ke(), r = e.getAllColumns(), i = O(e, "getVisibleLeafColumns", Ie);
	if (!t.length && !n.length) return Je(r, i, e);
	let a = e.getAllLeafColumnsById(), o = [];
	for (let e = 0; e < t.length; e++) {
		let n = a[t[e]];
		n && O(n, "getIsVisible", k) && o.push(n);
	}
	let s = [];
	for (let e = 0; e < n.length; e++) {
		let t = a[n[e]];
		t && O(t, "getIsVisible", k) && s.push(t);
	}
	let c = i.filter((e) => !t.includes(e.id) && !n.includes(e.id));
	return Je(r, [
		...o,
		...c,
		...s
	], e);
}
function mt(e) {
	return [...e.getHeaderGroups()].reverse();
}
function ht(e) {
	let t = e.getHeaderGroups(), n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e].headers;
		for (let e = 0; e < r.length; e++) n.push(r[e]);
	}
	return n;
}
function gt(e) {
	let t = e.getHeaderGroups()[0]?.headers ?? [], n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e].getLeafHeaders();
		for (let e = 0; e < r.length; e++) n.push(r[e]);
	}
	return n;
}
// node_modules/@tanstack/table-core/dist/core/headers/coreHeadersFeature.js
var _t = {
	assignHeaderPrototype: (e, t) => {
		D("coreHeadersFeature", e, t, {
			header_getLeafHeaders: {
				fn: (e) => dt(e),
				memoDeps: (e) => [e.column.table.options.columns]
			},
			header_getContext: {
				fn: (e) => ft(e),
				memoDeps: (e) => [e.column.table.options.columns]
			}
		});
	},
	constructTableAPIs: (e) => {
		E("coreHeadersFeature", e, {
			table_getHeaderGroups: {
				fn: () => pt(e),
				memoDeps: () => [
					e.options.columns,
					e.atoms.columnOrder?.get(),
					e.atoms.grouping?.get(),
					e.atoms.columnPinning?.get(),
					e.atoms.columnVisibility?.get(),
					e.options.groupedColumnMode
				]
			},
			table_getFooterGroups: {
				fn: () => mt(e),
				memoDeps: () => [e.getHeaderGroups()]
			},
			table_getFlatHeaders: {
				fn: () => ht(e),
				memoDeps: () => [e.getHeaderGroups()]
			},
			table_getLeafHeaders: {
				fn: () => gt(e),
				memoDeps: () => [e.getHeaderGroups()]
			}
		});
	}
};
// node_modules/@tanstack/table-core/dist/core/rows/constructRow.js
function vt(e) {
	if (!e._rowPrototype) {
		e._rowPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignRowPrototype?.(e._rowPrototype, e);
	}
	return e._rowPrototype;
}
var yt = (e, t, n, r, i, a, o) => {
	let s = vt(e), c = Object.create(s);
	c._displayIndexCache = -1, c._uniqueValuesCache = S(), c._valuesCache = S(), c.depth = i, c.id = t, c.index = r, c.original = n, c.parentId = o, c.subRows = a ?? [];
	let l = e._rowInstanceInitFns;
	for (let e = 0; e < l.length; e++) l[e](c);
	return c;
}, bt = /([0-9]+)/gm;
function M(e) {
	let t = Object.assign((e, n, r) => {
		let i = e.getValue(r), a = n.getValue(r), o = t.resolveDataValue;
		return o && (i = o(i), a = o(a)), t.sort(i, a, e, n, r);
	}, e);
	return t;
}
var xt = M({
	resolveDataValue: (e) => N(e).toLowerCase(),
	sort: (e, t) => Et(e, t)
});
M({
	resolveDataValue: (e) => N(e),
	sort: (e, t) => Et(e, t)
});
var St = M({
	resolveDataValue: (e) => N(e).toLowerCase(),
	sort: (e, t) => wt(e, t)
});
M({
	resolveDataValue: (e) => N(e),
	sort: (e, t) => wt(e, t)
}), M({
	resolveDataValue: (e) => Tt(e),
	sort: (e, t) => e > t ? 1 : e < t ? -1 : 0
});
var Ct = M({ sort: (e, t) => wt(e, t) });
function wt(e, t) {
	return e === t ? 0 : e > t ? 1 : -1;
}
function Tt(e) {
	return e instanceof Date ? e.getTime() : e;
}
function N(e) {
	return typeof e == "number" ? isNaN(e) || e === Infinity || e === -Infinity ? "" : String(e) : typeof e == "string" ? e : "";
}
function Et(e, t) {
	let n = 0, r = 0, i = e.length, a = t.length;
	for (; n < i && r < a;) {
		let i = P(e.charCodeAt(n)), a = P(t.charCodeAt(r)), o = Dt(e, n, i), s = Dt(t, r, a);
		if (!i && !a) {
			let i = Ot(e, n, o, t, r, s);
			if (i) return i;
			n = o, r = s;
			continue;
		}
		if (i !== a) return i ? 1 : -1;
		let c = kt(e, n, o, t, r, s);
		if (c) return c;
		n = o, r = s;
	}
	return jt(e, n) - jt(t, r);
}
function P(e) {
	return e >= 48 && e <= 57;
}
function Dt(e, t, n) {
	let r = t + 1;
	for (; r < e.length && P(e.charCodeAt(r)) === n;) r++;
	return r;
}
function Ot(e, t, n, r, i, a) {
	let o = n - t, s = a - i, c = o < s ? o : s;
	for (let n = 0; n < c; n++) {
		let a = e.charCodeAt(t + n), o = r.charCodeAt(i + n);
		if (a > o) return 1;
		if (o > a) return -1;
	}
	return o > s ? 1 : s > o ? -1 : 0;
}
function kt(e, t, n, r, i, a) {
	let o = t;
	for (; o < n && e.charCodeAt(o) === 48;) o++;
	let s = i;
	for (; s < a && r.charCodeAt(s) === 48;) s++;
	let c = n - o, l = a - s;
	if (c === 0 && l === 0) return 0;
	if (c <= 15 && l <= 15) {
		let t = At(e, o, n), i = At(r, s, a);
		return t > i ? 1 : i > t ? -1 : 0;
	}
	let u = parseInt(e.slice(t, n), 10), d = parseInt(r.slice(i, a), 10);
	return u > d ? 1 : d > u ? -1 : 0;
}
function At(e, t, n) {
	let r = 0;
	for (let i = t; i < n; i++) r = r * 10 + e.charCodeAt(i) - 48;
	return r;
}
function jt(e, t) {
	let n = 0, r = t;
	for (; r < e.length;) n++, r = Dt(e, r, P(e.charCodeAt(r)));
	return n;
}
// node_modules/@tanstack/table-core/dist/features/cell-selection/cellSelectionFeature.utils.js
function Mt() {
	return [];
}
function Nt(e, t) {
	e.options.onCellSelectionChange?.(t);
}
function Pt(e, t) {
	Nt(e, t ? Mt() : x(e.initialState.cellSelection) ?? Mt());
}
function Ft(e) {
	e.atoms.cellSelection && (e.options.autoResetAll ?? e.options.autoResetCellSelection ?? !0) && e._reactivity.schedule(() => Pt(e));
}
// node_modules/@tanstack/table-core/dist/features/row-expanding/rowExpandingFeature.utils.js
function It(e) {
	e.atoms.expanded && (e.options.autoResetAll ?? e.options.autoResetExpanded ?? !e.options.manualExpanding) && e._reactivity.schedule(() => Rt(e));
}
function Lt(e, t) {
	e.options.onExpandedChange?.(t);
}
function Rt(e, t) {
	let n = e.initialState.expanded;
	Lt(e, t ? S() : n === !0 || Object.assign(S(), x(n ?? {})));
}
function zt(e) {
	let t = e.table.atoms.expanded?.get() ?? {};
	return !!(e.table.options.getIsRowExpanded?.(e) ?? (t === !0 || Bt(t, e.id)));
}
function Bt(e, t) {
	return !!(e && e !== !0 && C(e, t) && e[t]);
}
// node_modules/@tanstack/table-core/dist/features/row-pagination/rowPaginationFeature.utils.js
var F = 0, I = 10;
function L() {
	return {
		pageIndex: F,
		pageSize: I
	};
}
function R(e) {
	(e.options.autoResetAll ?? e.options.autoResetPageIndex ?? !e.options.manualPagination) && Ht(e, !0);
}
function z(e, t) {
	return e.options.onPaginationChange?.((e) => b(t, e));
}
function Vt(e, t) {
	z(e, t ? L() : x(e.initialState.pagination ?? L()));
}
function B(e, t) {
	z(e, (n) => {
		let r = b(t, n.pageIndex), i = e.options.pageCount === void 0 || e.options.pageCount === -1 ? 2 ** 53 - 1 : e.options.pageCount - 1;
		return r = Math.max(0, Math.min(r, i)), {
			...n,
			pageIndex: r
		};
	});
}
function Ht(e, t) {
	let n = e.atoms.pagination?.get()?.pageIndex ?? F, r = t ? F : e.initialState.pagination?.pageIndex ?? F;
	r !== n && B(e, r);
}
function Ut(e, t) {
	let n = e.atoms.pagination?.get()?.pageSize ?? I, r = t ? I : e.initialState.pagination?.pageSize ?? I;
	r !== n && Wt(e, r);
}
function Wt(e, t) {
	z(e, (e) => {
		let n = Math.max(1, b(t, e.pageSize)), r = e.pageSize * e.pageIndex, i = Math.floor(r / n);
		return {
			...e,
			pageIndex: i,
			pageSize: n
		};
	});
}
function Gt(e) {
	let t = V(e), n = [];
	return t && t > 0 && (n = [...Array(t)].fill(null).map((e, t) => t)), n;
}
function Kt(e) {
	return (e.atoms.pagination?.get()?.pageIndex ?? 0) > 0;
}
function qt(e) {
	let t = e.atoms.pagination?.get()?.pageIndex ?? F, n = V(e);
	return n === -1 || n !== 0 && t < n - 1;
}
function Jt(e) {
	return B(e, (e) => e - 1);
}
function Yt(e) {
	return B(e, (e) => e + 1);
}
function Xt(e) {
	return B(e, 0);
}
function Zt(e) {
	return B(e, V(e) - 1);
}
function V(e) {
	return e.options.pageCount ?? Math.ceil(Qt(e) / (e.atoms.pagination?.get()?.pageSize ?? I));
}
function Qt(e) {
	return e.options.rowCount ?? e.getPrePaginatedRowModel().rows.length;
}
// node_modules/@tanstack/table-core/dist/features/row-sorting/rowSortingFeature.utils.js
function $t() {
	return [];
}
function H(e, t) {
	e.options.onSortingChange?.(t);
}
function en(e, t) {
	H(e, t ? [] : x(e.initialState.sorting ?? []));
}
function tn(e) {
	e.atoms.sorting && (e.options.autoResetAll ?? e.options.autoResetSorting ?? !1) && en(e);
}
function nn(e) {
	let t = e.table._rowModelFns.sortFns, n = e.table.getFilteredRowModel().flatRows.slice(0, 10), r, i = !1;
	for (let t = 0; t < n.length; t++) {
		let a = n[t].getValue(e.id);
		if (Object.prototype.toString.call(a) === "[object Date]") {
			r = "datetime";
			break;
		}
		if (typeof a == "string" && (i = !0, a.split(bt).length > 1)) {
			r = "alphanumeric";
			break;
		}
	}
	if (!r && i && (r = "text"), r) {
		let e = t?.[r];
		if (e || r === "alphanumeric" && (e = t?.text), e) return e;
	}
	return Ct;
}
function rn(e) {
	let t = e.table.getFilteredRowModel().flatRows.slice(0, 10);
	for (let n = 0; n < t.length; n++) {
		let r = t[n].getValue(e.id);
		if (r != null) return typeof r == "string" ? "asc" : "desc";
	}
	return "desc";
}
function an(e) {
	let t = e.table._rowModelFns.sortFns;
	return ve(e.columnDef.sortFn) ? e.columnDef.sortFn : e.columnDef.sortFn === "auto" ? nn(e) : t?.[e.columnDef.sortFn] ?? Ct;
}
function on(e, t, n) {
	let r = cn(e, n && U(e)), i = t !== void 0;
	H(e.table, (a) => {
		let o = a.findIndex((t) => t.id === e.id), s = o === -1 ? void 0 : a[o], c = [], l, u = i ? t : r === "desc", d = !!(a.length && U(e) && n);
		return l = d ? s ? "toggle" : "add" : s ? "toggle" : "replace", l === "toggle" && (i || r || (l = "remove")), l === "add" ? (c = [...a, {
			id: e.id,
			desc: u
		}], c.splice(0, c.length - (e.table.options.maxMultiSortColCount ?? 2 ** 53 - 1))) : c = l === "toggle" ? d ? a.map((t) => t.id === e.id ? {
			...t,
			desc: u
		} : t) : [{
			id: e.id,
			desc: u
		}] : l === "remove" ? d ? a.filter((t) => t.id !== e.id) : [] : [{
			id: e.id,
			desc: u
		}], c;
	});
}
function sn(e) {
	return e.columnDef.sortDescFirst ?? e.table.options.sortDescFirst ?? rn(e) === "desc" ? "desc" : "asc";
}
function cn(e, t) {
	let n = sn(e), r = un(e);
	return r ? r !== n && (e.table.options.enableSortingRemoval ?? !0) && (!t || (e.table.options.enableMultiRemove ?? !0)) ? !1 : r === "desc" ? "asc" : "desc" : n;
}
function ln(e) {
	return (e.columnDef.enableSorting ?? !0) && (e.table.options.enableSorting ?? !0) && !!e.accessorFn;
}
function U(e) {
	return e.columnDef.enableMultiSort ?? e.table.options.enableMultiSort ?? !!e.accessorFn;
}
function un(e) {
	let t = e.table.atoms.sorting?.get()?.find((t) => t.id === e.id);
	return t ? t.desc ? "desc" : "asc" : !1;
}
function dn(e) {
	return e.table.atoms.sorting?.get()?.findIndex((t) => t.id === e.id) ?? -1;
}
function fn(e) {
	H(e.table, (t) => t.length ? t.filter((t) => t.id !== e.id) : []);
}
function pn(e) {
	let t = ln(e);
	return (n) => {
		t && on(e, void 0, U(e) ? e.table.options.isMultiSortEvent?.(n) : !1);
	};
}
// node_modules/@tanstack/table-core/dist/core/row-models/createCoreRowModel.js
function mn() {
	return (e) => T({
		feature: "coreRowModelsFeature",
		table: e,
		fnName: "table.getCoreRowModel",
		memoDeps: () => [e.options.data],
		fn: () => gn(e, e.options.data),
		onAfterUpdate: xe(() => {
			It(e), R(e), tn(e), Ft(e);
		})
	});
}
function hn(e, t, n, r = 0, i) {
	let a = [];
	for (let o = 0; o < n.length; o++) {
		let s = n[o], c = yt(e, e.getRowId(s, o, i), s, o, r, void 0, i?.id);
		t.flatRows.push(c), t.rowsById[c.id] = c, a.push(c), e.options.getSubRows && (c.originalSubRows = e.options.getSubRows(s, o), c.originalSubRows?.length && (c.subRows = hn(e, t, c.originalSubRows, r + 1, c)));
	}
	return a;
}
function gn(e, t) {
	let n = {
		rows: [],
		flatRows: [],
		rowsById: S()
	};
	return n.rows = hn(e, n, t), n;
}
// node_modules/@tanstack/table-core/dist/core/row-models/coreRowModelsFeature.utils.js
function _n(e) {
	return e._rowModels.coreRowModel || (e._rowModels.coreRowModel = e.options.features.coreRowModel?.(e) ?? mn()(e)), e._rowModels.coreRowModel();
}
function vn(e) {
	return e.getCoreRowModel();
}
function yn(e) {
	return e._rowModels.filteredRowModel || (e._rowModels.filteredRowModel = e.options.features.filteredRowModel?.(e)), e.options.manualFiltering || !e._rowModels.filteredRowModel ? e.getPreFilteredRowModel() : e._rowModels.filteredRowModel();
}
function bn(e) {
	return e.getFilteredRowModel();
}
function xn(e) {
	return e._rowModels.groupedRowModel || (e._rowModels.groupedRowModel = e.options.features.groupedRowModel?.(e)), e.options.manualGrouping || !e._rowModels.groupedRowModel ? e.getPreGroupedRowModel() : e._rowModels.groupedRowModel();
}
function Sn(e) {
	return e.getGroupedRowModel();
}
function Cn(e) {
	return e._rowModels.sortedRowModel || (e._rowModels.sortedRowModel = e.options.features.sortedRowModel?.(e)), e.options.manualSorting || !e._rowModels.sortedRowModel ? e.getPreSortedRowModel() : e._rowModels.sortedRowModel();
}
function wn(e) {
	return e.getSortedRowModel();
}
function Tn(e) {
	return e._rowModels.expandedRowModel || (e._rowModels.expandedRowModel = e.options.features.expandedRowModel?.(e)), e.options.manualExpanding || !e._rowModels.expandedRowModel ? e.getPreExpandedRowModel() : e._rowModels.expandedRowModel();
}
function En(e) {
	return e.getExpandedRowModel();
}
function Dn(e) {
	return e._rowModels.paginatedRowModel || (e._rowModels.paginatedRowModel = e.options.features.paginatedRowModel?.(e)), e.options.manualPagination || !e._rowModels.paginatedRowModel ? e.getPrePaginatedRowModel() : e._rowModels.paginatedRowModel();
}
function On(e) {
	return e.getPaginatedRowModel();
}
// node_modules/@tanstack/table-core/dist/core/row-models/coreRowModelsFeature.js
var kn = { constructTableAPIs: (e) => {
	E("coreRowModelsFeature", e, {
		table_getCoreRowModel: { fn: () => _n(e) },
		table_getPreFilteredRowModel: { fn: () => vn(e) },
		table_getFilteredRowModel: { fn: () => yn(e) },
		table_getPreGroupedRowModel: { fn: () => bn(e) },
		table_getGroupedRowModel: { fn: () => xn(e) },
		table_getPreSortedRowModel: { fn: () => Sn(e) },
		table_getSortedRowModel: { fn: () => Cn(e) },
		table_getPreExpandedRowModel: { fn: () => wn(e) },
		table_getExpandedRowModel: { fn: () => Tn(e) },
		table_getPrePaginatedRowModel: { fn: () => En(e) },
		table_getPaginatedRowModel: { fn: () => Dn(e) },
		table_getRowModel: { fn: () => On(e) }
	});
} };
// node_modules/@tanstack/table-core/dist/core/cells/constructCell.js
function An(e) {
	if (!e._cellPrototype) {
		e._cellPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignCellPrototype?.(e._cellPrototype, e);
	}
	return e._cellPrototype;
}
function jn(e, t, n) {
	let r = An(n), i = Object.create(r);
	i.column = e, i.id = `${t.id}_${e.id}`, i.row = t;
	let a = n._cellInstanceInitFns;
	for (let e = 0; e < a.length; e++) a[e](i);
	return i;
}
// node_modules/@tanstack/table-core/dist/core/rows/coreRowsFeature.utils.js
function Mn(e) {
	let t = e.table.getRowsInDisplayOrder(), n = e._displayIndexCache;
	return t[n] === e ? n : -1;
}
function Nn(e) {
	let t = e.getPrePaginatedRowModel().rows;
	if (e.options.paginateExpandedRows === !1) {
		let e = [], n = (t) => {
			t._displayIndexCache = e.length, e.push(t), t.subRows.length && t.getIsExpanded?.() && t.subRows.forEach(n);
		};
		return t.forEach(n), e;
	}
	for (let e = 0; e < t.length; e++) t[e]._displayIndexCache = e;
	return t;
}
function Pn(e, t) {
	if (C(e._valuesCache, t)) return e._valuesCache[t];
	let n = e.table.getColumn(t);
	if (n?.accessorFn) return e._valuesCache[t] = n.accessorFn(e.original, e.index), e._valuesCache[t];
}
function Fn(e, t) {
	if (C(e._uniqueValuesCache, t)) return e._uniqueValuesCache[t];
	let n = e.table.getColumn(t);
	if (n?.accessorFn) return n.columnDef.getUniqueValues ? (e._uniqueValuesCache[t] = n.columnDef.getUniqueValues(e.original, e.index), e._uniqueValuesCache[t]) : (e._uniqueValuesCache[t] = [e.getValue(t)], e._uniqueValuesCache[t]);
}
function In(e, t) {
	return e.getValue(t) ?? e.table.options.renderFallbackValue;
}
function Ln(e) {
	return ye(e.subRows, (e) => e.subRows);
}
function Rn(e) {
	let t = e.getCoreRowModel().flatRows, n = 0;
	for (let e = 0; e < t.length; e++) n = Math.max(n, t[e].depth);
	return n;
}
function zn(e) {
	if (e.parentId) return e.table.getCoreRowModel().rowsById[e.parentId] ?? e.table.getRow(e.parentId, !0);
}
function Bn(e) {
	let t = [], n = e;
	for (;;) {
		let e = n.getParentRow();
		if (!e) break;
		t.push(e), n = e;
	}
	return t.reverse();
}
function Vn(e) {
	let t = e.table.getAllLeafColumns(), n = e._cellsCache;
	n ||= e._cellsCache = /* @__PURE__ */ new WeakMap();
	let r = Array(t.length);
	for (let i = 0; i < t.length; i++) {
		let a = t[i], o = n.get(a);
		o || (o = jn(a, e, e.table), n.set(a, o)), r[i] = o;
	}
	return r;
}
function Hn(e) {
	let t = S(), n = e.getAllCells();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.column.id] = r;
	}
	return t;
}
function Un(e, t, n, r) {
	return t.options.getRowId?.(e, n, r) ?? (r ? `${r.id}.${n}` : String(n));
}
function Wn(e, t, n) {
	let r = (n ? e.getPrePaginatedRowModel() : e.getRowModel()).rowsById[t];
	if (!r && (r = e.getCoreRowModel().rowsById[t], !r)) throw Error();
	return r;
}
// node_modules/@tanstack/table-core/dist/core/rows/coreRowsFeature.js
var Gn = {
	assignRowPrototype: (e, t) => {
		D("coreRowsFeature", e, t, {
			row_getDisplayIndex: { fn: (e) => Mn(e) },
			row_getAllCellsByColumnId: {
				fn: (e) => Hn(e),
				memoDeps: (e) => [e.getAllCells()]
			},
			row_getAllCells: {
				fn: (e) => Vn(e),
				memoDeps: (e) => [e.table.getAllLeafColumns()]
			},
			row_getLeafRows: {
				fn: (e) => Ln(e),
				memoDeps: (e) => [e.subRows]
			},
			row_getParentRow: { fn: (e) => zn(e) },
			row_getParentRows: { fn: (e) => Bn(e) },
			row_getUniqueValues: { fn: (e, t) => Fn(e, t) },
			row_getValue: { fn: (e, t) => Pn(e, t) },
			row_renderValue: { fn: (e, t) => In(e, t) }
		});
	},
	constructTableAPIs: (e) => {
		E("coreRowsFeature", e, {
			table_getRowsInDisplayOrder: {
				fn: () => Nn(e),
				memoDeps: () => [
					e.getPrePaginatedRowModel().rows,
					e.options.paginateExpandedRows,
					e.options.paginateExpandedRows === !1 ? e.atoms.expanded?.get() : void 0
				]
			},
			table_getRowId: { fn: (t, n, r) => Un(t, e, n, r) },
			table_getRow: { fn: (t, n) => Wn(e, t, n) },
			table_getMaxSubRowDepth: {
				fn: () => Rn(e),
				memoDeps: () => [e.getCoreRowModel()]
			}
		});
	}
};
// node_modules/@tanstack/table-core/dist/core/table/coreTablesFeature.utils.js
function Kn(e, t, n = (e, t) => e === t) {
	let r = t === void 0 ? e.options.state : t;
	e._reactivity.batch(() => {
		if (r) for (let t in r) {
			let i = e.baseAtoms[t];
			if (!i) continue;
			let a = r[t], o = a === void 0 ? e.initialState[t] : a;
			n(e._reactivity.untrack(() => i.get()), o) || i.set(() => o);
		}
	});
}
function qn(e, t, n = (e, t) => e === t) {
	e._reactivity.batch(() => {
		Kn(e, t, n), e._reactivity.commit?.();
	});
}
function Jn(e) {
	let t = x(e.initialState);
	e._reactivity.batch(() => {
		let n = Object.keys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r];
			e.baseAtoms[i].set(t[i]);
		}
	});
	let n = Object.values(e._features);
	for (let t = 0; t < n.length; t++) n[t].resetTableInstanceData?.(e);
}
function Yn(e, t) {
	let { features: n, atoms: r, initialState: i } = e.options;
	if (!e.options.mergeOptions) return {
		...e.options,
		...t,
		features: n,
		atoms: r,
		initialState: i
	};
	let a = e.options.mergeOptions(e.options, t), o = { ...Object.getOwnPropertyDescriptors(a) };
	return Object.defineProperties(Object.create(Object.getPrototypeOf(a)), {
		...o,
		features: {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		},
		atoms: {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		},
		initialState: {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}
	});
}
function Xn(e, t, n) {
	let r = Yn(e, b(t, e.options));
	e.optionsStore ? e.optionsStore.set(() => r) : e.options = r, n?.syncExternalState !== !1 && qn(e, r.state ?? null);
}
// node_modules/@tanstack/table-core/dist/core/coreFeatures.js
var Zn = {
	coreCellsFeature: Ee,
	coreColumnsFeature: lt,
	coreHeadersFeature: _t,
	coreRowModelsFeature: kn,
	coreRowsFeature: Gn,
	coreTablesFeature: { constructTableAPIs: (e) => {
		E("coreTablesFeature", e, {
			table_reset: { fn: () => Jn(e) },
			table_setOptions: { fn: (t) => Xn(e, t) }
		});
	} }
};
// node_modules/@tanstack/table-core/dist/helpers/columnHelper.js
function Qn() {
	return {
		accessor: (e, t) => typeof e == "function" ? {
			...t,
			accessorFn: e
		} : {
			...t,
			accessorKey: e
		},
		columns: (e) => e,
		display: (e) => e,
		group: (e) => e
	};
}
// node_modules/@tanstack/table-core/dist/helpers/tableFeatures.js
function $n(e) {
	return e;
}
// node_modules/@tanstack/table-core/dist/core/table/constructTable.js
function er(e, t = {}) {
	return Object.values(e).forEach((e) => {
		t = e.getInitialState?.(t) ?? t;
	}), x(t);
}
function tr(e) {
	let t = e.features.coreReactivityFeature, { aggregationFns: n, columnMeta: r, coreRowModel: i, expandedRowModel: a, facetedMinMaxValues: o, facetedRowModel: s, facetedUniqueValues: c, filterFns: l, filterMeta: u, filteredRowModel: d, groupedRowModel: f, paginatedRowModel: p, sortFns: ee, sortedRowModel: te, tableMeta: ne, ...re } = e.features, m = {
		_cellInstanceInitFns: [],
		_columnInstanceInitFns: [],
		_features: {
			...Zn,
			...re
		},
		_headerGroupInstanceInitFns: [],
		_headerInstanceInitFns: [],
		_reactivity: t,
		_rowInstanceInitFns: [],
		_rowModelFns: {
			aggregationFns: n,
			filterFns: l,
			sortFns: ee
		},
		_rowModels: {},
		atoms: {},
		baseAtoms: {}
	}, h = Object.values(m._features), g = {
		...h.reduce((e, t) => Object.assign(e, t.getDefaultTableOptions?.(m)), {}),
		...e
	};
	if (t.wrapExternalAtoms && g.atoms) for (let [e, n] of Object.entries(g.atoms)) {
		let r = n, i = t.createWritableAtom(r.get(), { debugName: `externalAtom/${e}` });
		g.atoms[e] = i;
		let a = !1, o = r.subscribe((e) => {
			a || i.set(e);
		}), s = i.subscribe((e) => {
			a = !0, r.set(e), a = !1;
		});
		t.addSubscription(o), t.addSubscription(s);
	}
	t.createOptionsStore ? (m.optionsStore = t.createWritableAtom(g, { debugName: "table/optionsStore" }), Object.defineProperty(m, "options", {
		configurable: !0,
		enumerable: !0,
		get() {
			return m.optionsStore.get();
		},
		set(e) {
			m.optionsStore.set(() => e);
		}
	})) : m.options = g, m.initialState = er(m._features, m.options.initialState);
	let _ = Object.keys(m.initialState);
	for (let e = 0; e < _.length; e++) {
		let n = _[e];
		m.baseAtoms[n] = t.createWritableAtom(m.initialState[n], { debugName: `table/baseAtoms/${n}` }), m.atoms[n] = t.createReadonlyAtom(() => {
			let e = m.options, t = e.atoms?.[n], r = t ? t.get() : m.baseAtoms[n].get();
			if (t) return r;
			let i = e.state;
			if (i && C(i, n)) {
				let e = i[n];
				return e === void 0 ? m.initialState[n] : e;
			}
			return r;
		}, { debugName: `table/atoms/${n}` });
	}
	Kn(m), m.store = pe(t.createReadonlyAtom(() => {
		let e = {};
		for (let t = 0; t < _.length; t++) {
			let n = _[t];
			e[n] = m.atoms[n].get();
		}
		return e;
	}, {
		compare: y,
		debugName: "table/store"
	}));
	for (let e = 0; e < h.length; e++) {
		let t = h[e];
		t.initTableInstanceData?.(m), t.initCellInstanceData && m._cellInstanceInitFns.push(t.initCellInstanceData.bind(t)), t.initColumnInstanceData && m._columnInstanceInitFns.push(t.initColumnInstanceData.bind(t)), t.initHeaderGroupInstanceData && m._headerGroupInstanceInitFns.push(t.initHeaderGroupInstanceData.bind(t)), t.initHeaderInstanceData && m._headerInstanceInitFns.push(t.initHeaderInstanceData.bind(t)), t.initRowInstanceData && m._rowInstanceInitFns.push(t.initRowInstanceData.bind(t)), t.constructTableAPIs?.(m);
	}
	return m;
}
// node_modules/@tanstack/table-core/dist/features/column-filtering/columnFilteringFeature.utils.js
function nr() {
	return [];
}
function rr(e) {
	let t = e.table._rowModelFns.filterFns, n = e.table.getCoreRowModel().flatRows, r;
	for (let t = 0; t < n.length; t++) {
		let i = n[t].getValue(e.id);
		if (i != null) {
			r = i;
			break;
		}
	}
	let i;
	return i = typeof r == "string" ? "includesString" : typeof r == "number" ? "inNumberRange" : typeof r == "boolean" ? "equals" : Array.isArray(r) ? "arrIncludes" : Object.prototype.toString.call(r) === "[object Date]" ? "inDateRange" : typeof r == "object" && r ? "equals" : "weakEquals", t?.[i];
}
function W(e) {
	let t = null, n = e.table._rowModelFns.filterFns;
	return t = ve(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? rr(e) : n?.[e.columnDef.filterFn], t ?? void 0;
}
function ir(e) {
	return (e.columnDef.enableColumnFilter ?? !0) && (e.table.options.enableColumnFilters ?? !0) && (e.table.options.enableFilters ?? !0) && !!e.accessorFn;
}
function ar(e) {
	return sr(e) > -1;
}
function or(e) {
	return e.table.atoms.columnFilters?.get()?.find((t) => t.id === e.id)?.value;
}
function sr(e) {
	return e.table.atoms.columnFilters?.get()?.findIndex((t) => t.id === e.id) ?? -1;
}
function cr(e, t) {
	lr(e.table, (n) => {
		let r = W(e), i = n.find((t) => t.id === e.id), a = b(t, i ? i.value : void 0);
		if (dr(r, a, e)) return n.filter((t) => t.id !== e.id);
		let o = {
			id: e.id,
			value: a
		};
		return i ? n.map((t) => t.id === e.id ? o : t) : n.length ? [...n, o] : [o];
	});
}
function lr(e, t) {
	let n = e.getAllLeafColumnsById();
	e.options.onColumnFiltersChange?.((e) => b(t, e).filter((e) => {
		let t = n[e.id];
		return !(t && dr(W(t), e.value, t));
	}));
}
function ur(e, t) {
	lr(e, t ? [] : x(e.initialState.columnFilters ?? []));
}
function dr(e, t, n) {
	return t === void 0 ? !0 : e?.autoRemove ? !!e.autoRemove(t, n) : typeof t == "string" && !t;
}
// node_modules/@tanstack/table-core/dist/features/column-filtering/columnFilteringFeature.js
var fr = {
	getInitialState: (e) => ({
		columnFilters: nr(),
		...e
	}),
	getDefaultColumnDef: () => ({ filterFn: "auto" }),
	getDefaultTableOptions: (e) => ({
		onColumnFiltersChange: w("columnFilters", e),
		filterFromLeafRows: !1,
		maxLeafRowFilterDepth: 100
	}),
	assignColumnPrototype: (e, t) => {
		D("columnFilteringFeature", e, t, {
			column_getAutoFilterFn: { fn: (e) => rr(e) },
			column_getFilterFn: { fn: (e) => W(e) },
			column_getCanFilter: { fn: (e) => ir(e) },
			column_getIsFiltered: { fn: (e) => ar(e) },
			column_getFilterValue: { fn: (e) => or(e) },
			column_getFilterIndex: { fn: (e) => sr(e) },
			column_setFilterValue: { fn: (e, t) => cr(e, t) }
		});
	},
	initRowInstanceData: (e) => {
		e.columnFilters = S(), e.columnFiltersMeta = S();
	},
	constructTableAPIs: (e) => {
		E("columnFilteringFeature", e, {
			table_setColumnFilters: { fn: (t) => lr(e, t) },
			table_resetColumnFilters: { fn: (t) => ur(e, t) }
		});
	}
}, pr = {
	getInitialState: (e) => ({
		columnVisibility: Ae(),
		...e
	}),
	getDefaultTableOptions: (e) => ({ onColumnVisibilityChange: w("columnVisibility", e) }),
	assignColumnPrototype: (e, t) => {
		D("columnVisibilityFeature", e, t, {
			column_getIsVisible: {
				fn: (e) => k(e),
				memoDeps: (e) => [
					t.options.columns,
					t.atoms.columnVisibility?.get(),
					e.columns
				]
			},
			column_getCanHide: { fn: (e) => A(e) },
			column_getToggleVisibilityHandler: { fn: (e) => Me(e) },
			column_toggleVisibility: { fn: (e, t) => je(e, t) }
		});
	},
	assignRowPrototype: (e, t) => {
		D("columnVisibilityFeature", e, t, {
			row_getVisibleCells: {
				fn: (e) => Ne(e),
				memoDeps: (e) => [
					e.getAllCells(),
					t.atoms.columnPinning?.get(),
					t.atoms.columnVisibility?.get()
				]
			},
			row_getVisibleCellsByColumnId: {
				fn: (e) => Pe(e),
				memoDeps: (e) => [e.getAllCells(), t.atoms.columnVisibility?.get()]
			}
		});
	},
	constructTableAPIs: (e) => {
		E("columnVisibilityFeature", e, {
			table_getVisibleFlatColumns: {
				fn: () => Fe(e),
				memoDeps: () => [
					e.atoms.columnVisibility?.get(),
					e.atoms.columnOrder?.get(),
					e.atoms.grouping?.get(),
					e.options.columns,
					e.options.groupedColumnMode
				]
			},
			table_getVisibleLeafColumns: {
				fn: () => Ie(e),
				memoDeps: () => [
					e.atoms.columnVisibility?.get(),
					e.atoms.columnOrder?.get(),
					e.atoms.grouping?.get(),
					e.options.columns,
					e.options.groupedColumnMode
				]
			},
			table_setColumnVisibility: { fn: (t) => j(e, t) },
			table_resetColumnVisibility: { fn: (t) => Le(e, t) },
			table_toggleAllColumnsVisible: { fn: (t) => Re(e, t) },
			table_getIsAllColumnsVisible: { fn: () => ze(e) },
			table_getIsSomeColumnsVisible: { fn: () => Be(e) },
			table_getToggleAllColumnsVisibilityHandler: { fn: () => Ve(e) }
		});
	}
};
// node_modules/@tanstack/table-core/dist/features/column-filtering/filterFns.js
function G(e) {
	let t = Object.assign((e, n, r, i) => {
		let a = e.getValue(n), o = t.resolveDataValue ? t.resolveDataValue(a) : a;
		return t.filter(o, r, e, n, i);
	}, e);
	return t;
}
G({
	filter: (e, t) => e === t,
	autoRemove: (e) => K(e)
}), G({
	filter: (e, t) => e == t,
	autoRemove: (e) => K(e)
}), G({
	filter: (e, t) => !!e?.includes(t),
	autoRemove: (e) => K(e),
	resolveFilterValue: (e) => String(e),
	resolveDataValue: (e) => e == null ? void 0 : String(e)
});
var mr = G({
	filter: (e, t) => !!e?.includes(t),
	autoRemove: (e) => K(e),
	resolveFilterValue: (e) => String(e).toLowerCase(),
	resolveDataValue: (e) => e == null ? void 0 : String(e).toLowerCase()
});
G({
	filter: (e, t) => e === t,
	autoRemove: (e) => K(e),
	resolveFilterValue: (e) => String(e).toLowerCase(),
	resolveDataValue: (e) => e == null ? void 0 : String(e).toLowerCase()
}), G({
	filter: (e, t) => e === t,
	autoRemove: (e) => K(e),
	resolveFilterValue: (e) => String(e),
	resolveDataValue: (e) => e == null ? void 0 : String(e)
}), G({
	filter: (e, t) => !!e?.startsWith(t),
	autoRemove: (e) => K(e),
	resolveFilterValue: (e) => String(e).toLowerCase(),
	resolveDataValue: (e) => e == null ? void 0 : String(e).toLowerCase()
}), G({
	filter: (e, t) => !!e?.endsWith(t),
	autoRemove: (e) => K(e),
	resolveFilterValue: (e) => String(e).toLowerCase(),
	resolveDataValue: (e) => e == null ? void 0 : String(e).toLowerCase()
}), G({
	filter: (e) => hr(e),
	autoRemove: (e) => K(e) || e === !1
}), G({
	filter: (e) => !hr(e),
	autoRemove: (e) => K(e) || e === !1
}), G({
	filter: (e, t) => q(e, t),
	autoRemove: (e) => K(e)
}), G({
	filter: (e, t) => J(e, t),
	autoRemove: (e) => K(e)
}), G({
	filter: (e, t) => !J(e, t),
	autoRemove: (e) => K(e)
}), G({
	filter: (e, t) => !q(e, t),
	autoRemove: (e) => K(e)
}), G({
	filter: (e, t) => _r(e, t, !1),
	autoRemove: (e) => K(e) || Array.isArray(e) && K(e[0]) && K(e[1])
}), G({
	filter: (e, t) => _r(e, t, !0),
	autoRemove: (e) => K(e) || Array.isArray(e) && K(e[0]) && K(e[1])
}), G({
	filter: (e, t) => {
		if (typeof e != "number" || Number.isNaN(e)) return !1;
		let [n, r] = t;
		return e >= n && e <= r;
	},
	resolveFilterValue: (e) => {
		let [t, n] = e, r = typeof t == "number" ? t : parseFloat(t), i = typeof n == "number" ? n : parseFloat(n), a = t === null || Number.isNaN(r) ? -Infinity : r, o = n === null || Number.isNaN(i) ? Infinity : i;
		if (a > o) {
			let e = a;
			a = o, o = e;
		}
		return [a, o];
	},
	autoRemove: (e) => K(e) || Array.isArray(e) && K(e[0]) && K(e[1])
}), G({
	filter: (e, t) => {
		let [n, r] = t;
		return e >= n && e <= r;
	},
	resolveFilterValue: (e) => {
		let [t, n] = e, r = gr(t), i = gr(n), a = Number.isNaN(r) ? -Infinity : r, o = Number.isNaN(i) ? Infinity : i;
		if (a > o) {
			let e = a;
			a = o, o = e;
		}
		return [a, o];
	},
	resolveDataValue: (e) => gr(e),
	autoRemove: (e) => K(e) || Array.isArray(e) && K(e[0]) && K(e[1])
}), G({
	filter: (e, t) => {
		for (let n = 0; n < t.length; n++) if (e === t[n]) return !0;
		return !1;
	},
	autoRemove: (e) => K(e) || !e?.length
}), G({
	filter: (e, t) => {
		if (typeof e != "string" && !Array.isArray(e)) return !1;
		for (let n = 0; n < t.length; n++) if (e.includes(t[n])) return !0;
		return !1;
	},
	autoRemove: (e) => K(e) || !e?.length
}), G({
	filter: (e, t) => {
		if (!Array.isArray(e)) return !1;
		for (let n = 0; n < t.length; n++) if (!e.includes(t[n])) return !1;
		return !0;
	},
	autoRemove: (e) => K(e) || !e?.length
}), G({
	filter: (e, t) => {
		if (!Array.isArray(e)) return !1;
		for (let n = 0; n < t.length; n++) if (e.includes(t[n])) return !0;
		return !1;
	},
	autoRemove: (e) => K(e) || !e?.length
});
function K(e) {
	return e == null || e === "";
}
function hr(e) {
	return e == null || String(e).trim() === "";
}
function gr(e) {
	return e instanceof Date ? e.getTime() : typeof e == "number" ? e : e == null || e === "" ? NaN : new Date(e).getTime();
}
function q(e, t) {
	let n = e == null ? 0 : +e, r = Number(t);
	return !isNaN(r) && !isNaN(n) ? n > r : String(e ?? "").toLowerCase().trim() > String(t).toLowerCase().trim();
}
function J(e, t) {
	return e === t || q(e, t);
}
function _r(e, t, n) {
	let r = t[0], i = r !== "" && r !== void 0;
	if (i && !(n ? J(e, r) : q(e, r))) return !1;
	let a = t[1];
	if (a === "" || a === void 0) return !0;
	if (i) {
		let e = Number(r), t = Number(a);
		if (!isNaN(e) && !isNaN(t) && e > t) return !0;
	}
	return n ? !q(e, a) : !J(e, a);
}
// node_modules/@tanstack/table-core/dist/features/global-filtering/globalFilteringFeature.utils.js
function vr(e) {
	return (e.columnDef.enableGlobalFilter ?? !0) && (e.table.options.enableGlobalFilter ?? !0) && (e.table.options.enableFilters ?? !0) && (e.table.options.getColumnCanGlobalFilter?.(e) ?? !0) && !!e.accessorFn;
}
function yr() {
	return mr;
}
function br(e) {
	let { globalFilterFn: t } = e.options, n = e._rowModelFns.filterFns;
	return ve(t) ? t : t === "auto" ? yr() : n?.[t];
}
// node_modules/@tanstack/table-core/dist/features/row-pagination/rowPaginationFeature.js
var xr = {
	getInitialState: (e) => ({
		...e,
		pagination: {
			...L(),
			...e.pagination
		}
	}),
	getDefaultTableOptions: (e) => ({ onPaginationChange: w("pagination", e) }),
	constructTableAPIs: (e) => {
		E("rowPaginationFeature", e, {
			table_autoResetPageIndex: { fn: () => R(e) },
			table_setPagination: { fn: (t) => z(e, t) },
			table_resetPagination: { fn: (t) => Vt(e, t) },
			table_setPageIndex: { fn: (t) => B(e, t) },
			table_resetPageIndex: { fn: (t) => Ht(e, t) },
			table_setPageSize: { fn: (t) => Wt(e, t) },
			table_getPageCount: { fn: () => V(e) },
			table_resetPageSize: { fn: (t) => Ut(e, t) },
			table_getPageOptions: { fn: () => Gt(e) },
			table_getCanPreviousPage: { fn: () => Kt(e) },
			table_getCanNextPage: { fn: () => qt(e) },
			table_previousPage: { fn: () => Jt(e) },
			table_nextPage: { fn: () => Yt(e) },
			table_firstPage: { fn: () => Xt(e) },
			table_lastPage: { fn: () => Zt(e) },
			table_getRowCount: { fn: () => Qt(e) }
		});
	}
};
// node_modules/@tanstack/table-core/dist/features/row-selection/rowSelectionFeature.utils.js
function Sr() {
	return S();
}
function Y(e, t) {
	e.options.onRowSelectionChange?.(t);
}
function Cr(e, t) {
	e._lastSelectedRowId = null, Y(e, t ? S() : Object.assign(S(), x(e.initialState.rowSelection ?? {})));
}
function wr(e, t, n) {
	e._lastSelectedRowId = null, Y(e, (r) => {
		if (t = t === void 0 ? !O(e, "getIsAllRowsSelected", jr) : t, n?.deselectAll && !t) return S();
		let i = Object.assign(S(), r), a = e.getPreGroupedRowModel().flatRows;
		if (t) {
			let e = /* @__PURE__ */ new Map();
			a.forEach((t) => {
				Wr(t, e) && (i[t.id] = !0);
			});
		} else a.forEach((e) => {
			Z(e) && delete i[e.id];
		});
		return i;
	});
}
function Tr(e, t, n) {
	e._lastSelectedRowId = null, Y(e, (r) => {
		let i = t === void 0 ? !O(e, "getIsAllPageRowsSelected", Mr) : t;
		if (n?.deselectAll && !i) return S();
		let a = Object.assign(S(), r);
		return e.getRowModel().rows.forEach((t) => {
			Ur(a, t.id, i, !0, e, !0);
		}), a;
	});
}
function Er(e) {
	return e.getCoreRowModel();
}
function Dr(e) {
	let t = e.getCoreRowModel();
	return O(e, "getIsSomeRowsSelected", X) ? qr(t, e) : {
		rows: [],
		flatRows: [],
		rowsById: S()
	};
}
function Or(e) {
	let t = e.getFilteredRowModel();
	return O(e, "getIsSomeRowsSelected", X) ? qr(t, e) : {
		rows: [],
		flatRows: [],
		rowsById: S()
	};
}
function kr(e) {
	let t = e.getSortedRowModel();
	return O(e, "getIsSomeRowsSelected", X) ? qr(t, e) : {
		rows: [],
		flatRows: [],
		rowsById: S()
	};
}
function Ar(e) {
	return Object.keys(e.atoms.rowSelection?.get() ?? {});
}
function jr(e) {
	let t = e.getFilteredRowModel().flatRows, n = e.atoms.rowSelection?.get() ?? {}, r = !!(t.length && Object.keys(n).length);
	if (r) {
		let e = /* @__PURE__ */ new Map();
		t.some((t) => !$(t, n) && Wr(t, e)) && (r = !1);
	}
	return r;
}
function Mr(e) {
	let t = e.getPaginatedRowModel().flatRows, n = e.atoms.rowSelection?.get() ?? {}, r = /* @__PURE__ */ new Map(), i = !1;
	for (let e = 0; e < t.length; e++) {
		let a = t[e];
		if ($(a, n)) !i && Wr(a, r) && (i = !0);
		else if (Wr(a, r)) return !1;
	}
	return i;
}
function X(e) {
	return O(e, "getSelectedRowIds", Ar).length > 0;
}
function Nr(e) {
	return e.getPaginatedRowModel().flatRows.filter((e) => Z(e)).some((e) => Lr(e) || O(e, "getIsSomeSelected", Rr));
}
function Pr(e) {
	return (t) => {
		wr(e, t.target.checked);
	};
}
function Fr(e) {
	return (t) => {
		Tr(e, t.target.checked);
	};
}
function Ir(e, t, n) {
	let r = Lr(e);
	Y(e.table, (i) => {
		t = t === void 0 ? !r : t;
		let a = Object.assign(S(), i);
		return Ur(a, e.id, t, (n?.selectChildren ?? !0) && Q(e), e.table), !t && n?.deselectParents && Gr(a, e), a;
	});
}
function Lr(e) {
	return $(e, e.table.atoms.rowSelection?.get() ?? {});
}
function Rr(e) {
	return Jr(e) === "some";
}
function zr(e) {
	return Jr(e) === "all";
}
function Z(e) {
	let t = e.table.options;
	return typeof t.enableRowSelection == "function" ? t.enableRowSelection(e) : t.enableRowSelection ?? !0;
}
function Br(e) {
	let t = e.table.options;
	return typeof t.enableSubRowSelection == "function" ? t.enableSubRowSelection(e) : t.enableSubRowSelection ?? !0;
}
function Q(e) {
	let t = e.table.options;
	return typeof t.enableMultiRowSelection == "function" ? t.enableMultiRowSelection(e) : t.enableMultiRowSelection ?? !0;
}
function Vr(e, t) {
	let n = Z(e);
	return (r) => {
		if (!n) return;
		let i = r, a = e.table, o = i.target.checked, s = a._lastSelectedRowId;
		a.options.enableRowRangeSelection !== !1 && s !== null && Q(e) && (a.options.isRowRangeSelectionEvent?.(r) ?? !1) && Hr(e, s, o, t) || Ir(e, o, t), a._lastSelectedRowId = e.id;
	};
}
function Hr(e, t, n, r) {
	let i = r?.selectChildren ?? !0, a = e.table, o = a.getRowsInDisplayOrder(), s = a.getPrePaginatedRowModel().rowsById[t] ?? a.getCoreRowModel().rowsById[t];
	if (!s) return !1;
	let c = s.getDisplayIndex(), l = e.getDisplayIndex(), u = o[c], d = o[l];
	if (c < 0 || l < 0 || c >= o.length || l >= o.length || u?.id !== s.id || d?.id !== e.id || !Q(s) || !Q(e)) return !1;
	let f = Math.min(c, l), p = Math.max(c, l);
	return Y(a, (e) => {
		let t = Object.assign(S(), e);
		for (let e = f; e <= p; e++) {
			let s = o[e];
			Z(s) && Q(s) && (Ur(t, s.id, n, i, a), !n && r?.deselectParents && Gr(t, s));
		}
		return t;
	}), !0;
}
function Ur(e, t, n, r, i, a) {
	let o = i.getRow(t, !0);
	n ? (Q(o) || Object.keys(e).forEach((t) => delete e[t]), Z(o) && (e[t] = !0)) : (!a || Z(o)) && delete e[t], r && o.subRows.length && Br(o) && o.subRows.forEach((t) => Ur(e, t.id, n, r, i, a));
}
function Wr(e, t) {
	if (!Z(e)) return !1;
	let n = e.table;
	if (n.options.enableSubRowSelection === !0) return !0;
	let r = e.parentId;
	if (r === void 0) return !0;
	let i = t.get(r);
	if (i !== void 0) return i;
	let a = n.getCoreRowModel().rowsById, o = [], s = !0, c = r;
	for (; c !== void 0;) {
		let e = t.get(c);
		if (e !== void 0) {
			s = e;
			break;
		}
		o.push(c);
		let r = a[c] ?? n.getRow(c, !0);
		if (!Br(r)) {
			s = !1;
			break;
		}
		c = r.parentId;
	}
	return o.forEach((e) => t.set(e, s)), s;
}
function Gr(e, t) {
	let n = t.table.getCoreRowModel().rowsById, r = t.parentId;
	for (; r !== void 0;) delete e[r], r = (n[r] ?? t.table.getRow(r, !0)).parentId;
}
function Kr(e, t, n, r) {
	let i = [];
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = $(o, t);
		if (s && (n.push(o), r[o.id] = o), o.subRows.length) {
			let e = Kr(o.subRows, t, n, r);
			if (s) {
				let t = Object.create(Object.getPrototypeOf(o));
				_e(t, o), t.subRows = e, i.push(t);
			}
		} else s && i.push(o);
	}
	return i;
}
function qr(e, t) {
	let n = [], r = S(), i = t.atoms.rowSelection?.get() ?? {};
	return {
		rows: Kr(e.rows, i, n, r),
		flatRows: n,
		rowsById: r
	};
}
function $(e, t) {
	return !!(C(t, e.id) && t[e.id]);
}
function Jr(e) {
	if (!e.subRows.length) return !1;
	let t = e.table.atoms.rowSelection?.get() ?? {}, n = !1, r = !0, i = !1;
	for (let a = 0; a < e.subRows.length; a++) {
		let o = e.subRows[a];
		if (n && !r) break;
		if (Z(o) && (i = !0, $(o, t) ? n = !0 : r = !1), o.subRows.length) {
			let e = Jr(o);
			e === "all" ? (n = !0, i = !0) : e === "some" ? (n = !0, r = !1, i = !0) : r = !1;
		}
	}
	return i ? r ? "all" : n ? "some" : !1 : !1;
}
// node_modules/@tanstack/table-core/dist/features/row-selection/rowSelectionFeature.js
var Yr = {
	initTableInstanceData: (e) => {
		e._lastSelectedRowId = null;
	},
	resetTableInstanceData: (e) => {
		e._lastSelectedRowId = null;
	},
	getInitialState: (e) => ({
		rowSelection: Sr(),
		...e
	}),
	getDefaultTableOptions: (e) => ({
		onRowSelectionChange: w("rowSelection", e),
		enableRowSelection: !0,
		enableMultiRowSelection: !0,
		enableRowRangeSelection: !0,
		enableSubRowSelection: !0,
		isRowRangeSelectionEvent: (e) => {
			let t = e;
			return !!(t.shiftKey || t.nativeEvent?.shiftKey);
		}
	}),
	assignRowPrototype: (e, t) => {
		D("rowSelectionFeature", e, t, {
			row_toggleSelected: { fn: (e, t, n) => Ir(e, t, n) },
			row_getIsSelected: { fn: (e) => Lr(e) },
			row_getIsSomeSelected: {
				fn: (e) => Rr(e),
				memoDeps: (e) => [
					e.subRows,
					e.table.atoms.rowSelection?.get(),
					e.table.options.enableRowSelection
				]
			},
			row_getIsAllSubRowsSelected: {
				fn: (e) => zr(e),
				memoDeps: (e) => [
					e.subRows,
					e.table.atoms.rowSelection?.get(),
					e.table.options.enableRowSelection
				]
			},
			row_getCanSelect: { fn: (e) => Z(e) },
			row_getCanSelectSubRows: { fn: (e) => Br(e) },
			row_getCanMultiSelect: { fn: (e) => Q(e) },
			row_getToggleSelectedHandler: { fn: (e, t) => Vr(e, t) }
		});
	},
	constructTableAPIs: (e) => {
		E("rowSelectionFeature", e, {
			table_setRowSelection: { fn: (t) => Y(e, t) },
			table_resetRowSelection: { fn: (t) => Cr(e, t) },
			table_toggleAllRowsSelected: { fn: (t, n) => wr(e, t, n) },
			table_toggleAllPageRowsSelected: { fn: (t, n) => Tr(e, t, n) },
			table_getPreSelectedRowModel: { fn: () => Er(e) },
			table_getSelectedRowModel: {
				fn: () => Dr(e),
				memoDeps: () => [e.atoms.rowSelection?.get(), e.getCoreRowModel()]
			},
			table_getFilteredSelectedRowModel: {
				fn: () => Or(e),
				memoDeps: () => [e.atoms.rowSelection?.get(), e.getFilteredRowModel()]
			},
			table_getGroupedSelectedRowModel: {
				fn: () => kr(e),
				memoDeps: () => [e.atoms.rowSelection?.get(), e.getSortedRowModel()]
			},
			table_getSelectedRowIds: {
				fn: () => Ar(e),
				memoDeps: () => [e.atoms.rowSelection?.get()]
			},
			table_getIsAllRowsSelected: {
				fn: () => jr(e),
				memoDeps: () => [
					e.atoms.rowSelection?.get(),
					e.getFilteredRowModel(),
					e.options.enableRowSelection,
					e.options.enableSubRowSelection
				]
			},
			table_getIsAllPageRowsSelected: {
				fn: () => Mr(e),
				memoDeps: () => [
					e.atoms.rowSelection?.get(),
					e.getPaginatedRowModel(),
					e.options.enableRowSelection,
					e.options.enableSubRowSelection
				]
			},
			table_getIsSomeRowsSelected: {
				fn: () => X(e),
				memoDeps: () => [e.atoms.rowSelection?.get()]
			},
			table_getIsSomePageRowsSelected: {
				fn: () => Nr(e),
				memoDeps: () => [
					e.atoms.rowSelection?.get(),
					e.getPaginatedRowModel(),
					e.options.enableRowSelection
				]
			},
			table_getToggleAllRowsSelectedHandler: { fn: () => Pr(e) },
			table_getToggleAllPageRowsSelectedHandler: { fn: () => Fr(e) }
		});
	}
}, Xr = {
	getInitialState(e) {
		return {
			sorting: $t(),
			...e
		};
	},
	getDefaultColumnDef() {
		return {
			sortFn: "auto",
			sortUndefined: 1
		};
	},
	getDefaultTableOptions(e) {
		return {
			autoResetSorting: !1,
			onSortingChange: w("sorting", e),
			isMultiSortEvent: (e) => e.shiftKey
		};
	},
	assignColumnPrototype(e, t) {
		D("rowSortingFeature", e, t, {
			column_getAutoSortFn: { fn: (e) => nn(e) },
			column_getAutoSortDir: { fn: (e) => rn(e) },
			column_getSortFn: { fn: (e) => an(e) },
			column_toggleSorting: { fn: (e, t, n) => on(e, t, n) },
			column_getFirstSortDir: { fn: (e) => sn(e) },
			column_getNextSortingOrder: { fn: (e, t) => cn(e, t) },
			column_getCanSort: { fn: (e) => ln(e) },
			column_getCanMultiSort: { fn: (e) => U(e) },
			column_getIsSorted: { fn: (e) => un(e) },
			column_getSortIndex: { fn: (e) => dn(e) },
			column_clearSorting: { fn: (e) => fn(e) },
			column_getToggleSortingHandler: { fn: (e) => pn(e) }
		});
	},
	constructTableAPIs(e) {
		E("rowSortingFeature", e, {
			table_setSorting: { fn: (t) => H(e, t) },
			table_resetSorting: { fn: (t) => en(e, t) }
		});
	}
};
// node_modules/@tanstack/table-core/dist/features/column-filtering/filterRowsUtils.js
function Zr(e, t, n) {
	return n.options.filterFromLeafRows ? Qr(e, t, n) : $r(e, t, n);
}
function Qr(e, t, n) {
	let r = [], i = S(), a = n.options.maxLeafRowFilterDepth ?? 100, o = (e, s = 0) => {
		let c = [];
		for (let l of e) {
			let e = yt(n, l.id, l.original, l.index, l.depth, void 0, l.parentId);
			if (e.columnFilters = l.columnFilters, l.subRows.length && s < a) {
				if (e.subRows = o(l.subRows, s + 1), l = e, t(l) && !e.subRows.length || t(l) || e.subRows.length) {
					c.push(l), i[l.id] = l, r.push(l);
					continue;
				}
			} else l = e, t(l) && (c.push(l), i[l.id] = l, r.push(l));
		}
		return c;
	};
	return {
		rows: o(e),
		flatRows: r,
		rowsById: i
	};
}
function $r(e, t, n) {
	let r = [], i = S(), a = n.options.maxLeafRowFilterDepth ?? 100, o = (e, s = 0) => {
		let c = [];
		for (let l of e) if (t(l)) {
			if (l.subRows.length && s < a) {
				let e = yt(n, l.id, l.original, l.index, l.depth, void 0, l.parentId);
				e.subRows = o(l.subRows, s + 1), l = e;
			}
			c.push(l), r.push(l), i[l.id] = l, l.subRows.length && s >= a && ei(l.subRows, r, i);
		}
		return c;
	};
	return {
		rows: o(e),
		flatRows: r,
		rowsById: i
	};
}
function ei(e, t, n) {
	for (let r of e) t.push(r), n[r.id] = r, r.subRows.length && ei(r.subRows, t, n);
}
// node_modules/@tanstack/table-core/dist/features/column-filtering/createFilteredRowModel.js
function ti() {
	return (e) => {
		let t = e;
		return T({
			feature: "columnFilteringFeature",
			table: t,
			fnName: "table.getFilteredRowModel",
			memoDeps: () => [
				t.getPreFilteredRowModel(),
				t.atoms.columnFilters?.get(),
				t.atoms.globalFilter?.get()
			],
			fn: () => ni(t),
			onAfterUpdate: xe(() => R(t))
		});
	};
}
function ni(e) {
	let t = e.getPreFilteredRowModel(), n = e.atoms.columnFilters?.get(), r = e.atoms.globalFilter?.get(), i = r != null && r !== "";
	if (!t.rows.length || !n?.length && !i) {
		let e = t.flatRows;
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			n.columnFilters = S(), n.columnFiltersMeta = S();
		}
		return t;
	}
	let a = [], o = [];
	n?.forEach((t) => {
		let n = ct(e, t.id);
		if (!n) return;
		let r = W(n);
		r && a.push({
			id: t.id,
			filterFn: r,
			resolvedValue: r.resolveFilterValue?.(t.value) ?? t.value
		});
	});
	let s = n?.map((e) => e.id) ?? [], c = br(e), l = e.getAllLeafColumns().filter((e) => vr(e));
	i && c && l.length && (s.push("__global__"), l.forEach((e) => {
		o.push({
			id: e.id,
			filterFn: c,
			resolvedValue: c.resolveFilterValue?.(r) ?? r
		});
	}));
	let u = t.flatRows;
	for (let e = 0; e < u.length; e++) {
		let t = u[e];
		if (t.columnFilters = S(), t.columnFiltersMeta = S(), a.length) for (let e = 0; e < a.length; e++) {
			let n = a[e], r = n.id;
			t.columnFilters[r] = n.filterFn(t, r, n.resolvedValue, (e) => {
				t.columnFiltersMeta ||= S(), t.columnFiltersMeta[r] = e;
			});
		}
		if (o.length) {
			for (let e = 0; e < o.length; e++) {
				let n = o[e], r = n.id;
				if (n.filterFn(t, r, n.resolvedValue, (e) => {
					t.columnFiltersMeta ||= S(), t.columnFiltersMeta[r] = e;
				})) {
					t.columnFilters.__global__ = !0;
					break;
				}
			}
			t.columnFilters.__global__ !== !0 && (t.columnFilters.__global__ = !1);
		}
	}
	return Zr(t.rows, (e) => {
		for (let t = 0; t < s.length; t++) if (e.columnFilters[s[t]] === !1) return !1;
		return !0;
	}, e);
}
// node_modules/@tanstack/table-core/dist/features/row-expanding/createExpandedRowModel.js
function ri(e) {
	let t = [], n = (e) => {
		t.push(e), e.subRows.length && zt(e) && e.subRows.forEach(n);
	};
	return e.rows.forEach(n), {
		rows: t,
		flatRows: e.flatRows,
		rowsById: e.rowsById
	};
}
// node_modules/@tanstack/table-core/dist/features/row-pagination/createPaginatedRowModel.js
function ii() {
	return (e) => {
		let t = e;
		return T({
			feature: "rowPaginationFeature",
			table: t,
			fnName: "table.getPaginatedRowModel",
			memoDeps: () => [
				t.getPrePaginatedRowModel(),
				t.atoms.pagination?.get(),
				t.options.paginateExpandedRows ? void 0 : t.atoms.expanded?.get()
			],
			fn: () => ai(t)
		});
	};
}
function ai(e) {
	let t = e.getPrePaginatedRowModel(), n = e.atoms.pagination?.get();
	if (!t.rows.length) return t;
	let { pageSize: r, pageIndex: i } = n ?? L(), { rows: a, flatRows: o, rowsById: s } = t, c = r * i, l = c + r, u = a.slice(c, l), d;
	d = e.options.paginateExpandedRows ? {
		rows: u,
		flatRows: o,
		rowsById: s
	} : ri({
		rows: u,
		flatRows: o,
		rowsById: s
	}), d.flatRows = [];
	let f = /* @__PURE__ */ new Set(), p = (e) => {
		f.has(e.id) || (f.add(e.id), d.flatRows.push(e), e.subRows.length && e.subRows.forEach(p));
	};
	return d.rows.forEach(p), d;
}
// node_modules/@tanstack/table-core/dist/features/row-sorting/createSortedRowModel.js
function oi() {
	return (e) => {
		let t = e;
		return T({
			feature: "rowSortingFeature",
			table: t,
			fnName: "table.getSortedRowModel",
			memoDeps: () => [t.atoms.sorting?.get(), t.getPreSortedRowModel()],
			fn: () => si(t),
			onAfterUpdate: xe(() => R(t))
		});
	};
}
function si(e) {
	let t = e.getPreSortedRowModel(), n = e.atoms.sorting?.get();
	if (!t.rows.length || !n?.length) return t;
	let r = [], i = n.filter((t) => {
		let n = e.getColumn(t.id);
		return n ? ln(n) : !1;
	});
	if (!i.length) return t;
	let a = [];
	for (let t = 0; t < i.length; t++) {
		let n = i[t], r = e.getColumn(n.id);
		r && a.push({
			id: n.id,
			desc: n.desc,
			sortUndefined: r.columnDef.sortUndefined,
			invertSorting: r.columnDef.invertSorting,
			sortFn: an(r)
		});
	}
	let o = (e, t) => {
		for (let n = 0; n < a.length; n++) {
			let r = a[n], i = r.sortUndefined, o = r.desc, s = 0;
			if (i) {
				let n = e.getValue(r.id), a = t.getValue(r.id), o = n === void 0, c = a === void 0;
				if (o && c) continue;
				if (o || c) {
					if (i === "first") return o ? -1 : 1;
					if (i === "last") return o ? 1 : -1;
					s = o ? i : -i;
				}
			}
			if (s === 0 && (s = r.sortFn(e, t, r.id)), s !== 0) return o && (s *= -1), r.invertSorting && (s *= -1), s;
		}
		return e.index - t.index;
	}, s = (e) => {
		let t = e.slice();
		t.sort(o);
		let n = !1;
		for (let i = 0; i < t.length; i++) {
			let a = t[i];
			if (a !== e[i] && (n = !0), a.subRows.length) {
				let e = s(a.subRows);
				if (e.changed) {
					let o = Object.create(Object.getPrototypeOf(a));
					_e(o, a), o.subRows = e.rows, t[i] = o, r.push(o), n = !0;
				} else r.push(a);
			} else r.push(a);
		}
		return {
			rows: t,
			changed: n
		};
	};
	return {
		rows: s(t.rows).rows,
		flatRows: r,
		rowsById: t.rowsById
	};
}
// node_modules/@tanstack/react-table/dist/useTable.js
var ci = typeof window > "u" ? i.useEffect : i.useLayoutEffect;
function li(e, t) {
	let [{ table: n, rootSource: r }] = (0, i.useState)(() => {
		let t = tr({
			...e,
			features: {
				coreReactivityFeature: ge(),
				...e.features
			}
		});
		return t.Subscribe = ((e) => fe({
			...e,
			source: e.source ?? t.store
		})), t.FlexRender = l, {
			table: t,
			rootSource: he(t.store, y)
		};
	}), a = n;
	Xn(a, (t) => ({
		...t,
		...e
	}), { syncExternalState: !1 });
	let o = a.options.state, s = r.get(), c = de(r, t, { compare: y });
	return ci(() => {
		r.markCommitted(s), qn(a, o ?? null, y);
	}), (0, i.useMemo)(() => ({
		...n,
		options: e,
		state: c
	}), [
		n,
		e,
		c
	]);
}
export { Xr as a, mr as c, $n as d, Qn as f, l as h, ti as i, pr as l, St as m, oi as n, Yr as o, xt as p, ii as r, xr as s, li as t, fr as u };
