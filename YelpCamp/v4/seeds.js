var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud Rest",
            image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg",
            description: "Nice and quiet place for fishing and thinking"
        },
        {
            name: "Desert Mesa",
            image: "https://farm1.staticflickr.com/211/467048513_4042c7979f.jpg",
            description: "But I must explain to you how all this mistaken idea"
        },
        {
            name: "Canyon Floor",
            image: "https://farm8.staticflickr.com/7677/17482091193_e0c121a102.jpg",
            description: "The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itsel"
        }
    ];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            // add few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        // create a comment
                        Comment.create(
                            {
                                text: "This place is great, but i wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment!")
                                }
                            });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;