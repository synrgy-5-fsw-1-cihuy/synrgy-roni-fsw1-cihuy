const express = require("express");
const ProductRouter = require("./product.route");
const HomeRouter = require("./home.route");

const router = express.Router();

router.use("/", HomeRouter);
router.use("/api/products", ProductRouter);

module.exports = router;
