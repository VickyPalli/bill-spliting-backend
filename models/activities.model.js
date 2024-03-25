const { Schema } = require("mongoose");
const dbConnection = require("./dbbase.js");

const activitiesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

ActivitiesModel = dbConnection.model("activities", activitiesSchema);

module.exports = ActivitiesModel;
