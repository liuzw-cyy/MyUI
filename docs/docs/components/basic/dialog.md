# Dialog 提示框
::: tip 简介
在保留当前页面状态的情况下，告知用户并承载相关操作。
:::

### 基本用法
弹出一个对话框，适合需要定制性更大的场景

::: demo 通过 `v-slot` 填入指定的插槽，实现对话的按钮功能。
```html
<template>
  <div id="app">
    <my-button type="primarygold" @click="visiable = true"
      >对话框dialog
    </my-button>
    <my-dialog title="MyUI提示您" :visiable.sync="visiable">
      <!-- .sync等同于 visiable="false" @update:visable,false -->
      你好，欢迎使用MyUI组件库，这是Dialog提示框。
      <template v-slot:footer>
        <my-button type="primarygold" @click="visiable = false" mimicry>
          确定
        </my-button>
        <my-button @click="visiable = false">取消</my-button>
      </template>
    </my-dialog>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        visiable: false,
        visiable1: false,
      };
    },
  };
</script>
```
:::


### 自定义内容
`Dialog` 组件中的内容可以是任意的，下面是应用了 `Input` 和 `Button` 组件的样例。

::: demo
```html
<div>
  <my-button type="primarygold" @click="visiable = true"
    >对话框dialog
  </my-button>
  <my-dialog title="MyUI提示您" :visiable.sync="visiable">
    <my-button type="dangerwhite">Dialog组件内按钮</my-button>
    <my-input v-model="input" placeholder="请输入内容"></my-input>
    <template v-slot:footer>
      <my-button type="default" @click="visiable = false">确认</my-button>
      <my-button type="default" @click="visiable = false">取消</my-button>
    </template>
  </my-dialog>
</div>


<script>
  export default {
    name: "App",
    data() {
      return {
        visiable: false,
        input: ''
      };
    },
  };
</script>
```
:::

### 嵌套的 Dialog
`Dialog` 组件内可以嵌套其他的 `Dialog` 组件。

::: demo
```html
<div>
  <my-button type="primarygold" @click="visiable1 = true">
    Dialog 组件嵌套使用
  </my-button>
  <my-dialog title="Dialog 组件嵌套" :visiable.sync="visiable1">
    <template v-slot:footer>
      <my-button type="primarygold" @click="visiable = true" mimicry
        >打开嵌套的 Dialog 提示框</my-button>
      <my-button @click="visiable1 = false">取消</my-button>
    </template>
    <my-dialog title="嵌套的 Dialog 提示框" :visiable.sync="visiable">
      这是嵌套的Dialog提示框。
      <template v-slot:footer>
        <my-button type="primarygold" @click="visiable = false" mimicry
          >确定</my-button>
        <my-button @click="visiable = false">取消</my-button>
      </template>
    </my-dialog>
  </my-dialog>
</div>


<script>
  export default {
    name: "App",
    data() {
      return {
        visiable: false,
        visiable1: false,
      };
    },
  };
</script>
```
:::


### Attribute
| 属性 | 类型 | 说明 | 可选值 | 默认值 |
| ---- | ------ | ------| ------| ----- |
| title | string | ----- | dialog 的标题 | 提示 |
| visiable | boolean | dialog 是否开始就展示在页面上 | ----- | false |
| width | string | dialog 的宽度 | ----- | 50% |
| top | string | dialog 与视窗顶部的距离 | ----- | 15vh |
| mimicry | boolean | dialog 的边框是否为圆角 | ----- | false |
