exports.findAll = (req, res) => {
  res.json({ message: "Get all products" });
};

exports.find = (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Get a product with id: ${productId}` });
};

exports.create = (req, res) => {
  res.json({ message: "Create a product" });
};

exports.update = (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Update a product with id: ${productId}` });
};

exports.delete = (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Delete a product with id: ${productId}` });
};
