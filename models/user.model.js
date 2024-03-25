const { Schema } = require("mongoose");
const dbConnection = require("./dbbase.js");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

UserModel = dbConnection.model("users", userSchema);

module.exports = UserModel;
