const orderService = require("./service.js");

const createOrder = async (req, res) => {
  try {
    const { token } = req.headers;
    const isTokenVerified = orderService.verifyToken(
      token,
      process.env.JWT_SECRET
    );
    if (!isTokenVerified) {
      return res
        .status(400)
        .json({ sucess: false, statusCode: 400, message: "unauthorized user" });
    }
    const { friends, bill, orderItemId, orderName } = req.body;
    const order = await orderService.create({
      userId: isTokenVerified._id,
      friends,
      bill,
      orderItemId,
      orderName,
    });
    res.status(200).json({
      sucess: true,
      statusCode: 200,
      message: "order created successfully",
      data: { order },
    });
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, statusCode: 500, message: error.message });
  }
};

const fetchUserOrders = async (req, res) => {
  try {
    const { token } = req.headers;
    const isTokenVerified = orderService.verifyToken(
      token,
      process.env.JWT_SECRET
    );
    if (!isTokenVerified) {
      return res
        .status(400)
        .json({ sucess: false, statusCode: 400, message: "unauthorized user" });
    }
    const orders = await orderService.findAllOrders({
      userId: isTokenVerified._id,
    });
    res.status(200).json({
      sucess: true,
      statusCode: 200,
      message: "orders fetched successfully",
      data: { orders },
    });
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, statusCode: 500, message: error.message });
  }
};

const mealsListing = async (req, res) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res
        .status(400)
        .json({ sucess: false, statusCode: 400, message: "token not found" });
    }
    const isTokenVerified = orderService.verifyToken(
      token,
      process.env.JWT_SECRET
    );
    if (!isTokenVerified) {
      return res
        .status(400)
        .json({ sucess: false, statusCode: 400, message: "unauthorized user" });
    }
    const meals = await orderService.findAllMeals({});
    res.status(200).json({
      sucess: true,
      statusCode: 200,
      message: "meals fetched successfully",
      data: { meals },
    });
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, statusCode: 500, message: error.message });
  }
};
module.exports = { createOrder, fetchUserOrders, mealsListing };
