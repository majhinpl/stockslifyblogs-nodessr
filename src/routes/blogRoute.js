const express = require("express");
const path = require("path");
const {
  renderAddBlogPage,
  renderSingleBlogPage,
  handleComments,
  handleAddBlog,
} = require("../controllers/blogController");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.route("/write").get(renderAddBlogPage);

router.route("/write").post(upload.single("coverImage"), handleAddBlog);

router.route("/:id").get(renderSingleBlogPage);

router.route("/comment/:blogId").post(handleComments);

module.exports = router;
