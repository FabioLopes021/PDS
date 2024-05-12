const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist', {
    aid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    artist_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    artist_birthdate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'artist',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__artist__DE508E2E8D7AA08C",
        unique: true,
        fields: [
          { name: "aid" },
        ]
      },
    ]
  });
};
