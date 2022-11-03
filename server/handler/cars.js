const { getHTML } = require("../helper");

const html = getHTML("cars.html");

module.exports = {
  path: "/cars",
  method: "GET",
  handler: (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    return;
  },
};
