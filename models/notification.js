const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notification', {
    nid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    n_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notification_typentid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'notification_type',
        key: 'ntid'
      }
    },
    useruid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'uid'
      }
    }
  }, {
    sequelize,
    tableName: 'notification',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__notifica__DF97D0F5F9346775",
        unique: true,
        fields: [
          { name: "nid" },
        ]
      },
    ]
  });
};
