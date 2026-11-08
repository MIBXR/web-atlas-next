import { t as e } from "./I18nProvider-zGzu-4zN.js";
// node_modules/react-aria/dist/private/i18n/useCollator.mjs
var t = /* @__PURE__ */ new Map();
function n(n) {
	let { locale: r } = e(), i = r + (n ? Object.entries(n).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (t.has(i)) return t.get(i);
	let a = new Intl.Collator(r, n);
	return t.set(i, a), a;
}
export { n as t };
