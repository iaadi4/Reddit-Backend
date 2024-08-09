const { UserRepository } = require('../repository/index');

const userRepository = new UserRepository();

class UserService {

    async signup(data) {
        try {
            const user = await userRepository.create(data);
            return user;
        } catch(error) {
            console.log('Something went wrong in the service layer');
            throw error;
        }
    }
}

module.exports = UserService;