<template>
  <div id="add-blog" >
    <b-button  v-bind:to="'/'" class="mb-5 back " variant=" btn btn-outline-dark" exact>Back</b-button>
    <blog-form> </blog-form>
  </div>
</template>

<script>
import blogForm from './form.vue'
export default {
  components: {
    'blog-form': blogForm
  },
  data () {
    return {
      blog: {}
    }
  }
}
</script>

<style>
</style>
