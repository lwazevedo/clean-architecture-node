const mongoose = require('./config/mongoose')
const app = require('./config/express')

app.start()
mongoose.connect()

module.exports = app