import axios from 'axios'

const rootUrl = process.env.VUE_APP_BACKEND_URL

export default {
  created: function () {
    this.getArticle()
  },
  methods: {
    async getArticle () {
      if (this.$route.path !== '/add') {
        const { data } = await axios.get(`${rootUrl}api/v1/articles/${this.id}`)
        this.blog = data
      }
    },
    destroyed: async function () {
      if (confirm('are you sure?')) { await axios.delete(`${rootUrl}api/v1/articles/${this.id}`) }
      return this.$router.push({ path: '/' })
    },
    postOrPut: async function () {
      if (this.$route.path === '/add') {
        if (this.blog.title && this.blog.content) {
          this.loading = true
          await axios.post(`${rootUrl}api/v1/articles`, this.blog)
          this.loading = false
          this.submitted = true
        }
        this.errors = []
        if (!this.blog.title) {
          this.errors.push('title is empty')
        }
        if (!this.blog.content) {
          this.errors.push('content is empty')
        }
      } else {
        if (this.blog.title && this.blog.content) {
          await axios.put(`${rootUrl}api/v1/articles/${this.id}`, this.blog)
          this.submitted = true
        }
        this.errors = []
        if (!this.blog.title) {
          this.errors.push('title is empty')
        }
        if (!this.blog.content) {
          this.errors.push('content is empty')
        }
      }
    }
  }
}
