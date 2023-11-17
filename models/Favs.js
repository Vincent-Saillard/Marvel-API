const mongoose = require("mongoose");

const Favs = mongoose.model("Favs", {
  itemId: String,
  title: String,
  name: String,
  thumbnail: {
    path: String,
    extension: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Favs;
