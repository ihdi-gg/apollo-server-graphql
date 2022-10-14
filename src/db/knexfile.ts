const dbName = '';
const dbUser = '';
const dbPassword = '';
const dbHost = '';
const dbPort = 5432;

const db = {
  client: 'pg',
  connection: {
    database: dbName,
    user: dbUser,
    password: dbPassword,
    host: dbHost,
    port: dbPort,
    ssl: { //for non ssl server add this
      rejectUnauthorized: false 
    }
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'migrations',
    directory: './src/db/migrations'
  },
  seeds: {
      directory: './src/db/seeds'
  },
  timezone: 'UTC'
};

module.exports = db
export default db
  