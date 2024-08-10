const JWT = require('passport-jwt');
const { User } = require('../models/index');
const { SECRETORKEY } = require('../config/serverConfig');

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRETORKEY
}

const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if(!user) {
            done(null, false);
        } else {
            done(null, user);
        }
    }));
}

module.exports = passportAuth;