const express = require("express");
const User = require("../model/userModel");
const {
  renderRegisterPage,
  renderLoginPage,
  handleLogoutPage,
  handleLogin,
  handleRegister,
} = require("../controllers/userController");
const router = express.Router();

router.route("/register").get(renderRegisterPage).post(handleRegister);
router.route("/login").get(renderLoginPage).post(handleLogin);
router.route("/logout").get(handleLogoutPage);

module.exports = router;
