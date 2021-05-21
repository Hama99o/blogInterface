const bot = require('../../../services/blog.js')
 module.exports = {
   async getArticles (req, res, next) {
     try {
      const search = req.query.search ? encodeURIComponent(req.query.search) : null
      const page = req.query.page
      const per = req.query.per
      const articles = await bot.getArticles(search, page, per)
      res.send( articles )
    } catch (error) {
      next(error)
    }
  },
  async getArticle (req, res, next) {
    try {
      const atricleId = req.params.id
      const article = await bot.getArticle(atricleId)
      res.send(article)
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
      res.status(200).send()
    } catch (error) {
      next(error)
    }
  }
}
