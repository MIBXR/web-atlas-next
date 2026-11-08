import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
import { a as n } from "./utils-UBVJ5JR_.js";
import { t as r } from "./dist-qnEEIXtT.js";
// node_modules/@heroui/react/dist/utils/compose.js
var i = /* @__PURE__ */ e(t(), 1);
function a(e, t) {
	return n(e, (e, n) => {
		let i = typeof t == "function" ? t(n) ?? "" : t ?? "";
		return r(i, e ?? "") ?? "";
	});
}
var o = (e, t, n) => typeof e == "function" ? e({
	...n ?? {},
	className: t
}) : t;
function s(e, t) {
	return (0, i.useMemo)(() => typeof e == "function" ? a(e, t) : t ? e ? r(t, e) ?? t : t : e ?? "", [e, t]);
}
export { a as n, s as r, o as t };
