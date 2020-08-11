import '@babel/polyfill'
import 'mutationobserver-shim'
import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/scss/argon.scss";
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
