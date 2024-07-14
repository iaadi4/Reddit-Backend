const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Post cannot be more than 250 words']
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Like'
        }
    ]
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);
module.exports = Post; 