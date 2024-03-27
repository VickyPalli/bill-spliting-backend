const { Schema } = require("mongoose");
const dbConnection = require("./dbbase.js");

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  orderItemId: {
    type: Schema.Types.ObjectId,
    ref: "meals",
  },
  bill: {
    type: Number,
  },
  friends: {
    type: Number,
  },
});

OrderModel = dbConnection.model("orders", orderSchema);
module.exports = OrderModel;
