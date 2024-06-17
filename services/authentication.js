const jwt = require("jsonwebtoken");

const secret = process.env.AUTH_SECRET;

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImageUrl: user.profileImageUrl,
    role: user.role,
  };

  const token = jwt.sign(payload, secret);
  return token;
}

function vaidateToken(token) {
  const payload = jwt.verify(token, secret);
  return payload;
}

module.exports = {
  createTokenForUser,
  vaidateToken,
};
