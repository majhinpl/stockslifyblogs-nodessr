const express = require("express");
const {
  handleRenderIndexPage,
  handleRenderRegisterPage,
  handleRenderLoginPage,
} = require("../controllers/blogsControllers");

const router = express.Router();

router.get("/", handleRenderIndexPage);
router.get("/register", handleRenderRegisterPage);
router.get("/login", handleRenderLoginPage);

module.exports = router;
