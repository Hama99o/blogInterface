const MockAdapter = require('axios-mock-adapter')
const axios = require('axios')
const factory = require('../tests/factory.js')

const blog = require('./services/blog.js')
const blogUrls = blog.blogUrls

let mock
const mockArticles = () => {
  const articlesRegex = new RegExp(`${blogUrls.articles}(\\?.+?)?`)
  // const articlesPaginated = blogUrls.articlesPaginated('', 0, 15) # paginate mock is not working so we are using articlesRegex
  const articleRegex = new RegExp(blogUrls.article('.+?'))
//.passThrough()// for achieve real data
  mock.onGet(articleRegex).reply(200, factory.article)
  mock.onGet(articlesRegex).reply(200, { articles: factory.articles(), meta: { page: 0, per: 15, nb_pages: 3, search: '' } })
  mock.onPost(articlesRegex).reply(200, factory.article)
  mock.onPut(articleRegex).reply(200, factory.article)
  mock.onDelete(articleRegex).reply(200)
}
module.exports = {
  init () {
    mock = new MockAdapter(axios)
  },
  mockBlogApi () {
    mockArticles()
  }
}
