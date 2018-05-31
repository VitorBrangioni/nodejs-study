module.exports = () => {
    this.list = (conn, callback) => {
        conn.query('select * from livros', callback);
    }
    return this;
}