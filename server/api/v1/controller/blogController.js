const bot = require('../../../services/blog.js')
 module.exports = {
   async getArticles (req, res, next) {
     try {
      const articles = await bot.getArticles()
      res.send( articles )

    } catch (error) {
      next(error)
    }
  },
  async getArticle (req, res, next) {
    try {
      const atricleId = req.params.id
      const article = await bot.getArticle(atricleId)
      res.send( article)
    } catch (error) {
      next(error)
    }
  },
  async updateArticle (req, res, next) {
    try {
      const atricleId = req.params.id
      const article = await bot.updateArticle(atricleId, req.body)
      res.send( article )
    } catch (error) {
      next(error)
    }
  },
  async createArticle (req, res, next) {
    try {
      const article = await bot.createArticle(req.body)
      res.send( article )
    } catch (error) {
      next(error)
    }
  },
  async destroyArticle (req, res, next) {
    try {
      const atricleId = req.params.id
      const article = await bot.destroyArticle(atricleId, req.body)
      res.send( article )
    } catch (error) {
      next(error)
    }
  }
}
