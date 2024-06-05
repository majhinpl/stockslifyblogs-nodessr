const express = require("express");
const app = express();
const path = require("path");
const PORT = 8001;
const dotenv = require("dotenv");
dotenv.config();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false })); // SSR
app.use(express.json()); // external like react

const dbConnect = require("./database/index");
dbConnect();
const userRouter = require("./routes/userRoute");
const blogRouter = require("./routes/blogRoute");

// Routes
app.use("/", userRouter);
app.use("/", blogRouter);

// Access to css files
app.use(express.static("public/css/"));
app.use(express.static("public/images/"));

app.listen(PORT, () => {
  console.log(`Server listening at : ${PORT}`);
});
