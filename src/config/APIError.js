const httpStatus = require('http-status')
const util = require('util')


module.exports = function APIError(message, status = httpStatus.INTERNAL_SERVER_ERROR, extra = null) {
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = message
    this.status = status
    this.extra = extra
}

util.inherits(module.exports, Error)