# Button 按钮
::: tip 简介
最朴实无华的组件，组件库的核心，MyUI 为您提供了多种属性选择，供您在各种开发环境下运行，您只需要设置相应的参数即可。
:::

### 默认按钮

::: demo
```html
<my-button type="default">按钮</my-button>
<my-button type="primarywhite">按钮</my-button>
<my-button type="primarygold">按钮</my-button>
<my-button type="successwhite">按钮</my-button>
<my-button type="successgold">按钮</my-button>
<my-button type="dangerwhite">按钮</my-button>
<my-button type="dangergold">按钮</my-button>
```
:::

### 圆角按钮
::: demo
```html
<my-button type="default" round>按钮</my-button>
<my-button type="primarywhite" round>按钮</my-button>
<my-button type="primarygold" round>按钮</my-button>
<my-button type="successwhite" round>按钮</my-button>
<my-button type="successgold" round>按钮</my-button>
<my-button type="dangerwhite" round>按钮</my-button>
<my-button type="dangergold" round>按钮</my-button>
```
:::

### 按钮禁用
按钮不可用状态。

::: demo
```html
<my-button type="default" disabled>按钮</my-button>
<my-button type="primarywhite" disabled>按钮</my-button>
<my-button type="primarygold" disabled>按钮</my-button>
<my-button type="successwhite" disabled>按钮</my-button>
<my-button type="successgold" disabled>按钮</my-button>
<my-button type="dangerwhite" disabled>按钮</my-button>
<my-button type="dangergold" disabled>按钮</my-button>
```
:::

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

::: demo
```html
<my-button type="default" icon="icon-shoucang">收藏</my-button>
<my-button type="primarywhite" icon="icon-sousuo">搜索</my-button>
<my-button type="primarygold" icon="icon-youjian">邮件</my-button>
<my-button type="primarygold" circle icon="icon-jinggao"></my-button>
<my-button type="successgold" circle icon="icon-changyonggoupiaorenshanchu"></my-button>
<my-button type="dangerwhite" circle icon="icon-tixing"></my-button>
```
:::

### 不同大小的按钮
::: demo
```html
<my-button type="default" size="large">按钮</my-button>
<my-button type="primarywhite" size="medium">按钮</my-button>
<my-button type="successwhite" size="small">按钮</my-button>
<my-button type="dangerwhite" size="mini">按钮</my-button>
```
:::

### 加载按钮
点击按钮后进行数据加载操作，在按钮上显示加载状态。

::: demo
```html
<my-button type="default" :loading="true">按钮</my-button>
<my-button type="primarywhite" :loading="true">按钮</my-button>
<my-button type="primarygold" :loading="true">按钮</my-button>
<my-button type="successwhite" :loading="true">按钮</my-button>
<my-button type="successgold" :loading="true">按钮</my-button>
<my-button type="dangerwhite" :loading="true">按钮</my-button>
<my-button type="dangergold" :loading="true">按钮</my-button>
```
:::

### Attributes

| 参数          | 类型   | 说明   | 可选值 | 默认值 |
| ------------ | ------ | ------| ------| ----- |
| type      | String | 按钮类型   | default 、 primarywhite、 primarygold 、 successgold 、 successwhite 、 dangerwhite 、 dangergold | default |
| size | String | 按钮大小   | large、medium、small、mini | medium |
| icon | String | 按钮图标 |  | '' |
| round  | Boolean | 是否圆角按钮   |  | false |
| circle  | Boolean | 是否圆形按钮 |  | false |
| disabled  | Boolean | 是否禁用 |  | false |
| loading  | Boolean | 是否加载中 |  | false |