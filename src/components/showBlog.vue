<template>
  <div id="show-blog">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog" v-bind:key="blog" >
      <h2>{{blog.title}}</h2>
      <article>
        {{blog.body}}
      </article>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return{
      blogs:[]
    }
  },
  methods: {

  },
  created() {
   this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
     this.blogs = data.body.slice(0,10);
   });
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
