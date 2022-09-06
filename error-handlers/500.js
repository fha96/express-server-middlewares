'use strict';

const errorHandler = (error, req, res, next ) => {
    res.send({
        code:500,
        msg:`Internal server error : ${error}`
    });
}

module.exports = errorHandler;