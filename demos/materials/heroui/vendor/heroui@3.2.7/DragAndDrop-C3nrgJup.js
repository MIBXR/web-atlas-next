import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria-components/dist/private/DragAndDrop.mjs
var n = /* @__PURE__ */ e(t(), 1), r = /*#__PURE__*/ (0, n.createContext)({}), i = /*#__PURE__*/ (0, n.createContext)(null), a = /*#__PURE__*/ (0, n.forwardRef)(function(e, t) {
	let { render: r } = (0, n.useContext)(i);
	return /*#__PURE__*/ n.createElement(n.Fragment, null, r(e, t));
});
function o(e, t) {
	let r = e?.renderDropIndicator, i = e?.isVirtualDragging?.(), o = (0, n.useCallback)((e) => {
		if (i || t?.isDropTarget(e)) return r ? r(e) : /*#__PURE__*/ n.createElement(a, { target: e });
	}, [
		t?.target,
		i,
		r
	]);
	return e?.useDropIndicator ? o : void 0;
}
function s(e, t, r) {
	let i = e.focusedKey, a = null;
	if (t?.isVirtualDragging?.() && r?.target?.type === "item" && (a = r.target.key, r.target.dropPosition === "after")) {
		let e = r.collection.getKeyAfter(a), t = null;
		if (e != null) {
			let n = r.collection.getItem(a)?.level ?? 0;
			for (; e != null;) {
				let i = r.collection.getItem(e);
				if (!i) break;
				if (i.type !== "item") e = r.collection.getKeyAfter(e);
				else {
					if ((i.level ?? 0) <= n) break;
					t = e, e = r.collection.getKeyAfter(e);
				}
			}
		}
		a = e ?? t ?? a;
	}
	return (0, n.useMemo)(() => new Set([i, a].filter((e) => e != null)), [i, a]);
}
export { i, r as n, s as r, o as t };
