import { i as e, n as t, t as n } from "./jsx-runtime-C1t0izHF.js";
import { n as r } from "./dist-qnEEIXtT.js";
import { t as i } from "./compose-ClIOcrt6.js";
import { t as a } from "./dom-CdwaDRL5.js";
import { t as o } from "./surface-YzNgM-6T.js";
import { t as s } from "./link-vZNhpvw9.js";
// node_modules/@gravity-ui/icons/esm/CircleDollar.js
var c = /* @__PURE__ */ e(t()), l = (e) => c.createElement("svg", Object.assign({
	xmlns: "http://www.w3.org/2000/svg",
	width: 16,
	height: 16,
	fill: "none",
	viewBox: "0 0 16 16"
}, e), c.createElement("path", {
	fill: "currentColor",
	fillRule: "evenodd",
	d: "M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.25a.75.75 0 0 0-1.5 0v.339a2.5 2.5 0 0 0-1.007.47 1.95 1.95 0 0 0-.74 1.546c0 .764.474 1.265.94 1.559.456.287 1.007.448 1.448.547.462.102.843.191 1.118.341.228.125.275.224.275.376 0 .102-.04.217-.248.341-.224.135-.577.229-.982.229-.344 0-.683-.114-.953-.29-.281-.184-.42-.388-.457-.506a.75.75 0 1 0-1.43.452c.171.543.591 1 1.068 1.31.284.185.612.335.968.429v.357a.75.75 0 0 0 1.5 0v-.313c.375-.067.74-.19 1.058-.382.53-.319.976-.864.976-1.627 0-.864-.51-1.394-1.055-1.692-.478-.26-1.056-.389-1.46-.478l-.053-.012c-.386-.086-.736-.202-.973-.352-.227-.142-.24-.236-.24-.29a.45.45 0 0 1 .18-.375c.134-.108.403-.227.87-.227.47 0 .742.11.9.218a.83.83 0 0 1 .316.41.75.75 0 0 0 1.407-.52 2.33 2.33 0 0 0-.878-1.13 2.7 2.7 0 0 0-1.048-.417z",
	clipRule: "evenodd"
})), u = r({
	defaultVariants: { variant: "default" },
	slots: {
		base: "card",
		content: "card__content",
		description: "card__description",
		footer: "card__footer",
		header: "card__header",
		title: "card__title"
	},
	variants: { variant: {
		default: { base: "card--default" },
		secondary: { base: "card--secondary" },
		tertiary: { base: "card--tertiary" },
		transparent: { base: "card--transparent" }
	} }
}), d = n(), f = /*#__PURE__*/ (0, c.createContext)({}), p = ({ children: e, className: t, variant: n = "default", ...r }) => {
	let i = c.useMemo(() => u({ variant: n }), [n]), s = c.useMemo(() => ({ slots: i }), [i]), l = c.useMemo(() => ({ variant: n }), [n]), p = /*#__PURE__*/ (0, d.jsx)(a.div, {
		className: i.base({ className: t }),
		"data-slot": "card",
		...r,
		children: e
	});
	return /*#__PURE__*/ (0, d.jsx)(f, {
		value: s,
		children: n === "transparent" ? p : /*#__PURE__*/ (0, d.jsx)(o, {
			value: l,
			children: p
		})
	});
};
p.displayName = "HeroUI.Card";
var m = ({ className: e, ...t }) => {
	let { slots: n } = (0, c.use)(f);
	return /*#__PURE__*/ (0, d.jsx)(a.div, {
		className: i(n?.header, e),
		"data-slot": "card-header",
		...t
	});
};
m.displayName = "HeroUI.Card.Header";
var h = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, c.use)(f);
	return /*#__PURE__*/ (0, d.jsx)(a.h3, {
		className: i(r?.title, t),
		"data-slot": "card-title",
		...n,
		children: e
	});
};
h.displayName = "HeroUI.Card.Title";
var g = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, c.use)(f);
	return /*#__PURE__*/ (0, d.jsx)(a.p, {
		className: i(r?.description, t),
		"data-slot": "card-description",
		...n,
		children: e
	});
};
g.displayName = "HeroUI.Card.Description";
var _ = ({ className: e, ...t }) => {
	let { slots: n } = (0, c.use)(f);
	return /*#__PURE__*/ (0, d.jsx)(a.div, {
		className: i(n?.content, e),
		"data-slot": "card-content",
		...t
	});
};
_.displayName = "HeroUI.Card.Content";
var v = ({ className: e, ...t }) => {
	let { slots: n } = (0, c.use)(f);
	return /*#__PURE__*/ (0, d.jsx)(a.div, {
		className: i(n?.footer, e),
		"data-slot": "card-footer",
		...t
	});
};
v.displayName = "HeroUI.Card.Footer";
// node_modules/@heroui/react/dist/components/card/index.js
var y = Object.assign(p, {
	Root: p,
	Header: m,
	Title: h,
	Description: g,
	Content: _,
	Footer: v
});
// upstream/demos/en/card/default.tsx
function b() {
	return /* @__PURE__ */ (0, d.jsxs)(y, {
		className: "w-[400px]",
		children: [
			/* @__PURE__ */ (0, d.jsx)(l, {
				"aria-label": "Dollar sign icon",
				className: "text-primary size-6",
				role: "img"
			}),
			/* @__PURE__ */ (0, d.jsxs)(y.Header, { children: [/* @__PURE__ */ (0, d.jsx)(y.Title, { children: "Become an Acme Creator!" }), /* @__PURE__ */ (0, d.jsx)(y.Description, { children: "Visit the Acme Creator Hub to sign up today and start earning credits from your fans and followers." })] }),
			/* @__PURE__ */ (0, d.jsx)(y.Footer, { children: /* @__PURE__ */ (0, d.jsxs)(s, {
				"aria-label": "Go to Acme Creator Hub (opens in new tab)",
				href: "https://heroui.com",
				rel: "noopener noreferrer",
				target: "_blank",
				children: ["Creator Hub", /* @__PURE__ */ (0, d.jsx)(s.Icon, { "aria-hidden": "true" })]
			}) })
		]
	});
}
export { b as Default };
