const mongoose = require("mongoose");
const User = require("../models/User");

const isAuthenticated = async (req, res, next) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization.replace("Bearer ", "");
  const userConnected = await User.findOne({ token: token }).select(
    "account _id"
  );
  console.log(userConnected);
  if (!userConnected) {
    res.status(401).json({
      message: "User is not connected, signup or login to your account",
    });
  } else {
    req.user = userConnected;
    next();
  }
};

module.exports = isAuthenticated;
