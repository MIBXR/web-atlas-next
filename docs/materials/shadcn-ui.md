# shadcn/ui · React 组件库

[运行样例](../../demos/materials/shadcn-ui/index.html) · [素材条目](../../entries/materials/shadcn-ui.json) · [对照结果](../../demos/materials/shadcn-ui/fidelity.md)

## 预览与操作

按名称或分组切换 66 个组件样例与三个区块。仪表盘可以操作趋势图和数据表，手机宽度下侧栏可以打开抽屉。 预览跟随 Web Atlas 的深浅色设置。

## 源码与重建

样例按 `shadcn@4.23.0` 对应的提交取用，组件统一用 Base UI 和 Vega。组件源码位于本体的 `source/upstream/registry/bases/base/ui/`，下表链接到各样例的入口文件。

本地预览沿用上游组件的交互实现，将样例中其他皮肤的导入指向 Vega，并用浏览器原生图片和链接接入。外部头像和示意图使用本地占位图。登录区块展示布局和输入状态。

在本体的 `source/` 中执行 `npm ci` 和 `npm run build`。运行文件写入本体的 `vendor/`，用 HTTP 打开样例入口。

## 样例与源码

| 样例 | 上游样例源码 |
| --- | --- |
| [Dashboard 01](../../demos/materials/shadcn-ui/index.html?demo=dashboard-01) | [源码](../../demos/materials/shadcn-ui/source/upstream/registry/bases/base/blocks/dashboard-01/page.tsx) |
| [Accordion](../../demos/materials/shadcn-ui/index.html?demo=accordion) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/accordion-demo.tsx) |
| [Alert](../../demos/materials/shadcn-ui/index.html?demo=alert) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/alert-demo.tsx) |
| [Alert Dialog](../../demos/materials/shadcn-ui/index.html?demo=alert-dialog) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/alert-dialog-demo.tsx) |
| [Aspect Ratio](../../demos/materials/shadcn-ui/index.html?demo=aspect-ratio) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/aspect-ratio-demo.tsx) |
| [Attachment](../../demos/materials/shadcn-ui/index.html?demo=attachment) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/attachment-states.tsx) |
| [Avatar](../../demos/materials/shadcn-ui/index.html?demo=avatar) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/avatar-demo.tsx) |
| [Badge](../../demos/materials/shadcn-ui/index.html?demo=badge) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/badge-demo.tsx) |
| [Breadcrumb](../../demos/materials/shadcn-ui/index.html?demo=breadcrumb) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/breadcrumb-demo.tsx) |
| [Bubble](../../demos/materials/shadcn-ui/index.html?demo=bubble) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/bubble-demo.tsx) |
| [Button](../../demos/materials/shadcn-ui/index.html?demo=button) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/button-demo.tsx) |
| [Button Group](../../demos/materials/shadcn-ui/index.html?demo=button-group) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/button-group-demo.tsx) |
| [Calendar](../../demos/materials/shadcn-ui/index.html?demo=calendar) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/calendar-demo.tsx) |
| [Card](../../demos/materials/shadcn-ui/index.html?demo=card) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/card-demo.tsx) |
| [Carousel](../../demos/materials/shadcn-ui/index.html?demo=carousel) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/carousel-demo.tsx) |
| [Chart](../../demos/materials/shadcn-ui/index.html?demo=chart) | [源码](../../demos/materials/shadcn-ui/source/upstream/registry/bases/base/examples/chart-example.tsx) |
| [Checkbox](../../demos/materials/shadcn-ui/index.html?demo=checkbox) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/checkbox-demo.tsx) |
| [Code Block](../../demos/materials/shadcn-ui/index.html?demo=code-block) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/code-block-demo.tsx) |
| [Collapsible](../../demos/materials/shadcn-ui/index.html?demo=collapsible) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/collapsible-demo.tsx) |
| [Combobox](../../demos/materials/shadcn-ui/index.html?demo=combobox) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/combobox-demo.tsx) |
| [Command](../../demos/materials/shadcn-ui/index.html?demo=command) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/command-demo.tsx) |
| [Context Menu](../../demos/materials/shadcn-ui/index.html?demo=context-menu) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/context-menu-demo.tsx) |
| [Data Table](../../demos/materials/shadcn-ui/index.html?demo=data-table) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/data-table-demo.tsx) |
| [Date Picker](../../demos/materials/shadcn-ui/index.html?demo=date-picker) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/date-picker-demo.tsx) |
| [Dialog](../../demos/materials/shadcn-ui/index.html?demo=dialog) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/dialog-demo.tsx) |
| [Direction](../../demos/materials/shadcn-ui/index.html?demo=direction) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/card-rtl.tsx) |
| [Drawer](../../demos/materials/shadcn-ui/index.html?demo=drawer) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/drawer-demo.tsx) |
| [Dropdown Menu](../../demos/materials/shadcn-ui/index.html?demo=dropdown-menu) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/dropdown-menu-demo.tsx) |
| [Empty](../../demos/materials/shadcn-ui/index.html?demo=empty) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/empty-demo.tsx) |
| [Field](../../demos/materials/shadcn-ui/index.html?demo=field) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/field-demo.tsx) |
| [Hover Card](../../demos/materials/shadcn-ui/index.html?demo=hover-card) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/hover-card-demo.tsx) |
| [Input](../../demos/materials/shadcn-ui/index.html?demo=input) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/input-demo.tsx) |
| [Input Group](../../demos/materials/shadcn-ui/index.html?demo=input-group) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/input-group-demo.tsx) |
| [Input OTP](../../demos/materials/shadcn-ui/index.html?demo=input-otp) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/input-otp-demo.tsx) |
| [Item](../../demos/materials/shadcn-ui/index.html?demo=item) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/item-demo.tsx) |
| [Kbd](../../demos/materials/shadcn-ui/index.html?demo=kbd) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/kbd-demo.tsx) |
| [Label](../../demos/materials/shadcn-ui/index.html?demo=label) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/label-demo.tsx) |
| [Marker](../../demos/materials/shadcn-ui/index.html?demo=marker) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/marker-demo.tsx) |
| [Menubar](../../demos/materials/shadcn-ui/index.html?demo=menubar) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/menubar-demo.tsx) |
| [Message](../../demos/materials/shadcn-ui/index.html?demo=message) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/message-demo.tsx) |
| [Message Scroller](../../demos/materials/shadcn-ui/index.html?demo=message-scroller) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/message-scroller-scrollable.tsx) |
| [Native Select](../../demos/materials/shadcn-ui/index.html?demo=native-select) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/native-select-demo.tsx) |
| [Navigation Menu](../../demos/materials/shadcn-ui/index.html?demo=navigation-menu) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/navigation-menu-demo.tsx) |
| [Pagination](../../demos/materials/shadcn-ui/index.html?demo=pagination) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/pagination-demo.tsx) |
| [Popover](../../demos/materials/shadcn-ui/index.html?demo=popover) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/popover-demo.tsx) |
| [Progress](../../demos/materials/shadcn-ui/index.html?demo=progress) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/progress-demo.tsx) |
| [Questionnaire](../../demos/materials/shadcn-ui/index.html?demo=questionnaire) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/questionnaire-demo.tsx) |
| [Radio Group](../../demos/materials/shadcn-ui/index.html?demo=radio-group) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/radio-group-demo.tsx) |
| [Resizable](../../demos/materials/shadcn-ui/index.html?demo=resizable) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/resizable-demo.tsx) |
| [Scroll Area](../../demos/materials/shadcn-ui/index.html?demo=scroll-area) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/scroll-area-demo.tsx) |
| [Select](../../demos/materials/shadcn-ui/index.html?demo=select) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/select-demo.tsx) |
| [Separator](../../demos/materials/shadcn-ui/index.html?demo=separator) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/separator-demo.tsx) |
| [Sheet](../../demos/materials/shadcn-ui/index.html?demo=sheet) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/sheet-demo.tsx) |
| [Sidebar](../../demos/materials/shadcn-ui/index.html?demo=sidebar) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/sidebar-demo.tsx) |
| [Skeleton](../../demos/materials/shadcn-ui/index.html?demo=skeleton) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/skeleton-demo.tsx) |
| [Slider](../../demos/materials/shadcn-ui/index.html?demo=slider) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/slider-demo.tsx) |
| [Spinner](../../demos/materials/shadcn-ui/index.html?demo=spinner) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/spinner-demo.tsx) |
| [Switch](../../demos/materials/shadcn-ui/index.html?demo=switch) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/switch-demo.tsx) |
| [Table](../../demos/materials/shadcn-ui/index.html?demo=table) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/table-demo.tsx) |
| [Tabs](../../demos/materials/shadcn-ui/index.html?demo=tabs) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/tabs-demo.tsx) |
| [Textarea](../../demos/materials/shadcn-ui/index.html?demo=textarea) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/textarea-demo.tsx) |
| [Toast](../../demos/materials/shadcn-ui/index.html?demo=toast) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/toast-demo.tsx) |
| [Toggle](../../demos/materials/shadcn-ui/index.html?demo=toggle) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/toggle-demo.tsx) |
| [Toggle Group](../../demos/materials/shadcn-ui/index.html?demo=toggle-group) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/toggle-group-demo.tsx) |
| [Tooltip](../../demos/materials/shadcn-ui/index.html?demo=tooltip) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/tooltip-demo.tsx) |
| [Trace](../../demos/materials/shadcn-ui/index.html?demo=trace) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/trace-open.tsx) |
| [Typography](../../demos/materials/shadcn-ui/index.html?demo=typography) | [源码](../../demos/materials/shadcn-ui/source/upstream/examples/base/typography-demo.tsx) |
| [Sidebar 07](../../demos/materials/shadcn-ui/index.html?demo=sidebar-07) | [源码](../../demos/materials/shadcn-ui/source/upstream/registry/bases/base/blocks/sidebar-07/page.tsx) |
| [Login 03](../../demos/materials/shadcn-ui/index.html?demo=login-03) | [源码](../../demos/materials/shadcn-ui/source/upstream/registry/bases/base/blocks/login-03/page.tsx) |
