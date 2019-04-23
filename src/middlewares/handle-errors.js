const httpStatus = require('http-status')

const handleNotFound = (req, res, next) => {
    res.status(httpStatus.NOT_FOUND)
    res.json({
        'message': 'Request resource not found'
    })
    res.end()
}

const handleError = (err, req, res, next) => {
    res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR)
    res.json({
        message: err.message,
        extra: err.extra,
        errors: err
    })
    res.end()
}

module.exports = { handleNotFound, handleError }