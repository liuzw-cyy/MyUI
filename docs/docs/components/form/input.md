# Input 输入框
:::tip 简介
通过鼠标或键盘输入字符。
:::


### 基本使用
::: demo
```html
<my-input v-model="input" placeholder="请输入内容"></my-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### 禁用输入框
::: demo 通过 `disabled` 属性指定是否禁用 input 组件
```html
<my-input v-model="input" placeholder="请输入内容" disabled></my-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::



### 可清空输入框
::: demo 使用 `clearable` 可输入框具有清空功能
```html
<my-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</my-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 不同尺寸的输入框
::: demo 通过设置不同的 `size` 属性可以设置输入框的大小
```html
<my-input v-model="input1" size="large" placeholder="请输入内容" ></my-input>
<my-input v-model="input2" size="default" placeholder="请输入内容"></my-input>
<my-input v-model="input3" size="small" placeholder="请输入内容"></my-input>
<script>
  export default {
    data() {
      return {
        input1: '',
        input2: '',
        input3: ''
      }
    }
  }
</script>
```
:::

### 密码框
::: demo 通过设置 `type="password"` 可以得到密码输入框
```html
<my-input
  placeholder="请输入密码"
  v-model="input"
  type="password">
</my-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 文本域
::: demo 文本域的大小可以通过 `rows` 属性设置
```html
<my-input
  rows="2"
  v-model="input"
  type="textarea">
</my-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### Attributes
|    属性  | 说明 | 类型 | 可选值 | 默认值 |
| -------- | -----| ----- | ------ | ------ |
| type    | 表单的类型 | string | text、password、textarea | text |
| disabled | 是否禁用表单 | boolean | ----- | false |
| clearable | 输入框是否可清空 | boolean | ----- | false |
| size | 表单的大小 | string | small、large、default | default |
| placeholder | 输入框占位文本| string | ----- |   ""   |
| value | 动态绑定的值 | string | ----- |   ""   |
| cols | textarea 的列数 | string | ----- | "24" |
| cols | textarea 的行数 | string | ----- | "2" |

