"use strict";
const { hashPassword } = require("../utils/passwordHandler");

module.exports = {
  async up(queryInterface, _) {
    await queryInterface.bulkInsert("Players", [
      {
        username: "adi",
        email: "nugrahaadisantoso@yahoo.com",
        password: await hashPassword("adi123"),
        experience: 500,
        lvl: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "raka",
        email: "raka@abc.com",
        password: await hashPassword("raka123"),
        experience: 2000,
        lvl: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete("Players", null, {});
  },
};
