
var conn = require('../infra/databaseFactory')();

module.exports = (app) => {
    app.get('/products', (req, res) => {
        conn.query('select * from livros', (err, results) => {
            if(err)
                cosnsole.log(err);
                
            res.render('product/list', {books: results});
        });
        conn.end();
        // res.render('product/list');
    });
}