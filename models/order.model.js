const { Schema } = require("mongoose");
const dbConnection = require("./dbbase.js");

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  OrderItemId: {
    type: Schema.Types.ObjectId,
    ref: "orderItems",
  },
  bill: {
    type: Number,
  },
  friends: {
    type: Number,
  },
});

export const OrderModel = dbConnection.model("orders", orderSchema);
