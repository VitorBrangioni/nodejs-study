var http = require('http');
var assert = require('assert');

describe('#ProductController', () => {
    it('#list json', (done) => {

        var configuracoes = {
            hostname: 'localhost',
            port: 3000,
            path: '/product',
                method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        };

        http.get(configuracoes, function(res){
            assert.equal(res.statusCode, 200);
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
            done();
        });
    });

});