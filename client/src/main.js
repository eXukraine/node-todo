import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'
import BootstrapVue from 'bootstrap-vue'
import { Navbar } from 'bootstrap-vue/es/components'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Navbar)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
