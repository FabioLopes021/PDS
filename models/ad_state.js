const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ad_state', {
    adstid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adsadid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ad',
        key: 'adid'
      }
    }
  }, {
    sequelize,
    tableName: 'ad_state',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ad_state__E9529D2355176390",
        unique: true,
        fields: [
          { name: "adstid" },
        ]
      },
    ]
  });
};
