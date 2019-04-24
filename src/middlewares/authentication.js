const expJwt = require('express-jwt');

const getToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') return req.headers.authorization.split(' ')[1];

    if (req.query && req.query.token) return req.query.token;

    if (req.cookies && req.cookies.access_token) return req.cookies.access_token;

    return null;
};

module.exports = secret => expJwt({ secret, getToken });
