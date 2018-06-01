var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProductController', () => {
    it('#list json', (done) => {
        request.get('/products')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('#Test register product with invalid data', (done) => {
        request.post('/product')
            .send({titulo: "", descricao: "description test"})
            .expect(400, done);
    });

    it('#Test register product with valid data', (done) => {
        request.post('/product')
            .send({titulo: "title test", descricao: "description test", preco: 3})
            .expect(302, done);
    });

});