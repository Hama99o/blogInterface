<template>
  <div id="show-blogs" >
    <input type="text" v-model="search" placeholder="searching box" >
    <h1>All Blog Articles</h1>
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog" >
    <router-link v-bind:to="'/blog/'+ blog.id"><h2>{{blog.title}}</h2></router-link>
      <article>
        {{blog.content}}
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
    this.$http.get('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post.json').then(function(data){
     return data.json();
   }).then(function(data){
     var blogsArray = []
     for(let key in data){
      data[key].id = key
      blogsArray.push(data[key])
     }
      this.blogs = blogsArray
   });
 },
 mixins:[searchMixin]
}
</script>

<style>
input{
  margin-top: 40px;
}
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
