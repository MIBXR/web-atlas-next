import { a as e, r as t } from "./rolldown-runtime-DUcC5eAW.js";
import { t as n } from "./react-D9cguz4v.js";
import { t as r } from "./dist-DCi9UB7o.js";
import { n as i, t as a } from "./button-DmMhlFcj.js";
import { t as o } from "./icon-placeholder-BTF3H_W7.js";
import { t as s } from "./jsx-runtime-lAxUcZjR.js";
// node_modules/@date-fns/tz/tzName/index.js
function c(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
// node_modules/@date-fns/tz/tzOffset/index.js
var l = {}, u = {};
function d(e, t) {
	try {
		let n = (l[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in u ? u[n] : p(n, n.split(":"));
	} catch {
		if (e in u) return u[e];
		let t = e?.match(f);
		return t ? p(e, t.slice(1)) : NaN;
	}
}
var f = /([+-]\d\d):?(\d\d)?/;
function p(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return u[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
// node_modules/@date-fns/tz/date/mini.js
var m = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(d(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), v(this, e)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -d(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), g(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, h = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!h.test(e)) return;
	let t = e.replace(h, "$1UTC");
	m.prototype[t] && (e.startsWith("get") ? m.prototype[e] = function() {
		return this.internal[t]();
	} : (m.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), _(this), +this;
	}, m.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), g(this), +this;
	}));
});
function g(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-d(e.timeZone, e) * 60));
}
function _(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), v(e);
}
function v(e, t) {
	let n = Array.isArray(t) ? y(t) : +e.internal, r = d(e.timeZone, e), i = r > 0 ? Math.floor(r) : Math.ceil(r), a = /* @__PURE__ */ new Date(+e);
	a.setUTCHours(a.getUTCHours() - 1);
	let o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), c = o - s, l = o;
	if (c && o !== i && Date.prototype.getHours.apply(e) !== (Array.isArray(t) ? t[3] || 0 : e.internal.getUTCHours())) {
		let t = /* @__PURE__ */ new Date(+e), n = o - i;
		n && t.setUTCMinutes(t.getUTCMinutes() + n);
		let r = d(e.timeZone, t);
		(r > 0 ? Math.floor(r) : Math.ceil(r)) === i && (l = s);
	}
	let u = l - i;
	u && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
	let f = /* @__PURE__ */ new Date(+e);
	f.setUTCSeconds(0);
	let p = o > 0 ? f.getSeconds() : (f.getSeconds() - 60) % 60, m = Math.round(-(d(e.timeZone, e) * 60)) % 60;
	(m || p) && Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + m + p);
	let h = d(e.timeZone, e), _ = h > 0 ? Math.floor(h) : Math.ceil(h), v = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - _, x = _ !== i, S = v - u, C = _ - i, w = n - _ * 60 * 1e3, T = C > 0 && b(e) - n === C * 60 * 1e3 && b(e, w) !== n;
	if (x && S && !T) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S);
		let t = d(e.timeZone, e), n = _ - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && S < 0 && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n);
	}
	g(e);
	let E = (t ? n : n + m * 1e3) - +e.internal;
	E && Math.abs(E) < 18e5 && (Date.prototype.setTime.call(e, +e + E), g(e));
}
function y(e) {
	return Date.UTC(e[0], e.length > 1 ? e[1] : 0, e.length > 2 ? e[2] : 1, ...e.slice(3));
}
function b(e, t) {
	let n = new Date(t ?? +e);
	return n.setUTCSeconds(n.getUTCSeconds() - Math.round(-d(e.timeZone, n) * 60)), +n;
}
// node_modules/@date-fns/tz/date/index.js
var x = class e extends m {
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	toISOString() {
		let [e, t, n] = this.tzComponents(), r = `${e}${t}:${n}`;
		return this.internal.toISOString().slice(0, -1) + r;
	}
	toString() {
		return `${this.toDateString()} ${this.toTimeString()}`;
	}
	toDateString() {
		let [e, t, n, r] = this.internal.toUTCString().split(" ");
		return `${e?.slice(0, -1)} ${n} ${t} ${r}`;
	}
	toTimeString() {
		let e = this.internal.toUTCString().split(" ")[4], [t, n, r] = this.tzComponents();
		return `${e} GMT${t}${n}${r} (${c(this.timeZone, this)})`;
	}
	toLocaleString(e, t) {
		return Date.prototype.toLocaleString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleDateString(e, t) {
		return Date.prototype.toLocaleDateString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleTimeString(e, t) {
		return Date.prototype.toLocaleTimeString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	tzComponents() {
		let e = this.getTimezoneOffset();
		return [
			e > 0 ? "-" : "+",
			String(Math.floor(Math.abs(e) / 60)).padStart(2, "0"),
			String(Math.abs(e) % 60).padStart(2, "0")
		];
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, S = /* @__PURE__ */ e(n(), 1), C;
(function(e) {
	e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(C ||= {});
var w;
(function(e) {
	e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(w ||= {});
var T;
(function(e) {
	e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(T ||= {});
var E;
(function(e) {
	e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(E ||= {});
var ee = 6048e5, te = 864e5, ne = Symbol.for("constructDateFrom");
// node_modules/date-fns/constructFrom.js
function D(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && ne in e ? e[ne](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
// node_modules/date-fns/toDate.js
function O(e, t) {
	return D(t || e, e);
}
// node_modules/date-fns/addDays.js
function re(e, t, n) {
	let r = O(e, n?.in);
	return isNaN(t) ? D(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
// node_modules/date-fns/addMonths.js
function ie(e, t, n) {
	let r = O(e, n?.in);
	if (isNaN(t)) return D(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = D(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
// node_modules/date-fns/_lib/defaultOptions.js
var ae = {};
function k() {
	return ae;
}
// node_modules/date-fns/startOfWeek.js
function A(e, t) {
	let n = k(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = O(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
// node_modules/date-fns/startOfISOWeek.js
function j(e, t) {
	return A(e, {
		...t,
		weekStartsOn: 1
	});
}
// node_modules/date-fns/getISOWeekYear.js
function M(e, t) {
	let n = O(e, t?.in), r = n.getFullYear(), i = D(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = j(i), o = D(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = j(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function N(e) {
	let t = O(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), +e - n;
}
// node_modules/date-fns/_lib/normalizeDates.js
function P(e, ...t) {
	let n = D.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
// node_modules/date-fns/startOfDay.js
function F(e, t) {
	let n = O(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
// node_modules/date-fns/differenceInCalendarDays.js
function I(e, t, n) {
	let [r, i] = P(n?.in, e, t), a = F(r), o = F(i), s = +a - N(a), c = +o - N(o);
	return Math.round((s - c) / te);
}
// node_modules/date-fns/startOfISOWeekYear.js
function oe(e, t) {
	let n = M(e, t), r = D(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), j(r);
}
// node_modules/date-fns/addWeeks.js
function se(e, t, n) {
	return re(e, t * 7, n);
}
// node_modules/date-fns/addYears.js
function L(e, t, n) {
	return ie(e, t * 12, n);
}
// node_modules/date-fns/max.js
function ce(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = D.bind(null, e));
		let t = O(e, r);
		(!n || n < t || isNaN(+t)) && (n = t);
	}), D(r, n || NaN);
}
// node_modules/date-fns/min.js
function le(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = D.bind(null, e));
		let t = O(e, r);
		(!n || n > t || isNaN(+t)) && (n = t);
	}), D(r, n || NaN);
}
// node_modules/date-fns/isSameDay.js
function ue(e, t, n) {
	let [r, i] = P(n?.in, e, t);
	return +F(r) == +F(i);
}
// node_modules/date-fns/isDate.js
function de(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
// node_modules/date-fns/isValid.js
function R(e) {
	return !(!de(e) && typeof e != "number" || isNaN(+O(e)));
}
// node_modules/date-fns/differenceInCalendarMonths.js
function fe(e, t, n) {
	let [r, i] = P(n?.in, e, t), a = r.getFullYear() - i.getFullYear(), o = r.getMonth() - i.getMonth();
	return a * 12 + o;
}
// node_modules/date-fns/endOfMonth.js
function pe(e, t) {
	let n = O(e, t?.in), r = n.getMonth();
	return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
// node_modules/date-fns/_lib/normalizeInterval.js
function me(e, t) {
	let [n, r] = P(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
// node_modules/date-fns/eachMonthOfInterval.js
function he(e, t) {
	let { start: n, end: r } = me(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setDate(1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(D(n, o)), o.setMonth(o.getMonth() + s);
	return i ? c.reverse() : c;
}
// node_modules/date-fns/startOfMonth.js
function ge(e, t) {
	let n = O(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
// node_modules/date-fns/endOfYear.js
function _e(e, t) {
	let n = O(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
// node_modules/date-fns/startOfYear.js
function ve(e, t) {
	let n = O(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
// node_modules/date-fns/endOfWeek.js
function ye(e, t) {
	let n = k(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = O(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
// node_modules/date-fns/endOfISOWeek.js
function be(e, t) {
	return ye(e, {
		...t,
		weekStartsOn: 1
	});
}
// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var xe = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, Se = (e, t, n) => {
	let r, i = xe[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function Ce(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var we = {
	date: Ce({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: Ce({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: Ce({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, Te = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, z = (e, t, n, r) => Te[e];
// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function B(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
var Ee = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: B({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: B({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: B({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: B({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: B({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
};
// node_modules/date-fns/locale/_lib/buildMatchFn.js
function V(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Oe(s, (e) => e.test(o)) : De(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function De(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Oe(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function ke(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
// node_modules/date-fns/locale/en-US.js
var Ae = {
	code: "en-US",
	formatDistance: Se,
	formatLong: we,
	formatRelative: z,
	localize: Ee,
	match: {
		ordinalNumber: ke({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: V({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: V({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: V({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: V({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: V({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
// node_modules/date-fns/getDayOfYear.js
function je(e, t) {
	let n = O(e, t?.in);
	return I(n, ve(n)) + 1;
}
// node_modules/date-fns/getISOWeek.js
function Me(e, t) {
	let n = O(e, t?.in), r = +j(n) - oe(n);
	return Math.round(r / ee) + 1;
}
// node_modules/date-fns/getWeekYear.js
function Ne(e, t) {
	let n = O(e, t?.in), r = n.getFullYear(), i = k(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = D(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = A(o, t), c = D(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = A(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
// node_modules/date-fns/startOfWeekYear.js
function Pe(e, t) {
	let n = k(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Ne(e, t), a = D(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), A(a, t);
}
// node_modules/date-fns/getWeek.js
function Fe(e, t) {
	let n = O(e, t?.in), r = +A(n, t) - Pe(n, t);
	return Math.round(r / ee) + 1;
}
// node_modules/date-fns/_lib/addLeadingZeros.js
function H(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
// node_modules/date-fns/_lib/format/lightFormatters.js
var U = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return H(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : H(n + 1, 2);
	},
	d(e, t) {
		return H(e.getDate(), t.length);
	},
	a(e, t) {
		let n = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.toUpperCase();
			case "aaa": return n;
			case "aaaaa": return n[0];
			default: return n === "am" ? "a.m." : "p.m.";
		}
	},
	h(e, t) {
		return H(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return H(e.getHours(), t.length);
	},
	m(e, t) {
		return H(e.getMinutes(), t.length);
	},
	s(e, t) {
		return H(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return H(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, W = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, Ie = {
	G: function(e, t, n) {
		let r = +(e.getFullYear() > 0);
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(r, { width: "abbreviated" });
			case "GGGGG": return n.era(r, { width: "narrow" });
			default: return n.era(r, { width: "wide" });
		}
	},
	y: function(e, t, n) {
		if (t === "yo") {
			let t = e.getFullYear(), r = t > 0 ? t : 1 - t;
			return n.ordinalNumber(r, { unit: "year" });
		}
		return U.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = Ne(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? H(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : H(a, t.length);
	},
	R: function(e, t) {
		return H(M(e), t.length);
	},
	u: function(e, t) {
		return H(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return H(r, 2);
			case "Qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "QQQ": return n.quarter(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "q": return String(r);
			case "qq": return H(r, 2);
			case "qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "qqq": return n.quarter(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "M":
			case "MM": return U.M(e, t);
			case "Mo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "MMM": return n.month(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return n.month(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "L": return String(r + 1);
			case "LL": return H(r + 1, 2);
			case "Lo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "LLL": return n.month(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return n.month(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(e, t, n, r) {
		let i = Fe(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : H(i, t.length);
	},
	I: function(e, t, n) {
		let r = Me(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : H(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : U.d(e, t);
	},
	D: function(e, t, n) {
		let r = je(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : H(r, t.length);
	},
	E: function(e, t, n) {
		let r = e.getDay();
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "e": return String(a);
			case "ee": return H(a, 2);
			case "eo": return n.ordinalNumber(a, { unit: "day" });
			case "eee": return n.day(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return n.day(i, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(i, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "c": return String(a);
			case "cc": return H(a, t.length);
			case "co": return n.ordinalNumber(a, { unit: "day" });
			case "ccc": return n.day(i, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return n.day(i, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(i, {
				width: "short",
				context: "standalone"
			});
			default: return n.day(i, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(e, t, n) {
		let r = e.getDay(), i = r === 0 ? 7 : r;
		switch (t) {
			case "i": return String(i);
			case "ii": return H(i, t.length);
			case "io": return n.ordinalNumber(i, { unit: "day" });
			case "iii": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(e, t, n) {
		let r = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return n.dayPeriod(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r === 12 ? W.noon : r === 0 ? W.midnight : r / 12 >= 1 ? "pm" : "am", t) {
			case "b":
			case "bb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r >= 17 ? W.evening : r >= 12 ? W.afternoon : r >= 4 ? W.morning : W.night, t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(e, t, n) {
		if (t === "ho") {
			let t = e.getHours() % 12;
			return t === 0 && (t = 12), n.ordinalNumber(t, { unit: "hour" });
		}
		return U.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : U.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : H(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : H(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : U.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : U.s(e, t);
	},
	S: function(e, t) {
		return U.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Re(r);
			case "XXXX":
			case "XX": return G(r);
			default: return G(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Re(r);
			case "xxxx":
			case "xx": return G(r);
			default: return G(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Le(r, ":");
			default: return "GMT" + G(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Le(r, ":");
			default: return "GMT" + G(r, ":");
		}
	},
	t: function(e, t, n) {
		return H(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return H(+e, t.length);
	}
};
function Le(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + H(a, 2);
}
function Re(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + H(Math.abs(e) / 60, 2) : G(e, t);
}
function G(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = H(Math.trunc(r / 60), 2), a = H(r % 60, 2);
	return n + i + t + a;
}
// node_modules/date-fns/_lib/format/longFormatters.js
var ze = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, Be = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, Ve = {
	p: Be,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return ze(e, t);
		let a;
		switch (r) {
			case "P":
				a = t.dateTime({ width: "short" });
				break;
			case "PP":
				a = t.dateTime({ width: "medium" });
				break;
			case "PPP":
				a = t.dateTime({ width: "long" });
				break;
			default: a = t.dateTime({ width: "full" });
		}
		return a.replace("{{date}}", ze(r, t)).replace("{{time}}", Be(i, t));
	}
}, He = /^D+$/, Ue = /^Y+$/, We = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function Ge(e) {
	return He.test(e);
}
function Ke(e) {
	return Ue.test(e);
}
function qe(e, t, n) {
	let r = Je(e, t, n);
	if (console.warn(r), We.includes(e)) throw RangeError(r);
}
function Je(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
// node_modules/date-fns/format.js
var Ye = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Xe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ze = /^'([^]*?)'?$/, Qe = /''/g, $e = /[a-zA-Z]/;
function et(e, t, n) {
	let r = k(), i = n?.locale ?? r.locale ?? Ae, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = O(e, n?.in);
	if (!R(s)) throw RangeError("Invalid time value");
	let c = t.match(Xe).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = Ve[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(Ye).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: tt(e)
		};
		if (Ie[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match($e)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
		return {
			isToken: !1,
			value: e
		};
	});
	i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
	let l = {
		firstWeekContainsDate: a,
		weekStartsOn: o,
		locale: i
	};
	return c.map((r) => {
		if (!r.isToken) return r.value;
		let a = r.value;
		(!n?.useAdditionalWeekYearTokens && Ke(a) || !n?.useAdditionalDayOfYearTokens && Ge(a)) && qe(a, t, String(e));
		let o = Ie[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function tt(e) {
	let t = e.match(Ze);
	return t ? t[1].replace(Qe, "'") : e;
}
// node_modules/date-fns/getDaysInMonth.js
function nt(e, t) {
	let n = O(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = D(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
// node_modules/date-fns/getMonth.js
function rt(e, t) {
	return O(e, t?.in).getMonth();
}
// node_modules/date-fns/getYear.js
function it(e, t) {
	return O(e, t?.in).getFullYear();
}
// node_modules/date-fns/isAfter.js
function at(e, t) {
	return +O(e) > +O(t);
}
// node_modules/date-fns/isBefore.js
function ot(e, t) {
	return +O(e) < +O(t);
}
// node_modules/date-fns/isSameMonth.js
function st(e, t, n) {
	let [r, i] = P(n?.in, e, t);
	return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth();
}
// node_modules/date-fns/isSameYear.js
function ct(e, t, n) {
	let [r, i] = P(n?.in, e, t);
	return r.getFullYear() === i.getFullYear();
}
// node_modules/date-fns/setMonth.js
function lt(e, t, n) {
	let r = O(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = D(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = nt(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
// node_modules/date-fns/setYear.js
function ut(e, t, n) {
	let r = O(e, n?.in);
	return isNaN(+r) ? D(n?.in || e, NaN) : (r.setFullYear(t), r);
}
// node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
var dt = 5, ft = 4;
function pt(e, t) {
	let n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, i = t.addDays(e, -r + 1), a = t.addDays(i, 34);
	return t.getMonth(e) === t.getMonth(a) ? dt : ft;
}
// node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
function mt(e, t) {
	let n = t.startOfMonth(e), r = n.getDay();
	return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
// node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
function ht(e, t) {
	let n = mt(e, t), r = pt(e, t);
	return t.addDays(n, r * 7 - 1);
}
// node_modules/react-day-picker/dist/esm/classes/DateLib.js
var K = class {
	constructor(e, t) {
		this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? x.tz(this.options.timeZone) : new this.Date(), this.newDate = (e, t, n) => this.overrides?.newDate ? this.overrides.newDate(e, t, n) : this.options.timeZone ? new x(e, t, n, this.options.timeZone) : new Date(e, t, n), this.addDays = (e, t) => this.overrides?.addDays ? this.overrides.addDays(e, t) : re(e, t), this.addMonths = (e, t) => this.overrides?.addMonths ? this.overrides.addMonths(e, t) : ie(e, t), this.addWeeks = (e, t) => this.overrides?.addWeeks ? this.overrides.addWeeks(e, t) : se(e, t), this.addYears = (e, t) => this.overrides?.addYears ? this.overrides.addYears(e, t) : L(e, t), this.differenceInCalendarDays = (e, t) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(e, t) : I(e, t), this.differenceInCalendarMonths = (e, t) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(e, t) : fe(e, t), this.eachMonthOfInterval = (e) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(e) : he(e), this.endOfBroadcastWeek = (e) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(e) : ht(e, this), this.endOfISOWeek = (e) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(e) : be(e), this.endOfMonth = (e) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(e) : pe(e), this.endOfWeek = (e, t) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(e, t) : ye(e, this.options), this.endOfYear = (e) => this.overrides?.endOfYear ? this.overrides.endOfYear(e) : _e(e), this.format = (e, t, n) => {
			let r = this.overrides?.format ? this.overrides.format(e, t, this.options) : et(e, t, this.options);
			return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(r) : r;
		}, this.getISOWeek = (e) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(e) : Me(e), this.getMonth = (e, t) => this.overrides?.getMonth ? this.overrides.getMonth(e, this.options) : rt(e, this.options), this.getYear = (e, t) => this.overrides?.getYear ? this.overrides.getYear(e, this.options) : it(e, this.options), this.getWeek = (e, t) => this.overrides?.getWeek ? this.overrides.getWeek(e, this.options) : Fe(e, this.options), this.isAfter = (e, t) => this.overrides?.isAfter ? this.overrides.isAfter(e, t) : at(e, t), this.isBefore = (e, t) => this.overrides?.isBefore ? this.overrides.isBefore(e, t) : ot(e, t), this.isDate = (e) => this.overrides?.isDate ? this.overrides.isDate(e) : de(e), this.isSameDay = (e, t) => this.overrides?.isSameDay ? this.overrides.isSameDay(e, t) : ue(e, t), this.isSameMonth = (e, t) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(e, t) : st(e, t), this.isSameYear = (e, t) => this.overrides?.isSameYear ? this.overrides.isSameYear(e, t) : ct(e, t), this.max = (e) => this.overrides?.max ? this.overrides.max(e) : ce(e), this.min = (e) => this.overrides?.min ? this.overrides.min(e) : le(e), this.setMonth = (e, t) => this.overrides?.setMonth ? this.overrides.setMonth(e, t) : lt(e, t), this.setYear = (e, t) => this.overrides?.setYear ? this.overrides.setYear(e, t) : ut(e, t), this.startOfBroadcastWeek = (e, t) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(e, this) : mt(e, this), this.startOfDay = (e) => this.overrides?.startOfDay ? this.overrides.startOfDay(e) : F(e), this.startOfISOWeek = (e) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(e) : j(e), this.startOfMonth = (e) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(e) : ge(e), this.startOfWeek = (e, t) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(e, this.options) : A(e, this.options), this.startOfYear = (e) => this.overrides?.startOfYear ? this.overrides.startOfYear(e) : ve(e), this.options = {
			locale: Ae,
			...e
		}, this.overrides = t;
	}
	getDigitMap() {
		let { numerals: e = "latn" } = this.options, t = new Intl.NumberFormat("en-US", { numberingSystem: e }), n = {};
		for (let e = 0; e < 10; e++) n[e.toString()] = t.format(e);
		return n;
	}
	replaceDigits(e) {
		let t = this.getDigitMap();
		return e.replace(/\d/g, (e) => t[e] || e);
	}
	formatNumber(e) {
		return this.replaceDigits(e.toString());
	}
}, q = new K(), gt = class {
	constructor(e, t, n = q) {
		this.date = e, this.displayMonth = t, this.outside = !(!t || n.isSameMonth(e, t)), this.dateLib = n;
	}
	isEqualTo(e) {
		return this.dateLib.isSameDay(e.date, this.date) && this.dateLib.isSameMonth(e.displayMonth, this.displayMonth);
	}
}, _t = class {
	constructor(e, t) {
		this.date = e, this.weeks = t;
	}
}, vt = class {
	constructor(e, t) {
		this.days = t, this.weekNumber = e;
	}
};
// node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
function J(e, t, n = !1, r = q) {
	let { from: i, to: a } = e, { differenceInCalendarDays: o, isSameDay: s } = r;
	return i && a ? (o(a, i) < 0 && ([i, a] = [a, i]), o(t, i) >= +!!n && o(a, t) >= +!!n) : !n && a ? s(a, t) : !n && i ? s(i, t) : !1;
}
// node_modules/react-day-picker/dist/esm/utils/typeguards.js
function yt(e) {
	return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function bt(e) {
	return !!(e && typeof e == "object" && "from" in e);
}
function xt(e) {
	return !!(e && typeof e == "object" && "after" in e);
}
function St(e) {
	return !!(e && typeof e == "object" && "before" in e);
}
function Ct(e) {
	return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function wt(e, t) {
	return Array.isArray(e) && e.every(t.isDate);
}
// node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
function Y(e, t, n = q) {
	let r = Array.isArray(t) ? t : [t], { isSameDay: i, differenceInCalendarDays: a, isAfter: o } = n;
	return r.some((t) => {
		if (typeof t == "boolean") return t;
		if (n.isDate(t)) return i(e, t);
		if (wt(t, n)) return t.includes(e);
		if (bt(t)) return J(t, e, !1, n);
		if (Ct(t)) return Array.isArray(t.dayOfWeek) ? t.dayOfWeek.includes(e.getDay()) : t.dayOfWeek === e.getDay();
		if (yt(t)) {
			let n = a(t.before, e), r = a(t.after, e), i = n > 0, s = r < 0;
			return o(t.before, t.after) ? s && i : i || s;
		}
		return xt(t) ? a(e, t.after) > 0 : St(t) ? a(t.before, e) > 0 : typeof t == "function" && t(e);
	});
}
// node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
function Tt(e, t, n, r, i) {
	let { disabled: a, hidden: o, modifiers: s, showOutsideDays: c, broadcastCalendar: l, today: u } = t, { isSameDay: d, isSameMonth: f, startOfMonth: p, isBefore: m, endOfMonth: h, isAfter: g } = i, _ = n && p(n), v = r && h(r), y = {
		[w.focused]: [],
		[w.outside]: [],
		[w.disabled]: [],
		[w.hidden]: [],
		[w.today]: []
	}, b = {};
	for (let t of e) {
		let { date: e, displayMonth: n } = t, r = !(!n || f(e, n)), p = !!(_ && m(e, _)), h = !!(v && g(e, v)), x = !!(a && Y(e, a, i)), S = !!(o && Y(e, o, i)) || p || h || !l && !c && r || l && c === !1 && r, C = d(e, u ?? i.today());
		r && y.outside.push(t), x && y.disabled.push(t), S && y.hidden.push(t), C && y.today.push(t), s && Object.keys(s).forEach((n) => {
			let r = s?.[n];
			r && Y(e, r, i) && (b[n] ? b[n].push(t) : b[n] = [t]);
		});
	}
	return (e) => {
		let t = {
			[w.focused]: !1,
			[w.disabled]: !1,
			[w.hidden]: !1,
			[w.outside]: !1,
			[w.today]: !1
		}, n = {};
		for (let n in y) t[n] = y[n].some((t) => t === e);
		for (let t in b) n[t] = b[t].some((t) => t === e);
		return {
			...t,
			...n
		};
	};
}
// node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
function Et(e, t, n = {}) {
	return Object.entries(e).filter(([, e]) => e === !0).reduce((e, [r]) => (n[r] ? e.push(n[r]) : t[w[r]] ? e.push(t[w[r]]) : t[T[r]] && e.push(t[T[r]]), e), [t[C.Day]]);
}
// node_modules/react-day-picker/dist/esm/components/Button.js
function Dt(e) {
	return S.createElement("button", { ...e });
}
// node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
function Ot(e) {
	return S.createElement("span", { ...e });
}
// node_modules/react-day-picker/dist/esm/components/Chevron.js
function kt(e) {
	let { size: t = 24, orientation: n = "left", className: r } = e;
	return S.createElement("svg", {
		className: r,
		width: t,
		height: t,
		viewBox: "0 0 24 24"
	}, n === "up" && S.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }), n === "down" && S.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }), n === "left" && S.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }), n === "right" && S.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" }));
}
// node_modules/react-day-picker/dist/esm/components/Day.js
function At(e) {
	let { day: t, modifiers: n, ...r } = e;
	return S.createElement("td", { ...r });
}
// node_modules/react-day-picker/dist/esm/components/DayButton.js
function jt(e) {
	let { day: t, modifiers: n, ...r } = e, i = S.useRef(null);
	return S.useEffect(() => {
		n.focused && i.current?.focus();
	}, [n.focused]), S.createElement("button", {
		ref: i,
		...r
	});
}
// node_modules/react-day-picker/dist/esm/components/Dropdown.js
function Mt(e) {
	let { options: t, className: n, components: r, classNames: i, ...a } = e, o = [i[C.Dropdown], n].join(" "), s = t?.find(({ value: e }) => e === a.value);
	return S.createElement("span", {
		"data-disabled": a.disabled,
		className: i[C.DropdownRoot]
	}, S.createElement(r.Select, {
		className: o,
		...a
	}, t?.map(({ value: e, label: t, disabled: n }) => S.createElement(r.Option, {
		key: e,
		value: e,
		disabled: n
	}, t))), S.createElement("span", {
		className: i[C.CaptionLabel],
		"aria-hidden": !0
	}, s?.label, S.createElement(r.Chevron, {
		orientation: "down",
		size: 18,
		className: i[C.Chevron]
	})));
}
// node_modules/react-day-picker/dist/esm/components/DropdownNav.js
function Nt(e) {
	return S.createElement("div", { ...e });
}
// node_modules/react-day-picker/dist/esm/components/Footer.js
function Pt(e) {
	return S.createElement("div", { ...e });
}
// node_modules/react-day-picker/dist/esm/components/Month.js
function Ft(e) {
	let { calendarMonth: t, displayIndex: n, ...r } = e;
	return S.createElement("div", { ...r }, e.children);
}
// node_modules/react-day-picker/dist/esm/components/MonthCaption.js
function It(e) {
	let { calendarMonth: t, displayIndex: n, ...r } = e;
	return S.createElement("div", { ...r });
}
// node_modules/react-day-picker/dist/esm/components/MonthGrid.js
function Lt(e) {
	return S.createElement("table", { ...e });
}
// node_modules/react-day-picker/dist/esm/components/Months.js
function Rt(e) {
	return S.createElement("div", { ...e });
}
// node_modules/react-day-picker/dist/esm/useDayPicker.js
var zt = (0, S.createContext)(void 0);
function X() {
	let e = (0, S.useContext)(zt);
	if (e === void 0) throw Error("useDayPicker() must be used within a custom component.");
	return e;
}
// node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
function Bt(e) {
	let { components: t } = X();
	return S.createElement(t.Dropdown, { ...e });
}
// node_modules/react-day-picker/dist/esm/components/Nav.js
function Vt(e) {
	let { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: i, ...a } = e, { components: o, classNames: s, labels: { labelPrevious: c, labelNext: l } } = X(), u = (0, S.useCallback)((e) => {
		i && n?.(e);
	}, [i, n]), d = (0, S.useCallback)((e) => {
		r && t?.(e);
	}, [r, t]);
	return S.createElement("nav", { ...a }, S.createElement(o.PreviousMonthButton, {
		type: "button",
		className: s[C.PreviousMonthButton],
		tabIndex: r ? void 0 : -1,
		"aria-disabled": !r || void 0,
		"aria-label": c(r),
		onClick: d
	}, S.createElement(o.Chevron, {
		disabled: !r || void 0,
		className: s[C.Chevron],
		orientation: "left"
	})), S.createElement(o.NextMonthButton, {
		type: "button",
		className: s[C.NextMonthButton],
		tabIndex: i ? void 0 : -1,
		"aria-disabled": !i || void 0,
		"aria-label": l(i),
		onClick: u
	}, S.createElement(o.Chevron, {
		disabled: !i || void 0,
		orientation: "right",
		className: s[C.Chevron]
	})));
}
// node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
function Ht(e) {
	let { components: t } = X();
	return S.createElement(t.Button, { ...e });
}
// node_modules/react-day-picker/dist/esm/components/Option.js
function Ut(e) {
	return S.createElement("option", { ...e });
}
// node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
function Wt(e) {
	let { components: t } = X();
	return S.createElement(t.Button, { ...e });
}
// node_modules/react-day-picker/dist/esm/components/Root.js
function Gt(e) {
	let { rootRef: t, ...n } = e;
	return S.createElement("div", {
		...n,
		ref: t
	});
}
// node_modules/react-day-picker/dist/esm/components/Select.js
function Kt(e) {
	return S.createElement("select", { ...e });
}
// node_modules/react-day-picker/dist/esm/components/Week.js
function qt(e) {
	let { week: t, ...n } = e;
	return S.createElement("tr", { ...n });
}
// node_modules/react-day-picker/dist/esm/components/Weekday.js
function Jt(e) {
	return S.createElement("th", { ...e });
}
// node_modules/react-day-picker/dist/esm/components/Weekdays.js
function Yt(e) {
	return S.createElement("thead", { "aria-hidden": !0 }, S.createElement("tr", { ...e }));
}
// node_modules/react-day-picker/dist/esm/components/WeekNumber.js
function Xt(e) {
	let { week: t, ...n } = e;
	return S.createElement("th", { ...n });
}
// node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
function Zt(e) {
	return S.createElement("th", { ...e });
}
// node_modules/react-day-picker/dist/esm/components/Weeks.js
function Qt(e) {
	return S.createElement("tbody", { ...e });
}
// node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
function $t(e) {
	let { components: t } = X();
	return S.createElement(t.Dropdown, { ...e });
}
// node_modules/react-day-picker/dist/esm/components/custom-components.js
var en = /* @__PURE__ */ t({
	Button: () => Dt,
	CaptionLabel: () => Ot,
	Chevron: () => kt,
	Day: () => At,
	DayButton: () => jt,
	Dropdown: () => Mt,
	DropdownNav: () => Nt,
	Footer: () => Pt,
	Month: () => Ft,
	MonthCaption: () => It,
	MonthGrid: () => Lt,
	Months: () => Rt,
	MonthsDropdown: () => Bt,
	Nav: () => Vt,
	NextMonthButton: () => Ht,
	Option: () => Ut,
	PreviousMonthButton: () => Wt,
	Root: () => Gt,
	Select: () => Kt,
	Week: () => qt,
	WeekNumber: () => Xt,
	WeekNumberHeader: () => Zt,
	Weekday: () => Jt,
	Weekdays: () => Yt,
	Weeks: () => Qt,
	YearsDropdown: () => $t
});
// node_modules/react-day-picker/dist/esm/helpers/getComponents.js
function tn(e) {
	return {
		...en,
		...e
	};
}
// node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
function nn(e) {
	let t = {
		"data-mode": e.mode ?? void 0,
		"data-required": "required" in e ? e.required : void 0,
		"data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
		"data-week-numbers": e.showWeekNumber || void 0,
		"data-broadcast-calendar": e.broadcastCalendar || void 0,
		"data-nav-layout": e.navLayout || void 0
	};
	return Object.entries(e).forEach(([e, n]) => {
		e.startsWith("data-") && (t[e] = n);
	}), t;
}
// node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
function rn() {
	let e = {};
	for (let t in C) e[C[t]] = `rdp-${C[t]}`;
	for (let t in w) e[w[t]] = `rdp-${w[t]}`;
	for (let t in T) e[T[t]] = `rdp-${T[t]}`;
	for (let t in E) e[E[t]] = `rdp-${E[t]}`;
	return e;
}
// node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
function an(e, t, n) {
	return (n ?? new K(t)).format(e, "LLLL y");
}
var on = an;
// node_modules/react-day-picker/dist/esm/formatters/formatDay.js
function sn(e, t, n) {
	return (n ?? new K(t)).format(e, "d");
}
// node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
function cn(e, t = q) {
	return t.format(e, "LLLL");
}
// node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
function ln(e, t = q) {
	return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
// node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
function un() {
	return "";
}
// node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
function dn(e, t, n) {
	return (n ?? new K(t)).format(e, "cccccc");
}
// node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
function fn(e, t = q) {
	return t.format(e, "yyyy");
}
var pn = fn, mn = /* @__PURE__ */ t({
	formatCaption: () => an,
	formatDay: () => sn,
	formatMonthCaption: () => on,
	formatMonthDropdown: () => cn,
	formatWeekNumber: () => ln,
	formatWeekNumberHeader: () => un,
	formatWeekdayName: () => dn,
	formatYearCaption: () => pn,
	formatYearDropdown: () => fn
});
// node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
function hn(e) {
	return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
		...mn,
		...e
	};
}
// node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
function gn(e, t, n, r, i) {
	let { startOfMonth: a, startOfYear: o, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = i;
	return c({
		start: o(e),
		end: s(e)
	}).map((e) => {
		let o = r.formatMonthDropdown(e, i);
		return {
			value: l(e),
			label: o,
			disabled: t && e < a(t) || n && e > a(n) || !1
		};
	});
}
// node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
function _n(e, t = {}, n = {}) {
	let r = { ...t?.[C.Day] };
	return Object.entries(e).filter(([, e]) => e === !0).forEach(([e]) => {
		r = {
			...r,
			...n?.[e]
		};
	}), r;
}
// node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
function vn(e, t, n) {
	let r = e.today(), i = n ? e.startOfBroadcastWeek(r, e) : t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
	for (let t = 0; t < 7; t++) {
		let n = e.addDays(i, t);
		a.push(n);
	}
	return a;
}
// node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
function yn(e, t, n, r) {
	if (!e || !t) return;
	let { startOfYear: i, endOfYear: a, addYears: o, getYear: s, isBefore: c, isSameYear: l } = r, u = i(e), d = a(t), f = [], p = u;
	for (; c(p, d) || l(p, d);) f.push(p), p = o(p, 1);
	return f.map((e) => {
		let t = n.formatYearDropdown(e, r);
		return {
			value: s(e),
			label: t,
			disabled: !1
		};
	});
}
// node_modules/react-day-picker/dist/esm/labels/labelGrid.js
function bn(e, t, n) {
	return (n ?? new K(t)).format(e, "LLLL y");
}
var xn = bn;
// node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
function Sn(e, t, n, r) {
	let i = (r ?? new K(n)).format(e, "PPPP");
	return t?.today && (i = `Today, ${i}`), i;
}
// node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
function Cn(e, t, n, r) {
	let i = (r ?? new K(n)).format(e, "PPPP");
	return t.today && (i = `Today, ${i}`), t.selected && (i = `${i}, selected`), i;
}
var wn = Cn;
// node_modules/react-day-picker/dist/esm/labels/labelNav.js
function Tn() {
	return "";
}
// node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
function En(e) {
	return "Choose the Month";
}
// node_modules/react-day-picker/dist/esm/labels/labelNext.js
function Dn(e) {
	return "Go to the Next Month";
}
// node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
function On(e) {
	return "Go to the Previous Month";
}
// node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
function kn(e, t, n) {
	return (n ?? new K(t)).format(e, "cccc");
}
// node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
function An(e, t) {
	return `Week ${e}`;
}
// node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
function jn(e) {
	return "Week Number";
}
// node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
function Mn(e) {
	return "Choose the Year";
}
// node_modules/react-day-picker/dist/esm/labels/index.js
var Nn = /* @__PURE__ */ t({
	labelCaption: () => xn,
	labelDay: () => wn,
	labelDayButton: () => Cn,
	labelGrid: () => bn,
	labelGridcell: () => Sn,
	labelMonthDropdown: () => En,
	labelNav: () => Tn,
	labelNext: () => Dn,
	labelPrevious: () => On,
	labelWeekNumber: () => An,
	labelWeekNumberHeader: () => jn,
	labelWeekday: () => kn,
	labelYearDropdown: () => Mn
}), Z = (e) => e instanceof HTMLElement ? e : null, Pn = (e) => [...e.querySelectorAll("[data-animated-month]") ?? []], Fn = (e) => Z(e.querySelector("[data-animated-month]")), In = (e) => Z(e.querySelector("[data-animated-caption]")), Ln = (e) => Z(e.querySelector("[data-animated-weeks]")), Rn = (e) => Z(e.querySelector("[data-animated-nav]")), zn = (e) => Z(e.querySelector("[data-animated-weekdays]"));
function Bn(e, t, { classNames: n, months: r, focused: i, dateLib: a }) {
	let o = (0, S.useRef)(null), s = (0, S.useRef)(r), c = (0, S.useRef)(!1);
	(0, S.useLayoutEffect)(() => {
		let l = s.current;
		if (s.current = r, !t || !e.current || !(e.current instanceof HTMLElement) || r.length === 0 || l.length === 0 || r.length !== l.length) return;
		let u = a.isSameMonth(r[0].date, l[0].date), d = a.isAfter(r[0].date, l[0].date), f = d ? n[E.caption_after_enter] : n[E.caption_before_enter], p = d ? n[E.weeks_after_enter] : n[E.weeks_before_enter], m = o.current, h = e.current.cloneNode(!0);
		if (h instanceof HTMLElement ? (Pn(h).forEach((e) => {
			if (!(e instanceof HTMLElement)) return;
			let t = Fn(e);
			t && e.contains(t) && e.removeChild(t);
			let n = In(e);
			n && n.classList.remove(f);
			let r = Ln(e);
			r && r.classList.remove(p);
		}), o.current = h) : o.current = null, c.current || u || i) return;
		let g = m instanceof HTMLElement ? Pn(m) : [], _ = Pn(e.current);
		if (_ && _.every((e) => e instanceof HTMLElement) && g && g.every((e) => e instanceof HTMLElement)) {
			c.current = !0;
			let t = [];
			e.current.style.isolation = "isolate";
			let r = Rn(e.current);
			r && (r.style.zIndex = "1"), _.forEach((i, a) => {
				let o = g[a];
				if (!o) return;
				i.style.position = "relative", i.style.overflow = "hidden";
				let s = In(i);
				s && s.classList.add(f);
				let l = Ln(i);
				l && l.classList.add(p);
				let u = () => {
					c.current = !1, e.current && (e.current.style.isolation = ""), r && (r.style.zIndex = ""), s && s.classList.remove(f), l && l.classList.remove(p), i.style.position = "", i.style.overflow = "", i.contains(o) && i.removeChild(o);
				};
				t.push(u), o.style.pointerEvents = "none", o.style.position = "absolute", o.style.overflow = "hidden", o.setAttribute("aria-hidden", "true");
				let m = zn(o);
				m && (m.style.opacity = "0");
				let h = In(o);
				h && (h.classList.add(d ? n[E.caption_before_exit] : n[E.caption_after_exit]), h.addEventListener("animationend", u));
				let _ = Ln(o);
				_ && _.classList.add(d ? n[E.weeks_before_exit] : n[E.weeks_after_exit]), i.insertBefore(o, i.firstChild);
			});
		}
	});
}
// node_modules/react-day-picker/dist/esm/helpers/getDates.js
function Vn(e, t, n, r) {
	let i = e[0], a = e[e.length - 1], { ISOWeek: o, fixedWeeks: s, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: u, differenceInCalendarMonths: d, endOfBroadcastWeek: f, endOfISOWeek: p, endOfMonth: m, endOfWeek: h, isAfter: g, startOfBroadcastWeek: _, startOfISOWeek: v, startOfWeek: y } = r, b = c ? _(i, r) : o ? v(i) : y(i), x = u(c ? f(a) : o ? p(m(a)) : h(m(a)), b), S = d(a, i) + 1, C = [];
	for (let e = 0; e <= x; e++) {
		let n = l(b, e);
		if (t && g(n, t)) break;
		C.push(n);
	}
	let w = (c ? 35 : 42) * S;
	if (s && C.length < w) {
		let e = w - C.length;
		for (let t = 0; t < e; t++) {
			let e = l(C[C.length - 1], 1);
			C.push(e);
		}
	}
	return C;
}
// node_modules/react-day-picker/dist/esm/helpers/getDays.js
function Hn(e) {
	let t = [];
	return e.reduce((e, n) => {
		let r = n.weeks.reduce((e, t) => [...e, ...t.days], t);
		return [...e, ...r];
	}, t);
}
// node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
function Un(e, t, n, r) {
	let { numberOfMonths: i = 1 } = n, a = [];
	for (let n = 0; n < i; n++) {
		let i = r.addMonths(e, n);
		if (t && i > t) break;
		a.push(i);
	}
	return a;
}
// node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
function Wn(e, t, n, r) {
	let { month: i, defaultMonth: a, today: o = r.today(), numberOfMonths: s = 1 } = e, c = i || a || o, { differenceInCalendarMonths: l, addMonths: u, startOfMonth: d } = r;
	return n && l(n, c) < s - 1 && (c = u(n, -1 * (s - 1))), t && l(c, t) < 0 && (c = t), d(c);
}
// node_modules/react-day-picker/dist/esm/helpers/getMonths.js
function Gn(e, t, n, r) {
	let { addDays: i, endOfBroadcastWeek: a, endOfISOWeek: o, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: d, startOfISOWeek: f, startOfWeek: p } = r, m = e.reduce((e, m) => {
		let h = n.broadcastCalendar ? d(m, r) : n.ISOWeek ? f(m) : p(m), g = n.broadcastCalendar ? a(m) : n.ISOWeek ? o(s(m)) : c(s(m)), _ = t.filter((e) => e >= h && e <= g), v = n.broadcastCalendar ? 35 : 42;
		if (n.fixedWeeks && _.length < v) {
			let e = t.filter((e) => {
				let t = v - _.length;
				return e > g && e <= i(g, t);
			});
			_.push(...e);
		}
		let y = new _t(m, _.reduce((e, t) => {
			let i = n.ISOWeek ? l(t) : u(t), a = e.find((e) => e.weekNumber === i), o = new gt(t, m, r);
			return a ? a.days.push(o) : e.push(new vt(i, [o])), e;
		}, []));
		return e.push(y), e;
	}, []);
	return n.reverseMonths ? m.reverse() : m;
}
// node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
function Kn(e, t) {
	let { startMonth: n, endMonth: r } = e, { startOfYear: i, startOfDay: a, startOfMonth: o, endOfMonth: s, addYears: c, endOfYear: l, newDate: u, today: d } = t, { fromYear: f, toYear: p, fromMonth: m, toMonth: h } = e;
	!n && m && (n = m), !n && f && (n = t.newDate(f, 0, 1)), !r && h && (r = h), !r && p && (r = u(p, 11, 31));
	let g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
	return n ? n = o(n) : f ? n = u(f, 0, 1) : !n && g && (n = i(c(e.today ?? d(), -100))), r ? r = s(r) : p ? r = u(p, 11, 31) : !r && g && (r = l(e.today ?? d())), [n && a(n), r && a(r)];
}
// node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
function qn(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a = 1 } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a : 1, u = o(e);
	if (!t || !(c(t, e) < a)) return s(u, l);
}
// node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
function Jn(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a ?? 1 : 1, u = o(e);
	if (!t || !(c(u, t) <= 0)) return s(u, -l);
}
// node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
function Yn(e) {
	return e.reduce((e, t) => [...e, ...t.weeks], []);
}
// node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
function Xn(e, t) {
	let [n, r] = (0, S.useState)(e);
	return [t === void 0 ? n : t, r];
}
// node_modules/react-day-picker/dist/esm/useCalendar.js
function Zn(e, t) {
	let [n, r] = Kn(e, t), { startOfMonth: i, endOfMonth: a } = t, o = Wn(e, n, r, t), [s, c] = Xn(o, e.month ? o : void 0);
	(0, S.useEffect)(() => {
		let i = Wn(e, n, r, t);
		c(i);
	}, [e.timeZone]);
	let l = Un(s, r, e, t), u = Gn(l, Vn(l, e.endMonth ? a(e.endMonth) : void 0, e, t), e, t), d = Yn(u), f = Hn(u), p = Jn(s, n, e, t), m = qn(s, r, e, t), { disableNavigation: h, onMonthChange: g } = e, _ = (e) => d.some((t) => t.days.some((t) => t.isEqualTo(e))), v = (e) => {
		if (h) return;
		let t = i(e);
		n && t < i(n) && (t = i(n)), r && t > i(r) && (t = i(r)), c(t), g?.(t);
	};
	return {
		months: u,
		weeks: d,
		days: f,
		navStart: n,
		navEnd: r,
		previousMonth: p,
		nextMonth: m,
		goToMonth: v,
		goToDay: (e) => {
			_(e) || v(e.date);
		}
	};
}
// node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var Q;
(function(e) {
	e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Q ||= {});
function Qn(e) {
	return !e[w.disabled] && !e[w.hidden] && !e[w.outside];
}
function $n(e, t, n, r) {
	let i, a = -1;
	for (let o of e) {
		let e = t(o);
		Qn(e) && (e[w.focused] && a < Q.FocusedModifier ? (i = o, a = Q.FocusedModifier) : r?.isEqualTo(o) && a < Q.LastFocused ? (i = o, a = Q.LastFocused) : n(o.date) && a < Q.Selected ? (i = o, a = Q.Selected) : e[w.today] && a < Q.Today && (i = o, a = Q.Today));
	}
	return i ||= e.find((e) => Qn(t(e))), i;
}
// node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
function er(e, t, n, r, i, a, o) {
	let { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: u, addWeeks: d, addYears: f, endOfBroadcastWeek: p, endOfISOWeek: m, endOfWeek: h, max: g, min: _, startOfBroadcastWeek: v, startOfISOWeek: y, startOfWeek: b } = o, x = {
		day: l,
		week: d,
		month: u,
		year: f,
		startOfWeek: (e) => c ? v(e, o) : s ? y(e) : b(e),
		endOfWeek: (e) => c ? p(e) : s ? m(e) : h(e)
	}[e](n, t === "after" ? 1 : -1);
	return t === "before" && r ? x = g([r, x]) : t === "after" && i && (x = _([i, x])), x;
}
// node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
function tr(e, t, n, r, i, a, o, s = 0) {
	if (s > 365) return;
	let c = er(e, t, n.date, r, i, a, o), l = !!(a.disabled && Y(c, a.disabled, o)), u = !!(a.hidden && Y(c, a.hidden, o)), d = new gt(c, c, o);
	return !l && !u ? d : tr(e, t, d, r, i, a, o, s + 1);
}
// node_modules/react-day-picker/dist/esm/useFocus.js
function nr(e, t, n, r, i) {
	let { autoFocus: a } = e, [o, s] = (0, S.useState)(), c = $n(t.days, n, r || (() => !1), o), [l, u] = (0, S.useState)(a ? c : void 0);
	return {
		isFocusTarget: (e) => !!c?.isEqualTo(e),
		setFocused: u,
		focused: l,
		blur: () => {
			s(l), u(void 0);
		},
		moveFocus: (n, r) => {
			if (!l) return;
			let a = tr(n, r, l, t.navStart, t.navEnd, e, i);
			a && (t.goToDay(a), u(a));
		}
	};
}
// node_modules/react-day-picker/dist/esm/selection/useMulti.js
function rr(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = Xn(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t, l = (e) => s?.some((t) => c(t, e)) ?? !1, { min: u, max: d } = e;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = [...s ?? []];
			if (l(e)) {
				if (s?.length === u || r && s?.length === 1) return;
				a = s?.filter((t) => !c(t, e));
			} else a = s?.length === d ? [e] : [...a, e];
			return i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: l
	};
}
// node_modules/react-day-picker/dist/esm/utils/addToRange.js
function ir(e, t, n = 0, r = 0, i = !1, a = q) {
	let { from: o, to: s } = t || {}, { isSameDay: c, isAfter: l, isBefore: u } = a, d;
	if (!o && !s) d = {
		from: e,
		to: n > 0 ? void 0 : e
	};
	else if (o && !s) d = c(o, e) ? i ? {
		from: o,
		to: void 0
	} : void 0 : u(e, o) ? {
		from: e,
		to: o
	} : {
		from: o,
		to: e
	};
	else if (o && s) {
		if (c(o, e) && c(s, e)) d = i ? {
			from: o,
			to: s
		} : void 0;
		else if (c(o, e)) d = {
			from: o,
			to: n > 0 ? void 0 : e
		};
		else if (c(s, e)) d = {
			from: e,
			to: n > 0 ? void 0 : e
		};
		else if (u(e, o)) d = {
			from: e,
			to: s
		};
		else if (l(e, o)) d = {
			from: o,
			to: e
		};
		else if (l(e, s)) d = {
			from: o,
			to: e
		};
		else throw Error("Invalid range");
	}
	if (d?.from && d?.to) {
		let t = a.differenceInCalendarDays(d.to, d.from);
		(r > 0 && t > r || n > 1 && t < n) && (d = {
			from: e,
			to: void 0
		});
	}
	return d;
}
// node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
function ar(e, t, n = q) {
	let r = Array.isArray(t) ? t : [t], i = e.from, a = n.differenceInCalendarDays(e.to, e.from), o = Math.min(a, 6);
	for (let e = 0; e <= o; e++) {
		if (r.includes(i.getDay())) return !0;
		i = n.addDays(i, 1);
	}
	return !1;
}
// node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
function or(e, t, n = q) {
	return J(e, t.from, !1, n) || J(e, t.to, !1, n) || J(t, e.from, !1, n) || J(t, e.to, !1, n);
}
// node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
function sr(e, t, n = q) {
	let r = Array.isArray(t) ? t : [t];
	if (r.filter((e) => typeof e != "function").some((t) => typeof t == "boolean" ? t : n.isDate(t) ? J(e, t, !1, n) : wt(t, n) ? t.some((t) => J(e, t, !1, n)) : bt(t) ? t.from && t.to ? or(e, {
		from: t.from,
		to: t.to
	}, n) : !1 : Ct(t) ? ar(e, t.dayOfWeek, n) : yt(t) ? n.isAfter(t.before, t.after) ? or(e, {
		from: n.addDays(t.after, 1),
		to: n.addDays(t.before, -1)
	}, n) : Y(e.from, t, n) || Y(e.to, t, n) : xt(t) || St(t) ? Y(e.from, t, n) || Y(e.to, t, n) : !1)) return !0;
	let i = r.filter((e) => typeof e == "function");
	if (i.length) {
		let t = e.from, r = n.differenceInCalendarDays(e.to, e.from);
		for (let e = 0; e <= r; e++) {
			if (i.some((e) => e(t))) return !0;
			t = n.addDays(t, 1);
		}
	}
	return !1;
}
// node_modules/react-day-picker/dist/esm/selection/useRange.js
function cr(e, t) {
	let { disabled: n, excludeDisabled: r, selected: i, required: a, onSelect: o } = e, [s, c] = Xn(i, o ? i : void 0), l = o ? i : s;
	return {
		selected: l,
		select: (i, s, u) => {
			let { min: d, max: f } = e, p = i ? ir(i, l, d, f, a, t) : void 0;
			return r && n && p?.from && p.to && sr({
				from: p.from,
				to: p.to
			}, n, t) && (p.from = i, p.to = void 0), o || c(p), o?.(p, i, s, u), p;
		},
		isSelected: (e) => l && J(l, e, !1, t)
	};
}
// node_modules/react-day-picker/dist/esm/selection/useSingle.js
function lr(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = Xn(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = e;
			return !r && s && s && c(e, s) && (a = void 0), i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: (e) => s ? c(s, e) : !1
	};
}
// node_modules/react-day-picker/dist/esm/useSelection.js
function ur(e, t) {
	let n = lr(e, t), r = rr(e, t), i = cr(e, t);
	switch (e.mode) {
		case "single": return n;
		case "multiple": return r;
		case "range": return i;
		default: return;
	}
}
// node_modules/react-day-picker/dist/esm/DayPicker.js
function dr(e) {
	let t = e;
	t.timeZone && (t = { ...e }, t.today && (t.today = new x(t.today, t.timeZone)), t.month && (t.month = new x(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new x(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new x(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new x(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new x(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((e) => new x(e, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
		from: t.selected.from ? new x(t.selected.from, t.timeZone) : void 0,
		to: t.selected.to ? new x(t.selected.to, t.timeZone) : void 0
	}));
	let { components: n, formatters: r, labels: i, dateLib: a, locale: o, classNames: s } = (0, S.useMemo)(() => {
		let e = {
			...Ae,
			...t.locale
		};
		return {
			dateLib: new K({
				locale: e,
				weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
				firstWeekContainsDate: t.firstWeekContainsDate,
				useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
				useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
				timeZone: t.timeZone,
				numerals: t.numerals
			}, t.dateLib),
			components: tn(t.components),
			formatters: hn(t.formatters),
			labels: {
				...Nn,
				...t.labels
			},
			locale: e,
			classNames: {
				...rn(),
				...t.classNames
			}
		};
	}, [
		t.locale,
		t.broadcastCalendar,
		t.weekStartsOn,
		t.firstWeekContainsDate,
		t.useAdditionalWeekYearTokens,
		t.useAdditionalDayOfYearTokens,
		t.timeZone,
		t.numerals,
		t.dateLib,
		t.components,
		t.formatters,
		t.labels,
		t.classNames
	]), { captionLayout: c, mode: l, navLayout: u, numberOfMonths: d = 1, onDayBlur: f, onDayClick: p, onDayFocus: m, onDayKeyDown: h, onDayMouseEnter: g, onDayMouseLeave: _, onNextClick: v, onPrevClick: y, showWeekNumber: b, styles: E } = t, { formatCaption: ee, formatDay: te, formatMonthDropdown: ne, formatWeekNumber: D, formatWeekNumberHeader: O, formatWeekdayName: re, formatYearDropdown: ie } = r, ae = Zn(t, a), { days: k, months: A, navStart: j, navEnd: M, previousMonth: N, nextMonth: P, goToMonth: F } = ae, I = Tt(k, t, j, M, a), { isSelected: oe, select: se, selected: L } = ur(t, a) ?? {}, { blur: ce, focused: le, isFocusTarget: ue, moveFocus: de, setFocused: R } = nr(t, ae, I, oe ?? (() => !1), a), { labelDayButton: fe, labelGridcell: pe, labelGrid: me, labelMonthDropdown: he, labelNav: ge, labelPrevious: _e, labelNext: ve, labelWeekday: ye, labelWeekNumber: be, labelWeekNumberHeader: xe, labelYearDropdown: Se } = i, Ce = (0, S.useMemo)(() => vn(a, t.ISOWeek), [a, t.ISOWeek]), we = l !== void 0 || p !== void 0, Te = (0, S.useCallback)(() => {
		N && (F(N), y?.(N));
	}, [
		N,
		F,
		y
	]), z = (0, S.useCallback)(() => {
		P && (F(P), v?.(P));
	}, [
		F,
		P,
		v
	]), B = (0, S.useCallback)((e, t) => (n) => {
		n.preventDefault(), n.stopPropagation(), R(e), se?.(e.date, t, n), p?.(e.date, t, n);
	}, [
		se,
		p,
		R
	]), Ee = (0, S.useCallback)((e, t) => (n) => {
		R(e), m?.(e.date, t, n);
	}, [m, R]), V = (0, S.useCallback)((e, t) => (n) => {
		ce(), f?.(e.date, t, n);
	}, [ce, f]), De = (0, S.useCallback)((e, n) => (r) => {
		let i = {
			ArrowLeft: [r.shiftKey ? "month" : "day", t.dir === "rtl" ? "after" : "before"],
			ArrowRight: [r.shiftKey ? "month" : "day", t.dir === "rtl" ? "before" : "after"],
			ArrowDown: [r.shiftKey ? "year" : "week", "after"],
			ArrowUp: [r.shiftKey ? "year" : "week", "before"],
			PageUp: [r.shiftKey ? "year" : "month", "before"],
			PageDown: [r.shiftKey ? "year" : "month", "after"],
			Home: ["startOfWeek", "before"],
			End: ["endOfWeek", "after"]
		};
		if (i[r.key]) {
			r.preventDefault(), r.stopPropagation();
			let [e, t] = i[r.key];
			de(e, t);
		}
		h?.(e.date, n, r);
	}, [
		de,
		h,
		t.dir
	]), Oe = (0, S.useCallback)((e, t) => (n) => {
		g?.(e.date, t, n);
	}, [g]), ke = (0, S.useCallback)((e, t) => (n) => {
		_?.(e.date, t, n);
	}, [_]), je = (0, S.useCallback)((e) => (t) => {
		let n = Number(t.target.value), r = a.setMonth(a.startOfMonth(e), n);
		F(r);
	}, [a, F]), Me = (0, S.useCallback)((e) => (t) => {
		let n = Number(t.target.value), r = a.setYear(a.startOfMonth(e), n);
		F(r);
	}, [a, F]), { className: Ne, style: Pe } = (0, S.useMemo)(() => ({
		className: [s[C.Root], t.className].filter(Boolean).join(" "),
		style: {
			...E?.[C.Root],
			...t.style
		}
	}), [
		s,
		t.className,
		t.style,
		E
	]), Fe = nn(t), H = (0, S.useRef)(null);
	Bn(H, !!t.animate, {
		classNames: s,
		months: A,
		focused: le,
		dateLib: a
	});
	let U = {
		dayPickerProps: t,
		selected: L,
		select: se,
		isSelected: oe,
		months: A,
		nextMonth: P,
		previousMonth: N,
		goToMonth: F,
		getModifiers: I,
		components: n,
		classNames: s,
		styles: E,
		labels: i,
		formatters: r
	};
	return S.createElement(zt.Provider, { value: U }, S.createElement(n.Root, {
		rootRef: t.animate ? H : void 0,
		className: Ne,
		style: Pe,
		dir: t.dir,
		id: t.id,
		lang: t.lang,
		nonce: t.nonce,
		title: t.title,
		role: t.role,
		"aria-label": t["aria-label"],
		...Fe
	}, S.createElement(n.Months, {
		className: s[C.Months],
		style: E?.[C.Months]
	}, !t.hideNavigation && !u && S.createElement(n.Nav, {
		"data-animated-nav": t.animate ? "true" : void 0,
		className: s[C.Nav],
		style: E?.[C.Nav],
		"aria-label": ge(),
		onPreviousClick: Te,
		onNextClick: z,
		previousMonth: N,
		nextMonth: P
	}), A.map((e, i) => {
		let f = gn(e.date, j, M, r, a), p = yn(j, M, r, a);
		return S.createElement(n.Month, {
			"data-animated-month": t.animate ? "true" : void 0,
			className: s[C.Month],
			style: E?.[C.Month],
			key: i,
			displayIndex: i,
			calendarMonth: e
		}, u === "around" && !t.hideNavigation && i === 0 && S.createElement(n.PreviousMonthButton, {
			type: "button",
			className: s[C.PreviousMonthButton],
			tabIndex: N ? void 0 : -1,
			"aria-disabled": !N || void 0,
			"aria-label": _e(N),
			onClick: Te,
			"data-animated-button": t.animate ? "true" : void 0
		}, S.createElement(n.Chevron, {
			disabled: !N || void 0,
			className: s[C.Chevron],
			orientation: t.dir === "rtl" ? "right" : "left"
		})), S.createElement(n.MonthCaption, {
			"data-animated-caption": t.animate ? "true" : void 0,
			className: s[C.MonthCaption],
			style: E?.[C.MonthCaption],
			calendarMonth: e,
			displayIndex: i
		}, c?.startsWith("dropdown") ? S.createElement(n.DropdownNav, {
			className: s[C.Dropdowns],
			style: E?.[C.Dropdowns]
		}, c === "dropdown" || c === "dropdown-months" ? S.createElement(n.MonthsDropdown, {
			className: s[C.MonthsDropdown],
			"aria-label": he(),
			classNames: s,
			components: n,
			disabled: !!t.disableNavigation,
			onChange: je(e.date),
			options: f,
			style: E?.[C.Dropdown],
			value: a.getMonth(e.date)
		}) : S.createElement("span", null, ne(e.date, a)), c === "dropdown" || c === "dropdown-years" ? S.createElement(n.YearsDropdown, {
			className: s[C.YearsDropdown],
			"aria-label": Se(a.options),
			classNames: s,
			components: n,
			disabled: !!t.disableNavigation,
			onChange: Me(e.date),
			options: p,
			style: E?.[C.Dropdown],
			value: a.getYear(e.date)
		}) : S.createElement("span", null, ie(e.date, a)), S.createElement("span", {
			role: "status",
			"aria-live": "polite",
			style: {
				border: 0,
				clip: "rect(0 0 0 0)",
				height: "1px",
				margin: "-1px",
				overflow: "hidden",
				padding: 0,
				position: "absolute",
				width: "1px",
				whiteSpace: "nowrap",
				wordWrap: "normal"
			}
		}, ee(e.date, a.options, a))) : S.createElement(n.CaptionLabel, {
			className: s[C.CaptionLabel],
			role: "status",
			"aria-live": "polite"
		}, ee(e.date, a.options, a))), u === "around" && !t.hideNavigation && i === d - 1 && S.createElement(n.NextMonthButton, {
			type: "button",
			className: s[C.NextMonthButton],
			tabIndex: P ? void 0 : -1,
			"aria-disabled": !P || void 0,
			"aria-label": ve(P),
			onClick: z,
			"data-animated-button": t.animate ? "true" : void 0
		}, S.createElement(n.Chevron, {
			disabled: !P || void 0,
			className: s[C.Chevron],
			orientation: t.dir === "rtl" ? "left" : "right"
		})), i === d - 1 && u === "after" && !t.hideNavigation && S.createElement(n.Nav, {
			"data-animated-nav": t.animate ? "true" : void 0,
			className: s[C.Nav],
			style: E?.[C.Nav],
			"aria-label": ge(),
			onPreviousClick: Te,
			onNextClick: z,
			previousMonth: N,
			nextMonth: P
		}), S.createElement(n.MonthGrid, {
			role: "grid",
			"aria-multiselectable": l === "multiple" || l === "range",
			"aria-label": me(e.date, a.options, a) || void 0,
			className: s[C.MonthGrid],
			style: E?.[C.MonthGrid]
		}, !t.hideWeekdays && S.createElement(n.Weekdays, {
			"data-animated-weekdays": t.animate ? "true" : void 0,
			className: s[C.Weekdays],
			style: E?.[C.Weekdays]
		}, b && S.createElement(n.WeekNumberHeader, {
			"aria-label": xe(a.options),
			className: s[C.WeekNumberHeader],
			style: E?.[C.WeekNumberHeader],
			scope: "col"
		}, O()), Ce.map((e, t) => S.createElement(n.Weekday, {
			"aria-label": ye(e, a.options, a),
			className: s[C.Weekday],
			key: t,
			style: E?.[C.Weekday],
			scope: "col"
		}, re(e, a.options, a)))), S.createElement(n.Weeks, {
			"data-animated-weeks": t.animate ? "true" : void 0,
			className: s[C.Weeks],
			style: E?.[C.Weeks]
		}, e.weeks.map((e, r) => S.createElement(n.Week, {
			className: s[C.Week],
			key: e.weekNumber,
			style: E?.[C.Week],
			week: e
		}, b && S.createElement(n.WeekNumber, {
			week: e,
			style: E?.[C.WeekNumber],
			"aria-label": be(e.weekNumber, { locale: o }),
			className: s[C.WeekNumber],
			scope: "row",
			role: "rowheader"
		}, D(e.weekNumber, a)), e.days.map((e) => {
			let { date: r } = e, i = I(e);
			if (i[w.focused] = !i.hidden && !!le?.isEqualTo(e), i[T.selected] = oe?.(r) || i.selected, bt(L)) {
				let { from: e, to: t } = L;
				i[T.range_start] = !!(e && t && a.isSameDay(r, e)), i[T.range_end] = !!(e && t && a.isSameDay(r, t)), i[T.range_middle] = J(L, r, !0, a);
			}
			let o = _n(i, E, t.modifiersStyles), c = Et(i, s, t.modifiersClassNames), l = !we && !i.hidden ? pe(r, i, a.options, a) : void 0;
			return S.createElement(n.Day, {
				key: `${a.format(r, "yyyy-MM-dd")}_${a.format(e.displayMonth, "yyyy-MM")}`,
				day: e,
				modifiers: i,
				className: c.join(" "),
				style: o,
				role: "gridcell",
				"aria-selected": i.selected || void 0,
				"aria-label": l,
				"data-day": a.format(r, "yyyy-MM-dd"),
				"data-month": e.outside ? a.format(r, "yyyy-MM") : void 0,
				"data-selected": i.selected || void 0,
				"data-disabled": i.disabled || void 0,
				"data-hidden": i.hidden || void 0,
				"data-outside": e.outside || void 0,
				"data-focused": i.focused || void 0,
				"data-today": i.today || void 0
			}, !i.hidden && we ? S.createElement(n.DayButton, {
				className: s[C.DayButton],
				style: E?.[C.DayButton],
				type: "button",
				day: e,
				modifiers: i,
				disabled: i.disabled || void 0,
				tabIndex: ue(e) ? 0 : -1,
				"aria-label": fe(r, i, a.options, a),
				onClick: B(e, i),
				onBlur: V(e, i),
				onFocus: Ee(e, i),
				onKeyDown: De(e, i),
				onMouseEnter: Oe(e, i),
				onMouseLeave: ke(e, i)
			}, te(r, a.options, a)) : !i.hidden && te(e.date, a.options, a));
		}))))));
	})), t.footer && S.createElement(n.Footer, {
		className: s[C.Footer],
		style: E?.[C.Footer],
		role: "status",
		"aria-live": "polite"
	}, t.footer)));
}
// upstream/registry/bases/base/ui/calendar.tsx
var $ = s();
function fr({ className: e, classNames: t, showOutsideDays: n = !0, captionLayout: a = "label", buttonVariant: s = "ghost", locale: c, formatters: l, components: u, ...d }) {
	let f = rn();
	return /* @__PURE__ */ (0, $.jsx)(dr, {
		showOutsideDays: n,
		className: r("cn-calendar group/calendar bg-background in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, e),
		captionLayout: a,
		locale: c,
		formatters: {
			formatMonthDropdown: (e) => e.toLocaleString(c?.code, { month: "short" }),
			...l
		},
		classNames: {
			root: r("w-fit", f.root),
			months: r("relative flex flex-col gap-4 md:flex-row", f.months),
			month: r("flex w-full flex-col gap-4", f.month),
			nav: r("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", f.nav),
			button_previous: r(i({ variant: s }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", f.button_previous),
			button_next: r(i({ variant: s }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", f.button_next),
			month_caption: r("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", f.month_caption),
			dropdowns: r("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", f.dropdowns),
			dropdown_root: r("cn-calendar-dropdown-root relative rounded-(--cell-radius)", f.dropdown_root),
			dropdown: r("absolute inset-0 bg-popover opacity-0", f.dropdown),
			caption_label: r("font-medium select-none", a === "label" ? "cn-calendar-caption text-sm" : "cn-calendar-caption-label flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground", f.caption_label),
			month_grid: r("w-full border-collapse", f.month_grid),
			weekdays: r("flex", f.weekdays),
			weekday: r("flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none", f.weekday),
			week: r("mt-2 flex w-full", f.week),
			week_number_header: r("w-(--cell-size) select-none", f.week_number_header),
			week_number: r("text-[0.8rem] text-muted-foreground select-none", f.week_number),
			day: r("group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)", d.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)", f.day),
			range_start: r("relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted", f.range_start),
			range_middle: r("rounded-none", f.range_middle),
			range_end: r("relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted", f.range_end),
			today: r("rounded-(--cell-radius) bg-muted text-foreground data-[selected=true]:rounded-none", f.today),
			outside: r("text-muted-foreground aria-selected:text-muted-foreground", f.outside),
			disabled: r("text-muted-foreground opacity-50", f.disabled),
			hidden: r("invisible", f.hidden),
			...t
		},
		components: {
			Root: ({ className: e, rootRef: t, ...n }) => /* @__PURE__ */ (0, $.jsx)("div", {
				"data-slot": "calendar",
				ref: t,
				className: r(e),
				...n
			}),
			Chevron: ({ className: e, orientation: t, ...n }) => t === "left" ? /* @__PURE__ */ (0, $.jsx)(o, {
				lucide: "ChevronLeftIcon",
				tabler: "IconChevronLeft",
				hugeicons: "ArrowLeftIcon",
				phosphor: "CaretLeftIcon",
				remixicon: "RiArrowLeftSLine",
				className: r("cn-rtl-flip size-4", e),
				...n
			}) : t === "right" ? /* @__PURE__ */ (0, $.jsx)(o, {
				lucide: "ChevronRightIcon",
				tabler: "IconChevronRight",
				hugeicons: "ArrowRightIcon",
				phosphor: "CaretRightIcon",
				remixicon: "RiArrowRightSLine",
				className: r("cn-rtl-flip size-4", e),
				...n
			}) : /* @__PURE__ */ (0, $.jsx)(o, {
				lucide: "ChevronDownIcon",
				tabler: "IconChevronDown",
				hugeicons: "ArrowDownIcon",
				phosphor: "CaretDownIcon",
				remixicon: "RiArrowDownSLine",
				className: r("size-4", e),
				...n
			}),
			DayButton: ({ ...e }) => /* @__PURE__ */ (0, $.jsx)(pr, {
				locale: c,
				...e
			}),
			WeekNumber: ({ children: e, ...t }) => /* @__PURE__ */ (0, $.jsx)("td", {
				...t,
				children: /* @__PURE__ */ (0, $.jsx)("div", {
					className: "flex size-(--cell-size) items-center justify-center text-center",
					children: e
				})
			}),
			...u
		},
		...d
	});
}
function pr({ className: e, day: t, modifiers: n, locale: i, ...o }) {
	let s = rn(), c = S.useRef(null);
	return S.useEffect(() => {
		n.focused && c.current?.focus();
	}, [n.focused]), /* @__PURE__ */ (0, $.jsx)(a, {
		variant: "ghost",
		size: "icon",
		"data-day": t.date.toLocaleDateString(i?.code),
		"data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
		"data-range-start": n.range_start,
		"data-range-end": n.range_end,
		"data-range-middle": n.range_middle,
		className: r("cn-calendar-day-button relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70", s.day, e),
		...o
	});
}
export { et as n, fr as t };
