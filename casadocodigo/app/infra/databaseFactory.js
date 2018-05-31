
var mysql = require('mysql');

function createDBConn() {
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    });

    return conn;
}
// wrapper (embrulha uma function)
module.exports = () => {
    return createDBConn;
}
