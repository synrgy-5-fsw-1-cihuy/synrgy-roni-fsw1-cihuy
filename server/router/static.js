const fs = require("fs");
const url = require("url");

const fileTypes = {
  css: "text/css",
  js: "application/javascript",
  ico: "image/x-icon",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  svg: "image/svg+xml",
  json: "application/json",
  map: "application/json",
  txt: "text/plain",
};

module.exports = (req, res) => {
  const pathname = url.parse(req.url, true).pathname;
  fs.readFile("./public" + pathname, (err, file) => {
    if (err) {
      res.status = 404;
      res.end("404 Not Found");
      return;
    }

    for (const [key] of Object.entries(fileTypes)) {
      const end = `.${key}`;
      if (req.url.endsWith(end)) {
        res.setHeader("Content-Type", fileTypes[key]);
        res.end(file);
        return;
      }
    }
  });
  return;
};
