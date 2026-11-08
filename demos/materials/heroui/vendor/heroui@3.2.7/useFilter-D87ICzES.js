import { t as e } from "./useCollator-dflgnzgU.js";
import { i as t, n } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/i18n/useFilter.mjs
var r = /* @__PURE__ */ t(n(), 1);
function i(t) {
	let n = e({
		usage: "search",
		...t
	}), i = (0, r.useCallback)((e, t) => t.length === 0 || (e = e.normalize("NFC"), t = t.normalize("NFC"), n.compare(e.slice(0, t.length), t) === 0), [n]), a = (0, r.useCallback)((e, t) => t.length === 0 || (e = e.normalize("NFC"), t = t.normalize("NFC"), n.compare(e.slice(-t.length), t) === 0), [n]), o = (0, r.useCallback)((e, t) => {
		if (t.length === 0) return !0;
		e = e.normalize("NFC"), t = t.normalize("NFC");
		let r = 0, i = t.length;
		for (; r + i <= e.length; r++) {
			let a = e.slice(r, r + i);
			if (n.compare(t, a) === 0) return !0;
		}
		return !1;
	}, [n]);
	return (0, r.useMemo)(() => ({
		startsWith: i,
		endsWith: a,
		contains: o
	}), [
		i,
		a,
		o
	]);
}
export { i as t };
