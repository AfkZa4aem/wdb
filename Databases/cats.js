var mongoose = require("mongoose");
// connect to the DB
mongoose.connect("mongodb://localhost/cat_app", {userMongoClient: true});

// create schema (defining pattern for a data)
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// create model
var Cat = mongoose.model("Cat", catSchema);


// adding a new car to the DB

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });
// // save cat to DB
// george.save(function(err, cat){
//     // if error
//     if(err){
//         console.log("Something went wrong!")
//     // if no error
//     } else {
//         console.log("We just saved a cat to the DB:");
//         console.log(cat);
//     }
// });
Cat.create({
    name: "Snow",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

// retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("All the cats");
        console.log(cats);
    }
});