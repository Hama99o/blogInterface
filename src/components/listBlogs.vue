<template>
  <div id="show-blogs" >
    <input type="text" v-model="search" placeholder="searching box" >
    <h1>All List Blog </h1>
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog" >
      <h2 >{{blog.title}}</h2>
      <article>
        {{blog.body}}
      </article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data () {
    return{
      blogs:[],
      search:''
    }
  },
  methods: {

  },
  created() {
   this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
     this.blogs = data.body.slice(0,2);
   });
 },
 computed:{

 },
 mixins:[searchMixin]
 
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
