const { response } = require("express");
const express = require("express");
const router = express.Router();
const signuptemp = require("../models/signupmodel");
const repairmodel = require("../models/repair");
const contactmodel = require("../models/contact");
const communitymodel = require("../models/community");
const {testride} = require("./EmailRoutes/Tesride")
const {repair} = require("./EmailRoutes/Repair")
//repair backend module
router.route("/repair").post(repair);

//repair history
router.get("/repairhistory/:user", async (req, res) => {
  try {
    const user = req.params.user;
    const history = await repairmodel.find({ username: user });
    res.json(history);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Deleting cart
router.delete('/deletehistory/:id', async (req, res) => {
  const pid = req.params.id;
  const result = await repairmodel.deleteOne({ _id: pid });
  res.send(result);
})

// contact
router.post("/contact", async (req, res) => {
  const name = req.body.username;
  const email = req.body.email;
  const phone = req.body.phone;
  const msg = req.body.message;
  const usercheck = await signuptemp.findOne({ username: name });
  if (usercheck == null) {
    res.send("notvalidname");
  } else if (usercheck.email != email) {
    res.send("notvalidemail");
  } else if (phone == "") {
    res.send("nophone");
  } else if (msg == "") {
    res.send("nomsg");
  } else {
    const contact = new contactmodel({
      username: name,
      email: email,
      phone: phone,
      message: msg,
    });
    try {
      await contact.save();
      res.send("message sent");
    } catch (err) {
      console.log(err);
      res.send("Not saved");
    }
  }
});

//testride
router.route("/testride").post(testride);

// community
router.get("/community", async (req, res) => {
  try {
    const notes = await communitymodel.find();
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//comment
router.post("/comment", async (req, res) => {
  const username = req.body.username;
  const msg = req.body.message;
  const time = req.body.date;
  const usercheck = await signuptemp.findOne({ username: username });
  let comment;
  if (username != null) {
    comment = new communitymodel({
      username: username,
      message: msg,
      date: time,
      gender: usercheck.gender,
    });
  } else {
    comment = new communitymodel({
      message: msg,
      date: time,
    });
  }
  try {
    await comment.save();
    res.send("success");
  } catch (err) {
    console.log(err);
    res.send("fail");
  }
});

module.exports = router;
