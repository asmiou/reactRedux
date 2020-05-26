const jwt = require("jwt-simple");
const config = require('../config');

module.exports =  (user)=>{
    const timestamp = new Date().getTime();
    return jwt.encode({
        sub: user.email,
        iat: timestamp
    }, config.secret_key);
};
