const fs = require("fs");

const fileTypes = {
  css: "text/css",
  js: "application/javascript",
  ico: "image/x-icon",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  svg: "image/svg+xml",
  json: "application/json",
  txt: "text/plain",
};

module.exports = (req, res) => {
  fs.readFile("./public" + req.url, (err, file) => {
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
