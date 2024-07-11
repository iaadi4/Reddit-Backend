const Post = require('../models/post');

const PostRepository {
    
    async create(data) {
        try {
            const createPost = await Post.create(data);
            return createPost;
        } catch (error) {
            console.log(error);
        }
    }

    async get(postId) {
        try {
            const getPost = await Post.findById(postId);
            return getPost;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(postId) {
        try {
            return await Post.findByIdAndDelete(postId);
        } catch (error) {
            console.log(error);
        }
    }

    async update(postId, data) {
        try {
            const updatePost = await Post.findByIdAndUpdate(postId, data, {new: true});
            return updatePost;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = PostRepository;