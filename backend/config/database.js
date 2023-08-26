const { Sequelize } = require("sequelize");

// connect to database mysql
const db = new Sequelize("paginate_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
