const path = require("path");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const PORT = 8002;

const connectDb = require("./database/index");
connectDb();
const { checkForAuthCookie } = require("./middlewares/authentication");
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");
const Blog = require("./model/blogModel");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthCookie("token"));

app.get("/", async (req, res) => {
  const allBlog = await Blog.find({});
  res.render("index", {
    blogs: allBlog,
  });
});

// Router
app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.use(express.static(path.resolve("./public")));

app.listen(PORT, () => {
  console.log(`Server listening at port : ${PORT}`);
});
