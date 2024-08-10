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

const login = async(req, res) => {
    try {
        const user = await userService.getUserByEmail(req.body.email);
        if(!user) {
            return res.status(401).json({
                message: 'no user with corresponding email found',
                success: false
            });
        }
        if(!user.comparePassword(req.body.password)) {
            return res.status(401).json({
                message: 'incorrect password',
                success: false
            });
        }
        const token = user.genJWT();
        return res.status(200).json({
            data: token,
            message: 'logged in successfully',
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            error: error,
            success: false
        });
    }
}

module.exports = {
    signup,
    login
}