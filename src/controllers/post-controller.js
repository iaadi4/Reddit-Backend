const { PostService } = require('../services/index');

const postService = new PostService();

const create = async (req, res) => {
    try {
        const post = await postService.create(req.body);
        return res.status(201).json({
            data: post,
            success: true,
            message: 'Post created successfully',
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: error.message,
        });
    }
}

const get = async (req, res) => {
    try {
        const post = await postService.get(req.params.id);
        return res.status(200).json({
            data: post,
            success: true,
            message: 'Successfully fetched the post',
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: error.message,
        });
    }
}

module.exports = {
    create,
    get
}