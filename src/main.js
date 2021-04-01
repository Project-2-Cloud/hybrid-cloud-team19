import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Banner from "vue-banner-better";
// use plugin,it will mount Banner and slide components globally
Vue.use(Banner);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
