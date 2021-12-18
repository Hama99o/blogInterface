import back from '@/services/Back.js'

export default {
  methods: {
    async newArticle () {
      this.checked = 'loading'
      const article = await back.postArticle(this.article)
      if (article.message) {
        this.errors = article
        this.checked = 'error'
        await this.timeout(5000)
        this.checked = 'save'
      } else {
        this.checked = 'saved'
        await this.timeout(1000)
        this.checked = 'save'
        this.$router.push({ name: 'ShowArticle', params: { id: article.id } })
      }
    }
  }
}
