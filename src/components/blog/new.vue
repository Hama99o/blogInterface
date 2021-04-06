<template>
  <div id="add-blog" >
    <b-button  v-bind:to="'/'" class="mb-5 " variant=" btn btn-outline-dark" exact>Back</b-button>
    <blog-form> </blog-form>

    <div id="preview">
      <h3>Preview Blog </h3>
      <p> Blog title:{{blog.title}} </p>
      <p> Blog content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories</p>
      <ul>
        <li  v-for="category in blog.categories" v-bind:key="category">{{category}} </li>
      </ul>
      <p>Author:{{blog.author}}</p>

    </div>

  </div>
</template>

<script>
import blogForm from './form.vue'

export default {
  components:{
    'blog-form': blogForm
  },
  data () {
    return {
      blog:{}
    }
  }
}
</script>

<style>


</style>
