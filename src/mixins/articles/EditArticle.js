import back from '@/services/Back.js'

export default {
  methods: {
    async updateArticle () {
      this.checked = 'loading'
      const article = await back.putArticle(this.article)
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
    },
    async deleteArticle (id, title) {
      this.$confirm(
        title,
        'Are you sure',
        'warning'
      ).then(() => {
        back.deleteArticle(id)
        return this.$router.push({ name: 'Home' })
      })
    }
  }
}
