const {Like} = require('../models/index');
const CrudRepository = require('./crud-repository');

class LikeRepository extends CrudRepository {
    constructor() {
        super(Like);
    }

    async findUserAndLikeable(data) {
        try {
            const isLikeable = await Like.findOne(data);
            return isLikeable;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = LikeRepository;