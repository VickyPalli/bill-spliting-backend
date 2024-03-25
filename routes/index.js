const express = require("express");
const userRoter = require("../api/user/routes.js");
const apiRoutes = express.Router();

apiRoutes.use("/user", userRoter);

module.exports = apiRoutes;
