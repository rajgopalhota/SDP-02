const { response } = require("express");
const express = require("express");
const router = express.Router();
const signuptemp = require("../models/signupmodel");
const repairmodel = require("../models/repair");
const contactmodel = require("../models/contact");
const communitymodel = require("../models/community");
const testridemodel = require("../models/testride");

//repair backend module
router.post("/repair", async (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const phone = req.body.phone;
    const carname = req.body.carname;
    const date = req.body.date;
    const time = req.body.time;
    const city = req.body.city;
    if (username == null) {
        res.send("Please Login");
    } else if (name == "") {
        res.send("Enter Name");
    } else if (phone == "") {
        res.send("Enter Phone number");
    } else if (carname == "") {
        res.send("Enter CarName");
    } else if (date == "") {
        res.send("Select Date");
    } else if (time == "") {
        res.send("Select Time");
    } else if (city == "") {
        res.send("Enter City");
    } else {
        const repair = new repairmodel({
            username: username,
            name: name,
            phone: phone,
            carname: carname,
            date: date,
            time: time,
            city: city,
        });
        try {
            await repair.save();
            res.send("success");
        } catch (err) {
            console.log(err);
            res.send("Not saved");
        }
    }
});


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
router.post("/testride", async (req, res) => {
    const name = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const date = req.body.date;
    const time = req.body.time;
    const cartype=req.body.cartype
        const testride = new testridemodel({
            username: name,
            email: email,
            phone: phone,
            date: date,
            time:time,
            cartype:cartype
        });
        try {
            await testride.save();
            res.send("message sent");
        } catch (err) {
            console.log(err);
            res.send("Not saved");
        }
    
});

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
    }
    else {
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