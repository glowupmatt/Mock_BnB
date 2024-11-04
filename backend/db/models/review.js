'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.hasMany(models.ReviewImage, {foreignKey: "reviewId"})
      Review.belongsTo(models.Spot, {foreignKey: 'spotId'})
      Review.belongsTo(models.User, {foreignKey: 'userId'})
      
    }
  }
  Review.init({
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Spots',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    comment: {
      type: DataTypes.STRING,
      validate: {
        len:[1, 256]
      }
    },
    stars: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
        isInt: true
      }
    },
    reviewImage: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};