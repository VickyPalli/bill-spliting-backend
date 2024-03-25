const { Schema } = require("mongoose");
const dbConnection = require("./dbbase.js");

const mealsSchema = new Schema({
  foodName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  foodType: {
    type: String,
  },
  protein: {
    type: String,
  },
});

MealsModel = dbConnection.model("meals", mealsSchema);
module.exports = MealsModel;
