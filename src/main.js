import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootStrapVue, { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSimpleAlert from 'vue-simple-alert'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(BootstrapVue)
Vue.use(VueSimpleAlert)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
