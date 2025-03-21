const express=require("express");
const app=express();
const port=8040;
const path=require("path");
const ejsMate=require("ejs-mate");

app.set("views",path.join(__dirname,"view"));
app.set("view engine","ejs");
app.engine("ejs", ejsMate);


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


app.get("/plant",(req,res)=>{
    res.render("index.ejs");
})

app.get("/home",(req,res)=>{
    res.render("index.ejs");
})

app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.get("/sign",(req,res)=>{
    res.render("sign-up.ejs");
})

app.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})