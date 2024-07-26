const User = require("../model/userModel");

renderRegisterPage = (req, res) => {
  return res.render("auth/register");
};

renderLoginPage = (req, res) => {
  return res.render("auth/login");
};

handleLogoutPage = (req, res) => {
  res.clearCookie("token").redirect("/");
};

handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.send("Please provide email or password");

  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);

    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("auth/login", {
      error: "incorrect Email or Password",
    });
  }
};

handleRegister = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      res.send("Please enter your fullName, email, password!");
    }

    await User.create({
      fullName,
      email,
      password,
    });

    console.log("user created");
    return res.redirect("login");
  } catch (error) {
    return res.send("unable to register user");
  }
};

module.exports = {
  renderRegisterPage,
  renderLoginPage,
  handleLogoutPage,
  handleLogin,
  handleRegister,
};
