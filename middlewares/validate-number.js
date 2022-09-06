'use strict';


module.exports = (req, res, next ) => {
     req.num = req.query.num;
    console.log(req.num);
    let x= req.num;
    if(typeof x == "number") {
        next();
    } else {
        next(`${x} is not a Number its ${typeof x}`);
    }
}