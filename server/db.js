const Pool = require("pg").Pool;

const pool = new Pool({
  user: "danielmawale",
  password: "42964123",
  host: "localhost",
  port: 5432,
  database: "perntodo"
})

module.exports = pool;