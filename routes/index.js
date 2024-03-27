const express = require("express");
const userRoter = require("../api/user/routes.js");
const orderRoter = require("../api/orders/routes.js");
const apiRoutes = express.Router();

apiRoutes.use("/user", userRoter);
apiRoutes.use("/orders", orderRoter);

module.exports = apiRoutes;
