// node_modules/@internationalized/string/dist/private/LocalizedStringDictionary.mjs
var e = Symbol.for("react-aria.i18n.locale"), t = Symbol.for("react-aria.i18n.strings"), n = void 0, r = class r {
	constructor(e, t = "en-US") {
		this.strings = Object.fromEntries(Object.entries(e).filter(([, e]) => e)), this.defaultLocale = t;
	}
	getStringForLocale(e, t) {
		let n = this.getStringsForLocale(t)[e];
		if (!n) throw Error(`Could not find intl message ${e} in ${t} locale`);
		return n;
	}
	getStringsForLocale(e) {
		let t = this.strings[e];
		return t || (t = i(e, this.strings, this.defaultLocale), this.strings[e] = t), t;
	}
	static getGlobalDictionaryForPackage(i) {
		if (typeof window > "u") return null;
		let a = window[e];
		if (n === void 0) {
			let e = window[t];
			if (!e) return null;
			n = {};
			for (let t in e) n[t] = new r({ [a]: e[t] }, a);
		}
		let o = n?.[i];
		if (!o) throw Error(`Strings for package "${i}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
		return o;
	}
};
function i(e, t, n = "en-US") {
	if (t[e]) return t[e];
	let r = a(e), i = o(e);
	if (i && t[`${r}-${i}`]) return t[`${r}-${i}`];
	if (t[r]) return t[r];
	for (let e in t) if (e.startsWith(r + "-")) return t[e];
	return t[n];
}
function a(e) {
	return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
function o(e) {
	if (Intl.Locale) return new Intl.Locale(e).script;
}
// node_modules/@internationalized/string/dist/private/LocalizedStringFormatter.mjs
var s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = class {
	constructor(e, t) {
		this.locale = e, this.strings = t;
	}
	format(e, t) {
		let n = this.strings.getStringForLocale(e, this.locale);
		return typeof n == "function" ? n(t, this) : n;
	}
	plural(e, t, n = "cardinal") {
		let r = t["=" + e];
		if (r) return typeof r == "function" ? r() : r;
		let i = this.locale + ":" + n, a = s.get(i);
		return a || (a = new Intl.PluralRules(this.locale, { type: n }), s.set(i, a)), r = t[a.select(e)] || t.other, typeof r == "function" ? r() : r;
	}
	number(e) {
		let t = c.get(this.locale);
		return t || (t = new Intl.NumberFormat(this.locale), c.set(this.locale, t)), t.format(e);
	}
	select(e, t) {
		let n = e[t] || e.other;
		return typeof n == "function" ? n() : n;
	}
};
export { r as n, l as t };
