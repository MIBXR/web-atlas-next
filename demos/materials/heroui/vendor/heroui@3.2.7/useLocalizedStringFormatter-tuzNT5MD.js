import { t as e } from "./I18nProvider-zGzu-4zN.js";
import { n as t, t as n } from "./LocalizedStringFormatter-BlBKDE8E.js";
import { i as r, n as i } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/i18n/useLocalizedStringFormatter.mjs
var a = /* @__PURE__ */ r(i(), 1), o = /* @__PURE__ */ new WeakMap();
function s(e) {
	let n = o.get(e);
	return n || (n = new t(e), o.set(e, n)), n;
}
function c(e, n) {
	return n && t.getGlobalDictionaryForPackage(n) || s(e);
}
function l(t, r) {
	let { locale: i } = e(), o = c(t, r);
	return (0, a.useMemo)(() => new n(i, o), [i, o]);
}
export { l as n, c as t };
