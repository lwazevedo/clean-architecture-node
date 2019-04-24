const httpStatus = require('http-status')
const jwt = require('jsonwebtoken');

const User = require('../models/user')
const config = require('../config/variables')


const signUp = async (req, res, next) => {
    try {
        const user = new User(req.body)
        const savedUser = await user.save()
        res.status(httpStatus.CREATED)
        res.send(savedUser.transform())
    } catch (error) {
        return next(User.checkDuplicateEmailError(error))
    }
}

const signIn = async (req, res, next) => {
    try {
        console.log(config.expiresIN)
        const user = await User.findAndValidateUser(req.body)
        const payload = { sub: user.id }
        const token = jwt.sign(payload, config.secret, { expiresIn: config.expiresIN })
        return res.json({ message: 'OK', token: token })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    signIn,
    signUp
}

