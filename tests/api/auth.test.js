const request = require("supertest");
const app = require("../../app");
const { faker } = require("@faker-js/faker");
const { Car, User, Role } = require("../../app/models");
const AuthController = require("../../app/controllers/AuthenticationController");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const AuthC = new AuthController({ User, Role, bcrypt, jwt });

describe("Test API Auth Endpoint", () => {
  describe("POST /v1/auth/register => User register", () => {
    it("should respond with a 201 status code", async () => {
      await request(app)
        .post("/v1/auth/register")
        .send({
          name: faker.name.fullName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        })
        .expect(201);
    });
    it("should respond with a 500 status code", async () => {
      await request(app)
        .post("/v1/auth/register")
        .send({
          email: "fikri@binar.co.id",
          password: faker.internet.password(),
        })
        .expect(500);
    });
  });

  describe("POST /v1/auth/login => User login", () => {
    it("should respond with a 401 status code", async () => {
      await request(app)
        .post("/v1/auth/login")
        .send({
          email: faker.internet.email(),
          password: faker.internet.password(),
        })
        .expect(404);
    });
    it("should respond with a 201 status code", async () => {
      await request(app)
        .post("/v1/auth/login")
        .send({
          email: "fikri@binar.co.id",
          password: "123456",
        })
        .expect(201);
    });
  });

  describe("GET /v1/auth/whoami => Get current user", () => {
    const role = {
      id: 1,
      name: "CUSTOMER",
    };
    it("should respond with a 401 status code", async () => {
      await request(app).get("/v1/auth/whoami").expect(401);
    });

    it("should respond with a 200 status code", async () => {
      const user = await User.findOne({
        where: {
          email: "fikri@binar.co.id",
        },
      });
      const token = AuthC.createTokenFromUser(
        {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        },
        role
      );
      await request(app)
        .get("/v1/auth/whoami")
        .set("Authorization", `Bearer ${token}`)
        .expect(200);
    });
  });
});
