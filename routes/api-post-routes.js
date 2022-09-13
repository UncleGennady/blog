const express = require('express');
const ApiPostController = require('./../controller/api-post-controller')
const apiPostController = new ApiPostController

const router = express.Router();

router.get('/api/posts/:id', apiPostController.getPost);

router.get('/api/posts', apiPostController.getPosts);

router.delete('/api/posts/:id', apiPostController.deletePost);

router.post('/api/add-post',apiPostController.postAddPost);

router.put('/api/edit/:id', apiPostController.putEditPost);

module.exports = router;
