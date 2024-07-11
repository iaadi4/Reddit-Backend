const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost/blog_dev');
}

module.exports = connect;