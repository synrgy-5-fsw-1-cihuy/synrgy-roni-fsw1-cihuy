import request from "supertest";

import app from "@/app";

describe("Test Car API Endpoint", () => {
    it("GET / should respond with a 200 status code", async () => {
      await request(app)
        .get("/api/cars")
        .expect(200);
    });
    it("GET /:id should respond with a 200 status code", async () => {
      await request(app)
        .get("/api/cars/1")
        .expect(200);
    });
    it("POST / should respond with a 200 status code", async () => {
      await request(app)
        .post("/api/cars").send({
          "name": "Toyota"
        })
        .expect(200);
    });
    it("PUT /:id should respond with a 200 status code", async () => {
      await request(app)
        .put("/api/cars/1")
        .expect(200);
    });
    it("DELETE /:id should respond with a 200 status code", async () => {
      await request(app)
        .delete("/api/cars/1")
        .expect(200);
    });
});
