<template>
  <div class="bg-transparent text-dark">
  <!-- <add-blog>  </add-blog> -->
  <app-header> </app-header>
  <router-view> </router-view>

  </div>
</template>

<script>

// import addBlog from './components/addBlog.vue';
// import showBlog from './components/showBlog.vue';
// import listBlogs from './components/listBlogs.vue';
import Header from './components/Header.vue';



export default {
  components: {
    // 'list-blog': listBlogs,
    // 'show-blog': showBlog
    'app-header': Header


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
