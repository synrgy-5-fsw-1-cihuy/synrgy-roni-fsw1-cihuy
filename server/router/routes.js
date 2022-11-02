const fs = require("fs");

const routes = [];

const handlers = fs
  .readdirSync("./server/handler")
  .filter((file) => file.endsWith(".js"));

for (const handler of handlers) {
  const route = require(`../handler/${handler}`);
  routes.push(route);
}

module.exports = routes;
