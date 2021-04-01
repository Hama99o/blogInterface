<template>
  <div id="show-blogs" >
    <input type="text" v-model="search" placeholder="searching box" >
    <h1>All Blog Articles</h1>
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog" >
      <h2 v-rainbow>{{blog.title | toUppercase }}</h2>
      <article>
        {{blog.body | snipped}}
      </article>
    </div>
  </div>
</template>

<script>

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
     this.blogs = data.body.slice(0,10);
   });
 },
 computed:{
   filteredBlogs:function(){
     return this.blogs.filter((blog)=>{
       return blog.title.match(this.search);
     });
   }
 },
 filters:{
   toUppercase(value){
     return value.toUpperCase();
   },
   'snipped':function(value){
     return value.slice(0,200)
   }
 },
 directives:{
   rainbow:{
     bind(el){
      el.style.color = 'grey';
     }
   }
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
