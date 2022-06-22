const mysql = require('mysql')

var pool = mysql.createPool({
    host:   "mysql.upsaude.net.br",
    user:   "upsaude13",
    port:       3306,
    password:   "Jr123456",
    database: "upsaude13"
})


exports.pool = pool;