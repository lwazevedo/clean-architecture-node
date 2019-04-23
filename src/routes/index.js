const express = require('express')
const router = express.Router()

router.get('/status', (req, res) => {
    res.send({ title: "Clean Architecture", version: "1.0.0", status: 'OK' })
})

module.exports = router