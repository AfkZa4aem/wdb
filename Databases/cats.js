var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {userMongoClient: true});

// create schema
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// create model
var Cat = mongoose.model("Cat", catSchema);


// adding a new car to the DB



// retrieve all cats from the DB and console.log each one