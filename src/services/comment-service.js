const {CommentRepository, PostRepository} = require('../repository/index');

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.postRepository = new PostRepository();
    }

    async createComment(modelId, modelType, userId, content) {
        let commentable;
        if(modelType == 'Post') {
            commentable = await this.postRepository.get(modelId);
        } else if(modelType == 'Comment') {
            commentable = await this.commentRepository.get(modelId);
        } else {
            throw new Error('Model type not valid');
        }
        const comment = await this.commentRepository.create({
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: []
        })
        commentable.comments.push(comment);
        await commentable.save();
        return comment;
    }
}

module.exports = CommentService;