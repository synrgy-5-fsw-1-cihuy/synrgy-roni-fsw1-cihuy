import request from "supertest";

import app from "@/app";

describe("Test Main Application", () => {
  test("GET / should respond with a 200 status code", async () => {
    await request(app).get("/").expect(200);
  });
});
