const express = require("express");
const router = express.Router();

// import model
const Favs = require("../models/Favs");

// function to check if user is connected
const isAuthenticated = require("../middlewares/isAuthenticated");

// Route to create a fav
router.post("/favs", isAuthenticated, async (req, res) => {
  try {
    const { itemId, title, name, path, extension } = req.body;
    const newFav = new Favs({
      itemId,
      title,
      name,
      path,
      extension,
      owner: req.user,
    });
    await newFav.save();
    res.status(200).json(newFav);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get all favs
router.get("/favs", isAuthenticated, async (req, res) => {
  try {
    const allFavs = await Favs.find();
    res.status(200).json({ allFavs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete a fav by id
router.delete("/favs/:id", isAuthenticated, async (req, res) => {
  try {
    await Favs.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Fav successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
