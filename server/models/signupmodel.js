const mongoose = require('mongoose');
const signuptemplate = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    role:{
        type:String,
        default:"Farmer"
    }
})

module.exports=mongoose.model('users',signuptemplate)