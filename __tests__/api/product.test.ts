import request from "supertest";

import app from "@/app";

describe("Test Product API Endpoint", () => {
  describe("Authorized", () => {
    it("GET / should respond with a 200 status code", async () => {
      await request(app)
        .get("/api/products")
        .set("Authorization", "Bearer 123")
        .set("mRole", "admin")
        .expect(200);
    });
    it("GET /:id should respond with a 200 status code", async () => {
      await request(app)
        .get("/api/products/1")
        .set("Authorization", "Bearer 123")
        .set("mRole", "admin")
        .expect(200);
    });
    it("POST / should respond with a 200 status code", async () => {
      await request(app)
        .post("/api/products")
        .set("Authorization", "Bearer 123")
        .set("mRole", "admin")
        .expect(200);
    });
    it("PUT /:id should respond with a 200 status code", async () => {
      await request(app)
        .put("/api/products/1")
        .set("Authorization", "Bearer 123")
        .set("mRole", "admin")
        .expect(200);
    });
    it("DELETE /:id should respond with a 200 status code", async () => {
      await request(app)
        .delete("/api/products/1")
        .set("Authorization", "Bearer 123")
        .set("mRole", "admin")
        .expect(200);
    });
  });
  describe("Unauthorized", () => {
    it("GET / should respond with a 401 status code", async () => {
      await request(app).get("/api/products").expect(401);
    });
    it("GET /:id should respond with a 401 status code", async () => {
      await request(app).get("/api/products/1").expect(401);
    });
    it("POST / should respond with a 401 status code", async () => {
      await request(app).post("/api/products").expect(401);
    });
    it("PUT /:id should respond with a 401 status code", async () => {
      await request(app).put("/api/products/1").expect(401);
    });
    it("DELETE /:id should respond with a 401 status code", async () => {
      await request(app).delete("/api/products/1").expect(401);
    });
  });
});
