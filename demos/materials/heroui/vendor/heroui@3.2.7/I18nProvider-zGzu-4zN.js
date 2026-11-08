import { t as e } from "./SSRProvider-DmcnjAEC.js";
import { i as t, n } from "./jsx-runtime-C1t0izHF.js";
// node_modules/react-aria/dist/private/i18n/utils.mjs
var r = /* @__PURE__ */ new Set([
	"Arab",
	"Syrc",
	"Samr",
	"Mand",
	"Thaa",
	"Mend",
	"Nkoo",
	"Adlm",
	"Rohg",
	"Hebr"
]), i = /* @__PURE__ */ new Set([
	"ae",
	"ar",
	"arc",
	"bcc",
	"bqi",
	"ckb",
	"dv",
	"fa",
	"glk",
	"he",
	"ku",
	"mzn",
	"nqo",
	"pnb",
	"ps",
	"sd",
	"ug",
	"ur",
	"yi"
]);
function a(e) {
	if (Intl.Locale) {
		let t = new Intl.Locale(e).maximize(), n = typeof t.getTextInfo == "function" ? t.getTextInfo() : t.textInfo;
		if (n) return n.direction === "rtl";
		if (t.script) return r.has(t.script);
	}
	let t = e.split("-")[0];
	return i.has(t);
}
// node_modules/react-aria/dist/private/i18n/useDefaultLocale.mjs
var o = /* @__PURE__ */ t(n(), 1), s = Symbol.for("react-aria.i18n.locale");
function c() {
	let e = typeof window < "u" && window[s] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = "en-US";
	}
	return {
		locale: e,
		direction: a(e) ? "rtl" : "ltr"
	};
}
var l = c(), u = /* @__PURE__ */ new Set();
function d() {
	l = c();
	for (let e of u) e(l);
}
function f() {
	let t = e(), [n, r] = (0, o.useState)(l);
	return (0, o.useEffect)(() => (u.size === 0 && window.addEventListener("languagechange", d), u.add(r), () => {
		u.delete(r), u.size === 0 && window.removeEventListener("languagechange", d);
	}), []), t ? {
		locale: typeof window < "u" && window[s] || "en-US",
		direction: "ltr"
	} : n;
}
// node_modules/react-aria/dist/private/i18n/I18nProvider.mjs
var p = /*#__PURE__*/ o.createContext(null);
function m() {
	let e = f();
	return (0, o.useContext)(p) || e;
}
export { m as t };
