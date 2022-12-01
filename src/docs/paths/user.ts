const getCurrentUser = {
  get: {
    tags: ["users"],
    summary: "Get user profile",
    description: "Get user profile",
    operationId: "getProfile",
    parameters: [
      {
        name: "Authorization",
        in: "header",
        description: "Bearer token",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      "200": {
        description: "User profile",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/User",
            },
          },
        },
      },
      "401": {
        description: "Unauthorized",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "number",
                  description: "Status Code",
                },
                message: {
                  type: "string",
                  description: "Message",
                },
              },
            },
          },
        },
      },
    },
  },
};

const login = {
  post: {
    tags: ["users"],
    summary: "Login",
    description: "Login",
    operationId: "login",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UserLoginRequest",
          },
        },
      },
    },
    responses: {
      "200": {
        description: "Login success",
        content: {
          "application/json": {
            schema: {
              type: "object",
              status: {
                type: "number",
                description: "Status Code",
              },
              message: {
                type: "string",
                description: "Message",
              },
              data: {
                schema: {
                  $ref: "#/components/schemas/UserLoginResponse",
                },
              },
            },
          },
        },
      },
    },
  },
};

const register = {
  post: {
    tags: ["users"],
    summary: "Register",
    description: "Register",
    operationId: "register",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UserRegisterRequest",
          },
        },
      },
    },
    responses: {
      "200": {
        description: "Register success",
        content: {
          "application/json": {
            schema: {
              type: "object",
              status: {
                type: "number",
                description: "Status Code",
              },
              message: {
                type: "string",
                description: "Message",
              },
              data: {
                schema: {
                  $ref: "#/components/schemas/UserRegisterResponse",
                },
              },
            },
          },
        },
      },
    },
  },
};

export default {
  getCurrentUser,
  login,
  register,
};
