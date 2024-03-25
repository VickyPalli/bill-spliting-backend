const mongoose = require("mongoose");
const { config } = require("dotenv");

config();

dbConnection = mongoose.createConnection(process.env.MONGO_URI ?? "");

module.exports = dbConnection;
