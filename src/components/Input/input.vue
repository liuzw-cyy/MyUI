<template>
  <div class="input">
    <textarea
      class="my-input"
      :cols="cols"
      :rows="rows"
      v-if="type == 'textarea'"
    ></textarea>
    <input
      class="my-input"
      :type="currentType"
      :class="inputClass"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @blur="handleBlur"
      v-model="currentValue"
      v-else
      ref="input"
    />
    <span
     v-show="type=='password'"
      class="iconfont suffixIcon"
      :class="{
        'icon-yanjing_yincang': isHide,
        'icon-yanjing_xianshi': isShow,
      }"
      @click="changeyes"
    ></span>
    <span
      class="iconfont icon-chahao suffixIcon"
      v-if="clearable && currentValue && !disabled"
      @click="clearValue"
    ></span>
  </div>
</template>

<script>
import { check } from "../../utils/checkone";
import Emitter from "../../mixins/emitter";
export default {
  name: "my-input",
  data() {
    return {
      currentValue: this.value,
      currentType:this.type,
      isShow:false,
      isHide:true
    };
  },
  mixins:[Emitter],
  watch: {
    value(newvalue) {
      this.currentValue = newvalue;
    },
  },
  computed: {
    inputClass() {
      const prefix = "my-input";
      return {
        [`${prefix}__size-${this.size}`]: true,
        [`${prefix}__type-${this.type}`]: true,
        [`${prefix}__disabled-${this.disabled}`]: true,
      };
    },
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    size: {
      validator(value) {
        return check(value, ["small", "large", "default"]);
      },
      default: "default",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否可清空
    clearable: {
      type: Boolean,
      default: false,
    },
    //textarea的列数和行数
    cols: {
      type: String,
      default: "24",
    },
    rows: {
      type: String,
      default: "2",
    },
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch('my-form-item','form-change',value)
    },
    handleBlur(){
      this.dispatch('my-form-item','form-blur',this.currentValue);
    },
    changeyes() {
      this.isShow = !this.isShow;
      this.isHide = !this.isHide;
      if (this.isShow) {
        this.currentType = "text";
      } else {
        this.currentType = "password";
      }
    },
    clearValue() {
      this.currentValue = "";
      this.$emit("input", this.currentValue);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/input.scss";
</style>


