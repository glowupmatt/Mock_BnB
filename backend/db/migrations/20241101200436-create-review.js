"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      spotId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Spots",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      comment: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      stars: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reviewImageId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ReviewImages",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Reviews");
  },
};
