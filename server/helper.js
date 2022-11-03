const fs = require("fs");

const PUBLIC_PATH = "./public/";

const getHTML = (path) => {
  return fs.readFileSync(PUBLIC_PATH + path);
};

module.exports = {
  getHTML,
};
