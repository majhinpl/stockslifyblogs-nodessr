const express = require("express");
const { handleRegisterUser } = require("../controllers/userControllers");
const router = express.Router();

router.post("/register", handleRegisterUser);

module.exports = router;
