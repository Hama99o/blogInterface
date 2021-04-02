import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import BootStrapVue from 'bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootStrapVue);


// Register routes
const router = new VueRouter({
    mode:'history',
    routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
