const bot = require('../../../services/blog.js')
 module.exports = {
   async getArticles (req, res, next) {
     try {
       console.log('get index before blog.js' )
      const articles = await bot.getArticles()
      res.send( articles )

      console.log('get indexbefore blog.js')
    } catch (error) {
      next(error)
    }
  },
  async getArticle (req, res, next) {
    try {
      const atricleId = req.params.id
      console.log('get show before blog.js' + atricleId)
     const article = await bot.getArticle(atricleId)
     res.send( article)
   } catch (error) {
     next(error)
   }
 }
}
