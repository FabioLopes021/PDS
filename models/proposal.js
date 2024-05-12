const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proposal', {
    proposalid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    price: {
      type: DataTypes.REAL,
      allowNull: true
    },
    adadid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ad',
        key: 'adid'
      }
    },
    usermuseummuseummid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usermuseum',
        key: 'useruid'
      }
    },
    usermuseumuseruid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usermuseum',
        key: 'useruid'
      }
    }
  }, {
    sequelize,
    tableName: 'proposal',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__proposal__3EB6EC3C24485DF4",
        unique: true,
        fields: [
          { name: "proposalid" },
        ]
      },
    ]
  });
};
