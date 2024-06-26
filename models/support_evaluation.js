const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('support_evaluation', {
    se_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    se_evaluation: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    support_ticketstid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'support_ticket',
        key: 'stid'
      }
    }
  }, {
    sequelize,
    tableName: 'support_evaluation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__support___EB8CF1D17B9C5E05",
        unique: true,
        fields: [
          { name: "useruid" },
          { name: "support_ticketstid" },
        ]
      },
    ]
  });
};
