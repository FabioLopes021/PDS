const Sequelize = require('sequelize');
const initModels = require('../models/init-models');

const sequelize = new Sequelize('musewwww', 'sa', '123456', {
  host: '120.79.0.132',
  dialect: 'mssql'
});

const db = initModels(sequelize);

module.exports = db;