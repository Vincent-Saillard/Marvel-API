const express = require("express");
const router = express.Router();
const axios = require("axios");

// get all characters with potential queries (limit (default 100) skip and name)
router.get("/characters", async (req, res) => {
  try {
    const { limit, skip, name } = req.query;
    // API key is mandatory
    let APIurl = `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY_MARVEL}`;
    // if limit is defined
    if (limit) {
      APIurl += `&limit=${limit}`;
    }
    // if skip is defined
    if (skip) {
      APIurl += `&skip=${skip}`;
    }
    // if name is defined
    if (name) {
      APIurl += `&name=${name}`;
    }

    const response = await axios.get(APIurl);

    res.status(200).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get character data by id
router.get("/character/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    // API key is mandatory after characterId
    const APIurl = `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.API_KEY_MARVEL}`;
    const response = await axios.get(APIurl);

    res.status(200).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
