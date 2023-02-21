const mongoose = require('mongoose');
const feedback = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model('Feedbacks',feedback)