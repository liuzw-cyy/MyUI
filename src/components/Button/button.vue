<template>
  <button
    :class = "[
      'my-button',
      `my-button--${type}`,
      `my-button--${size}`,
      { round: round },
      { circle: circle },
      { disabled: disabled },
      {loading: loading},
      {[`my-button-loading-layer`]: loading}
    ]"
    :disabled = "disabled || loading"
    @click="handleClick"
  >
    <div class="mask" v-if="disabled"></div>
    <!-- 加载中 -->
    <i
      class="iconfont icon-loading"
      :class="{[`my-button-loading`]: true}"
      v-if="loading"
    />
    <!-- 避免图标冲突 -->
    <i :class="['iconfont', `${icon}`]" v-if="!loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { check } from "../../utils/checkone";
export default {
  name: "my-button",
  props: {
    type: {
      type: String,
      default: "default",
      validator(value) {
        return check(value, [
            "default",
            "primarywhite",
            "primarygold",
            "successwhite",
            "successgold",
            "dangerwhite",
            "dangergold"
          ])
        }
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return check(value, [
          "large",
          "medium",
          "small",
          "mini"
        ])
      }
    },
    // 圆角按钮
    round: {
      type: Boolean,
    },
    // 椭圆按钮
    circle: {
      type: Boolean,
    },
    // disabled禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 图标
    icon: {
      type: String
    },
    // loading加载中
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
    }
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "../../styles/button.scss";
</style>