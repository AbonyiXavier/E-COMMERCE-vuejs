import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import EasySlider from "vue-easy-slider";
import VueCookie from "vue-cookie";

Vue.use(EasySlider);
Vue.use(VueCookie);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
