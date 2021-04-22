import back from '@/services/Back.js'

export default {
  methods: {
    async newArticle () {
      try {
        this.checked = 'loading'
        const article = await back.postArticle(this.article)
        this.checked = 'saved'
        await this.timeout(1000)
        this.checked = 'save'
        this.$router.push({ name: 'ShowArticle', params: { id: article.id } })
      } catch {
        this.checked = 'error'
        await this.timeout(5000)
        this.checked = 'save'
      }
    }
  }
}
