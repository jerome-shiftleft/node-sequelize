const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../util/database");
const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue:
      "https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg",
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Product;
