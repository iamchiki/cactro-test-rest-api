const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers["cookie"]; // get the session cookie from request header

    if (!authHeader) return res.sendStatus(401); // if there is no cookie from request header, send an unauthorized response.
    const cookie = authHeader.split("=")[1]; // If there is, split the cookie string to get the actual jwt

    jwt.verify(cookie, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "This session has expired. Please login" });
      }

      const { userId } = decoded; // get user id from the decoded token
      const user = await User.findById(userId);
      console.log("user", user);

      const { password, ...data } = user; // return user object without the password
      req.user = data;
      next();
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
