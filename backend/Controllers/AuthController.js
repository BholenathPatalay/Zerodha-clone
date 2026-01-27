const User = require("../model/UserModel");
const { createSecretToken } = require("../util/secretToken");
const bcrypt = require("bcrypt");
const { setTokenCookie, clearTokenCookie } = require("../util/setTokenCookie");

module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password, createdAt } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
      createdAt,
    });

    const token = createSecretToken(user._id);

    setTokenCookie(res, token);

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    console.log("User Signup Err", err);
    return res.status(500).json({
      message: "Signup Error",
      success: false,
    });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const token = createSecretToken(user._id);

    setTokenCookie(res, token);

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    console.log("Login Error", err);
    return res.status(500).json({
      message: "Login Error",
      success: false,
    });
  }
};

module.exports.Logout = async (req, res) => {
  try {
    clearTokenCookie(res);

    return res.status(200).json({
      message: "User logged out successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Logout Error",
      success: false,
    });
  }
};
