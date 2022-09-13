const Post = require('./../models/post');
const createPath = require('./../utils/create-path');
const handleError = require('./../utils/handle-error');

class PostController {

    getPost = (req, res) =>{
        const title = 'Post';
        Post
            .findById(req.params.id)
            .then(post => res.render(createPath('post'), { post, title }))
            .catch((error) => handleError(res, error));
    };

    deletePost = (req, res) => {
            Post
                .findByIdAndDelete(req.params.id)
                .then(result => res.sendStatus(200))
                .catch((error) => handleError(res, error));
    };

    getAddPost = (req, res) => {
        const title = 'Add Post';
        res.render(createPath('add-post'), { title });
    };

    postAddPost = (req, res) => {
        const { title, author, text } = req.body;
        const post = new Post({ title, author, text });
        post
            .save()
            .then((result) => res.redirect('/posts'))
            .catch((error) => handleError(res, error));
    };

    getEditPost = (req, res) => {
        const title = 'Edit Post';
        Post
            .findById(req.params.id)
            .then(post => res.render(createPath('edit-post'), { post, title }))
            .catch((error) => handleError(res, error));
    };

    putEditPost = (req, res) => {
        const { title, author, text } = req.body;
        const {id} = req.params
        Post
            .findByIdAndUpdate(id,{title, author, text})
            .then((result) => res.redirect(`/posts/${id}`))
            .catch((error) => handleError(res, error));
    };
    getPosts = (req, res) => {
        const title = 'Posts';
        Post
            .find()
            .then(posts => posts.reverse())
            .then(posts => res.render(createPath('posts'), { posts, title }))
            .catch((error) => handleError(res, error));
    };

}
module.exports = PostController;