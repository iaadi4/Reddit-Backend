const {Post} = require('../models/index');

class PostRepository {
    
    async create(data) {
        try {
            const createPost = await Post.create(data);
            return createPost;
        } catch (error) {
            throw error;
        }
    }

    async get(postId) {
        try {
            const getPost = await Post.findById(postId);
            return getPost;
        } catch (error) {
            throw error;
        }
    }

    async getWithComments(postId) {
        try {
            const postWithComment = await Post.find(postId).populate({path: 'comments'}).lean();
            return postWithComment;
        } catch (error) {
            throw error;
        }  
    }

    async destroy(postId) {
        try {
            return await Post.findByIdAndDelete(postId);
        } catch (error) {
            throw error;
        }
    }

    async update(postId, data) {
        try {
            const updatePost = await Post.findByIdAndUpdate(postId, data, {new: true});
            return updatePost;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PostRepository;