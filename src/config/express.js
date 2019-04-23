const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const config = require('./variables')


const app = express()

app.use(bodyParser.json(), cors(), helmet())

if (config.env !== 'test') app.use(morgan('combined'))

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