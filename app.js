const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
// const ejs = require("ejs");
const path = require('path')
const hbs = require("hbs")
hbs.registerPartials(path.join(__dirname, '/views'))
// const mongoose = require("mongoose")
// var lod = require('lodash')

app.set('view engine', 'hbs')
app.set('views', __dirname +'/views')
app.use(express.static(__dirname + '/public'))

app.get("/", function(req,res) {
    res.render("index")
})

app.get("/Electricity",function(req,res){
    res.render("Electricity.hbs")
})

app.listen(3000, function(req,res){
    console.log("server started on post 3000")
})