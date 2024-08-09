const { UserService }  = require('../services/index');

const userService = new UserService();

const signup = async(req, res) => {
    try {
        const response = await userService.signup(req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'User created successfully'
        });
    } catch(error) {
        return res.status(500).json({
            data: {},
            error: error,
            success: false
        });
    }
}

module.exports = {
    signup
}