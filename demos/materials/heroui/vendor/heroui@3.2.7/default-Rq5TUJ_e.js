import { t as e } from "./label-Wq1WAbJ3.js";
import { t } from "./list-box-zqe1xyd4.js";
import { n } from "./dist-qnEEIXtT.js";
import { i as r, n as i, t as a } from "./jsx-runtime-C1t0izHF.js";
import { n as o } from "./Button-Cnex0dS4.js";
import { d as s } from "./Dialog-C0V2m_6r.js";
import { n as c, r as l, t as u } from "./Select-BNokEr6y.js";
import { t as d } from "./assertion-CKDD-Pvc.js";
import { r as f, t as p } from "./compose-ClIOcrt6.js";
import { t as m } from "./dom-CdwaDRL5.js";
import { t as h } from "./field-slots-gate-CeBWAnDc.js";
import { t as g } from "./use-popover-exit-hold-Bs6k_a58.js";
import { a as _, t as v } from "./icons-BUH88Ubz.js";
import { t as y } from "./surface-YzNgM-6T.js";
// node_modules/@heroui/styles/dist/components/select/select.styles.js
var b = n({
	defaultVariants: {
		fullWidth: !1,
		variant: "primary"
	},
	slots: {
		base: "select",
		clearButton: "select__clear-button",
		indicator: "select__indicator",
		popover: "select__popover",
		trigger: "select__trigger",
		value: "select__value"
	},
	variants: {
		fullWidth: {
			false: {},
			true: {
				base: "select--full-width",
				trigger: "select__trigger--full-width"
			}
		},
		variant: {
			primary: { base: "select--primary" },
			secondary: { base: "select--secondary" }
		}
	}
}), x = /* @__PURE__ */ r(i(), 1), S = a(), C = /*#__PURE__*/ (0, x.createContext)({}), w = /*#__PURE__*/ (0, x.createContext)({}), T = (e) => (e?.selectionManager.selectedKeys.size ?? 0) === 0, E = (e, t) => {
	e?.selectionManager.setSelectedKeys(/* @__PURE__ */ new Set()), t?.();
}, D = ({ children: e, className: t, fullWidth: n, isDisabled: r, onClear: i, variant: a, ...o }) => {
	let s = x.useMemo(() => b({
		fullWidth: n,
		variant: a
	}), [n, a]), c = x.useRef(0), u = x.useCallback(() => (c.current += 1, () => {
		--c.current;
	}), []), d = x.useCallback(() => c.current > 0, []), p = x.useMemo(() => ({
		hasClearButton: d,
		isDisabled: r,
		onClear: i,
		registerClearButton: u,
		slots: s
	}), [
		d,
		r,
		i,
		u,
		s
	]);
	return /*#__PURE__*/ (0, S.jsx)(h, { children: /*#__PURE__*/ (0, S.jsx)(C, {
		value: p,
		children: /*#__PURE__*/ (0, S.jsx)(l, {
			"data-slot": "select",
			...o,
			className: f(t, s?.base()),
			isDisabled: r,
			children: e
		})
	}) });
};
D.displayName = "HeroUI.Select";
var O = ({ children: e, className: t, onKeyDown: n, ...r }) => {
	let { hasClearButton: i, onClear: a, slots: s } = (0, x.use)(C), l = (0, x.use)(c), u = (e) => {
		n?.(e);
		let t = e.key === "Backspace" || e.key === "Delete", r = !!i?.() && !T(l);
		!t || !r || l?.isOpen ? e.continuePropagation() : (e.preventDefault(), E(l, a));
	};
	return /*#__PURE__*/ (0, S.jsx)(o, {
		className: f(t, s?.trigger()),
		"data-slot": "select-trigger",
		...r,
		onKeyDown: u,
		children: (t) => /*#__PURE__*/ (0, S.jsx)(w, {
			value: { isDisabled: t.isDisabled },
			children: typeof e == "function" ? e(t) : e
		})
	});
};
O.displayName = "HeroUI.Select.Trigger";
var k = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, x.use)(C);
	return /*#__PURE__*/ (0, S.jsx)(u, {
		className: f(t, r?.value()),
		"data-slot": "select-value",
		...n,
		children: e
	});
};
k.displayName = "HeroUI.Select.Value";
var A = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, x.use)(C), i = (0, x.use)(c);
	return e && /*#__PURE__*/ x.isValidElement(e) ? /*#__PURE__*/ x.cloneElement(e, {
		...n,
		className: p(r?.indicator, t),
		"data-slot": "select-indicator",
		"data-open": d(i?.isOpen)
	}) : /*#__PURE__*/ (0, S.jsx)(_, {
		className: p(r?.indicator, t),
		"data-open": d(i?.isOpen),
		"data-slot": "select-default-indicator",
		...n
	});
};
A.displayName = "HeroUI.Select.Indicator";
var j = ({ children: e, className: t, onClick: n, onPointerDown: r, ...i }) => {
	let { isDisabled: a, onClear: o, registerClearButton: s, slots: l } = (0, x.use)(C), { isDisabled: u } = (0, x.use)(w), f = (0, x.use)(c), p = u ?? a ?? !1, h = T(f);
	x.useEffect(() => s?.(), [s]);
	let g = (e) => {
		e.stopPropagation(), r?.(e);
	}, _ = (e) => {
		e.preventDefault(), e.stopPropagation(), !p && !h && E(f, o), n?.(e);
	};
	return /*#__PURE__*/ (0, S.jsx)(m.span, {
		"aria-hidden": !0,
		className: l?.clearButton({ className: t }),
		"data-empty": d(h),
		"data-slot": "select-clear-button",
		...i,
		onClick: _,
		onPointerDown: g,
		children: e ?? /*#__PURE__*/ (0, S.jsx)(v, { "data-slot": "select-clear-button-icon" })
	});
};
j.displayName = "HeroUI.Select.ClearButton";
var M = ({ children: e, className: t, defaultOpen: n, isExiting: r, isOpen: i, placement: a = "bottom", ref: o, ...c }) => {
	let { slots: l } = (0, x.use)(C), { isExiting: u, ref: d } = g({
		...c,
		defaultOpen: n,
		isOpen: i
	}, { ref: o });
	return /*#__PURE__*/ (0, S.jsx)(y, {
		value: { variant: "default" },
		children: /*#__PURE__*/ (0, S.jsx)(s, {
			...c,
			ref: d,
			className: f(t, l?.popover()),
			"data-slot": "select-popover",
			defaultOpen: n,
			isExiting: u || r,
			isOpen: i,
			placement: a,
			children: e
		})
	});
};
M.displayName = "HeroUI.Select.Popover";
// node_modules/@heroui/react/dist/components/select/index.js
var N = Object.assign(D, {
	Root: D,
	Trigger: O,
	Value: k,
	Indicator: A,
	ClearButton: j,
	Popover: M
});
// upstream/demos/en/select/default.tsx
function P() {
	return /* @__PURE__ */ (0, S.jsxs)(N, {
		className: "w-[256px]",
		placeholder: "Select one",
		children: [
			/* @__PURE__ */ (0, S.jsx)(e, { children: "State" }),
			/* @__PURE__ */ (0, S.jsxs)(N.Trigger, { children: [/* @__PURE__ */ (0, S.jsx)(N.Value, {}), /* @__PURE__ */ (0, S.jsx)(N.Indicator, {})] }),
			/* @__PURE__ */ (0, S.jsx)(N.Popover, { children: /* @__PURE__ */ (0, S.jsxs)(t, { children: [
				/* @__PURE__ */ (0, S.jsxs)(t.Item, {
					id: "florida",
					textValue: "Florida",
					children: ["Florida", /* @__PURE__ */ (0, S.jsx)(t.ItemIndicator, {})]
				}),
				/* @__PURE__ */ (0, S.jsxs)(t.Item, {
					id: "delaware",
					textValue: "Delaware",
					children: ["Delaware", /* @__PURE__ */ (0, S.jsx)(t.ItemIndicator, {})]
				}),
				/* @__PURE__ */ (0, S.jsxs)(t.Item, {
					id: "california",
					textValue: "California",
					children: ["California", /* @__PURE__ */ (0, S.jsx)(t.ItemIndicator, {})]
				}),
				/* @__PURE__ */ (0, S.jsxs)(t.Item, {
					id: "texas",
					textValue: "Texas",
					children: ["Texas", /* @__PURE__ */ (0, S.jsx)(t.ItemIndicator, {})]
				}),
				/* @__PURE__ */ (0, S.jsxs)(t.Item, {
					id: "new-york",
					textValue: "New York",
					children: ["New York", /* @__PURE__ */ (0, S.jsx)(t.ItemIndicator, {})]
				}),
				/* @__PURE__ */ (0, S.jsxs)(t.Item, {
					id: "washington",
					textValue: "Washington",
					children: ["Washington", /* @__PURE__ */ (0, S.jsx)(t.ItemIndicator, {})]
				})
			] }) })
		]
	});
}
export { P as Default };
