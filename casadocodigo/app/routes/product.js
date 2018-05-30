
module.exports = (app) => {
    app.get('/products', (req, res) => {
        res.render('product/list');
    });
}