import express from "express";
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.get("/", (req,res)=>{
    res.send("hello");
})

app.get("/login" , (req,res) => {
    res.send("<h1> Login Page </h1>");
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})