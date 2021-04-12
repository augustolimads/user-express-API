import knex from 'knex'
require("dotenv").config();

const connection = knex({
    client: 'mysql2',
    connection: {
      host : process.env.BD_HOST,
      user : process.env.BD_USERNAME,
      password : process.env.BD_PASSWORD,
      database : 'api-user'
    }
  });

export default connection;