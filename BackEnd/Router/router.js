const express = require("express");
const router = express.Router();
const get = require("./RouterControl/Get");


router.get("/",get.home);

module.exports = router;