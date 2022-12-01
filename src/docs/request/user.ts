const UserRequest = {
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

export default UserRequest;
