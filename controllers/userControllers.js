const User = require("../model/userModel");

const handleUserRegister = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.send("Please provide username, email, password");
  }
  await User.create({
    fullName,
    email,
    password,
  });
  console.log("user created");
  res.redirect("/login");
};

const handleUserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.matchPassword(email, password);

    console.log("User", user);

    res.redirect("/");
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: true,
      message: "Couldn't login. Please try again.",
    });
  }
};

module.exports = {
  handleUserRegister,
  handleUserLogin,
};
