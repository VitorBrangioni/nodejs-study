module.exports = (app) => {

    app.get('/docker', (req, res) => {
        res.render('staticpage/docker');
    });

}