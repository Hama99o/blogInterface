<template>
  <div id="add-article" class="container" >
    <router-link :to="{ name: 'Articles' }" class="my-4 back-to-index btn btn-outline-dark">
      <i class="fa fa-backward mr-1" aria-hidden="true"></i>
      Back
    </router-link>

    <h2 class="text-center">New Article</h2>
    <article-form :initArticle="article"> </article-form>
  </div>
</template>

<script>
import articleForm from '@/components/articles/Form.vue'
import newArticle from '@/mixins/articles/NewArticle.js'

export default {
  components: { 'article-form': articleForm },
  data () {
    return {
      article: {
        title: '',
        content: '',
        language: '',
        categories: '',
        createdAt: null,
        updatedAt: null
      }
    }
  },
  mixins: [newArticle],
  created () {
    document.title = 'new Article'
  }
}
</script>

<style>
</style>
