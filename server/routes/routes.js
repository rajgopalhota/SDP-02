const { response } = require('express');
const express = require('express');
const router = express.Router()
const signuptemp=require("../models/signupmodel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const product = require("../models/product");
const feedback = require("../models/feedback");
const feedbackmodel = require("../models/feedback");
const productmodel= require("../models/product");
const signupmodel=require("../models/signupmodel")

router.post('/register',async (req,res)=>{
    const saltpwd = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(req.body.password,saltpwd);
    const signupuser = new signuptemp({
        fullname:req.body.fullname,
        email:req.body.email,
        password:securepassword
    })
    signupuser.save()
    .then(data=>{
        res.json(data);
    })
    .catch(e=>{
        res.json(e);
    })
});

router.get('/users',async(req,res)=>{
  signupmodel.find({},(err,result)=>{
    if(err){
      res.send(err);
  }
  res.json(result);
  });
});

router.get('/products',async(req,res)=>{
productmodel.find({},(err,result)=>{
  if(err){
    res.send(err);
}
res.json(result);
});
});

router.post('/send',async(req,res)=>{
  const prname=req.body.pname;
  const qua=req.body.quantity;
  const cat = req.body.category;
  const pri = req.body.price;
  const qual= req.body.quality;
  const deli = req.body.deliverable;
  const des = req.body.description;
  const ph = req.body.phno;
  const fadd = req.body.faddress;
  const product = new productmodel({pname:prname, quantity:qua, category:cat, price:pri, fname:qual, deliverable:deli, description:des, phno:ph, faddress:fadd});
  try{
    await product.save();
    res.send("Inserted Values");
  }
    catch(err){
      console.log(err);
    }
  }
);

router.post('/sendfeedback',async(req,res)=>{
  const pname=req.body.name;
  const elemail=req.body.email;
  const phonenumber = req.body.phone;
  const msg= req.body.message;
  const rat=req.body.rating;
  const feedback = new feedbackmodel({name:pname, email:elemail, phone:phonenumber, message:msg,rating:rat});
  try{
    await feedback.save();
    res.send("Inserted Values");
  }
    catch(err){
      console.log(err);
    }
  }
);

router.get('/feedbacks',async(req,res)=>{
  feedbackmodel.find({},(err,result)=>{
    if(err){
      res.send(err);
  }
  res.json(result);
  });
  });


router.post('/login',async (req,res)=>{
    signuptemp.findOne({ email: req.body.email })
    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(req.body.password, user.password)
        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if(!passwordCheck) {
        
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
              userRole:user.role
            },
            "RANDOM-TOKEN",
            { expiresIn: "2h" }
          );

          //   return success response
          res.status(200).send({
            message: "Login Successful",
            email: user.email,
            role:user.role,
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
});

router.put("/upuser",async(req,res)=>{
  const upname=req.body.upName;
  const id=req.body.id;
  
  try{
  await signupmodel.findById(id,(err,upUser)=>{
      upUser.name=upname;
      upUser.save();
      res.json(signupmodel);
  });
  }
catch(err){
  console.log(err);
}});

router.delete("/deluser/:id",async(req,res)=>{
  const id=req.params.id;
  await signupmodel.findByIdAndRemove(id);
});
module.exports=router