import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { t as i } from "./compose-ClIOcrt6.js";
import { t as a } from "./dom-CdwaDRL5.js";
// node_modules/@heroui/styles/dist/components/kbd/kbd.styles.js
var o = e({
	defaultVariants: {},
	slots: {
		abbr: "kbd__abbr",
		base: "kbd",
		content: "kbd__content"
	},
	variants: { variant: {
		default: "kbd--default",
		light: "kbd--light"
	} }
}), s = /* @__PURE__ */ t(n(), 1), c = {
	command: "⌘",
	shift: "⇧",
	ctrl: "⌃",
	option: "⌥",
	enter: "↵",
	delete: "⌫",
	escape: "⎋",
	tab: "⇥",
	capslock: "⇪",
	up: "↑",
	right: "→",
	down: "↓",
	left: "←",
	pageup: "⇞",
	pagedown: "⇟",
	home: "↖",
	end: "↘",
	help: "?",
	space: "␣",
	fn: "Fn",
	win: "⌘",
	alt: "⌥"
}, l = {
	command: "Command",
	shift: "Shift",
	ctrl: "Control",
	option: "Option",
	enter: "Enter",
	delete: "Delete",
	escape: "Escape",
	tab: "Tab",
	capslock: "Caps Lock",
	up: "Up",
	right: "Right",
	down: "Down",
	left: "Left",
	pageup: "Page Up",
	pagedown: "Page Down",
	home: "Home",
	end: "End",
	help: "Help",
	space: "Space",
	fn: "Fn",
	win: "Win",
	alt: "Alt"
}, u = r(), d = /*#__PURE__*/ (0, s.createContext)({}), f = ({ children: e, className: t, variant: n, ...r }) => {
	let i = s.useMemo(() => o({ variant: n }), [n]), c = s.useMemo(() => ({ slots: i }), [i]);
	return /*#__PURE__*/ (0, u.jsx)(d, {
		value: c,
		children: /*#__PURE__*/ (0, u.jsx)(a.kbd, {
			...r,
			className: i.base({ className: t }),
			children: e
		})
	});
};
f.displayName = "HeroUI.Kbd";
var p = ({ className: e, keyValue: t, ...n }) => {
	let { slots: r } = (0, s.use)(d);
	return /*#__PURE__*/ (0, u.jsx)(a.abbr, {
		className: i(r?.abbr, e),
		title: l[t],
		...n,
		children: c[t]
	});
};
p.displayName = "HeroUI.Kbd.Abbr";
var m = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, s.use)(d);
	return /*#__PURE__*/ (0, u.jsx)(a.span, {
		className: i(r?.content, t),
		...n,
		children: e
	});
};
m.displayName = "HeroUI.Kbd.Content";
// node_modules/@heroui/react/dist/components/kbd/index.js
var h = Object.assign(f, {
	Root: f,
	Abbr: p,
	Content: m
});
export { h as t };
