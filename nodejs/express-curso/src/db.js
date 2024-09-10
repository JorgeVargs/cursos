const mysql = require('mysql2/promise')


async function connectDb(){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'expressdb'
    })
    
    const result = await connection.query('SELECT 1 + 1 AS Result')
    console.log(result)

}

module.exports = {
    connectDb
}