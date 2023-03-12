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

//catalog table data
router.get("/catalog", async (req, res) => {
  try {
    const items = await cartmodel.find();
    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//user table data
router.get("/users", async (req, res) => {
  try {
    const items = await signuptemp.find();
    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//mail table data
router.get("/contact", async (req, res) => {
  try {
    const items = await contactmodel.find();
    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//community table data
router.get("/community", async (req, res) => {
  try {
    const items = await communitymodel.find();
    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//registry table data
router.get("/testride", async (req, res) => {
  try {
    const items = await testridemodel.find();
    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


//repair table data
router.get("/repairs", async (req, res) => {
  try {
    const items = await repairmodel.find();
    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Deleting cart
router.delete('/deletecarthistory/:id', async (req, res) => {
  const pid = req.params.id;
  const result = await cartmodel.deleteOne({ _id: pid });
  res.send(result);
})
// Deleting community
router.delete('/deletecommunityhistory/:id', async (req, res) => {
  const pid = req.params.id;
  const result = await communitymodel.deleteOne({ _id: pid });
  res.send(result);
})

// Deleting contact
router.delete('/deletecontacthistory/:id', async (req, res) => {
  const pid = req.params.id;
  const result = await contactmodel.deleteOne({ _id: pid });
  res.send(result);
})

// Deleting repair
router.delete('/deleterepairhistory/:id', async (req, res) => {
  const pid = req.params.id;
  const result = await repairmodel.deleteOne({ _id: pid });
  res.send(result);
})

// Deleting testride
router.delete('/deletetestridehistory/:id', async (req, res) => {
  const pid = req.params.id;
  const result = await testridemodel.deleteOne({ _id: pid });
  res.send(result);
})

// Deleting users
router.delete('/deleteusershistory/:id', async (req, res) => {
  const pid = req.params.id;
  const result = await signuptemp.deleteOne({ _id: pid });
  res.send(result);
})






module.exports = router;
