const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const config = require('./variables')
const authentication = require('../middlewares/authentication')
const apiRouter = require('../routes')
const { handleNotFound, handleError } = require('../middlewares/handle-errors')

const app = express()

app.use(
    bodyParser.json(),
    cors(),
    helmet(),
    authentication(config.secret).unless({
        path: ['/api/status', '/api/auth/signIn', '/api/auth/signUp']
    }))

if (config.env !== 'test') app.use(morgan('combined'))

app.use('/api', apiRouter)
app.use(handleNotFound, handleError)


exports.start = () => {
    app.listen(config.port, (err) => {
        if (err) {
            console.log(`Error : ${err}`)
            process.exit(-1)
        }

        console.log(`${config.app} is running on ${config.port}`)
    })
}

exports.app = app