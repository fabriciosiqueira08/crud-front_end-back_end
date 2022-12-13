const { Pool } = require('pg');
const { connect } = require("./database");

const dbConnectionInfo = {
  user:      process.env.database_user,
  password:  process.env.database_password,
  database:  process.env.database_name,
  host:      process.env.database_host,
  port:      process.env.database_port,
};   

describe("Database connection", () => {
    it("should connect to postgres", async () => {
        const pool = await connect();
        const result = await pool.query('SELECT * FROM users');
        // verificar se o resultado contém linhas de dados
        expect(result.rows.length).toBeGreaterThan(0);
    });
});
