const axios = require('axios')
const apiUrl = 'http://localhost:3000/api/v1'
const caseStyles = require('./caseStyles.js')


const blogUrls = {
  articles: `${apiUrl}/articles`,
  article(id) {
    return `${this.articles}/${id}`
  },
  articlesPaginated (search, page, per) {
  return `${this.articles}?page=${page}&per=${per}&search=${search}`
}

}
 module.exports = {
  async getArticles(search, page, per) {
    search = search || ''
    page = page || 0
    per =  per || 15

    const res = await axios.get(blogUrls.articlesPaginated(search, page, per))
    const articles = res.data.articles.map(article => caseStyles.convertKeysToCamel(article))
    const nbPages = res.data.meta.nb_pages
    return {articles: articles, meta: { page, per, nbPages, search } }
  },
  async getArticle(articleId) {
    const { data } = await axios.get(blogUrls.article(articleId))
    return caseStyles.convertKeysToCamel(data)
  },
  async updateArticle (articleId, article) {
    const body = { article: caseStyles.convertKeysToSnake(article) }
    const { data } = await axios.put(blogUrls.article(articleId), body)
    return caseStyles.convertKeysToCamel(data)
  },
  async createArticle ( article) {
    const body = { article: caseStyles.convertKeysToSnake(article) }
    const { data } = await axios.post(blogUrls.articles, body)
    return caseStyles.convertKeysToCamel(data)
  },
  async destroyArticle (articleId, article) {
    const body = { article: caseStyles.convertKeysToSnake(article) }
    const { data } = await axios.delete(blogUrls.article(articleId), body)
    return caseStyles.convertKeysToCamel(data)
  }
}
