import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { n as i } from "./ToggleButton-DTyULKri.js";
import { l as a } from "./utils-UBVJ5JR_.js";
import { n as o, t as s } from "./ToggleButtonGroup-BtCWMJmh.js";
import { t as c } from "./dom-CdwaDRL5.js";
import { r as l, t as u } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/toggle-button-group/toggle-button-group.styles.js
var d = e({
	defaultVariants: {
		fullWidth: !1,
		isDetached: !1,
		orientation: "horizontal"
	},
	slots: {
		base: "toggle-button-group",
		separator: "toggle-button-group__separator"
	},
	variants: {
		fullWidth: {
			false: {},
			true: { base: "toggle-button-group--full-width" }
		},
		isDetached: {
			false: {},
			true: { base: "toggle-button-group--detached" }
		},
		orientation: {
			horizontal: { base: "toggle-button-group--horizontal" },
			vertical: { base: "toggle-button-group--vertical" }
		}
	}
}), f = e({
	base: "toggle-button",
	defaultVariants: {
		isIconOnly: !1,
		size: "md",
		variant: "default"
	},
	variants: {
		isIconOnly: { true: "toggle-button--icon-only" },
		size: {
			lg: "toggle-button--lg",
			md: "toggle-button--md",
			sm: "toggle-button--sm"
		},
		variant: {
			default: "toggle-button--default",
			ghost: "toggle-button--ghost"
		}
	}
}), p = /* @__PURE__ */ t(n(), 1), m = r(), h = /*#__PURE__*/ (0, p.createContext)({}), g = ({ children: e, className: t, fullWidth: n, isDetached: r = !1, isDisabled: i, orientation: c, render: u, size: f, ...g }) => {
	let _ = a(s, g.slot), v = u ?? _?.render, y = c ?? _?.orientation ?? "horizontal", b = p.useMemo(() => d({
		fullWidth: n,
		isDetached: r,
		orientation: y
	}), [
		n,
		r,
		y
	]), x = p.useMemo(() => ({
		slots: b,
		size: f,
		isDisabled: i
	}), [
		b,
		f,
		i
	]);
	return /*#__PURE__*/ (0, m.jsx)(h, {
		value: x,
		children: /*#__PURE__*/ (0, m.jsx)(o, {
			className: l(t, b.base()),
			"data-slot": "toggle-button-group",
			isDisabled: i,
			orientation: y,
			...g,
			render: (e, t) => {
				if (v) return v(e, t);
				let n = {
					...e,
					"aria-orientation": e.role === "group" ? void 0 : e["aria-orientation"]
				};
				return /*#__PURE__*/ (0, m.jsx)("div", { ...n });
			},
			children: e
		})
	});
};
g.displayName = "HeroUI.ToggleButtonGroup";
var _ = ({ className: e, ...t }) => {
	let { slots: n } = (0, p.use)(h);
	return /*#__PURE__*/ (0, m.jsx)(c.span, {
		"aria-hidden": "true",
		className: u(n?.separator, e),
		"data-slot": "toggle-button-group-separator",
		...t
	});
};
_.displayName = "HeroUI.ToggleButtonGroup.Separator";
// node_modules/@heroui/react/dist/components/toggle-button/toggle-button.js
var v = ({ children: e, className: t, isIconOnly: n, size: r, style: a, variant: o, ...s }) => {
	let c = (0, p.use)(h), u = r ?? c?.size, d = (0, p.useMemo)(() => f({
		isIconOnly: n,
		size: u,
		variant: o
	}), [
		u,
		n,
		o
	]), g = l(t, d);
	return /*#__PURE__*/ (0, m.jsx)(i, {
		className: g,
		"data-slot": "toggle-button",
		style: a,
		...s,
		children: e
	});
};
v.displayName = "HeroUI.ToggleButton";
// node_modules/@heroui/react/dist/components/toggle-button/index.js
var y = Object.assign(v, { Root: v });
export { g as n, _ as r, y as t };
