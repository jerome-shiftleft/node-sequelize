const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node_sequelize", "root", "accessdenied123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;