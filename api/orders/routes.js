const express = require("express");
const OrderController = require("./controller.js");

const orderRoter = express.Router();
orderRoter.post("/create", OrderController.createOrder);
orderRoter.get("/", OrderController.fetchUserOrders);
orderRoter.get("/meals-listing", OrderController.mealsListing);

module.exports = orderRoter;
