import express from "express";
const port = 3000;
const app = express();

app.get( "/" , (req,res) =>{
    let date = new Date();
    const day=date.getDate();
    if( day === 0 || day === 1 ){
        res.render("index.ejs",{
            first:"weekday",
            second:"you should work hard today!"
        })
    }
    else{
        res.render("index.ejs",{
            first:"weekend",
            second:"you should have fun today!"
        })
    }
})

app.listen(port,()=>{
    console.log(`Your server is on port ${port}`);
})
