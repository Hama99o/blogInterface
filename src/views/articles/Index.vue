<template>
  <div class="container" id="show-articles" >
    <div class="my-3 position-relative ">

      <input  class="filter pl-3 pr-5 py-4 w-100 searchArticle form-control"
              v-model="search"
              placeholder="Search a Article" id="search-input" type="search" />

      <div class="position-absolute search-icon px-3 py-3">
        <i class="fas fa-search"></i>
      </div>
    </div>

    <div class="d-flex">
      <div class="">
        <pagination :nbPages="nbPages"
                    :page="page"
                    :per="per"
                    @goToPage="goToPage">
        </pagination>
      </div>
      <div class="ml-auto p-2">
        <router-link :to="{ name: 'NewArticle' }" class="text-decoration-none btn btn-info" type="button">
          <i class="fa fa-file-text mr-2" aria-hidden="true"></i>
          New Article
        </router-link>
      </div>
    </div>

    <h1 class="mt-4">All Articles</h1>

    <div v-for="article in articles" class="single-article" v-bind:key="article.id" >
      <router-link :to="{ name: 'ShowArticle', params: { id: article.id } }" class="text-decoration-none text-dark"><h2>{{article.title}}</h2>
        <article >
          {{article.content.substring(0, 200) + "..."}}
        </article>
      </router-link>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/layout/Pagination'
import back from '@/services/Back.js'

export default {
  components: { Pagination },
  data () {
    return {
      allData: [],
      articles: [],
      search: '',
      nbPages: 0,
      page: 0,
      per: 15,
      isInit: false,
      retreiveWaitTime: 1,
      retreiveTimeout: null
    }
  },
  methods: {
    async getArticles () {
      this.allData = await back.getArticles(this.search, this.page, this.per)
      this.articles = this.allData.articles
      this.nbPages = this.allData.meta.nbPages
    },
    defaultArticles () {
      this.getArticles(this.search, this.page, this.per)
    },
    articleAfterWaitTime () {
      clearTimeout(this.retreiveTimeout)

      this.retreiveTimeout = setTimeout(() => {
        this.page = 0
        this.defaultArticles()
        this.retreiveTimeout = null
      }, this.retreiveWaitTime * 1000)
    },
    goToPage (pageIndex) {
      this.page = pageIndex
      this.defaultArticles()
    }
  },
  created: function () {
    this.getArticles()
    document.title = 'Articles'
  },
  async mounted () {
    this.search = this.$route.query.search || this.search
    this.page = this.$route.query.page || this.page
    this.per = this.$route.query.per || this.per
    await this.defaultArticles()
    this.isInit = true
  },
  watch: {
    search () {
      if (this.isInit) {
        this.articleAfterWaitTime()
      }
    }
  }
}
</script>

<style>
.single-article{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #fff;
}
.search-icon {
  top: 0;
  right: 0;
}

</style>
