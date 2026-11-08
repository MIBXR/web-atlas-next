import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
import { n, s as r } from "./utils-UBVJ5JR_.js";
import { i, l as a } from "./useMultipleSelectionState-Bgjz_mf2.js";
import { t as o } from "./ListKeyboardDelegate-DtpiEoL1.js";
import { c as s, t as c } from "./CollectionBuilder-DSfSS-yC.js";
import { t as l } from "./useCollator-dflgnzgU.js";
// node_modules/react-aria-components/dist/private/Header.mjs
var u = /* @__PURE__ */ e(t(), 1), d = /*#__PURE__*/ (0, u.createContext)({}), f = /*#__PURE__*/ c(s, function(e, t) {
	return [e, t] = n(e, t, d), /*#__PURE__*/ u.createElement(r.header, {
		className: "react-aria-Header",
		...e,
		ref: t
	}, e.children);
});
// node_modules/react-aria/dist/private/selection/useSelectableList.mjs
function p(e) {
	let { selectionManager: t, collection: n, disabledKeys: r, ref: i, keyboardDelegate: s, layoutDelegate: c, orientation: d } = e, f = l({
		usage: "search",
		sensitivity: "base"
	}), p = t.disabledBehavior, m = (0, u.useMemo)(() => s || new o({
		collection: n,
		disabledKeys: r,
		disabledBehavior: p,
		ref: i,
		collator: f,
		layoutDelegate: c,
		orientation: d
	}), [
		s,
		c,
		n,
		r,
		i,
		f,
		p,
		d
	]), { collectionProps: h } = a({
		...e,
		ref: i,
		selectionManager: t,
		keyboardDelegate: m
	});
	return { listProps: h };
}
// node_modules/react-stately/dist/private/collections/getItemCount.mjs
var m = /* @__PURE__ */ new WeakMap();
function h(e) {
	let t = m.get(e);
	if (t != null) return t;
	let n = 0, r = (t) => {
		for (let a of t) a.type === "section" ? r(i(a, e)) : a.type === "item" && n++;
	};
	return r(e), m.set(e, n), n;
}
export { d as i, p as n, f as r, h as t };
