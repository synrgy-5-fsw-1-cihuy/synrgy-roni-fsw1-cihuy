const request = require("supertest");
const app = require("../../app");

describe("Test Home Endpoint", () => {
  describe("GET / => Homepage", () => {
    it("should respond with a 200 status code", async () => {
      await request(app).get("/").expect(200);
    });
  });

  describe("GET /random => Random", () => {
    it("should respond with a 404 status code", async () => {
      await request(app).get("/random").expect(404);
    });
  });
});
