module.exports = (app) => {
    app.get('/', (req, res) => {
        var conn = app.infra.databaseFactory();
        var productDAO = new app.infra.ProductDAO(conn);

        productDAO.list( (err, results) => {
            res.render('home/index', {books: results});
        });

        conn.end();
    });
}