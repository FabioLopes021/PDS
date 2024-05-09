const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_status', {
    us_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    us_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_status',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__user_sta__2E701A67F025D78F",
        unique: true,
        fields: [
          { name: "us_id" },
        ]
      },
    ]
  });
};
