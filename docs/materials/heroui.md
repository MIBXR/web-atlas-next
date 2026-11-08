# HeroUI · React 组件库

[运行样例](../../demos/materials/heroui/index.html) · [素材条目](../../entries/materials/heroui.json) · [对照结果](../../demos/materials/heroui/fidelity.md)

## 预览与操作

在素材详情切换 73 个 React Web 样例。可以筛选组合框选项、打开对话框或在日期范围选择器内选日期。 预览跟随 Web Atlas 的深浅色设置。

## 源码与重建

在 React 19 和 Tailwind CSS 4 项目中安装与样例一致的版本。

```sh
npm install @heroui/react@3.2.7 @heroui/styles@3.2.7
```

在项目样式中依次引入 `tailwindcss` 和 `@heroui/styles`。复合组件的子组件和状态可参考下表中的上游示例。头像预览使用本地占位图。

在本体的 `source/` 中执行 `npm ci` 和 `npm run build`。运行文件写入本体的 `vendor/`，用 HTTP 打开样例入口。

## 样例与源码

| 样例 | 上游样例源码 |
| --- | --- |
| [Card](../../demos/materials/heroui/index.html?demo=card) | [源码](../../demos/materials/heroui/source/upstream/demos/en/card/default.tsx) |
| [Accordion](../../demos/materials/heroui/index.html?demo=accordion) | [源码](../../demos/materials/heroui/source/upstream/demos/en/accordion/basic.tsx) |
| [Alert](../../demos/materials/heroui/index.html?demo=alert) | [源码](../../demos/materials/heroui/source/upstream/demos/en/alert/basic.tsx) |
| [AlertDialog](../../demos/materials/heroui/index.html?demo=alert-dialog) | [源码](../../demos/materials/heroui/source/upstream/demos/en/alert-dialog/default.tsx) |
| [Autocomplete](../../demos/materials/heroui/index.html?demo=autocomplete) | [源码](../../demos/materials/heroui/source/upstream/demos/en/autocomplete/default.tsx) |
| [Avatar](../../demos/materials/heroui/index.html?demo=avatar) | [源码](../../demos/materials/heroui/source/upstream/demos/en/avatar/basic.tsx) |
| [AvatarGroup](../../demos/materials/heroui/index.html?demo=avatar-group) | [源码](../../demos/materials/heroui/source/upstream/demos/en/avatar-group/basic.tsx) |
| [Badge](../../demos/materials/heroui/index.html?demo=badge) | [源码](../../demos/materials/heroui/source/upstream/demos/en/badge/basic.tsx) |
| [Breadcrumbs](../../demos/materials/heroui/index.html?demo=breadcrumbs) | [源码](../../demos/materials/heroui/source/upstream/demos/en/breadcrumbs/basic.tsx) |
| [Button](../../demos/materials/heroui/index.html?demo=button) | [源码](../../demos/materials/heroui/source/upstream/demos/en/button/basic.tsx) |
| [ButtonGroup](../../demos/materials/heroui/index.html?demo=button-group) | [源码](../../demos/materials/heroui/source/upstream/demos/en/button-group/basic.tsx) |
| [Calendar](../../demos/materials/heroui/index.html?demo=calendar) | [源码](../../demos/materials/heroui/source/upstream/demos/en/calendar/basic.tsx) |
| [Checkbox](../../demos/materials/heroui/index.html?demo=checkbox) | [源码](../../demos/materials/heroui/source/upstream/demos/en/checkbox/basic.tsx) |
| [CheckboxGroup](../../demos/materials/heroui/index.html?demo=checkbox-group) | [源码](../../demos/materials/heroui/source/upstream/demos/en/checkbox-group/basic.tsx) |
| [Chip](../../demos/materials/heroui/index.html?demo=chip) | [源码](../../demos/materials/heroui/source/upstream/demos/en/chip/basic.tsx) |
| [CloseButton](../../demos/materials/heroui/index.html?demo=close-button) | [源码](../../demos/materials/heroui/source/upstream/demos/en/close-button/default.tsx) |
| [ColorArea](../../demos/materials/heroui/index.html?demo=color-area) | [源码](../../demos/materials/heroui/source/upstream/demos/en/color-area/basic.tsx) |
| [ColorField](../../demos/materials/heroui/index.html?demo=color-field) | [源码](../../demos/materials/heroui/source/upstream/demos/en/color-field/basic.tsx) |
| [ColorPicker](../../demos/materials/heroui/index.html?demo=color-picker) | [源码](../../demos/materials/heroui/source/upstream/demos/en/color-picker/basic.tsx) |
| [ColorSlider](../../demos/materials/heroui/index.html?demo=color-slider) | [源码](../../demos/materials/heroui/source/upstream/demos/en/color-slider/basic.tsx) |
| [ColorSwatch](../../demos/materials/heroui/index.html?demo=color-swatch) | [源码](../../demos/materials/heroui/source/upstream/demos/en/color-swatch/basic.tsx) |
| [ColorSwatchPicker](../../demos/materials/heroui/index.html?demo=color-swatch-picker) | [源码](../../demos/materials/heroui/source/upstream/demos/en/color-swatch-picker/basic.tsx) |
| [ComboBox](../../demos/materials/heroui/index.html?demo=combo-box) | [源码](../../demos/materials/heroui/source/upstream/demos/en/combo-box/default.tsx) |
| [DateField](../../demos/materials/heroui/index.html?demo=date-field) | [源码](../../demos/materials/heroui/source/upstream/demos/en/date-field/basic.tsx) |
| [DatePicker](../../demos/materials/heroui/index.html?demo=date-picker) | [源码](../../demos/materials/heroui/source/upstream/demos/en/date-picker/basic.tsx) |
| [DateRangePicker](../../demos/materials/heroui/index.html?demo=date-range-picker) | [源码](../../demos/materials/heroui/source/upstream/demos/en/date-range-picker/basic.tsx) |
| [Description](../../demos/materials/heroui/index.html?demo=description) | [源码](../../demos/materials/heroui/source/upstream/demos/en/description/basic.tsx) |
| [Disclosure](../../demos/materials/heroui/index.html?demo=disclosure) | [源码](../../demos/materials/heroui/source/upstream/demos/en/disclosure/custom-styles.tsx) |
| [DisclosureGroup](../../demos/materials/heroui/index.html?demo=disclosure-group) | [源码](../../demos/materials/heroui/source/upstream/demos/en/disclosure-group/custom-styles.tsx) |
| [Drawer](../../demos/materials/heroui/index.html?demo=drawer) | [源码](../../demos/materials/heroui/source/upstream/demos/en/drawer/basic.tsx) |
| [Dropdown](../../demos/materials/heroui/index.html?demo=dropdown) | [源码](../../demos/materials/heroui/source/upstream/demos/en/dropdown/default.tsx) |
| [ErrorMessage](../../demos/materials/heroui/index.html?demo=error-message) | [源码](../../demos/materials/heroui/source/upstream/demos/en/error-message/basic.tsx) |
| [FieldError](../../demos/materials/heroui/index.html?demo=field-error) | [源码](../../demos/materials/heroui/source/upstream/demos/en/field-error/basic.tsx) |
| [Fieldset](../../demos/materials/heroui/index.html?demo=fieldset) | [源码](../../demos/materials/heroui/source/upstream/demos/en/fieldset/basic.tsx) |
| [Form](../../demos/materials/heroui/index.html?demo=form) | [源码](../../demos/materials/heroui/source/upstream/demos/en/form/basic.tsx) |
| [Input](../../demos/materials/heroui/index.html?demo=input) | [源码](../../demos/materials/heroui/source/upstream/demos/en/input/basic.tsx) |
| [InputGroup](../../demos/materials/heroui/index.html?demo=input-group) | [源码](../../demos/materials/heroui/source/upstream/demos/en/input-group/default.tsx) |
| [InputOTP](../../demos/materials/heroui/index.html?demo=input-otp) | [源码](../../demos/materials/heroui/source/upstream/demos/en/input-otp/basic.tsx) |
| [Kbd](../../demos/materials/heroui/index.html?demo=kbd) | [源码](../../demos/materials/heroui/source/upstream/demos/en/kbd/basic.tsx) |
| [Label](../../demos/materials/heroui/index.html?demo=label) | [源码](../../demos/materials/heroui/source/upstream/demos/en/label/basic.tsx) |
| [Link](../../demos/materials/heroui/index.html?demo=link) | [源码](../../demos/materials/heroui/source/upstream/demos/en/link/basic.tsx) |
| [ListBox](../../demos/materials/heroui/index.html?demo=list-box) | [源码](../../demos/materials/heroui/source/upstream/demos/en/list-box/with-sections.tsx) |
| [Meter](../../demos/materials/heroui/index.html?demo=meter) | [源码](../../demos/materials/heroui/source/upstream/demos/en/meter/basic.tsx) |
| [Modal](../../demos/materials/heroui/index.html?demo=modal) | [源码](../../demos/materials/heroui/source/upstream/demos/en/modal/default.tsx) |
| [NumberField](../../demos/materials/heroui/index.html?demo=number-field) | [源码](../../demos/materials/heroui/source/upstream/demos/en/number-field/basic.tsx) |
| [Pagination](../../demos/materials/heroui/index.html?demo=pagination) | [源码](../../demos/materials/heroui/source/upstream/demos/en/pagination/basic.tsx) |
| [Popover](../../demos/materials/heroui/index.html?demo=popover) | [源码](../../demos/materials/heroui/source/upstream/demos/en/popover/basic.tsx) |
| [ProgressBar](../../demos/materials/heroui/index.html?demo=progress-bar) | [源码](../../demos/materials/heroui/source/upstream/demos/en/progress-bar/basic.tsx) |
| [ProgressCircle](../../demos/materials/heroui/index.html?demo=progress-circle) | [源码](../../demos/materials/heroui/source/upstream/demos/en/progress-circle/basic.tsx) |
| [RadioGroup](../../demos/materials/heroui/index.html?demo=radio-group) | [源码](../../demos/materials/heroui/source/upstream/demos/en/radio-group/basic.tsx) |
| [RangeCalendar](../../demos/materials/heroui/index.html?demo=range-calendar) | [源码](../../demos/materials/heroui/source/upstream/demos/en/range-calendar/basic.tsx) |
| [ScrollShadow](../../demos/materials/heroui/index.html?demo=scroll-shadow) | [源码](../../demos/materials/heroui/source/upstream/demos/en/scroll-shadow/default.tsx) |
| [SearchField](../../demos/materials/heroui/index.html?demo=search-field) | [源码](../../demos/materials/heroui/source/upstream/demos/en/search-field/basic.tsx) |
| [Select](../../demos/materials/heroui/index.html?demo=select) | [源码](../../demos/materials/heroui/source/upstream/demos/en/select/default.tsx) |
| [Separator](../../demos/materials/heroui/index.html?demo=separator) | [源码](../../demos/materials/heroui/source/upstream/demos/en/separator/basic.tsx) |
| [Sheet](../../demos/materials/heroui/index.html?demo=sheet) | [源码](../../demos/materials/heroui/source/upstream/demos/en/sheet/basic.tsx) |
| [Skeleton](../../demos/materials/heroui/index.html?demo=skeleton) | [源码](../../demos/materials/heroui/source/upstream/demos/en/skeleton/basic.tsx) |
| [Slider](../../demos/materials/heroui/index.html?demo=slider) | [源码](../../demos/materials/heroui/source/upstream/demos/en/slider/default.tsx) |
| [Spinner](../../demos/materials/heroui/index.html?demo=spinner) | [源码](../../demos/materials/heroui/source/upstream/demos/en/spinner/basic.tsx) |
| [Surface](../../demos/materials/heroui/index.html?demo=surface) | [源码](../../demos/materials/heroui/source/upstream/demos/en/surface/basic.tsx) |
| [Switch](../../demos/materials/heroui/index.html?demo=switch) | [源码](../../demos/materials/heroui/source/upstream/demos/en/switch/basic.tsx) |
| [Table](../../demos/materials/heroui/index.html?demo=table) | [源码](../../demos/materials/heroui/source/upstream/demos/en/table/basic.tsx) |
| [Tabs](../../demos/materials/heroui/index.html?demo=tabs) | [源码](../../demos/materials/heroui/source/upstream/demos/en/tabs/basic.tsx) |
| [TagGroup](../../demos/materials/heroui/index.html?demo=tag-group) | [源码](../../demos/materials/heroui/source/upstream/demos/en/tag-group/basic.tsx) |
| [TextArea](../../demos/materials/heroui/index.html?demo=text-area) | [源码](../../demos/materials/heroui/source/upstream/demos/en/textarea/basic.tsx) |
| [TextField](../../demos/materials/heroui/index.html?demo=text-field) | [源码](../../demos/materials/heroui/source/upstream/demos/en/textfield/basic.tsx) |
| [TimeField](../../demos/materials/heroui/index.html?demo=time-field) | [源码](../../demos/materials/heroui/source/upstream/demos/en/time-field/basic.tsx) |
| [Toast](../../demos/materials/heroui/index.html?demo=toast) | [源码](../../demos/materials/heroui/source/upstream/demos/en/toast/default.tsx) |
| [ToggleButton](../../demos/materials/heroui/index.html?demo=toggle-button) | [源码](../../demos/materials/heroui/source/upstream/demos/en/toggle-button/basic.tsx) |
| [ToggleButtonGroup](../../demos/materials/heroui/index.html?demo=toggle-button-group) | [源码](../../demos/materials/heroui/source/upstream/demos/en/toggle-button-group/basic.tsx) |
| [Toolbar](../../demos/materials/heroui/index.html?demo=toolbar) | [源码](../../demos/materials/heroui/source/upstream/demos/en/toolbar/basic.tsx) |
| [Tooltip](../../demos/materials/heroui/index.html?demo=tooltip) | [源码](../../demos/materials/heroui/source/upstream/demos/en/tooltip/basic.tsx) |
| [Typography](../../demos/materials/heroui/index.html?demo=typography) | [源码](../../demos/materials/heroui/source/upstream/demos/en/typography/default.tsx) |
