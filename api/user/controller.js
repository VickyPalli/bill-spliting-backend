const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { config } = require("dotenv");
const userService = require("./service.js");

config();
const signUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const existingUser = await userService.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        sucess: false,
        statusCode: 400,
        message: "user already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.create({
      email,
      name,
      password: hashedPassword,
    });

    res.status(200).json({
      sucess: true,
      statusCode: 200,
      message: "user created successfully",
      data: {},
    });
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, statusCode: 500, message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ sucess: false, statusCode: 400, message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ sucess: false, statusCode: 400, message: "invalid password" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({
      sucess: true,
      statusCode: 200,
      message: "user signed in successfully",
      data: { token },
    });
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, statusCode: 500, message: error.message });
  }
};

module.exports = { signUp, signIn };
