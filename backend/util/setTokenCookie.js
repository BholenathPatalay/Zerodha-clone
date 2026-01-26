const cookieOptions = {
  withCredentials: true,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
};

module.exports.setTokenCookie = (res, token) => {
  res.cookie("token", token, cookieOptions);
}

module.exports.clearTokenCookie = (res) => {
  res.clearCookie("token", cookieOptions);
}