const mongoose = require("mongoose");
const testride = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  cartype: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Testride", testride);
