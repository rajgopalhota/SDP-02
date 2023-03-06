const mongoose = require("mongoose");
const cart = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  price:{
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cart", cart);