const component = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Car ID",
    },
    name: {
      type: "string",
      description: "Car name",
    },
  },
};

const getAllCar = {
  get: {
    tags: ["cars"],
    summary: "Get all cars",
    description: "Get user profile",
    operationId: "getAllCar",
    parameters: [
      {
        name: "Authorization",
        in: "header",
        description: "Bearer token",
        required: true,
      },
    ],
    responses: {
      "200": {
        description: "Get all cars",
        content: {
          "application/json": {
            schema: {},
          },
        },
      },
      "401": {
        description: "Unauthorized",
        content: {
          "application/json": {
            schema: {},
          },
        },
      },
    },
  },
};

const getCarById = {
  post: {
    tags: ["cars"],
    summary: "Get car by id",
    description: "Get car by id",
    operationId: "getCarById",
    parameters: [],
    requestBody: {
      content: {},
      responses: {
        "200": {
          description: "Get car by id",
          content: {
            "application/json": {
              schema: {},
            },
          },
        },
      },
    },
  },
};

export default {
  component,
  getAllCar,
  getCarById,
};
