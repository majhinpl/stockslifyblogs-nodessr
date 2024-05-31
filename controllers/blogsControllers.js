const express = require("express");
const app = express();
app.set("view engine", "ejs");

function handleRenderIndexPage(req, res) {
  res.render("index");
}

function handleRenderRegisterPage(req, res) {
  res.render("auth/register");
}

module.exports = {
  handleRenderIndexPage,
  handleRenderRegisterPage,
};
