const {Client} = require('pg')

const client = new Client({
    host:   "pgsql.upsaude.net.br",
    user:   "upsaude18",
    port:       5432,
    password:   "up1022",
    database: "upsaude18"
})


module.exports = client