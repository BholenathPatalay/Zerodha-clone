module.exports.checkAuth = async (req, res) => {
  try {
    return res.status(200).json({ user: req.user.username });
  } catch (err) {
    return res.status(500).json({ message: "server error" });
  }
};
