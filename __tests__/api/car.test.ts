import request from "supertest";

import app from "../../src/app";
import Car from "../../src/models/car";

const image = `${__dirname}/../../submission/diagram.png`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mock: any = {
  name: "bmw",
  cost: 3000,
  capacity: 2,
  image: image,
};

const createFalseMock = [
  {
    cost: 3000,
    capacity: 2,
    image: image,
  },
  {
    name: "bmw",
    capacity: 2,
    image: image,
  },
  {
    name: "bmw",
    cost: 3000,
    image: image,
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
      await request(app)
        .post("/api/cars")
        .field("name", mock.name)
        .field("cost", mock.cost)
        .field("capacity", mock.capacity)
        .attach("image", image)
        .set("Content-Type", "multipart/form-data")
        .expect(201);
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
      await request(app)
        .put(`/api/cars/${car.id}`)
        .field("name", payload.name)
        .field("cost", payload.cost)
        .attach("image", image)
        .set("Content-Type", "multipart/form-data")
        .expect(200);
    });
  });

  describe("DELETE /:id  => delete a car", () => {
    it("should respond with a 200 status code", async () => {
      const car = await Car.create(mock);
      await request(app).delete(`/api/cars/${car.id}`).expect(200);
    });
  });
});
