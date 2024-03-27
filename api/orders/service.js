const OrderModel = require("../../models/order.model");
const MealsModel = require("../../models/meals.model");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");

config();

const create = async (payload) => {
  return OrderModel.create(payload);
};

const findAllMeals = async (payload) => {
  return MealsModel.find(payload);
};

const findAllOrders = async (payload) => {
  return OrderModel.find(payload);
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { create, findAllMeals, findAllOrders, verifyToken };
