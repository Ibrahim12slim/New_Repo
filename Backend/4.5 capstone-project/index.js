import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
let MyList = [];
let counter = 0;


app.listen(port,()=>{
    console.log(`Your address is on port ${port}`);
})
app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.post("/submit", ( req , res )=>{
    MyList.push(req.body["list"]);
    counter = + MyList.length;
    res.render( "index.ejs" , {
        MyList,
        counter,
    })
})
