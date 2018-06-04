var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = () => {
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');


    app.use(express.static('./app/public'))

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(expressValidator());





    // 2) Erros



    load('routes', { cwd: 'app' })
        .then('infra')
        .into(app);


    // 1) rota invalida
    app.use((req, res, next) => {
        res.status(404).render('errors/404');
        next();
    });

    app.use( (err, req, res, next) => {
        if (process.env.NODE_ENV == 'production') {
            res.status(500).render('errors/500');
            return;
        }
        next(err);
    });

    return app;
}