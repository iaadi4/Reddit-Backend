const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Post', 'Comment']
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'onModel'
    }
}, {timestamps: true});

const Comment = mongoose.Schema('Comment', commentSchema);
module.export = Comment;