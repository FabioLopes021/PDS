const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usermuseum', {
    museummid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'museum',
        key: 'mid'
      }
    },
    useruid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'uid'
      }
    },
    user_typeutid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_type',
        key: 'utid'
      }
    }
  }, {
    sequelize,
    tableName: 'usermuseum',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__usermuse__1DA64CBAF797336E",
        unique: true,
        fields: [
          { name: "museummid" },
          { name: "useruid" },
        ]
      },
    ]
  });
};
