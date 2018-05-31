class ProductDAO {

    constructor(conn) {
        this._conn = conn;
    }

    list (callback) {
        this._conn.query('select *  from livros', callback);
    }

    save (product, callback) {
        this._conn.query('insert into livros set ?', product, callback);
    }
 }

module.exports = () => {
    return ProductDAO;   
}