import { t as e } from "./date-field-Bs52h1yi.js";
import { n as t, r as n } from "./dist-qnEEIXtT.js";
import { i as r, n as i, t as a } from "./jsx-runtime-C1t0izHF.js";
import { n as o } from "./Button-Cnex0dS4.js";
import { t as s } from "./DatePicker-scBQbMSw.js";
import { d as c, f as l, r as u } from "./Dialog-C0V2m_6r.js";
import { l as d } from "./utils-UBVJ5JR_.js";
import { t as f } from "./assertion-CKDD-Pvc.js";
import { r as p, t as m } from "./compose-ClIOcrt6.js";
import { t as h } from "./dom-CdwaDRL5.js";
import { t as g } from "./use-popover-exit-hold-Bs6k_a58.js";
import { i as _ } from "./icons-BUH88Ubz.js";
import { t as v } from "./surface-YzNgM-6T.js";
import { t as y } from "./label-Wq1WAbJ3.js";
import { t as b } from "./range-calendar-7DfC1ljh.js";
// node_modules/@heroui/styles/dist/components/date-range-picker/date-range-picker.styles.js
var x = t({ slots: {
	base: "date-range-picker",
	popover: "date-range-picker__popover",
	rangeSeparator: "date-range-picker__range-separator",
	trigger: "date-range-picker__trigger",
	triggerIndicator: "date-range-picker__trigger-indicator"
} }), S = /* @__PURE__ */ r(i(), 1), C = a(), w = /*#__PURE__*/ (0, S.createContext)({ triggerRef: { current: null } }), T = ({ children: e, className: t, onOpenChange: n, ...r }) => {
	let i = S.useMemo(() => x(), []), a = (0, S.useRef)(null), [o, c] = S.useState(!1), l = (0, S.useRef)(!1);
	(0, S.useEffect)(() => {
		if (!o) return;
		let e = (e) => {
			e.metaKey || e.ctrlKey || e.altKey || (l.current = !0);
		};
		return window.addEventListener("keydown", e, !0), () => {
			window.removeEventListener("keydown", e, !0);
		};
	}, [o]);
	let u = (e) => {
		c(e), !e && l.current && window.requestAnimationFrame(() => {
			a.current?.focus();
		}), l.current = !1, n?.(e);
	}, d = S.useMemo(() => ({
		slots: i,
		triggerRef: a
	}), [i, a]);
	return /*#__PURE__*/ (0, C.jsx)(w, {
		value: d,
		children: /*#__PURE__*/ (0, C.jsx)(s, {
			"data-required": f(r.isRequired),
			"data-slot": "date-range-picker",
			...r,
			className: p(t, i?.base()),
			onOpenChange: u,
			children: e
		})
	});
};
T.displayName = "HeroUI.DateRangePicker";
var E = ({ children: e, className: t, ref: r, ...i }) => {
	let { slots: a, triggerRef: s } = (0, S.use)(w), c = S.useCallback((e) => {
		s.current = e;
	}, [s]), l = S.useMemo(() => n(c, r), [c, r]);
	return /*#__PURE__*/ (0, C.jsx)(o, {
		ref: l,
		className: p(t, a?.trigger()),
		"data-slot": "date-range-picker-trigger",
		...i,
		children: e
	});
};
E.displayName = "HeroUI.DateRangePicker.Trigger";
var D = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, S.use)(w);
	return /*#__PURE__*/ (0, C.jsx)(h.span, {
		"aria-hidden": "true",
		className: m(r?.triggerIndicator, t),
		"data-slot": "date-range-picker-trigger-indicator",
		...n,
		children: e || /*#__PURE__*/ (0, C.jsx)(_, {})
	});
};
D.displayName = "HeroUI.DateRangePicker.TriggerIndicator";
var O = ({ children: e = " - ", className: t, ...n }) => {
	let { slots: r } = (0, S.use)(w);
	return /*#__PURE__*/ (0, C.jsx)(h.span, {
		"aria-hidden": "true",
		className: m(r?.rangeSeparator, t),
		"data-slot": "date-range-picker-range-separator",
		...n,
		children: e
	});
};
O.displayName = "HeroUI.DateRangePicker.RangeSeparator";
var k = ({ children: e, className: t, defaultOpen: n, isExiting: r, isOpen: i, placement: a = "bottom", ref: o, render: s, ...f }) => {
	let { slots: m } = (0, S.use)(w), h = d(u), _ = d(l, f.slot), y = s ?? _?.render, { isExiting: b, ref: x } = g({
		...f,
		defaultOpen: n,
		isOpen: i
	}, { ref: o });
	return /*#__PURE__*/ (0, C.jsx)(v, {
		value: { variant: "default" },
		children: /*#__PURE__*/ (0, C.jsx)(c, {
			...f,
			ref: x,
			className: p(t, m?.popover()),
			"data-slot": "date-range-picker-popover",
			defaultOpen: n,
			isExiting: b || r,
			isOpen: i,
			placement: a,
			render: (e, t) => {
				let n = e.role === "dialog" ? {
					...e,
					id: e.id ?? h?.id,
					"aria-labelledby": e["aria-labelledby"] ?? (e["aria-label"] ? void 0 : h?.["aria-labelledby"])
				} : e;
				return y ? y(n, t) : /*#__PURE__*/ (0, C.jsx)("div", { ...n });
			},
			children: e
		})
	});
};
k.displayName = "HeroUI.DateRangePicker.Popover";
// node_modules/@heroui/react/dist/components/date-range-picker/index.js
var A = Object.assign(T, {
	Root: T,
	Trigger: E,
	TriggerIndicator: D,
	RangeSeparator: O,
	Popover: k
});
// upstream/demos/en/date-range-picker/basic.tsx
function j() {
	return /* @__PURE__ */ (0, C.jsxs)(A, {
		className: "w-80",
		endName: "endDate",
		startName: "startDate",
		children: [
			/* @__PURE__ */ (0, C.jsx)(y, { children: "Trip dates" }),
			/* @__PURE__ */ (0, C.jsxs)(e.Group, {
				fullWidth: !0,
				children: [
					/* @__PURE__ */ (0, C.jsx)(e.Input, {
						slot: "start",
						children: (t) => /* @__PURE__ */ (0, C.jsx)(e.Segment, { segment: t })
					}),
					/* @__PURE__ */ (0, C.jsx)(A.RangeSeparator, {}),
					/* @__PURE__ */ (0, C.jsx)(e.Input, {
						slot: "end",
						children: (t) => /* @__PURE__ */ (0, C.jsx)(e.Segment, { segment: t })
					}),
					/* @__PURE__ */ (0, C.jsx)(e.Suffix, { children: /* @__PURE__ */ (0, C.jsx)(A.Trigger, { children: /* @__PURE__ */ (0, C.jsx)(A.TriggerIndicator, {}) }) })
				]
			}),
			/* @__PURE__ */ (0, C.jsx)(A.Popover, { children: /* @__PURE__ */ (0, C.jsxs)(b, {
				"aria-label": "Trip dates",
				children: [
					/* @__PURE__ */ (0, C.jsxs)(b.Header, { children: [
						/* @__PURE__ */ (0, C.jsxs)(b.YearPickerTrigger, { children: [/* @__PURE__ */ (0, C.jsx)(b.YearPickerTriggerHeading, {}), /* @__PURE__ */ (0, C.jsx)(b.YearPickerTriggerIndicator, {})] }),
						/* @__PURE__ */ (0, C.jsx)(b.NavButton, { slot: "previous" }),
						/* @__PURE__ */ (0, C.jsx)(b.NavButton, { slot: "next" })
					] }),
					/* @__PURE__ */ (0, C.jsxs)(b.Grid, { children: [/* @__PURE__ */ (0, C.jsx)(b.GridHeader, { children: (e) => /* @__PURE__ */ (0, C.jsx)(b.HeaderCell, { children: e }) }), /* @__PURE__ */ (0, C.jsx)(b.GridBody, { children: (e) => /* @__PURE__ */ (0, C.jsx)(b.Cell, { date: e }) })] }),
					/* @__PURE__ */ (0, C.jsx)(b.YearPickerGrid, { children: /* @__PURE__ */ (0, C.jsx)(b.YearPickerGridBody, { children: ({ year: e }) => /* @__PURE__ */ (0, C.jsx)(b.YearPickerCell, { year: e }) }) })
				]
			}) })
		]
	});
}
export { j as Basic };
