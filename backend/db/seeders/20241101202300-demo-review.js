"use strict";

const { Review } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          spotId: 1,
          comment: "This is a great spot!",
          stars: 5,
          reviewImageId: 1,
        },
        {
          userId: 2,
          spotId: 2,
          comment: "This is amazing spot!",
          stars: 5,
          reviewImageId: 2,
        },
        {
          userId: 3,
          spotId: 3,
          comment: "This is a really nice spot!",
          stars: 5,
          reviewImageId: 3,
        },
        {
          userId: 4,
          spotId: 4,
          comment: "It was alright",
          stars: 5,
          reviewImageId: 4,
        },
        {
          userId: 5,
          spotId: 5,
          comment: "Wow so cool",
          stars: 5,
          reviewImageId: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Reviews";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        comment: {
          [Op.in]: [
            "This is a great spot!",
            "This is amazing spot!",
            "This is a really nice spot!",
            "It was alright",
            "Wow so cool",
          ],
        },
      },
      {}
    );
  },
};
