const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const apiRoutes = require("./routes/index.js");

const app = express();

//middlewares
config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("App is listening At", PORT);
});

app.get("/", (req, res) => {
  res.send("Welcome to staging micro service....");
});

//routes
app.use("/api", apiRoutes);
