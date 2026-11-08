import { D as e, E as t } from "./useKeyboard-CqNSkGJ-.js";
// node_modules/react-aria/dist/private/utils/getMetaValue.mjs
function n(n, r) {
	let i = e(r), a = t(r);
	if (a == null || i == null) return;
	let o, s = `meta[name="${CSS.escape(n)}"], meta[property="${CSS.escape(n)}"]`, c = a.querySelector(s);
	return c && c instanceof i.HTMLMetaElement && (n === "csp-nonce" && c.nonce && (o ??= c.nonce || void 0), c.content && (o ??= c.content || void 0)), n === "csp-nonce" && (o ??= i.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0), o;
}
export { n as t };
