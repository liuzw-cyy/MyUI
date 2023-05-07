// 打包入口，组件导出
import Vue from 'vue';
import { Button } from "./components/Button";
import { Demo } from "./components/Demo";
Vue.config.productionTip = false;

const install = function (Vue, options = {}) {
  Vue.use(Button);
  Vue.use(Demo);
};

export default install;

