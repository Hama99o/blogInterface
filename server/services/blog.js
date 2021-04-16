const axios = require('axios')
 const apiUrl = 'https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app'


const blogUrls = {
  articles: `${apiUrl}/post.json`,
  article(id) {
    return `${apiUrl}/post/${id}.json`
  }
}
 module.exports = {
  async getArticles() {
    const res = await axios.get(blogUrls.articles)
    return res.data
  },
  async getArticle(articleId) {
    const { data } = await axios.get(blogUrls.article(articleId))
    const all_data = await data
    return all_data
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
  }
}
