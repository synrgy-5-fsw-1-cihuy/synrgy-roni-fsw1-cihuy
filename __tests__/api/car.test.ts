import request from "supertest";

import app from "../../src/app";
import Car from "../../src/models/car";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mock: any = {
  name: "bmw",
  cost: 3000,
  capacity: 2,
  image: "https://binarc4.zekhoi.dev/assets/img/cars/car01.min.jpg",
};

const createFalseMock = [
  {
    cost: 3000,
    capacity: 2,
    image: "https://binarc4.zekhoi.dev/assets/img/cars/car01.min.jpg",
  },
  {
    name: "bmw",
    capacity: 2,
    image: "https://binarc4.zekhoi.dev/assets/img/cars/car01.min.jpg",
  },
  {
    name: "bmw",
    cost: 3000,
    image: "https://binarc4.zekhoi.dev/assets/img/cars/car01.min.jpg",
  },
  {
    name: "bmw",
    cost: 3000,
    capacity: 2,
  },
  {},
];

describe("Test Car API Endpoint", () => {
  describe("GET / => get all car", () => {
    it("should respond with a 200 status code", async () => {
      await request(app).get("/api/cars").expect(200);
    });
  });

  describe("POST / => create a car", () => {
    it("should respond with a 201 status code", async () => {
      await request(app).post("/api/cars").send(mock).expect(201);
    });

    it("should respond with a 400 status code", async () => {
      for (const mock of createFalseMock) {
        await request(app).post("/api/cars").send(mock).expect(400);
      }
    });
  });

  describe("GET /:id => get a car", () => {
    it("should respond with a 200 status code", async () => {
      const car = await Car.create(mock);
      await request(app).get(`/api/cars/${car.id}`).expect(200);
    });
  });

  describe("PUT /:id => update a car", () => {
    it("should respond with a 200 status code", async () => {
      const car = await Car.create(mock);
      const payload = {
        name: "bmw",
        cost: 3000,
      };
      await request(app).put(`/api/cars/${car.id}`).send(payload).expect(200);
    });
  });

  describe("DELETE /:id  => delete a car", () => {
    it("should respond with a 200 status code", async () => {
      const car = await Car.create(mock);
      await request(app).delete(`/api/cars/${car.id}`).expect(200);
    });
  });
});
