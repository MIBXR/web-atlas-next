import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { a as n, h as r, i, n as a, o, r as s, t as c, u as l } from "./dropdown-menu-CqSzBIr7.js";
import { a as u, b as d, c as f, d as p, f as m, g as h, i as g, l as _, n as v, o as y, r as b, s as x, t as ee, u as S, v as te, y as ne } from "./sidebar-CYThL0dU.js";
import { t as C } from "./icon-placeholder-BTF3H_W7.js";
import { t as w } from "./jsx-runtime-lAxUcZjR.js";
import { t as T } from "./button-DmMhlFcj.js";
import { o as re, r as ie, t as ae } from "./avatar-xtYo3Gov.js";
import { b as oe, i as se, m as ce, n as le, p as E, r as ue, t as de } from "./chart-BjqWQaIR.js";
import { a as fe, i as D, n as pe, o as O, r as me, s as k, t as he } from "./card-Cc7Sw7Ur.js";
import { i as A, n as j, o as ge, r as _e, s as M, t as N } from "./select-CXL1eyy7.js";
import { n as ve, t as ye } from "./toggle-group-DArchzHI.js";
import { t as be } from "./react-dom-BasjwewA.js";
import { a as xe, d as Se, f as Ce, h as we, i as Te, l as Ee, n as De, o as Oe, r as ke, s as Ae, t as je, u as Me } from "./useTable-B7Lmb1dj.js";
import { t as Ne } from "./dist-DffedT9e.js";
import { t as Pe } from "./badge-C4JaLKK1.js";
import { t as Fe } from "./checkbox-BZCfKcOg.js";
import { a as Ie, c as Le, i as Re, n as ze, o as Be, r as Ve, s as He, t as Ue } from "./drawer-DcToVL9J.js";
import { t as We } from "./input-cHYv8lFd.js";
import { t as Ge } from "./label-LoHsVeB8.js";
import { t as Ke } from "./separator-DPldDFzU.js";
import { c as qe, i as Je, n as Ye, o as Xe, s as Ze, t as Qe } from "./table-D1EnsJZM.js";
import { i as $e, n as et, r as tt, t as nt } from "./tabs-CmgXPmMM.js";
// upstream/registry/bases/base/blocks/dashboard-01/components/nav-documents.tsx
var P = /* @__PURE__ */ e(t(), 1), F = w();
function rt({ items: e }) {
	let { isMobile: t } = ne();
	return /* @__PURE__ */ (0, F.jsxs)(g, {
		className: "group-data-[collapsible=icon]:hidden",
		children: [/* @__PURE__ */ (0, F.jsx)(y, { children: "Documents" }), /* @__PURE__ */ (0, F.jsxs)(_, { children: [e.map((e) => /* @__PURE__ */ (0, F.jsxs)(m, { children: [/* @__PURE__ */ (0, F.jsxs)(p, {
			render: /* @__PURE__ */ (0, F.jsx)("a", { href: e.url }),
			children: [e.icon, /* @__PURE__ */ (0, F.jsx)("span", { children: e.name })]
		}), /* @__PURE__ */ (0, F.jsxs)(c, { children: [/* @__PURE__ */ (0, F.jsxs)(r, {
			render: /* @__PURE__ */ (0, F.jsx)(S, {
				showOnHover: !0,
				className: "aria-expanded:bg-muted"
			}),
			children: [/* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "MoreHorizontalIcon",
				tabler: "IconDots",
				hugeicons: "MoreHorizontalCircle01Icon",
				phosphor: "DotsThreeOutlineIcon",
				remixicon: "RiMoreLine"
			}), /* @__PURE__ */ (0, F.jsx)("span", {
				className: "sr-only",
				children: "More"
			})]
		}), /* @__PURE__ */ (0, F.jsxs)(s, {
			className: "w-24",
			side: t ? "bottom" : "right",
			align: t ? "end" : "start",
			children: [
				/* @__PURE__ */ (0, F.jsxs)(n, { children: [/* @__PURE__ */ (0, F.jsx)(C, {
					lucide: "FolderIcon",
					tabler: "IconFolder",
					hugeicons: "Folder01Icon",
					phosphor: "FolderIcon",
					remixicon: "RiFolderLine"
				}), /* @__PURE__ */ (0, F.jsx)("span", { children: "Open" })] }),
				/* @__PURE__ */ (0, F.jsxs)(n, { children: [/* @__PURE__ */ (0, F.jsx)(C, {
					lucide: "ShareIcon",
					tabler: "IconShare3",
					hugeicons: "Share01Icon",
					phosphor: "ShareIcon",
					remixicon: "RiShareLine"
				}), /* @__PURE__ */ (0, F.jsx)("span", { children: "Share" })] }),
				/* @__PURE__ */ (0, F.jsx)(l, {}),
				/* @__PURE__ */ (0, F.jsxs)(n, {
					variant: "destructive",
					children: [/* @__PURE__ */ (0, F.jsx)(C, {
						lucide: "Trash2Icon",
						tabler: "IconTrash",
						hugeicons: "Delete02Icon",
						phosphor: "TrashIcon",
						remixicon: "RiDeleteBinLine"
					}), /* @__PURE__ */ (0, F.jsx)("span", { children: "Delete" })]
				})
			]
		})] })] }, e.name)), /* @__PURE__ */ (0, F.jsx)(m, { children: /* @__PURE__ */ (0, F.jsxs)(p, {
			className: "text-sidebar-foreground/70",
			children: [/* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "MoreHorizontalIcon",
				tabler: "IconDots",
				hugeicons: "MoreHorizontalCircle01Icon",
				phosphor: "DotsThreeOutlineIcon",
				remixicon: "RiMoreLine",
				className: "text-sidebar-foreground/70"
			}), /* @__PURE__ */ (0, F.jsx)("span", { children: "More" })]
		}) })] })]
	});
}
// upstream/registry/bases/base/blocks/dashboard-01/components/nav-main.tsx
function it({ items: e }) {
	return /* @__PURE__ */ (0, F.jsx)(g, { children: /* @__PURE__ */ (0, F.jsxs)(u, {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, F.jsx)(_, { children: /* @__PURE__ */ (0, F.jsxs)(m, {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, F.jsxs)(p, {
				tooltip: "Quick Create",
				className: "min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground",
				children: [/* @__PURE__ */ (0, F.jsx)(C, {
					lucide: "CirclePlusIcon",
					tabler: "IconCirclePlusFilled",
					hugeicons: "PlusSignCircleIcon",
					phosphor: "PlusCircleIcon",
					remixicon: "RiAddCircleFill"
				}), /* @__PURE__ */ (0, F.jsx)("span", { children: "Quick Create" })]
			}), /* @__PURE__ */ (0, F.jsxs)(T, {
				size: "icon",
				className: "size-8 group-data-[collapsible=icon]:opacity-0",
				variant: "outline",
				children: [/* @__PURE__ */ (0, F.jsx)(C, {
					lucide: "MailIcon",
					tabler: "IconMail",
					hugeicons: "Mail01Icon",
					phosphor: "EnvelopeIcon",
					remixicon: "RiMailLine"
				}), /* @__PURE__ */ (0, F.jsx)("span", {
					className: "sr-only",
					children: "Inbox"
				})]
			})]
		}) }), /* @__PURE__ */ (0, F.jsx)(_, { children: e.map((e) => /* @__PURE__ */ (0, F.jsx)(m, { children: /* @__PURE__ */ (0, F.jsxs)(p, {
			tooltip: e.title,
			children: [e.icon, /* @__PURE__ */ (0, F.jsx)("span", { children: e.title })]
		}) }, e.title)) })]
	}) });
}
// upstream/registry/bases/base/blocks/dashboard-01/components/nav-secondary.tsx
function at({ items: e, ...t }) {
	return /* @__PURE__ */ (0, F.jsx)(g, {
		...t,
		children: /* @__PURE__ */ (0, F.jsx)(u, { children: /* @__PURE__ */ (0, F.jsx)(_, { children: e.map((e) => /* @__PURE__ */ (0, F.jsx)(m, { children: /* @__PURE__ */ (0, F.jsxs)(p, {
			render: /* @__PURE__ */ (0, F.jsx)("a", { href: e.url }),
			children: [e.icon, /* @__PURE__ */ (0, F.jsx)("span", { children: e.title })]
		}) }, e.title)) }) })
	});
}
// upstream/registry/bases/base/blocks/dashboard-01/components/nav-user.tsx
function ot({ user: e }) {
	let { isMobile: t } = ne();
	return /* @__PURE__ */ (0, F.jsx)(_, { children: /* @__PURE__ */ (0, F.jsx)(m, { children: /* @__PURE__ */ (0, F.jsxs)(c, { children: [/* @__PURE__ */ (0, F.jsxs)(r, {
		render: /* @__PURE__ */ (0, F.jsx)(p, {
			size: "lg",
			className: "aria-expanded:bg-muted"
		}),
		children: [
			/* @__PURE__ */ (0, F.jsxs)(ae, {
				className: "size-8 rounded-lg grayscale",
				children: [/* @__PURE__ */ (0, F.jsx)(re, {
					src: e.avatar,
					alt: e.name
				}), /* @__PURE__ */ (0, F.jsx)(ie, {
					className: "rounded-lg",
					children: "CN"
				})]
			}),
			/* @__PURE__ */ (0, F.jsxs)("div", {
				className: "grid flex-1 text-left text-sm leading-tight",
				children: [/* @__PURE__ */ (0, F.jsx)("span", {
					className: "truncate font-medium",
					children: e.name
				}), /* @__PURE__ */ (0, F.jsx)("span", {
					className: "truncate text-xs text-foreground/70",
					children: e.email
				})]
			}),
			/* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "EllipsisVerticalIcon",
				tabler: "IconDotsVertical",
				hugeicons: "MoreVerticalCircle01Icon",
				phosphor: "DotsThreeVerticalIcon",
				remixicon: "RiMore2Line",
				className: "ml-auto size-4"
			})
		]
	}), /* @__PURE__ */ (0, F.jsxs)(s, {
		className: "min-w-56",
		side: t ? "bottom" : "right",
		align: "end",
		sideOffset: 4,
		children: [
			/* @__PURE__ */ (0, F.jsx)(i, { children: /* @__PURE__ */ (0, F.jsx)(o, {
				className: "p-0 font-normal",
				children: /* @__PURE__ */ (0, F.jsxs)("div", {
					className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
					children: [/* @__PURE__ */ (0, F.jsxs)(ae, {
						className: "size-8",
						children: [/* @__PURE__ */ (0, F.jsx)(re, {
							src: e.avatar,
							alt: e.name
						}), /* @__PURE__ */ (0, F.jsx)(ie, {
							className: "rounded-lg",
							children: "CN"
						})]
					}), /* @__PURE__ */ (0, F.jsxs)("div", {
						className: "grid flex-1 text-left text-sm leading-tight",
						children: [/* @__PURE__ */ (0, F.jsx)("span", {
							className: "truncate font-medium",
							children: e.name
						}), /* @__PURE__ */ (0, F.jsx)("span", {
							className: "truncate text-xs text-muted-foreground",
							children: e.email
						})]
					})]
				})
			}) }),
			/* @__PURE__ */ (0, F.jsx)(l, {}),
			/* @__PURE__ */ (0, F.jsxs)(i, { children: [
				/* @__PURE__ */ (0, F.jsxs)(n, { children: [/* @__PURE__ */ (0, F.jsx)(C, {
					lucide: "CircleUserRoundIcon",
					tabler: "IconUserCircle",
					hugeicons: "UserCircle02Icon",
					phosphor: "UserCircleIcon",
					remixicon: "RiUserLine"
				}), "Account"] }),
				/* @__PURE__ */ (0, F.jsxs)(n, { children: [/* @__PURE__ */ (0, F.jsx)(C, {
					lucide: "CreditCardIcon",
					tabler: "IconCreditCard",
					hugeicons: "CreditCardIcon",
					phosphor: "CreditCardIcon",
					remixicon: "RiBankCardLine"
				}), "Billing"] }),
				/* @__PURE__ */ (0, F.jsxs)(n, { children: [/* @__PURE__ */ (0, F.jsx)(C, {
					lucide: "BellIcon",
					tabler: "IconNotification",
					hugeicons: "Notification03Icon",
					phosphor: "BellIcon",
					remixicon: "RiNotification3Line"
				}), "Notifications"] })
			] }),
			/* @__PURE__ */ (0, F.jsx)(l, {}),
			/* @__PURE__ */ (0, F.jsxs)(n, { children: [/* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "LogOutIcon",
				tabler: "IconLogout",
				hugeicons: "Logout01Icon",
				phosphor: "SignOutIcon",
				remixicon: "RiLogoutBoxLine"
			}), "Log out"] })
		]
	})] }) }) });
}
// upstream/registry/bases/base/blocks/dashboard-01/components/app-sidebar.tsx
var st = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2096%2096%22%3E%3Crect%20width%3D%2296%22%20height%3D%2296%22%20fill%3D%22%23964b31%22%2F%3E%3Ccircle%20cx%3D%2275%22%20cy%3D%2218%22%20r%3D%2233%22%20fill%3D%22white%22%20opacity%3D%22.12%22%2F%3E%3Ctext%20x%3D%2248%22%20y%3D%2262%22%20font-family%3D%22sans-serif%22%20font-size%3D%2242%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3ED%3C%2Ftext%3E%3C%2Fsvg%3E"
	},
	navMain: [
		{
			title: "Dashboard",
			url: "#",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "LayoutDashboardIcon",
				tabler: "IconDashboard",
				hugeicons: "DashboardSquare01Icon",
				phosphor: "SquaresFourIcon",
				remixicon: "RiDashboardLine"
			})
		},
		{
			title: "Lifecycle",
			url: "#",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "ListIcon",
				tabler: "IconListDetails",
				hugeicons: "Menu01Icon",
				phosphor: "ListIcon",
				remixicon: "RiListUnordered"
			})
		},
		{
			title: "Analytics",
			url: "#",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "ChartBarIcon",
				tabler: "IconChartBar",
				hugeicons: "ChartHistogramIcon",
				phosphor: "ChartBarIcon",
				remixicon: "RiBarChartLine"
			})
		},
		{
			title: "Projects",
			url: "#",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "FolderIcon",
				tabler: "IconFolder",
				hugeicons: "Folder01Icon",
				phosphor: "FolderIcon",
				remixicon: "RiFolderLine"
			})
		},
		{
			title: "Team",
			url: "#",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "UsersIcon",
				tabler: "IconUsers",
				hugeicons: "UserGroupIcon",
				phosphor: "UsersIcon",
				remixicon: "RiGroupLine"
			})
		}
	],
	navClouds: [
		{
			title: "Capture",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "CameraIcon",
				tabler: "IconCamera",
				hugeicons: "Camera01Icon",
				phosphor: "CameraIcon",
				remixicon: "RiCameraLine"
			}),
			isActive: !0,
			url: "#",
			items: [{
				title: "Active Proposals",
				url: "#"
			}, {
				title: "Archived",
				url: "#"
			}]
		},
		{
			title: "Proposal",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "FileTextIcon",
				tabler: "IconFileDescription",
				hugeicons: "File01Icon",
				phosphor: "FileTextIcon",
				remixicon: "RiFileTextLine"
			}),
			url: "#",
			items: [{
				title: "Active Proposals",
				url: "#"
			}, {
				title: "Archived",
				url: "#"
			}]
		},
		{
			title: "Prompts",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "FileTextIcon",
				tabler: "IconFileAi",
				hugeicons: "File01Icon",
				phosphor: "FileTextIcon",
				remixicon: "RiFileTextLine"
			}),
			url: "#",
			items: [{
				title: "Active Proposals",
				url: "#"
			}, {
				title: "Archived",
				url: "#"
			}]
		}
	],
	navSecondary: [
		{
			title: "Settings",
			url: "#",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "Settings2Icon",
				tabler: "IconSettings",
				hugeicons: "Settings05Icon",
				phosphor: "GearIcon",
				remixicon: "RiSettingsLine"
			})
		},
		{
			title: "Get Help",
			url: "#",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "CircleHelpIcon",
				tabler: "IconHelp",
				hugeicons: "HelpCircleIcon",
				phosphor: "QuestionIcon",
				remixicon: "RiQuestionLine"
			})
		},
		{
			title: "Search",
			url: "#",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "SearchIcon",
				tabler: "IconSearch",
				hugeicons: "SearchIcon",
				phosphor: "MagnifyingGlassIcon",
				remixicon: "RiSearchLine"
			})
		}
	],
	documents: [
		{
			name: "Data Library",
			url: "#",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "DatabaseIcon",
				tabler: "IconDatabase",
				hugeicons: "Database01Icon",
				phosphor: "DatabaseIcon",
				remixicon: "RiDatabase2Line"
			})
		},
		{
			name: "Reports",
			url: "#",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "FileChartColumnIcon",
				tabler: "IconReport",
				hugeicons: "Analytics01Icon",
				phosphor: "ChartLineIcon",
				remixicon: "RiFileChartLine"
			})
		},
		{
			name: "Word Assistant",
			url: "#",
			icon: /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "FileIcon",
				tabler: "IconFileWord",
				hugeicons: "File01Icon",
				phosphor: "FileIcon",
				remixicon: "RiFileLine"
			})
		}
	]
};
function ct({ ...e }) {
	return /* @__PURE__ */ (0, F.jsxs)(ee, {
		collapsible: "offcanvas",
		...e,
		children: [
			/* @__PURE__ */ (0, F.jsx)(x, { children: /* @__PURE__ */ (0, F.jsx)(_, { children: /* @__PURE__ */ (0, F.jsx)(m, { children: /* @__PURE__ */ (0, F.jsxs)(p, {
				className: "data-[slot=sidebar-menu-button]:p-1.5!",
				render: /* @__PURE__ */ (0, F.jsx)("a", { href: "#" }),
				children: [/* @__PURE__ */ (0, F.jsx)(C, {
					lucide: "CommandIcon",
					tabler: "IconInnerShadowTop",
					hugeicons: "CommandIcon",
					phosphor: "CommandIcon",
					remixicon: "RiCommandLine",
					className: "size-5!"
				}), /* @__PURE__ */ (0, F.jsx)("span", {
					className: "text-base font-semibold",
					children: "Acme Inc."
				})]
			}) }) }) }),
			/* @__PURE__ */ (0, F.jsxs)(v, { children: [
				/* @__PURE__ */ (0, F.jsx)(it, { items: st.navMain }),
				/* @__PURE__ */ (0, F.jsx)(rt, { items: st.documents }),
				/* @__PURE__ */ (0, F.jsx)(at, {
					items: st.navSecondary,
					className: "mt-auto"
				})
			] }),
			/* @__PURE__ */ (0, F.jsx)(b, { children: /* @__PURE__ */ (0, F.jsx)(ot, { user: st.user }) })
		]
	});
}
// upstream/registry/bases/base/blocks/dashboard-01/components/chart-area-interactive.tsx
var lt = [
	{
		date: "2024-04-01",
		desktop: 222,
		mobile: 150
	},
	{
		date: "2024-04-02",
		desktop: 97,
		mobile: 180
	},
	{
		date: "2024-04-03",
		desktop: 167,
		mobile: 120
	},
	{
		date: "2024-04-04",
		desktop: 242,
		mobile: 260
	},
	{
		date: "2024-04-05",
		desktop: 373,
		mobile: 290
	},
	{
		date: "2024-04-06",
		desktop: 301,
		mobile: 340
	},
	{
		date: "2024-04-07",
		desktop: 245,
		mobile: 180
	},
	{
		date: "2024-04-08",
		desktop: 409,
		mobile: 320
	},
	{
		date: "2024-04-09",
		desktop: 59,
		mobile: 110
	},
	{
		date: "2024-04-10",
		desktop: 261,
		mobile: 190
	},
	{
		date: "2024-04-11",
		desktop: 327,
		mobile: 350
	},
	{
		date: "2024-04-12",
		desktop: 292,
		mobile: 210
	},
	{
		date: "2024-04-13",
		desktop: 342,
		mobile: 380
	},
	{
		date: "2024-04-14",
		desktop: 137,
		mobile: 220
	},
	{
		date: "2024-04-15",
		desktop: 120,
		mobile: 170
	},
	{
		date: "2024-04-16",
		desktop: 138,
		mobile: 190
	},
	{
		date: "2024-04-17",
		desktop: 446,
		mobile: 360
	},
	{
		date: "2024-04-18",
		desktop: 364,
		mobile: 410
	},
	{
		date: "2024-04-19",
		desktop: 243,
		mobile: 180
	},
	{
		date: "2024-04-20",
		desktop: 89,
		mobile: 150
	},
	{
		date: "2024-04-21",
		desktop: 137,
		mobile: 200
	},
	{
		date: "2024-04-22",
		desktop: 224,
		mobile: 170
	},
	{
		date: "2024-04-23",
		desktop: 138,
		mobile: 230
	},
	{
		date: "2024-04-24",
		desktop: 387,
		mobile: 290
	},
	{
		date: "2024-04-25",
		desktop: 215,
		mobile: 250
	},
	{
		date: "2024-04-26",
		desktop: 75,
		mobile: 130
	},
	{
		date: "2024-04-27",
		desktop: 383,
		mobile: 420
	},
	{
		date: "2024-04-28",
		desktop: 122,
		mobile: 180
	},
	{
		date: "2024-04-29",
		desktop: 315,
		mobile: 240
	},
	{
		date: "2024-04-30",
		desktop: 454,
		mobile: 380
	},
	{
		date: "2024-05-01",
		desktop: 165,
		mobile: 220
	},
	{
		date: "2024-05-02",
		desktop: 293,
		mobile: 310
	},
	{
		date: "2024-05-03",
		desktop: 247,
		mobile: 190
	},
	{
		date: "2024-05-04",
		desktop: 385,
		mobile: 420
	},
	{
		date: "2024-05-05",
		desktop: 481,
		mobile: 390
	},
	{
		date: "2024-05-06",
		desktop: 498,
		mobile: 520
	},
	{
		date: "2024-05-07",
		desktop: 388,
		mobile: 300
	},
	{
		date: "2024-05-08",
		desktop: 149,
		mobile: 210
	},
	{
		date: "2024-05-09",
		desktop: 227,
		mobile: 180
	},
	{
		date: "2024-05-10",
		desktop: 293,
		mobile: 330
	},
	{
		date: "2024-05-11",
		desktop: 335,
		mobile: 270
	},
	{
		date: "2024-05-12",
		desktop: 197,
		mobile: 240
	},
	{
		date: "2024-05-13",
		desktop: 197,
		mobile: 160
	},
	{
		date: "2024-05-14",
		desktop: 448,
		mobile: 490
	},
	{
		date: "2024-05-15",
		desktop: 473,
		mobile: 380
	},
	{
		date: "2024-05-16",
		desktop: 338,
		mobile: 400
	},
	{
		date: "2024-05-17",
		desktop: 499,
		mobile: 420
	},
	{
		date: "2024-05-18",
		desktop: 315,
		mobile: 350
	},
	{
		date: "2024-05-19",
		desktop: 235,
		mobile: 180
	},
	{
		date: "2024-05-20",
		desktop: 177,
		mobile: 230
	},
	{
		date: "2024-05-21",
		desktop: 82,
		mobile: 140
	},
	{
		date: "2024-05-22",
		desktop: 81,
		mobile: 120
	},
	{
		date: "2024-05-23",
		desktop: 252,
		mobile: 290
	},
	{
		date: "2024-05-24",
		desktop: 294,
		mobile: 220
	},
	{
		date: "2024-05-25",
		desktop: 201,
		mobile: 250
	},
	{
		date: "2024-05-26",
		desktop: 213,
		mobile: 170
	},
	{
		date: "2024-05-27",
		desktop: 420,
		mobile: 460
	},
	{
		date: "2024-05-28",
		desktop: 233,
		mobile: 190
	},
	{
		date: "2024-05-29",
		desktop: 78,
		mobile: 130
	},
	{
		date: "2024-05-30",
		desktop: 340,
		mobile: 280
	},
	{
		date: "2024-05-31",
		desktop: 178,
		mobile: 230
	},
	{
		date: "2024-06-01",
		desktop: 178,
		mobile: 200
	},
	{
		date: "2024-06-02",
		desktop: 470,
		mobile: 410
	},
	{
		date: "2024-06-03",
		desktop: 103,
		mobile: 160
	},
	{
		date: "2024-06-04",
		desktop: 439,
		mobile: 380
	},
	{
		date: "2024-06-05",
		desktop: 88,
		mobile: 140
	},
	{
		date: "2024-06-06",
		desktop: 294,
		mobile: 250
	},
	{
		date: "2024-06-07",
		desktop: 323,
		mobile: 370
	},
	{
		date: "2024-06-08",
		desktop: 385,
		mobile: 320
	},
	{
		date: "2024-06-09",
		desktop: 438,
		mobile: 480
	},
	{
		date: "2024-06-10",
		desktop: 155,
		mobile: 200
	},
	{
		date: "2024-06-11",
		desktop: 92,
		mobile: 150
	},
	{
		date: "2024-06-12",
		desktop: 492,
		mobile: 420
	},
	{
		date: "2024-06-13",
		desktop: 81,
		mobile: 130
	},
	{
		date: "2024-06-14",
		desktop: 426,
		mobile: 380
	},
	{
		date: "2024-06-15",
		desktop: 307,
		mobile: 350
	},
	{
		date: "2024-06-16",
		desktop: 371,
		mobile: 310
	},
	{
		date: "2024-06-17",
		desktop: 475,
		mobile: 520
	},
	{
		date: "2024-06-18",
		desktop: 107,
		mobile: 170
	},
	{
		date: "2024-06-19",
		desktop: 341,
		mobile: 290
	},
	{
		date: "2024-06-20",
		desktop: 408,
		mobile: 450
	},
	{
		date: "2024-06-21",
		desktop: 169,
		mobile: 210
	},
	{
		date: "2024-06-22",
		desktop: 317,
		mobile: 270
	},
	{
		date: "2024-06-23",
		desktop: 480,
		mobile: 530
	},
	{
		date: "2024-06-24",
		desktop: 132,
		mobile: 180
	},
	{
		date: "2024-06-25",
		desktop: 141,
		mobile: 190
	},
	{
		date: "2024-06-26",
		desktop: 434,
		mobile: 380
	},
	{
		date: "2024-06-27",
		desktop: 448,
		mobile: 490
	},
	{
		date: "2024-06-28",
		desktop: 149,
		mobile: 200
	},
	{
		date: "2024-06-29",
		desktop: 103,
		mobile: 160
	},
	{
		date: "2024-06-30",
		desktop: 446,
		mobile: 400
	}
], ut = {
	visitors: { label: "Visitors" },
	desktop: {
		label: "Desktop",
		color: "var(--primary)"
	},
	mobile: {
		label: "Mobile",
		color: "var(--primary)"
	}
};
function dt() {
	let e = d(), [t, n] = P.useState("90d");
	P.useEffect(() => {
		e && n("7d");
	}, [e]);
	let r = lt.filter((e) => {
		let n = new Date(e.date), r = /* @__PURE__ */ new Date("2024-06-30"), i = 90;
		t === "30d" ? i = 30 : t === "7d" && (i = 7);
		let a = new Date(r);
		return a.setDate(a.getDate() - i), n >= a;
	});
	return /* @__PURE__ */ (0, F.jsxs)(he, {
		className: "@container/card",
		children: [/* @__PURE__ */ (0, F.jsxs)(O, { children: [
			/* @__PURE__ */ (0, F.jsx)(k, { children: "Total Visitors" }),
			/* @__PURE__ */ (0, F.jsxs)(D, { children: [/* @__PURE__ */ (0, F.jsx)("span", {
				className: "hidden @[540px]/card:block",
				children: "Total for the last 3 months"
			}), /* @__PURE__ */ (0, F.jsx)("span", {
				className: "@[540px]/card:hidden",
				children: "Last 3 months"
			})] }),
			/* @__PURE__ */ (0, F.jsxs)(pe, { children: [/* @__PURE__ */ (0, F.jsxs)(ye, {
				multiple: !1,
				value: t ? [t] : [],
				onValueChange: (e) => {
					n(e[0] ?? "90d");
				},
				variant: "outline",
				className: "hidden *:data-[slot=toggle-group-item]:px-4! @[767px]/card:flex",
				children: [
					/* @__PURE__ */ (0, F.jsx)(ve, {
						value: "90d",
						children: "Last 3 months"
					}),
					/* @__PURE__ */ (0, F.jsx)(ve, {
						value: "30d",
						children: "Last 30 days"
					}),
					/* @__PURE__ */ (0, F.jsx)(ve, {
						value: "7d",
						children: "Last 7 days"
					})
				]
			}), /* @__PURE__ */ (0, F.jsxs)(N, {
				value: t,
				onValueChange: (e) => {
					e !== null && n(e);
				},
				children: [/* @__PURE__ */ (0, F.jsx)(ge, {
					className: "flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden",
					size: "sm",
					"aria-label": "Select a value",
					children: /* @__PURE__ */ (0, F.jsx)(M, { placeholder: "Last 3 months" })
				}), /* @__PURE__ */ (0, F.jsxs)(j, {
					className: "rounded-xl",
					children: [
						/* @__PURE__ */ (0, F.jsx)(A, {
							value: "90d",
							className: "rounded-lg",
							children: "Last 3 months"
						}),
						/* @__PURE__ */ (0, F.jsx)(A, {
							value: "30d",
							className: "rounded-lg",
							children: "Last 30 days"
						}),
						/* @__PURE__ */ (0, F.jsx)(A, {
							value: "7d",
							className: "rounded-lg",
							children: "Last 7 days"
						})
					]
				})]
			})] })
		] }), /* @__PURE__ */ (0, F.jsx)(me, {
			className: "px-2 pt-4 sm:px-6 sm:pt-6",
			children: /* @__PURE__ */ (0, F.jsx)(de, {
				config: ut,
				className: "aspect-auto h-[250px] w-full",
				children: /* @__PURE__ */ (0, F.jsxs)(se, {
					data: r,
					children: [
						/* @__PURE__ */ (0, F.jsxs)("defs", { children: [/* @__PURE__ */ (0, F.jsxs)("linearGradient", {
							id: "fillDesktop",
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, F.jsx)("stop", {
								offset: "5%",
								stopColor: "var(--color-desktop)",
								stopOpacity: 1
							}), /* @__PURE__ */ (0, F.jsx)("stop", {
								offset: "95%",
								stopColor: "var(--color-desktop)",
								stopOpacity: .1
							})]
						}), /* @__PURE__ */ (0, F.jsxs)("linearGradient", {
							id: "fillMobile",
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, F.jsx)("stop", {
								offset: "5%",
								stopColor: "var(--color-mobile)",
								stopOpacity: .8
							}), /* @__PURE__ */ (0, F.jsx)("stop", {
								offset: "95%",
								stopColor: "var(--color-mobile)",
								stopOpacity: .1
							})]
						})] }),
						/* @__PURE__ */ (0, F.jsx)(oe, { vertical: !1 }),
						/* @__PURE__ */ (0, F.jsx)(E, {
							dataKey: "date",
							tickLine: !1,
							axisLine: !1,
							tickMargin: 8,
							minTickGap: 32,
							tickFormatter: (e) => new Date(e).toLocaleDateString("en-US", {
								month: "short",
								day: "numeric"
							})
						}),
						/* @__PURE__ */ (0, F.jsx)(le, {
							cursor: !1,
							content: /* @__PURE__ */ (0, F.jsx)(ue, {
								labelFormatter: (e) => new Date(e).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric"
								}),
								indicator: "dot"
							})
						}),
						/* @__PURE__ */ (0, F.jsx)(ce, {
							dataKey: "mobile",
							type: "natural",
							fill: "url(#fillMobile)",
							stroke: "var(--color-mobile)",
							stackId: "a"
						}),
						/* @__PURE__ */ (0, F.jsx)(ce, {
							dataKey: "desktop",
							type: "natural",
							fill: "url(#fillDesktop)",
							stroke: "var(--color-desktop)",
							stackId: "a"
						})
					]
				})
			})
		})]
	});
}
// node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var ft = /* @__PURE__ */ e(be());
function pt() {
	var e = [...arguments];
	return (0, P.useMemo)(() => (t) => {
		e.forEach((e) => e(t));
	}, e);
}
var mt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function ht(e) {
	let t = Object.prototype.toString.call(e);
	return t === "[object Window]" || t === "[object global]";
}
function gt(e) {
	return "nodeType" in e;
}
function I(e) {
	return e ? ht(e) ? e : gt(e) ? e.ownerDocument?.defaultView ?? window : window : window;
}
function _t(e) {
	let { Document: t } = I(e);
	return e instanceof t;
}
function vt(e) {
	return !ht(e) && e instanceof I(e).HTMLElement;
}
function yt(e) {
	return e instanceof I(e).SVGElement;
}
function bt(e) {
	return e ? ht(e) ? e.document : gt(e) ? _t(e) ? e : vt(e) || yt(e) ? e.ownerDocument : document : document : document;
}
var xt = mt ? P.useLayoutEffect : P.useEffect;
function St(e) {
	let t = (0, P.useRef)(e);
	return xt(() => {
		t.current = e;
	}), (0, P.useCallback)(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
function Ct() {
	let e = (0, P.useRef)(null);
	return [(0, P.useCallback)((t, n) => {
		e.current = setInterval(t, n);
	}, []), (0, P.useCallback)(() => {
		e.current !== null && (clearInterval(e.current), e.current = null);
	}, [])];
}
function wt(e, t) {
	t === void 0 && (t = [e]);
	let n = (0, P.useRef)(e);
	return xt(() => {
		n.current !== e && (n.current = e);
	}, t), n;
}
function Tt(e, t) {
	let n = (0, P.useRef)();
	return (0, P.useMemo)(() => {
		let t = e(n.current);
		return n.current = t, t;
	}, [...t]);
}
function Et(e) {
	let t = St(e), n = (0, P.useRef)(null);
	return [n, (0, P.useCallback)((e) => {
		e !== n.current && t?.(e, n.current), n.current = e;
	}, [])];
}
function Dt(e) {
	let t = (0, P.useRef)();
	return (0, P.useEffect)(() => {
		t.current = e;
	}, [e]), t.current;
}
var Ot = {};
function kt(e, t) {
	return (0, P.useMemo)(() => {
		if (t) return t;
		let n = Ot[e] == null ? 0 : Ot[e] + 1;
		return Ot[e] = n, e + "-" + n;
	}, [e, t]);
}
function At(e) {
	return function(t) {
		return [...arguments].slice(1).reduce((t, n) => {
			let r = Object.entries(n);
			for (let [n, i] of r) {
				let r = t[n];
				r != null && (t[n] = r + e * i);
			}
			return t;
		}, { ...t });
	};
}
var jt = /*#__PURE__*/ At(1), Mt = /*#__PURE__*/ At(-1);
function Nt(e) {
	return "clientX" in e && "clientY" in e;
}
function Pt(e) {
	if (!e) return !1;
	let { KeyboardEvent: t } = I(e.target);
	return t && e instanceof t;
}
function Ft(e) {
	if (!e) return !1;
	let { TouchEvent: t } = I(e.target);
	return t && e instanceof t;
}
function It(e) {
	if (Ft(e)) {
		if (e.touches && e.touches.length) {
			let { clientX: t, clientY: n } = e.touches[0];
			return {
				x: t,
				y: n
			};
		}
		if (e.changedTouches && e.changedTouches.length) {
			let { clientX: t, clientY: n } = e.changedTouches[0];
			return {
				x: t,
				y: n
			};
		}
	}
	return Nt(e) ? {
		x: e.clientX,
		y: e.clientY
	} : null;
}
var Lt = /*#__PURE__*/ Object.freeze({
	Translate: { toString(e) {
		if (!e) return;
		let { x: t, y: n } = e;
		return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
	} },
	Scale: { toString(e) {
		if (!e) return;
		let { scaleX: t, scaleY: n } = e;
		return "scaleX(" + t + ") scaleY(" + n + ")";
	} },
	Transform: { toString(e) {
		if (e) return [Lt.Translate.toString(e), Lt.Scale.toString(e)].join(" ");
	} },
	Transition: { toString(e) {
		let { property: t, duration: n, easing: r } = e;
		return t + " " + n + "ms " + r;
	} }
}), Rt = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function zt(e) {
	return e.matches(Rt) ? e : e.querySelector(Rt);
}
// node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var Bt = { display: "none" };
function Vt(e) {
	let { id: t, value: n } = e;
	return P.createElement("div", {
		id: t,
		style: Bt
	}, n);
}
function Ht(e) {
	let { id: t, announcement: n, ariaLiveType: r = "assertive" } = e;
	return P.createElement("div", {
		id: t,
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			width: 1,
			height: 1,
			margin: -1,
			border: 0,
			padding: 0,
			overflow: "hidden",
			clip: "rect(0 0 0 0)",
			clipPath: "inset(100%)",
			whiteSpace: "nowrap"
		},
		role: "status",
		"aria-live": r,
		"aria-atomic": !0
	}, n);
}
function Ut() {
	let [e, t] = (0, P.useState)("");
	return {
		announce: (0, P.useCallback)((e) => {
			e != null && t(e);
		}, []),
		announcement: e
	};
}
// node_modules/@dnd-kit/core/dist/core.esm.js
var Wt = /*#__PURE__*/ (0, P.createContext)(null);
function Gt(e) {
	let t = (0, P.useContext)(Wt);
	(0, P.useEffect)(() => {
		if (!t) throw Error("useDndMonitor must be used within a children of <DndContext>");
		return t(e);
	}, [e, t]);
}
function Kt() {
	let [e] = (0, P.useState)(() => /* @__PURE__ */ new Set()), t = (0, P.useCallback)((t) => (e.add(t), () => e.delete(t)), [e]);
	return [(0, P.useCallback)((t) => {
		let { type: n, event: r } = t;
		e.forEach((e) => e[n]?.call(e, r));
	}, [e]), t];
}
var qt = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " }, Jt = {
	onDragStart(e) {
		let { active: t } = e;
		return "Picked up draggable item " + t.id + ".";
	},
	onDragOver(e) {
		let { active: t, over: n } = e;
		return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
	},
	onDragEnd(e) {
		let { active: t, over: n } = e;
		return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
	},
	onDragCancel(e) {
		let { active: t } = e;
		return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
	}
};
function Yt(e) {
	let { announcements: t = Jt, container: n, hiddenTextDescribedById: r, screenReaderInstructions: i = qt } = e, { announce: a, announcement: o } = Ut(), s = kt("DndLiveRegion"), [c, l] = (0, P.useState)(!1);
	if ((0, P.useEffect)(() => {
		l(!0);
	}, []), Gt((0, P.useMemo)(() => ({
		onDragStart(e) {
			let { active: n } = e;
			a(t.onDragStart({ active: n }));
		},
		onDragMove(e) {
			let { active: n, over: r } = e;
			t.onDragMove && a(t.onDragMove({
				active: n,
				over: r
			}));
		},
		onDragOver(e) {
			let { active: n, over: r } = e;
			a(t.onDragOver({
				active: n,
				over: r
			}));
		},
		onDragEnd(e) {
			let { active: n, over: r } = e;
			a(t.onDragEnd({
				active: n,
				over: r
			}));
		},
		onDragCancel(e) {
			let { active: n, over: r } = e;
			a(t.onDragCancel({
				active: n,
				over: r
			}));
		}
	}), [a, t])), !c) return null;
	let u = P.createElement(P.Fragment, null, P.createElement(Vt, {
		id: r,
		value: i.draggable
	}), P.createElement(Ht, {
		id: s,
		announcement: o
	}));
	return n ? (0, ft.createPortal)(u, n) : u;
}
var L;
(function(e) {
	e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(L ||= {});
function Xt() {}
function Zt(e, t) {
	return (0, P.useMemo)(() => ({
		sensor: e,
		options: t ?? {}
	}), [e, t]);
}
function Qt() {
	var e = [...arguments];
	return (0, P.useMemo)(() => [...e].filter((e) => e != null), [...e]);
}
var R = /*#__PURE__*/ Object.freeze({
	x: 0,
	y: 0
});
function $t(e, t) {
	return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
}
function en(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return n - r;
}
function tn(e, t) {
	let { data: { value: n } } = e, { data: { value: r } } = t;
	return r - n;
}
function nn(e, t) {
	if (!e || e.length === 0) return null;
	let [n] = e;
	return t ? n[t] : n;
}
function rn(e, t, n) {
	return t === void 0 && (t = e.left), n === void 0 && (n = e.top), {
		x: t + e.width * .5,
		y: n + e.height * .5
	};
}
var an = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = rn(t, t.left, t.top), a = [];
	for (let e of r) {
		let { id: t } = e, r = n.get(t);
		if (r) {
			let n = $t(rn(r), i);
			a.push({
				id: t,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return a.sort(en);
};
function on(e, t) {
	let n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), a = Math.min(t.top + t.height, e.top + e.height), o = i - r, s = a - n;
	if (r < i && n < a) {
		let n = t.width * t.height, r = e.width * e.height, i = o * s, a = i / (n + r - i);
		return Number(a.toFixed(4));
	}
	return 0;
}
var sn = (e) => {
	let { collisionRect: t, droppableRects: n, droppableContainers: r } = e, i = [];
	for (let e of r) {
		let { id: r } = e, a = n.get(r);
		if (a) {
			let n = on(a, t);
			n > 0 && i.push({
				id: r,
				data: {
					droppableContainer: e,
					value: n
				}
			});
		}
	}
	return i.sort(tn);
};
function cn(e, t, n) {
	return {
		...e,
		scaleX: t && n ? t.width / n.width : 1,
		scaleY: t && n ? t.height / n.height : 1
	};
}
function ln(e, t) {
	return e && t ? {
		x: e.left - t.left,
		y: e.top - t.top
	} : R;
}
function un(e) {
	return function(t) {
		return [...arguments].slice(1).reduce((t, n) => ({
			...t,
			top: t.top + e * n.y,
			bottom: t.bottom + e * n.y,
			left: t.left + e * n.x,
			right: t.right + e * n.x
		}), { ...t });
	};
}
var dn = /*#__PURE__*/ un(1);
function fn(e) {
	if (e.startsWith("matrix3d(")) {
		let t = e.slice(9, -1).split(/, /);
		return {
			x: +t[12],
			y: +t[13],
			scaleX: +t[0],
			scaleY: +t[5]
		};
	}
	if (e.startsWith("matrix(")) {
		let t = e.slice(7, -1).split(/, /);
		return {
			x: +t[4],
			y: +t[5],
			scaleX: +t[0],
			scaleY: +t[3]
		};
	}
	return null;
}
function pn(e, t, n) {
	let r = fn(t);
	if (!r) return e;
	let { scaleX: i, scaleY: a, x: o, y: s } = r, c = e.left - o - (1 - i) * parseFloat(n), l = e.top - s - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)), u = i ? e.width / i : e.width, d = a ? e.height / a : e.height;
	return {
		width: u,
		height: d,
		top: l,
		right: c + u,
		bottom: l + d,
		left: c
	};
}
var mn = { ignoreTransform: !1 };
function hn(e, t) {
	t === void 0 && (t = mn);
	let n = e.getBoundingClientRect();
	if (t.ignoreTransform) {
		let { transform: t, transformOrigin: r } = I(e).getComputedStyle(e);
		t && (n = pn(n, t, r));
	}
	let { top: r, left: i, width: a, height: o, bottom: s, right: c } = n;
	return {
		top: r,
		left: i,
		width: a,
		height: o,
		bottom: s,
		right: c
	};
}
function gn(e) {
	return hn(e, { ignoreTransform: !0 });
}
function _n(e) {
	let t = e.innerWidth, n = e.innerHeight;
	return {
		top: 0,
		left: 0,
		right: t,
		bottom: n,
		width: t,
		height: n
	};
}
function vn(e, t) {
	return t === void 0 && (t = I(e).getComputedStyle(e)), t.position === "fixed";
}
function yn(e, t) {
	t === void 0 && (t = I(e).getComputedStyle(e));
	let n = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((e) => {
		let r = t[e];
		return typeof r == "string" && n.test(r);
	});
}
function bn(e, t) {
	let n = [];
	function r(i) {
		if (t != null && n.length >= t || !i) return n;
		if (_t(i) && i.scrollingElement != null && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
		if (!vt(i) || yt(i) || n.includes(i)) return n;
		let a = I(e).getComputedStyle(i);
		return i !== e && yn(i, a) && n.push(i), vn(i, a) ? n : r(i.parentNode);
	}
	return e ? r(e) : n;
}
function xn(e) {
	let [t] = bn(e, 1);
	return t ?? null;
}
function Sn(e) {
	return !mt || !e ? null : ht(e) ? e : gt(e) ? _t(e) || e === bt(e).scrollingElement ? window : vt(e) ? e : null : null;
}
function Cn(e) {
	return ht(e) ? e.scrollX : e.scrollLeft;
}
function wn(e) {
	return ht(e) ? e.scrollY : e.scrollTop;
}
function Tn(e) {
	return {
		x: Cn(e),
		y: wn(e)
	};
}
var z;
(function(e) {
	e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(z ||= {});
function En(e) {
	return !mt || !e ? !1 : e === document.scrollingElement;
}
function Dn(e) {
	let t = {
		x: 0,
		y: 0
	}, n = En(e) ? {
		height: window.innerHeight,
		width: window.innerWidth
	} : {
		height: e.clientHeight,
		width: e.clientWidth
	}, r = {
		x: e.scrollWidth - n.width,
		y: e.scrollHeight - n.height
	};
	return {
		isTop: e.scrollTop <= t.y,
		isLeft: e.scrollLeft <= t.x,
		isBottom: e.scrollTop >= r.y,
		isRight: e.scrollLeft >= r.x,
		maxScroll: r,
		minScroll: t
	};
}
var On = {
	x: .2,
	y: .2
};
function kn(e, t, n, r, i) {
	let { top: a, left: o, right: s, bottom: c } = n;
	r === void 0 && (r = 10), i === void 0 && (i = On);
	let { isTop: l, isBottom: u, isLeft: d, isRight: f } = Dn(e), p = {
		x: 0,
		y: 0
	}, m = {
		x: 0,
		y: 0
	}, h = {
		height: t.height * i.y,
		width: t.width * i.x
	};
	return !l && a <= t.top + h.height ? (p.y = z.Backward, m.y = r * Math.abs((t.top + h.height - a) / h.height)) : !u && c >= t.bottom - h.height && (p.y = z.Forward, m.y = r * Math.abs((t.bottom - h.height - c) / h.height)), !f && s >= t.right - h.width ? (p.x = z.Forward, m.x = r * Math.abs((t.right - h.width - s) / h.width)) : !d && o <= t.left + h.width && (p.x = z.Backward, m.x = r * Math.abs((t.left + h.width - o) / h.width)), {
		direction: p,
		speed: m
	};
}
function An(e) {
	if (e === document.scrollingElement) {
		let { innerWidth: e, innerHeight: t } = window;
		return {
			top: 0,
			left: 0,
			right: e,
			bottom: t,
			width: e,
			height: t
		};
	}
	let { top: t, left: n, right: r, bottom: i } = e.getBoundingClientRect();
	return {
		top: t,
		left: n,
		right: r,
		bottom: i,
		width: e.clientWidth,
		height: e.clientHeight
	};
}
function jn(e) {
	return e.reduce((e, t) => jt(e, Tn(t)), R);
}
function Mn(e) {
	return e.reduce((e, t) => e + Cn(t), 0);
}
function Nn(e) {
	return e.reduce((e, t) => e + wn(t), 0);
}
function Pn(e, t) {
	if (t === void 0 && (t = hn), !e) return;
	let { top: n, left: r, bottom: i, right: a } = t(e);
	xn(e) && (i <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var Fn = [[
	"x",
	["left", "right"],
	Mn
], [
	"y",
	["top", "bottom"],
	Nn
]], In = class {
	constructor(e, t) {
		this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
		let n = bn(t), r = jn(n);
		this.rect = { ...e }, this.width = e.width, this.height = e.height;
		for (let [e, t, i] of Fn) for (let a of t) Object.defineProperty(this, a, {
			get: () => {
				let t = i(n), o = r[e] - t;
				return this.rect[a] + o;
			},
			enumerable: !0
		});
		Object.defineProperty(this, "rect", { enumerable: !1 });
	}
}, Ln = class {
	constructor(e) {
		this.target = void 0, this.listeners = [], this.removeAll = () => {
			this.listeners.forEach((e) => this.target?.removeEventListener(...e));
		}, this.target = e;
	}
	add(e, t, n) {
		var r;
		(r = this.target) == null || r.addEventListener(e, t, n), this.listeners.push([
			e,
			t,
			n
		]);
	}
};
function Rn(e) {
	let { EventTarget: t } = I(e);
	return e instanceof t ? e : bt(e);
}
function zn(e, t) {
	let n = Math.abs(e.x), r = Math.abs(e.y);
	return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t && r > t.y;
}
var B;
(function(e) {
	e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(B ||= {});
function Bn(e) {
	e.preventDefault();
}
function Vn(e) {
	e.stopPropagation();
}
var V;
(function(e) {
	e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(V ||= {});
var Hn = {
	start: [V.Space, V.Enter],
	cancel: [V.Esc],
	end: [
		V.Space,
		V.Enter,
		V.Tab
	]
}, Un = (e, t) => {
	let { currentCoordinates: n } = t;
	switch (e.code) {
		case V.Right: return {
			...n,
			x: n.x + 25
		};
		case V.Left: return {
			...n,
			x: n.x - 25
		};
		case V.Down: return {
			...n,
			y: n.y + 25
		};
		case V.Up: return {
			...n,
			y: n.y - 25
		};
	}
}, Wn = class {
	constructor(e) {
		this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
		let { event: { target: t } } = e;
		this.props = e, this.listeners = new Ln(bt(t)), this.windowListeners = new Ln(I(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
	}
	attach() {
		this.handleStart(), this.windowListeners.add(B.Resize, this.handleCancel), this.windowListeners.add(B.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(B.Keydown, this.handleKeyDown));
	}
	handleStart() {
		let { activeNode: e, onStart: t } = this.props, n = e.node.current;
		n && Pn(n), t(R);
	}
	handleKeyDown(e) {
		if (Pt(e)) {
			let { active: t, context: n, options: r } = this.props, { keyboardCodes: i = Hn, coordinateGetter: a = Un, scrollBehavior: o = "smooth" } = r, { code: s } = e;
			if (i.end.includes(s)) {
				this.handleEnd(e);
				return;
			}
			if (i.cancel.includes(s)) {
				this.handleCancel(e);
				return;
			}
			let { collisionRect: c } = n.current, l = c ? {
				x: c.left,
				y: c.top
			} : R;
			this.referenceCoordinates ||= l;
			let u = a(e, {
				active: t,
				context: n.current,
				currentCoordinates: l
			});
			if (u) {
				let t = Mt(u, l), r = {
					x: 0,
					y: 0
				}, { scrollableAncestors: i } = n.current;
				for (let n of i) {
					let i = e.code, { isTop: a, isRight: s, isLeft: c, isBottom: l, maxScroll: d, minScroll: f } = Dn(n), p = An(n), m = {
						x: Math.min(i === V.Right ? p.right - p.width / 2 : p.right, Math.max(i === V.Right ? p.left : p.left + p.width / 2, u.x)),
						y: Math.min(i === V.Down ? p.bottom - p.height / 2 : p.bottom, Math.max(i === V.Down ? p.top : p.top + p.height / 2, u.y))
					}, h = i === V.Right && !s || i === V.Left && !c, g = i === V.Down && !l || i === V.Up && !a;
					if (h && m.x !== u.x) {
						let e = n.scrollLeft + t.x, a = i === V.Right && e <= d.x || i === V.Left && e >= f.x;
						if (a && !t.y) {
							n.scrollTo({
								left: e,
								behavior: o
							});
							return;
						}
						r.x = a ? n.scrollLeft - e : i === V.Right ? n.scrollLeft - d.x : n.scrollLeft - f.x, r.x && n.scrollBy({
							left: -r.x,
							behavior: o
						});
						break;
					}
					if (g && m.y !== u.y) {
						let e = n.scrollTop + t.y, a = i === V.Down && e <= d.y || i === V.Up && e >= f.y;
						if (a && !t.x) {
							n.scrollTo({
								top: e,
								behavior: o
							});
							return;
						}
						r.y = a ? n.scrollTop - e : i === V.Down ? n.scrollTop - d.y : n.scrollTop - f.y, r.y && n.scrollBy({
							top: -r.y,
							behavior: o
						});
						break;
					}
				}
				this.handleMove(e, jt(Mt(u, this.referenceCoordinates), r));
			}
		}
	}
	handleMove(e, t) {
		let { onMove: n } = this.props;
		e.preventDefault(), n(t);
	}
	handleEnd(e) {
		let { onEnd: t } = this.props;
		e.preventDefault(), this.detach(), t();
	}
	handleCancel(e) {
		let { onCancel: t } = this.props;
		e.preventDefault(), this.detach(), t();
	}
	detach() {
		this.listeners.removeAll(), this.windowListeners.removeAll();
	}
};
Wn.activators = [{
	eventName: "onKeyDown",
	handler: (e, t, n) => {
		let { keyboardCodes: r = Hn, onActivation: i } = t, { active: a } = n, { code: o } = e.nativeEvent;
		if (r.start.includes(o)) {
			let t = a.activatorNode.current;
			return t && e.target !== t ? !1 : (e.preventDefault(), i?.({ event: e.nativeEvent }), !0);
		}
		return !1;
	}
}];
function Gn(e) {
	return !!(e && "distance" in e);
}
function Kn(e) {
	return !!(e && "delay" in e);
}
var qn = class {
	constructor(e, t, n) {
		n === void 0 && (n = Rn(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
		let { event: r } = e, { target: i } = r;
		this.props = e, this.events = t, this.document = bt(i), this.documentListeners = new Ln(this.document), this.listeners = new Ln(n), this.windowListeners = new Ln(I(i)), this.initialCoordinates = It(r) ?? R, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
	}
	attach() {
		let { events: e, props: { options: { activationConstraint: t, bypassActivationConstraint: n } } } = this;
		if (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(B.Resize, this.handleCancel), this.windowListeners.add(B.DragStart, Bn), this.windowListeners.add(B.VisibilityChange, this.handleCancel), this.windowListeners.add(B.ContextMenu, Bn), this.documentListeners.add(B.Keydown, this.handleKeydown), t) {
			if (n != null && n({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (Kn(t)) {
				this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
				return;
			}
			if (Gn(t)) {
				this.handlePending(t);
				return;
			}
		}
		this.handleStart();
	}
	detach() {
		this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
	}
	handlePending(e, t) {
		let { active: n, onPending: r } = this.props;
		r(n, e, this.initialCoordinates, t);
	}
	handleStart() {
		let { initialCoordinates: e } = this, { onStart: t } = this.props;
		e && (this.activated = !0, this.documentListeners.add(B.Click, Vn, { capture: !0 }), this.removeTextSelection(), this.documentListeners.add(B.SelectionChange, this.removeTextSelection), t(e));
	}
	handleMove(e) {
		let { activated: t, initialCoordinates: n, props: r } = this, { onMove: i, options: { activationConstraint: a } } = r;
		if (!n) return;
		let o = It(e) ?? R, s = Mt(n, o);
		if (!t && a) {
			if (Gn(a)) {
				if (a.tolerance != null && zn(s, a.tolerance)) return this.handleCancel();
				if (zn(s, a.distance)) return this.handleStart();
			}
			if (Kn(a) && zn(s, a.tolerance)) return this.handleCancel();
			this.handlePending(a, s);
		} else e.cancelable && e.preventDefault(), i(o);
	}
	handleEnd() {
		let { onAbort: e, onEnd: t } = this.props;
		this.detach(), this.activated || e(this.props.active), t();
	}
	handleCancel() {
		let { onAbort: e, onCancel: t } = this.props;
		this.detach(), this.activated || e(this.props.active), t();
	}
	handleKeydown(e) {
		e.code === V.Esc && this.handleCancel();
	}
	removeTextSelection() {
		var e;
		(e = this.document.getSelection()) == null || e.removeAllRanges();
	}
}, Jn = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
}, Yn = class extends qn {
	constructor(e) {
		let { event: t } = e, n = bt(t.target);
		super(e, Jn, n);
	}
};
Yn.activators = [{
	eventName: "onPointerDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return !n.isPrimary || n.button !== 0 ? !1 : (r?.({ event: n }), !0);
	}
}];
var Xn = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
}, Zn;
(function(e) {
	e[e.RightClick = 2] = "RightClick";
})(Zn ||= {});
var Qn = class extends qn {
	constructor(e) {
		super(e, Xn, bt(e.event.target));
	}
};
Qn.activators = [{
	eventName: "onMouseDown",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t;
		return n.button !== Zn.RightClick && (r?.({ event: n }), !0);
	}
}];
var $n = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
}, er = class extends qn {
	constructor(e) {
		super(e, $n);
	}
	static setup() {
		return window.addEventListener($n.move.name, e, {
			capture: !1,
			passive: !1
		}), function() {
			window.removeEventListener($n.move.name, e);
		};
		function e() {}
	}
};
er.activators = [{
	eventName: "onTouchStart",
	handler: (e, t) => {
		let { nativeEvent: n } = e, { onActivation: r } = t, { touches: i } = n;
		return i.length > 1 ? !1 : (r?.({ event: n }), !0);
	}
}];
var tr;
(function(e) {
	e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(tr ||= {});
var nr;
(function(e) {
	e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(nr ||= {});
function rr(e) {
	let { acceleration: t, activator: n = tr.Pointer, canScroll: r, draggingRect: i, enabled: a, interval: o = 5, order: s = nr.TreeOrder, pointerCoordinates: c, scrollableAncestors: l, scrollableAncestorRects: u, delta: d, threshold: f } = e, p = ar({
		delta: d,
		disabled: !a
	}), [m, h] = Ct(), g = (0, P.useRef)({
		x: 0,
		y: 0
	}), _ = (0, P.useRef)({
		x: 0,
		y: 0
	}), v = (0, P.useMemo)(() => {
		switch (n) {
			case tr.Pointer: return c ? {
				top: c.y,
				bottom: c.y,
				left: c.x,
				right: c.x
			} : null;
			case tr.DraggableRect: return i;
		}
	}, [
		n,
		i,
		c
	]), y = (0, P.useRef)(null), b = (0, P.useCallback)(() => {
		let e = y.current;
		if (!e) return;
		let t = g.current.x * _.current.x, n = g.current.y * _.current.y;
		e.scrollBy(t, n);
	}, []), x = (0, P.useMemo)(() => s === nr.TreeOrder ? [...l].reverse() : l, [s, l]);
	(0, P.useEffect)(() => {
		if (!a || !l.length || !v) h();
		else {
			for (let e of x) {
				if (r?.(e) === !1) continue;
				let n = l.indexOf(e), i = u[n];
				if (!i) continue;
				let { direction: a, speed: s } = kn(e, i, v, t, f);
				for (let e of ["x", "y"]) p[e][a[e]] || (s[e] = 0, a[e] = 0);
				if (s.x > 0 || s.y > 0) {
					h(), y.current = e, m(b, o), g.current = s, _.current = a;
					return;
				}
			}
			g.current = {
				x: 0,
				y: 0
			}, _.current = {
				x: 0,
				y: 0
			}, h();
		}
	}, [
		t,
		b,
		r,
		h,
		a,
		o,
		JSON.stringify(v),
		JSON.stringify(p),
		m,
		l,
		x,
		u,
		JSON.stringify(f)
	]);
}
var ir = {
	x: {
		[z.Backward]: !1,
		[z.Forward]: !1
	},
	y: {
		[z.Backward]: !1,
		[z.Forward]: !1
	}
};
function ar(e) {
	let { delta: t, disabled: n } = e, r = Dt(t);
	return Tt((e) => {
		if (n || !r || !e) return ir;
		let i = {
			x: Math.sign(t.x - r.x),
			y: Math.sign(t.y - r.y)
		};
		return {
			x: {
				[z.Backward]: e.x[z.Backward] || i.x === -1,
				[z.Forward]: e.x[z.Forward] || i.x === 1
			},
			y: {
				[z.Backward]: e.y[z.Backward] || i.y === -1,
				[z.Forward]: e.y[z.Forward] || i.y === 1
			}
		};
	}, [
		n,
		t,
		r
	]);
}
function or(e, t) {
	let n = t == null ? void 0 : e.get(t), r = n ? n.node.current : null;
	return Tt((e) => t == null ? null : r ?? e ?? null, [r, t]);
}
function sr(e, t) {
	return (0, P.useMemo)(() => e.reduce((e, n) => {
		let { sensor: r } = n, i = r.activators.map((e) => ({
			eventName: e.eventName,
			handler: t(e.handler, n)
		}));
		return [...e, ...i];
	}, []), [e, t]);
}
var cr;
(function(e) {
	e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(cr ||= {});
var lr;
(function(e) {
	e.Optimized = "optimized";
})(lr ||= {});
var ur = /*#__PURE__*/ new Map();
function dr(e, t) {
	let { dragging: n, dependencies: r, config: i } = t, [a, o] = (0, P.useState)(null), { frequency: s, measure: c, strategy: l } = i, u = (0, P.useRef)(e), d = g(), f = wt(d), p = (0, P.useCallback)(function(e) {
		e === void 0 && (e = []), f.current || o((t) => t === null ? e : t.concat(e.filter((e) => !t.includes(e))));
	}, [f]), m = (0, P.useRef)(null), h = Tt((t) => {
		if (d && !n) return ur;
		if (!t || t === ur || u.current !== e || a != null) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e) {
				if (!n) continue;
				if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
					t.set(n.id, n.rect.current);
					continue;
				}
				let e = n.node.current, r = e ? new In(c(e), e) : null;
				n.rect.current = r, r && t.set(n.id, r);
			}
			return t;
		}
		return t;
	}, [
		e,
		a,
		n,
		d,
		c
	]);
	return (0, P.useEffect)(() => {
		u.current = e;
	}, [e]), (0, P.useEffect)(() => {
		d || p();
	}, [n, d]), (0, P.useEffect)(() => {
		a && a.length > 0 && o(null);
	}, [JSON.stringify(a)]), (0, P.useEffect)(() => {
		d || typeof s != "number" || m.current !== null || (m.current = setTimeout(() => {
			p(), m.current = null;
		}, s));
	}, [
		s,
		d,
		p,
		...r
	]), {
		droppableRects: h,
		measureDroppableContainers: p,
		measuringScheduled: a != null
	};
	function g() {
		switch (l) {
			case cr.Always: return !1;
			case cr.BeforeDragging: return n;
			default: return !n;
		}
	}
}
function fr(e, t) {
	return Tt((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function pr(e, t) {
	return fr(e, t);
}
function mr(e) {
	let { callback: t, disabled: n } = e, r = St(t), i = (0, P.useMemo)(() => {
		if (n || typeof window > "u" || window.MutationObserver === void 0) return;
		let { MutationObserver: e } = window;
		return new e(r);
	}, [r, n]);
	return (0, P.useEffect)(() => () => i?.disconnect(), [i]), i;
}
function hr(e) {
	let { callback: t, disabled: n } = e, r = St(t), i = (0, P.useMemo)(() => {
		if (n || typeof window > "u" || window.ResizeObserver === void 0) return;
		let { ResizeObserver: e } = window;
		return new e(r);
	}, [n]);
	return (0, P.useEffect)(() => () => i?.disconnect(), [i]), i;
}
function gr(e) {
	return new In(hn(e), e);
}
function _r(e, t, n) {
	t === void 0 && (t = gr);
	let [r, i] = (0, P.useState)(null);
	function a() {
		i((r) => {
			if (!e) return null;
			if (e.isConnected === !1) return r ?? n ?? null;
			let i = t(e);
			return JSON.stringify(r) === JSON.stringify(i) ? r : i;
		});
	}
	let o = mr({ callback(t) {
		if (e) for (let n of t) {
			let { type: t, target: r } = n;
			if (t === "childList" && r instanceof HTMLElement && r.contains(e)) {
				a();
				break;
			}
		}
	} }), s = hr({ callback: a });
	return xt(() => {
		a(), e ? (s?.observe(e), o?.observe(document.body, {
			childList: !0,
			subtree: !0
		})) : (s?.disconnect(), o?.disconnect());
	}, [e]), r;
}
function vr(e) {
	return ln(e, fr(e));
}
var yr = [];
function br(e) {
	let t = (0, P.useRef)(e), n = Tt((n) => e ? n && n !== yr && e && t.current && e.parentNode === t.current.parentNode ? n : bn(e) : yr, [e]);
	return (0, P.useEffect)(() => {
		t.current = e;
	}, [e]), n;
}
function xr(e) {
	let [t, n] = (0, P.useState)(null), r = (0, P.useRef)(e), i = (0, P.useCallback)((e) => {
		let t = Sn(e.target);
		t && n((e) => e ? (e.set(t, Tn(t)), new Map(e)) : null);
	}, []);
	return (0, P.useEffect)(() => {
		let t = r.current;
		if (e !== t) {
			a(t);
			let o = e.map((e) => {
				let t = Sn(e);
				return t ? (t.addEventListener("scroll", i, { passive: !0 }), [t, Tn(t)]) : null;
			}).filter((e) => e != null);
			n(o.length ? new Map(o) : null), r.current = e;
		}
		return () => {
			a(e), a(t);
		};
		function a(e) {
			e.forEach((e) => {
				Sn(e)?.removeEventListener("scroll", i);
			});
		}
	}, [i, e]), (0, P.useMemo)(() => e.length ? t ? Array.from(t.values()).reduce((e, t) => jt(e, t), R) : jn(e) : R, [e, t]);
}
function Sr(e, t) {
	t === void 0 && (t = []);
	let n = (0, P.useRef)(null);
	return (0, P.useEffect)(() => {
		n.current = null;
	}, t), (0, P.useEffect)(() => {
		let t = e !== R;
		t && !n.current && (n.current = e), !t && n.current && (n.current = null);
	}, [e]), n.current ? Mt(e, n.current) : R;
}
function Cr(e) {
	(0, P.useEffect)(() => {
		if (!mt) return;
		let t = e.map((e) => {
			let { sensor: t } = e;
			return t.setup == null ? void 0 : t.setup();
		});
		return () => {
			for (let e of t) e?.();
		};
	}, e.map((e) => {
		let { sensor: t } = e;
		return t;
	}));
}
function wr(e, t) {
	return (0, P.useMemo)(() => e.reduce((e, n) => {
		let { eventName: r, handler: i } = n;
		return e[r] = (e) => {
			i(e, t);
		}, e;
	}, {}), [e, t]);
}
function Tr(e) {
	return (0, P.useMemo)(() => e ? _n(e) : null, [e]);
}
var Er = [];
function Dr(e, t) {
	t === void 0 && (t = hn);
	let [n] = e, r = Tr(n ? I(n) : null), [i, a] = (0, P.useState)(Er);
	function o() {
		a(() => e.length ? e.map((e) => En(e) ? r : new In(t(e), e)) : Er);
	}
	let s = hr({ callback: o });
	return xt(() => {
		s?.disconnect(), o(), e.forEach((e) => s?.observe(e));
	}, [e]), i;
}
function Or(e) {
	if (!e) return null;
	if (e.children.length > 1) return e;
	let t = e.children[0];
	return vt(t) ? t : e;
}
function kr(e) {
	let { measure: t } = e, [n, r] = (0, P.useState)(null), i = hr({ callback: (0, P.useCallback)((e) => {
		for (let { target: n } of e) if (vt(n)) {
			r((e) => {
				let r = t(n);
				return e ? {
					...e,
					width: r.width,
					height: r.height
				} : r;
			});
			break;
		}
	}, [t]) }), [a, o] = Et((0, P.useCallback)((e) => {
		let n = Or(e);
		i?.disconnect(), n && i?.observe(n), r(n ? t(n) : null);
	}, [t, i]));
	return (0, P.useMemo)(() => ({
		nodeRef: a,
		rect: n,
		setRef: o
	}), [
		n,
		a,
		o
	]);
}
var Ar = [{
	sensor: Yn,
	options: {}
}, {
	sensor: Wn,
	options: {}
}], jr = { current: {} }, Mr = {
	draggable: { measure: gn },
	droppable: {
		measure: gn,
		strategy: cr.WhileDragging,
		frequency: lr.Optimized
	},
	dragOverlay: { measure: hn }
}, Nr = class extends Map {
	get(e) {
		return e == null ? void 0 : super.get(e) ?? void 0;
	}
	toArray() {
		return Array.from(this.values());
	}
	getEnabled() {
		return this.toArray().filter((e) => {
			let { disabled: t } = e;
			return !t;
		});
	}
	getNodeFor(e) {
		return this.get(e)?.node.current ?? void 0;
	}
}, Pr = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /*#__PURE__*/ new Map(),
	droppableRects: /*#__PURE__*/ new Map(),
	droppableContainers: /*#__PURE__*/ new Nr(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: Xt
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: Mr,
	measureDroppableContainers: Xt,
	windowRect: null,
	measuringScheduled: !1
}, Fr = {
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: Xt,
	draggableNodes: /*#__PURE__*/ new Map(),
	over: null,
	measureDroppableContainers: Xt
}, Ir = /*#__PURE__*/ (0, P.createContext)(Fr), Lr = /*#__PURE__*/ (0, P.createContext)(Pr);
function Rr() {
	return {
		draggable: {
			active: null,
			initialCoordinates: {
				x: 0,
				y: 0
			},
			nodes: /* @__PURE__ */ new Map(),
			translate: {
				x: 0,
				y: 0
			}
		},
		droppable: { containers: new Nr() }
	};
}
function zr(e, t) {
	switch (t.type) {
		case L.DragStart: return {
			...e,
			draggable: {
				...e.draggable,
				initialCoordinates: t.initialCoordinates,
				active: t.active
			}
		};
		case L.DragMove: return e.draggable.active == null ? e : {
			...e,
			draggable: {
				...e.draggable,
				translate: {
					x: t.coordinates.x - e.draggable.initialCoordinates.x,
					y: t.coordinates.y - e.draggable.initialCoordinates.y
				}
			}
		};
		case L.DragEnd:
		case L.DragCancel: return {
			...e,
			draggable: {
				...e.draggable,
				active: null,
				initialCoordinates: {
					x: 0,
					y: 0
				},
				translate: {
					x: 0,
					y: 0
				}
			}
		};
		case L.RegisterDroppable: {
			let { element: n } = t, { id: r } = n, i = new Nr(e.droppable.containers);
			return i.set(r, n), {
				...e,
				droppable: {
					...e.droppable,
					containers: i
				}
			};
		}
		case L.SetDroppableDisabled: {
			let { id: n, key: r, disabled: i } = t, a = e.droppable.containers.get(n);
			if (!a || r !== a.key) return e;
			let o = new Nr(e.droppable.containers);
			return o.set(n, {
				...a,
				disabled: i
			}), {
				...e,
				droppable: {
					...e.droppable,
					containers: o
				}
			};
		}
		case L.UnregisterDroppable: {
			let { id: n, key: r } = t, i = e.droppable.containers.get(n);
			if (!i || r !== i.key) return e;
			let a = new Nr(e.droppable.containers);
			return a.delete(n), {
				...e,
				droppable: {
					...e.droppable,
					containers: a
				}
			};
		}
		default: return e;
	}
}
function Br(e) {
	let { disabled: t } = e, { active: n, activatorEvent: r, draggableNodes: i } = (0, P.useContext)(Ir), a = Dt(r), o = Dt(n?.id);
	return (0, P.useEffect)(() => {
		if (!t && !r && a && o != null) {
			if (!Pt(a) || document.activeElement === a.target) return;
			let e = i.get(o);
			if (!e) return;
			let { activatorNode: t, node: n } = e;
			if (!t.current && !n.current) return;
			requestAnimationFrame(() => {
				for (let e of [t.current, n.current]) {
					if (!e) continue;
					let t = zt(e);
					if (t) {
						t.focus();
						break;
					}
				}
			});
		}
	}, [
		r,
		t,
		i,
		o,
		a
	]), null;
}
function Vr(e, t) {
	let { transform: n, ...r } = t;
	return e != null && e.length ? e.reduce((e, t) => t({
		transform: e,
		...r
	}), n) : n;
}
function Hr(e) {
	return (0, P.useMemo)(() => ({
		draggable: {
			...Mr.draggable,
			...e?.draggable
		},
		droppable: {
			...Mr.droppable,
			...e?.droppable
		},
		dragOverlay: {
			...Mr.dragOverlay,
			...e?.dragOverlay
		}
	}), [
		e?.draggable,
		e?.droppable,
		e?.dragOverlay
	]);
}
function Ur(e) {
	let { activeNode: t, measure: n, initialRect: r, config: i = !0 } = e, a = (0, P.useRef)(!1), { x: o, y: s } = typeof i == "boolean" ? {
		x: i,
		y: i
	} : i;
	xt(() => {
		if (!o && !s || !t) {
			a.current = !1;
			return;
		}
		if (a.current || !r) return;
		let e = t?.node.current;
		if (!e || e.isConnected === !1) return;
		let i = ln(n(e), r);
		if (o || (i.x = 0), s || (i.y = 0), a.current = !0, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
			let t = xn(e);
			t && t.scrollBy({
				top: i.y,
				left: i.x
			});
		}
	}, [
		t,
		o,
		s,
		r,
		n
	]);
}
var Wr = /*#__PURE__*/ (0, P.createContext)({
	...R,
	scaleX: 1,
	scaleY: 1
}), Gr;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Gr ||= {});
var Kr = /*#__PURE__*/ (0, P.memo)(function(e) {
	let { id: t, accessibility: n, autoScroll: r = !0, children: i, sensors: a = Ar, collisionDetection: o = sn, measuring: s, modifiers: c, ...l } = e, [u, d] = (0, P.useReducer)(zr, void 0, Rr), [f, p] = Kt(), [m, h] = (0, P.useState)(Gr.Uninitialized), g = m === Gr.Initialized, { draggable: { active: _, nodes: v, translate: y }, droppable: { containers: b } } = u, x = _ == null ? null : v.get(_), ee = (0, P.useRef)({
		initial: null,
		translated: null
	}), S = (0, P.useMemo)(() => _ == null ? null : {
		id: _,
		data: x?.data ?? jr,
		rect: ee
	}, [_, x]), te = (0, P.useRef)(null), [ne, C] = (0, P.useState)(null), [w, T] = (0, P.useState)(null), re = wt(l, Object.values(l)), ie = kt("DndDescribedBy", t), ae = (0, P.useMemo)(() => b.getEnabled(), [b]), oe = Hr(s), { droppableRects: se, measureDroppableContainers: ce, measuringScheduled: le } = dr(ae, {
		dragging: g,
		dependencies: [y.x, y.y],
		config: oe.droppable
	}), E = or(v, _), ue = (0, P.useMemo)(() => w ? It(w) : null, [w]), de = Fe(), fe = pr(E, oe.draggable.measure);
	Ur({
		activeNode: _ == null ? null : v.get(_),
		config: de.layoutShiftCompensation,
		initialRect: fe,
		measure: oe.draggable.measure
	});
	let D = _r(E, oe.draggable.measure, fe), pe = _r(E ? E.parentElement : null), O = (0, P.useRef)({
		activatorEvent: null,
		active: null,
		activeNode: E,
		collisionRect: null,
		collisions: null,
		droppableRects: se,
		draggableNodes: v,
		draggingNode: null,
		draggingNodeRect: null,
		droppableContainers: b,
		over: null,
		scrollableAncestors: [],
		scrollAdjustedTranslate: null
	}), me = b.getNodeFor(O.current.over?.id), k = kr({ measure: oe.dragOverlay.measure }), he = k.nodeRef.current ?? E, A = g ? k.rect ?? D : null, j = !!(k.nodeRef.current && k.rect), ge = vr(j ? null : D), _e = Tr(he ? I(he) : null), M = br(g ? me ?? E : null), N = Dr(M), ve = Vr(c, {
		transform: {
			x: y.x - ge.x,
			y: y.y - ge.y,
			scaleX: 1,
			scaleY: 1
		},
		activatorEvent: w,
		active: S,
		activeNodeRect: D,
		containerNodeRect: pe,
		draggingNodeRect: A,
		over: O.current.over,
		overlayNodeRect: k.rect,
		scrollableAncestors: M,
		scrollableAncestorRects: N,
		windowRect: _e
	}), ye = ue ? jt(ue, y) : null, be = xr(M), xe = Sr(be), Se = Sr(be, [D]), Ce = jt(ve, xe), we = A ? dn(A, ve) : null, Te = S && we ? o({
		active: S,
		collisionRect: we,
		droppableRects: se,
		droppableContainers: ae,
		pointerCoordinates: ye
	}) : null, Ee = nn(Te, "id"), [De, Oe] = (0, P.useState)(null), ke = cn(j ? ve : jt(ve, Se), De?.rect ?? null, D), Ae = (0, P.useRef)(null), je = (0, P.useCallback)((e, t) => {
		let { sensor: n, options: r } = t;
		if (te.current == null) return;
		let i = v.get(te.current);
		if (!i) return;
		let a = e.nativeEvent, o = new n({
			active: te.current,
			activeNode: i,
			event: a,
			options: r,
			context: O,
			onAbort(e) {
				if (!v.get(e)) return;
				let { onDragAbort: t } = re.current, n = { id: e };
				t?.(n), f({
					type: "onDragAbort",
					event: n
				});
			},
			onPending(e, t, n, r) {
				if (!v.get(e)) return;
				let { onDragPending: i } = re.current, a = {
					id: e,
					constraint: t,
					initialCoordinates: n,
					offset: r
				};
				i?.(a), f({
					type: "onDragPending",
					event: a
				});
			},
			onStart(e) {
				let t = te.current;
				if (t == null) return;
				let n = v.get(t);
				if (!n) return;
				let { onDragStart: r } = re.current, i = {
					activatorEvent: a,
					active: {
						id: t,
						data: n.data,
						rect: ee
					}
				};
				(0, ft.unstable_batchedUpdates)(() => {
					r?.(i), h(Gr.Initializing), d({
						type: L.DragStart,
						initialCoordinates: e,
						active: t
					}), f({
						type: "onDragStart",
						event: i
					}), C(Ae.current), T(a);
				});
			},
			onMove(e) {
				d({
					type: L.DragMove,
					coordinates: e
				});
			},
			onEnd: s(L.DragEnd),
			onCancel: s(L.DragCancel)
		});
		Ae.current = o;
		function s(e) {
			return async function() {
				let { active: t, collisions: n, over: r, scrollAdjustedTranslate: i } = O.current, o = null;
				if (t && i) {
					let { cancelDrop: s } = re.current;
					o = {
						activatorEvent: a,
						active: t,
						collisions: n,
						delta: i,
						over: r
					}, e === L.DragEnd && typeof s == "function" && await Promise.resolve(s(o)) && (e = L.DragCancel);
				}
				te.current = null, (0, ft.unstable_batchedUpdates)(() => {
					d({ type: e }), h(Gr.Uninitialized), Oe(null), C(null), T(null), Ae.current = null;
					let t = e === L.DragEnd ? "onDragEnd" : "onDragCancel";
					if (o) {
						let e = re.current[t];
						e?.(o), f({
							type: t,
							event: o
						});
					}
				});
			};
		}
	}, [v]), Me = sr(a, (0, P.useCallback)((e, t) => (n, r) => {
		let i = n.nativeEvent, a = v.get(r);
		if (te.current !== null || !a || i.dndKit || i.defaultPrevented) return;
		let o = { active: a };
		e(n, t.options, o) === !0 && (i.dndKit = { capturedBy: t.sensor }, te.current = r, je(n, t));
	}, [v, je]));
	Cr(a), xt(() => {
		D && m === Gr.Initializing && h(Gr.Initialized);
	}, [D, m]), (0, P.useEffect)(() => {
		let { onDragMove: e } = re.current, { active: t, activatorEvent: n, collisions: r, over: i } = O.current;
		if (!t || !n) return;
		let a = {
			active: t,
			activatorEvent: n,
			collisions: r,
			delta: {
				x: Ce.x,
				y: Ce.y
			},
			over: i
		};
		(0, ft.unstable_batchedUpdates)(() => {
			e?.(a), f({
				type: "onDragMove",
				event: a
			});
		});
	}, [Ce.x, Ce.y]), (0, P.useEffect)(() => {
		let { active: e, activatorEvent: t, collisions: n, droppableContainers: r, scrollAdjustedTranslate: i } = O.current;
		if (!e || te.current == null || !t || !i) return;
		let { onDragOver: a } = re.current, o = r.get(Ee), s = o && o.rect.current ? {
			id: o.id,
			rect: o.rect.current,
			data: o.data,
			disabled: o.disabled
		} : null, c = {
			active: e,
			activatorEvent: t,
			collisions: n,
			delta: {
				x: i.x,
				y: i.y
			},
			over: s
		};
		(0, ft.unstable_batchedUpdates)(() => {
			Oe(s), a?.(c), f({
				type: "onDragOver",
				event: c
			});
		});
	}, [Ee]), xt(() => {
		O.current = {
			activatorEvent: w,
			active: S,
			activeNode: E,
			collisionRect: we,
			collisions: Te,
			droppableRects: se,
			draggableNodes: v,
			draggingNode: he,
			draggingNodeRect: A,
			droppableContainers: b,
			over: De,
			scrollableAncestors: M,
			scrollAdjustedTranslate: Ce
		}, ee.current = {
			initial: A,
			translated: we
		};
	}, [
		S,
		E,
		Te,
		we,
		v,
		he,
		A,
		se,
		b,
		De,
		M,
		Ce
	]), rr({
		...de,
		delta: y,
		draggingRect: we,
		pointerCoordinates: ye,
		scrollableAncestors: M,
		scrollableAncestorRects: N
	});
	let Ne = (0, P.useMemo)(() => ({
		active: S,
		activeNode: E,
		activeNodeRect: D,
		activatorEvent: w,
		collisions: Te,
		containerNodeRect: pe,
		dragOverlay: k,
		draggableNodes: v,
		droppableContainers: b,
		droppableRects: se,
		over: De,
		measureDroppableContainers: ce,
		scrollableAncestors: M,
		scrollableAncestorRects: N,
		measuringConfiguration: oe,
		measuringScheduled: le,
		windowRect: _e
	}), [
		S,
		E,
		D,
		w,
		Te,
		pe,
		k,
		v,
		b,
		se,
		De,
		ce,
		M,
		N,
		oe,
		le,
		_e
	]), Pe = (0, P.useMemo)(() => ({
		activatorEvent: w,
		activators: Me,
		active: S,
		activeNodeRect: D,
		ariaDescribedById: { draggable: ie },
		dispatch: d,
		draggableNodes: v,
		over: De,
		measureDroppableContainers: ce
	}), [
		w,
		Me,
		S,
		D,
		d,
		ie,
		v,
		De,
		ce
	]);
	return P.createElement(Wt.Provider, { value: p }, P.createElement(Ir.Provider, { value: Pe }, P.createElement(Lr.Provider, { value: Ne }, P.createElement(Wr.Provider, { value: ke }, i)), P.createElement(Br, { disabled: n?.restoreFocus === !1 })), P.createElement(Yt, {
		...n,
		hiddenTextDescribedById: ie
	}));
	function Fe() {
		let e = ne?.autoScrollEnabled === !1, t = typeof r == "object" ? r.enabled === !1 : r === !1, n = g && !e && !t;
		return typeof r == "object" ? {
			...r,
			enabled: n
		} : { enabled: n };
	}
}), qr = /*#__PURE__*/ (0, P.createContext)(null), Jr = "button", Yr = "Draggable";
function Xr(e) {
	let { id: t, data: n, disabled: r = !1, attributes: i } = e, a = kt(Yr), { activators: o, activatorEvent: s, active: c, activeNodeRect: l, ariaDescribedById: u, draggableNodes: d, over: f } = (0, P.useContext)(Ir), { role: p = Jr, roleDescription: m = "draggable", tabIndex: h = 0 } = i ?? {}, g = c?.id === t, _ = (0, P.useContext)(g ? Wr : qr), [v, y] = Et(), [b, x] = Et(), ee = wr(o, t), S = wt(n);
	return xt(() => (d.set(t, {
		id: t,
		key: a,
		node: v,
		activatorNode: b,
		data: S
	}), () => {
		let e = d.get(t);
		e && e.key === a && d.delete(t);
	}), [d, t]), {
		active: c,
		activatorEvent: s,
		activeNodeRect: l,
		attributes: (0, P.useMemo)(() => ({
			role: p,
			tabIndex: h,
			"aria-disabled": r,
			"aria-pressed": g && p === Jr ? !0 : void 0,
			"aria-roledescription": m,
			"aria-describedby": u.draggable
		}), [
			r,
			p,
			h,
			g,
			m,
			u.draggable
		]),
		isDragging: g,
		listeners: r ? void 0 : ee,
		node: v,
		over: f,
		setNodeRef: y,
		setActivatorNodeRef: x,
		transform: _
	};
}
function Zr() {
	return (0, P.useContext)(Lr);
}
var Qr = "Droppable", $r = { timeout: 25 };
function ei(e) {
	let { data: t, disabled: n = !1, id: r, resizeObserverConfig: i } = e, a = kt(Qr), { active: o, dispatch: s, over: c, measureDroppableContainers: l } = (0, P.useContext)(Ir), u = (0, P.useRef)({ disabled: n }), d = (0, P.useRef)(!1), f = (0, P.useRef)(null), p = (0, P.useRef)(null), { disabled: m, updateMeasurementsFor: h, timeout: g } = {
		...$r,
		...i
	}, _ = wt(h ?? r), v = hr({
		callback: (0, P.useCallback)(() => {
			d.current ? (p.current != null && clearTimeout(p.current), p.current = setTimeout(() => {
				l(Array.isArray(_.current) ? _.current : [_.current]), p.current = null;
			}, g)) : d.current = !0;
		}, [g]),
		disabled: m || !o
	}), [y, b] = Et((0, P.useCallback)((e, t) => {
		v && (t && (v.unobserve(t), d.current = !1), e && v.observe(e));
	}, [v])), x = wt(t);
	return (0, P.useEffect)(() => {
		v && y.current && (v.disconnect(), d.current = !1, v.observe(y.current));
	}, [y, v]), (0, P.useEffect)(() => (s({
		type: L.RegisterDroppable,
		element: {
			id: r,
			key: a,
			disabled: n,
			node: y,
			rect: f,
			data: x
		}
	}), () => s({
		type: L.UnregisterDroppable,
		key: a,
		id: r
	})), [r]), (0, P.useEffect)(() => {
		n !== u.current.disabled && (s({
			type: L.SetDroppableDisabled,
			id: r,
			key: a,
			disabled: n
		}), u.current.disabled = n);
	}, [
		r,
		a,
		n,
		s
	]), {
		active: o,
		rect: f,
		isOver: c?.id === r,
		node: y,
		over: c,
		setNodeRef: b
	};
}
// node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
var ti = (e) => {
	let { transform: t } = e;
	return {
		...t,
		x: 0
	};
};
// node_modules/@dnd-kit/sortable/dist/sortable.esm.js
function ni(e, t, n) {
	let r = e.slice();
	return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function ri(e, t) {
	return e.reduce((e, n, r) => {
		let i = t.get(n);
		return i && (e[r] = i), e;
	}, Array(e.length));
}
function ii(e) {
	return e !== null && e >= 0;
}
function ai(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function oi(e) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: e
	} : e;
}
var si = (e) => {
	let { rects: t, activeIndex: n, overIndex: r, index: i } = e, a = ni(t, r, n), o = t[i], s = a[i];
	return !s || !o ? null : {
		x: s.left - o.left,
		y: s.top - o.top,
		scaleX: s.width / o.width,
		scaleY: s.height / o.height
	};
}, ci = {
	scaleX: 1,
	scaleY: 1
}, li = (e) => {
	let { activeIndex: t, activeNodeRect: n, index: r, rects: i, overIndex: a } = e, o = i[t] ?? n;
	if (!o) return null;
	if (r === t) {
		let e = i[a];
		return e ? {
			x: 0,
			y: t < a ? e.top + e.height - (o.top + o.height) : e.top - o.top,
			...ci
		} : null;
	}
	let s = ui(i, r, t);
	return r > t && r <= a ? {
		x: 0,
		y: -o.height - s,
		...ci
	} : r < t && r >= a ? {
		x: 0,
		y: o.height + s,
		...ci
	} : {
		x: 0,
		y: 0,
		...ci
	};
};
function ui(e, t, n) {
	let r = e[t], i = e[t - 1], a = e[t + 1];
	return r ? n < t ? i ? r.top - (i.top + i.height) : a ? a.top - (r.top + r.height) : 0 : a ? a.top - (r.top + r.height) : i ? r.top - (i.top + i.height) : 0 : 0;
}
var di = "Sortable", fi = /*#__PURE__*/ P.createContext({
	activeIndex: -1,
	containerId: di,
	disableTransforms: !1,
	items: [],
	overIndex: -1,
	useDragOverlay: !1,
	sortedRects: [],
	strategy: si,
	disabled: {
		draggable: !1,
		droppable: !1
	}
});
function pi(e) {
	let { children: t, id: n, items: r, strategy: i = si, disabled: a = !1 } = e, { active: o, dragOverlay: s, droppableRects: c, over: l, measureDroppableContainers: u } = Zr(), d = kt(di, n), f = s.rect !== null, p = (0, P.useMemo)(() => r.map((e) => typeof e == "object" && "id" in e ? e.id : e), [r]), m = o != null, h = o ? p.indexOf(o.id) : -1, g = l ? p.indexOf(l.id) : -1, _ = (0, P.useRef)(p), v = !ai(p, _.current), y = g !== -1 && h === -1 || v, b = oi(a);
	xt(() => {
		v && m && u(p);
	}, [
		v,
		p,
		m,
		u
	]), (0, P.useEffect)(() => {
		_.current = p;
	}, [p]);
	let x = (0, P.useMemo)(() => ({
		activeIndex: h,
		containerId: d,
		disabled: b,
		disableTransforms: y,
		items: p,
		overIndex: g,
		useDragOverlay: f,
		sortedRects: ri(p, c),
		strategy: i
	}), [
		h,
		d,
		b.draggable,
		b.droppable,
		y,
		p,
		g,
		c,
		f,
		i
	]);
	return P.createElement(fi.Provider, { value: x }, t);
}
var mi = (e) => {
	let { id: t, items: n, activeIndex: r, overIndex: i } = e;
	return ni(n, r, i).indexOf(t);
}, hi = (e) => {
	let { containerId: t, isSorting: n, wasDragging: r, index: i, items: a, newIndex: o, previousItems: s, previousContainerId: c, transition: l } = e;
	return !l || !r || s !== a && i === o ? !1 : n ? !0 : o !== i && t === c;
}, gi = {
	duration: 200,
	easing: "ease"
}, _i = "transform", vi = /*#__PURE__*/ Lt.Transition.toString({
	property: _i,
	duration: 0,
	easing: "linear"
}), yi = { roleDescription: "sortable" };
function bi(e) {
	let { disabled: t, index: n, node: r, rect: i } = e, [a, o] = (0, P.useState)(null), s = (0, P.useRef)(n);
	return xt(() => {
		if (!t && n !== s.current && r.current) {
			let e = i.current;
			if (e) {
				let t = hn(r.current, { ignoreTransform: !0 }), n = {
					x: e.left - t.left,
					y: e.top - t.top,
					scaleX: e.width / t.width,
					scaleY: e.height / t.height
				};
				(n.x || n.y) && o(n);
			}
		}
		n !== s.current && (s.current = n);
	}, [
		t,
		n,
		r,
		i
	]), (0, P.useEffect)(() => {
		a && o(null);
	}, [a]), a;
}
function xi(e) {
	let { animateLayoutChanges: t = hi, attributes: n, disabled: r, data: i, getNewIndex: a = mi, id: o, strategy: s, resizeObserverConfig: c, transition: l = gi } = e, { items: u, containerId: d, activeIndex: f, disabled: p, disableTransforms: m, sortedRects: h, overIndex: g, useDragOverlay: _, strategy: v } = (0, P.useContext)(fi), y = Si(r, p), b = u.indexOf(o), x = (0, P.useMemo)(() => ({
		sortable: {
			containerId: d,
			index: b,
			items: u
		},
		...i
	}), [
		d,
		i,
		b,
		u
	]), ee = (0, P.useMemo)(() => u.slice(u.indexOf(o)), [u, o]), { rect: S, node: te, isOver: ne, setNodeRef: C } = ei({
		id: o,
		data: x,
		disabled: y.droppable,
		resizeObserverConfig: {
			updateMeasurementsFor: ee,
			...c
		}
	}), { active: w, activatorEvent: T, activeNodeRect: re, attributes: ie, setNodeRef: ae, listeners: oe, isDragging: se, over: ce, setActivatorNodeRef: le, transform: E } = Xr({
		id: o,
		data: x,
		attributes: {
			...yi,
			...n
		},
		disabled: y.draggable
	}), ue = pt(C, ae), de = !!w, fe = de && !m && ii(f) && ii(g), D = !_ && se, pe = fe ? (D && fe ? E : null) ?? (s ?? v)({
		rects: h,
		activeNodeRect: re,
		activeIndex: f,
		overIndex: g,
		index: b
	}) : null, O = ii(f) && ii(g) ? a({
		id: o,
		items: u,
		activeIndex: f,
		overIndex: g
	}) : b, me = w?.id, k = (0, P.useRef)({
		activeId: me,
		items: u,
		newIndex: O,
		containerId: d
	}), he = u !== k.current.items, A = t({
		active: w,
		containerId: d,
		isDragging: se,
		isSorting: de,
		id: o,
		index: b,
		items: u,
		newIndex: k.current.newIndex,
		previousItems: k.current.items,
		previousContainerId: k.current.containerId,
		transition: l,
		wasDragging: k.current.activeId != null
	}), j = bi({
		disabled: !A,
		index: b,
		node: te,
		rect: S
	});
	return (0, P.useEffect)(() => {
		de && k.current.newIndex !== O && (k.current.newIndex = O), d !== k.current.containerId && (k.current.containerId = d), u !== k.current.items && (k.current.items = u);
	}, [
		de,
		O,
		d,
		u
	]), (0, P.useEffect)(() => {
		if (me === k.current.activeId) return;
		if (me != null && k.current.activeId == null) {
			k.current.activeId = me;
			return;
		}
		let e = setTimeout(() => {
			k.current.activeId = me;
		}, 50);
		return () => clearTimeout(e);
	}, [me]), {
		active: w,
		activeIndex: f,
		attributes: ie,
		data: x,
		rect: S,
		index: b,
		newIndex: O,
		items: u,
		isOver: ne,
		isSorting: de,
		isDragging: se,
		listeners: oe,
		node: te,
		overIndex: g,
		over: ce,
		setNodeRef: ue,
		setActivatorNodeRef: le,
		setDroppableNodeRef: C,
		setDraggableNodeRef: ae,
		transform: j ?? pe,
		transition: ge()
	};
	function ge() {
		if (j || he && k.current.newIndex === b) return vi;
		if (!(D && !Pt(T) || !l) && (de || A)) return Lt.Transition.toString({
			...l,
			property: _i
		});
	}
}
function Si(e, t) {
	return typeof e == "boolean" ? {
		draggable: e,
		droppable: !1
	} : {
		draggable: e?.draggable ?? t.draggable,
		droppable: e?.droppable ?? t.droppable
	};
}
V.Down, V.Right, V.Up, V.Left;
// node_modules/zod/v3/helpers/util.js
var H;
(function(e) {
	e.assertEqual = (e) => {};
	function t(e) {}
	e.assertIs = t;
	function n(e) {
		throw Error();
	}
	e.assertNever = n, e.arrayToEnum = (e) => {
		let t = {};
		for (let n of e) t[n] = n;
		return t;
	}, e.getValidEnumValues = (t) => {
		let n = e.objectKeys(t).filter((e) => typeof t[t[e]] != "number"), r = {};
		for (let e of n) r[e] = t[e];
		return e.objectValues(r);
	}, e.objectValues = (t) => e.objectKeys(t).map(function(e) {
		return t[e];
	}), e.objectKeys = typeof Object.keys == "function" ? (e) => Object.keys(e) : (e) => {
		let t = [];
		for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
		return t;
	}, e.find = (e, t) => {
		for (let n of e) if (t(n)) return n;
	}, e.isInteger = typeof Number.isInteger == "function" ? (e) => Number.isInteger(e) : (e) => typeof e == "number" && Number.isFinite(e) && Math.floor(e) === e;
	function r(e, t = " | ") {
		return e.map((e) => typeof e == "string" ? `'${e}'` : e).join(t);
	}
	e.joinValues = r, e.jsonStringifyReplacer = (e, t) => typeof t == "bigint" ? t.toString() : t;
})(H ||= {});
var Ci;
(function(e) {
	e.mergeShapes = (e, t) => ({
		...e,
		...t
	});
})(Ci ||= {});
var U = H.arrayToEnum([
	"string",
	"nan",
	"number",
	"integer",
	"float",
	"boolean",
	"date",
	"bigint",
	"symbol",
	"function",
	"undefined",
	"null",
	"array",
	"object",
	"unknown",
	"promise",
	"void",
	"never",
	"map",
	"set"
]), wi = (e) => {
	switch (typeof e) {
		case "undefined": return U.undefined;
		case "string": return U.string;
		case "number": return Number.isNaN(e) ? U.nan : U.number;
		case "boolean": return U.boolean;
		case "function": return U.function;
		case "bigint": return U.bigint;
		case "symbol": return U.symbol;
		case "object": return Array.isArray(e) ? U.array : e === null ? U.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? U.promise : typeof Map < "u" && e instanceof Map ? U.map : typeof Set < "u" && e instanceof Set ? U.set : typeof Date < "u" && e instanceof Date ? U.date : U.object;
		default: return U.unknown;
	}
}, W = H.arrayToEnum([
	"invalid_type",
	"invalid_literal",
	"custom",
	"invalid_union",
	"invalid_union_discriminator",
	"invalid_enum_value",
	"unrecognized_keys",
	"invalid_arguments",
	"invalid_return_type",
	"invalid_date",
	"invalid_string",
	"too_small",
	"too_big",
	"invalid_intersection_types",
	"not_multiple_of",
	"not_finite"
]), Ti = class e extends Error {
	get errors() {
		return this.issues;
	}
	constructor(e) {
		super(), this.issues = [], this.addIssue = (e) => {
			this.issues = [...this.issues, e];
		}, this.addIssues = (e = []) => {
			this.issues = [...this.issues, ...e];
		};
		let t = new.target.prototype;
		Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
	}
	format(e) {
		let t = e || function(e) {
			return e.message;
		}, n = { _errors: [] }, r = (e) => {
			for (let i of e.issues) if (i.code === "invalid_union") i.unionErrors.map(r);
			else if (i.code === "invalid_return_type") r(i.returnTypeError);
			else if (i.code === "invalid_arguments") r(i.argumentsError);
			else if (i.path.length === 0) n._errors.push(t(i));
			else {
				let e = n, r = 0;
				for (; r < i.path.length;) {
					let n = i.path[r];
					r === i.path.length - 1 ? (e[n] = e[n] || { _errors: [] }, e[n]._errors.push(t(i))) : e[n] = e[n] || { _errors: [] }, e = e[n], r++;
				}
			}
		};
		return r(this), n;
	}
	static assert(t) {
		if (!(t instanceof e)) throw Error(`Not a ZodError: ${t}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, H.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(e = (e) => e.message) {
		let t = {}, n = [];
		for (let r of this.issues) if (r.path.length > 0) {
			let n = r.path[0];
			t[n] = t[n] || [], t[n].push(e(r));
		} else n.push(e(r));
		return {
			formErrors: n,
			fieldErrors: t
		};
	}
	get formErrors() {
		return this.flatten();
	}
};
Ti.create = (e) => new Ti(e);
// node_modules/zod/v3/locales/en.js
var Ei = (e, t) => {
	let n;
	switch (e.code) {
		case W.invalid_type:
			n = e.received === U.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
			break;
		case W.invalid_literal:
			n = `Invalid literal value, expected ${JSON.stringify(e.expected, H.jsonStringifyReplacer)}`;
			break;
		case W.unrecognized_keys:
			n = `Unrecognized key(s) in object: ${H.joinValues(e.keys, ", ")}`;
			break;
		case W.invalid_union:
			n = "Invalid input";
			break;
		case W.invalid_union_discriminator:
			n = `Invalid discriminator value. Expected ${H.joinValues(e.options)}`;
			break;
		case W.invalid_enum_value:
			n = `Invalid enum value. Expected ${H.joinValues(e.options)}, received '${e.received}'`;
			break;
		case W.invalid_arguments:
			n = "Invalid function arguments";
			break;
		case W.invalid_return_type:
			n = "Invalid function return type";
			break;
		case W.invalid_date:
			n = "Invalid date";
			break;
		case W.invalid_string:
			typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : H.assertNever(e.validation) : n = e.validation === "regex" ? "Invalid" : `Invalid ${e.validation}`;
			break;
		case W.too_small:
			n = e.type === "array" ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" || e.type === "bigint" ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
			break;
		case W.too_big:
			n = e.type === "array" ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
			break;
		case W.custom:
			n = "Invalid input";
			break;
		case W.invalid_intersection_types:
			n = "Intersection results could not be merged";
			break;
		case W.not_multiple_of:
			n = `Number must be a multiple of ${e.multipleOf}`;
			break;
		case W.not_finite:
			n = "Number must be finite";
			break;
		default: n = t.defaultError, H.assertNever(e);
	}
	return { message: n };
}, Di = Ei;
function Oi() {
	return Di;
}
// node_modules/zod/v3/helpers/parseUtil.js
var ki = (e) => {
	let { data: t, path: n, errorMaps: r, issueData: i } = e, a = [...n, ...i.path || []], o = {
		...i,
		path: a
	};
	if (i.message !== void 0) return {
		...i,
		path: a,
		message: i.message
	};
	let s = "", c = r.filter((e) => !!e).slice().reverse();
	for (let e of c) s = e(o, {
		data: t,
		defaultError: s
	}).message;
	return {
		...i,
		path: a,
		message: s
	};
};
function G(e, t) {
	let n = Oi(), r = ki({
		issueData: t,
		data: e.data,
		path: e.path,
		errorMaps: [
			e.common.contextualErrorMap,
			e.schemaErrorMap,
			n,
			n === Ei ? void 0 : Ei
		].filter((e) => !!e)
	});
	e.common.issues.push(r);
}
var K = class e {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		this.value === "valid" && (this.value = "dirty");
	}
	abort() {
		this.value !== "aborted" && (this.value = "aborted");
	}
	static mergeArray(e, t) {
		let n = [];
		for (let r of t) {
			if (r.status === "aborted") return q;
			r.status === "dirty" && e.dirty(), n.push(r.value);
		}
		return {
			status: e.value,
			value: n
		};
	}
	static async mergeObjectAsync(t, n) {
		let r = [];
		for (let e of n) {
			let t = await e.key, n = await e.value;
			r.push({
				key: t,
				value: n
			});
		}
		return e.mergeObjectSync(t, r);
	}
	static mergeObjectSync(e, t) {
		let n = {};
		for (let r of t) {
			let { key: t, value: i } = r;
			if (t.status === "aborted" || i.status === "aborted") return q;
			t.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), t.value !== "__proto__" && (i.value !== void 0 || r.alwaysSet) && (n[t.value] = i.value);
		}
		return {
			status: e.value,
			value: n
		};
	}
}, q = Object.freeze({ status: "aborted" }), Ai = (e) => ({
	status: "dirty",
	value: e
}), J = (e) => ({
	status: "valid",
	value: e
}), ji = (e) => e.status === "aborted", Mi = (e) => e.status === "dirty", Ni = (e) => e.status === "valid", Pi = (e) => typeof Promise < "u" && e instanceof Promise, Y;
(function(e) {
	e.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, e.toString = (e) => typeof e == "string" ? e : e?.message;
})(Y ||= {});
// node_modules/zod/v3/types.js
var Fi = class {
	constructor(e, t, n, r) {
		this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = r;
	}
	get path() {
		return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
	}
}, Ii = (e, t) => {
	if (Ni(t)) return {
		success: !0,
		data: t.value
	};
	if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
	return {
		success: !1,
		get error() {
			if (this._error) return this._error;
			let t = new Ti(e.common.issues);
			return this._error = t, this._error;
		}
	};
};
function X(e) {
	if (!e) return {};
	let { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
	if (t && (n || r)) throw Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
	return t ? {
		errorMap: t,
		description: i
	} : {
		errorMap: (t, i) => {
			let { message: a } = e;
			return t.code === "invalid_enum_value" ? { message: a ?? i.defaultError } : i.data === void 0 ? { message: a ?? r ?? i.defaultError } : t.code === "invalid_type" ? { message: a ?? n ?? i.defaultError } : { message: i.defaultError };
		},
		description: i
	};
}
var Z = class {
	get description() {
		return this._def.description;
	}
	_getType(e) {
		return wi(e.data);
	}
	_getOrReturnCtx(e, t) {
		return t || {
			common: e.parent.common,
			data: e.data,
			parsedType: wi(e.data),
			schemaErrorMap: this._def.errorMap,
			path: e.path,
			parent: e.parent
		};
	}
	_processInputParams(e) {
		return {
			status: new K(),
			ctx: {
				common: e.parent.common,
				data: e.data,
				parsedType: wi(e.data),
				schemaErrorMap: this._def.errorMap,
				path: e.path,
				parent: e.parent
			}
		};
	}
	_parseSync(e) {
		let t = this._parse(e);
		if (Pi(t)) throw Error("Synchronous parse encountered promise.");
		return t;
	}
	_parseAsync(e) {
		let t = this._parse(e);
		return Promise.resolve(t);
	}
	parse(e, t) {
		let n = this.safeParse(e, t);
		if (n.success) return n.data;
		throw n.error;
	}
	safeParse(e, t) {
		let n = {
			common: {
				issues: [],
				async: t?.async ?? !1,
				contextualErrorMap: t?.errorMap
			},
			path: t?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: wi(e)
		};
		return Ii(n, this._parseSync({
			data: e,
			path: n.path,
			parent: n
		}));
	}
	"~validate"(e) {
		let t = {
			common: {
				issues: [],
				async: !!this["~standard"].async
			},
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: wi(e)
		};
		if (!this["~standard"].async) try {
			let n = this._parseSync({
				data: e,
				path: [],
				parent: t
			});
			return Ni(n) ? { value: n.value } : { issues: t.common.issues };
		} catch (e) {
			e?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), t.common = {
				issues: [],
				async: !0
			};
		}
		return this._parseAsync({
			data: e,
			path: [],
			parent: t
		}).then((e) => Ni(e) ? { value: e.value } : { issues: t.common.issues });
	}
	async parseAsync(e, t) {
		let n = await this.safeParseAsync(e, t);
		if (n.success) return n.data;
		throw n.error;
	}
	async safeParseAsync(e, t) {
		let n = {
			common: {
				issues: [],
				contextualErrorMap: t?.errorMap,
				async: !0
			},
			path: t?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: wi(e)
		}, r = this._parse({
			data: e,
			path: n.path,
			parent: n
		});
		return Ii(n, await (Pi(r) ? r : Promise.resolve(r)));
	}
	refine(e, t) {
		let n = (e) => typeof t == "string" || t === void 0 ? { message: t } : typeof t == "function" ? t(e) : t;
		return this._refinement((t, r) => {
			let i = e(t), a = () => r.addIssue({
				code: W.custom,
				...n(t)
			});
			return typeof Promise < "u" && i instanceof Promise ? i.then((e) => e ? !0 : (a(), !1)) : i ? !0 : (a(), !1);
		});
	}
	refinement(e, t) {
		return this._refinement((n, r) => e(n) ? !0 : (r.addIssue(typeof t == "function" ? t(n, r) : t), !1));
	}
	_refinement(e) {
		return new Ra({
			schema: this,
			typeName: $.ZodEffects,
			effect: {
				type: "refinement",
				refinement: e
			}
		});
	}
	superRefine(e) {
		return this._refinement(e);
	}
	constructor(e) {
		this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
			version: 1,
			vendor: "zod",
			validate: (e) => this["~validate"](e)
		};
	}
	optional() {
		return za.create(this, this._def);
	}
	nullable() {
		return Ba.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return ba.create(this);
	}
	promise() {
		return La.create(this, this._def);
	}
	or(e) {
		return Sa.create([this, e], this._def);
	}
	and(e) {
		return Ea.create(this, e, this._def);
	}
	transform(e) {
		return new Ra({
			...X(this._def),
			schema: this,
			typeName: $.ZodEffects,
			effect: {
				type: "transform",
				transform: e
			}
		});
	}
	default(e) {
		let t = typeof e == "function" ? e : () => e;
		return new Va({
			...X(this._def),
			innerType: this,
			defaultValue: t,
			typeName: $.ZodDefault
		});
	}
	brand() {
		return new Wa({
			typeName: $.ZodBranded,
			type: this,
			...X(this._def)
		});
	}
	catch(e) {
		let t = typeof e == "function" ? e : () => e;
		return new Ha({
			...X(this._def),
			innerType: this,
			catchValue: t,
			typeName: $.ZodCatch
		});
	}
	describe(e) {
		let t = this.constructor;
		return new t({
			...this._def,
			description: e
		});
	}
	pipe(e) {
		return Ga.create(this, e);
	}
	readonly() {
		return Ka.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
}, Li = /^c[^\s-]{8,}$/i, Ri = /^[0-9a-z]+$/, zi = /^[0-9A-HJKMNP-TV-Z]{26}$/i, Bi = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Vi = /^[a-z0-9_-]{21}$/i, Hi = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Ui = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Wi = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Gi = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", Ki, qi = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ji = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Yi = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Xi = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Zi = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Qi = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, $i = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ea = RegExp(`^${$i}$`);
function ta(e) {
	let t = "[0-5]\\d";
	e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision ?? (t = `${t}(\\.\\d+)?`);
	let n = e.precision ? "+" : "?";
	return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function na(e) {
	return RegExp(`^${ta(e)}$`);
}
function ra(e) {
	let t = `${$i}T${ta(e)}`, n = [];
	return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, RegExp(`^${t}$`);
}
function ia(e, t) {
	return !((t !== "v4" && t || !qi.test(e)) && (t !== "v6" && t || !Yi.test(e)));
}
function aa(e, t) {
	if (!Hi.test(e)) return !1;
	try {
		let [n] = e.split(".");
		if (!n) return !1;
		let r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), i = JSON.parse(atob(r));
		return !(typeof i != "object" || !i || "typ" in i && i?.typ !== "JWT" || !i.alg || t && i.alg !== t);
	} catch {
		return !1;
	}
}
function oa(e, t) {
	return !((t !== "v4" && t || !Ji.test(e)) && (t !== "v6" && t || !Xi.test(e)));
}
var sa = class e extends Z {
	_parse(e) {
		if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== U.string) {
			let t = this._getOrReturnCtx(e);
			return G(t, {
				code: W.invalid_type,
				expected: U.string,
				received: t.parsedType
			}), q;
		}
		let t = new K(), n;
		for (let r of this._def.checks) if (r.kind === "min") e.data.length < r.value && (n = this._getOrReturnCtx(e, n), G(n, {
			code: W.too_small,
			minimum: r.value,
			type: "string",
			inclusive: !0,
			exact: !1,
			message: r.message
		}), t.dirty());
		else if (r.kind === "max") e.data.length > r.value && (n = this._getOrReturnCtx(e, n), G(n, {
			code: W.too_big,
			maximum: r.value,
			type: "string",
			inclusive: !0,
			exact: !1,
			message: r.message
		}), t.dirty());
		else if (r.kind === "length") {
			let i = e.data.length > r.value, a = e.data.length < r.value;
			(i || a) && (n = this._getOrReturnCtx(e, n), i ? G(n, {
				code: W.too_big,
				maximum: r.value,
				type: "string",
				inclusive: !0,
				exact: !0,
				message: r.message
			}) : a && G(n, {
				code: W.too_small,
				minimum: r.value,
				type: "string",
				inclusive: !0,
				exact: !0,
				message: r.message
			}), t.dirty());
		} else if (r.kind === "email") Wi.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "email",
			code: W.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "emoji") Ki ||= new RegExp(Gi, "u"), Ki.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "emoji",
			code: W.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "uuid") Bi.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "uuid",
			code: W.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "nanoid") Vi.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "nanoid",
			code: W.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "cuid") Li.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "cuid",
			code: W.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "cuid2") Ri.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "cuid2",
			code: W.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "ulid") zi.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "ulid",
			code: W.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "url") try {
			new URL(e.data);
		} catch {
			n = this._getOrReturnCtx(e, n), G(n, {
				validation: "url",
				code: W.invalid_string,
				message: r.message
			}), t.dirty();
		}
		else r.kind === "regex" ? (r.regex.lastIndex = 0, r.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "regex",
			code: W.invalid_string,
			message: r.message
		}), t.dirty())) : r.kind === "trim" ? e.data = e.data.trim() : r.kind === "includes" ? e.data.includes(r.value, r.position) || (n = this._getOrReturnCtx(e, n), G(n, {
			code: W.invalid_string,
			validation: {
				includes: r.value,
				position: r.position
			},
			message: r.message
		}), t.dirty()) : r.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : r.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : r.kind === "startsWith" ? e.data.startsWith(r.value) || (n = this._getOrReturnCtx(e, n), G(n, {
			code: W.invalid_string,
			validation: { startsWith: r.value },
			message: r.message
		}), t.dirty()) : r.kind === "endsWith" ? e.data.endsWith(r.value) || (n = this._getOrReturnCtx(e, n), G(n, {
			code: W.invalid_string,
			validation: { endsWith: r.value },
			message: r.message
		}), t.dirty()) : r.kind === "datetime" ? ra(r).test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			code: W.invalid_string,
			validation: "datetime",
			message: r.message
		}), t.dirty()) : r.kind === "date" ? ea.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			code: W.invalid_string,
			validation: "date",
			message: r.message
		}), t.dirty()) : r.kind === "time" ? na(r).test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			code: W.invalid_string,
			validation: "time",
			message: r.message
		}), t.dirty()) : r.kind === "duration" ? Ui.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "duration",
			code: W.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "ip" ? ia(e.data, r.version) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "ip",
			code: W.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "jwt" ? aa(e.data, r.alg) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "jwt",
			code: W.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "cidr" ? oa(e.data, r.version) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "cidr",
			code: W.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "base64" ? Zi.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "base64",
			code: W.invalid_string,
			message: r.message
		}), t.dirty()) : r.kind === "base64url" ? Qi.test(e.data) || (n = this._getOrReturnCtx(e, n), G(n, {
			validation: "base64url",
			code: W.invalid_string,
			message: r.message
		}), t.dirty()) : H.assertNever(r);
		return {
			status: t.value,
			value: e.data
		};
	}
	_regex(e, t, n) {
		return this.refinement((t) => e.test(t), {
			validation: t,
			code: W.invalid_string,
			...Y.errToObj(n)
		});
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	email(e) {
		return this._addCheck({
			kind: "email",
			...Y.errToObj(e)
		});
	}
	url(e) {
		return this._addCheck({
			kind: "url",
			...Y.errToObj(e)
		});
	}
	emoji(e) {
		return this._addCheck({
			kind: "emoji",
			...Y.errToObj(e)
		});
	}
	uuid(e) {
		return this._addCheck({
			kind: "uuid",
			...Y.errToObj(e)
		});
	}
	nanoid(e) {
		return this._addCheck({
			kind: "nanoid",
			...Y.errToObj(e)
		});
	}
	cuid(e) {
		return this._addCheck({
			kind: "cuid",
			...Y.errToObj(e)
		});
	}
	cuid2(e) {
		return this._addCheck({
			kind: "cuid2",
			...Y.errToObj(e)
		});
	}
	ulid(e) {
		return this._addCheck({
			kind: "ulid",
			...Y.errToObj(e)
		});
	}
	base64(e) {
		return this._addCheck({
			kind: "base64",
			...Y.errToObj(e)
		});
	}
	base64url(e) {
		return this._addCheck({
			kind: "base64url",
			...Y.errToObj(e)
		});
	}
	jwt(e) {
		return this._addCheck({
			kind: "jwt",
			...Y.errToObj(e)
		});
	}
	ip(e) {
		return this._addCheck({
			kind: "ip",
			...Y.errToObj(e)
		});
	}
	cidr(e) {
		return this._addCheck({
			kind: "cidr",
			...Y.errToObj(e)
		});
	}
	datetime(e) {
		return typeof e == "string" ? this._addCheck({
			kind: "datetime",
			precision: null,
			offset: !1,
			local: !1,
			message: e
		}) : this._addCheck({
			kind: "datetime",
			precision: e?.precision === void 0 ? null : e?.precision,
			offset: e?.offset ?? !1,
			local: e?.local ?? !1,
			...Y.errToObj(e?.message)
		});
	}
	date(e) {
		return this._addCheck({
			kind: "date",
			message: e
		});
	}
	time(e) {
		return typeof e == "string" ? this._addCheck({
			kind: "time",
			precision: null,
			message: e
		}) : this._addCheck({
			kind: "time",
			precision: e?.precision === void 0 ? null : e?.precision,
			...Y.errToObj(e?.message)
		});
	}
	duration(e) {
		return this._addCheck({
			kind: "duration",
			...Y.errToObj(e)
		});
	}
	regex(e, t) {
		return this._addCheck({
			kind: "regex",
			regex: e,
			...Y.errToObj(t)
		});
	}
	includes(e, t) {
		return this._addCheck({
			kind: "includes",
			value: e,
			position: t?.position,
			...Y.errToObj(t?.message)
		});
	}
	startsWith(e, t) {
		return this._addCheck({
			kind: "startsWith",
			value: e,
			...Y.errToObj(t)
		});
	}
	endsWith(e, t) {
		return this._addCheck({
			kind: "endsWith",
			value: e,
			...Y.errToObj(t)
		});
	}
	min(e, t) {
		return this._addCheck({
			kind: "min",
			value: e,
			...Y.errToObj(t)
		});
	}
	max(e, t) {
		return this._addCheck({
			kind: "max",
			value: e,
			...Y.errToObj(t)
		});
	}
	length(e, t) {
		return this._addCheck({
			kind: "length",
			value: e,
			...Y.errToObj(t)
		});
	}
	nonempty(e) {
		return this.min(1, Y.errToObj(e));
	}
	trim() {
		return new e({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }]
		});
	}
	toLowerCase() {
		return new e({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }]
		});
	}
	toUpperCase() {
		return new e({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }]
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((e) => e.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((e) => e.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((e) => e.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((e) => e.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((e) => e.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((e) => e.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((e) => e.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((e) => e.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((e) => e.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((e) => e.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((e) => e.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((e) => e.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((e) => e.kind === "ip");
	}
	get isCIDR() {
		return !!this._def.checks.find((e) => e.kind === "cidr");
	}
	get isBase64() {
		return !!this._def.checks.find((e) => e.kind === "base64");
	}
	get isBase64url() {
		return !!this._def.checks.find((e) => e.kind === "base64url");
	}
	get minLength() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxLength() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
};
sa.create = (e) => new sa({
	checks: [],
	typeName: $.ZodString,
	coerce: e?.coerce ?? !1,
	...X(e)
});
function ca(e, t) {
	let n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r;
	return Number.parseInt(e.toFixed(i).replace(".", "")) % Number.parseInt(t.toFixed(i).replace(".", "")) / 10 ** i;
}
var la = class e extends Z {
	constructor() {
		super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
	}
	_parse(e) {
		if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== U.number) {
			let t = this._getOrReturnCtx(e);
			return G(t, {
				code: W.invalid_type,
				expected: U.number,
				received: t.parsedType
			}), q;
		}
		let t, n = new K();
		for (let r of this._def.checks) r.kind === "int" ? H.isInteger(e.data) || (t = this._getOrReturnCtx(e, t), G(t, {
			code: W.invalid_type,
			expected: "integer",
			received: "float",
			message: r.message
		}), n.dirty()) : r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t), G(t, {
			code: W.too_small,
			minimum: r.value,
			type: "number",
			inclusive: r.inclusive,
			exact: !1,
			message: r.message
		}), n.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t), G(t, {
			code: W.too_big,
			maximum: r.value,
			type: "number",
			inclusive: r.inclusive,
			exact: !1,
			message: r.message
		}), n.dirty()) : r.kind === "multipleOf" ? ca(e.data, r.value) !== 0 && (t = this._getOrReturnCtx(e, t), G(t, {
			code: W.not_multiple_of,
			multipleOf: r.value,
			message: r.message
		}), n.dirty()) : r.kind === "finite" ? Number.isFinite(e.data) || (t = this._getOrReturnCtx(e, t), G(t, {
			code: W.not_finite,
			message: r.message
		}), n.dirty()) : H.assertNever(r);
		return {
			status: n.value,
			value: e.data
		};
	}
	gte(e, t) {
		return this.setLimit("min", e, !0, Y.toString(t));
	}
	gt(e, t) {
		return this.setLimit("min", e, !1, Y.toString(t));
	}
	lte(e, t) {
		return this.setLimit("max", e, !0, Y.toString(t));
	}
	lt(e, t) {
		return this.setLimit("max", e, !1, Y.toString(t));
	}
	setLimit(t, n, r, i) {
		return new e({
			...this._def,
			checks: [...this._def.checks, {
				kind: t,
				value: n,
				inclusive: r,
				message: Y.toString(i)
			}]
		});
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	int(e) {
		return this._addCheck({
			kind: "int",
			message: Y.toString(e)
		});
	}
	positive(e) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !1,
			message: Y.toString(e)
		});
	}
	negative(e) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !1,
			message: Y.toString(e)
		});
	}
	nonpositive(e) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !0,
			message: Y.toString(e)
		});
	}
	nonnegative(e) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !0,
			message: Y.toString(e)
		});
	}
	multipleOf(e, t) {
		return this._addCheck({
			kind: "multipleOf",
			value: e,
			message: Y.toString(t)
		});
	}
	finite(e) {
		return this._addCheck({
			kind: "finite",
			message: Y.toString(e)
		});
	}
	safe(e) {
		return this._addCheck({
			kind: "min",
			inclusive: !0,
			value: -(2 ** 53 - 1),
			message: Y.toString(e)
		})._addCheck({
			kind: "max",
			inclusive: !0,
			value: 2 ** 53 - 1,
			message: Y.toString(e)
		});
	}
	get minValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
	get isInt() {
		return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && H.isInteger(e.value));
	}
	get isFinite() {
		let e = null, t = null;
		for (let n of this._def.checks) if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") return !0;
		else n.kind === "min" ? (t === null || n.value > t) && (t = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
		return Number.isFinite(t) && Number.isFinite(e);
	}
};
la.create = (e) => new la({
	checks: [],
	typeName: $.ZodNumber,
	coerce: e?.coerce || !1,
	...X(e)
});
var ua = class e extends Z {
	constructor() {
		super(...arguments), this.min = this.gte, this.max = this.lte;
	}
	_parse(e) {
		if (this._def.coerce) try {
			e.data = BigInt(e.data);
		} catch {
			return this._getInvalidInput(e);
		}
		if (this._getType(e) !== U.bigint) return this._getInvalidInput(e);
		let t, n = new K();
		for (let r of this._def.checks) r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t), G(t, {
			code: W.too_small,
			type: "bigint",
			minimum: r.value,
			inclusive: r.inclusive,
			message: r.message
		}), n.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t), G(t, {
			code: W.too_big,
			type: "bigint",
			maximum: r.value,
			inclusive: r.inclusive,
			message: r.message
		}), n.dirty()) : r.kind === "multipleOf" ? e.data % r.value !== BigInt(0) && (t = this._getOrReturnCtx(e, t), G(t, {
			code: W.not_multiple_of,
			multipleOf: r.value,
			message: r.message
		}), n.dirty()) : H.assertNever(r);
		return {
			status: n.value,
			value: e.data
		};
	}
	_getInvalidInput(e) {
		let t = this._getOrReturnCtx(e);
		return G(t, {
			code: W.invalid_type,
			expected: U.bigint,
			received: t.parsedType
		}), q;
	}
	gte(e, t) {
		return this.setLimit("min", e, !0, Y.toString(t));
	}
	gt(e, t) {
		return this.setLimit("min", e, !1, Y.toString(t));
	}
	lte(e, t) {
		return this.setLimit("max", e, !0, Y.toString(t));
	}
	lt(e, t) {
		return this.setLimit("max", e, !1, Y.toString(t));
	}
	setLimit(t, n, r, i) {
		return new e({
			...this._def,
			checks: [...this._def.checks, {
				kind: t,
				value: n,
				inclusive: r,
				message: Y.toString(i)
			}]
		});
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	positive(e) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !1,
			message: Y.toString(e)
		});
	}
	negative(e) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !1,
			message: Y.toString(e)
		});
	}
	nonpositive(e) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !0,
			message: Y.toString(e)
		});
	}
	nonnegative(e) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !0,
			message: Y.toString(e)
		});
	}
	multipleOf(e, t) {
		return this._addCheck({
			kind: "multipleOf",
			value: e,
			message: Y.toString(t)
		});
	}
	get minValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
};
ua.create = (e) => new ua({
	checks: [],
	typeName: $.ZodBigInt,
	coerce: e?.coerce ?? !1,
	...X(e)
});
var da = class extends Z {
	_parse(e) {
		if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== U.boolean) {
			let t = this._getOrReturnCtx(e);
			return G(t, {
				code: W.invalid_type,
				expected: U.boolean,
				received: t.parsedType
			}), q;
		}
		return J(e.data);
	}
};
da.create = (e) => new da({
	typeName: $.ZodBoolean,
	coerce: e?.coerce || !1,
	...X(e)
});
var fa = class e extends Z {
	_parse(e) {
		if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== U.date) {
			let t = this._getOrReturnCtx(e);
			return G(t, {
				code: W.invalid_type,
				expected: U.date,
				received: t.parsedType
			}), q;
		}
		if (Number.isNaN(e.data.getTime())) return G(this._getOrReturnCtx(e), { code: W.invalid_date }), q;
		let t = new K(), n;
		for (let r of this._def.checks) r.kind === "min" ? e.data.getTime() < r.value && (n = this._getOrReturnCtx(e, n), G(n, {
			code: W.too_small,
			message: r.message,
			inclusive: !0,
			exact: !1,
			minimum: r.value,
			type: "date"
		}), t.dirty()) : r.kind === "max" ? e.data.getTime() > r.value && (n = this._getOrReturnCtx(e, n), G(n, {
			code: W.too_big,
			message: r.message,
			inclusive: !0,
			exact: !1,
			maximum: r.value,
			type: "date"
		}), t.dirty()) : H.assertNever(r);
		return {
			status: t.value,
			value: new Date(e.data.getTime())
		};
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	min(e, t) {
		return this._addCheck({
			kind: "min",
			value: e.getTime(),
			message: Y.toString(t)
		});
	}
	max(e, t) {
		return this._addCheck({
			kind: "max",
			value: e.getTime(),
			message: Y.toString(t)
		});
	}
	get minDate() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e == null ? null : new Date(e);
	}
	get maxDate() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e == null ? null : new Date(e);
	}
};
fa.create = (e) => new fa({
	checks: [],
	coerce: e?.coerce || !1,
	typeName: $.ZodDate,
	...X(e)
});
var pa = class extends Z {
	_parse(e) {
		if (this._getType(e) !== U.symbol) {
			let t = this._getOrReturnCtx(e);
			return G(t, {
				code: W.invalid_type,
				expected: U.symbol,
				received: t.parsedType
			}), q;
		}
		return J(e.data);
	}
};
pa.create = (e) => new pa({
	typeName: $.ZodSymbol,
	...X(e)
});
var ma = class extends Z {
	_parse(e) {
		if (this._getType(e) !== U.undefined) {
			let t = this._getOrReturnCtx(e);
			return G(t, {
				code: W.invalid_type,
				expected: U.undefined,
				received: t.parsedType
			}), q;
		}
		return J(e.data);
	}
};
ma.create = (e) => new ma({
	typeName: $.ZodUndefined,
	...X(e)
});
var ha = class extends Z {
	_parse(e) {
		if (this._getType(e) !== U.null) {
			let t = this._getOrReturnCtx(e);
			return G(t, {
				code: W.invalid_type,
				expected: U.null,
				received: t.parsedType
			}), q;
		}
		return J(e.data);
	}
};
ha.create = (e) => new ha({
	typeName: $.ZodNull,
	...X(e)
});
var ga = class extends Z {
	constructor() {
		super(...arguments), this._any = !0;
	}
	_parse(e) {
		return J(e.data);
	}
};
ga.create = (e) => new ga({
	typeName: $.ZodAny,
	...X(e)
});
var _a = class extends Z {
	constructor() {
		super(...arguments), this._unknown = !0;
	}
	_parse(e) {
		return J(e.data);
	}
};
_a.create = (e) => new _a({
	typeName: $.ZodUnknown,
	...X(e)
});
var va = class extends Z {
	_parse(e) {
		let t = this._getOrReturnCtx(e);
		return G(t, {
			code: W.invalid_type,
			expected: U.never,
			received: t.parsedType
		}), q;
	}
};
va.create = (e) => new va({
	typeName: $.ZodNever,
	...X(e)
});
var ya = class extends Z {
	_parse(e) {
		if (this._getType(e) !== U.undefined) {
			let t = this._getOrReturnCtx(e);
			return G(t, {
				code: W.invalid_type,
				expected: U.void,
				received: t.parsedType
			}), q;
		}
		return J(e.data);
	}
};
ya.create = (e) => new ya({
	typeName: $.ZodVoid,
	...X(e)
});
var ba = class e extends Z {
	_parse(e) {
		let { ctx: t, status: n } = this._processInputParams(e), r = this._def;
		if (t.parsedType !== U.array) return G(t, {
			code: W.invalid_type,
			expected: U.array,
			received: t.parsedType
		}), q;
		if (r.exactLength !== null) {
			let e = t.data.length > r.exactLength.value, i = t.data.length < r.exactLength.value;
			(e || i) && (G(t, {
				code: e ? W.too_big : W.too_small,
				minimum: i ? r.exactLength.value : void 0,
				maximum: e ? r.exactLength.value : void 0,
				type: "array",
				inclusive: !0,
				exact: !0,
				message: r.exactLength.message
			}), n.dirty());
		}
		if (r.minLength !== null && t.data.length < r.minLength.value && (G(t, {
			code: W.too_small,
			minimum: r.minLength.value,
			type: "array",
			inclusive: !0,
			exact: !1,
			message: r.minLength.message
		}), n.dirty()), r.maxLength !== null && t.data.length > r.maxLength.value && (G(t, {
			code: W.too_big,
			maximum: r.maxLength.value,
			type: "array",
			inclusive: !0,
			exact: !1,
			message: r.maxLength.message
		}), n.dirty()), t.common.async) return Promise.all([...t.data].map((e, n) => r.type._parseAsync(new Fi(t, e, t.path, n)))).then((e) => K.mergeArray(n, e));
		let i = [...t.data].map((e, n) => r.type._parseSync(new Fi(t, e, t.path, n)));
		return K.mergeArray(n, i);
	}
	get element() {
		return this._def.type;
	}
	min(t, n) {
		return new e({
			...this._def,
			minLength: {
				value: t,
				message: Y.toString(n)
			}
		});
	}
	max(t, n) {
		return new e({
			...this._def,
			maxLength: {
				value: t,
				message: Y.toString(n)
			}
		});
	}
	length(t, n) {
		return new e({
			...this._def,
			exactLength: {
				value: t,
				message: Y.toString(n)
			}
		});
	}
	nonempty(e) {
		return this.min(1, e);
	}
};
ba.create = (e, t) => new ba({
	type: e,
	minLength: null,
	maxLength: null,
	exactLength: null,
	typeName: $.ZodArray,
	...X(t)
});
function xa(e) {
	if (e instanceof Q) {
		let t = {};
		for (let n in e.shape) {
			let r = e.shape[n];
			t[n] = za.create(xa(r));
		}
		return new Q({
			...e._def,
			shape: () => t
		});
	}
	return e instanceof ba ? new ba({
		...e._def,
		type: xa(e.element)
	}) : e instanceof za ? za.create(xa(e.unwrap())) : e instanceof Ba ? Ba.create(xa(e.unwrap())) : e instanceof Da ? Da.create(e.items.map((e) => xa(e))) : e;
}
var Q = class e extends Z {
	constructor() {
		super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		let e = this._def.shape(), t = H.objectKeys(e);
		return this._cached = {
			shape: e,
			keys: t
		}, this._cached;
	}
	_parse(e) {
		if (this._getType(e) !== U.object) {
			let t = this._getOrReturnCtx(e);
			return G(t, {
				code: W.invalid_type,
				expected: U.object,
				received: t.parsedType
			}), q;
		}
		let { status: t, ctx: n } = this._processInputParams(e), { shape: r, keys: i } = this._getCached(), a = [];
		if (!(this._def.catchall instanceof va && this._def.unknownKeys === "strip")) for (let e in n.data) i.includes(e) || a.push(e);
		let o = [];
		for (let e of i) {
			let t = r[e], i = n.data[e];
			o.push({
				key: {
					status: "valid",
					value: e
				},
				value: t._parse(new Fi(n, i, n.path, e)),
				alwaysSet: e in n.data
			});
		}
		if (this._def.catchall instanceof va) {
			let e = this._def.unknownKeys;
			if (e === "passthrough") for (let e of a) o.push({
				key: {
					status: "valid",
					value: e
				},
				value: {
					status: "valid",
					value: n.data[e]
				}
			});
			else if (e === "strict") a.length > 0 && (G(n, {
				code: W.unrecognized_keys,
				keys: a
			}), t.dirty());
			else if (e !== "strip") throw Error("Internal ZodObject error: invalid unknownKeys value.");
		} else {
			let e = this._def.catchall;
			for (let t of a) {
				let r = n.data[t];
				o.push({
					key: {
						status: "valid",
						value: t
					},
					value: e._parse(new Fi(n, r, n.path, t)),
					alwaysSet: t in n.data
				});
			}
		}
		return n.common.async ? Promise.resolve().then(async () => {
			let e = [];
			for (let t of o) {
				let n = await t.key, r = await t.value;
				e.push({
					key: n,
					value: r,
					alwaysSet: t.alwaysSet
				});
			}
			return e;
		}).then((e) => K.mergeObjectSync(t, e)) : K.mergeObjectSync(t, o);
	}
	get shape() {
		return this._def.shape();
	}
	strict(t) {
		return Y.errToObj, new e({
			...this._def,
			unknownKeys: "strict",
			...t === void 0 ? {} : { errorMap: (e, n) => {
				let r = this._def.errorMap?.(e, n).message ?? n.defaultError;
				return e.code === "unrecognized_keys" ? { message: Y.errToObj(t).message ?? r } : { message: r };
			} }
		});
	}
	strip() {
		return new e({
			...this._def,
			unknownKeys: "strip"
		});
	}
	passthrough() {
		return new e({
			...this._def,
			unknownKeys: "passthrough"
		});
	}
	extend(t) {
		return new e({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...t
			})
		});
	}
	merge(t) {
		return new e({
			unknownKeys: t._def.unknownKeys,
			catchall: t._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...t._def.shape()
			}),
			typeName: $.ZodObject
		});
	}
	setKey(e, t) {
		return this.augment({ [e]: t });
	}
	catchall(t) {
		return new e({
			...this._def,
			catchall: t
		});
	}
	pick(t) {
		let n = {};
		for (let e of H.objectKeys(t)) t[e] && this.shape[e] && (n[e] = this.shape[e]);
		return new e({
			...this._def,
			shape: () => n
		});
	}
	omit(t) {
		let n = {};
		for (let e of H.objectKeys(this.shape)) t[e] || (n[e] = this.shape[e]);
		return new e({
			...this._def,
			shape: () => n
		});
	}
	deepPartial() {
		return xa(this);
	}
	partial(t) {
		let n = {};
		for (let e of H.objectKeys(this.shape)) {
			let r = this.shape[e];
			n[e] = t && !t[e] ? r : r.optional();
		}
		return new e({
			...this._def,
			shape: () => n
		});
	}
	required(t) {
		let n = {};
		for (let e of H.objectKeys(this.shape)) if (t && !t[e]) n[e] = this.shape[e];
		else {
			let t = this.shape[e];
			for (; t instanceof za;) t = t._def.innerType;
			n[e] = t;
		}
		return new e({
			...this._def,
			shape: () => n
		});
	}
	keyof() {
		return Pa(H.objectKeys(this.shape));
	}
};
Q.create = (e, t) => new Q({
	shape: () => e,
	unknownKeys: "strip",
	catchall: va.create(),
	typeName: $.ZodObject,
	...X(t)
}), Q.strictCreate = (e, t) => new Q({
	shape: () => e,
	unknownKeys: "strict",
	catchall: va.create(),
	typeName: $.ZodObject,
	...X(t)
}), Q.lazycreate = (e, t) => new Q({
	shape: e,
	unknownKeys: "strip",
	catchall: va.create(),
	typeName: $.ZodObject,
	...X(t)
});
var Sa = class extends Z {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = this._def.options;
		function r(e) {
			for (let t of e) if (t.result.status === "valid") return t.result;
			for (let n of e) if (n.result.status === "dirty") return t.common.issues.push(...n.ctx.common.issues), n.result;
			let n = e.map((e) => new Ti(e.ctx.common.issues));
			return G(t, {
				code: W.invalid_union,
				unionErrors: n
			}), q;
		}
		if (t.common.async) return Promise.all(n.map(async (e) => {
			let n = {
				...t,
				common: {
					...t.common,
					issues: []
				},
				parent: null
			};
			return {
				result: await e._parseAsync({
					data: t.data,
					path: t.path,
					parent: n
				}),
				ctx: n
			};
		})).then(r);
		{
			let e, r = [];
			for (let i of n) {
				let n = {
					...t,
					common: {
						...t.common,
						issues: []
					},
					parent: null
				}, a = i._parseSync({
					data: t.data,
					path: t.path,
					parent: n
				});
				if (a.status === "valid") return a;
				a.status === "dirty" && !e && (e = {
					result: a,
					ctx: n
				}), n.common.issues.length && r.push(n.common.issues);
			}
			if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
			let i = r.map((e) => new Ti(e));
			return G(t, {
				code: W.invalid_union,
				unionErrors: i
			}), q;
		}
	}
	get options() {
		return this._def.options;
	}
};
Sa.create = (e, t) => new Sa({
	options: e,
	typeName: $.ZodUnion,
	...X(t)
});
var Ca = (e) => e instanceof Ma ? Ca(e.schema) : e instanceof Ra ? Ca(e.innerType()) : e instanceof Na ? [e.value] : e instanceof Fa ? e.options : e instanceof Ia ? H.objectValues(e.enum) : e instanceof Va ? Ca(e._def.innerType) : e instanceof ma ? [void 0] : e instanceof ha ? [null] : e instanceof za ? [void 0, ...Ca(e.unwrap())] : e instanceof Ba ? [null, ...Ca(e.unwrap())] : e instanceof Wa || e instanceof Ka ? Ca(e.unwrap()) : e instanceof Ha ? Ca(e._def.innerType) : [], wa = class e extends Z {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		if (t.parsedType !== U.object) return G(t, {
			code: W.invalid_type,
			expected: U.object,
			received: t.parsedType
		}), q;
		let n = this.discriminator, r = t.data[n], i = this.optionsMap.get(r);
		return i ? t.common.async ? i._parseAsync({
			data: t.data,
			path: t.path,
			parent: t
		}) : i._parseSync({
			data: t.data,
			path: t.path,
			parent: t
		}) : (G(t, {
			code: W.invalid_union_discriminator,
			options: Array.from(this.optionsMap.keys()),
			path: [n]
		}), q);
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	static create(t, n, r) {
		let i = /* @__PURE__ */ new Map();
		for (let e of n) {
			let n = Ca(e.shape[t]);
			if (!n.length) throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
			for (let r of n) {
				if (i.has(r)) throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);
				i.set(r, e);
			}
		}
		return new e({
			typeName: $.ZodDiscriminatedUnion,
			discriminator: t,
			options: n,
			optionsMap: i,
			...X(r)
		});
	}
};
function Ta(e, t) {
	let n = wi(e), r = wi(t);
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (n === U.object && r === U.object) {
		let n = H.objectKeys(t), r = H.objectKeys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = Ta(e[n], t[n]);
			if (!r.valid) return { valid: !1 };
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (n === U.array && r === U.array) {
		if (e.length !== t.length) return { valid: !1 };
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = Ta(i, a);
			if (!o.valid) return { valid: !1 };
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return n === U.date && r === U.date && +e == +t ? {
		valid: !0,
		data: e
	} : { valid: !1 };
}
var Ea = class extends Z {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e), r = (e, r) => {
			if (ji(e) || ji(r)) return q;
			let i = Ta(e.value, r.value);
			return i.valid ? ((Mi(e) || Mi(r)) && t.dirty(), {
				status: t.value,
				value: i.data
			}) : (G(n, { code: W.invalid_intersection_types }), q);
		};
		return n.common.async ? Promise.all([this._def.left._parseAsync({
			data: n.data,
			path: n.path,
			parent: n
		}), this._def.right._parseAsync({
			data: n.data,
			path: n.path,
			parent: n
		})]).then(([e, t]) => r(e, t)) : r(this._def.left._parseSync({
			data: n.data,
			path: n.path,
			parent: n
		}), this._def.right._parseSync({
			data: n.data,
			path: n.path,
			parent: n
		}));
	}
};
Ea.create = (e, t, n) => new Ea({
	left: e,
	right: t,
	typeName: $.ZodIntersection,
	...X(n)
});
var Da = class e extends Z {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== U.array) return G(n, {
			code: W.invalid_type,
			expected: U.array,
			received: n.parsedType
		}), q;
		if (n.data.length < this._def.items.length) return G(n, {
			code: W.too_small,
			minimum: this._def.items.length,
			inclusive: !0,
			exact: !1,
			type: "array"
		}), q;
		!this._def.rest && n.data.length > this._def.items.length && (G(n, {
			code: W.too_big,
			maximum: this._def.items.length,
			inclusive: !0,
			exact: !1,
			type: "array"
		}), t.dirty());
		let r = [...n.data].map((e, t) => {
			let r = this._def.items[t] || this._def.rest;
			return r ? r._parse(new Fi(n, e, n.path, t)) : null;
		}).filter((e) => !!e);
		return n.common.async ? Promise.all(r).then((e) => K.mergeArray(t, e)) : K.mergeArray(t, r);
	}
	get items() {
		return this._def.items;
	}
	rest(t) {
		return new e({
			...this._def,
			rest: t
		});
	}
};
Da.create = (e, t) => {
	if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new Da({
		items: e,
		typeName: $.ZodTuple,
		rest: null,
		...X(t)
	});
};
var Oa = class e extends Z {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== U.object) return G(n, {
			code: W.invalid_type,
			expected: U.object,
			received: n.parsedType
		}), q;
		let r = [], i = this._def.keyType, a = this._def.valueType;
		for (let e in n.data) r.push({
			key: i._parse(new Fi(n, e, n.path, e)),
			value: a._parse(new Fi(n, n.data[e], n.path, e)),
			alwaysSet: e in n.data
		});
		return n.common.async ? K.mergeObjectAsync(t, r) : K.mergeObjectSync(t, r);
	}
	get element() {
		return this._def.valueType;
	}
	static create(t, n, r) {
		return n instanceof Z ? new e({
			keyType: t,
			valueType: n,
			typeName: $.ZodRecord,
			...X(r)
		}) : new e({
			keyType: sa.create(),
			valueType: t,
			typeName: $.ZodRecord,
			...X(n)
		});
	}
}, ka = class extends Z {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== U.map) return G(n, {
			code: W.invalid_type,
			expected: U.map,
			received: n.parsedType
		}), q;
		let r = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([e, t], a) => ({
			key: r._parse(new Fi(n, e, n.path, [a, "key"])),
			value: i._parse(new Fi(n, t, n.path, [a, "value"]))
		}));
		if (n.common.async) {
			let e = /* @__PURE__ */ new Map();
			return Promise.resolve().then(async () => {
				for (let n of a) {
					let r = await n.key, i = await n.value;
					if (r.status === "aborted" || i.status === "aborted") return q;
					(r.status === "dirty" || i.status === "dirty") && t.dirty(), e.set(r.value, i.value);
				}
				return {
					status: t.value,
					value: e
				};
			});
		}
		{
			let e = /* @__PURE__ */ new Map();
			for (let n of a) {
				let r = n.key, i = n.value;
				if (r.status === "aborted" || i.status === "aborted") return q;
				(r.status === "dirty" || i.status === "dirty") && t.dirty(), e.set(r.value, i.value);
			}
			return {
				status: t.value,
				value: e
			};
		}
	}
};
ka.create = (e, t, n) => new ka({
	valueType: t,
	keyType: e,
	typeName: $.ZodMap,
	...X(n)
});
var Aa = class e extends Z {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== U.set) return G(n, {
			code: W.invalid_type,
			expected: U.set,
			received: n.parsedType
		}), q;
		let r = this._def;
		r.minSize !== null && n.data.size < r.minSize.value && (G(n, {
			code: W.too_small,
			minimum: r.minSize.value,
			type: "set",
			inclusive: !0,
			exact: !1,
			message: r.minSize.message
		}), t.dirty()), r.maxSize !== null && n.data.size > r.maxSize.value && (G(n, {
			code: W.too_big,
			maximum: r.maxSize.value,
			type: "set",
			inclusive: !0,
			exact: !1,
			message: r.maxSize.message
		}), t.dirty());
		let i = this._def.valueType;
		function a(e) {
			let n = /* @__PURE__ */ new Set();
			for (let r of e) {
				if (r.status === "aborted") return q;
				r.status === "dirty" && t.dirty(), n.add(r.value);
			}
			return {
				status: t.value,
				value: n
			};
		}
		let o = [...n.data.values()].map((e, t) => i._parse(new Fi(n, e, n.path, t)));
		return n.common.async ? Promise.all(o).then((e) => a(e)) : a(o);
	}
	min(t, n) {
		return new e({
			...this._def,
			minSize: {
				value: t,
				message: Y.toString(n)
			}
		});
	}
	max(t, n) {
		return new e({
			...this._def,
			maxSize: {
				value: t,
				message: Y.toString(n)
			}
		});
	}
	size(e, t) {
		return this.min(e, t).max(e, t);
	}
	nonempty(e) {
		return this.min(1, e);
	}
};
Aa.create = (e, t) => new Aa({
	valueType: e,
	minSize: null,
	maxSize: null,
	typeName: $.ZodSet,
	...X(t)
});
var ja = class e extends Z {
	constructor() {
		super(...arguments), this.validate = this.implement;
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		if (t.parsedType !== U.function) return G(t, {
			code: W.invalid_type,
			expected: U.function,
			received: t.parsedType
		}), q;
		function n(e, n) {
			return ki({
				data: e,
				path: t.path,
				errorMaps: [
					t.common.contextualErrorMap,
					t.schemaErrorMap,
					Oi(),
					Ei
				].filter((e) => !!e),
				issueData: {
					code: W.invalid_arguments,
					argumentsError: n
				}
			});
		}
		function r(e, n) {
			return ki({
				data: e,
				path: t.path,
				errorMaps: [
					t.common.contextualErrorMap,
					t.schemaErrorMap,
					Oi(),
					Ei
				].filter((e) => !!e),
				issueData: {
					code: W.invalid_return_type,
					returnTypeError: n
				}
			});
		}
		let i = { errorMap: t.common.contextualErrorMap }, a = t.data;
		if (this._def.returns instanceof La) {
			let e = this;
			return J(async function(...t) {
				let o = new Ti([]), s = await e._def.args.parseAsync(t, i).catch((e) => {
					throw o.addIssue(n(t, e)), o;
				}), c = await Reflect.apply(a, this, s);
				return await e._def.returns._def.type.parseAsync(c, i).catch((e) => {
					throw o.addIssue(r(c, e)), o;
				});
			});
		}
		{
			let e = this;
			return J(function(...t) {
				let o = e._def.args.safeParse(t, i);
				if (!o.success) throw new Ti([n(t, o.error)]);
				let s = Reflect.apply(a, this, o.data), c = e._def.returns.safeParse(s, i);
				if (!c.success) throw new Ti([r(s, c.error)]);
				return c.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...t) {
		return new e({
			...this._def,
			args: Da.create(t).rest(_a.create())
		});
	}
	returns(t) {
		return new e({
			...this._def,
			returns: t
		});
	}
	implement(e) {
		return this.parse(e);
	}
	strictImplement(e) {
		return this.parse(e);
	}
	static create(t, n, r) {
		return new e({
			args: t || Da.create([]).rest(_a.create()),
			returns: n || _a.create(),
			typeName: $.ZodFunction,
			...X(r)
		});
	}
}, Ma = class extends Z {
	get schema() {
		return this._def.getter();
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		return this._def.getter()._parse({
			data: t.data,
			path: t.path,
			parent: t
		});
	}
};
Ma.create = (e, t) => new Ma({
	getter: e,
	typeName: $.ZodLazy,
	...X(t)
});
var Na = class extends Z {
	_parse(e) {
		if (e.data !== this._def.value) {
			let t = this._getOrReturnCtx(e);
			return G(t, {
				received: t.data,
				code: W.invalid_literal,
				expected: this._def.value
			}), q;
		}
		return {
			status: "valid",
			value: e.data
		};
	}
	get value() {
		return this._def.value;
	}
};
Na.create = (e, t) => new Na({
	value: e,
	typeName: $.ZodLiteral,
	...X(t)
});
function Pa(e, t) {
	return new Fa({
		values: e,
		typeName: $.ZodEnum,
		...X(t)
	});
}
var Fa = class e extends Z {
	_parse(e) {
		if (typeof e.data != "string") {
			let t = this._getOrReturnCtx(e), n = this._def.values;
			return G(t, {
				expected: H.joinValues(n),
				received: t.parsedType,
				code: W.invalid_type
			}), q;
		}
		if (this._cache ||= new Set(this._def.values), !this._cache.has(e.data)) {
			let t = this._getOrReturnCtx(e), n = this._def.values;
			return G(t, {
				received: t.data,
				code: W.invalid_enum_value,
				options: n
			}), q;
		}
		return J(e.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	get Values() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	get Enum() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	extract(t, n = this._def) {
		return e.create(t, {
			...this._def,
			...n
		});
	}
	exclude(t, n = this._def) {
		return e.create(this.options.filter((e) => !t.includes(e)), {
			...this._def,
			...n
		});
	}
};
Fa.create = Pa;
var Ia = class extends Z {
	_parse(e) {
		let t = H.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
		if (n.parsedType !== U.string && n.parsedType !== U.number) {
			let e = H.objectValues(t);
			return G(n, {
				expected: H.joinValues(e),
				received: n.parsedType,
				code: W.invalid_type
			}), q;
		}
		if (this._cache ||= new Set(H.getValidEnumValues(this._def.values)), !this._cache.has(e.data)) {
			let e = H.objectValues(t);
			return G(n, {
				received: n.data,
				code: W.invalid_enum_value,
				options: e
			}), q;
		}
		return J(e.data);
	}
	get enum() {
		return this._def.values;
	}
};
Ia.create = (e, t) => new Ia({
	values: e,
	typeName: $.ZodNativeEnum,
	...X(t)
});
var La = class extends Z {
	unwrap() {
		return this._def.type;
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		return t.parsedType !== U.promise && t.common.async === !1 ? (G(t, {
			code: W.invalid_type,
			expected: U.promise,
			received: t.parsedType
		}), q) : J((t.parsedType === U.promise ? t.data : Promise.resolve(t.data)).then((e) => this._def.type.parseAsync(e, {
			path: t.path,
			errorMap: t.common.contextualErrorMap
		})));
	}
};
La.create = (e, t) => new La({
	type: e,
	typeName: $.ZodPromise,
	...X(t)
});
var Ra = class extends Z {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === $.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
	}
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e), r = this._def.effect || null, i = {
			addIssue: (e) => {
				G(n, e), e.fatal ? t.abort() : t.dirty();
			},
			get path() {
				return n.path;
			}
		};
		if (i.addIssue = i.addIssue.bind(i), r.type === "preprocess") {
			let e = r.transform(n.data, i);
			if (n.common.async) return Promise.resolve(e).then(async (e) => {
				if (t.value === "aborted") return q;
				let r = await this._def.schema._parseAsync({
					data: e,
					path: n.path,
					parent: n
				});
				return r.status === "aborted" ? q : r.status === "dirty" || t.value === "dirty" ? Ai(r.value) : r;
			});
			{
				if (t.value === "aborted") return q;
				let r = this._def.schema._parseSync({
					data: e,
					path: n.path,
					parent: n
				});
				return r.status === "aborted" ? q : r.status === "dirty" || t.value === "dirty" ? Ai(r.value) : r;
			}
		}
		if (r.type === "refinement") {
			let e = (e) => {
				let t = r.refinement(e, i);
				if (n.common.async) return Promise.resolve(t);
				if (t instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
				return e;
			};
			if (n.common.async === !1) {
				let r = this._def.schema._parseSync({
					data: n.data,
					path: n.path,
					parent: n
				});
				return r.status === "aborted" ? q : (r.status === "dirty" && t.dirty(), e(r.value), {
					status: t.value,
					value: r.value
				});
			}
			return this._def.schema._parseAsync({
				data: n.data,
				path: n.path,
				parent: n
			}).then((n) => n.status === "aborted" ? q : (n.status === "dirty" && t.dirty(), e(n.value).then(() => ({
				status: t.value,
				value: n.value
			}))));
		}
		if (r.type === "transform") {
			if (n.common.async === !1) {
				let e = this._def.schema._parseSync({
					data: n.data,
					path: n.path,
					parent: n
				});
				if (!Ni(e)) return q;
				let a = r.transform(e.value, i);
				if (a instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
				return {
					status: t.value,
					value: a
				};
			}
			return this._def.schema._parseAsync({
				data: n.data,
				path: n.path,
				parent: n
			}).then((e) => Ni(e) ? Promise.resolve(r.transform(e.value, i)).then((e) => ({
				status: t.value,
				value: e
			})) : q);
		}
		H.assertNever(r);
	}
};
Ra.create = (e, t, n) => new Ra({
	schema: e,
	typeName: $.ZodEffects,
	effect: t,
	...X(n)
}), Ra.createWithPreprocess = (e, t, n) => new Ra({
	schema: t,
	effect: {
		type: "preprocess",
		transform: e
	},
	typeName: $.ZodEffects,
	...X(n)
});
var za = class extends Z {
	_parse(e) {
		return this._getType(e) === U.undefined ? J(void 0) : this._def.innerType._parse(e);
	}
	unwrap() {
		return this._def.innerType;
	}
};
za.create = (e, t) => new za({
	innerType: e,
	typeName: $.ZodOptional,
	...X(t)
});
var Ba = class extends Z {
	_parse(e) {
		return this._getType(e) === U.null ? J(null) : this._def.innerType._parse(e);
	}
	unwrap() {
		return this._def.innerType;
	}
};
Ba.create = (e, t) => new Ba({
	innerType: e,
	typeName: $.ZodNullable,
	...X(t)
});
var Va = class extends Z {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = t.data;
		return t.parsedType === U.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
			data: n,
			path: t.path,
			parent: t
		});
	}
	removeDefault() {
		return this._def.innerType;
	}
};
Va.create = (e, t) => new Va({
	innerType: e,
	typeName: $.ZodDefault,
	defaultValue: typeof t.default == "function" ? t.default : () => t.default,
	...X(t)
});
var Ha = class extends Z {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = {
			...t,
			common: {
				...t.common,
				issues: []
			}
		}, r = this._def.innerType._parse({
			data: n.data,
			path: n.path,
			parent: { ...n }
		});
		return Pi(r) ? r.then((e) => ({
			status: "valid",
			value: e.status === "valid" ? e.value : this._def.catchValue({
				get error() {
					return new Ti(n.common.issues);
				},
				input: n.data
			})
		})) : {
			status: "valid",
			value: r.status === "valid" ? r.value : this._def.catchValue({
				get error() {
					return new Ti(n.common.issues);
				},
				input: n.data
			})
		};
	}
	removeCatch() {
		return this._def.innerType;
	}
};
Ha.create = (e, t) => new Ha({
	innerType: e,
	typeName: $.ZodCatch,
	catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
	...X(t)
});
var Ua = class extends Z {
	_parse(e) {
		if (this._getType(e) !== U.nan) {
			let t = this._getOrReturnCtx(e);
			return G(t, {
				code: W.invalid_type,
				expected: U.nan,
				received: t.parsedType
			}), q;
		}
		return {
			status: "valid",
			value: e.data
		};
	}
};
Ua.create = (e) => new Ua({
	typeName: $.ZodNaN,
	...X(e)
});
var Wa = class extends Z {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = t.data;
		return this._def.type._parse({
			data: n,
			path: t.path,
			parent: t
		});
	}
	unwrap() {
		return this._def.type;
	}
}, Ga = class e extends Z {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.common.async) return (async () => {
			let e = await this._def.in._parseAsync({
				data: n.data,
				path: n.path,
				parent: n
			});
			return e.status === "aborted" ? q : e.status === "dirty" ? (t.dirty(), Ai(e.value)) : this._def.out._parseAsync({
				data: e.value,
				path: n.path,
				parent: n
			});
		})();
		{
			let e = this._def.in._parseSync({
				data: n.data,
				path: n.path,
				parent: n
			});
			return e.status === "aborted" ? q : e.status === "dirty" ? (t.dirty(), {
				status: "dirty",
				value: e.value
			}) : this._def.out._parseSync({
				data: e.value,
				path: n.path,
				parent: n
			});
		}
	}
	static create(t, n) {
		return new e({
			in: t,
			out: n,
			typeName: $.ZodPipeline
		});
	}
}, Ka = class extends Z {
	_parse(e) {
		let t = this._def.innerType._parse(e), n = (e) => (Ni(e) && (e.value = Object.freeze(e.value)), e);
		return Pi(t) ? t.then((e) => n(e)) : n(t);
	}
	unwrap() {
		return this._def.innerType;
	}
};
Ka.create = (e, t) => new Ka({
	innerType: e,
	typeName: $.ZodReadonly,
	...X(t)
}), Q.lazycreate;
var $;
(function(e) {
	e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})($ ||= {});
var qa = sa.create, Ja = la.create;
Ua.create, ua.create, da.create, fa.create, pa.create, ma.create, ha.create, ga.create, _a.create, va.create, ya.create, ba.create;
var Ya = Q.create;
Q.strictCreate, Sa.create, wa.create, Ea.create, Da.create, Oa.create, ka.create, Aa.create, ja.create, Ma.create, Na.create, Fa.create, Ia.create, La.create, Ra.create, za.create, Ba.create, Ra.createWithPreprocess, Ga.create;
// upstream/registry/bases/base/blocks/dashboard-01/components/data-table.tsx
var Xa = Se({
	columnFilteringFeature: Me,
	columnVisibilityFeature: Ee,
	rowPaginationFeature: Ae,
	rowSelectionFeature: Oe,
	rowSortingFeature: xe,
	filteredRowModel: Te(),
	paginatedRowModel: ke(),
	sortedRowModel: De()
}), Za = Ce();
Ya({
	id: Ja(),
	header: qa(),
	type: qa(),
	status: qa(),
	target: qa(),
	limit: qa(),
	reviewer: qa()
});
function Qa({ id: e }) {
	let { attributes: t, listeners: n } = xi({ id: e });
	return /* @__PURE__ */ (0, F.jsxs)(T, {
		...t,
		...n,
		variant: "ghost",
		size: "icon",
		className: "size-7 text-muted-foreground hover:bg-transparent",
		children: [/* @__PURE__ */ (0, F.jsx)(C, {
			lucide: "GripVerticalIcon",
			tabler: "IconGripVertical",
			hugeicons: "DragDropVerticalIcon",
			phosphor: "DotsSixVerticalIcon",
			remixicon: "RiDraggable",
			className: "size-3 text-muted-foreground"
		}), /* @__PURE__ */ (0, F.jsx)("span", {
			className: "sr-only",
			children: "Drag to reorder"
		})]
	});
}
var $a = Za.columns([
	Za.display({
		id: "drag",
		header: () => null,
		cell: ({ row: e }) => /* @__PURE__ */ (0, F.jsx)(Qa, { id: e.original.id })
	}),
	Za.display({
		id: "select",
		header: ({ table: e }) => /* @__PURE__ */ (0, F.jsx)("div", {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, F.jsx)(Fe, {
				checked: e.getIsAllPageRowsSelected(),
				indeterminate: e.getIsSomePageRowsSelected() && !e.getIsAllPageRowsSelected(),
				onCheckedChange: (t) => e.toggleAllPageRowsSelected(!!t),
				"aria-label": "Select all"
			})
		}),
		cell: ({ row: e }) => /* @__PURE__ */ (0, F.jsx)("div", {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, F.jsx)(Fe, {
				checked: e.getIsSelected(),
				onCheckedChange: (t) => e.toggleSelected(!!t),
				"aria-label": "Select row"
			})
		}),
		enableSorting: !1,
		enableHiding: !1
	}),
	Za.accessor("header", {
		header: "Header",
		cell: ({ row: e }) => /* @__PURE__ */ (0, F.jsx)(io, { item: e.original }),
		enableHiding: !1
	}),
	Za.accessor("type", {
		header: "Section Type",
		cell: ({ row: e }) => /* @__PURE__ */ (0, F.jsx)("div", {
			className: "w-32",
			children: /* @__PURE__ */ (0, F.jsx)(Pe, {
				variant: "outline",
				className: "px-1.5 text-muted-foreground",
				children: e.original.type
			})
		})
	}),
	Za.accessor("status", {
		header: "Status",
		cell: ({ row: e }) => /* @__PURE__ */ (0, F.jsxs)(Pe, {
			variant: "outline",
			className: "px-1.5 text-muted-foreground",
			children: [e.original.status === "Done" ? /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "CircleCheckIcon",
				tabler: "IconCircleCheckFilled",
				hugeicons: "CheckmarkCircle01Icon",
				phosphor: "CheckCircleIcon",
				remixicon: "RiCheckboxCircleFill",
				className: "fill-green-500 dark:fill-green-400"
			}) : /* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "LoaderIcon",
				tabler: "IconLoader",
				hugeicons: "Loading03Icon",
				phosphor: "SpinnerIcon",
				remixicon: "RiLoader4Line"
			}), e.original.status]
		})
	}),
	Za.accessor("target", {
		header: () => /* @__PURE__ */ (0, F.jsx)("div", {
			className: "w-full text-right",
			children: "Target"
		}),
		cell: ({ row: e }) => /* @__PURE__ */ (0, F.jsxs)("form", {
			onSubmit: (t) => {
				t.preventDefault(), Ne.promise(new Promise((e) => setTimeout(e, 1e3)), {
					loading: `Saving ${e.original.header}`,
					success: "Done",
					error: "Error"
				});
			},
			children: [/* @__PURE__ */ (0, F.jsx)(Ge, {
				htmlFor: `${e.original.id}-target`,
				className: "sr-only",
				children: "Target"
			}), /* @__PURE__ */ (0, F.jsx)(We, {
				className: "h-8 w-16 border-transparent bg-transparent text-right shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background dark:bg-transparent dark:hover:bg-input/30 dark:focus-visible:bg-input/30",
				defaultValue: e.original.target,
				id: `${e.original.id}-target`
			})]
		})
	}),
	Za.accessor("limit", {
		header: () => /* @__PURE__ */ (0, F.jsx)("div", {
			className: "w-full text-right",
			children: "Limit"
		}),
		cell: ({ row: e }) => /* @__PURE__ */ (0, F.jsxs)("form", {
			onSubmit: (t) => {
				t.preventDefault(), Ne.promise(new Promise((e) => setTimeout(e, 1e3)), {
					loading: `Saving ${e.original.header}`,
					success: "Done",
					error: "Error"
				});
			},
			children: [/* @__PURE__ */ (0, F.jsx)(Ge, {
				htmlFor: `${e.original.id}-limit`,
				className: "sr-only",
				children: "Limit"
			}), /* @__PURE__ */ (0, F.jsx)(We, {
				className: "h-8 w-16 border-transparent bg-transparent text-right shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background dark:bg-transparent dark:hover:bg-input/30 dark:focus-visible:bg-input/30",
				defaultValue: e.original.limit,
				id: `${e.original.id}-limit`
			})]
		})
	}),
	Za.accessor("reviewer", {
		header: "Reviewer",
		cell: ({ row: e }) => e.original.reviewer === "Assign reviewer" ? /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [/* @__PURE__ */ (0, F.jsx)(Ge, {
			htmlFor: `${e.original.id}-reviewer`,
			className: "sr-only",
			children: "Reviewer"
		}), /* @__PURE__ */ (0, F.jsxs)(N, {
			items: [{
				label: "Eddie Lake",
				value: "Eddie Lake"
			}, {
				label: "Jamik Tashpulatov",
				value: "Jamik Tashpulatov"
			}],
			children: [/* @__PURE__ */ (0, F.jsx)(ge, {
				className: "w-38 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate",
				size: "sm",
				id: `${e.original.id}-reviewer`,
				children: /* @__PURE__ */ (0, F.jsx)(M, { placeholder: "Assign reviewer" })
			}), /* @__PURE__ */ (0, F.jsx)(j, {
				align: "end",
				children: /* @__PURE__ */ (0, F.jsxs)(_e, { children: [/* @__PURE__ */ (0, F.jsx)(A, {
					value: "Eddie Lake",
					children: "Eddie Lake"
				}), /* @__PURE__ */ (0, F.jsx)(A, {
					value: "Jamik Tashpulatov",
					children: "Jamik Tashpulatov"
				})] })
			})]
		})] }) : e.original.reviewer
	}),
	Za.display({
		id: "actions",
		cell: () => /* @__PURE__ */ (0, F.jsxs)(c, { children: [/* @__PURE__ */ (0, F.jsxs)(r, {
			render: /* @__PURE__ */ (0, F.jsx)(T, {
				variant: "ghost",
				className: "flex size-8 text-muted-foreground data-open:bg-muted",
				size: "icon"
			}),
			children: [/* @__PURE__ */ (0, F.jsx)(C, {
				lucide: "EllipsisVerticalIcon",
				tabler: "IconDotsVertical",
				hugeicons: "MoreVerticalCircle01Icon",
				phosphor: "DotsThreeVerticalIcon",
				remixicon: "RiMore2Line"
			}), /* @__PURE__ */ (0, F.jsx)("span", {
				className: "sr-only",
				children: "Open menu"
			})]
		}), /* @__PURE__ */ (0, F.jsxs)(s, {
			align: "end",
			className: "w-32",
			children: [
				/* @__PURE__ */ (0, F.jsx)(n, { children: "Edit" }),
				/* @__PURE__ */ (0, F.jsx)(n, { children: "Make a copy" }),
				/* @__PURE__ */ (0, F.jsx)(n, { children: "Favorite" }),
				/* @__PURE__ */ (0, F.jsx)(l, {}),
				/* @__PURE__ */ (0, F.jsx)(n, {
					variant: "destructive",
					children: "Delete"
				})
			]
		})] })
	})
]);
function eo({ row: e }) {
	let { transform: t, transition: n, setNodeRef: r, isDragging: i } = xi({ id: e.original.id });
	return /* @__PURE__ */ (0, F.jsx)(qe, {
		"data-state": e.getIsSelected() && "selected",
		"data-dragging": i,
		ref: r,
		className: "relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80",
		style: {
			transform: Lt.Transform.toString(t),
			transition: n
		},
		children: e.getVisibleCells().map((e) => /* @__PURE__ */ (0, F.jsx)(Je, { children: /* @__PURE__ */ (0, F.jsx)(we, { cell: e }) }, e.id))
	});
}
function to({ data: e }) {
	let [t, n] = P.useState(() => e), [i, o] = P.useState({}), [l, u] = P.useState({}), [d, f] = P.useState([]), [p, m] = P.useState([]), [h, g] = P.useState({
		pageIndex: 0,
		pageSize: 10
	}), _ = P.useId(), v = Qt(Zt(Qn, {}), Zt(er, {}), Zt(Wn, {})), y = P.useMemo(() => t?.map(({ id: e }) => e) || [], [t]), b = je({
		features: Xa,
		data: t,
		columns: $a,
		state: {
			sorting: p,
			columnVisibility: l,
			rowSelection: i,
			columnFilters: d,
			pagination: h
		},
		getRowId: (e) => e.id.toString(),
		enableRowSelection: !0,
		onRowSelectionChange: o,
		onSortingChange: m,
		onColumnFiltersChange: f,
		onColumnVisibilityChange: u,
		onPaginationChange: g
	});
	function x(e) {
		let { active: t, over: r } = e;
		t && r && t.id !== r.id && n((e) => ni(e, y.indexOf(t.id), y.indexOf(r.id)));
	}
	return /* @__PURE__ */ (0, F.jsxs)(nt, {
		defaultValue: "outline",
		className: "w-full flex-col justify-start gap-6",
		children: [
			/* @__PURE__ */ (0, F.jsxs)("div", {
				className: "flex items-center justify-between px-4 lg:px-6",
				children: [
					/* @__PURE__ */ (0, F.jsx)(Ge, {
						htmlFor: "view-selector",
						className: "sr-only",
						children: "View"
					}),
					/* @__PURE__ */ (0, F.jsxs)(N, {
						defaultValue: "outline",
						items: [
							{
								label: "Outline",
								value: "outline"
							},
							{
								label: "Past Performance",
								value: "past-performance"
							},
							{
								label: "Key Personnel",
								value: "key-personnel"
							},
							{
								label: "Focus Documents",
								value: "focus-documents"
							}
						],
						children: [/* @__PURE__ */ (0, F.jsx)(ge, {
							className: "flex w-fit @4xl/main:hidden",
							size: "sm",
							id: "view-selector",
							children: /* @__PURE__ */ (0, F.jsx)(M, { placeholder: "Select a view" })
						}), /* @__PURE__ */ (0, F.jsx)(j, { children: /* @__PURE__ */ (0, F.jsxs)(_e, { children: [
							/* @__PURE__ */ (0, F.jsx)(A, {
								value: "outline",
								children: "Outline"
							}),
							/* @__PURE__ */ (0, F.jsx)(A, {
								value: "past-performance",
								children: "Past Performance"
							}),
							/* @__PURE__ */ (0, F.jsx)(A, {
								value: "key-personnel",
								children: "Key Personnel"
							}),
							/* @__PURE__ */ (0, F.jsx)(A, {
								value: "focus-documents",
								children: "Focus Documents"
							})
						] }) })]
					}),
					/* @__PURE__ */ (0, F.jsxs)(tt, {
						className: "hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:px-1 @4xl/main:flex",
						children: [
							/* @__PURE__ */ (0, F.jsx)($e, {
								value: "outline",
								children: "Outline"
							}),
							/* @__PURE__ */ (0, F.jsxs)($e, {
								value: "past-performance",
								children: ["Past Performance ", /* @__PURE__ */ (0, F.jsx)(Pe, {
									variant: "secondary",
									children: "3"
								})]
							}),
							/* @__PURE__ */ (0, F.jsxs)($e, {
								value: "key-personnel",
								children: ["Key Personnel ", /* @__PURE__ */ (0, F.jsx)(Pe, {
									variant: "secondary",
									children: "2"
								})]
							}),
							/* @__PURE__ */ (0, F.jsx)($e, {
								value: "focus-documents",
								children: "Focus Documents"
							})
						]
					}),
					/* @__PURE__ */ (0, F.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, F.jsxs)(c, { children: [/* @__PURE__ */ (0, F.jsxs)(r, {
							render: /* @__PURE__ */ (0, F.jsx)(T, {
								variant: "outline",
								size: "sm"
							}),
							children: [
								/* @__PURE__ */ (0, F.jsx)(C, {
									lucide: "Columns3Icon",
									tabler: "IconLayoutColumns",
									hugeicons: "LeftToRightListBulletIcon",
									phosphor: "ColumnsIcon",
									remixicon: "RiLayoutColumnLine",
									"data-icon": "inline-start"
								}),
								"Columns",
								/* @__PURE__ */ (0, F.jsx)(C, {
									lucide: "ChevronDownIcon",
									tabler: "IconChevronDown",
									hugeicons: "ArrowDown01Icon",
									phosphor: "CaretDownIcon",
									remixicon: "RiArrowDownSLine",
									"data-icon": "inline-end"
								})
							]
						}), /* @__PURE__ */ (0, F.jsx)(s, {
							align: "end",
							className: "w-32",
							children: b.getAllColumns().filter((e) => e.accessorFn !== void 0 && e.getCanHide()).map((e) => /* @__PURE__ */ (0, F.jsx)(a, {
								className: "capitalize",
								checked: e.getIsVisible(),
								onCheckedChange: (t) => e.toggleVisibility(!!t),
								children: e.id
							}, e.id))
						})] }), /* @__PURE__ */ (0, F.jsxs)(T, {
							variant: "outline",
							size: "sm",
							children: [/* @__PURE__ */ (0, F.jsx)(C, {
								lucide: "PlusIcon",
								tabler: "IconPlus",
								hugeicons: "Add01Icon",
								phosphor: "PlusIcon",
								remixicon: "RiAddLine"
							}), /* @__PURE__ */ (0, F.jsx)("span", {
								className: "hidden lg:inline",
								children: "Add Section"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, F.jsxs)(et, {
				value: "outline",
				className: "relative flex flex-col gap-4 overflow-auto px-4 lg:px-6",
				children: [/* @__PURE__ */ (0, F.jsx)("div", {
					className: "overflow-hidden rounded-lg border",
					children: /* @__PURE__ */ (0, F.jsx)(Kr, {
						collisionDetection: an,
						modifiers: [ti],
						onDragEnd: x,
						sensors: v,
						id: _,
						children: /* @__PURE__ */ (0, F.jsxs)(Qe, { children: [/* @__PURE__ */ (0, F.jsx)(Ze, {
							className: "sticky top-0 z-10 bg-muted",
							children: b.getHeaderGroups().map((e) => /* @__PURE__ */ (0, F.jsx)(qe, { children: e.headers.map((e) => /* @__PURE__ */ (0, F.jsx)(Xe, {
								colSpan: e.colSpan,
								children: e.isPlaceholder ? null : /* @__PURE__ */ (0, F.jsx)(we, { header: e })
							}, e.id)) }, e.id))
						}), /* @__PURE__ */ (0, F.jsx)(Ye, {
							className: "**:data-[slot=table-cell]:first:w-8",
							children: b.getRowModel().rows?.length ? /* @__PURE__ */ (0, F.jsx)(pi, {
								items: y,
								strategy: li,
								children: b.getRowModel().rows.map((e) => /* @__PURE__ */ (0, F.jsx)(eo, { row: e }, e.id))
							}) : /* @__PURE__ */ (0, F.jsx)(qe, { children: /* @__PURE__ */ (0, F.jsx)(Je, {
								colSpan: $a.length,
								className: "h-24 text-center",
								children: "No results."
							}) })
						})] })
					})
				}), /* @__PURE__ */ (0, F.jsxs)("div", {
					className: "flex items-center justify-between px-4",
					children: [/* @__PURE__ */ (0, F.jsxs)("div", {
						className: "hidden flex-1 text-sm text-muted-foreground lg:flex",
						children: [
							b.getFilteredSelectedRowModel().rows.length,
							" of",
							" ",
							b.getFilteredRowModel().rows.length,
							" row(s) selected."
						]
					}), /* @__PURE__ */ (0, F.jsxs)("div", {
						className: "flex w-full items-center gap-8 lg:w-fit",
						children: [
							/* @__PURE__ */ (0, F.jsxs)("div", {
								className: "hidden items-center gap-2 lg:flex",
								children: [/* @__PURE__ */ (0, F.jsx)(Ge, {
									htmlFor: "rows-per-page",
									className: "text-sm font-medium",
									children: "Rows per page"
								}), /* @__PURE__ */ (0, F.jsxs)(N, {
									value: `${b.state.pagination.pageSize}`,
									onValueChange: (e) => {
										b.setPageSize(Number(e));
									},
									items: [
										10,
										20,
										30,
										40,
										50
									].map((e) => ({
										label: `${e}`,
										value: `${e}`
									})),
									children: [/* @__PURE__ */ (0, F.jsx)(ge, {
										size: "sm",
										className: "w-20",
										id: "rows-per-page",
										children: /* @__PURE__ */ (0, F.jsx)(M, { placeholder: b.state.pagination.pageSize })
									}), /* @__PURE__ */ (0, F.jsx)(j, {
										side: "top",
										children: /* @__PURE__ */ (0, F.jsx)(_e, { children: [
											10,
											20,
											30,
											40,
											50
										].map((e) => /* @__PURE__ */ (0, F.jsx)(A, {
											value: `${e}`,
											children: e
										}, e)) })
									})]
								})]
							}),
							/* @__PURE__ */ (0, F.jsxs)("div", {
								className: "flex w-fit items-center justify-center text-sm font-medium",
								children: [
									"Page ",
									b.state.pagination.pageIndex + 1,
									" of",
									" ",
									b.getPageCount()
								]
							}),
							/* @__PURE__ */ (0, F.jsxs)("div", {
								className: "ml-auto flex items-center gap-2 lg:ml-0",
								children: [
									/* @__PURE__ */ (0, F.jsxs)(T, {
										variant: "outline",
										className: "hidden h-8 w-8 p-0 lg:flex",
										onClick: () => b.setPageIndex(0),
										disabled: !b.getCanPreviousPage(),
										children: [/* @__PURE__ */ (0, F.jsx)("span", {
											className: "sr-only",
											children: "Go to first page"
										}), /* @__PURE__ */ (0, F.jsx)(C, {
											lucide: "ChevronsLeftIcon",
											tabler: "IconChevronsLeft",
											hugeicons: "ArrowLeftDoubleIcon",
											phosphor: "CaretDoubleLeftIcon",
											remixicon: "RiSkipLeftLine"
										})]
									}),
									/* @__PURE__ */ (0, F.jsxs)(T, {
										variant: "outline",
										className: "size-8",
										size: "icon",
										onClick: () => b.previousPage(),
										disabled: !b.getCanPreviousPage(),
										children: [/* @__PURE__ */ (0, F.jsx)("span", {
											className: "sr-only",
											children: "Go to previous page"
										}), /* @__PURE__ */ (0, F.jsx)(C, {
											lucide: "ChevronLeftIcon",
											tabler: "IconChevronLeft",
											hugeicons: "ArrowLeft01Icon",
											phosphor: "CaretLeftIcon",
											remixicon: "RiArrowLeftSLine"
										})]
									}),
									/* @__PURE__ */ (0, F.jsxs)(T, {
										variant: "outline",
										className: "size-8",
										size: "icon",
										onClick: () => b.nextPage(),
										disabled: !b.getCanNextPage(),
										children: [/* @__PURE__ */ (0, F.jsx)("span", {
											className: "sr-only",
											children: "Go to next page"
										}), /* @__PURE__ */ (0, F.jsx)(C, {
											lucide: "ChevronRightIcon",
											tabler: "IconChevronRight",
											hugeicons: "ArrowRight01Icon",
											phosphor: "CaretRightIcon",
											remixicon: "RiArrowRightSLine"
										})]
									}),
									/* @__PURE__ */ (0, F.jsxs)(T, {
										variant: "outline",
										className: "hidden size-8 lg:flex",
										size: "icon",
										onClick: () => b.setPageIndex(b.getPageCount() - 1),
										disabled: !b.getCanNextPage(),
										children: [/* @__PURE__ */ (0, F.jsx)("span", {
											className: "sr-only",
											children: "Go to last page"
										}), /* @__PURE__ */ (0, F.jsx)(C, {
											lucide: "ChevronsRightIcon",
											tabler: "IconChevronsRight",
											hugeicons: "ArrowRightDoubleIcon",
											phosphor: "CaretDoubleRightIcon",
											remixicon: "RiSkipRightLine"
										})]
									})
								]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, F.jsx)(et, {
				value: "past-performance",
				className: "flex flex-col px-4 lg:px-6",
				children: /* @__PURE__ */ (0, F.jsx)("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" })
			}),
			/* @__PURE__ */ (0, F.jsx)(et, {
				value: "key-personnel",
				className: "flex flex-col px-4 lg:px-6",
				children: /* @__PURE__ */ (0, F.jsx)("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" })
			}),
			/* @__PURE__ */ (0, F.jsx)(et, {
				value: "focus-documents",
				className: "flex flex-col px-4 lg:px-6",
				children: /* @__PURE__ */ (0, F.jsx)("div", { className: "aspect-video w-full flex-1 rounded-lg border border-dashed" })
			})
		]
	});
}
var no = [
	{
		month: "January",
		desktop: 186,
		mobile: 80
	},
	{
		month: "February",
		desktop: 305,
		mobile: 200
	},
	{
		month: "March",
		desktop: 237,
		mobile: 120
	},
	{
		month: "April",
		desktop: 73,
		mobile: 190
	},
	{
		month: "May",
		desktop: 209,
		mobile: 130
	},
	{
		month: "June",
		desktop: 214,
		mobile: 140
	}
], ro = {
	desktop: {
		label: "Desktop",
		color: "var(--primary)"
	},
	mobile: {
		label: "Mobile",
		color: "var(--primary)"
	}
};
function io({ item: e }) {
	let t = d();
	return /* @__PURE__ */ (0, F.jsxs)(Ue, {
		swipeDirection: t ? "down" : "right",
		children: [/* @__PURE__ */ (0, F.jsx)(Le, {
			render: /* @__PURE__ */ (0, F.jsx)(T, {
				variant: "link",
				className: "w-fit px-0 text-left text-foreground"
			}),
			children: e.header
		}), /* @__PURE__ */ (0, F.jsxs)(Ve, { children: [
			/* @__PURE__ */ (0, F.jsxs)(Be, {
				className: "gap-1",
				children: [/* @__PURE__ */ (0, F.jsx)(He, { children: e.header }), /* @__PURE__ */ (0, F.jsx)(Re, { children: "Showing total visitors for the last 6 months" })]
			}),
			/* @__PURE__ */ (0, F.jsxs)("div", {
				className: "flex flex-col gap-4 overflow-y-auto px-4 text-sm",
				children: [!t && /* @__PURE__ */ (0, F.jsxs)(F.Fragment, { children: [
					/* @__PURE__ */ (0, F.jsx)(de, {
						config: ro,
						children: /* @__PURE__ */ (0, F.jsxs)(se, {
							accessibilityLayer: !0,
							data: no,
							margin: {
								left: 0,
								right: 10
							},
							children: [
								/* @__PURE__ */ (0, F.jsx)(oe, { vertical: !1 }),
								/* @__PURE__ */ (0, F.jsx)(E, {
									dataKey: "month",
									tickLine: !1,
									axisLine: !1,
									tickMargin: 8,
									tickFormatter: (e) => e.slice(0, 3),
									hide: !0
								}),
								/* @__PURE__ */ (0, F.jsx)(le, {
									cursor: !1,
									content: /* @__PURE__ */ (0, F.jsx)(ue, { indicator: "dot" })
								}),
								/* @__PURE__ */ (0, F.jsx)(ce, {
									dataKey: "mobile",
									type: "natural",
									fill: "var(--color-mobile)",
									fillOpacity: .6,
									stroke: "var(--color-mobile)",
									stackId: "a"
								}),
								/* @__PURE__ */ (0, F.jsx)(ce, {
									dataKey: "desktop",
									type: "natural",
									fill: "var(--color-desktop)",
									fillOpacity: .4,
									stroke: "var(--color-desktop)",
									stackId: "a"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, F.jsx)(Ke, {}),
					/* @__PURE__ */ (0, F.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, F.jsxs)("div", {
							className: "flex gap-2 leading-none font-medium",
							children: [
								"Trending up by 5.2% this month",
								" ",
								/* @__PURE__ */ (0, F.jsx)(C, {
									lucide: "TrendingUpIcon",
									tabler: "IconTrendingUp",
									hugeicons: "ChartUpIcon",
									phosphor: "TrendUpIcon",
									remixicon: "RiArrowUpLine",
									className: "size-4"
								})
							]
						}), /* @__PURE__ */ (0, F.jsx)("div", {
							className: "text-muted-foreground",
							children: "Showing total visitors for the last 6 months. This is just some random text to test the layout. It spans multiple lines and should wrap around."
						})]
					}),
					/* @__PURE__ */ (0, F.jsx)(Ke, {})
				] }), /* @__PURE__ */ (0, F.jsxs)("form", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, F.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, F.jsx)(Ge, {
								htmlFor: "header",
								children: "Header"
							}), /* @__PURE__ */ (0, F.jsx)(We, {
								id: "header",
								defaultValue: e.header
							})]
						}),
						/* @__PURE__ */ (0, F.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, F.jsxs)("div", {
								className: "flex flex-col gap-3",
								children: [/* @__PURE__ */ (0, F.jsx)(Ge, {
									htmlFor: "type",
									children: "Type"
								}), /* @__PURE__ */ (0, F.jsxs)(N, {
									defaultValue: e.type,
									items: [
										{
											label: "Table of Contents",
											value: "Table of Contents"
										},
										{
											label: "Executive Summary",
											value: "Executive Summary"
										},
										{
											label: "Technical Approach",
											value: "Technical Approach"
										},
										{
											label: "Design",
											value: "Design"
										},
										{
											label: "Capabilities",
											value: "Capabilities"
										},
										{
											label: "Focus Documents",
											value: "Focus Documents"
										},
										{
											label: "Narrative",
											value: "Narrative"
										},
										{
											label: "Cover Page",
											value: "Cover Page"
										}
									],
									children: [/* @__PURE__ */ (0, F.jsx)(ge, {
										id: "type",
										className: "w-full",
										children: /* @__PURE__ */ (0, F.jsx)(M, { placeholder: "Select a type" })
									}), /* @__PURE__ */ (0, F.jsx)(j, { children: /* @__PURE__ */ (0, F.jsxs)(_e, { children: [
										/* @__PURE__ */ (0, F.jsx)(A, {
											value: "Table of Contents",
											children: "Table of Contents"
										}),
										/* @__PURE__ */ (0, F.jsx)(A, {
											value: "Executive Summary",
											children: "Executive Summary"
										}),
										/* @__PURE__ */ (0, F.jsx)(A, {
											value: "Technical Approach",
											children: "Technical Approach"
										}),
										/* @__PURE__ */ (0, F.jsx)(A, {
											value: "Design",
											children: "Design"
										}),
										/* @__PURE__ */ (0, F.jsx)(A, {
											value: "Capabilities",
											children: "Capabilities"
										}),
										/* @__PURE__ */ (0, F.jsx)(A, {
											value: "Focus Documents",
											children: "Focus Documents"
										}),
										/* @__PURE__ */ (0, F.jsx)(A, {
											value: "Narrative",
											children: "Narrative"
										}),
										/* @__PURE__ */ (0, F.jsx)(A, {
											value: "Cover Page",
											children: "Cover Page"
										})
									] }) })]
								})]
							}), /* @__PURE__ */ (0, F.jsxs)("div", {
								className: "flex flex-col gap-3",
								children: [/* @__PURE__ */ (0, F.jsx)(Ge, {
									htmlFor: "status",
									children: "Status"
								}), /* @__PURE__ */ (0, F.jsxs)(N, {
									defaultValue: e.status,
									items: [
										{
											label: "Done",
											value: "Done"
										},
										{
											label: "In Progress",
											value: "In Progress"
										},
										{
											label: "Not Started",
											value: "Not Started"
										}
									],
									children: [/* @__PURE__ */ (0, F.jsx)(ge, {
										id: "status",
										className: "w-full",
										children: /* @__PURE__ */ (0, F.jsx)(M, { placeholder: "Select a status" })
									}), /* @__PURE__ */ (0, F.jsx)(j, { children: /* @__PURE__ */ (0, F.jsxs)(_e, { children: [
										/* @__PURE__ */ (0, F.jsx)(A, {
											value: "Done",
											children: "Done"
										}),
										/* @__PURE__ */ (0, F.jsx)(A, {
											value: "In Progress",
											children: "In Progress"
										}),
										/* @__PURE__ */ (0, F.jsx)(A, {
											value: "Not Started",
											children: "Not Started"
										})
									] }) })]
								})]
							})]
						}),
						/* @__PURE__ */ (0, F.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, F.jsxs)("div", {
								className: "flex flex-col gap-3",
								children: [/* @__PURE__ */ (0, F.jsx)(Ge, {
									htmlFor: "target",
									children: "Target"
								}), /* @__PURE__ */ (0, F.jsx)(We, {
									id: "target",
									defaultValue: e.target
								})]
							}), /* @__PURE__ */ (0, F.jsxs)("div", {
								className: "flex flex-col gap-3",
								children: [/* @__PURE__ */ (0, F.jsx)(Ge, {
									htmlFor: "limit",
									children: "Limit"
								}), /* @__PURE__ */ (0, F.jsx)(We, {
									id: "limit",
									defaultValue: e.limit
								})]
							})]
						}),
						/* @__PURE__ */ (0, F.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, F.jsx)(Ge, {
								htmlFor: "reviewer",
								children: "Reviewer"
							}), /* @__PURE__ */ (0, F.jsxs)(N, {
								defaultValue: e.reviewer,
								items: [
									{
										label: "Eddie Lake",
										value: "Eddie Lake"
									},
									{
										label: "Jamik Tashpulatov",
										value: "Jamik Tashpulatov"
									},
									{
										label: "Emily Whalen",
										value: "Emily Whalen"
									}
								],
								children: [/* @__PURE__ */ (0, F.jsx)(ge, {
									id: "reviewer",
									className: "w-full",
									children: /* @__PURE__ */ (0, F.jsx)(M, { placeholder: "Select a reviewer" })
								}), /* @__PURE__ */ (0, F.jsx)(j, { children: /* @__PURE__ */ (0, F.jsxs)(_e, { children: [
									/* @__PURE__ */ (0, F.jsx)(A, {
										value: "Eddie Lake",
										children: "Eddie Lake"
									}),
									/* @__PURE__ */ (0, F.jsx)(A, {
										value: "Jamik Tashpulatov",
										children: "Jamik Tashpulatov"
									}),
									/* @__PURE__ */ (0, F.jsx)(A, {
										value: "Emily Whalen",
										children: "Emily Whalen"
									})
								] }) })]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, F.jsxs)(Ie, { children: [/* @__PURE__ */ (0, F.jsx)(T, { children: "Submit" }), /* @__PURE__ */ (0, F.jsx)(ze, {
				render: /* @__PURE__ */ (0, F.jsx)(T, { variant: "outline" }),
				children: "Done"
			})] })
		] })]
	});
}
// upstream/registry/bases/base/blocks/dashboard-01/components/section-cards.tsx
function ao() {
	return /* @__PURE__ */ (0, F.jsxs)("div", {
		className: "grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card",
		children: [
			/* @__PURE__ */ (0, F.jsxs)(he, {
				className: "@container/card",
				children: [/* @__PURE__ */ (0, F.jsxs)(O, { children: [
					/* @__PURE__ */ (0, F.jsx)(D, { children: "Total Revenue" }),
					/* @__PURE__ */ (0, F.jsx)(k, {
						className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl",
						children: "$1,250.00"
					}),
					/* @__PURE__ */ (0, F.jsx)(pe, { children: /* @__PURE__ */ (0, F.jsxs)(Pe, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, F.jsx)(C, {
							lucide: "TrendingUpIcon",
							tabler: "IconTrendingUp",
							hugeicons: "ChartUpIcon",
							phosphor: "TrendUpIcon",
							remixicon: "RiArrowUpLine"
						}), "+12.5%"]
					}) })
				] }), /* @__PURE__ */ (0, F.jsxs)(fe, {
					className: "flex-col items-start gap-1.5 text-sm",
					children: [/* @__PURE__ */ (0, F.jsxs)("div", {
						className: "line-clamp-1 flex gap-2 font-medium",
						children: [
							"Trending up this month",
							" ",
							/* @__PURE__ */ (0, F.jsx)(C, {
								lucide: "TrendingUpIcon",
								tabler: "IconTrendingUp",
								hugeicons: "ChartUpIcon",
								phosphor: "TrendUpIcon",
								remixicon: "RiArrowUpLine",
								className: "size-4"
							})
						]
					}), /* @__PURE__ */ (0, F.jsx)("div", {
						className: "text-muted-foreground",
						children: "Visitors for the last 6 months"
					})]
				})]
			}),
			/* @__PURE__ */ (0, F.jsxs)(he, {
				className: "@container/card",
				children: [/* @__PURE__ */ (0, F.jsxs)(O, { children: [
					/* @__PURE__ */ (0, F.jsx)(D, { children: "New Customers" }),
					/* @__PURE__ */ (0, F.jsx)(k, {
						className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl",
						children: "1,234"
					}),
					/* @__PURE__ */ (0, F.jsx)(pe, { children: /* @__PURE__ */ (0, F.jsxs)(Pe, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, F.jsx)(C, {
							lucide: "TrendingDownIcon",
							tabler: "IconTrendingDown",
							hugeicons: "ChartDownIcon",
							phosphor: "TrendDownIcon",
							remixicon: "RiArrowDownLine"
						}), "-20%"]
					}) })
				] }), /* @__PURE__ */ (0, F.jsxs)(fe, {
					className: "flex-col items-start gap-1.5 text-sm",
					children: [/* @__PURE__ */ (0, F.jsxs)("div", {
						className: "line-clamp-1 flex gap-2 font-medium",
						children: [
							"Down 20% this period",
							" ",
							/* @__PURE__ */ (0, F.jsx)(C, {
								lucide: "TrendingDownIcon",
								tabler: "IconTrendingDown",
								hugeicons: "ChartDownIcon",
								phosphor: "TrendDownIcon",
								remixicon: "RiArrowDownLine",
								className: "size-4"
							})
						]
					}), /* @__PURE__ */ (0, F.jsx)("div", {
						className: "text-muted-foreground",
						children: "Acquisition needs attention"
					})]
				})]
			}),
			/* @__PURE__ */ (0, F.jsxs)(he, {
				className: "@container/card",
				children: [/* @__PURE__ */ (0, F.jsxs)(O, { children: [
					/* @__PURE__ */ (0, F.jsx)(D, { children: "Active Accounts" }),
					/* @__PURE__ */ (0, F.jsx)(k, {
						className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl",
						children: "45,678"
					}),
					/* @__PURE__ */ (0, F.jsx)(pe, { children: /* @__PURE__ */ (0, F.jsxs)(Pe, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, F.jsx)(C, {
							lucide: "TrendingUpIcon",
							tabler: "IconTrendingUp",
							hugeicons: "ChartUpIcon",
							phosphor: "TrendUpIcon",
							remixicon: "RiArrowUpLine"
						}), "+12.5%"]
					}) })
				] }), /* @__PURE__ */ (0, F.jsxs)(fe, {
					className: "flex-col items-start gap-1.5 text-sm",
					children: [/* @__PURE__ */ (0, F.jsxs)("div", {
						className: "line-clamp-1 flex gap-2 font-medium",
						children: [
							"Strong user retention",
							" ",
							/* @__PURE__ */ (0, F.jsx)(C, {
								lucide: "TrendingUpIcon",
								tabler: "IconTrendingUp",
								hugeicons: "ChartUpIcon",
								phosphor: "TrendUpIcon",
								remixicon: "RiArrowUpLine",
								className: "size-4"
							})
						]
					}), /* @__PURE__ */ (0, F.jsx)("div", {
						className: "text-muted-foreground",
						children: "Engagement exceed targets"
					})]
				})]
			}),
			/* @__PURE__ */ (0, F.jsxs)(he, {
				className: "@container/card",
				children: [/* @__PURE__ */ (0, F.jsxs)(O, { children: [
					/* @__PURE__ */ (0, F.jsx)(D, { children: "Growth Rate" }),
					/* @__PURE__ */ (0, F.jsx)(k, {
						className: "text-2xl font-semibold tabular-nums @[250px]/card:text-3xl",
						children: "4.5%"
					}),
					/* @__PURE__ */ (0, F.jsx)(pe, { children: /* @__PURE__ */ (0, F.jsxs)(Pe, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, F.jsx)(C, {
							lucide: "TrendingUpIcon",
							tabler: "IconTrendingUp",
							hugeicons: "ChartUpIcon",
							phosphor: "TrendUpIcon",
							remixicon: "RiArrowUpLine"
						}), "+4.5%"]
					}) })
				] }), /* @__PURE__ */ (0, F.jsxs)(fe, {
					className: "flex-col items-start gap-1.5 text-sm",
					children: [/* @__PURE__ */ (0, F.jsxs)("div", {
						className: "line-clamp-1 flex gap-2 font-medium",
						children: [
							"Steady performance increase",
							" ",
							/* @__PURE__ */ (0, F.jsx)(C, {
								lucide: "TrendingUpIcon",
								tabler: "IconTrendingUp",
								hugeicons: "ChartUpIcon",
								phosphor: "TrendUpIcon",
								remixicon: "RiArrowUpLine",
								className: "size-4"
							})
						]
					}), /* @__PURE__ */ (0, F.jsx)("div", {
						className: "text-muted-foreground",
						children: "Meets growth projections"
					})]
				})]
			})
		]
	});
}
// upstream/registry/bases/base/blocks/dashboard-01/components/site-header.tsx
function oo() {
	return /* @__PURE__ */ (0, F.jsx)("header", {
		className: "flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)",
		children: /* @__PURE__ */ (0, F.jsxs)("div", {
			className: "flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6",
			children: [
				/* @__PURE__ */ (0, F.jsx)(te, { className: "-ml-1" }),
				/* @__PURE__ */ (0, F.jsx)(Ke, {
					orientation: "vertical",
					className: "mx-2 h-4 data-vertical:self-auto"
				}),
				/* @__PURE__ */ (0, F.jsx)("h1", {
					className: "text-base font-medium",
					children: "Documents"
				})
			]
		})
	});
}
// upstream/registry/bases/base/blocks/dashboard-01/data.json
var so = /*#__PURE__*/ JSON.parse("[{\"id\":1,\"header\":\"Cover page\",\"type\":\"Cover page\",\"status\":\"In Process\",\"target\":\"18\",\"limit\":\"5\",\"reviewer\":\"Eddie Lake\"},{\"id\":2,\"header\":\"Table of contents\",\"type\":\"Table of contents\",\"status\":\"Done\",\"target\":\"29\",\"limit\":\"24\",\"reviewer\":\"Eddie Lake\"},{\"id\":3,\"header\":\"Executive summary\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"10\",\"limit\":\"13\",\"reviewer\":\"Eddie Lake\"},{\"id\":4,\"header\":\"Technical approach\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"27\",\"limit\":\"23\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":5,\"header\":\"Design\",\"type\":\"Narrative\",\"status\":\"In Process\",\"target\":\"2\",\"limit\":\"16\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":6,\"header\":\"Capabilities\",\"type\":\"Narrative\",\"status\":\"In Process\",\"target\":\"20\",\"limit\":\"8\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":7,\"header\":\"Integration with existing systems\",\"type\":\"Narrative\",\"status\":\"In Process\",\"target\":\"19\",\"limit\":\"21\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":8,\"header\":\"Innovation and Advantages\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"25\",\"limit\":\"26\",\"reviewer\":\"Assign reviewer\"},{\"id\":9,\"header\":\"Overview of EMR's Innovative Solutions\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"7\",\"limit\":\"23\",\"reviewer\":\"Assign reviewer\"},{\"id\":10,\"header\":\"Advanced Algorithms and Machine Learning\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"30\",\"limit\":\"28\",\"reviewer\":\"Assign reviewer\"},{\"id\":11,\"header\":\"Adaptive Communication Protocols\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"9\",\"limit\":\"31\",\"reviewer\":\"Assign reviewer\"},{\"id\":12,\"header\":\"Advantages Over Current Technologies\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"12\",\"limit\":\"0\",\"reviewer\":\"Assign reviewer\"},{\"id\":13,\"header\":\"Past Performance\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"22\",\"limit\":\"33\",\"reviewer\":\"Assign reviewer\"},{\"id\":14,\"header\":\"Customer Feedback and Satisfaction Levels\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"15\",\"limit\":\"34\",\"reviewer\":\"Assign reviewer\"},{\"id\":15,\"header\":\"Implementation Challenges and Solutions\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"3\",\"limit\":\"35\",\"reviewer\":\"Assign reviewer\"},{\"id\":16,\"header\":\"Security Measures and Data Protection Policies\",\"type\":\"Narrative\",\"status\":\"In Process\",\"target\":\"6\",\"limit\":\"36\",\"reviewer\":\"Assign reviewer\"},{\"id\":17,\"header\":\"Scalability and Future Proofing\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"4\",\"limit\":\"37\",\"reviewer\":\"Assign reviewer\"},{\"id\":18,\"header\":\"Cost-Benefit Analysis\",\"type\":\"Plain language\",\"status\":\"Done\",\"target\":\"14\",\"limit\":\"38\",\"reviewer\":\"Assign reviewer\"},{\"id\":19,\"header\":\"User Training and Onboarding Experience\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"17\",\"limit\":\"39\",\"reviewer\":\"Assign reviewer\"},{\"id\":20,\"header\":\"Future Development Roadmap\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"11\",\"limit\":\"40\",\"reviewer\":\"Assign reviewer\"},{\"id\":21,\"header\":\"System Architecture Overview\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"24\",\"limit\":\"18\",\"reviewer\":\"Maya Johnson\"},{\"id\":22,\"header\":\"Risk Management Plan\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"15\",\"limit\":\"22\",\"reviewer\":\"Carlos Rodriguez\"},{\"id\":23,\"header\":\"Compliance Documentation\",\"type\":\"Legal\",\"status\":\"In Process\",\"target\":\"31\",\"limit\":\"27\",\"reviewer\":\"Sarah Chen\"},{\"id\":24,\"header\":\"API Documentation\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"8\",\"limit\":\"12\",\"reviewer\":\"Raj Patel\"},{\"id\":25,\"header\":\"User Interface Mockups\",\"type\":\"Visual\",\"status\":\"In Process\",\"target\":\"19\",\"limit\":\"25\",\"reviewer\":\"Leila Ahmadi\"},{\"id\":26,\"header\":\"Database Schema\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"22\",\"limit\":\"20\",\"reviewer\":\"Thomas Wilson\"},{\"id\":27,\"header\":\"Testing Methodology\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"17\",\"limit\":\"14\",\"reviewer\":\"Assign reviewer\"},{\"id\":28,\"header\":\"Deployment Strategy\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"26\",\"limit\":\"30\",\"reviewer\":\"Eddie Lake\"},{\"id\":29,\"header\":\"Budget Breakdown\",\"type\":\"Financial\",\"status\":\"In Process\",\"target\":\"13\",\"limit\":\"16\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":30,\"header\":\"Market Analysis\",\"type\":\"Research\",\"status\":\"Done\",\"target\":\"29\",\"limit\":\"32\",\"reviewer\":\"Sophia Martinez\"},{\"id\":31,\"header\":\"Competitor Comparison\",\"type\":\"Research\",\"status\":\"In Process\",\"target\":\"21\",\"limit\":\"19\",\"reviewer\":\"Assign reviewer\"},{\"id\":32,\"header\":\"Maintenance Plan\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"16\",\"limit\":\"23\",\"reviewer\":\"Alex Thompson\"},{\"id\":33,\"header\":\"User Personas\",\"type\":\"Research\",\"status\":\"In Process\",\"target\":\"27\",\"limit\":\"24\",\"reviewer\":\"Nina Patel\"},{\"id\":34,\"header\":\"Accessibility Compliance\",\"type\":\"Legal\",\"status\":\"Done\",\"target\":\"18\",\"limit\":\"21\",\"reviewer\":\"Assign reviewer\"},{\"id\":35,\"header\":\"Performance Metrics\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"23\",\"limit\":\"26\",\"reviewer\":\"David Kim\"},{\"id\":36,\"header\":\"Disaster Recovery Plan\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"14\",\"limit\":\"17\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":37,\"header\":\"Third-party Integrations\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"25\",\"limit\":\"28\",\"reviewer\":\"Eddie Lake\"},{\"id\":38,\"header\":\"User Feedback Summary\",\"type\":\"Research\",\"status\":\"Done\",\"target\":\"20\",\"limit\":\"15\",\"reviewer\":\"Assign reviewer\"},{\"id\":39,\"header\":\"Localization Strategy\",\"type\":\"Narrative\",\"status\":\"In Process\",\"target\":\"12\",\"limit\":\"19\",\"reviewer\":\"Maria Garcia\"},{\"id\":40,\"header\":\"Mobile Compatibility\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"28\",\"limit\":\"31\",\"reviewer\":\"James Wilson\"},{\"id\":41,\"header\":\"Data Migration Plan\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"19\",\"limit\":\"22\",\"reviewer\":\"Assign reviewer\"},{\"id\":42,\"header\":\"Quality Assurance Protocols\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"30\",\"limit\":\"33\",\"reviewer\":\"Priya Singh\"},{\"id\":43,\"header\":\"Stakeholder Analysis\",\"type\":\"Research\",\"status\":\"In Process\",\"target\":\"11\",\"limit\":\"14\",\"reviewer\":\"Eddie Lake\"},{\"id\":44,\"header\":\"Environmental Impact Assessment\",\"type\":\"Research\",\"status\":\"Done\",\"target\":\"24\",\"limit\":\"27\",\"reviewer\":\"Assign reviewer\"},{\"id\":45,\"header\":\"Intellectual Property Rights\",\"type\":\"Legal\",\"status\":\"In Process\",\"target\":\"17\",\"limit\":\"20\",\"reviewer\":\"Sarah Johnson\"},{\"id\":46,\"header\":\"Customer Support Framework\",\"type\":\"Narrative\",\"status\":\"Done\",\"target\":\"22\",\"limit\":\"25\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":47,\"header\":\"Version Control Strategy\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"15\",\"limit\":\"18\",\"reviewer\":\"Assign reviewer\"},{\"id\":48,\"header\":\"Continuous Integration Pipeline\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"26\",\"limit\":\"29\",\"reviewer\":\"Michael Chen\"},{\"id\":49,\"header\":\"Regulatory Compliance\",\"type\":\"Legal\",\"status\":\"In Process\",\"target\":\"13\",\"limit\":\"16\",\"reviewer\":\"Assign reviewer\"},{\"id\":50,\"header\":\"User Authentication System\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"28\",\"limit\":\"31\",\"reviewer\":\"Eddie Lake\"},{\"id\":51,\"header\":\"Data Analytics Framework\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"21\",\"limit\":\"24\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":52,\"header\":\"Cloud Infrastructure\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"16\",\"limit\":\"19\",\"reviewer\":\"Assign reviewer\"},{\"id\":53,\"header\":\"Network Security Measures\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"29\",\"limit\":\"32\",\"reviewer\":\"Lisa Wong\"},{\"id\":54,\"header\":\"Project Timeline\",\"type\":\"Planning\",\"status\":\"Done\",\"target\":\"14\",\"limit\":\"17\",\"reviewer\":\"Eddie Lake\"},{\"id\":55,\"header\":\"Resource Allocation\",\"type\":\"Planning\",\"status\":\"In Process\",\"target\":\"27\",\"limit\":\"30\",\"reviewer\":\"Assign reviewer\"},{\"id\":56,\"header\":\"Team Structure and Roles\",\"type\":\"Planning\",\"status\":\"Done\",\"target\":\"20\",\"limit\":\"23\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":57,\"header\":\"Communication Protocols\",\"type\":\"Planning\",\"status\":\"In Process\",\"target\":\"15\",\"limit\":\"18\",\"reviewer\":\"Assign reviewer\"},{\"id\":58,\"header\":\"Success Metrics\",\"type\":\"Planning\",\"status\":\"Done\",\"target\":\"30\",\"limit\":\"33\",\"reviewer\":\"Eddie Lake\"},{\"id\":59,\"header\":\"Internationalization Support\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"23\",\"limit\":\"26\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":60,\"header\":\"Backup and Recovery Procedures\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"18\",\"limit\":\"21\",\"reviewer\":\"Assign reviewer\"},{\"id\":61,\"header\":\"Monitoring and Alerting System\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"25\",\"limit\":\"28\",\"reviewer\":\"Daniel Park\"},{\"id\":62,\"header\":\"Code Review Guidelines\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"12\",\"limit\":\"15\",\"reviewer\":\"Eddie Lake\"},{\"id\":63,\"header\":\"Documentation Standards\",\"type\":\"Technical content\",\"status\":\"In Process\",\"target\":\"27\",\"limit\":\"30\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":64,\"header\":\"Release Management Process\",\"type\":\"Planning\",\"status\":\"Done\",\"target\":\"22\",\"limit\":\"25\",\"reviewer\":\"Assign reviewer\"},{\"id\":65,\"header\":\"Feature Prioritization Matrix\",\"type\":\"Planning\",\"status\":\"In Process\",\"target\":\"19\",\"limit\":\"22\",\"reviewer\":\"Emma Davis\"},{\"id\":66,\"header\":\"Technical Debt Assessment\",\"type\":\"Technical content\",\"status\":\"Done\",\"target\":\"24\",\"limit\":\"27\",\"reviewer\":\"Eddie Lake\"},{\"id\":67,\"header\":\"Capacity Planning\",\"type\":\"Planning\",\"status\":\"In Process\",\"target\":\"21\",\"limit\":\"24\",\"reviewer\":\"Jamik Tashpulatov\"},{\"id\":68,\"header\":\"Service Level Agreements\",\"type\":\"Legal\",\"status\":\"Done\",\"target\":\"26\",\"limit\":\"29\",\"reviewer\":\"Assign reviewer\"}]");
// upstream/registry/bases/base/blocks/dashboard-01/page.tsx
function co() {
	return /* @__PURE__ */ (0, F.jsxs)(h, {
		style: {
			"--sidebar-width": "calc(var(--spacing) * 72)",
			"--header-height": "calc(var(--spacing) * 12)"
		},
		children: [/* @__PURE__ */ (0, F.jsx)(ct, { variant: "inset" }), /* @__PURE__ */ (0, F.jsxs)(f, { children: [/* @__PURE__ */ (0, F.jsx)(oo, {}), /* @__PURE__ */ (0, F.jsx)("div", {
			className: "flex flex-1 flex-col",
			children: /* @__PURE__ */ (0, F.jsx)("div", {
				className: "@container/main flex flex-1 flex-col gap-2",
				children: /* @__PURE__ */ (0, F.jsxs)("div", {
					className: "flex flex-col gap-4 py-4 md:gap-6 md:py-6",
					children: [
						/* @__PURE__ */ (0, F.jsx)(ao, {}),
						/* @__PURE__ */ (0, F.jsx)("div", {
							className: "px-4 lg:px-6",
							children: /* @__PURE__ */ (0, F.jsx)(dt, {})
						}),
						/* @__PURE__ */ (0, F.jsx)(to, { data: so })
					]
				})
			})
		})] })]
	});
}
export { co as default };
