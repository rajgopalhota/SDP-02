const mongoose = require("mongoose");
const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();

var currentOffset = today.getTimezoneOffset();
var ISTOffset = 330;   // IST offset UTC +5:30 
var ISTTime = new Date(today.getTime() + (ISTOffset + currentOffset)*60000);
var hoursIST = ISTTime.getHours()
var minutesIST = ISTTime.getMinutes()

const currentDate =  dd + "-" + mm + "-" + yyyy + " at "+hoursIST + ":" + minutesIST;

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
  gender: {
    type: String,
    default: "Male",
  },
});

module.exports = mongoose.model("Community", community);
