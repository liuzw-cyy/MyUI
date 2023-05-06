import Vue from 'vue';
import myui from '../../src/index.js';

export default ({
  Vue,
  options,
  router
}) => {
  Vue.mixin({
    mounted() {
      Vue.use(myui);
    },
  });
};