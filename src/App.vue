<template>
  <div class="bg-transparent text-dark">
  <!-- <add-blog>  </add-blog> -->
  <app-header> </app-header>
  <router-view> </router-view>
  <app-footer> </app-footer>

  </div>
</template>

<script>

import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer



  },
  data () {
    return{

    }
  },
  methods: {

  }
}
</script>

<style>
body{
  background-color:rgb(250, 28, 65);
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
