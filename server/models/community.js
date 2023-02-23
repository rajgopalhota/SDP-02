const mongoose = require("mongoose");
const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();
const currentDate =  yyyy + "-" + mm + "-" + dd;


const community = new mongoose.Schema({
  username: {
    type: String,
    default: "Anonymous",
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: currentDate,
  },
});

module.exports = mongoose.model("Community", community);
