const Sequelize = require('sequelize');
const initModels = require('../models/init-models');

const sequelize = new Sequelize('musewww', 'sa', '123456', {
  host: '120.79.0.128',
  dialect: 'mssql'
});

const db = initModels(sequelize);

module.exports = db;