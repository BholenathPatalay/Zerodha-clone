const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 3 * 24 * 60 * 60 * 1000,
};

module.exports.setTokenCookie = (res, token) => {
  res.cookie("token", token, cookieOptions);
};

module.exports.clearTokenCookie = (res) => {
  res.clearCookie("token", cookieOptions);
};
