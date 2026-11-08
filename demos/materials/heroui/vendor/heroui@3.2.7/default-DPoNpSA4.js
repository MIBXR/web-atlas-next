import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { t as i } from "./Text-CEDDBTEL.js";
import { t as a } from "./compose-ClIOcrt6.js";
// node_modules/@heroui/styles/dist/components/typography/typography.styles.js
var o = e({
	defaultVariants: {
		align: "start",
		color: "default",
		type: "body"
	},
	slots: {
		base: "typography",
		prose: "typography-prose"
	},
	variants: {
		align: {
			center: "typography--align-center",
			end: "typography--align-end",
			justify: "typography--align-justify",
			start: "typography--align-start"
		},
		color: {
			default: "typography--color-default",
			muted: "typography--color-muted"
		},
		truncate: { true: "typography--truncate" },
		type: {
			body: "typography--body",
			"body-sm": "typography--body-sm",
			"body-xs": "typography--body-xs",
			code: "typography--code",
			h1: "typography--h1",
			h2: "typography--h2",
			h3: "typography--h3",
			h4: "typography--h4",
			h5: "typography--h5",
			h6: "typography--h6"
		},
		weight: {
			bold: "typography--weight-bold",
			medium: "typography--weight-medium",
			normal: "typography--weight-normal",
			semibold: "typography--weight-semibold"
		}
	}
}), s = /* @__PURE__ */ t(n(), 1), c = r(), l = {
	body: "p",
	"body-sm": "p",
	"body-xs": "p",
	code: "code",
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6"
}, u = ({ align: e = "start", children: t, className: n, color: r = "default", truncate: u, type: d = "body", weight: f, ...p }) => {
	let m = (0, s.useMemo)(() => o({
		align: e,
		color: r,
		truncate: u,
		type: d,
		weight: f
	}), [
		e,
		r,
		u,
		d,
		f
	]), h = (0, s.useMemo)(() => a(m.base, n), [n, m]);
	return /*#__PURE__*/ (0, c.jsx)(i, {
		className: h,
		"data-slot": "typography",
		"data-type": d,
		elementType: l[d],
		...p,
		children: t
	});
};
u.displayName = "HeroUI.Typography";
var d = ({ level: e = 1, ...t }) => /*#__PURE__*/ (0, c.jsx)(u, {
	type: `h${e}`,
	...t
});
d.displayName = "HeroUI.Typography.Heading";
var f = ({ size: e = "base", ...t }) => {
	let n = e === "base" ? "body" : `body-${e}`;
	return /*#__PURE__*/ (0, c.jsx)(u, {
		type: n,
		...t
	});
};
f.displayName = "HeroUI.Typography.Paragraph";
var p = (e) => /*#__PURE__*/ (0, c.jsx)(u, {
	type: "code",
	...e
});
p.displayName = "HeroUI.Typography.Code";
var m = ({ children: e, className: t, ...n }) => {
	let r = (0, s.useMemo)(() => o(), []), i = (0, s.useMemo)(() => a(r.prose, t), [t, r]);
	return /*#__PURE__*/ (0, c.jsx)("div", {
		className: i,
		"data-slot": "prose",
		...n,
		children: e
	});
};
m.displayName = "HeroUI.Typography.Prose";
// node_modules/@heroui/react/dist/components/typography/index.js
var h = Object.assign(u, {
	Code: p,
	Heading: d,
	Paragraph: f,
	Prose: m,
	Root: u
}), g = () => /* @__PURE__ */ (0, c.jsxs)("div", {
	className: "flex max-w-xl flex-col gap-4",
	children: [
		/* @__PURE__ */ (0, c.jsx)(h, {
			type: "h1",
			children: "Build better interfaces"
		}),
		/* @__PURE__ */ (0, c.jsx)(h, {
			type: "h2",
			children: "Typography that stays semantic"
		}),
		/* @__PURE__ */ (0, c.jsx)(h, {
			type: "h3",
			children: "Composable by default"
		}),
		/* @__PURE__ */ (0, c.jsx)(h, {
			type: "h4",
			children: "Small heading"
		}),
		/* @__PURE__ */ (0, c.jsx)(h, { children: "HeroUI Typography uses React Aria Components Text as the primitive, with semantic typography types and render-prop polymorphism." }),
		/* @__PURE__ */ (0, c.jsx)(h, {
			color: "muted",
			type: "body-sm",
			children: "Smaller muted body copy for secondary descriptions."
		}),
		/* @__PURE__ */ (0, c.jsx)(h, {
			type: "code",
			children: "pnpm add @heroui/react"
		})
	]
});
export { g as Default };
