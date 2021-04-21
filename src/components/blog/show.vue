<template lang="html">
  <div id="single-blog" class="mt-3">
    <div class="">
      <b-button  v-bind:to="'/'" class="mb-5 back-to-index" variant=" btn btn-outline-dark"  exact>Back</b-button>
      <b-button  v-bind:to="'/update/'+ id" class="mb-5 ml-3" variant="ml-3 btn btn-info" exact>Edit</b-button>
      <b-button variant="danger" class="mb-5 ml-3 btn btn-warning " v-on:click="destroyed">Delete</b-button>

    </div>

    <h1>{{blog.title}}</h1>
    <article >
      {{blog.content}}
    </article>
    <p>language: {{ blog.language }}</p>
    <p>Categories:</p>
    <ul>
      <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
    </ul>
    <b-button  v-bind:to="'/add'" class="mt-8" variant="btn btn-primary" exact>New Article</b-button>
  </div>
</template>

<script>
  import back from '../../mixins/back.js'

  export default {
    data(){
      return{
        id: this.$route.params.id,
        blog:{}
      }
    },
   mixins:[back]
  }
</script>

<style lang="css" scoped>
#single-blog{
  max-width: 960px;
  margin: 0 auto 80px auto;
  padding: 20px;
  border: 1px dotted #aaa;
  background: #F5F5F5;
}
</style>
