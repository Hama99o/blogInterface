<template>
  <div>
    <!-- <add-blog>  </add-blog> -->
    <show-blog>  </show-blog>
    <list-blog>  </list-blog>


  </div>
</template>

<script>

// import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlogs from './components/listBlogs.vue';


export default {
  components: {
    'list-blog': listBlogs,
    'show-blog': showBlog

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
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
