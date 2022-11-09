const express = require("express");
const HomeRouter = require("./home.route");

const router = express.Router();

router.use(HomeRouter);

module.exports = router;
