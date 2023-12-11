const { response } = require("express");
const express = require("express");
const router = express.Router();
const signuptemp = require("../models/signupmodel");
const otpmodel = require("../models/otp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/SendEmail");
const {otp} = require("./EmailRoutes/Otp")

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
                  
                },
                "RANDOM-TOKEN",
                { expiresIn: "90d" }
              );
              // res.cookie("authToken", token, {
              //   expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
              // });

              //   return success response
              console.log(user.role+"----- "+user.username+ token)
              res.status(200).send({
                message: "Login Successful",
                username: user.username,
                role: user.role,
                token:token,
             
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


//token decrpyting
router.get("/fetch-user", async(req,res)=>{
  try {
    // Get the token from the request headers
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: "Please provide a valid token in the Authorization header.",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, "RANDOM-TOKEN");

    // Find the user by the decoded ID
    const user = await signuptemp.findOne({ _id: decoded.userId } );

    if (!user) {
      return res.status(401).json({
        message: "User not found!",
      });
    }else{
      try{
      res.status(200).json({
        success:"true",
        user:{
          id:user.id,
          username:user.username,
          email:user.email,
          phone:user.phone,
          gender:user.gender,
          role:user.role
        },
      });
    } catch(err){
      return res.status(500).json({
        message: "Error fetching user",
      });
    }
  }
  }

    catch (error) {
      res.status(401).json({ error: error.message });
    }

})

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
router.route("/otp").post(otp);
//getting otp
router.post("/otpget", async (req, res) => {
  const user = req.body.username
  try {
    const items = await otpmodel.find({ username: user });
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
  // console.log(username)
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
