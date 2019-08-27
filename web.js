const express = require("express");
const body-parser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    
})


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });