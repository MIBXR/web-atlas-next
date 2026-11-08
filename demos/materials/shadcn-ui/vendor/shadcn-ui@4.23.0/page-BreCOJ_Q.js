import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { n, r, t as i } from "./collapsible-C-8FK08d.js";
import { _ as a, c as o, d as s, f as c, g as l, h as u, i as d, l as f, m as p, n as m, o as h, p as g, r as _, s as v, t as y, u as b, v as x, y as S } from "./sidebar-CYThL0dU.js";
import { t as C } from "./icon-placeholder-BTF3H_W7.js";
import { t as w } from "./jsx-runtime-lAxUcZjR.js";
import { a as T, d as E, h as D, i as O, o as k, r as A, t as j, u as M } from "./dropdown-menu-CqSzBIr7.js";
import { o as N, r as P, t as F } from "./avatar-xtYo3Gov.js";
import { a as I, i as L, o as R, r as z, s as B, t as V } from "./breadcrumb-CHb2OoeU.js";
import { t as H } from "./separator-DPldDFzU.js";
// upstream/registry/bases/base/blocks/sidebar-07/components/nav-main.tsx
var U = /* @__PURE__ */ e(t(), 1), W = w();
function G({ items: e }) {
	return /* @__PURE__ */ (0, W.jsxs)(d, { children: [/* @__PURE__ */ (0, W.jsx)(h, { children: "Platform" }), /* @__PURE__ */ (0, W.jsx)(f, { children: e.map((e) => /* @__PURE__ */ (0, W.jsxs)(i, {
		defaultOpen: e.isActive,
		className: "group/collapsible",
		render: /* @__PURE__ */ (0, W.jsx)(c, {}),
		children: [/* @__PURE__ */ (0, W.jsxs)(r, {
			render: /* @__PURE__ */ (0, W.jsx)(s, { tooltip: e.title }),
			children: [
				e.icon,
				/* @__PURE__ */ (0, W.jsx)("span", { children: e.title }),
				/* @__PURE__ */ (0, W.jsx)(C, {
					lucide: "ChevronRightIcon",
					tabler: "IconChevronRight",
					hugeicons: "ArrowRight01Icon",
					phosphor: "CaretRightIcon",
					remixicon: "RiArrowRightSLine",
					className: "ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90"
				})
			]
		}), /* @__PURE__ */ (0, W.jsx)(n, { children: /* @__PURE__ */ (0, W.jsx)(g, { children: e.items?.map((e) => /* @__PURE__ */ (0, W.jsx)(u, { children: /* @__PURE__ */ (0, W.jsx)(p, {
			render: /* @__PURE__ */ (0, W.jsx)("a", { href: e.url }),
			children: /* @__PURE__ */ (0, W.jsx)("span", { children: e.title })
		}) }, e.title)) }) })]
	}, e.title)) })] });
}
// upstream/registry/bases/base/blocks/sidebar-07/components/nav-projects.tsx
function K({ projects: e }) {
	let { isMobile: t } = S();
	return /* @__PURE__ */ (0, W.jsxs)(d, {
		className: "group-data-[collapsible=icon]:hidden",
		children: [/* @__PURE__ */ (0, W.jsx)(h, { children: "Projects" }), /* @__PURE__ */ (0, W.jsxs)(f, { children: [e.map((e) => /* @__PURE__ */ (0, W.jsxs)(c, { children: [/* @__PURE__ */ (0, W.jsxs)(s, {
			render: /* @__PURE__ */ (0, W.jsx)("a", { href: e.url }),
			children: [e.icon, /* @__PURE__ */ (0, W.jsx)("span", { children: e.name })]
		}), /* @__PURE__ */ (0, W.jsxs)(j, { children: [/* @__PURE__ */ (0, W.jsxs)(D, {
			render: /* @__PURE__ */ (0, W.jsx)(b, {
				showOnHover: !0,
				className: "aria-expanded:bg-muted"
			}),
			children: [/* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "MoreHorizontalIcon",
				tabler: "IconDots",
				hugeicons: "MoreHorizontalCircle01Icon",
				phosphor: "DotsThreeOutlineIcon",
				remixicon: "RiMoreLine"
			}), /* @__PURE__ */ (0, W.jsx)("span", {
				className: "sr-only",
				children: "More"
			})]
		}), /* @__PURE__ */ (0, W.jsxs)(A, {
			className: "w-fit",
			side: t ? "bottom" : "right",
			align: t ? "end" : "start",
			children: [
				/* @__PURE__ */ (0, W.jsxs)(T, { children: [/* @__PURE__ */ (0, W.jsx)(C, {
					lucide: "FolderIcon",
					tabler: "IconFolder",
					hugeicons: "FolderIcon",
					phosphor: "FolderIcon",
					remixicon: "RiFolderLine"
				}), /* @__PURE__ */ (0, W.jsx)("span", { children: "View Project" })] }),
				/* @__PURE__ */ (0, W.jsxs)(T, { children: [/* @__PURE__ */ (0, W.jsx)(C, {
					lucide: "ArrowRightIcon",
					tabler: "IconArrowForward",
					hugeicons: "ArrowRightIcon",
					phosphor: "ShareFatIcon",
					remixicon: "RiShareForwardLine"
				}), /* @__PURE__ */ (0, W.jsx)("span", { children: "Share Project" })] }),
				/* @__PURE__ */ (0, W.jsx)(M, {}),
				/* @__PURE__ */ (0, W.jsxs)(T, {
					variant: "destructive",
					children: [/* @__PURE__ */ (0, W.jsx)(C, {
						lucide: "Trash2Icon",
						tabler: "IconTrash",
						hugeicons: "Delete02Icon",
						phosphor: "TrashIcon",
						remixicon: "RiDeleteBinLine"
					}), /* @__PURE__ */ (0, W.jsx)("span", { children: "Delete Project" })]
				})
			]
		})] })] }, e.name)), /* @__PURE__ */ (0, W.jsx)(c, { children: /* @__PURE__ */ (0, W.jsxs)(s, {
			className: "text-sidebar-foreground/70",
			children: [/* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "MoreHorizontalIcon",
				tabler: "IconDots",
				hugeicons: "MoreHorizontalCircle01Icon",
				phosphor: "DotsThreeOutlineIcon",
				remixicon: "RiMoreLine",
				className: "text-sidebar-foreground/70"
			}), /* @__PURE__ */ (0, W.jsx)("span", { children: "More" })]
		}) })] })]
	});
}
// upstream/registry/bases/base/blocks/sidebar-07/components/nav-user.tsx
function q({ user: e }) {
	let { isMobile: t } = S();
	return /* @__PURE__ */ (0, W.jsx)(f, { children: /* @__PURE__ */ (0, W.jsx)(c, { children: /* @__PURE__ */ (0, W.jsxs)(j, { children: [/* @__PURE__ */ (0, W.jsxs)(D, {
		render: /* @__PURE__ */ (0, W.jsx)(s, {
			size: "lg",
			className: "aria-expanded:bg-muted"
		}),
		children: [
			/* @__PURE__ */ (0, W.jsxs)(F, { children: [/* @__PURE__ */ (0, W.jsx)(N, {
				src: e.avatar,
				alt: e.name
			}), /* @__PURE__ */ (0, W.jsx)(P, { children: "CN" })] }),
			/* @__PURE__ */ (0, W.jsxs)("div", {
				className: "grid flex-1 text-left text-sm leading-tight",
				children: [/* @__PURE__ */ (0, W.jsx)("span", {
					className: "truncate font-medium",
					children: e.name
				}), /* @__PURE__ */ (0, W.jsx)("span", {
					className: "truncate text-xs",
					children: e.email
				})]
			}),
			/* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "ChevronsUpDownIcon",
				tabler: "IconSelector",
				hugeicons: "UnfoldMoreIcon",
				phosphor: "CaretUpDownIcon",
				remixicon: "RiArrowUpDownLine",
				className: "ml-auto size-4"
			})
		]
	}), /* @__PURE__ */ (0, W.jsxs)(A, {
		className: "w-fit",
		side: t ? "bottom" : "right",
		align: "end",
		sideOffset: 4,
		children: [
			/* @__PURE__ */ (0, W.jsx)(O, { children: /* @__PURE__ */ (0, W.jsx)(k, {
				className: "p-0 font-normal",
				children: /* @__PURE__ */ (0, W.jsxs)("div", {
					className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
					children: [/* @__PURE__ */ (0, W.jsxs)(F, { children: [/* @__PURE__ */ (0, W.jsx)(N, {
						src: e.avatar,
						alt: e.name
					}), /* @__PURE__ */ (0, W.jsx)(P, { children: "CN" })] }), /* @__PURE__ */ (0, W.jsxs)("div", {
						className: "grid flex-1 text-left text-sm leading-tight",
						children: [/* @__PURE__ */ (0, W.jsx)("span", {
							className: "truncate font-medium",
							children: e.name
						}), /* @__PURE__ */ (0, W.jsx)("span", {
							className: "truncate text-xs",
							children: e.email
						})]
					})]
				})
			}) }),
			/* @__PURE__ */ (0, W.jsx)(M, {}),
			/* @__PURE__ */ (0, W.jsx)(O, { children: /* @__PURE__ */ (0, W.jsxs)(T, { children: [/* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "SparklesIcon",
				tabler: "IconSparkles",
				hugeicons: "SparklesIcon",
				phosphor: "SparkleIcon",
				remixicon: "RiSparklingLine"
			}), "Upgrade to Pro"] }) }),
			/* @__PURE__ */ (0, W.jsx)(M, {}),
			/* @__PURE__ */ (0, W.jsxs)(O, { children: [
				/* @__PURE__ */ (0, W.jsxs)(T, { children: [/* @__PURE__ */ (0, W.jsx)(C, {
					lucide: "BadgeCheckIcon",
					tabler: "IconRosetteDiscountCheck",
					hugeicons: "CheckmarkBadgeIcon",
					phosphor: "CheckCircleIcon",
					remixicon: "RiCheckboxCircleLine"
				}), "Account"] }),
				/* @__PURE__ */ (0, W.jsxs)(T, { children: [/* @__PURE__ */ (0, W.jsx)(C, {
					lucide: "CreditCardIcon",
					tabler: "IconCreditCard",
					hugeicons: "CreditCardIcon",
					phosphor: "CreditCardIcon",
					remixicon: "RiBankCardLine"
				}), "Billing"] }),
				/* @__PURE__ */ (0, W.jsxs)(T, { children: [/* @__PURE__ */ (0, W.jsx)(C, {
					lucide: "BellIcon",
					tabler: "IconBell",
					hugeicons: "NotificationIcon",
					phosphor: "BellIcon",
					remixicon: "RiNotificationLine"
				}), "Notifications"] })
			] }),
			/* @__PURE__ */ (0, W.jsx)(M, {}),
			/* @__PURE__ */ (0, W.jsxs)(T, { children: [/* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "LogOutIcon",
				tabler: "IconLogout",
				hugeicons: "LogoutIcon",
				phosphor: "SignOutIcon",
				remixicon: "RiLogoutBoxLine"
			}), "Log out"] })
		]
	})] }) }) });
}
// upstream/registry/bases/base/blocks/sidebar-07/components/team-switcher.tsx
function J({ teams: e }) {
	let { isMobile: t } = S(), [n, r] = U.useState(e[0]);
	return n ? /* @__PURE__ */ (0, W.jsx)(f, { children: /* @__PURE__ */ (0, W.jsx)(c, { children: /* @__PURE__ */ (0, W.jsxs)(j, { children: [/* @__PURE__ */ (0, W.jsxs)(D, {
		render: /* @__PURE__ */ (0, W.jsx)(s, {
			size: "lg",
			className: "data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground"
		}),
		children: [
			/* @__PURE__ */ (0, W.jsx)("div", {
				className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",
				children: n.logo
			}),
			/* @__PURE__ */ (0, W.jsxs)("div", {
				className: "grid flex-1 text-left text-sm leading-tight",
				children: [/* @__PURE__ */ (0, W.jsx)("span", {
					className: "truncate font-medium",
					children: n.name
				}), /* @__PURE__ */ (0, W.jsx)("span", {
					className: "truncate text-xs",
					children: n.plan
				})]
			}),
			/* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "ChevronsUpDownIcon",
				tabler: "IconSelector",
				hugeicons: "UnfoldMoreIcon",
				phosphor: "CaretUpDownIcon",
				remixicon: "RiArrowUpDownLine",
				className: "ml-auto"
			})
		]
	}), /* @__PURE__ */ (0, W.jsxs)(A, {
		className: "w-fit",
		align: "start",
		side: t ? "bottom" : "right",
		sideOffset: 4,
		children: [
			/* @__PURE__ */ (0, W.jsxs)(O, { children: [/* @__PURE__ */ (0, W.jsx)(k, {
				className: "text-xs text-muted-foreground",
				children: "Teams"
			}), e.map((e, t) => /* @__PURE__ */ (0, W.jsxs)(T, {
				onClick: () => r(e),
				className: "gap-2 p-2",
				children: [
					/* @__PURE__ */ (0, W.jsx)("div", {
						className: "flex size-6 items-center justify-center rounded-md border",
						children: e.logo
					}),
					e.name,
					/* @__PURE__ */ (0, W.jsxs)(E, { children: ["⌘", t + 1] })
				]
			}, e.name))] }),
			/* @__PURE__ */ (0, W.jsx)(M, {}),
			/* @__PURE__ */ (0, W.jsx)(O, { children: /* @__PURE__ */ (0, W.jsxs)(T, {
				className: "gap-2 p-2",
				children: [/* @__PURE__ */ (0, W.jsx)("div", {
					className: "flex size-6 items-center justify-center rounded-md border bg-transparent",
					children: /* @__PURE__ */ (0, W.jsx)(C, {
						lucide: "PlusIcon",
						tabler: "IconPlus",
						hugeicons: "PlusSignIcon",
						phosphor: "PlusIcon",
						remixicon: "RiAddLine",
						className: "size-4"
					})
				}), /* @__PURE__ */ (0, W.jsx)("div", {
					className: "font-medium text-muted-foreground",
					children: "Add team"
				})]
			}) })
		]
	})] }) }) }) : null;
}
// upstream/registry/bases/base/blocks/sidebar-07/components/app-sidebar.tsx
var Y = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%23964b31%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3ED%3C%2Ftext%3E%3C%2Fsvg%3E"
	},
	teams: [
		{
			name: "Acme Inc",
			logo: /* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "GalleryVerticalEndIcon",
				tabler: "IconLayoutRows",
				hugeicons: "LayoutBottomIcon",
				phosphor: "RowsIcon",
				remixicon: "RiGalleryLine"
			}),
			plan: "Enterprise"
		},
		{
			name: "Acme Corp.",
			logo: /* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "AudioLinesIcon",
				tabler: "IconWaveSine",
				hugeicons: "AudioWave01Icon",
				phosphor: "WaveformIcon",
				remixicon: "RiPulseLine"
			}),
			plan: "Startup"
		},
		{
			name: "Evil Corp.",
			logo: /* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "TerminalIcon",
				tabler: "IconCommand",
				hugeicons: "CommandIcon",
				phosphor: "CommandIcon",
				remixicon: "RiCommandLine"
			}),
			plan: "Free"
		}
	],
	navMain: [
		{
			title: "Playground",
			url: "#",
			icon: /* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "TerminalSquareIcon",
				tabler: "IconTerminal2",
				hugeicons: "ComputerTerminalIcon",
				phosphor: "TerminalIcon",
				remixicon: "RiTerminalBoxLine"
			}),
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
			icon: /* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "BotIcon",
				tabler: "IconRobot",
				hugeicons: "RoboticIcon",
				phosphor: "RobotIcon",
				remixicon: "RiRobotLine"
			}),
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
			icon: /* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "BookOpenIcon",
				tabler: "IconBook",
				hugeicons: "BookOpen02Icon",
				phosphor: "BookOpenIcon",
				remixicon: "RiBookOpenLine"
			}),
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
			icon: /* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "Settings2Icon",
				tabler: "IconSettings",
				hugeicons: "Settings05Icon",
				phosphor: "GearIcon",
				remixicon: "RiSettingsLine"
			}),
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
			icon: /* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "FrameIcon",
				tabler: "IconFrame",
				hugeicons: "CropIcon",
				phosphor: "CropIcon",
				remixicon: "RiCropLine"
			})
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: /* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "PieChartIcon",
				tabler: "IconChartPie",
				hugeicons: "PieChartIcon",
				phosphor: "ChartPieIcon",
				remixicon: "RiPieChartLine"
			})
		},
		{
			name: "Travel",
			url: "#",
			icon: /* @__PURE__ */ (0, W.jsx)(C, {
				lucide: "MapIcon",
				tabler: "IconMap",
				hugeicons: "MapsIcon",
				phosphor: "MapTrifoldIcon",
				remixicon: "RiMapLine"
			})
		}
	]
};
function X({ ...e }) {
	return /* @__PURE__ */ (0, W.jsxs)(y, {
		collapsible: "icon",
		...e,
		children: [
			/* @__PURE__ */ (0, W.jsx)(v, { children: /* @__PURE__ */ (0, W.jsx)(J, { teams: Y.teams }) }),
			/* @__PURE__ */ (0, W.jsxs)(m, { children: [/* @__PURE__ */ (0, W.jsx)(G, { items: Y.navMain }), /* @__PURE__ */ (0, W.jsx)(K, { projects: Y.projects })] }),
			/* @__PURE__ */ (0, W.jsx)(_, { children: /* @__PURE__ */ (0, W.jsx)(q, { user: Y.user }) }),
			/* @__PURE__ */ (0, W.jsx)(a, {})
		]
	});
}
// upstream/registry/bases/base/blocks/sidebar-07/page.tsx
function Z() {
	return /* @__PURE__ */ (0, W.jsxs)(l, { children: [/* @__PURE__ */ (0, W.jsx)(X, {}), /* @__PURE__ */ (0, W.jsxs)(o, { children: [/* @__PURE__ */ (0, W.jsx)("header", {
		className: "flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12",
		children: /* @__PURE__ */ (0, W.jsxs)("div", {
			className: "flex items-center gap-2 px-4",
			children: [
				/* @__PURE__ */ (0, W.jsx)(x, { className: "-ml-1" }),
				/* @__PURE__ */ (0, W.jsx)(H, {
					orientation: "vertical",
					className: "mr-2 data-vertical:h-4 data-vertical:self-auto"
				}),
				/* @__PURE__ */ (0, W.jsx)(V, { children: /* @__PURE__ */ (0, W.jsxs)(I, { children: [
					/* @__PURE__ */ (0, W.jsx)(z, {
						className: "hidden md:block",
						children: /* @__PURE__ */ (0, W.jsx)(L, {
							href: "#",
							children: "Build Your Application"
						})
					}),
					/* @__PURE__ */ (0, W.jsx)(B, { className: "hidden md:block" }),
					/* @__PURE__ */ (0, W.jsx)(z, { children: /* @__PURE__ */ (0, W.jsx)(R, { children: "Data Fetching" }) })
				] }) })
			]
		})
	}), /* @__PURE__ */ (0, W.jsxs)("div", {
		className: "flex flex-1 flex-col gap-4 p-4 pt-0",
		children: [/* @__PURE__ */ (0, W.jsxs)("div", {
			className: "grid auto-rows-min gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, W.jsx)("div", { className: "aspect-video rounded-xl bg-muted/50" }),
				/* @__PURE__ */ (0, W.jsx)("div", { className: "aspect-video rounded-xl bg-muted/50" }),
				/* @__PURE__ */ (0, W.jsx)("div", { className: "aspect-video rounded-xl bg-muted/50" })
			]
		}), /* @__PURE__ */ (0, W.jsx)("div", { className: "min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" })]
	})] })] });
}
export { Z as default };
