'use strict';


module.exports =  (req, res, next ) => {
     let num = req.query.num;
     const rgx = /\b[0-9][0-9]*\b/g;
     let result= num.match(rgx);
     console.log(result);
     
    if(result) {
        let newNumber = parseInt(result[0]);
        req.query.num=newNumber*newNumber;
        next();
    } else {
        next(`${num} is not a Number its ${typeof num}`);
    }
}

