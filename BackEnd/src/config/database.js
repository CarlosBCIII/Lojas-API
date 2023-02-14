/**responsavel pelas connections strings*/
const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool({

    connectionString: process.env.DATABASE_URL

});

// eslint-disable-next-line no-unused-vars
pool.on('error', (err, client) => {
    console.log('Houve um erro na IDLE do cliente:', err)
    process.exit(-1)
})

pool.on('connect', () => {

    console.log('Base de Dados Conectada')

})

module.exports = {
    query: (text, params) => pool.query(text, params)
}