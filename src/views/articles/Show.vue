<template lang="html">
  <div id="single-article" class="mt-3 container">

    <div class="d-flex">
      <div class="p-2">
        <router-link :to="{ name: 'Articles' }" class="mb-5 back-to-index btn btn-outline-dark">
          <i class="fa fa-backward mr-1" aria-hidden="true"></i>
          Back
        </router-link>
      </div>

      <div class="p-2">
        <router-link :to="routeToEdit(article.id)"  class="mb-5 ml-3 btn btn-info">
          <i class="fa fa-pencil-square mr-2" aria-hidden="true"></i>
          Edit
        </router-link>
      </div>

      <div class="ml-auto p-2">
        <button type="button" class="btn btn-warning deleteArticle mb-2" @click='deleteArticle(article.id, article.title)'>
          <i class="fas fa-trash"></i>
          Delete
        </button>
      </div>
    </div>

    <h1>{{ article.title }}</h1>

    <article >
      {{ article.content }}
    </article>

    <p>language: {{ article.language }}</p>
    <p>Categories:</p>

    <ul>
      <li>{{ article.categories }}</li>
    </ul>

    <router-link to='/articles/new' exact class="text-decoration-none btn btn-info" type="button">
      <i class="fa fa-file-text mr-2" aria-hidden="true"></i>
      New Article
    </router-link>
  </div>
</template>

<script>
import showArticle from '@/mixins/articles/ShowArticle.js'

export default {
  data () {
    return {
      id: this.$route.params.id,
      article: {}
    }
  },
  mixins: [showArticle],
  methods: {
    routeToEdit (id) {
      return { name: 'UpdateArticle', params: { id: id } }
    }
  }
}
</script>

<style lang="css" scoped>
#single-article{
  max-width: 960px;
  margin: 0 auto 80px auto;
  padding: 20px;
  border: 1px outset #aaa;
  background: #fff;
}
</style>
