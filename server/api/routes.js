var express = require('express')
var router = express.Router()
const blogController = require('./v1/controller/blogController.js')

router.get('/ressources', blogController.getArticles )
router.get('/ressources/:id', blogController.getArticle )
router.put('/ressources/:id', blogController.updateArticle)
router.post('/ressources', blogController.createArticle)
router.delete('/ressources/:id', blogController.destroyArticle)



module.exports = router;
