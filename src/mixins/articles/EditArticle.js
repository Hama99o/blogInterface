import back from '@/services/Back.js'

export default {
  methods: {
    async updateArticle () {
      try {
        this.checked = 'loading'
        await back.putArticle(this.article)
        this.checked = 'saved'
        await this.timeout(1000)
        this.checked = 'save'
        this.$router.push({ name: 'ShowArticle', params: { id: this.article.id } })
      } catch {
        this.checked = 'error'
        await this.timeout(5000)
        this.checked = 'save'
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
