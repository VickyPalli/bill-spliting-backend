const UserModel = require("../../models/user.model");

const create = async (payload) => {
  return UserModel.create(payload);
};

const findOne = async (payload) => {
  return UserModel.findOne(payload);
};

module.exports = { create, findOne };
