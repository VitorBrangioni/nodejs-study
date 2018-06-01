module.exports = (app) => {
    app.get('/products', (req, res, next) => {

        var conn = app.infra.databaseFactory();
        var productDAO = new app.infra.ProductDAO(conn);

        productDAO.list( (err, results) => {

            if (err) {
                return next(err);
            }   

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
        res.render('product/form', {errors: [], product: {}})
    });

    app.post('/product', (req, res, next) => {

        req.assert('titulo', 'Title is required').notEmpty();
        req.assert('preco', 'Price is required').isFloat();
        var errors = req.validationErrors();
        
        var product = req.body;

        // validation error
        if (errors) {
            res.format({
                html: () => {
                    res.status(400).render('product/form', {errors: errors, product: product});
                },
                json: () => {
                    res.status(400).json(errors);
                }
            });
            return;
        }

        var conn = app.infra.databaseFactory();
        var productDAO = new app.infra.ProductDAO(conn);

        productDAO.save(product, (err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/products');
        });
    });
}