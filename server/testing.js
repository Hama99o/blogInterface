const MockAdapter = require('axios-mock-adapter')
const axios = require('axios')
 const factory = require('../tests/factory.js')

const blog = require('./services/blog.js')
var blogUrls = blog.blogUrls

var mock
const mockArticles = () => {
  articlesPaginated = blogUrls.articlesPaginated('', 0, 15)
  article =  new RegExp(blogUrls.article('.+?'))

  mock.onGet(article).reply(200, factory.article)
  mock.onGet(articlesPaginated).reply(200, { articles: factory.articles(), meta: { page: 0, per: 15, nb_pages: 3, search:'' }})
}
module.exports = {
  init () {
    mock = new MockAdapter(axios)
  },
  mockBlogApi () {
    mockArticles()
  }
}
