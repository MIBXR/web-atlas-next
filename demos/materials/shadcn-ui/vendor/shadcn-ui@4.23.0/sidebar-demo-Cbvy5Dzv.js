import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { t as n } from "./createLucideIcon-B1HI5iko.js";
import { n as r, t as i } from "./chevron-right-P1rCfe7K.js";
import { C as ee, S as te, _ as ne, a, b as o, c as s, d as c, f as l, g as u, h as d, l as f, o as p, p as m, r as h, s as g, u as _, x as v } from "./icon-placeholder-BTF3H_W7.js";
import { t as y } from "./chevrons-up-down-CvT-sKsR.js";
import { o as b, r as x, t as S } from "./avatar-xtYo3Gov.js";
import { n as C, r as w, t as T } from "./collapsible-C-8FK08d.js";
import { a as E, d as D, h as O, i as k, o as A, r as j, t as M, u as N } from "./dropdown-menu-CqSzBIr7.js";
import { _ as P, c as F, d as I, f as L, g as R, h as z, i as B, l as V, m as re, n as H, o as U, p as W, r as G, s as K, t as q, u as J, v as Y, y as X } from "./sidebar-CYThL0dU.js";
import { t as ie } from "./jsx-runtime-lAxUcZjR.js";
var ae = n("AudioWaveform", [["path", {
	d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
	key: "57tc96"
}]]), oe = n("Forward", [["polyline", {
	points: "15 17 20 12 15 7",
	key: "1w3sku"
}], ["path", {
	d: "M4 18v-2a4 4 0 0 1 4-4h12",
	key: "jmiej9"
}]]), se = /* @__PURE__ */ e(t(), 1), Z = ie(), Q = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%23964b31%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3ED%3C%2Ftext%3E%3C%2Fsvg%3E"
	},
	teams: [
		{
			name: "Acme Inc",
			logo: c,
			plan: "Enterprise"
		},
		{
			name: "Acme Corp.",
			logo: ae,
			plan: "Startup"
		},
		{
			name: "Evil Corp.",
			logo: ne,
			plan: "Free"
		}
	],
	navMain: [
		{
			title: "Playground",
			url: "#",
			icon: a,
			isActive: !0,
			items: [
				{
					title: "History",
					url: "#"
				},
				{
					title: "Starred",
					url: "#"
				},
				{
					title: "Settings",
					url: "#"
				}
			]
		},
		{
			title: "Models",
			url: "#",
			icon: v,
			items: [
				{
					title: "Genesis",
					url: "#"
				},
				{
					title: "Explorer",
					url: "#"
				},
				{
					title: "Quantum",
					url: "#"
				}
			]
		},
		{
			title: "Documentation",
			url: "#",
			icon: te,
			items: [
				{
					title: "Introduction",
					url: "#"
				},
				{
					title: "Get Started",
					url: "#"
				},
				{
					title: "Tutorials",
					url: "#"
				},
				{
					title: "Changelog",
					url: "#"
				}
			]
		},
		{
			title: "Settings",
			url: "#",
			icon: g,
			items: [
				{
					title: "General",
					url: "#"
				},
				{
					title: "Team",
					url: "#"
				},
				{
					title: "Billing",
					url: "#"
				},
				{
					title: "Limits",
					url: "#"
				}
			]
		}
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: l
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: o
		},
		{
			name: "Travel",
			url: "#",
			icon: f
		}
	]
};
function ce({ teams: e }) {
	let { isMobile: t } = X(), [n, r] = se.useState(e[0]);
	return n ? /* @__PURE__ */ (0, Z.jsx)(V, { children: /* @__PURE__ */ (0, Z.jsx)(L, { children: /* @__PURE__ */ (0, Z.jsxs)(M, { children: [/* @__PURE__ */ (0, Z.jsxs)(O, {
		render: /* @__PURE__ */ (0, Z.jsx)(I, {
			size: "lg",
			className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsx)("div", {
				className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",
				children: /* @__PURE__ */ (0, Z.jsx)(n.logo, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "grid flex-1 text-left text-sm leading-tight",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "truncate font-medium",
					children: n.name
				}), /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "truncate text-xs",
					children: n.plan
				})]
			}),
			/* @__PURE__ */ (0, Z.jsx)(y, { className: "ml-auto" })
		]
	}), /* @__PURE__ */ (0, Z.jsxs)(j, {
		className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
		align: "start",
		side: t ? "bottom" : "right",
		sideOffset: 4,
		children: [
			/* @__PURE__ */ (0, Z.jsxs)(k, { children: [/* @__PURE__ */ (0, Z.jsx)(A, {
				className: "text-xs text-muted-foreground",
				children: "Teams"
			}), e.map((e, t) => /* @__PURE__ */ (0, Z.jsxs)(E, {
				onClick: () => r(e),
				className: "gap-2 p-2",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("div", {
						className: "flex size-6 items-center justify-center rounded-md border",
						children: /* @__PURE__ */ (0, Z.jsx)(e.logo, { className: "size-3.5 shrink-0" })
					}),
					e.name,
					/* @__PURE__ */ (0, Z.jsxs)(D, { children: ["⌘", t + 1] })
				]
			}, e.name))] }),
			/* @__PURE__ */ (0, Z.jsx)(N, {}),
			/* @__PURE__ */ (0, Z.jsx)(k, { children: /* @__PURE__ */ (0, Z.jsxs)(E, {
				className: "gap-2 p-2",
				children: [/* @__PURE__ */ (0, Z.jsx)("div", {
					className: "flex size-6 items-center justify-center rounded-md border bg-transparent",
					children: /* @__PURE__ */ (0, Z.jsx)(s, { className: "size-4" })
				}), /* @__PURE__ */ (0, Z.jsx)("div", {
					className: "font-medium text-muted-foreground",
					children: "Add team"
				})]
			}) })
		]
	})] }) }) }) : null;
}
function le({ items: e }) {
	return /* @__PURE__ */ (0, Z.jsxs)(B, { children: [/* @__PURE__ */ (0, Z.jsx)(U, { children: "Platform" }), /* @__PURE__ */ (0, Z.jsx)(V, { children: e.map((e) => /* @__PURE__ */ (0, Z.jsx)(T, {
		defaultOpen: e.isActive,
		className: "group/collapsible",
		children: /* @__PURE__ */ (0, Z.jsxs)(L, { children: [/* @__PURE__ */ (0, Z.jsxs)(w, {
			render: /* @__PURE__ */ (0, Z.jsx)(I, { tooltip: e.title }),
			children: [
				e.icon && /* @__PURE__ */ (0, Z.jsx)(e.icon, {}),
				/* @__PURE__ */ (0, Z.jsx)("span", { children: e.title }),
				/* @__PURE__ */ (0, Z.jsx)(i, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
			]
		}), /* @__PURE__ */ (0, Z.jsx)(C, { children: /* @__PURE__ */ (0, Z.jsx)(W, { children: e.items?.map((e) => /* @__PURE__ */ (0, Z.jsx)(z, { children: /* @__PURE__ */ (0, Z.jsx)(re, {
			render: /* @__PURE__ */ (0, Z.jsx)("a", { href: e.url }),
			children: /* @__PURE__ */ (0, Z.jsx)("span", { children: e.title })
		}) }, e.title)) }) })] })
	}, e.title)) })] });
}
function $({ projects: e }) {
	let { isMobile: t } = X();
	return /* @__PURE__ */ (0, Z.jsxs)(B, {
		className: "group-data-[collapsible=icon]:hidden",
		children: [/* @__PURE__ */ (0, Z.jsx)(U, { children: "Projects" }), /* @__PURE__ */ (0, Z.jsxs)(V, { children: [e.map((e) => /* @__PURE__ */ (0, Z.jsxs)(L, { children: [/* @__PURE__ */ (0, Z.jsxs)(I, {
			render: /* @__PURE__ */ (0, Z.jsx)("a", { href: e.url }),
			children: [/* @__PURE__ */ (0, Z.jsx)(e.icon, {}), /* @__PURE__ */ (0, Z.jsx)("span", { children: e.name })]
		}), /* @__PURE__ */ (0, Z.jsxs)(M, { children: [/* @__PURE__ */ (0, Z.jsxs)(O, {
			render: /* @__PURE__ */ (0, Z.jsx)(J, { showOnHover: !0 }),
			children: [/* @__PURE__ */ (0, Z.jsx)(d, {}), /* @__PURE__ */ (0, Z.jsx)("span", {
				className: "sr-only",
				children: "More"
			})]
		}), /* @__PURE__ */ (0, Z.jsxs)(j, {
			className: "w-48 rounded-lg",
			side: t ? "bottom" : "right",
			align: t ? "end" : "start",
			children: [
				/* @__PURE__ */ (0, Z.jsxs)(E, { children: [/* @__PURE__ */ (0, Z.jsx)(m, { className: "text-muted-foreground" }), /* @__PURE__ */ (0, Z.jsx)("span", { children: "View Project" })] }),
				/* @__PURE__ */ (0, Z.jsxs)(E, { children: [/* @__PURE__ */ (0, Z.jsx)(oe, { className: "text-muted-foreground" }), /* @__PURE__ */ (0, Z.jsx)("span", { children: "Share Project" })] }),
				/* @__PURE__ */ (0, Z.jsx)(N, {}),
				/* @__PURE__ */ (0, Z.jsxs)(E, { children: [/* @__PURE__ */ (0, Z.jsx)(h, { className: "text-muted-foreground" }), /* @__PURE__ */ (0, Z.jsx)("span", { children: "Delete Project" })] })
			]
		})] })] }, e.name)), /* @__PURE__ */ (0, Z.jsx)(L, { children: /* @__PURE__ */ (0, Z.jsxs)(I, {
			className: "text-sidebar-foreground/70",
			children: [/* @__PURE__ */ (0, Z.jsx)(d, { className: "text-sidebar-foreground/70" }), /* @__PURE__ */ (0, Z.jsx)("span", { children: "More" })]
		}) })] })]
	});
}
function ue({ user: e }) {
	let { isMobile: t } = X();
	return /* @__PURE__ */ (0, Z.jsx)(V, { children: /* @__PURE__ */ (0, Z.jsx)(L, { children: /* @__PURE__ */ (0, Z.jsxs)(M, { children: [/* @__PURE__ */ (0, Z.jsxs)(O, {
		render: /* @__PURE__ */ (0, Z.jsx)(I, {
			size: "lg",
			className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
		}),
		children: [
			/* @__PURE__ */ (0, Z.jsxs)(S, {
				className: "h-8 w-8 rounded-lg",
				children: [/* @__PURE__ */ (0, Z.jsx)(b, {
					src: e.avatar,
					alt: e.name
				}), /* @__PURE__ */ (0, Z.jsx)(x, {
					className: "rounded-lg",
					children: "CN"
				})]
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "grid flex-1 text-left text-sm leading-tight",
				children: [/* @__PURE__ */ (0, Z.jsx)("span", {
					className: "truncate font-medium",
					children: e.name
				}), /* @__PURE__ */ (0, Z.jsx)("span", {
					className: "truncate text-xs",
					children: e.email
				})]
			}),
			/* @__PURE__ */ (0, Z.jsx)(y, { className: "ml-auto size-4" })
		]
	}), /* @__PURE__ */ (0, Z.jsxs)(j, {
		className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
		side: t ? "bottom" : "right",
		align: "end",
		sideOffset: 4,
		children: [
			/* @__PURE__ */ (0, Z.jsx)(k, { children: /* @__PURE__ */ (0, Z.jsx)(A, {
				className: "p-0 font-normal",
				children: /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
					children: [/* @__PURE__ */ (0, Z.jsxs)(S, {
						className: "h-8 w-8 rounded-lg",
						children: [/* @__PURE__ */ (0, Z.jsx)(b, {
							src: e.avatar,
							alt: e.name
						}), /* @__PURE__ */ (0, Z.jsx)(x, {
							className: "rounded-lg",
							children: "CN"
						})]
					}), /* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "grid flex-1 text-left text-sm leading-tight",
						children: [/* @__PURE__ */ (0, Z.jsx)("span", {
							className: "truncate font-medium",
							children: e.name
						}), /* @__PURE__ */ (0, Z.jsx)("span", {
							className: "truncate text-xs",
							children: e.email
						})]
					})]
				})
			}) }),
			/* @__PURE__ */ (0, Z.jsx)(N, {}),
			/* @__PURE__ */ (0, Z.jsx)(k, { children: /* @__PURE__ */ (0, Z.jsxs)(E, { children: [/* @__PURE__ */ (0, Z.jsx)(p, {}), "Upgrade to Pro"] }) }),
			/* @__PURE__ */ (0, Z.jsx)(N, {}),
			/* @__PURE__ */ (0, Z.jsxs)(k, { children: [
				/* @__PURE__ */ (0, Z.jsxs)(E, { children: [/* @__PURE__ */ (0, Z.jsx)(r, {}), "Account"] }),
				/* @__PURE__ */ (0, Z.jsxs)(E, { children: [/* @__PURE__ */ (0, Z.jsx)(u, {}), "Billing"] }),
				/* @__PURE__ */ (0, Z.jsxs)(E, { children: [/* @__PURE__ */ (0, Z.jsx)(ee, {}), "Notifications"] })
			] }),
			/* @__PURE__ */ (0, Z.jsx)(N, {}),
			/* @__PURE__ */ (0, Z.jsx)(k, { children: /* @__PURE__ */ (0, Z.jsxs)(E, { children: [/* @__PURE__ */ (0, Z.jsx)(_, {}), "Log out"] }) })
		]
	})] }) }) });
}
function de({ ...e }) {
	return /* @__PURE__ */ (0, Z.jsxs)(R, { children: [/* @__PURE__ */ (0, Z.jsxs)(q, {
		collapsible: "icon",
		...e,
		children: [
			/* @__PURE__ */ (0, Z.jsx)(K, { children: /* @__PURE__ */ (0, Z.jsx)(ce, { teams: Q.teams }) }),
			/* @__PURE__ */ (0, Z.jsxs)(H, { children: [/* @__PURE__ */ (0, Z.jsx)(le, { items: Q.navMain }), /* @__PURE__ */ (0, Z.jsx)($, { projects: Q.projects })] }),
			/* @__PURE__ */ (0, Z.jsx)(G, { children: /* @__PURE__ */ (0, Z.jsx)(ue, { user: Q.user }) }),
			/* @__PURE__ */ (0, Z.jsx)(P, {})
		]
	}), /* @__PURE__ */ (0, Z.jsx)(F, { children: /* @__PURE__ */ (0, Z.jsx)("header", {
		className: "flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12",
		children: /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "flex items-center gap-2 px-4",
			children: /* @__PURE__ */ (0, Z.jsx)(Y, { className: "-ml-1" })
		})
	}) })] });
}
export { de as default };
