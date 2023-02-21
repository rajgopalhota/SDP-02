const mongoose = require('mongoose');
const product = new mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    quality:{
        type:String,
    },
    deliverable:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true,
        default:"admin"
    },
    faddress:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    }
    
})

module.exports=mongoose.model('Products',product)