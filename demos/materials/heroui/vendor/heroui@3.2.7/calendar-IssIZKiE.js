import { _ as e, a as t, b as n, c as r, h as i, i as a, l as o, m as s, n as c, o as l, p as u, r as d, s as f, t as p, u as m, v as h, y as g } from "./calendar-day-view-grid-header-B5WNMglO.js";
import { n as _, t as v } from "./dist-qnEEIXtT.js";
import { a as y, n as b, r as x } from "./useDateFormatter-l1bqfb5m.js";
import { t as S } from "./useControlledState-BbVlCDcL.js";
import { i as C, n as w, t as T } from "./jsx-runtime-C1t0izHF.js";
import { n as E } from "./Button-Cnex0dS4.js";
import { t as D } from "./I18nProvider-zGzu-4zN.js";
import { r as O, t as k } from "./compose-ClIOcrt6.js";
import { t as A } from "./dom-CdwaDRL5.js";
import { o as j, s as M } from "./icons-BUH88Ubz.js";
// node_modules/@heroui/styles/dist/components/calendar/calendar.styles.js
var N = _({
	defaultVariants: {},
	slots: {
		base: "calendar",
		cell: "calendar__cell",
		cellIndicator: "calendar__cell-indicator",
		grid: "calendar__grid",
		gridBody: "calendar__grid-body",
		gridHeader: "calendar__grid-header",
		gridRow: "calendar__grid-row",
		header: "calendar__header",
		headerCell: "calendar__header-cell",
		heading: "calendar__heading",
		navButton: "calendar__nav-button",
		navButtonIcon: "calendar__nav-button-icon"
	},
	variants: {}
}), P = /* @__PURE__ */ C(w(), 1), F = T(), I = /*#__PURE__*/ (0, P.createContext)({}), L = ({ children: e, dayViewBase: t, slots: n, timeZone: r, visibleRange: i }) => {
	let { end: a, start: o } = i, s = P.useMemo(() => t ? {
		...t,
		timeZone: r,
		visibleRange: {
			end: a,
			start: o
		}
	} : void 0, [
		t,
		r,
		a,
		o
	]), c = P.useMemo(() => ({
		dayView: s,
		slots: n
	}), [s, n]);
	return /*#__PURE__*/ (0, F.jsx)(I, {
		value: c,
		children: e
	});
};
function R({ children: e, className: t, defaultYearPickerOpen: r = !1, firstDayOfWeek: i, isYearPickerOpen: a, maxValue: s, minValue: c, onYearPickerOpenChange: l, visibleDuration: u, ...d }) {
	let f = u?.weeks != null, p = u?.days != null, m = u?.days, { locale: h } = D(), _ = P.useMemo(() => N(), []), C = P.useRef(null), [w, T] = S(a, r, l), E = P.useMemo(() => {
		let e = new b(h).resolvedOptions().calendar;
		return x(e);
	}, [h]), k = P.useMemo(() => n(E.identifier), [E.identifier]), A = P.useMemo(() => c ?? new y(E, 1900 + k, 1, 1), [
		c,
		E,
		k
	]), j = P.useMemo(() => s ?? new y(E, 2099 + k, 12, 31), [
		s,
		E,
		k
	]), M = P.useMemo(() => p && m != null ? {
		days: m,
		firstDayOfWeek: i
	} : void 0, [
		p,
		m,
		i
	]), I = P.useMemo(() => ({
		calendarGridSlot: "calendar-grid",
		isYearPickerOpen: w,
		setIsYearPickerOpen: T,
		calendarRef: C
	}), [w, T]);
	return /*#__PURE__*/ (0, F.jsx)(o, {
		value: I,
		children: /*#__PURE__*/ (0, F.jsx)(g, {
			ref: C,
			"data-slot": "calendar",
			firstDayOfWeek: i,
			maxValue: j,
			minValue: A,
			visibleDuration: u,
			...d,
			className: O(t, v(_.base(), f && "calendar--week-view", p && "calendar--day-view")),
			children: (t) => /*#__PURE__*/ (0, F.jsx)(L, {
				dayViewBase: M,
				slots: _,
				timeZone: t.state.timeZone,
				visibleRange: t.state.visibleRange,
				children: typeof e == "function" ? e(t) : e
			})
		})
	});
}
R.displayName = "HeroUI.Calendar";
var z = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, P.use)(I);
	return /*#__PURE__*/ (0, F.jsx)(A.div, {
		className: k(r?.header, t),
		"data-slot": "calendar-header",
		...n,
		children: e
	});
};
z.displayName = "HeroUI.Calendar.Header";
var B = ({ className: e, ...t }) => {
	let { slots: n } = (0, P.use)(I);
	return /*#__PURE__*/ (0, F.jsx)(i, {
		"data-slot": "calendar-heading",
		...t,
		className: k(n?.heading, e)
	});
};
B.displayName = "HeroUI.Calendar.Heading";
var V = ({ children: e, className: t, slot: n, ...r }) => {
	let { slots: i } = (0, P.use)(I);
	return /*#__PURE__*/ (0, F.jsx)(E, {
		"data-slot": "calendar-nav-button",
		slot: n,
		...r,
		className: O(t, i?.navButton()),
		children: e || (n === "previous" ? /*#__PURE__*/ (0, F.jsx)(j, {
			className: i?.navButtonIcon(),
			"data-slot": "calendar-nav-button-icon"
		}) : /*#__PURE__*/ (0, F.jsx)(M, {
			className: i?.navButtonIcon(),
			"data-slot": "calendar-nav-button-icon"
		}))
	});
};
V.displayName = "HeroUI.Calendar.NavButton";
var H = ({ children: e, className: t, weekdayStyle: n = "short", ...r }) => {
	let i = (0, P.use)(I), { dayView: a, slots: o } = i, s = P.useMemo(() => ({
		...i,
		dayView: a ? {
			...a,
			weekdayStyle: n
		} : void 0
	}), [
		i,
		a,
		n
	]);
	return /*#__PURE__*/ (0, F.jsx)(I, {
		value: s,
		children: /*#__PURE__*/ (0, F.jsx)(u, {
			"data-slot": "calendar-grid",
			weekdayStyle: n,
			...r,
			className: k(o?.grid, t),
			children: e
		})
	});
};
H.displayName = "HeroUI.Calendar.Grid";
var U = ({ children: e, className: t, ...n }) => {
	let { dayView: r, slots: i } = (0, P.use)(I);
	return r && r.days >= 7 && typeof e == "function" ? /*#__PURE__*/ (0, F.jsx)(p, {
		className: k(i?.gridHeader, t),
		"data-slot": "calendar-grid-header",
		firstDayOfWeek: r.firstDayOfWeek,
		timeZone: r.timeZone,
		visibleRange: r.visibleRange,
		weekdayStyle: r.weekdayStyle,
		children: e
	}) : /*#__PURE__*/ (0, F.jsx)(m, {
		"data-slot": "calendar-grid-header",
		...n,
		className: k(i?.gridHeader, t),
		children: e
	});
};
U.displayName = "HeroUI.Calendar.GridHeader";
var W = ({ children: e, className: t, ...n }) => {
	let { dayView: r, slots: i } = (0, P.use)(I);
	return r && r.days >= 7 && typeof e == "function" ? /*#__PURE__*/ (0, F.jsx)(c, {
		className: k(i?.gridBody, t),
		"data-slot": "calendar-grid-body",
		firstDayOfWeek: r.firstDayOfWeek,
		visibleRange: r.visibleRange,
		children: e
	}) : /*#__PURE__*/ (0, F.jsx)(h, {
		"data-slot": "calendar-grid-body",
		...n,
		className: k(i?.gridBody, t),
		children: e
	});
};
W.displayName = "HeroUI.Calendar.GridBody";
var G = ({ className: t, ...n }) => {
	let { slots: r } = (0, P.use)(I);
	return /*#__PURE__*/ (0, F.jsx)(e, {
		"data-slot": "calendar-header-cell",
		...n,
		className: k(r?.headerCell, t)
	});
};
G.displayName = "HeroUI.Calendar.HeaderCell";
var K = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, P.use)(I);
	return /*#__PURE__*/ (0, F.jsx)(s, {
		"data-slot": "calendar-cell",
		...n,
		className: O(t, r?.cell()),
		children: (t) => {
			let { formattedDate: n } = t;
			return typeof e == "function" ? e(t) : e || n;
		}
	});
};
K.displayName = "HeroUI.Calendar.Cell";
var q = ({ className: e, ...t }) => {
	let { slots: n } = (0, P.use)(I);
	return /*#__PURE__*/ (0, F.jsx)(A.span, {
		"aria-hidden": "true",
		className: k(n?.cellIndicator, e),
		"data-slot": "calendar-cell-indicator",
		...t
	});
};
q.displayName = "HeroUI.Calendar.CellIndicator";
// node_modules/@heroui/react/dist/components/calendar/index.js
var J = Object.assign(R, {
	Root: R,
	Header: z,
	Heading: B,
	NavButton: V,
	Grid: H,
	GridHeader: U,
	GridBody: W,
	HeaderCell: G,
	Cell: K,
	CellIndicator: q,
	YearPickerTrigger: l,
	YearPickerTriggerHeading: f,
	YearPickerTriggerIndicator: r,
	YearPickerGrid: a,
	YearPickerGridBody: t,
	YearPickerCell: d
});
export { J as t };
