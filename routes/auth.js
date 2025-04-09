const express = require("express");

const { signUpController } = require("../controllers/signup");
const { signInController } = require("../controllers/signin");

const router = express.Router();

router.post("/signup", signUpController);
router.post("/signin", signInController);

module.exports = router;
