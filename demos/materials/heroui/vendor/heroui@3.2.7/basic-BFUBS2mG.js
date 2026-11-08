import { t as e } from "./calendar-IssIZKiE.js";
import { t } from "./date-field-Bs52h1yi.js";
import { n, r } from "./dist-qnEEIXtT.js";
import { i, n as a, t as o } from "./jsx-runtime-C1t0izHF.js";
import { n as s } from "./Button-Cnex0dS4.js";
import { n as c } from "./DatePicker-scBQbMSw.js";
import { d as l, f as u, r as d } from "./Dialog-C0V2m_6r.js";
import { l as f } from "./utils-UBVJ5JR_.js";
import { t as p } from "./assertion-CKDD-Pvc.js";
import { r as m, t as h } from "./compose-ClIOcrt6.js";
import { t as g } from "./dom-CdwaDRL5.js";
import { t as _ } from "./use-popover-exit-hold-Bs6k_a58.js";
import { i as v } from "./icons-BUH88Ubz.js";
import { t as y } from "./surface-YzNgM-6T.js";
import { t as b } from "./label-Wq1WAbJ3.js";
// node_modules/@heroui/styles/dist/components/date-picker/date-picker.styles.js
var x = n({ slots: {
	base: "date-picker",
	popover: "date-picker__popover",
	trigger: "date-picker__trigger",
	triggerIndicator: "date-picker__trigger-indicator"
} }), S = /* @__PURE__ */ i(a(), 1), C = o(), w = /*#__PURE__*/ (0, S.createContext)({ triggerRef: { current: null } }), T = ({ children: e, className: t, onOpenChange: n, ...r }) => {
	let i = S.useMemo(() => x(), []), a = (0, S.useRef)(null), [o, s] = S.useState(!1), l = (0, S.useRef)(!1);
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
		s(e), !e && l.current && window.requestAnimationFrame(() => {
			a.current?.focus();
		}), l.current = !1, n?.(e);
	}, d = S.useMemo(() => ({
		slots: i,
		triggerRef: a
	}), [i, a]);
	return /*#__PURE__*/ (0, C.jsx)(w, {
		value: d,
		children: /*#__PURE__*/ (0, C.jsx)(c, {
			"data-required": p(r.isRequired),
			"data-slot": "date-picker",
			...r,
			className: m(t, i?.base()),
			onOpenChange: u,
			children: e
		})
	});
};
T.displayName = "HeroUI.DatePicker";
var E = ({ children: e, className: t, ref: n, ...i }) => {
	let { slots: a, triggerRef: o } = (0, S.use)(w), c = S.useCallback((e) => {
		o.current = e;
	}, [o]), l = S.useMemo(() => r(c, n), [c, n]);
	return /*#__PURE__*/ (0, C.jsx)(s, {
		ref: l,
		className: m(t, a?.trigger()),
		"data-slot": "date-picker-trigger",
		...i,
		children: e
	});
};
E.displayName = "HeroUI.DatePicker.Trigger";
var D = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, S.use)(w);
	return /*#__PURE__*/ (0, C.jsx)(g.span, {
		"aria-hidden": "true",
		className: h(r?.triggerIndicator, t),
		"data-slot": "date-picker-trigger-indicator",
		...n,
		children: e || /*#__PURE__*/ (0, C.jsx)(v, {})
	});
};
D.displayName = "HeroUI.DatePicker.TriggerIndicator";
var O = ({ children: e, className: t, defaultOpen: n, isExiting: r, isOpen: i, placement: a = "bottom", ref: o, render: s, ...c }) => {
	let { slots: p } = (0, S.use)(w), h = f(d), g = f(u, c.slot), v = s ?? g?.render, { isExiting: b, ref: x } = _({
		...c,
		defaultOpen: n,
		isOpen: i
	}, { ref: o });
	return /*#__PURE__*/ (0, C.jsx)(y, {
		value: { variant: "default" },
		children: /*#__PURE__*/ (0, C.jsx)(l, {
			...c,
			ref: x,
			className: m(t, p?.popover()),
			"data-slot": "date-picker-popover",
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
				return v ? v(n, t) : /*#__PURE__*/ (0, C.jsx)("div", { ...n });
			},
			children: e
		})
	});
};
O.displayName = "HeroUI.DatePicker.Popover";
// node_modules/@heroui/react/dist/components/date-picker/index.js
var k = Object.assign(T, {
	Root: T,
	Trigger: E,
	TriggerIndicator: D,
	Popover: O
});
// upstream/demos/en/date-picker/basic.tsx
function A() {
	return /* @__PURE__ */ (0, C.jsxs)(k, {
		className: "w-72",
		name: "date",
		children: [
			/* @__PURE__ */ (0, C.jsx)(b, { children: "Date" }),
			/* @__PURE__ */ (0, C.jsxs)(t.Group, {
				fullWidth: !0,
				children: [/* @__PURE__ */ (0, C.jsx)(t.Input, { children: (e) => /* @__PURE__ */ (0, C.jsx)(t.Segment, { segment: e }) }), /* @__PURE__ */ (0, C.jsx)(t.Suffix, { children: /* @__PURE__ */ (0, C.jsx)(k.Trigger, { children: /* @__PURE__ */ (0, C.jsx)(k.TriggerIndicator, {}) }) })]
			}),
			/* @__PURE__ */ (0, C.jsx)(k.Popover, { children: /* @__PURE__ */ (0, C.jsxs)(e, {
				"aria-label": "Event date",
				children: [
					/* @__PURE__ */ (0, C.jsxs)(e.Header, { children: [
						/* @__PURE__ */ (0, C.jsxs)(e.YearPickerTrigger, { children: [/* @__PURE__ */ (0, C.jsx)(e.YearPickerTriggerHeading, {}), /* @__PURE__ */ (0, C.jsx)(e.YearPickerTriggerIndicator, {})] }),
						/* @__PURE__ */ (0, C.jsx)(e.NavButton, { slot: "previous" }),
						/* @__PURE__ */ (0, C.jsx)(e.NavButton, { slot: "next" })
					] }),
					/* @__PURE__ */ (0, C.jsxs)(e.Grid, { children: [/* @__PURE__ */ (0, C.jsx)(e.GridHeader, { children: (t) => /* @__PURE__ */ (0, C.jsx)(e.HeaderCell, { children: t }) }), /* @__PURE__ */ (0, C.jsx)(e.GridBody, { children: (t) => /* @__PURE__ */ (0, C.jsx)(e.Cell, { date: t }) })] }),
					/* @__PURE__ */ (0, C.jsx)(e.YearPickerGrid, { children: /* @__PURE__ */ (0, C.jsx)(e.YearPickerGridBody, { children: ({ year: t }) => /* @__PURE__ */ (0, C.jsx)(e.YearPickerCell, { year: t }) }) })
				]
			}) })
		]
	});
}
export { A as Basic };
