<template lang="html">
  <div id="single-blog" class="mt-3">
    <div class="">
      <b-button variant="danger" class="mb-5 " v-on:click="destroyed">Destroy blog</b-button>
      <b-button  v-bind:to="'/update/'+ id" class="mb-5 ml-2" variant="success" exact>Edit blog</b-button>
    </div>

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
  import getMixin from '../../mixins/getMixin'
  export default {
    data(){
      return{
        id: this.$route.params.id,
        blog:{}
      }
    },
    methods:{
     destroyed: function(){
      if(confirm('are you sure?'))
      this.$http.delete('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post/' + this.id + '.json').then(function(){
        return this.$router.push({path: '/'});
      })
     }
   },
   mixins:[getMixin]
  }
</script>

<style lang="css" scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    border: 1px dotted #aaa;
    background: #F5F5F5;
}
</style>
