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

flairSchema.pre('save', function (next) {
    this.title = this.title.toLowerCase(),
    next();
})

const Flair = mongoose.model('Flair', flairSchema);
module.exports = Flair;