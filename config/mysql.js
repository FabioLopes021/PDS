const Sequelize = require("sequelize");
const initModels = require("../models/init-models");

const sequelize = new Sequelize("musewww", "test", "test", {
  host: "localhost",
  dialect: "mysql",
});

const db = initModels(sequelize);

module.exports = db;
