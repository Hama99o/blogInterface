import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import BootStrapVue from 'bootstrap-vue'


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
