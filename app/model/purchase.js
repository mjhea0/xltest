module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define('Purchase', {
    PurchaseId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    Amount: { 
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    StripeId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CardId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Network: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    CardType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserEmail: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Purchase',
    timestamps: false, 
    classMethods: {
      // associate: function(models) {
      //   Transaction.belongsTo(models.Merchant);
      // }
    }
  }); 
  return Purchase;
};