<template lang="html">
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article >
      {{blog.content}}
    </article>
    <p>Author: {{ blog.author }}</p>
    <p>Categories:</p>
    <ul>
       <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data(){
    return{
      id: this.$route.params.id,
      blog:{}
    }
  },
  created() {
   this.$http.get('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post/' + this.id + '.json').then(function(data){
     return data.json();
   }).then(function(data){
     this.blog = data;
   });
  }
}
</script>

<style lang="css" scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>
