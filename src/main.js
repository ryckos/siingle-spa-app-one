import singleSpaVue from "single-spa-vue";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const vueOptions = {
  el: "#appOne",
  router,
  store,
  render: h => h(App)
};

// if (!window.singleSpaNavigate) { 
//   delete vueOptions.el;
//   new Vue(vueOptions).$mount('#appOne');
// }

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: vueOptions
});


export const bootstrap = vueLifecycles.bootstrap; 
export const mount = vueLifecycles.mount; 
export const unmount = vueLifecycles.unmount;

export default vueLifecycles;
