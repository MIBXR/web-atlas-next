import { n as e, r as t } from "./dist-qnEEIXtT.js";
import { t as n } from "./useResizeObserver-Sa6_Psnw.js";
import { i as r, n as i, t as a } from "./jsx-runtime-C1t0izHF.js";
import { r as o } from "./Hidden-B5FjVPor.js";
import { t as s } from "./Autocomplete-By5miKJr.js";
import { n as c } from "./Button-Cnex0dS4.js";
import { t as l } from "./Group-VeeQ5avm.js";
import { d as u } from "./Dialog-C0V2m_6r.js";
import { n as d, r as f, t as p } from "./Select-BNokEr6y.js";
import { t as m } from "./assertion-CKDD-Pvc.js";
import { r as h, t as g } from "./compose-ClIOcrt6.js";
import { t as _ } from "./dom-CdwaDRL5.js";
import { t as v } from "./field-slots-gate-CeBWAnDc.js";
import { t as y } from "./use-popover-exit-hold-Bs6k_a58.js";
import { a as b, t as x } from "./icons-BUH88Ubz.js";
import { t as S } from "./surface-YzNgM-6T.js";
import { t as C } from "./label-Wq1WAbJ3.js";
import { t as w } from "./list-box-zqe1xyd4.js";
import { t as T } from "./search-field-C6cAJbn-.js";
import { n as E, t as D } from "./tag-K_5WiDt3.js";
import { t as O } from "./useFilter-D87ICzES.js";
// node_modules/@heroui/styles/dist/components/autocomplete/autocomplete.styles.js
var k = e({
	defaultVariants: {
		fullWidth: !1,
		variant: "primary"
	},
	slots: {
		base: "autocomplete",
		clearButton: "autocomplete__clear-button",
		filter: "autocomplete__filter",
		indicator: "autocomplete__indicator",
		popover: "autocomplete__popover",
		trigger: "autocomplete__trigger",
		value: "autocomplete__value"
	},
	variants: {
		fullWidth: {
			false: {},
			true: {
				base: "autocomplete--full-width",
				trigger: "autocomplete__trigger--full-width"
			}
		},
		variant: {
			primary: { base: "autocomplete--primary" },
			secondary: { base: "autocomplete--secondary" }
		}
	}
}), A = e({ base: "empty-state" }), j = /* @__PURE__ */ r(i(), 1), M = a(), N = /*#__PURE__*/ (0, j.createContext)({
	triggerRef: { current: null },
	clearButtonRef: { current: null },
	isDisabled: !1
}), P = ({ children: e, className: t, fullWidth: n, isDisabled: r, onClear: i, variant: a, ...o }) => {
	let s = j.useMemo(() => k({
		fullWidth: n,
		variant: a
	}), [n, a]), c = (0, j.useRef)(null), l = (0, j.useRef)(null), u = j.useMemo(() => ({
		slots: s,
		triggerRef: c,
		clearButtonRef: l,
		onClear: i,
		isDisabled: r
	}), [
		s,
		i,
		r
	]);
	return /*#__PURE__*/ (0, M.jsx)(v, { children: /*#__PURE__*/ (0, M.jsx)(N, {
		value: u,
		children: /*#__PURE__*/ (0, M.jsx)(f, {
			"data-slot": "autocomplete",
			...o,
			className: h(t, s?.base()),
			isDisabled: r,
			children: e
		})
	}) });
};
P.displayName = "HeroUI.Autocomplete";
var F = ({ children: e, className: n, isDisabled: r, onClick: i, ref: a, ...s }) => {
	let { clearButtonRef: c, isDisabled: u, slots: f, triggerRef: p } = (0, j.use)(N), m = (0, j.use)(d), g = r ?? u ?? !1, _ = o(), v = j.useCallback((e) => {
		p.current = e;
	}, [p]), y = j.useMemo(() => t(v, a), [v, a]), b = h(n, f?.trigger());
	return _ ? null : /*#__PURE__*/ (0, M.jsx)(l, {
		ref: y,
		className: b,
		"data-slot": "autocomplete-trigger",
		isDisabled: g,
		onClick: (e) => {
			c.current?.contains(e.target) || (i?.(e), m?.toggle());
		},
		...s,
		children: e
	});
};
F.displayName = "HeroUI.Autocomplete.Trigger";
var I = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, j.use)(N);
	return /*#__PURE__*/ (0, M.jsx)(p, {
		className: h(t, r?.value()),
		"data-slot": "autocomplete-value",
		...n,
		children: e
	});
};
I.displayName = "HeroUI.Autocomplete.Value";
var L = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, j.use)(N), i = (0, j.use)(d), a = e && /*#__PURE__*/ j.isValidElement(e) ? /*#__PURE__*/ j.cloneElement(e, {
		...n,
		className: g(r?.indicator, t),
		"data-slot": "autocomplete-indicator",
		"data-open": m(i?.isOpen)
	}) : /*#__PURE__*/ (0, M.jsx)(b, {
		className: g(r?.indicator, t),
		"data-open": m(i?.isOpen),
		"data-slot": "autocomplete-default-indicator",
		...n
	});
	return /*#__PURE__*/ (0, M.jsx)(c, { children: a });
};
L.displayName = "HeroUI.Autocomplete.Indicator";
var R = ({ children: e, className: t, defaultOpen: r, isExiting: i, isOpen: a, placement: o = "bottom", ref: s, style: c, ...l }) => {
	let { slots: d, triggerRef: f } = (0, j.use)(N), { isExiting: p, ref: m } = y({
		...l,
		defaultOpen: r,
		isOpen: a
	}, { ref: s }), [g, _] = (0, j.useState)(null), v = (0, j.useCallback)(() => {
		f.current && _(f.current.offsetWidth + "px");
	}, [f]);
	return n({
		ref: f,
		onResize: v
	}), /*#__PURE__*/ (0, M.jsx)(S, {
		value: { variant: "default" },
		children: /*#__PURE__*/ (0, M.jsx)(u, {
			...l,
			ref: m,
			className: h(t, d?.popover()),
			"data-slot": "autocomplete-popover",
			defaultOpen: r,
			isExiting: p || i,
			isOpen: a,
			placement: o,
			triggerRef: f,
			style: {
				"--trigger-width": g,
				...typeof c == "object" && c ? c : {}
			},
			children: e
		})
	});
};
R.displayName = "HeroUI.Autocomplete.Popover";
var z = ({ children: e, ...t }) => /*#__PURE__*/ (0, M.jsx)(s, {
	"data-slot": "autocomplete-filter",
	...t,
	children: e
});
z.displayName = "HeroUI.Autocomplete.Filter";
var B = ({ className: e, onClick: n, ref: r, ...i }) => {
	let { clearButtonRef: a, isDisabled: o, onClear: s, slots: c } = (0, j.use)(N), l = (0, j.use)(d), u = j.useCallback((e) => {
		a.current = e;
	}, [a]), f = j.useMemo(() => t(u, r), [u, r]), p = (e) => {
		l?.selectionManager.setSelectedKeys(/* @__PURE__ */ new Set()), s?.(), n?.(e);
	}, h = l?.selectionManager.selectedKeys.size === 0;
	return /*#__PURE__*/ (0, M.jsx)(_.button, {
		ref: f,
		"aria-hidden": h || void 0,
		"aria-label": "Clear selection",
		className: c?.clearButton({ className: e }),
		"data-empty": m(h),
		"data-slot": "autocomplete-clear-button",
		disabled: o ?? !1,
		tabIndex: -1,
		type: "button",
		onClick: p,
		...i,
		children: /*#__PURE__*/ (0, M.jsx)(x, { "data-slot": "autocomplete-clear-button-icon" })
	});
};
B.displayName = "HeroUI.Autocomplete.ClearButton";
// node_modules/@heroui/react/dist/components/autocomplete/index.js
var V = Object.assign(P, {
	Root: P,
	Trigger: F,
	Value: I,
	Indicator: L,
	Popover: R,
	Filter: z,
	ClearButton: B
}), H = ({ children: e, className: t, ...n }) => {
	let r = (0, j.useMemo)(() => A({ className: t }), [t]);
	return /*#__PURE__*/ (0, M.jsx)(_.div, {
		className: r,
		"data-slot": "empty-state",
		...n,
		children: e || "No results found"
	});
};
H.displayName = "HeroUI.EmptyState";
// node_modules/@heroui/react/dist/components/empty-state/index.js
var U = Object.assign(H, { Root: H });
// upstream/demos/en/autocomplete/default.tsx
function W() {
	let { contains: e } = O({ sensitivity: "base" }), [t, n] = (0, j.useState)([]), r = [
		{
			id: "florida",
			name: "Florida"
		},
		{
			id: "delaware",
			name: "Delaware"
		},
		{
			id: "california",
			name: "California"
		},
		{
			id: "texas",
			name: "Texas"
		},
		{
			id: "new-york",
			name: "New York"
		},
		{
			id: "washington",
			name: "Washington"
		}
	], i = (e) => {
		n((t) => t.filter((t) => !e.has(t)));
	};
	return /* @__PURE__ */ (0, M.jsxs)(V, {
		className: "w-[256px]",
		placeholder: "Select states",
		selectionMode: "multiple",
		value: t,
		onChange: (e) => n(e),
		children: [
			/* @__PURE__ */ (0, M.jsx)(C, { children: "States to Visit" }),
			/* @__PURE__ */ (0, M.jsxs)(V.Trigger, { children: [/* @__PURE__ */ (0, M.jsx)(V.Value, { children: ({ defaultChildren: e, isPlaceholder: t, state: n }) => {
				if (t || n.selectedItems.length === 0) return e;
				let a = n.selectedItems.map((e) => e.key);
				return /* @__PURE__ */ (0, M.jsx)(E, {
					size: "sm",
					onRemove: i,
					children: /* @__PURE__ */ (0, M.jsx)(E.List, { children: a.map((e) => {
						let t = r.find((t) => t.id === e);
						return t ? /* @__PURE__ */ (0, M.jsx)(D, {
							id: t.id,
							children: t.name
						}, t.id) : null;
					}) })
				});
			} }), /* @__PURE__ */ (0, M.jsx)(V.Indicator, {})] }),
			/* @__PURE__ */ (0, M.jsx)(V.Popover, { children: /* @__PURE__ */ (0, M.jsxs)(V.Filter, {
				filter: e,
				children: [/* @__PURE__ */ (0, M.jsx)(T, {
					autoFocus: !0,
					"aria-label": "Search options",
					name: "search",
					variant: "secondary",
					children: /* @__PURE__ */ (0, M.jsxs)(T.Group, { children: [
						/* @__PURE__ */ (0, M.jsx)(T.SearchIcon, {}),
						/* @__PURE__ */ (0, M.jsx)(T.Input, { placeholder: "Search..." }),
						/* @__PURE__ */ (0, M.jsx)(T.ClearButton, {})
					] })
				}), /* @__PURE__ */ (0, M.jsx)(w, {
					renderEmptyState: () => /* @__PURE__ */ (0, M.jsx)(U, { children: "No results found" }),
					children: r.map((e) => /* @__PURE__ */ (0, M.jsxs)(w.Item, {
						id: e.id,
						textValue: e.name,
						children: [e.name, /* @__PURE__ */ (0, M.jsx)(w.ItemIndicator, {})]
					}, e.id))
				})]
			}) })
		]
	});
}
export { W as default };
