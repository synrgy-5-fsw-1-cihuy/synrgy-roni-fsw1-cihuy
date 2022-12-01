import { QueryInterface } from "sequelize";

const up = async (queryInterface: QueryInterface) =>
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
   */
  await queryInterface.bulkInsert("users", [
    {
      name: "John Doe",
      email: "johndue@email.com",
      password: "password",
      role: "user",
    },
    {
      name: "Jane Doe",
      email: "janedoe@email.com",
      password: "password",
      role: "admin",
    },
    {
      name: "John Smith",
      email: "johnsmith@email.com",
      password: "password",
      role: "superadmin",
    },
  ]);

// eslint-disable-next-line unused-imports/no-unused-vars
const down = async (queryInterface: QueryInterface) => {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('users', null, {});
   */
};

export { down, up };
