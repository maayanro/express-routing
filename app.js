var express = require("express");
var app = express();
 
// default routing - HOME PAGE
app.get("/", function(req, res) {
    res.send("WELCOME TO EXPRESS ROUTING EXERCISE!");
}); 

// route to speak/:animal - for example: speak/pig OR speak/Cat
app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Miow",
        goldfish: "..."
 
    };
    
    //handle Case Sensitive issue
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
 
    res.send("The " + animal + " says: \"" + sound + "\"");
});

// routing to repeat/:message/:times - for example: repeat/hello/5
app.get("/repeat/:message/:times", function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
 
    for(var i = 0; i < times; i ++ ){
        result += message + " ";
    }
    res.send(result);
});

// any other route will respond this message
app.get("*", function(req, res) {
    res.send("Sorry page not found !");
});
 
// specifying the port our app will run 
app.listen("3000", function() {
    console.log("Server start listenning on port 3000");
});
