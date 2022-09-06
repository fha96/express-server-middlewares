'use strict';


const validate = require('../middlewares/validate-number.js');


describe('testing the first middle ware', () => {

    let spy;
    //before each testing units
    beforeEach(()=>{
        spy = jest.spyOn(console,'log').mockImplementation();
    });
    let req={"query":
    {
        "num":"5"
    }};
    let res={};
    let next=jest.fn();
    it ('testing validateNumber',  () => {
        validate(req, res, next);
        expect(spy).toHaveBeenCalledTimes(1);
    });
})