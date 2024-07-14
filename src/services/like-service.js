const { LikeRepository, PostRepository } = require('../repository/index');

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.postRepository = new PostRepository();
    }

    async toggleLike(modelId, modelType, userId) {
        let likeable;
        if(modelType == 'Post') {
            likeable = await this.postRepository.get(modelId);
        } else if(modelType == 'Comment') {
            //
        } else {
            throw new Error('Unknown model type.');
        }
        const exist = await this.likeRepository.findUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        if(exist) {
            likeable.likes.pull(exist.id);
            await likeable.save();
            await exist.deleteOne();
            var isAdded = false;
        } else {
            const newLike = await this.likeRepository.create({
                onModel: modelType,
                likeable: modelId,
                user: userId
            });
            var isAdded = false;
            likeable.likes.push(newLike);
            await likeable.save();
        }
        return isAdded;
    }
}

module.exports = LikeService;