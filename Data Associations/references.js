var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");

var User = require("./models/user");

// Post.create({
//   title: "How to cook the best burger pt. 5",
//   content: "Happy? hm?"
// }, function(err, post){
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//       if(err){
//         console.log(err);
//       } else {
//         // add post to user "posts" array (only id)
//         foundUser.posts.push(post);
//         foundUser.save(function(err, data){
//           if(err){
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
// });

// Find user
// find all posts for that user

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
  if(err){
    console.log(err);
  } else {
    console.log(user);
  }
});
