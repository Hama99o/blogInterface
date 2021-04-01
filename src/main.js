import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// Use vue-resource package
Vue.use(VueResource);

// costom directives
Vue.directive('rainbow',{
  bind(el){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
})

// costom directives
Vue.directive('theme',{
  bind(el,binding){
    if (binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }else if (binding.value == 'narrow'){
        el.style.maxWidth = "560px"
    }else if (binding.arg =="column"){
      el.style.background = '#ddd';
      el.style.padding = "20px";
    }
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
