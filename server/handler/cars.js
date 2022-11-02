const fs = require("fs");

const html = fs.readFileSync("./public/cars.html");

module.exports = {
  path: "/cars",
  method: "GET",
  handler: (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    return;
  },
};
