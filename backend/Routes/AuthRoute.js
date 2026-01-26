const { Signup, Login, Logout } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/Authmiddleware");
const { checkAuth } = require("../Controllers/VerifyController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

router.get("/checkAuth", userVerification, checkAuth);

module.exports = router;
