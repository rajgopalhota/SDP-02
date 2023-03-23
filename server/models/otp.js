const mongoose = require("mongoose");
const otp = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  otp:{
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("OTP", otp);