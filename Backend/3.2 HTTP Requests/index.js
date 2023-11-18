import express from "express";
const app = express();
let port = 3000;

app.listen(port,()=>{
    console.log("You are on server "+port+".");
})
app.get("/",(req,res)=>{
    res.send("Hello your server started at port 3000");
    console.log(req.headers);
  })
app.get("/about",(req,res)=>{
    res.send("Min Sameer");
})
app.get("/contact",(res)=>{
    res.send("<h3>Contact me on +961 71-290-099</h3>");
})