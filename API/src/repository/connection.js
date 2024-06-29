import pg from 'pg';
import 'dotenv/config';

const { Client } = pg;

const con = new Client({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PWD,
  database: process.env.PG_DB,
  port: process.env.PG_PORT,
  ssl: true,
});

console.log('Conexão com BD realizada');

await con.connect();

export default con;