const blogController = require('./v1/controller/blogController.js')
const testing = require('../testing.js')
testing.init()
testing.mockBlogApi()


module.exports = (app) => {
  app.get('/api/v1/articles', blogController.getArticles )
  app.get('/api/v1/articles/:id', blogController.getArticle )
  app.put('/api/v1/articles/:id', blogController.updateArticle)
  app.post('/api/v1/articles', blogController.createArticle)
  app.delete('/api/v1/articles/:id', blogController.destroyArticle)

  app.use((error, req, res, next) => {
    console.error(error.message)
    console.error(JSON.stringify(error.response.data))

    res.status(500).send({
      message: error.message || error,
      errorData: error.response.data
    })
  })
}
