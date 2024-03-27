const express = require("express");
const UserController = require("./controller.js");

const userRoter = express.Router();
userRoter.post("/signup", UserController.signUp);
userRoter.post("/signin", UserController.signIn);

module.exports = userRoter;
