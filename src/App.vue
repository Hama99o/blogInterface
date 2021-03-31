<template>
  <div>
    <add-blog>  </add-blog>
    <show-blog>  </show-blog>

  </div>
</template>

<script>

import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';

export default {
  components: {
    'add-blog': addBlog,
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
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
