require('dotenv').config()

module.exports = {
    port: process.env.PORT,
    app: process.env.APP,
    env: process.env.NODE_ENV,
    secret: process.env.JWT_SECRECT,
    expiresIN: process.env.JWT_EXPIRES_IN,
    mongo: {
        uri: process.env.MONGOURI,
        testURI: process.env.MONGOTESTURI
    }
}