"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Review.hasMany(models.ReviewImage, {
        foreignKey: "reviewId",
        onDelete: "CASCADE",
      });
      // Review.belongsTo(models.Spot, {
      //   foreignKey: "spotId",
      // });
    }
  }
  Review.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      spotId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Spots",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [10, 300],
        },
      },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      reviewImageId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "ReviewImages",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
