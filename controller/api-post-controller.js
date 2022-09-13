const Post = require('./../models/post');

const handleError = (res, error)=> {
    res.status(500).send(error.message)
};

class ApiPostController {

    getPost = (req, res) =>{
        Post
            .findById(req.params.id)
            .then(post => res.status(200).json(post) )
            .catch((error) => handleError(res, error));
    };

    deletePost = (req, res) => {
            Post
                .findByIdAndDelete(req.params.id)
                .then(() => res.status(200).json(req.params.id))
                .catch((error) => handleError(res, error));
    };

    postAddPost = (req, res) => {
        const { title, author, text } = req.body;
        const post = new Post({ title, author, text });
        post
            .save()
            .then((post) => res.status(200).json(post))
            .catch((error) => handleError(res, error));
    };

    putEditPost = (req, res) => {
        const { title, author, text } = req.body;
        const {id} = req.params
        Post
            .findByIdAndUpdate(id,{title, author, text}, {new: true})
            .then((post) =>res.status(200).json(post))
            .catch((error) => handleError(res, error));
    };
    getPosts = (req, res) => {
        Post
            .find()
            .then(posts => posts.reverse())
            .then(posts => res.status(200).json(posts))
            .catch((error) => handleError(res, error));
    };

}
module.exports = ApiPostController;