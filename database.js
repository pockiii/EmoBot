var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hackkings');
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

   }

   //creates a reponses collection //replace Response with whatever code word we are using??
    var Response = mongoose.model('Response', responseSchema); //add everything to schema 


   //create a document- Each document will be a response
   var example = new Response({text: 'Pineapples'});
   console.log(example.text);
  var example1 = new Response({text: 'Example'});
   console.log(example1.text);
  var example2 = new Response({text: 'Log Horizon'});
   console.log(example2.text);
   var example3 = new Response({text: 'Cheers'});
   console.log(example3.text);

   example.save(function (err, example) {
    if (err) return console.error(err);
    example.speak;
    });
    example1.save(function (err, example1) {
    if (err) return console.error(err);
    example1.speak;
    });
    example2.save(function (err, example2) {
    if (err) return console.error(err);
    example2.speak;
    });
    example3.save(function (err, example3) {
    if (err) return console.error(err);
    example3.speak;
    });


   Response.find(function (err, responses) {
    if (err) return console.error(err);
   console.log(responses);

   //Response.remove({}, function(err) { 
   //console.log('collection removed') 
});

  
})

  

});