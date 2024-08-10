const {CommentService} = require('../services/index');
const commentService = new CommentService();

const create = async (req,res) => {
    try {
        const comment = await commentService.createComment(req.query.modelId, req.query.modelType, req.user.id, req.body.content);
        return res.status(201).json({
            data: comment,
            success: true,
            messge: 'Successfully created the comment',
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            error: error,
            success: false
        });
    }
}

module.exports = {
    create
}