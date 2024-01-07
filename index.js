require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.send("hello");
})

app.get("/login" , (req,res) => {
    res.send("<h1> Login Page </h1>");
})

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${port}`);
})