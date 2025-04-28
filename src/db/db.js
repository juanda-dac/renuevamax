import mysql from "promise-mysql"
import { config } from "dotenv";

config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

const getConnection = () => {
    return connection;
}

export default getConnection;