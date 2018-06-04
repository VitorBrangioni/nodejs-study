module.exports = (app) => {

    app.get('/promotion', (req, res) => {

        var conn = app.infra.databaseFactory();
        var productDAO = new app.infra.ProductDAO(conn);
        
        productDAO.list( (err, results) => {
            res.render('promotions/form', {books: results});
        });
        conn.end();
    });

    app.post('/promotion', (req, res) => {
        var promotion = req.body;
        app.get('io').emit('newPromotion', promotion);
        res.redirect('/promotion');
    });
    
}