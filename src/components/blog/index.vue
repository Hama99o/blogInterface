<template>
  <div id="show-blogs" >
    <b-form-input size="sm" class="mr-sm-2 input" placeholder="Search" type="text" v-model="search" ></b-form-input>
    <h1>All Articles</h1>
    <div v-for="blog in filteredBlogs" class="single-blog" v-bind:key="blog.id" >
    <router-link v-bind:to="'/blog/'+ blog.id" class="text-decoration-none text-dark"><h2>{{blog.title}}</h2>
      <article >
        {{blog.content}}
      </article>
    </router-link>
    </div>
  </div>
</template>

<script>
  import searchMixin from '../../mixins/searchMixin'
  import createMixin from '../../mixins/createMixin'

  export default {
    data () {
      return{
        blogs:[],
        search:''
      }
    },
    methods: {

    },
    mixins:[searchMixin,createMixin]
  }
</script>

<style>

.input{
  margin-top: 40px;
  margin-bottom: 20px;

}
#show-blogs{
  max-width: 800px;
  margin: 0px auto;
  text-decoration: none;
  color:black;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: 	#F5F5F5;
}
</style>
