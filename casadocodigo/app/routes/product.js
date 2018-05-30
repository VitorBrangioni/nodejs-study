
module.exports = (app) => {
    app.get('/products', (req, res) => {
        var mysql = require('mysql');
        var conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs'
        });

        conn.query('select * from livros', (err, results) => {
            if(err)
                cosnsole.log(err);

            res.send(results);
        });
        conn.end();
        // res.render('product/list');
    });
}