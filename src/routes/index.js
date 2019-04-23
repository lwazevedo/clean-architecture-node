const express = require('express')
const router = express.Router()
const APIError = require('../config/APIError')


router.get('/status', (req, res, next) => {
    res.send({ title: "Clean Architecture", version: "1.0.0", status: 'OK' })
})

module.exports = router