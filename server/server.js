const express =require('express');
const app =express();
const mongoose = require('mongoose');
const dotenv=require("dotenv");
const authurls = require('./routes/auth');
const routesurls = require('./routes/routes');
const carturls = require('./routes/cartroutes');
const cors = require('cors');


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>{
    console.log("Database Connected!!")
})

app.use(express.json())
app.use(cors());
app.use('/api',routesurls);
app.use('/items',carturls);
app.use('/auth',authurls);
app.listen(2003,()=>{console.log("Server Started on 2003")})