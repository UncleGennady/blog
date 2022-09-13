const express = require('express');
const PostController = require('./../controller/post-controller')
const postController = new PostController

const router = express.Router();

router.get('/posts/:id', postController.getPost);

router.delete('/posts/:id', postController.deletePost);

router.get('/add-post', postController.getAddPost);

router.post('/add-post',postController.postAddPost);

router.get('/edit/:id', postController.getEditPost);

router.put('/edit/:id', postController.putEditPost);

router.get('/posts', postController.getPosts);

module.exports = router;
