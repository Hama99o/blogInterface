<template lang="html">
  <div id="add-article" class="container">

    <div class="d-flex my-4">
      <div class="p-2">
        <router-link :to="{ name: 'ShowArticle', params: { id: article.id } }" class="mb-5 back-to-index btn btn-outline-dark">
          <i class="fa fa-backward mr-1" aria-hidden="true"></i>
          Back
        </router-link>
      </div>

      <div class="ml-auto p-2">
        <button type="button" class="btn btn-warning deleteArticle mb-2" @click='deleteArticle(article.id, article.title)'>
          <i class="fas fa-trash"></i>
          Delete
        </button>
      </div>
    </div>

    <h2 class="text-center">Edit Article</h2>

    <article-form :initArticle="article"> </article-form>
  </div>
</template>

<script>
import back from '@/services/Back.js'
import articleForm from '@/components/articles/Form.vue'
import editArticle from '@/mixins/articles/EditArticle.js'

export default {
  components: {
    'article-form': articleForm
  },
  data () {
    return {
      id: this.$route.params.id,
      article: {}
    }
  },
  methods: {
    async getArticle () {
      this.article = await back.getArticle(this.id)
      document.title = this.article.title
    }
  },
  mixins: [editArticle],
  created () {
    this.getArticle()
  }
}
</script>

<style lang="css" scoped>
</style>
