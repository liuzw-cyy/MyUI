// 打包入口，组件导出
import Vue from 'vue';
import { Button } from "./components/Button";
Vue.config.productionTip = false;

const install = function (Vue, options = {}) {
  Vue.use(Button);
};

export default install;

