import env from "@constants/env";

const definition = {
  openapi: "3.0.0",
  info: {
    title: "Binar Synrgy Express API with Swagger",
    version: "1.0.0",
    description: "Binar Synrgy Express API with Swagger",
  },
  servers: [
    {
      url: `http://localhost:${env.PORT}`,
    },
  ],
};

const option = {
  definition,
  apis: ["./src/routes/api/*.ts", "./src/database/models/*.ts", "./src/dto/*.ts"],
};

export default option;
