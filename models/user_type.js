const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_type', {
    utid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ut_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_type',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__user_typ__7C85834929B5AEDA",
        unique: true,
        fields: [
          { name: "utid" },
        ]
      },
    ]
  });
};
