import { a as e } from "./rolldown-runtime-DUcC5eAW.js";
import { t } from "./react-D9cguz4v.js";
import { a as n, c as r, d as i, f as a, i as o, l as s, m as c, n as l, o as u, p as d, r as f, s as p, t as m, u as h } from "./useTable-B7Lmb1dj.js";
import { t as g } from "./createLucideIcon-B1HI5iko.js";
import { h as _, v } from "./icon-placeholder-BTF3H_W7.js";
import { t as y } from "./button-DmMhlFcj.js";
import { t as b } from "./checkbox-BZCfKcOg.js";
import { a as x, h as S, i as C, n as w, o as T, r as E, t as D, u as O } from "./dropdown-menu-CqSzBIr7.js";
import { t as k } from "./input-cHYv8lFd.js";
import { c as A, i as j, n as M, o as N, s as P, t as F } from "./table-D1EnsJZM.js";
import { t as I } from "./jsx-runtime-lAxUcZjR.js";
var L = g("ArrowUpDown", [
	["path", {
		d: "m21 16-4 4-4-4",
		key: "f6ql7i"
	}],
	["path", {
		d: "M17 20V4",
		key: "1ejh1v"
	}],
	["path", {
		d: "m3 8 4-4 4 4",
		key: "11wl7u"
	}],
	["path", {
		d: "M7 4v16",
		key: "1glfcx"
	}]
]), R = /* @__PURE__ */ e(t(), 1), z = I(), B = i({
	columnFilteringFeature: h,
	columnVisibilityFeature: s,
	rowPaginationFeature: p,
	rowSelectionFeature: u,
	rowSortingFeature: n,
	filteredRowModel: o(),
	paginatedRowModel: f(),
	sortedRowModel: l(),
	filterFns: { includesString: r },
	sortFns: {
		alphanumeric: d,
		text: c
	}
}), V = a(), H = [
	{
		id: "m5gr84i9",
		amount: 316,
		status: "success",
		email: "ken99@example.com"
	},
	{
		id: "3u1reuv4",
		amount: 242,
		status: "success",
		email: "Abe45@example.com"
	},
	{
		id: "derv1ws0",
		amount: 837,
		status: "processing",
		email: "Monserrat44@example.com"
	},
	{
		id: "5kma53ae",
		amount: 874,
		status: "success",
		email: "Silas22@example.com"
	},
	{
		id: "bhqecj4p",
		amount: 721,
		status: "failed",
		email: "carmella@example.com"
	}
], U = V.columns([
	V.display({
		id: "select",
		header: ({ table: e }) => /* @__PURE__ */ (0, z.jsx)(b, {
			checked: e.getIsAllPageRowsSelected(),
			indeterminate: e.getIsSomePageRowsSelected() && !e.getIsAllPageRowsSelected(),
			onCheckedChange: (t) => e.toggleAllPageRowsSelected(!!t),
			"aria-label": "Select all"
		}),
		cell: ({ row: e }) => /* @__PURE__ */ (0, z.jsx)(b, {
			checked: e.getIsSelected(),
			onCheckedChange: (t) => e.toggleSelected(!!t),
			"aria-label": "Select row"
		}),
		enableSorting: !1,
		enableHiding: !1
	}),
	V.accessor("status", {
		header: "Status",
		cell: ({ row: e }) => /* @__PURE__ */ (0, z.jsx)("div", {
			className: "capitalize",
			children: e.getValue("status")
		})
	}),
	V.accessor("email", {
		header: ({ column: e }) => /* @__PURE__ */ (0, z.jsxs)(y, {
			variant: "ghost",
			onClick: () => e.toggleSorting(e.getIsSorted() === "asc"),
			children: ["Email", /* @__PURE__ */ (0, z.jsx)(L, {})]
		}),
		cell: ({ row: e }) => /* @__PURE__ */ (0, z.jsx)("div", {
			className: "lowercase",
			children: e.getValue("email")
		})
	}),
	V.accessor("amount", {
		header: () => /* @__PURE__ */ (0, z.jsx)("div", {
			className: "text-right",
			children: "Amount"
		}),
		cell: ({ row: e }) => {
			let t = parseFloat(e.getValue("amount")), n = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD"
			}).format(t);
			return /* @__PURE__ */ (0, z.jsx)("div", {
				className: "text-right font-medium",
				children: n
			});
		}
	}),
	V.display({
		id: "actions",
		enableHiding: !1,
		cell: ({ row: e }) => {
			let t = e.original;
			return /* @__PURE__ */ (0, z.jsxs)(D, { children: [/* @__PURE__ */ (0, z.jsxs)(S, {
				render: /* @__PURE__ */ (0, z.jsx)(y, {
					variant: "ghost",
					size: "icon-xs"
				}),
				children: [/* @__PURE__ */ (0, z.jsx)("span", {
					className: "sr-only",
					children: "Open menu"
				}), /* @__PURE__ */ (0, z.jsx)(_, {})]
			}), /* @__PURE__ */ (0, z.jsxs)(E, {
				align: "end",
				className: "w-44",
				children: [
					/* @__PURE__ */ (0, z.jsxs)(C, { children: [/* @__PURE__ */ (0, z.jsx)(T, { children: "Actions" }), /* @__PURE__ */ (0, z.jsx)(x, {
						onClick: () => navigator.clipboard.writeText(t.id),
						children: "Copy payment ID"
					})] }),
					/* @__PURE__ */ (0, z.jsx)(O, {}),
					/* @__PURE__ */ (0, z.jsxs)(C, { children: [/* @__PURE__ */ (0, z.jsx)(x, { children: "View customer" }), /* @__PURE__ */ (0, z.jsx)(x, { children: "View payment details" })] })
				]
			})] });
		}
	})
]);
function W() {
	let [e, t] = R.useState([]), [n, r] = R.useState([]), [i, a] = R.useState({}), [o, s] = R.useState({}), c = m({
		features: B,
		data: H,
		columns: U,
		onSortingChange: t,
		onColumnFiltersChange: r,
		onColumnVisibilityChange: a,
		onRowSelectionChange: s,
		state: {
			sorting: e,
			columnFilters: n,
			columnVisibility: i,
			rowSelection: o
		}
	});
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: "w-full",
		children: [
			/* @__PURE__ */ (0, z.jsxs)("div", {
				className: "flex items-center py-4",
				children: [/* @__PURE__ */ (0, z.jsx)(k, {
					placeholder: "Filter emails...",
					value: c.getColumn("email")?.getFilterValue() ?? "",
					onChange: (e) => c.getColumn("email")?.setFilterValue(e.target.value),
					className: "max-w-sm"
				}), /* @__PURE__ */ (0, z.jsxs)(D, { children: [/* @__PURE__ */ (0, z.jsxs)(S, {
					render: /* @__PURE__ */ (0, z.jsx)(y, {
						variant: "outline",
						className: "ml-auto"
					}),
					children: ["Columns ", /* @__PURE__ */ (0, z.jsx)(v, {})]
				}), /* @__PURE__ */ (0, z.jsx)(E, {
					align: "end",
					className: "w-44",
					children: /* @__PURE__ */ (0, z.jsx)(C, { children: c.getAllColumns().filter((e) => e.getCanHide()).map((e) => /* @__PURE__ */ (0, z.jsx)(w, {
						className: "capitalize",
						checked: e.getIsVisible(),
						onCheckedChange: (t) => e.toggleVisibility(!!t),
						children: e.id
					}, e.id)) })
				})] })]
			}),
			/* @__PURE__ */ (0, z.jsx)("div", {
				className: "overflow-hidden rounded-md border",
				children: /* @__PURE__ */ (0, z.jsxs)(F, { children: [/* @__PURE__ */ (0, z.jsx)(P, { children: c.getHeaderGroups().map((e) => /* @__PURE__ */ (0, z.jsx)(A, { children: e.headers.map((e) => /* @__PURE__ */ (0, z.jsx)(N, { children: e.isPlaceholder ? null : /* @__PURE__ */ (0, z.jsx)(c.FlexRender, { header: e }) }, e.id)) }, e.id)) }), /* @__PURE__ */ (0, z.jsx)(M, { children: c.getRowModel().rows?.length ? c.getRowModel().rows.map((e) => /* @__PURE__ */ (0, z.jsx)(A, {
					"data-state": e.getIsSelected() && "selected",
					children: e.getVisibleCells().map((e) => /* @__PURE__ */ (0, z.jsx)(j, { children: /* @__PURE__ */ (0, z.jsx)(c.FlexRender, { cell: e }) }, e.id))
				}, e.id)) : /* @__PURE__ */ (0, z.jsx)(A, { children: /* @__PURE__ */ (0, z.jsx)(j, {
					colSpan: U.length,
					className: "h-24 text-center",
					children: "No results."
				}) }) })] })
			}),
			/* @__PURE__ */ (0, z.jsxs)("div", {
				className: "flex items-center justify-end space-x-2 py-4",
				children: [/* @__PURE__ */ (0, z.jsxs)("div", {
					className: "flex-1 text-sm text-muted-foreground",
					children: [
						c.getFilteredSelectedRowModel().rows.length,
						" of",
						" ",
						c.getFilteredRowModel().rows.length,
						" row(s) selected."
					]
				}), /* @__PURE__ */ (0, z.jsxs)("div", {
					className: "space-x-2",
					children: [/* @__PURE__ */ (0, z.jsx)(y, {
						variant: "outline",
						size: "sm",
						onClick: () => c.previousPage(),
						disabled: !c.getCanPreviousPage(),
						children: "Previous"
					}), /* @__PURE__ */ (0, z.jsx)(y, {
						variant: "outline",
						size: "sm",
						onClick: () => c.nextPage(),
						disabled: !c.getCanNextPage(),
						children: "Next"
					})]
				})]
			})
		]
	});
}
export { W as DataTableDemo };
