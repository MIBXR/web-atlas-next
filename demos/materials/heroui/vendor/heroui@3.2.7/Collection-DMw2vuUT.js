import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
import { a as n } from "./CollectionBuilder-DSfSS-yC.js";
// node_modules/react-aria-components/dist/private/Collection.mjs
var r = /* @__PURE__ */ e(t(), 1), i = /*#__PURE__*/ (0, r.createContext)(null), a = {
	CollectionRoot({ collection: e, renderDropIndicator: t }) {
		return o(e, null, t);
	},
	CollectionBranch({ collection: e, parent: t, renderDropIndicator: n }) {
		return o(e, t, n);
	}
};
function o(e, t, i) {
	return n({
		items: t ? e.getChildren(t.key) : e,
		dependencies: [i],
		children(t) {
			if (t.type === "content") return /*#__PURE__*/ r.createElement(r.Fragment, null);
			let n = t.render(t);
			return !i || t.type !== "item" ? n : /*#__PURE__*/ r.createElement(r.Fragment, null, i({
				type: "item",
				key: t.key,
				dropPosition: "before"
			}), n, s(e, t, i));
		}
	});
}
function s(e, t, n) {
	let i = t.key, a = e.getKeyAfter(i), o = a == null ? null : e.getItem(a);
	for (; o != null && o.type !== "item";) a = e.getKeyAfter(o.key), o = a == null ? null : e.getItem(a);
	let s = t.nextKey == null ? null : e.getItem(t.nextKey);
	for (; s != null && s.type !== "item";) s = s.nextKey == null ? null : e.getItem(s.nextKey);
	let c = [];
	if (s == null) {
		let i = t;
		for (; i?.type === "item" && (!o || i.parentKey !== o.parentKey && o.level < i.level);) {
			let t = n({
				type: "item",
				key: i.key,
				dropPosition: "after"
			});
			/*#__PURE__*/ (0, r.isValidElement)(t) && c.push(/*#__PURE__*/ (0, r.cloneElement)(t, { key: `${i.key}-after` })), i = i.parentKey == null ? null : e.getItem(i.parentKey);
		}
	}
	return c;
}
var c = /*#__PURE__*/ (0, r.createContext)(a);
function l(e) {
	return (0, r.useMemo)(() => e == null ? null : /* @__PURE__ */ new Set([e]), [e]);
}
export { i, l as n, a as r, c as t };
