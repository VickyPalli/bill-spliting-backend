const { Schema } = require("mongoose");
const dbConnection = require("./dbbase.js");

const mealsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
});

export const MealsModel = dbConnection.model("meals", mealsSchema);
