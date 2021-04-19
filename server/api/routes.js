var express = require('express')
var router = express.Router()
const blogController = require('./v1/controller/blogController.js')

router.get('/api/ressources', blogController.getArticles )
router.get('/api/ressources/:id', blogController.getArticle )
router.put('/api/ressources/:id', blogController.updateArticle)
router.post('/api/ressources', blogController.createArticle)
router.delete('/api/ressources/:id', blogController.destroyArticle)



module.exports = router
