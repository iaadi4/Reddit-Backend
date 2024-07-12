const mongoose = require('mongoose');

const flairSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, {timestamps: true});

const Flair = mongoose.model('Flair', flairSchema);
module.exports = Flair;