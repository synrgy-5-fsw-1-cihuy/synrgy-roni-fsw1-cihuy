const CarComponent = {
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
    cost: {
      type: "number",
      description: "Car price",
    },
    capacity: {
      type: "string",
      description: "Car description",
    },
    image: {
      type: "string",
      description: "Car image",
    },
  },
};

export default { CarComponent };
