var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProductController', () => {
    it('#list json', (done) => {
        request.get('/products')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

});