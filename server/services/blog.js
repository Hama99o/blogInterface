const axios = require('axios')
const caseStyles = require('./caseStyles.js')
const blogManager = require('../../config/blogManager.js')

var env = process.env.NODE_ENV
var blogUrl
var selfUrl

// TODO: the self url should be given by the server, because the ports are defined here
if (env === 'test') {
  blogUrl = 'http://hama99o.herokuapp.com'
  selfUrl = 'http://localhost:8083'
} else if (env === 'development') {
  blogUrl = blogManager.blogUrl
  selfUrl = blogManager.selfUrl
} else if (env === 'production') {
  blogUrl = blogManager.blogUrl
  selfUrl = blogManager.selfUrl
} else {
  throw `Unknown environment: "${env}"`
}
const blogApiUrl = `${blogUrl}/api/v1`
const blogUrls = {
  articles: `${blogApiUrl}/articles`,
  article(id) {
    return `${this.articles}/${id}`
  },
  articlesPaginated (search, page, per) {
    return `${this.articles}?page=${page}&per=${per}&search=${search}`
  }
}
 module.exports = {
  blogUrls,
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
