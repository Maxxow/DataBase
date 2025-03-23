import pg from 'pg'

const {Pool} = require("pg")

const pool = new Pool({
    user: 'database-user',
    password: 'secretpassword!!',
    host: 'my.database-server.com',
    port: 5334,
    database: 'database-name'
})