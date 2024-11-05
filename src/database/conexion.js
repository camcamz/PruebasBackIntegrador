import sql from 'mssql'
import { configDB } from '../config.js'

const dbConfig = {
    user: configDB.user,
    password: configDB.password,
    server: configDB.server,
    database: configDB.database,
    port: parseInt(configDB.port),
    options: {
        trustServerCertificate: true
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbConfig);


        return pool
    } catch (error) {
        console.log(error)
    }
}

getConnection()

export { sql }