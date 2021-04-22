var express = require('express')
var router = express.Router()
const blogController = require('./v1/controller/blogController.js')

router.get('/api/articles', blogController.getArticles )
router.get('/api/articles/:id', blogController.getArticle )
router.put('/api/articles/:id', blogController.updateArticle)
router.post('/api/articles', blogController.createArticle)
router.delete('/api/articles/:id', blogController.destroyArticle)



module.exports = router
