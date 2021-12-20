"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "user1",
        email: "user1@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "user2",
        email: "user2@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "user3",
        email: "user3@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "user4",
        email: "user4@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("Channels", [
      {
        id: 1,
        name: "Channel1",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Channel2",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("Videos", [
      {
        id: 1,
        title: "Video_1",
        channel_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Video_2",
        channel_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
