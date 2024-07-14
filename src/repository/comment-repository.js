const {Comment} = require('../models/index');
const CrudRepository = require('./crud-repository');

class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }
}

module.exports = CommentRepository;