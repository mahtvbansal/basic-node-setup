const { StatusCodes } = require('http-status-codes')

const info = (req, res) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: true,
        message : "Api is live",
        error : {},
        data: {}
    })
}

module.exports = {
    info
}