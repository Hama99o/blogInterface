var express = require('express')
var router = express.Router()
const blogController = require('./v1/controller/blogController.js')
router.get('/', blogController.getArticles )
router.get('/:id', blogController.getArticle )
router.get('/update/:id', blogController.updateArticle )




module.exports = router;
