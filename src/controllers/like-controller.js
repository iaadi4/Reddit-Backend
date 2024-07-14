const {LikeService} = require('../services/index');
const likeService = new LikeService();

const toggleLike = async (req,res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(201).json({
            data: response,
            message: 'Successfully toggled like',
            success: true,
            error: {}
        });
    } catch (error) {
        return res.status(200).json({
            data: {},
            message: error.message,
            success: false
        });
    }
}

module.exports = {
    toggleLike
}