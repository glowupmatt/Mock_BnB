"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Spots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      lat: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      lng: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      avgRating: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      previewImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Spots");
  },
};
