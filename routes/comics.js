const express = require("express");
const router = express.Router();
const axios = require("axios");

// get all comics with potential queries (limit (default 100) skip and title)
router.get("/comics", async (req, res) => {
  try {
    const { limit, skip, title } = req.query;
    // API key is mandatory
    let APIurl = `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY_MARVEL}`;
    // if limit is defined
    if (limit) {
      APIurl += `&limit=${limit}`;
    }
    // if skip is defined
    if (skip) {
      APIurl += `&skip=${skip}`;
    }
    // if name is defined
    if (title) {
      APIurl += `&name=${title}`;
    }

    const response = await axios.get(APIurl);

    res.status(400).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get comic data by comicId
router.get("/comic/:comicId", async (req, res) => {
  try {
    const comicId = req.params.comicId;
    // API key is mandatory after comicId
    const APIurl = `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.API_KEY_MARVEL}`;
    const response = await axios.get(APIurl);

    res.status(400).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get list of comics by characterId
router.get("/comics/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    // API key is mandatory after characterId
    const APIurl = `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`;
    const response = await axios.get(APIurl);

    res.status(400).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
