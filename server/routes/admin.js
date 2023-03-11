const { response } = require("express");
const express = require("express");
const router = express.Router();
const signuptemp = require("../models/signupmodel");
const repairmodel = require("../models/repair");
const contactmodel = require("../models/contact");
const communitymodel = require("../models/community");
const testridemodel = require("../models/testride");
const cartmodel = require("../models/cart");

//overview
router.get("/overview", async (req, res) => {
  try {
    const repair = await repairmodel.find();
    const user = await signuptemp.find();
    const purchase = await cartmodel.find();
    const comment = await communitymodel.find();
    const testride = await testridemodel.find();
    const mail = await contactmodel.find();
    const data = {
      repairlen: repair.length,
      userlen: user.length,
      purchaselen: purchase.length,
      commentlen: comment.length,
      testridelen: testride.length,
      maillen: mail.length,
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
