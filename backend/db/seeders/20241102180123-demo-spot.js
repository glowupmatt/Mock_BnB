"use strict";

const { Spot } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Spots", [
      {
        ownerId: 1,
        address: "123 Main St",
        city: "San Francisco",
        state: "California",
        country: "USA",
        lat: 37.7749,
        lng: -122.4194,
        name: "Cozy Apartment",
        description: "A cozy apartment in the heart of San Francisco.",
        price: 120,
        previewImage:
          "https://a0.muscache.com/im/pictures/c3f42153-2d2f-451e-9606-ad4ea8930401.jpg?im_w=720",
      },
      {
        ownerId: 2,
        address: "456 Elm St",
        city: "Los Angeles",
        state: "California",
        country: "USA",
        lat: 34.0522,
        lng: -118.2437,
        name: "Modern Loft",
        description: "A modern loft in downtown Los Angeles.",
        price: 150,
        previewImage:
          "src=https://a0.muscache.com/im/pictures/prohost-api/Hosting-849168940403272858/original/0acf305b-c5de-4faa-88cd-bfa62e6b4add.jpeg?im_w=720",
      },
      {
        ownerId: 3,
        address: "789 Oak St",
        city: "New York",
        state: "New York",
        country: "USA",
        lat: 40.7128,
        lng: -74.006,
        name: "Luxury Condo",
        description: "A luxury condo in New York City.",
        price: 200,
        previewImage:
          "https://a0.muscache.com/im/pictures/22787280-b33c-457f-b9c9-e4057462ef8e.jpg?im_w=720",
      },
      {
        ownerId: 3,
        address: "101 Pine St",
        city: "Chicago",
        state: "Illinois",
        country: "USA",
        lat: 41.8781,
        lng: -87.6298,
        name: "Charming Bungalow",
        description: "A charming bungalow in Chicago.",
        price: 130,
        previewImage:
          "https://a0.muscache.com/im/pictures/dfbe0f71-cb42-4319-9416-6b414b7fca90.jpg?im_w=720",
      },
      {
        ownerId: 3,
        address: "202 Maple St",
        city: "Miami",
        state: "Florida",
        country: "USA",
        lat: 25.7617,
        lng: -80.1918,
        name: "Beach House",
        description: "A beautiful beach house in Miami.",
        price: 250,
        previewImage:
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46567780/original/87bd16c5-9878-4616-99d5-cf09601ec585.png?im_w=720",
      },
      {
        ownerId: 3,
        address: "303 Cedar St",
        city: "Seattle",
        state: "Washington",
        country: "USA",
        lat: 47.6062,
        lng: -122.3321,
        name: "Urban Studio",
        description: "An urban studio in Seattle.",
        price: 110,
        previewImage:
          "https://a0.muscache.com/im/pictures/eb173f52-f828-4f52-8c8e-97730851f2a2.jpg?im_w=720",
      },
      {
        ownerId: 3,
        address: "404 Birch St",
        city: "Austin",
        state: "Texas",
        country: "USA",
        lat: 30.2672,
        lng: -97.7431,
        name: "Spacious House",
        description: "A spacious house in Austin.",
        price: 140,
        previewImage:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3MDY3OTEzNTMxMDcwNDYyOA%3D%3D/original/8e9e731d-d47d-4ede-8e64-a6542ef1bb4b.jpeg?im_w=720",
      },
      {
        ownerId: 3,
        address: "505 Walnut St",
        city: "Denver",
        state: "Colorado",
        country: "USA",
        lat: 39.7392,
        lng: -104.9903,
        name: "Mountain Cabin",
        description: "A cozy mountain cabin in Denver.",
        price: 160,
        previewImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-13333884/original/601727c4-cbf5-42bb-9f17-e1092ad04919.jpeg?im_w=720",
      },
      {
        ownerId: 3,
        address: "606 Spruce St",
        city: "Boston",
        state: "Massachusetts",
        country: "USA",
        lat: 42.3601,
        lng: -71.0589,
        name: "Historic Home",
        description: "A historic home in Boston.",
        price: 180,
        previewImage:
          "https://a0.muscache.com/im/pictures/hosting/Hosting-42413278/original/2fb92f83-9ee1-458b-8641-79dbe39a40ab.jpeg?im_w=720",
      },
      {
        ownerId: 3,
        address: "707 Fir St",
        city: "Portland",
        state: "Oregon",
        country: "USA",
        lat: 45.5152,
        lng: -122.6784,
        name: "Eco-Friendly House",
        description: "An eco-friendly house in Portland.",
        price: 170,
        previewImage:
          "https://a0.muscache.com/im/pictures/66d45d01-cda2-47ad-871c-2b8d18c05620.jpg?im_w=720",
      },
      {
        ownerId: 2,
        address: "808 Redwood St",
        city: "Las Vegas",
        state: "Nevada",
        country: "USA",
        lat: 36.1699,
        lng: -115.1398,
        name: "Luxury Villa",
        description: "A luxury villa in Las Vegas.",
        price: 300,
        previewImage:
          "https://a0.muscache.com/im/pictures/4f5eb023-d9a9-447e-a37a-1573b7df62ca.jpg?im_w=720",
      },
      {
        ownerId: 2,
        address: "909 Cypress St",
        city: "San Diego",
        state: "California",
        country: "USA",
        lat: 32.7157,
        lng: -117.1611,
        name: "Beachfront Condo",
        description: "A beachfront condo in San Diego.",
        price: 220,
        previewImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-52007336/original/ebdcb456-6381-42f5-a388-d958d52f326a.jpeg?im_w=720",
      },
      {
        ownerId: 2,
        address: "1010 Palm St",
        city: "Orlando",
        state: "Florida",
        country: "USA",
        lat: 28.5383,
        lng: -81.3792,
        name: "Family Home",
        description: "A family home in Orlando.",
        price: 140,
        previewImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-901078825276121953/original/ab269d5c-4ad3-42d4-91dd-fb1cae6fd66f.jpeg?im_w=720",
      },
      {
        ownerId: 2,
        address: "1111 Pineapple St",
        city: "Honolulu",
        state: "Hawaii",
        country: "USA",
        lat: 21.3069,
        lng: -157.8583,
        name: "Island Retreat",
        description: "An island retreat in Honolulu.",
        price: 280,
        previewImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-647150934401041009/original/78d6806e-f862-4585-abe1-5f9472ca1c2a.jpeg?im_w=720",
      },
      {
        ownerId: 2,
        address: "1212 Mango St",
        city: "Phoenix",
        state: "Arizona",
        country: "USA",
        lat: 33.4484,
        lng: -112.074,
        name: "Desert Oasis",
        description: "A desert oasis in Phoenix.",
        price: 150,
        previewImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-20497066/original/69caee72-eb1b-49fe-b18b-e89b63b97da3.jpeg?im_w=720",
      },
      {
        ownerId: 2,
        address: "1313 Coconut St",
        city: "Dallas",
        state: "Texas",
        country: "USA",
        lat: 32.7767,
        lng: -96.797,
        name: "Modern Apartment",
        description: "A modern apartment in Dallas.",
        price: 130,
        previewImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-725514287553482683/original/a52d8649-311b-4a80-afdc-d5bbcc5a639a.jpeg?im_w=720",
      },
      {
        ownerId: 2,
        address: "1414 Papaya St",
        city: "Atlanta",
        state: "Georgia",
        country: "USA",
        lat: 33.749,
        lng: -84.388,
        name: "Urban Loft",
        description: "An urban loft in Atlanta.",
        price: 160,
        previewImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-925680377234192908/original/b273fecb-3512-4acf-b628-2ac621883d58.jpeg?im_w=720",
      },
      {
        ownerId: 2,
        address: "1515 Guava St",
        city: "New Orleans",
        state: "Louisiana",
        country: "USA",
        lat: 29.9511,
        lng: -90.0715,
        name: "Historic Mansion",
        description: "A historic mansion in New Orleans.",
        price: 250,
        previewImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-1253887351798117533/original/ef8be240-b685-4685-aea9-614b0c67c4f9.jpeg?im_w=720",
      },
      {
        ownerId: 2,
        address: "1616 Kiwi St",
        city: "Nashville",
        state: "Tennessee",
        country: "USA",
        lat: 36.1627,
        lng: -86.7816,
        name: "Country Cottage",
        description: "A country cottage in Nashville.",
        price: 140,
        previewImage:
          "https://a0.muscache.com/im/pictures/7742d874-de1a-4c60-bbcb-7edf1682cb98.jpg?im_w=720",
      },
      {
        ownerId: 2,
        address: "1717 Peach St",
        city: "Savannah",
        state: "Georgia",
        country: "USA",
        lat: 32.0809,
        lng: -81.0912,
        name: "Southern Charm",
        description: "A charming southern home in Savannah.",
        price: 180,
        previewImage:
          "https://a0.muscache.com/im/pictures/miso/Hosting-692026580708706524/original/fa1448dc-79b7-4b31-a07c-5ca694174b27.jpeg?im_w=720",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Spots";
    // const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      name: ["Home Sweet Home", "Entire cabin", "Entire villa"],
    });
  },
};
