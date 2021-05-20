const axios = require('axios')
const apiUrl = 'http://localhost:3000/api/v1'

const blogUrls = {
  articles: `${apiUrl}/articles`,
  article(id) {
    return `${articles}/${id}`
  }
}
 module.exports = {
  async getArticles() {
    const res = await axios.get(blogUrls.articles)
    return res.data
  },
  async getArticle(articleId) {
    const { data } = await axios.get(blogUrls.article(articleId))
    return await data
  },
  async updateArticle (articleId, article) {
    const body = article
    console.log(body)
    const { data } = await axios.put(blogUrls.article(articleId), body)
    return data
  },
  async createArticle ( article) {
    const body =  article
    const { data } = await axios.post(blogUrls.articles, body)
    return data
  },
  async destroyArticle (articleId, article) {
    const body = article
    console.log(body)
    const { data } = await axios.delete(blogUrls.article(articleId), body)
    return data
  }
}
