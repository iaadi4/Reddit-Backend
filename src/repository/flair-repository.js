const {Flair} = require('../models/index');

class FlairRepository {
    
    async create(data) {
        try {
            const flair = await Flair.create(data);
            return flair;
        } catch (error) {
            throw error;
        }
    }

    async bulkCreate(data) {
        try {
            const flairs = await Flair.insertMany(data);
            return flairs;
        } catch (error) {
            
        }
    }

    async get(postId) {
        try {
            const getFlair = await Flair.findById(postId);
            return getFlair;
        } catch (error) {
            throw error;
        }
    }

    async getByName(flairList) {
        try {
            const flairs = await Flair.find({
                title: flairList
            })  //.select('title -_id');
            return flairs;
        } catch (error) {
            throw error;
        }
    }

    async destroy(flairId) {
        try {
            return await Flair.findByIdAndDelete(flairId);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FlairRepository