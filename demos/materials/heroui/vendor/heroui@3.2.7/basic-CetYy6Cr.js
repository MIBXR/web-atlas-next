import { n as e } from "./dist-qnEEIXtT.js";
import { i as t, n, t as r } from "./jsx-runtime-C1t0izHF.js";
import { t as i } from "./compose-ClIOcrt6.js";
import { t as a } from "./dom-CdwaDRL5.js";
import { f as o, m as s, n as c, p as l } from "./icons-BUH88Ubz.js";
import { t as u } from "./surface-YzNgM-6T.js";
import { t as d } from "./button-Dd5iSf4T.js";
import { t as f } from "./close-button-CHpFmCHB.js";
import { t as p } from "./spinner-DGyRN06f.js";
// node_modules/@heroui/styles/dist/components/alert/alert.styles.js
var m = e({
	defaultVariants: { status: "default" },
	slots: {
		base: "alert",
		content: "alert__content",
		description: "alert__description",
		indicator: "alert__indicator",
		title: "alert__title"
	},
	variants: { status: {
		accent: { base: "alert--accent" },
		danger: { base: "alert--danger" },
		default: { base: "alert--default" },
		success: { base: "alert--success" },
		warning: { base: "alert--warning" }
	} }
}), h = /* @__PURE__ */ t(n(), 1), g = r(), _ = /*#__PURE__*/ (0, h.createContext)({}), v = { variant: "default" }, y = ({ children: e, className: t, status: n, ...r }) => {
	let i = h.useMemo(() => m({ status: n }), [n]), o = h.useMemo(() => ({
		slots: i,
		status: n
	}), [i, n]);
	return /*#__PURE__*/ (0, g.jsx)(_, {
		value: o,
		children: /*#__PURE__*/ (0, g.jsx)(u, {
			value: v,
			children: /*#__PURE__*/ (0, g.jsx)(a.div, {
				className: i?.base({ className: t }),
				"data-slot": "alert-root",
				...r,
				children: e
			})
		})
	});
};
y.displayName = "HeroUI.Alert";
var b = ({ children: e, className: t, ...n }) => {
	let { slots: r, status: u } = (0, h.use)(_), d = () => {
		switch (u) {
			case "accent": return /*#__PURE__*/ (0, g.jsx)(o, { "data-slot": "alert-default-icon" });
			case "success": return /*#__PURE__*/ (0, g.jsx)(l, { "data-slot": "alert-default-icon" });
			case "warning": return /*#__PURE__*/ (0, g.jsx)(s, { "data-slot": "alert-default-icon" });
			case "danger": return /*#__PURE__*/ (0, g.jsx)(c, { "data-slot": "alert-default-icon" });
			default: return /*#__PURE__*/ (0, g.jsx)(o, { "data-slot": "alert-default-icon" });
		}
	};
	return /*#__PURE__*/ (0, g.jsx)(a.div, {
		className: i(r?.indicator, t),
		"data-slot": "alert-indicator",
		...n,
		children: e ?? d()
	});
};
b.displayName = "HeroUI.Alert.Indicator";
var x = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, h.use)(_);
	return /*#__PURE__*/ (0, g.jsx)(a.div, {
		className: i(r?.content, t),
		"data-slot": "alert-content",
		...n,
		children: e
	});
};
x.displayName = "HeroUI.Alert.Content";
var S = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, h.use)(_);
	return /*#__PURE__*/ (0, g.jsx)(a.p, {
		className: i(r?.title, t),
		"data-slot": "alert-title",
		...n,
		children: e
	});
};
S.displayName = "HeroUI.Alert.Title";
var C = ({ children: e, className: t, ...n }) => {
	let { slots: r } = (0, h.use)(_);
	return /*#__PURE__*/ (0, g.jsx)(a.span, {
		className: i(r?.description, t),
		"data-slot": "alert-description",
		...n,
		children: e
	});
};
C.displayName = "HeroUI.Alert.Description";
// node_modules/@heroui/react/dist/components/alert/index.js
var w = Object.assign(y, {
	Root: y,
	Indicator: b,
	Content: x,
	Title: S,
	Description: C
});
// upstream/demos/en/alert/basic.tsx
function T() {
	return /* @__PURE__ */ (0, g.jsxs)("div", {
		className: "grid w-full max-w-xl gap-4",
		children: [
			/* @__PURE__ */ (0, g.jsxs)(w, { children: [/* @__PURE__ */ (0, g.jsx)(w.Indicator, {}), /* @__PURE__ */ (0, g.jsxs)(w.Content, { children: [/* @__PURE__ */ (0, g.jsx)(w.Title, { children: "New features available" }), /* @__PURE__ */ (0, g.jsx)(w.Description, { children: "Check out our latest updates including dark mode support and improved accessibility features." })] })] }),
			/* @__PURE__ */ (0, g.jsxs)(w, {
				status: "accent",
				children: [
					/* @__PURE__ */ (0, g.jsx)(w.Indicator, {}),
					/* @__PURE__ */ (0, g.jsxs)(w.Content, { children: [
						/* @__PURE__ */ (0, g.jsx)(w.Title, { children: "Update available" }),
						/* @__PURE__ */ (0, g.jsx)(w.Description, { children: "A new version of the application is available. Please refresh to get the latest features and bug fixes." }),
						/* @__PURE__ */ (0, g.jsx)(d, {
							className: "mt-2 sm:hidden",
							size: "sm",
							variant: "primary",
							children: "Refresh"
						})
					] }),
					/* @__PURE__ */ (0, g.jsx)(d, {
						className: "hidden sm:block",
						size: "sm",
						variant: "primary",
						children: "Refresh"
					})
				]
			}),
			/* @__PURE__ */ (0, g.jsxs)(w, {
				status: "danger",
				children: [
					/* @__PURE__ */ (0, g.jsx)(w.Indicator, {}),
					/* @__PURE__ */ (0, g.jsxs)(w.Content, { children: [
						/* @__PURE__ */ (0, g.jsx)(w.Title, { children: "Unable to connect to server" }),
						/* @__PURE__ */ (0, g.jsxs)(w.Description, { children: ["We're experiencing connection issues. Please try the following:", /* @__PURE__ */ (0, g.jsxs)("ul", {
							className: "mt-2 list-inside list-disc space-y-1 text-sm",
							children: [
								/* @__PURE__ */ (0, g.jsx)("li", { children: "Check your internet connection" }),
								/* @__PURE__ */ (0, g.jsx)("li", { children: "Refresh the page" }),
								/* @__PURE__ */ (0, g.jsx)("li", { children: "Clear your browser cache" })
							]
						})] }),
						/* @__PURE__ */ (0, g.jsx)(d, {
							className: "mt-2 sm:hidden",
							size: "sm",
							variant: "danger",
							children: "Retry"
						})
					] }),
					/* @__PURE__ */ (0, g.jsx)(d, {
						className: "hidden sm:block",
						size: "sm",
						variant: "danger",
						children: "Retry"
					})
				]
			}),
			/* @__PURE__ */ (0, g.jsxs)(w, {
				status: "success",
				children: [
					/* @__PURE__ */ (0, g.jsx)(w.Indicator, {}),
					/* @__PURE__ */ (0, g.jsx)(w.Content, { children: /* @__PURE__ */ (0, g.jsx)(w.Title, { children: "Profile updated successfully" }) }),
					/* @__PURE__ */ (0, g.jsx)(f, {})
				]
			}),
			/* @__PURE__ */ (0, g.jsxs)(w, {
				status: "accent",
				children: [/* @__PURE__ */ (0, g.jsx)(w.Indicator, { children: /* @__PURE__ */ (0, g.jsx)(p, { size: "sm" }) }), /* @__PURE__ */ (0, g.jsxs)(w.Content, { children: [/* @__PURE__ */ (0, g.jsx)(w.Title, { children: "Processing your request" }), /* @__PURE__ */ (0, g.jsx)(w.Description, { children: "Please wait while we sync your data. This may take a few moments." })] })]
			}),
			/* @__PURE__ */ (0, g.jsxs)(w, {
				status: "warning",
				children: [/* @__PURE__ */ (0, g.jsx)(w.Indicator, {}), /* @__PURE__ */ (0, g.jsxs)(w.Content, { children: [/* @__PURE__ */ (0, g.jsx)(w.Title, { children: "Scheduled maintenance" }), /* @__PURE__ */ (0, g.jsx)(w.Description, { children: "Our services will be unavailable on Sunday, March 15th from 2:00 AM to 6:00 AM UTC for scheduled maintenance." })] })]
			})
		]
	});
}
export { T as Basic };
