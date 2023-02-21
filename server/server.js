const express =require('express');
const app =express();
const mongoose = require('mongoose');
const dotenv=require("dotenv");
const routesurls = require('./routes/routes');
const cors = require('cors');


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>{
    console.log("Database Connected!!")
})

app.use(express.json())
app.use(cors());
app.use('/api',routesurls);
app.listen(2000,()=>{console.log("Server Started on 2000")})