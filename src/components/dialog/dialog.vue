<template>
  <transition name="dialog-fade">
    <!-- 遮罩 -->
    <!-- v-show保证对话框的显示和隐藏 -->
    <div
      class="my-dialog--wrapper"
      v-show="visiable"
      @click.self="closeDialog"
    >
      <div
        :class="['my-dialog', mimicry ? 'mimicry' : '']"
        :style="{ width: width, 'margin-top': top }"
      >
        <div class="my-dialog--header">
          <!-- 作用域插槽 -->
          <slot :title="title">
            <span class="my-dialog--title">{{ title }}</span>
          </slot>
        </div>
        <div class="my-dialog--body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="my-dialog--footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "my-dialog",
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("update:visiable", false); //传递给父组件，然后再传回来
    },
  },
  components: {},
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visiable: {
      type: Boolean,
      default: false,
    },
    mimicry: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "../../styles/dialog.scss";
</style>