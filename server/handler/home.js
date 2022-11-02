const fs = require("fs");

const html = fs.readFileSync("./public/index.html");

module.exports = {
  path: "/",
  method: "GET",
  handler: (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    return;
  },
};
