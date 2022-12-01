const UserComponent = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "User ID",
    },
    name: {
      type: "string",
      description: "User name",
    },
    email: {
      type: "string",
      description: "User email",
    },
    password: {
      type: "string",
      description: "User password",
    },
    role: {
      type: "string",
      description: "User role",
    },
  },
};

const UserRegisterRequest = {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "User name",
    },
    email: {
      type: "string",
      description: "User email",
    },
    password: {
      type: "string",
      description: "User password",
    },
  },
};

const UserLoginRequest = {
  type: "object",
  properties: {
    email: {
      type: "string",
      description: "User email",
    },
    password: {
      type: "string",
      description: "User password",
    },
  },
};

const UserRegisterResponse = {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "User name",
    },
    email: {
      type: "string",
      description: "User email",
    },
  },
};

const UserLoginResponse = {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "User name",
    },
    email: {
      type: "string",
      description: "User email",
    },
    password: {
      type: "string",
      description: "User password",
    },
  },
};

export default {
  UserComponent,
  UserRegisterRequest,
  UserRegisterResponse,
  UserLoginRequest,
  UserLoginResponse,
};
