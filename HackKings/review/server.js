var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/review");
var db = mongoose.connection;

var polarity = require("polarity");

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));


var responseSchema = mongoose.Schema({
    text: String
});


var Response = mongoose.model("Response", responseSchema); //add everything to schema
/*UNCOMMENT THIS AND RUN TO RESET DATABASE
Response.remove({}, function(err) {
    console.log("collection removed");
});
*/

// THIS IS WHAT HAPPENS WHEN U CLICK SUBMIT
app.post("/response", function(request,response) {
    var example = new Response({text: request.body.message});

    example.save(function(err, example) {
        if (err) return console.error(err);

        // DISPLAYS THE DATABSE
        //Response.find(function (err, responses) {
        //    if (err) return console.error(err);
        //    console.log(responses);
        //});

        calculatePolarity(); // RECALCULATES ARRAY HERE AND ADDS IN THE COMMENT THAT WAS JUST MADE
    });
});

app.get("/", function(req, res) {
    res.sendFile("index.html", {root: __dirname });
});

/*app.get("/report", function(req, res) {
    res.sendFile("")
});*/

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});


// CALCULATES POLARITY AND PUTS IT INTO AN ARRAY IN THIS FORMAT
// [ {positivity, negativity}, {positivity, negativity} ]
function calculatePolarity() {
    Response.find(function (err, responses) {
         var polarityi = 0;
        if (err) return console.error(err);

        var polarityArray = [];
        var responseArray = [];
        for(var i = 0; i < responses.length; i++) {
            polarityArray[i] = {};
            responseArray[i]= responses[i].text;
            polarityArray[i].positivity = polarity(responses[i].text.split(" ")).positivity;
            polarityi += polarityArray[i].positivity;
            //polarity(responses[i].text.split(" ")).positivity;
            polarityArray[i].negativity = polarity(responses[i].text.split(" ")).negativity;
            polarityi += polarityArray[i].negativity;
            //polarity(responses[i].text.split(" ")).negativity;
        }
        console.log(polarityArray);
        console.log(responseArray)
        console.log(polarityi);
    });
}
// RUNS THIS SHIT WHEN SERVERS RUN
calculatePolarity();


