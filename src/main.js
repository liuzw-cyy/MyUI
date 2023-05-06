import Vue from 'vue';
import App from './App.vue';
import myui from '../src/index.js';
Vue.use(myui);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
