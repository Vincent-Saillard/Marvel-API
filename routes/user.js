const express = require("express");
const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const router = express.Router();

// Import model
const User = require("../models/User");

// Route to create new user from homepage
router.post("/user/signup", async (req, res) => {
  try {
    // check if email is already in db or not
    const existingUser = await User.find({ email: req.body.email });
    if (existingUser.length > 0) {
      res
        .status(400)
        .json({ message: "This mail already exists, ask user to connect" });
    } else {
      const newSalt = uid2(16);
      const newToken = uid2(64);
      const newHash = SHA256(req.body.password + newSalt).toString(encBase64);
      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        token: newToken,
        hash: newHash,
        salt: newSalt,
      });
      await newUser.save();
      res.status(200).json({
        _id: newUser.id,
        token: newUser.token,
        username: newUser.username,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route allowing user to login
router.post("/user/login", async (req, res) => {
  try {
    const searchingUser = await User.find({ email: req.body.email });
    // if email does not exist in db
    if (searchingUser.length === 0) {
      res
        .status(400)
        .json({ message: "This email/password combination does not exist" });
    } else {
      const givenPassword = req.body.password;
      const savedSalt = searchingUser[0].salt;
      const savedHash = searchingUser[0].hash;
      if (savedHash !== SHA256(givenPassword + savedSalt).toString(encBase64)) {
        res
          .status(400)
          .json({ message: "This email/password combination does not exist" });
      } else {
        res.status(200).json({
          _id: searchingUser[0]._id,
          token: searchingUser[0].token,
          username: searchingUser[0].username,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
