module.exports = (app) => {
    app.get('/products', (req, res) => {

        var conn = app.infra.databaseFactory();
        var productDAO = app.infra.productDAO;

        productDAO.list(conn, function(err, results) {
            res.render('product/list', {books: results});
        });

        conn.end();
    });
}