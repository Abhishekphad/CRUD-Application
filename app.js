require('dotenv').config();
const express = require('express');
const cors= require("cors");
// import express from express;   ---> Alternate to import express.!
const connectToDB=require('./config/db.js')
const app= express();
// export default app;
// app.listen('/',(req,res)=>{
//     res.send('Hello World..!');
// })


//  Exress middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


connectToDB();
const userRoutes=require('./routes/userRoutes.js')
app.use('/', );
// console.log(app); // Add this line
module.exports = app;
