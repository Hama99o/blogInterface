import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Use vue-resource package
Vue.use(VueResource);
//filters
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase()
})

//filters
Vue.filter('snipped',function(value){
  return value.slice(0,100)
})
new Vue({
  el: '#app',
  render: h => h(App)
})
