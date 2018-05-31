module.exports = (app) => {
    app.get('/products', (req, res) => {

        var conn = app.infra.databaseFactory();
        var productDAO = new app.infra.ProductDAO(conn);

        productDAO.list( (err, results) => {

            res.format({
                html: () => {
                    res.render('product/list', {books: results});
                },
                json: () => {
                    res.json(results);
                }
            });
        });
        conn.end();
    });

    app.get('/product', (req, res) => {
        res.render('product/form')
    });

    app.post('/product', (req, res) => {

        var product = req.body;
        console.log(product);

        var conn = app.infra.databaseFactory();
        var productDAO = new app.infra.ProductDAO(conn);

        productDAO.save(product, () => {
            res.redirect('/products');
        });
    });
}