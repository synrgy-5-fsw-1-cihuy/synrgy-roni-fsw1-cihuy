const express = require("express");

const HomeRouter = express.Router();

HomeRouter.get("/", (req, res) => {
  res.send("Hello Home!");
});

module.exports = HomeRouter;
