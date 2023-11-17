const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// Server creation
const app = express();
app.use(express.json());
app.use(cors());

// connexion to db
mongoose.connect(process.env.MONGODB_URI);

// Import routes
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");
const userRoutes = require("./routes/user");
const favsRoutes = require("./routes/favs");
app.use(charactersRoutes);
app.use(comicsRoutes);
app.use(userRoutes);
app.use(favsRoutes);

app.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: "Welcome home" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

// Starting server
app.listen(process.env.PORT, () => {
  console.log("Server started");
});
