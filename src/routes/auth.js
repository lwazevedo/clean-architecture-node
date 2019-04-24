const express = require('express')
const router = express.Router()
const authDomain = require('../domain/auth')
const validator = require('express-validation')
const { create } = require('../validations/user')

router.post('/signUp', validator(create), authDomain.signUp)
router.post('/signIn', authDomain.signIn)

router.get('/testing', (req, res) => {
    res.json({ message: 'Anyone can access(only authorized)' })
})

module.exports = router