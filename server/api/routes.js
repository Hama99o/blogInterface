var express = require('express')
var router = express.Router()
const blogController = require('./v1/controller/blogController.js')

router.get('/api/v1/articles', blogController.getArticles )
router.get('/api/v1/articles/:id', blogController.getArticle )
router.put('/api/v1/articles/:id', blogController.updateArticle)
router.post('/api/v1/articles', blogController.createArticle)
router.delete('/api/v1/articles/:id', blogController.destroyArticle)



module.exports = router
