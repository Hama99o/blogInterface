const articlesController = require('./v1/articlesController.js')
const mockController = require('./v1/mockController.js')

mockController.init()
module.exports = (app) => {
  // Articles requests
  app.get('/api/v1/articles', articlesController.getArticles)
  app.get('/api/v1/articles/:id', articlesController.getArticle)
  app.put('/api/v1/articles/:id', articlesController.updateArticle)
  app.post('/api/v1/articles', articlesController.createArticle)
  app.delete('/api/v1/articles/:id', articlesController.destroyArticle)

  app.use((error, req, res, next) => {
    console.error(error.message)
    console.error(JSON.stringify(error.response.data))

    res.status(500).send({
      message: error.message || error,
      errorData: error.response.data
    })
  })
}
