import { t as e } from "./calendar-IssIZKiE.js";
import { t } from "./jsx-runtime-C1t0izHF.js";
// upstream/demos/en/calendar/basic.tsx
var n = t();
function r() {
	return /* @__PURE__ */ (0, n.jsxs)(e, {
		"aria-label": "Event date",
		children: [/* @__PURE__ */ (0, n.jsxs)(e.Header, { children: [
			/* @__PURE__ */ (0, n.jsx)(e.Heading, {}),
			/* @__PURE__ */ (0, n.jsx)(e.NavButton, { slot: "previous" }),
			/* @__PURE__ */ (0, n.jsx)(e.NavButton, { slot: "next" })
		] }), /* @__PURE__ */ (0, n.jsxs)(e.Grid, { children: [/* @__PURE__ */ (0, n.jsx)(e.GridHeader, { children: (t) => /* @__PURE__ */ (0, n.jsx)(e.HeaderCell, { children: t }) }), /* @__PURE__ */ (0, n.jsx)(e.GridBody, { children: (t) => /* @__PURE__ */ (0, n.jsx)(e.Cell, { date: t }) })] })]
	});
}
export { r as Basic };
