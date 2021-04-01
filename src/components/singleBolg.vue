<template lang="html">
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article >
      {{blog.body}}
    </article>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data(){
    return{
      id: this.$route.params.id,
      blog:{},
        search:''
    }
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
      this.blog = data.body
    });
  },
  mixins:[searchMixin]
}
</script>

<style lang="css" scoped>
</style>
