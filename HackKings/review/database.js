
// THIS SHIT IS USELESS IGNORE TIHIS FILE

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/review');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    // we're connected!
    var responseSchema = mongoose.Schema({
    text: String
    });

    responseSchema.methods.speak = function () {
        var greeting = this.text
        ? "Meow name is " + this.text
        : "I don't have a name";
        console.log(greeting);
    };

    //creates a reponses collection //replace Response with whatever code word we are using??
    var Response = mongoose.model('Response', responseSchema); //add everything to schema

    //create a document- Each document will be a response
    var example = new Response({text: "lol"});
    console.log(example.text);

    example.save(function (err, example) {
        if (err) return console.error(err);
        example.speak();
    });

    Response.find(function (err, responses) {
        if (err) return console.error(err);
        console.log(responses);
    });
});
