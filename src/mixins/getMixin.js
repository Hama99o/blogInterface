import back from '../services/back.js'

export default {
  async created() {
    if(this.$route.path != "/add" ) {
      const article = await back.getArticle(this.id)
      this.blog =  article
    }
  }
}
