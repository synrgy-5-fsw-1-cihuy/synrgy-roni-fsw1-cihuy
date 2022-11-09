const auth = (req, res, next) => {
  const role = req.headers.mrole?.toLowerCase();
  const auth = req.headers.authorization;

  console.log(role);

  console.log(req.path);
  console.log("");
  // if (!role) {
  //   res.status(401).json({ message: "Unauthorized" });
  //   return;
  // }

  if (auth && role === "user" && req.method === "GET") {
    next();
    return;
  }

  if (auth && role === "admin") {
    next();
    return;
  }

  // res.status(400).json({ message: "Bad Request" });
  res.status(401).json({ message: "Unauthorized" });
  return;
};

module.exports = auth;
