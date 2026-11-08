import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i } from "./Button-Cnex0dS4.js";
import { t as a } from "./Group-VeeQ5avm.js";
import { l as o } from "./utils-UBVJ5JR_.js";
import { t as s } from "./ToggleButtonGroup-BtCWMJmh.js";
import { t as c } from "./dom-CdwaDRL5.js";
import { r as l, t as u } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/button-group/button-group.styles.js
var d = e({
	defaultVariants: {
		fullWidth: !1,
		orientation: "horizontal"
	},
	slots: {
		base: "button-group",
		separator: "button-group__separator"
	},
	variants: {
		fullWidth: {
			false: {},
			true: { base: "button-group--full-width" }
		},
		orientation: {
			horizontal: { base: "button-group--horizontal" },
			vertical: { base: "button-group--vertical" }
		}
	}
}), f = e({
	base: "button",
	defaultVariants: {
		fullWidth: !1,
		isIconOnly: !1,
		size: "md",
		variant: "primary"
	},
	variants: {
		fullWidth: {
			false: "",
			true: "button--full-width"
		},
		isIconOnly: { true: "button--icon-only" },
		size: {
			lg: "button--lg",
			md: "button--md",
			sm: "button--sm"
		},
		variant: {
			danger: "button--danger",
			"danger-soft": "button--danger-soft",
			ghost: "button--ghost",
			outline: "button--outline",
			primary: "button--primary",
			secondary: "button--secondary",
			tertiary: "button--tertiary"
		}
	}
}), p = /* @__PURE__ */ t(n(), 1), m = r(), h = /*#__PURE__*/ (0, p.createContext)({}), g = "__button_group_child", _ = ({ children: e, className: t, fullWidth: n, isDisabled: r, orientation: i, size: c, variant: u, ...f }) => {
	let _ = o(s), v = i ?? _?.orientation ?? "horizontal", y = p.useMemo(() => d({
		fullWidth: n,
		orientation: v
	}), [n, v]), b = p.useMemo(() => p.Children.map(e, (e) => /*#__PURE__*/ (0, p.isValidElement)(e) ? /*#__PURE__*/ p.cloneElement(e, { [g]: !0 }) : e), [e]), x = p.useMemo(() => ({
		slots: y,
		size: c,
		variant: u,
		isDisabled: r,
		fullWidth: n
	}), [
		y,
		c,
		u,
		r,
		n
	]);
	return /*#__PURE__*/ (0, m.jsx)(h, {
		value: x,
		children: /*#__PURE__*/ (0, m.jsx)(a, {
			className: l(t, y.base()),
			"data-slot": "button-group",
			isDisabled: r,
			...f,
			children: b
		})
	});
};
_.displayName = "HeroUI.ButtonGroup";
var v = ({ className: e, ...t }) => {
	let { slots: n } = (0, p.use)(h);
	return /*#__PURE__*/ (0, m.jsx)(c.span, {
		"aria-hidden": "true",
		className: u(n?.separator, e),
		"data-slot": "button-group-separator",
		...t
	});
};
v.displayName = "HeroUI.ButtonGroup.Separator";
// node_modules/@heroui/react/dist/components/button/button.js
var y = ({ children: e, className: t, fullWidth: n, isDisabled: r, isIconOnly: a, size: o, slot: s, style: c, variant: u, [g]: d, ..._ }) => {
	let v = (0, p.use)(h), y = d === !0, b = o ?? (y ? v?.size : void 0), x = u ?? (y ? v?.variant : void 0), S = r ?? (y ? v?.isDisabled : void 0), C = n ?? (y ? v?.fullWidth : void 0), w = (0, p.useMemo)(() => f({
		fullWidth: C,
		isIconOnly: a,
		size: b,
		variant: x
	}), [
		C,
		b,
		x,
		a
	]), T = l(t, w);
	return /*#__PURE__*/ (0, m.jsx)(i, {
		className: T,
		"data-slot": "button",
		isDisabled: S,
		slot: s,
		style: c,
		..._,
		children: e
	});
};
y.displayName = "HeroUI.Button";
// node_modules/@heroui/react/dist/components/button/index.js
var b = Object.assign(y, { Root: y });
export { _ as n, v as r, b as t };
