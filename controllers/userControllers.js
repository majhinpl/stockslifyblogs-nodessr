const User = require("../model/userModel");
const mongoose = require("mongoose");

const handleRegisterUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.send("Please provide username, email, password");
  }
  await User.create({
    username,
    email,
    password,
  });
  res.send("User registered");
};

module.exports = {
  handleRegisterUser,
};
