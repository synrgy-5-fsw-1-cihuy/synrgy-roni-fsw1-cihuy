const routes = require("./routes");
const static = require("./static");
module.exports = (req, res) => {
  for (const route of routes) {
    if (req.url === route.path && req.method === route.method) {
      return route.handler(req, res);
    }
  }

  if (static) return static(req, res);

  res.status = 404;
  res.end("404 Not Found");
  return;
};
