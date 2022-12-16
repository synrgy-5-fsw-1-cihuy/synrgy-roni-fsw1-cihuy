const request = require("supertest");
const app = require("../../app");
const { Car, User, Role } = require("../../app/models");
const { faker } = require("@faker-js/faker");
const AuthController = require("../../app/controllers/AuthenticationController");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const AuthC = new AuthController({ User, Role, bcrypt, jwt });

describe("Test API Cars Endpoint", () => {
  const mockCar = {
    name: faker.vehicle.model(),
    description: faker.vehicle.manufacturer(),
    price: faker.random.numeric(6),
    image: faker.image.imageUrl(),
  };

  const mockCustomer = AuthC.createTokenFromUser(
    {
      id: 12,
      name: faker.name.fullName(),
      email: faker.internet.email(),
      image: faker.image.imageUrl(),
    },
    {
      id: 1,
      name: "CUSTOMER",
    }
  );

  const mockAdmin = AuthC.createTokenFromUser(
    {
      id: faker.random.numeric(2),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      image: faker.image.imageUrl(),
    },
    {
      id: 2,
      name: "ADMIN",
    }
  );

  describe("GET /v1/cars => Get all car", () => {
    it("should respond with a 200 status code", async () => {
      await request(app).get("/v1/cars").expect(200);
    });
  });

  describe("POST /v1/cars => Create a car", () => {
    it("should respond with a 401 status code", async () => {
      await request(app).post("/v1/cars").send(mockCar).expect(401);
    });
    it("should respond with a 401 status code", async () => {
      await request(app)
        .post("/v1/cars")
        .send(mockCar)
        .set("Authorization", `Bearer ${mockCustomer}`)
        .expect(401);
    });
    it("should respond with a 201 status code", async () => {
      await request(app)
        .post("/v1/cars")
        .send(mockCar)
        .set("Authorization", `Bearer ${mockAdmin}`)
        .expect(201);
    });
  });

  describe("GET /v1/cars/{id} => Get a car by id", () => {
    it("should respond with a 200 status code", async () => {
      const car = await Car.create(mockCar);

      await request(app).get(`/v1/cars/${car.id}`).expect(200);
    });
  });

  describe("DELETE /v1/cars/{id} => Delete a car", () => {
    it("should respond with a 401 status code", async () => {
      const car = await Car.create(mockCar);
      await request(app).delete(`/v1/cars/${car.id}`).expect(401);
    });
    it("should respond with a 200 status code", async () => {
      const car = await Car.create(mockCar);
      await request(app)
        .delete(`/v1/cars/${car.id}`)
        .set("Authorization", `Bearer ${mockAdmin}`)
        .expect(204);
    });
  });

  describe("PUT /v1/cars/{id} => Update a car", () => {
    const mockCarUpdate = {
      name: faker.vehicle.model(),
      price: faker.random.numeric(6),
      image: faker.image.imageUrl(),
      size: "SMALL",
    };
    it("should respond with a 401 status code", async () => {
      const car = await Car.create(mockCar);
      await request(app)
        .put(`/v1/cars/${car.id}`)
        .send(mockCarUpdate)
        .expect(401);
    });
    it("should respond with a 401 status code", async () => {
      const car = await Car.create(mockCar);
      await request(app)
        .put(`/v1/cars/${car.id}`)
        .send(mockCar)
        .set("Authorization", `Bearer ${mockCustomer}`)
        .expect(401);
    });
    it("should respond with a 200 status code", async () => {
      const car = await Car.create(mockCar);
      await request(app)
        .put(`/v1/cars/${car.id}`)
        .send(mockCarUpdate)
        .set("Authorization", `Bearer ${mockAdmin}`)
        .expect(200);
    });
  });

  describe("POST /v1/cars/{id}/rent => Rent a car", () => {
    const mockRent = {
      rentStartedAt: faker.date.future(),
      rentEndedAt: faker.date.future(),
    };
    it("should respond with a 401 status code", async () => {
      const car = await Car.create(mockCar);
      await request(app)
        .post(`/v1/cars/${car.id}/rent`)
        .send(mockRent)
        .expect(401);
    });
    it("should respond with a 401 status code", async () => {
      const car = await Car.create(mockCar);
      await request(app)
        .post(`/v1/cars/${car.id}/rent`)
        .send(mockRent)
        .set("Authorization", `Bearer ${mockAdmin}`)
        .expect(401);
    });
    it("should respond with a 200 status code", async () => {
      const car = await Car.create(mockCar);
      await request(app)
        .post(`/v1/cars/${car.id}/rent`)
        .set("Authorization", `Bearer ${mockCustomer}`)
        .expect(201);
    });
  });
});
