const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req,res) {
    var firstName = req.body.firstname;
    var lastName = req.body.lastname;
    var email = req.body.email;

    console.log(firstName, lastName, email);

});


app.listen(3000, function() {
    console.log("Server is running on port 3000");
})

