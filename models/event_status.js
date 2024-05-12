const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_status', {
    es_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    es_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'event_status',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__event_st__3022FE019070D2A8",
        unique: true,
        fields: [
          { name: "es_id" },
        ]
      },
    ]
  });
};
