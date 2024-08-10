const { User } = require('../models/index');
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async getByEmail(userEmail) {
        try {
            const user = await User.findOne({email: userEmail});
            return user;
        } catch (error) {
            console.log('Something went wrong in the repository.');
            throw error;
        }
    }
}

module.exports = UserRepository;