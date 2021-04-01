import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

// Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
    routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
