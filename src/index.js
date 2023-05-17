// 打包入口，组件导出
import Vue from 'vue';
import { Button } from "./components/Button";
import { Dialog } from "./components/Dialog";
import { Input } from "./components/Input";
Vue.config.productionTip = false;

const install = function (Vue, options = {}) {
  Vue.use(Button);
  Vue.use(Dialog);
  Vue.use(Input);
};

export default install;

