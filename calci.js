const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;
  res.send("The Result of Calci is :-  " + result);
});


app.get("/Bmicalci", function(req,res){
  res.sendFile(__dirname + "/Bmicalci.html");
});


app.post("/Bmicalci", function(req, res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("Your Bmi IS :-  " + bmi);
});


app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
