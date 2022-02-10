var express = require('express');
const app = require('../app');
var router = express.Router();
let indexController = require('../controller/index')

/* GET home page. */

router.get('/', indexController.getPost);
router.post('/addPost', indexController.addPost);
router.get('/edit/:_id', indexController.editPost);
router.post('/updatePost',indexController.updatePost);
router.get('/delete/:_id', indexController.deletePost);

module.exports = router;
