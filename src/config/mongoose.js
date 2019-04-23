const config = require('./variables')
const mongoose = require('mongoose')


mongoose.connection.on('connected', () => {
    console.log('MongoDB is connected')
})

mongoose.connection.on('error', (err) => {
    console.log(`Could not connect to MongoDB because of ${err}`)
})

if (config.env === 'dev') mongoose.set('debug', true)

exports.connect = () => {
    const mongoURI = (config.env === 'prod' || 'dev' ? config.mongo.uri : config.mongo.testURI)

    mongoose.connect(mongoURI, {
        keepAlive: 1,
        useNewUrlParser: true
    })

    return mongoose.connection
}