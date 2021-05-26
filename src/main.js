import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import BootStrapVue, { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(BootStrapVue)

// Register routes
const router = new VueRouter({
  mode: 'history',
  routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
// vm.$mount('#app')
