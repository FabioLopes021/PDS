const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('piece_category', {
    pcid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pc_description: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'piece_category',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__piece_ca__83E06A9F7A29FF59",
        unique: true,
        fields: [
          { name: "pcid" },
        ]
      },
    ]
  });
};
