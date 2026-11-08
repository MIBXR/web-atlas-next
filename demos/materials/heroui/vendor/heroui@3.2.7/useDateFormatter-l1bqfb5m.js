import { i as e, n as t } from "./jsx-runtime-C1t0izHF.js";
import { t as n } from "./I18nProvider-zGzu-4zN.js";
// node_modules/react-aria/dist/private/utils/useDeepMemo.mjs
var r = /* @__PURE__ */ e(t(), 1);
function i(e, t) {
	let n = (0, r.useRef)(null);
	return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e;
}
// node_modules/@internationalized/date/dist/private/utils.mjs
function a(e, t) {
	return e - t * Math.floor(e / t);
}
// node_modules/@internationalized/date/dist/private/calendars/GregorianCalendar.mjs
var o = 1721426;
function s(e, t, n, r) {
	t = l(e, t);
	let i = t - 1, a = -2;
	return n <= 2 ? a = 0 : c(t) && (a = -1), 1721425 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function c(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function l(e, t) {
	return e === "BC" ? 1 - t : t;
}
function u(e) {
	let t = "AD";
	return e <= 0 && (t = "BC", e = 1 - e), [t, e];
}
var d = {
	standard: [
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	],
	leapyear: [
		31,
		29,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	]
}, f = class {
	fromJulianDay(e) {
		let t = e, n = t - o, r = Math.floor(n / 146097), i = a(n, 146097), l = Math.floor(i / 36524), d = a(i, 36524), f = Math.floor(d / 1461), ee = a(d, 1461), p = Math.floor(ee / 365), [m, h] = u(r * 400 + l * 100 + f * 4 + p + +(l !== 4 && p !== 4)), te = t - s(m, h, 1, 1), g = 2;
		t < s(m, h, 3, 1) ? g = 0 : c(h) && (g = 1);
		let _ = Math.floor(((te + g) * 12 + 373) / 367);
		return new R(m, h, _, t - s(m, h, _, 1) + 1);
	}
	toJulianDay(e) {
		return s(e.era, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		return d[c(e.year) ? "leapyear" : "standard"][e.month - 1];
	}
	getMonthsInYear(e) {
		return 12;
	}
	getDaysInYear(e) {
		return c(e.year) ? 366 : 365;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getYearsInEra(e) {
		return 9999;
	}
	getEras() {
		return ["BC", "AD"];
	}
	isInverseEra(e) {
		return e.era === "BC";
	}
	balanceDate(e) {
		e.year <= 0 && (e.era = e.era === "BC" ? "AD" : "BC", e.year = 1 - e.year);
	}
	constructor() {
		this.identifier = "gregory";
	}
}, ee = {
	"001": 1,
	AD: 1,
	AE: 6,
	AF: 6,
	AI: 1,
	AL: 1,
	AM: 1,
	AN: 1,
	AR: 1,
	AT: 1,
	AU: 1,
	AX: 1,
	AZ: 1,
	BA: 1,
	BE: 1,
	BG: 1,
	BH: 6,
	BM: 1,
	BN: 1,
	BY: 1,
	CH: 1,
	CL: 1,
	CM: 1,
	CN: 1,
	CR: 1,
	CY: 1,
	CZ: 1,
	DE: 1,
	DJ: 6,
	DK: 1,
	DZ: 6,
	EC: 1,
	EE: 1,
	EG: 6,
	ES: 1,
	FI: 1,
	FJ: 1,
	FO: 1,
	FR: 1,
	GB: 1,
	GE: 1,
	GF: 1,
	GP: 1,
	GR: 1,
	HR: 1,
	HU: 1,
	IE: 1,
	IQ: 6,
	IR: 6,
	IS: 1,
	IT: 1,
	JO: 6,
	KG: 1,
	KW: 6,
	KZ: 1,
	LB: 1,
	LI: 1,
	LK: 1,
	LT: 1,
	LU: 1,
	LV: 1,
	LY: 6,
	MC: 1,
	MD: 1,
	ME: 1,
	MK: 1,
	MN: 1,
	MQ: 1,
	MV: 5,
	MY: 1,
	NL: 1,
	NO: 1,
	NZ: 1,
	OM: 6,
	PL: 1,
	QA: 6,
	RE: 1,
	RO: 1,
	RS: 1,
	RU: 1,
	SD: 6,
	SE: 1,
	SI: 1,
	SK: 1,
	SM: 1,
	SY: 6,
	TJ: 1,
	TM: 1,
	TR: 1,
	UA: 1,
	UY: 1,
	UZ: 1,
	VA: 1,
	VN: 1,
	XK: 1
};
// node_modules/@internationalized/date/dist/private/queries.mjs
function p(e, t) {
	return t = D(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function m(e, t) {
	return t = D(t, e.calendar), e = b(e), t = b(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function h(e, t) {
	return t = D(t, e.calendar), e = x(e), t = x(t), e.era === t.era && e.year === t.year;
}
function te(e, t) {
	return g(e.calendar, t.calendar) && p(e, t);
}
function g(e, t) {
	return e.isEqual?.(t) ?? t.isEqual?.(e) ?? e.identifier === t.identifier;
}
function _(e, t) {
	return p(e, ie(t));
}
var ne = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6
};
function v(e, t, n) {
	let r = e.calendar.toJulianDay(e), i = n ? ne[n] : _e(t), a = Math.ceil(r + 1 - i) % 7;
	return a < 0 && (a += 7), a;
}
function re(e) {
	return T(Date.now(), e);
}
function ie(e) {
	return Oe(re(e));
}
function ae(e, t) {
	return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function oe(e, t) {
	return se(e) - se(t);
}
function se(e) {
	return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
var ce = null, le = !1;
function y() {
	return ce ??= new Intl.DateTimeFormat().resolvedOptions().timeZone, ce;
}
function ue() {
	return le;
}
function b(e) {
	return e.subtract({ days: e.day - 1 });
}
function de(e) {
	return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function x(e) {
	return b(e.subtract({ months: e.month - 1 }));
}
function fe(e, t, n) {
	let r = v(e, t, n);
	return e.subtract({ days: r });
}
function pe(e, t, n) {
	return fe(e, t, n).add({ days: 6 });
}
var me = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map();
function ge(e) {
	if (Intl.Locale) {
		let t = me.get(e);
		return t || (t = new Intl.Locale(e).maximize().region, t && me.set(e, t)), t;
	}
	let t = e.split("-")[1];
	return t === "u" ? void 0 : t;
}
function _e(e) {
	let t = he.get(e);
	if (!t) {
		if (Intl.Locale) {
			let n = new Intl.Locale(e);
			if ("getWeekInfo" in n && (t = n.getWeekInfo(), t)) return he.set(e, t), t.firstDay;
		}
		let n = ge(e);
		if (e.includes("-fw-")) {
			let n = e.split("-fw-")[1].split("-")[0];
			t = n === "mon" ? { firstDay: 1 } : n === "tue" ? { firstDay: 2 } : n === "wed" ? { firstDay: 3 } : n === "thu" ? { firstDay: 4 } : n === "fri" ? { firstDay: 5 } : n === "sat" ? { firstDay: 6 } : { firstDay: 0 };
		} else t = e.includes("-ca-iso8601") ? { firstDay: 1 } : { firstDay: n && ee[n] || 0 };
		he.set(e, t);
	}
	return t.firstDay;
}
function ve(e, t, n) {
	let r = e.calendar.getDaysInMonth(e);
	return Math.ceil((v(b(e), t, n) + r) / 7);
}
function ye(e, t) {
	return e && t ? e.compare(t) <= 0 ? e : t : e || t;
}
function be(e, t) {
	return e && t ? e.compare(t) >= 0 ? e : t : e || t;
}
// node_modules/@internationalized/date/dist/private/conversion.mjs
function S(e) {
	return e = D(e, new f()), xe(l(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function xe(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Date();
	return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime();
}
function C(e, t) {
	if (t === "UTC") return 0;
	if (e > 0 && t === y() && !ue()) return new Date(e).getTimezoneOffset() * -6e4;
	let { year: n, month: r, day: i, hour: a, minute: o, second: s } = Ce(e, t);
	return xe(n, r, i, a, o, s, 0) - Math.floor(e / 1e3) * 1e3;
}
var Se = /* @__PURE__ */ new Map();
function Ce(e, t) {
	let n = Se.get(t);
	n || (n = new Intl.DateTimeFormat("en-US", {
		timeZone: t,
		hour12: !1,
		era: "short",
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	}), Se.set(t, n));
	let r = n.formatToParts(new Date(e)), i = {};
	for (let e of r) e.type !== "literal" && (i[e.type] = e.value);
	return {
		year: i.era === "BC" || i.era === "B" ? -i.year + 1 : +i.year,
		month: +i.month,
		day: +i.day,
		hour: i.hour === "24" ? 0 : +i.hour,
		minute: +i.minute,
		second: +i.second
	};
}
var we = 864e5;
function Te(e, t, n, r) {
	return (n === r ? [n] : [n, r]).filter((n) => Ee(e, t, n));
}
function Ee(e, t, n) {
	let r = Ce(n, t);
	return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function w(e, t, n = "compatible") {
	let r = E(e);
	if (t === "UTC") return S(r);
	if (t === y() && n === "compatible" && !ue()) {
		r = D(r, new f());
		let e = /* @__PURE__ */ new Date(), t = l(r.era, r.year);
		return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
	}
	let i = S(r), a = C(i - we, t), o = C(i + we, t), s = Te(r, t, i - a, i - o);
	if (s.length === 1) return s[0];
	if (s.length > 1) switch (n) {
		case "compatible":
		case "earlier": return s[0];
		case "later": return s[s.length - 1];
		case "reject": throw RangeError("Multiple possible absolute times found");
	}
	switch (n) {
		case "earlier": return Math.min(i - a, i - o);
		case "compatible":
		case "later": return Math.max(i - a, i - o);
		case "reject": throw RangeError("No such absolute time found");
	}
}
function De(e, t, n = "compatible") {
	return new Date(w(e, t, n));
}
function T(e, t) {
	let n = C(e, t), r = new Date(e + n), i = r.getUTCFullYear(), a = r.getUTCMonth() + 1, o = r.getUTCDate(), s = r.getUTCHours(), c = r.getUTCMinutes(), l = r.getUTCSeconds(), u = r.getUTCMilliseconds();
	return new ct(i < 1 ? "BC" : "AD", i < 1 ? -i + 1 : i, a, o, t, n, s, c, l, u);
}
function Oe(e) {
	return new R(e.calendar, e.era, e.year, e.month, e.day);
}
function E(e, t) {
	let n = 0, r = 0, i = 0, a = 0;
	if ("timeZone" in e) ({hour: n, minute: r, second: i, millisecond: a} = e);
	else if ("hour" in e && !t) return e;
	return t && ({hour: n, minute: r, second: i, millisecond: a} = t), new st(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function ke(e) {
	return new ot(e.hour, e.minute, e.second, e.millisecond);
}
function D(e, t) {
	if (g(e.calendar, t)) return e;
	let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
	return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, A(r), r;
}
function Ae(e, t, n) {
	return e instanceof ct ? e.timeZone === t ? e : Me(e, t) : T(w(e, t, n), t);
}
function je(e) {
	let t = S(e) - e.offset;
	return new Date(t);
}
function Me(e, t) {
	return D(T(S(e) - e.offset, t), e.calendar);
}
function Ne(e) {
	return Me(e, y());
}
// node_modules/@internationalized/date/dist/private/manipulation.mjs
var O = 36e5;
function k(e, t) {
	let n = e.copy(), r = "hour" in n ? Ue(n, t) : 0;
	Pe(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, Fe(n), Le(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, Ie(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
	let i = n.calendar.getYearsInEra(n);
	if (n.year > i) {
		let e = n.calendar.isInverseEra?.(n);
		n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n);
	}
	n.month < 1 && (n.month = 1, n.day = 1);
	let a = n.calendar.getMonthsInYear(n);
	return n.month > a && (n.month = a, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function Pe(e, t) {
	e.calendar.isInverseEra?.(e) && (t = -t), e.year += t;
}
function Fe(e) {
	for (; e.month < 1;) Pe(e, -1), e.month += e.calendar.getMonthsInYear(e);
	let t = 0;
	for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, Pe(e, 1);
}
function Ie(e) {
	for (; e.day < 1;) e.month--, Fe(e), e.day += e.calendar.getDaysInMonth(e);
	for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, Fe(e);
}
function Le(e) {
	e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function A(e) {
	e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Le(e);
}
function Re(e) {
	let t = {};
	for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
	return t;
}
function ze(e, t) {
	return k(e, Re(t));
}
function Be(e, t) {
	let n = e.copy();
	return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), A(n), n;
}
function j(e, t) {
	let n = e.copy();
	return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), He(n), n;
}
function Ve(e) {
	e.second += Math.floor(e.millisecond / 1e3), e.millisecond = M(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = M(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = M(e.minute, 60);
	let t = Math.floor(e.hour / 24);
	return e.hour = M(e.hour, 24), t;
}
function He(e) {
	e.millisecond = Math.max(0, Math.min(e.millisecond, 999)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function M(e, t) {
	let n = e % t;
	return n < 0 && (n += t), n;
}
function Ue(e, t) {
	return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, Ve(e);
}
function We(e, t) {
	let n = e.copy();
	return Ue(n, t), n;
}
function Ge(e, t) {
	return We(e, Re(t));
}
function N(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "era": {
			let t = e.calendar.getEras(), a = t.indexOf(e.era);
			if (a < 0) throw Error("Invalid era: " + e.era);
			a = F(a, n, 0, t.length - 1, r?.round), i.era = t[a], A(i);
			break;
		}
		case "year":
			i.calendar.isInverseEra?.(i) && (n = -n), i.year = F(e.year, n, -Infinity, 9999, r?.round), i.year === -Infinity && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
			break;
		case "month":
			i.month = F(e.month, n, 1, e.calendar.getMonthsInYear(e), r?.round);
			break;
		case "day":
			i.day = F(e.day, n, 1, e.calendar.getDaysInMonth(e), r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return e.calendar.balanceDate && e.calendar.balanceDate(i), A(i), i;
}
function P(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "hour": {
			let t = e.hour, a = 0, o = 23;
			if (r?.hourCycle === 12) {
				let e = t >= 12;
				a = e ? 12 : 0, o = e ? 23 : 11;
			}
			i.hour = F(t, n, a, o, r?.round);
			break;
		}
		case "minute":
			i.minute = F(e.minute, n, 0, 59, r?.round);
			break;
		case "second":
			i.second = F(e.second, n, 0, 59, r?.round);
			break;
		case "millisecond":
			i.millisecond = F(e.millisecond, n, 0, 999, r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return i;
}
function F(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function Ke(e, t) {
	let n;
	return n = t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0 ? w(k(E(e), {
		years: t.years,
		months: t.months,
		weeks: t.weeks,
		days: t.days
	}), e.timeZone) : S(e) - e.offset, n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5, D(T(n, e.timeZone), e.calendar);
}
function qe(e, t) {
	return Ke(e, Re(t));
}
function Je(e, t, n, r) {
	switch (t) {
		case "hour": {
			let t = 0, i = 23;
			if (r?.hourCycle === 12) {
				let n = e.hour >= 12;
				t = n ? 12 : 0, i = n ? 23 : 11;
			}
			let a = E(e), o = D(j(a, { hour: t }), new f()), s = [w(o, e.timeZone, "earlier"), w(o, e.timeZone, "later")].filter((t) => T(t, e.timeZone).day === o.day)[0], c = D(j(a, { hour: i }), new f()), l = [w(c, e.timeZone, "earlier"), w(c, e.timeZone, "later")].filter((t) => T(t, e.timeZone).day === c.day).pop(), u = S(e) - e.offset, d = Math.floor(u / O), ee = u % O;
			return u = F(d, n, Math.floor(s / O), Math.floor(l / O), r?.round) * O + ee, D(T(u, e.timeZone), e.calendar);
		}
		case "minute":
		case "second":
		case "millisecond": return P(e, t, n, r);
		case "era":
		case "year":
		case "month":
		case "day": return D(T(w(N(E(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
		default: throw Error("Unsupported field " + t);
	}
}
function Ye(e, t, n) {
	let r = E(e), i = j(Be(r, t), t);
	return i.compare(r) === 0 ? e : D(T(w(i, e.timeZone, n), e.timeZone), e.calendar);
}
// node_modules/@internationalized/date/dist/private/string.mjs
var Xe = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/, Ze = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/, Qe = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;
function $e(e) {
	let t = e.match(Xe);
	if (!t) throw Qe.test(e) ? Error(`Invalid ISO 8601 date string: ${e}. Use parseAbsolute() instead.`) : Error("Invalid ISO 8601 date string: " + e);
	let n = new R(I(t[1], 0, 9999), I(t[2], 1, 12), 1);
	return n.day = I(t[3], 1, n.calendar.getDaysInMonth(n)), n;
}
function et(e) {
	let t = e.match(Ze);
	if (!t) throw Qe.test(e) ? Error(`Invalid ISO 8601 date time string: ${e}. Use parseAbsolute() instead.`) : Error("Invalid ISO 8601 date time string: " + e);
	let n = I(t[1], -9999, 9999), r = new st(n < 1 ? "BC" : "AD", n < 1 ? -n + 1 : n, I(t[2], 1, 12), 1, t[4] ? I(t[4], 0, 23) : 0, t[5] ? I(t[5], 0, 59) : 0, t[6] ? I(t[6], 0, 59) : 0, t[7] ? I(t[7], 0, Infinity) * 1e3 : 0);
	return r.day = I(t[3], 0, r.calendar.getDaysInMonth(r)), r;
}
function I(e, t, n) {
	let r = Number(e);
	if (r < t || r > n) throw RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);
	return r;
}
function tt(e) {
	return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function nt(e) {
	let t = D(e, new f()), n;
	return n = t.era === "BC" ? t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : String(t.year).padStart(4, "0"), `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function rt(e) {
	return `${nt(e)}T${tt(e)}`;
}
function it(e) {
	let t = Math.sign(e) < 0 ? "-" : "+";
	e = Math.abs(e);
	let n = Math.floor(e / 36e5), r = Math.floor(e % 36e5 / 6e4), i = Math.floor(e % 36e5 % 6e4 / 1e3), a = `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
	return i !== 0 && (a += `:${String(i).padStart(2, "0")}`), a;
}
function at(e) {
	return `${rt(e)}${it(e.offset)}[${e.timeZone}]`;
}
// node_modules/@internationalized/date/dist/private/CalendarDate.mjs
function L(e) {
	let t = typeof e[0] == "object" ? e.shift() : new f(), n;
	if (typeof e[0] == "string") n = e.shift();
	else {
		let e = t.getEras();
		n = e[e.length - 1];
	}
	let r = e.shift(), i = e.shift(), a = e.shift();
	return [
		t,
		n,
		r,
		i,
		a
	];
}
var R = class e {
	constructor(...e) {
		let [t, n, r, i, a] = L(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, A(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day) : new e(this.calendar, this.year, this.month, this.day);
	}
	add(e) {
		return k(this, e);
	}
	subtract(e) {
		return ze(this, e);
	}
	set(e) {
		return Be(this, e);
	}
	cycle(e, t, n) {
		return N(this, e, t, n);
	}
	toDate(e) {
		return De(this, e);
	}
	toString() {
		return nt(this);
	}
	compare(e) {
		return ae(this, e);
	}
}, ot = class e {
	constructor(e = 0, t = 0, n = 0, r = 0) {
		this.hour = e, this.minute = t, this.second = n, this.millisecond = r, He(this);
	}
	copy() {
		return new e(this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return We(this, e);
	}
	subtract(e) {
		return Ge(this, e);
	}
	set(e) {
		return j(this, e);
	}
	cycle(e, t, n) {
		return P(this, e, t, n);
	}
	toString() {
		return tt(this);
	}
	compare(e) {
		return oe(this, e);
	}
}, st = class e {
	constructor(...e) {
		let [t, n, r, i, a] = L(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, A(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return k(this, e);
	}
	subtract(e) {
		return ze(this, e);
	}
	set(e) {
		return Be(j(this, e), e);
	}
	cycle(e, t, n) {
		switch (e) {
			case "era":
			case "year":
			case "month":
			case "day": return N(this, e, t, n);
			default: return P(this, e, t, n);
		}
	}
	toDate(e, t) {
		return De(this, e, t);
	}
	toString() {
		return rt(this);
	}
	compare(e) {
		let t = ae(this, e);
		return t === 0 ? oe(this, E(e)) : t;
	}
}, ct = class e {
	constructor(...e) {
		let [t, n, r, i, a] = L(e), o = e.shift(), s = e.shift();
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.timeZone = o, this.offset = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, A(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return Ke(this, e);
	}
	subtract(e) {
		return qe(this, e);
	}
	set(e, t) {
		return Ye(this, e, t);
	}
	cycle(e, t, n) {
		return Je(this, e, t, n);
	}
	toDate() {
		return je(this);
	}
	toString() {
		return at(this);
	}
	toAbsoluteString() {
		return this.toDate().toISOString();
	}
	compare(e) {
		return this.toDate().getTime() - Ae(e, this.timeZone).toDate().getTime();
	}
}, z = [
	[
		1868,
		9,
		8
	],
	[
		1912,
		7,
		30
	],
	[
		1926,
		12,
		25
	],
	[
		1989,
		1,
		8
	],
	[
		2019,
		5,
		1
	]
], lt = [
	[
		1912,
		7,
		29
	],
	[
		1926,
		12,
		24
	],
	[
		1989,
		1,
		7
	],
	[
		2019,
		4,
		30
	]
], B = [
	1867,
	1911,
	1925,
	1988,
	2018
], V = [
	"meiji",
	"taisho",
	"showa",
	"heisei",
	"reiwa"
];
function ut(e) {
	let t = z.findIndex(([t, n, r]) => e.year < t || e.year === t && e.month < n || e.year === t && e.month === n && e.day < r);
	return t === -1 ? z.length - 1 : t === 0 ? 0 : t - 1;
}
function dt(e) {
	let t = B[V.indexOf(e.era)];
	if (!t) throw Error("Unknown era: " + e.era);
	return new R(e.year + t, e.month, e.day);
}
var ft = class extends f {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = ut(t);
		return new R(this, V[n], t.year - B[n], t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(dt(e));
	}
	balanceDate(e) {
		let t = dt(e), n = ut(t);
		V[n] !== e.era && (e.era = V[n], e.year = t.year - B[n]), this.constrainDate(e);
	}
	constrainDate(e) {
		let t = V.indexOf(e.era), n = lt[t];
		if (n != null) {
			let [r, i, a] = n, o = r - B[t];
			e.year = Math.max(1, Math.min(o, e.year)), e.year === o && (e.month = Math.min(i, e.month), e.month === i && (e.day = Math.min(a, e.day)));
		}
		if (e.year === 1 && t >= 0) {
			let [, n, r] = z[t];
			e.month = Math.max(n, e.month), e.month === n && (e.day = Math.max(r, e.day));
		}
	}
	getEras() {
		return V;
	}
	getYearsInEra(e) {
		let t = V.indexOf(e.era), n = z[t], r = z[t + 1];
		if (r == null) return 9999 - n[0] + 1;
		let i = r[0] - n[0];
		return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && i++, i;
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(dt(e));
	}
	getMinimumMonthInYear(e) {
		let t = pt(e);
		return t ? t[1] : 1;
	}
	getMinimumDayInMonth(e) {
		let t = pt(e);
		return t && e.month === t[1] ? t[2] : 1;
	}
	constructor(...e) {
		super(...e), this.identifier = "japanese";
	}
};
function pt(e) {
	if (e.year === 1) return z[V.indexOf(e.era)];
}
// node_modules/@internationalized/date/dist/private/calendars/BuddhistCalendar.mjs
var mt = -543, ht = class extends f {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = l(t.era, t.year);
		return new R(this, n - mt, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(gt(e));
	}
	getEras() {
		return ["BE"];
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(gt(e));
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = "buddhist";
	}
};
function gt(e) {
	let [t, n] = u(e.year + mt);
	return new R(t, n, e.month, e.day);
}
// node_modules/@internationalized/date/dist/private/calendars/TaiwanCalendar.mjs
var _t = 1911;
function vt(e) {
	return e.era === "minguo" ? e.year + _t : 1 - e.year + _t;
}
function yt(e) {
	let t = e - _t;
	return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t];
}
var bt = class extends f {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), [n, r] = yt(l(t.era, t.year));
		return new R(this, n, r, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(xt(e));
	}
	getEras() {
		return ["before_minguo", "minguo"];
	}
	balanceDate(e) {
		let [t, n] = yt(vt(e));
		e.era = t, e.year = n;
	}
	isInverseEra(e) {
		return e.era === "before_minguo";
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(xt(e));
	}
	getYearsInEra(e) {
		return e.era === "before_minguo" ? 9999 : 8088;
	}
	constructor(...e) {
		super(...e), this.identifier = "roc";
	}
};
function xt(e) {
	let [t, n] = u(vt(e));
	return new R(t, n, e.month, e.day);
}
// node_modules/@internationalized/date/dist/private/calendars/PersianCalendar.mjs
var St = 1948320, Ct = [
	0,
	31,
	62,
	93,
	124,
	155,
	186,
	216,
	246,
	276,
	306,
	336
], wt = class {
	fromJulianDay(e) {
		let t = e - St, n = 1 + Math.floor((33 * t + 3) / 12053), r = t - (365 * (n - 1) + Math.floor((8 * n + 21) / 33)), i = Math.floor(r < 216 ? r / 31 : (r - 6) / 30), a = r - Ct[i] + 1;
		return new R(this, n, i + 1, a);
	}
	toJulianDay(e) {
		let t = 1948319 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
		return t += Ct[e.month - 1], t += e.day, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInMonth(e) {
		return e.month <= 6 ? 31 : e.month <= 11 || a(25 * e.year + 11, 33) < 8 ? 30 : 29;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 31;
	}
	getEras() {
		return ["AP"];
	}
	getYearsInEra() {
		return 9377;
	}
	constructor() {
		this.identifier = "persian";
	}
}, Tt = 78, Et = 80, Dt = class extends f {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = t.year - Tt, r = e - s(t.era, t.year, 1, 1), i;
		r < Et ? (n--, i = c(t.year - 1) ? 31 : 30, r += i + 155 + 90 + 10) : (i = c(t.year) ? 31 : 30, r -= Et);
		let a, o;
		if (r < i) a = 1, o = r + 1;
		else {
			let e = r - i;
			e < 155 ? (a = Math.floor(e / 31) + 2, o = e % 31 + 1) : (e -= 155, a = Math.floor(e / 30) + 7, o = e % 30 + 1);
		}
		return new R(this, n, a, o);
	}
	toJulianDay(e) {
		let [t, n] = u(e.year + Tt), r, i;
		return c(n) ? (r = 31, i = s(t, n, 3, 21)) : (r = 30, i = s(t, n, 3, 22)), e.month === 1 ? i + e.day - 1 : (i += r + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (i += (e.month - 7) * 30), i += e.day - 1, i);
	}
	getDaysInMonth(e) {
		return e.month === 1 && c(e.year + Tt) || e.month >= 2 && e.month <= 6 ? 31 : 30;
	}
	getYearsInEra() {
		return 9919;
	}
	getEras() {
		return ["saka"];
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = "indian";
	}
}, H = 1948440, Ot = 1948439, U = 1300, W = 1600, kt = 460322;
function G(e, t, n, r) {
	return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function At(e, t, n) {
	let r = Math.floor((30 * (n - t) + 10646) / 10631), i = Math.min(12, Math.ceil((n - (29 + G(t, r, 1, 1))) / 29.5) + 1);
	return new R(e, r, i, n - G(t, r, i, 1) + 1);
}
function jt(e) {
	return (14 + 11 * e) % 30 < 11;
}
var Mt = class {
	fromJulianDay(e) {
		return At(this, H, e);
	}
	toJulianDay(e) {
		return G(H, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = 29 + e.month % 2;
		return e.month === 12 && jt(e.year) && t++, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInYear(e) {
		return jt(e.year) ? 355 : 354;
	}
	getMaximumMonthsInYear() {
		return 12;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9665;
	}
	getEras() {
		return ["AH"];
	}
	constructor() {
		this.identifier = "islamic-civil";
	}
}, Nt = class extends Mt {
	fromJulianDay(e) {
		return At(this, Ot, e);
	}
	toJulianDay(e) {
		return G(Ot, e.year, e.month, e.day);
	}
	constructor(...e) {
		super(...e), this.identifier = "islamic-tbla";
	}
}, Pt = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=", Ft, K;
function q(e) {
	return kt + K[e - U];
}
function J(e, t) {
	let n = e - U, r = 1 << 11 - (t - 1);
	return (Ft[n] & r) === 0 ? 29 : 30;
}
function It(e, t) {
	let n = q(e);
	for (let r = 1; r < t; r++) n += J(e, r);
	return n;
}
function Lt(e) {
	return K[e + 1 - U] - K[e - U];
}
var Rt = class extends Mt {
	constructor() {
		if (super(), this.identifier = "islamic-umalqura", Ft ||= new Uint16Array(Uint8Array.from(atob(Pt), (e) => e.charCodeAt(0)).buffer), !K) {
			K = /* @__PURE__ */ new Uint32Array(301);
			let e = 0;
			for (let t = U; t <= W; t++) {
				K[t - U] = e;
				for (let n = 1; n <= 12; n++) e += J(t, n);
			}
		}
	}
	fromJulianDay(e) {
		let t = e - H, n = q(U), r = q(W);
		if (t < n || t > r) return super.fromJulianDay(e);
		{
			let e = 1299, n = 1, r = 1;
			for (; r > 0;) {
				e++, r = t - q(e) + 1;
				let i = Lt(e);
				if (r === i) {
					n = 12;
					break;
				}
				if (r < i) {
					let t = J(e, n);
					for (n = 1; r > t;) r -= t, n++, t = J(e, n);
					break;
				}
			}
			return new R(this, e, n, t - It(e, n) + 1);
		}
	}
	toJulianDay(e) {
		return e.year < U || e.year > W ? super.toJulianDay(e) : H + It(e.year, e.month) + (e.day - 1);
	}
	getDaysInMonth(e) {
		return e.year < U || e.year > W ? super.getDaysInMonth(e) : J(e.year, e.month);
	}
	getDaysInYear(e) {
		return e.year < U || e.year > W ? super.getDaysInYear(e) : Lt(e.year);
	}
}, zt = 347997, Bt = 25920, Vt = 765433;
function Y(e) {
	return a(e * 7 + 1, 19) < 7;
}
function X(e) {
	let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, r = t * 29 + Math.floor(n / 25920);
	return a(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function Ht(e) {
	let t = X(e - 1), n = X(e);
	return X(e + 1) - n === 356 ? 2 : +(n - t === 382);
}
function Z(e) {
	return X(e) + Ht(e);
}
function Ut(e) {
	return Z(e + 1) - Z(e);
}
function Wt(e) {
	let t = Ut(e);
	switch (t > 380 && (t -= 30), t) {
		case 353: return 0;
		case 354: return 1;
		case 355: return 2;
	}
}
function Q(e, t) {
	if (t >= 6 && !Y(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
	let n = Wt(e);
	return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? Y(e) ? 30 : 0 : 30;
}
var Gt = class {
	fromJulianDay(e) {
		let t = e - zt, n = t * Bt / Vt, r = Math.floor((19 * n + 234) / 235) + 1, i = Z(r), a = Math.floor(t - i);
		for (; a < 1;) r--, i = Z(r), a = Math.floor(t - i);
		let o = 1, s = 0;
		for (; s < a;) s += Q(r, o), o++;
		o--, s -= Q(r, o);
		let c = a - s;
		return new R(this, r, o, c);
	}
	toJulianDay(e) {
		let t = Z(e.year);
		for (let n = 1; n < e.month; n++) t += Q(e.year, n);
		return t + e.day + zt;
	}
	getDaysInMonth(e) {
		return Q(e.year, e.month);
	}
	getMonthsInYear(e) {
		return Y(e.year) ? 13 : 12;
	}
	getDaysInYear(e) {
		return Ut(e.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra() {
		return 9999;
	}
	getEras() {
		return ["AM"];
	}
	balanceYearMonth(e, t) {
		t.year !== e.year && (Y(t.year) && !Y(e.year) && t.month > 6 ? e.month-- : !Y(t.year) && Y(e.year) && t.month > 6 && e.month++);
	}
	constructor() {
		this.identifier = "hebrew";
	}
}, Kt = 1723856, qt = 1824665, Jt = 5500;
function $(e, t, n, r) {
	return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function Yt(e, t) {
	let n = Math.floor(4 * (t - e) / 1461);
	t >= $(e, n + 1, 1, 1) && n++;
	let r = 1 + Math.floor((t - $(e, n, 1, 1)) / 30), i = t + 1 - $(e, n, r, 1);
	return [
		n,
		r,
		i
	];
}
function Xt(e) {
	return Math.floor(e % 4 / 3);
}
function Zt(e, t) {
	return t % 13 == 0 ? Xt(e) + 5 : 30;
}
var Qt = class {
	fromJulianDay(e) {
		let [t, n, r] = Yt(Kt, e), i = "AM";
		return t <= 0 && (i = "AA", t += Jt), new R(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "AA" && (t -= Jt), $(Kt, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		return Zt(e.year, e.month);
	}
	getMonthsInYear() {
		return 13;
	}
	getDaysInYear(e) {
		return 365 + Xt(e.year);
	}
	getMaximumMonthsInYear() {
		return 13;
	}
	getMaximumDaysInMonth() {
		return 30;
	}
	getYearsInEra(e) {
		return e.era === "AA" ? 9999 : 9991;
	}
	getEras() {
		return ["AA", "AM"];
	}
	constructor() {
		this.identifier = "ethiopic";
	}
}, $t = class extends Qt {
	fromJulianDay(e) {
		let [t, n, r] = Yt(Kt, e);
		return t += Jt, new R(this, "AA", t, n, r);
	}
	getEras() {
		return ["AA"];
	}
	getYearsInEra() {
		return 9999;
	}
	constructor(...e) {
		super(...e), this.identifier = "ethioaa";
	}
}, en = class extends Qt {
	fromJulianDay(e) {
		let [t, n, r] = Yt(qt, e), i = "CE";
		return t <= 0 && (i = "BCE", t = 1 - t), new R(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), $(qt, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), Zt(t, e.month);
	}
	isInverseEra(e) {
		return e.era === "BCE";
	}
	balanceDate(e) {
		e.year <= 0 && (e.era = e.era === "BCE" ? "CE" : "BCE", e.year = 1 - e.year);
	}
	getEras() {
		return ["BCE", "CE"];
	}
	getYearsInEra(e) {
		return e.era === "BCE" ? 9999 : 9715;
	}
	constructor(...e) {
		super(...e), this.identifier = "coptic";
	}
};
// node_modules/@internationalized/date/dist/private/createCalendar.mjs
function tn(e) {
	switch (e) {
		case "buddhist": return new ht();
		case "ethiopic": return new Qt();
		case "ethioaa": return new $t();
		case "coptic": return new en();
		case "hebrew": return new Gt();
		case "indian": return new Dt();
		case "islamic-civil": return new Mt();
		case "islamic-tbla": return new Nt();
		case "islamic-umalqura": return new Rt();
		case "japanese": return new ft();
		case "persian": return new wt();
		case "roc": return new bt();
		default: return new f();
	}
}
// node_modules/@internationalized/date/dist/private/DateFormatter.mjs
var nn = /* @__PURE__ */ new Map(), rn = class {
	constructor(e, t = {}) {
		this.formatter = on(e, t), this.options = t;
	}
	format(e) {
		return this.formatter.format(e);
	}
	formatToParts(e) {
		return this.formatter.formatToParts(e);
	}
	formatRange(e, t) {
		if (typeof this.formatter.formatRange == "function") return this.formatter.formatRange(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`;
	}
	formatRangeToParts(e, t) {
		if (typeof this.formatter.formatRangeToParts == "function") return this.formatter.formatRangeToParts(e, t);
		if (t < e) throw RangeError("End date must be >= start date");
		let n = this.formatter.formatToParts(e), r = this.formatter.formatToParts(t);
		return [
			...n.map((e) => ({
				...e,
				source: "startRange"
			})),
			{
				type: "literal",
				value: " – ",
				source: "shared"
			},
			...r.map((e) => ({
				...e,
				source: "endRange"
			}))
		];
	}
	resolvedOptions() {
		let e = this.formatter.resolvedOptions();
		return un() && (this.resolvedHourCycle ||= dn(e.locale, this.options), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
	}
}, an = {
	true: { ja: "h11" },
	false: {}
};
function on(e, t = {}) {
	if (typeof t.hour12 == "boolean" && cn()) {
		t = { ...t };
		let n = an[String(t.hour12)][e.split("-")[0]], r = t.hour12 ? "h12" : "h23";
		t.hourCycle = n ?? r, delete t.hour12;
	}
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (nn.has(n)) return nn.get(n);
	let r = new Intl.DateTimeFormat(e, t);
	return nn.set(n, r), r;
}
var sn = null;
function cn() {
	return sn ??= new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		hour12: !1
	}).format(new Date(2020, 2, 3, 0)) === "24", sn;
}
var ln = null;
function un() {
	return ln ??= new Intl.DateTimeFormat("fr", {
		hour: "numeric",
		hour12: !1
	}).resolvedOptions().hourCycle === "h12", ln;
}
function dn(e, t) {
	if (!t.timeStyle && !t.hour) return;
	e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
	let n = on(e, {
		...t,
		timeZone: void 0
	}), r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((e) => e.type === "hour").value, 10), i = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((e) => e.type === "hour").value, 10);
	if (r === 0 && i === 23) return "h23";
	if (r === 24 && i === 23) return "h24";
	if (r === 0 && i === 11) return "h11";
	if (r === 12 && i === 11) return "h12";
	throw Error("Unexpected hour cycle result");
}
// node_modules/react-aria/dist/private/i18n/useDateFormatter.mjs
function fn(e) {
	e = i(e ?? {}, pn);
	let { locale: t } = n();
	return (0, r.useMemo)(() => new rn(t, e), [t, e]);
}
function pn(e, t) {
	if (e === t) return !0;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (t[r] !== e[r]) return !1;
	return !0;
}
export { pe as A, b as C, ie as D, ve as E, f as M, i as N, g as O, de as S, y as T, h as _, R as a, te as b, Ae as c, D as d, ke as f, re as g, fe as h, ot as i, x as j, p as k, Oe as l, v as m, rn as n, et as o, Ne as p, tn as r, $e as s, fn as t, E as u, ye as v, be as w, m as x, _ as y };
