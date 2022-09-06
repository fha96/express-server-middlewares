'use strict';


const express = require('express');
const cors = require('cors');
const validateNumber = require('./middlewares/validate-number.js');
const app = express();
const errorHandler = require('./error-handlers/500.js');
app.use(cors());
app.use(express.json());


app.get('/square',validateNumber,(req, res) => {
    let num = req.query.num;
    res.status(200).send(num);

});


app.use(errorHandler);
function start(port) {
    app.listen(port, () => {
        console.log(`Server is listening on PORT ${port}`);
    });
}


module.exports = {
    app:app,
    start:start
}