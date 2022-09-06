'use strict';


const supertest = require('supertest');
const server = require('../server.js');

const request = supertest(server.app);

describe('testing Express Server !', () => {
  

    it('test server live ', async () => {
        const response = await request.get('/');
        expect(response.text).toEqual('Hello From our first server including middle ware');
    });

    it('test Squared value',async () =>{
        const res = await request.get('/square?num=5');
        expect(res.body.num).toEqual(25);
    });
});




