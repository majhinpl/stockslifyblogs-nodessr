const express = require("express");
const {
  handleRenderIndexPage,
  handleRenderRegisterPage,
} = require("../controllers/blogsControllers");

const router = express.Router();

router.get("/", handleRenderIndexPage);
router.get("/register", handleRenderRegisterPage);

module.exports = router;
