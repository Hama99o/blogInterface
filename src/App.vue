<template>
  <div>
    <app-header v-bind:title="title"> </app-header>
    <app-ninjas v-bind:ninjas="ninjas"> </app-ninjas>
    <app-footer v-bind:copyright="copyright"> </app-footer>

    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';


export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Ninjas

  },
  data () {
    return {
      ninjas: [
        {name: 'Hama', speciality: 'Vue Components', show: false},
        {name: 'John', speciality: 'HTML Wizardry', show: false},
        {name: 'Peter', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ],
      title:'Hama Ninja',
      copyright: 'copyright 2021 Hama'
    }
  }
}
</script>
<style>

</style>
