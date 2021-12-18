import back from '@/services/Back.js'

export default {
  methods: {
    async getArticle () {
      this.article = await back.getArticle(this.id)
      document.title = this.article.title
    },
    async deleteArticle (id, title) {
      this.$confirm(
        title,
        'Are you sure',
        'warning'
      ).then(() => {
        back.deleteArticle(id)
        return this.$router.push({ name: 'Articles' })
      })
    }
  },
  created: function () {
    this.getArticle()
  }
}
