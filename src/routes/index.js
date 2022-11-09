const express = require("express");
const webRouter = require("./web");
const APIRouter = require("./api");

const router = express.Router();

router.use(webRouter);
router.use("/api", APIRouter);

module.exports = router;
