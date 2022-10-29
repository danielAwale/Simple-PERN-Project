const Pool = require("pg").Pool;

const pool = new Pool({
  user: "danielmawale",
  password: "42964prov.ca-RA",
  host: "localhost",
  port: 5433,
  database: "perntodo"
})

module.exports = pool;