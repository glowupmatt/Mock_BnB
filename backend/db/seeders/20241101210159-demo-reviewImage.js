"use strict";
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
    await queryInterface.bulkInsert([
      {
        imageUrl:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=720",
        reviewId: 1,
      },
      {
        imageUrl:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/f52a6a13-c8d1-4966-ad19-e614fd4bae3c.jpeg?im_w=720",
        reviewId: 2,
      },
      {
        imageUrl:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/0caa1462-bd5f-4cfa-8f9d-7012f7eb7d02.jpeg?im_w=720",
        reviewId: 3,
      },
      {
        imageUrl:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/258ad76b-f5df-4b19-a94e-eb13a4a95c38.jpeg?im_w=720",
        reviewId: 4,
      },
      {
        imageUrl:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/318ab9f9-00fd-4c3a-a9d7-01a4d5c98adf.jpeg?im_w=720",
        reviewId: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "ReviewImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        imageUrl: {
          [Op.in]: [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/f52a6a13-c8d1-4966-ad19-e614fd4bae3c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/0caa1462-bd5f-4cfa-8f9d-7012f7eb7d02.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/258ad76b-f5df-4b19-a94e-eb13a4a95c38.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/318ab9f9-00fd-4c3a-a9d7-01a4d5c98adf.jpeg?im_w=720",
          ],
        },
      },
      {}
    );
  },
};
