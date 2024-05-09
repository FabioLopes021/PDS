const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sale_invoice', {
    sale_invoiceid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_departure_date: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'sale_invoice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sale_inv__F67992D03BFBC99A",
        unique: true,
        fields: [
          { name: "sale_invoiceid" },
        ]
      },
    ]
  });
};
