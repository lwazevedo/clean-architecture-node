'use strict'

const Joi = require('joi')

module.exports = {
    create: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(128).required(),
        }
    }
}
