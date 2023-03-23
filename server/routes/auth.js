const { response } = require("express");
const express = require("express");
const router = express.Router();
const signuptemp = require("../models/signupmodel");
const otpmodel = require("../models/otp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async (req, res) => {
  const usercheck = await signuptemp.findOne({ username: req.body.username });
  const emailcheck = await signuptemp.findOne({ email: req.body.email });
  const phonecheck = await signuptemp.findOne({ phone: req.body.phone });
  if (usercheck == null && emailcheck == null && phonecheck == null) {
    const saltpwd = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(req.body.password, saltpwd);
    const signupuser = new signuptemp({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: securepassword,
      gender: req.body.gender,
    });
    signupuser
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((e) => {
        res.json(e);
      });
  } else if (usercheck != null) {
    res.send("userexist");
  } else if (emailcheck != null) {
    res.send("emailexist");
  } else if (phonecheck != null) {
    res.send("phoneexist");
  }
});

//login
router.post("/login", async (req, res) => {
  const usercheck = await signuptemp.findOne({ username: req.body.username });
  if (usercheck == null) {
    res.send("newuser");
  } else {
    const validate = await bcrypt.compare(
      req.body.password,
      usercheck.password
    );
    if (!validate) {
      res.send("invalid");
    } else {
      signuptemp
        .findOne({ username: req.body.username })
        // if email exists
        .then((user) => {
          // compare the password entered and the hashed password found
          bcrypt
            .compare(req.body.password, user.password)
            // if the passwords match
            .then((passwordCheck) => {
              // check if password matches
              if (!passwordCheck) {
                return res.status(400).send({
                  message: "Passwords does not match",
                  error,
                });
              }
              //   create JWT token
              const token = jwt.sign(
                {
                  userId: user._id,
                  userEmail: user.email,
                  userRole: user.role,
                },
                "RANDOM-TOKEN",
                { expiresIn: "2h" }
              );

              //   return success response
              res.status(200).send({
                message: "Login Successful",
                username: user.username,
                role: user.role,
                token,
              });
            })
            // catch error if password does not match
            .catch((error) => {
              res.status(400).send({
                message: "Passwords does not match",
                error,
              });
            });
        })
        // catch error if email does not exist
        .catch((e) => {
          res.status(404).send({
            message: "Email not found",
            e,
          });
        });
    }
  }
});

//email checking
router.post("/email", async (req, res) => {
  const email = req.body.email;
  const emailcheck = await signuptemp.findOne({ email: email });
  if (emailcheck) {
    const username = emailcheck.username;
    res.send({
      emailfound: "emailfound",
      username: username,
    });
  } else {
    res.send("emailnotfound");
  }
});
//opt saving
router.post("/otp", async (req, res) => {
  const otp1 = req.body.otp;
  const username1 = req.body.username;
  const optoldcheck = await otpmodel.find({ username: username1 }).deleteOne();
  console.log(req.body.otp);
  let otp = new otpmodel({
    username: username1,
    otp: otp1,
  });
  try {
    await otp.save();
    res.send("success");
  } catch (err) {
    console.log(err);
    res.send("fail");
  }
});
//sending otp
router.get("/otpget", async (req, res) => {
  try {
    const items = await otpmodel.find();
    res.json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//changing password
router.post("/changepass", async (req, res) => {
  const password = req.body.passwordnew;
  const username = req.body.username;
  const saltpwd = await bcrypt.genSalt(10);
  const securepassword = await bcrypt.hash(password, saltpwd);
  signuptemp
    .findOneAndUpdate({ username: username }, { password: securepassword })
    .then((result) => {
      // console.log(result);
      // console.log("qwerty");
      res.send("changed");
    })
    .catch((e) => {
      res.json(e);
    });
});

module.exports = router;
