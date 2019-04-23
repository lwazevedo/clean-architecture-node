const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const config = require('./variables')
const apiRouter = require('../routes')
const { handleNotFound, handleError } = require('../middlewares/handle-errors')
const app = express()

app.use(bodyParser.json(), cors(), helmet())
if (config.env !== 'test') app.use(morgan('combined'))

app.use('/api', apiRouter)
app.use(handleNotFound, handleNotFound)


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