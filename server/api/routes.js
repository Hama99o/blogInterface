var express = require('express')
var router = express.Router()
const blogController = require('./v1/controller/blogController.js')

router.get('/', blogController.getArticles )
router.get('/:id', blogController.getArticle )
router.put('/update/:id', blogController.updateArticle)
router.post('/add', blogController.createArticle)
router.delete('/update/:id', blogController.destroyArticle)



module.exports = router;
