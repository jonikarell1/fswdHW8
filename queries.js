
//connect to database yg sudah dibuat
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database: 'dvdrental',
    password:'aingnusaha',
    port:5432
})

module.exports = pool;