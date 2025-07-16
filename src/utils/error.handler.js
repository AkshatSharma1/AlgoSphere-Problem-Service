const BaseError = require("../errors/base.error");
const {StatusCodes} = require('http-status-codes');

//Now if the error is in subset of base error, then we will populate it
function errorHandler(err, req, res, next){
    console.log("Error Handler kicked in")
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data:{}
        })
    }

    //if error is somethiing else, we will just say internal server error
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Internal Server Error',
        error: err,
        data: {}
    })
}

module.exports = errorHandler;
