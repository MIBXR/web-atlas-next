import { _ as e, a as t, b as n, c as r, g as i, h as a, i as o, l as s, m as c, n as l, o as u, p as d, r as f, s as p, t as m, u as h, v as g } from "./calendar-day-view-grid-header-B5WNMglO.js";
import { n as _, t as v } from "./dist-qnEEIXtT.js";
import { a as y, n as b, r as x } from "./useDateFormatter-l1bqfb5m.js";
import { t as S } from "./useControlledState-BbVlCDcL.js";
import { i as C, n as w, t as T } from "./jsx-runtime-C1t0izHF.js";
import { n as E } from "./Button-Cnex0dS4.js";
import { t as D } from "./I18nProvider-zGzu-4zN.js";
import { t as O } from "./assertion-CKDD-Pvc.js";
import { r as k, t as A } from "./compose-ClIOcrt6.js";
import { t as j } from "./dom-CdwaDRL5.js";
import { o as M, s as N } from "./icons-BUH88Ubz.js";
// node_modules/@heroui/styles/dist/components/range-calendar/range-calendar.styles.js
var P = _({
	defaultVariants: {},
	slots: {
		base: "range-calendar",
		cell: "range-calendar__cell",
		cellIndicator: "range-calendar__cell-indicator",
		grid: "range-calendar__grid",
		gridBody: "range-calendar__grid-body",
		gridHeader: "range-calendar__grid-header",
		gridRow: "range-calendar__grid-row",
		header: "range-calendar__header",
		headerCell: "range-calendar__header-cell",
		heading: "range-calendar__heading",
		navButton: "range-calendar__nav-button",
		navButtonIcon: "range-calendar__nav-button-icon"
	},
	variants: {}
}), F = /* @__PURE__ */ C(w(), 1), I = T(), L = /*#__PURE__*/ (0, F.createContext)({}), R = ({ children: e, dayViewBase: t, slots: n, timeZone: r, visibleRange: i }) => {
	let { end: a, start: o } = i, s = F.useMemo(() => t ? {
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
	]), c = F.useMemo(() => ({
		dayView: s,
		slots: n
	}), [s, n]);
	return /*#__PURE__*/ (0, I.jsx)(L, {
		value: c,
		children: e
	});
};
function z({ children: e, className: t, defaultYearPickerOpen: r = !1, firstDayOfWeek: a, isYearPickerOpen: o, maxValue: c, minValue: l, onYearPickerOpenChange: u, visibleDuration: d, ...f }) {
	let p = d?.weeks != null, m = d?.days != null, h = d?.days, { locale: g } = D(), _ = F.useMemo(() => P(), []), C = F.useRef(null), [w, T] = S(o, r, u), E = F.useMemo(() => {
		let e = new b(g).resolvedOptions().calendar;
		return x(e);
	}, [g]), O = F.useMemo(() => n(E.identifier), [E.identifier]), A = F.useMemo(() => l ?? new y(E, 1900 + O, 1, 1), [
		l,
		E,
		O
	]), j = F.useMemo(() => c ?? new y(E, 2099 + O, 12, 31), [
		c,
		E,
		O
	]), M = F.useMemo(() => m && h != null ? {
		days: h,
		firstDayOfWeek: a
	} : void 0, [
		m,
		h,
		a
	]), N = F.useMemo(() => ({
		calendarGridSlot: "range-calendar-grid",
		isYearPickerOpen: w,
		setIsYearPickerOpen: T,
		calendarRef: C
	}), [w, T]);
	return /*#__PURE__*/ (0, I.jsx)(s, {
		value: N,
		children: /*#__PURE__*/ (0, I.jsx)(i, {
			ref: C,
			"data-slot": "range-calendar",
			firstDayOfWeek: a,
			maxValue: j,
			minValue: A,
			visibleDuration: d,
			...f,
			className: k(t, v(_.base(), p && "range-calendar--week-view", m && "range-calendar--day-view")),
			children: (t) => /*#__PURE__*/ (0, I.jsx)(R, {
				dayViewBase: M,
				slots: _,
				timeZone: t.state.timeZone,
				visibleRange: t.state.visibleRange,
				children: typeof e == "function" ? e(t) : e
			})
		})
	});
}
z.displayName = "HeroUI.RangeCalendar";
var B = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, F.use)(L);
	return /*#__PURE__*/ (0, I.jsx)(j.div, {
		className: A(r?.header, t),
		"data-slot": "range-calendar-header",
		...n,
		children: e
	});
};
B.displayName = "HeroUI.RangeCalendar.Header";
var V = ({ className: e, ...t }) => {
	let { slots: n } = (0, F.use)(L);
	return /*#__PURE__*/ (0, I.jsx)(a, {
		"data-slot": "range-calendar-heading",
		...t,
		className: A(n?.heading, e)
	});
};
V.displayName = "HeroUI.RangeCalendar.Heading";
var H = ({ children: e, className: t, slot: n, ...r }) => {
	let { slots: i } = (0, F.use)(L);
	return /*#__PURE__*/ (0, I.jsx)(E, {
		"data-slot": "range-calendar-nav-button",
		slot: n,
		...r,
		className: k(t, i?.navButton()),
		children: e || (n === "previous" ? /*#__PURE__*/ (0, I.jsx)(M, {
			className: i?.navButtonIcon(),
			"data-slot": "range-calendar-nav-button-icon"
		}) : /*#__PURE__*/ (0, I.jsx)(N, {
			className: i?.navButtonIcon(),
			"data-slot": "range-calendar-nav-button-icon"
		}))
	});
};
H.displayName = "HeroUI.RangeCalendar.NavButton";
var U = ({ children: e, className: t, weekdayStyle: n = "short", ...r }) => {
	let i = (0, F.use)(L), { dayView: a, slots: o } = i, s = F.useMemo(() => ({
		...i,
		dayView: a ? {
			...a,
			weekdayStyle: n
		} : void 0
	}), [
		a,
		i,
		n
	]);
	return /*#__PURE__*/ (0, I.jsx)(L, {
		value: s,
		children: /*#__PURE__*/ (0, I.jsx)(d, {
			"data-slot": "range-calendar-grid",
			weekdayStyle: n,
			...r,
			className: A(o?.grid, t),
			children: e
		})
	});
};
U.displayName = "HeroUI.RangeCalendar.Grid";
var W = ({ children: e, className: t, ...n }) => {
	let { dayView: r, slots: i } = (0, F.use)(L);
	return r && r.days >= 7 && typeof e == "function" ? /*#__PURE__*/ (0, I.jsx)(m, {
		className: A(i?.gridHeader, t),
		"data-slot": "range-calendar-grid-header",
		firstDayOfWeek: r.firstDayOfWeek,
		timeZone: r.timeZone,
		visibleRange: r.visibleRange,
		weekdayStyle: r.weekdayStyle,
		children: e
	}) : /*#__PURE__*/ (0, I.jsx)(h, {
		"data-slot": "range-calendar-grid-header",
		...n,
		className: A(i?.gridHeader, t),
		children: e
	});
};
W.displayName = "HeroUI.RangeCalendar.GridHeader";
var G = ({ children: e, className: t, ...n }) => {
	let { dayView: r, slots: i } = (0, F.use)(L);
	return r && r.days >= 7 && typeof e == "function" ? /*#__PURE__*/ (0, I.jsx)(l, {
		className: A(i?.gridBody, t),
		"data-slot": "range-calendar-grid-body",
		firstDayOfWeek: r.firstDayOfWeek,
		visibleRange: r.visibleRange,
		children: e
	}) : /*#__PURE__*/ (0, I.jsx)(g, {
		"data-slot": "range-calendar-grid-body",
		...n,
		className: A(i?.gridBody, t),
		children: e
	});
};
G.displayName = "HeroUI.RangeCalendar.GridBody";
var K = ({ className: t, ...n }) => {
	let { slots: r } = (0, F.use)(L);
	return /*#__PURE__*/ (0, I.jsx)(e, {
		"data-slot": "range-calendar-header-cell",
		...n,
		className: A(r?.headerCell, t)
	});
};
K.displayName = "HeroUI.RangeCalendar.HeaderCell";
var q = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, F.use)(L);
	return /*#__PURE__*/ (0, I.jsx)(c, {
		"data-slot": "range-calendar-cell",
		...n,
		className: k(t, r?.cell()),
		children: (t) => {
			let { formattedDate: n, isDisabled: r, isHovered: i, isPressed: a, isSelectionEnd: o, isSelectionStart: s } = t, c = typeof e == "function" ? e(t) : e || n;
			return /*#__PURE__*/ (0, I.jsx)("span", {
				className: "range-calendar__cell-button",
				"data-disabled": O(r),
				"data-hovered": O(i),
				"data-pressed": O(a),
				"data-selected": O(s || o),
				"data-slot": "range-calendar-cell-button",
				children: c
			});
		}
	});
};
q.displayName = "HeroUI.RangeCalendar.Cell";
var J = ({ className: e, ...t }) => {
	let { slots: n } = (0, F.use)(L);
	return /*#__PURE__*/ (0, I.jsx)(j.span, {
		"aria-hidden": "true",
		className: A(n?.cellIndicator, e),
		"data-slot": "range-calendar-cell-indicator",
		...t
	});
};
J.displayName = "HeroUI.RangeCalendar.CellIndicator";
// node_modules/@heroui/react/dist/components/range-calendar/index.js
var Y = Object.assign(z, {
	Root: z,
	Header: B,
	Heading: V,
	NavButton: H,
	Grid: U,
	GridHeader: W,
	GridBody: G,
	HeaderCell: K,
	Cell: q,
	CellIndicator: J,
	YearPickerTrigger: u,
	YearPickerTriggerHeading: p,
	YearPickerTriggerIndicator: r,
	YearPickerGrid: o,
	YearPickerGridBody: t,
	YearPickerCell: f
});
export { Y as t };
