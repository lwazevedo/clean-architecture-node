const express = require('express')
const router = express.Router()
const authRouter = require('./auth')

router.get('/status', (req, res, next) => {
    res.send({ title: "Clean Architecture", version: "1.0.0", status: 'OK' })
})

router.use('/auth', authRouter)


module.exports = router