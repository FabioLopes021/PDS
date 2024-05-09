const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ticket', {
    tid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticket_purchase_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ticket_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eventeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'event',
        key: 'eid'
      }
    },
    useruid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'uid'
      }
    },
    ticket_statusts_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ticket_status',
        key: 'ts_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ticket',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ticket__DC105B0F0A233B75",
        unique: true,
        fields: [
          { name: "tid" },
        ]
      },
    ]
  });
};
