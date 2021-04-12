import path from 'path';
require("dotenv").config();

module.exports = {
    client: 'mysql2',
    connection:{
        user : process.env.BD_USERNAME,
        password : process.env.BD_PASSWORD,
        database : 'api-user'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};