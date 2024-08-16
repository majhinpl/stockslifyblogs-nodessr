const Blog = require("../model/blogModel");
const Comment = require("../model/comments");

exports.renderAddBlogPage = (req, res) => {
  res.render("addBlog", {
    user: req.user,
  });
};

exports.renderSingleBlogPage = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("createdBy");
  const comments = await Comment.find({ blogId: req.params.id }).populate(
    "createdBy"
  );
  console.log("comments", comments);
  return res.render("singleBlog", {
    user: req.user,
    blog,
    comments,
  });
};

exports.handleComments = async (req, res) => {
  await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });

  return res.redirect(`/blog/${req.params.blogId}`);
};

exports.handleAddBlog = async (req, res) => {
  const { body, title, shortText } = req.body;
  const blog = await Blog.create({
    body,
    title,
    shortText,
    createdBy: req.user._id,
    coverImageUrl: `/uploads/${req.file.filename}`,
  });
  return res.redirect(`/blog/${blog._id}`);
};
