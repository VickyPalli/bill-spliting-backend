const express = require("express");
const UserController = require("./controller.js");

const userRoter = express.Router();
userRoter.get("/signup", UserController.signUp);
userRoter.get("/signin", UserController.signIn);

module.exports = userRoter;
