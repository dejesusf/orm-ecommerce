const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull:false,
    },
  },
  {
    sequelize,
    modelName: 'category',
  }
);

module.exports = Category;
