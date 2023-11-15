const express = require("express");
const cors = require("cors");

require("dotenv").config();

// Server creation
const app = express();
app.use(cors());

// Import routes
const charactersRoutes = require("./routes/characters");
const comicsRoutes = require("./routes/comics");
app.use(charactersRoutes);
app.use(comicsRoutes);

app.get("/", async (req, res) => {
  try {
    res.status(404).json({ message: "Welcome home" });
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
