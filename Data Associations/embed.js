var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
var User = mongoose.model("User", userSchema);
// Create/Save user
// var newUser = new User({
//   email: "padiwaradda@gmail.com",
//   name: "Padiwaradda Buathong"
// });
// newUser.posts.push({
//   title: "Note about workout",
//   content: "I'm kinda tired"
// });
// newUser.save(function(err, user){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// Create/Save post
// var newPost = new Post({
//   title: "first post",
//   content: "Lorem ipsum"
// });
// newPost.save(function(err, post){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({name: "Padiwaradda Buathong"}, function(err, user){
  if(err){
    console.log(err);
  } else {
    user.posts.push({
      title: "Note about relationshis",
      content: "leave me alone, i'm busy"
    });
    user.save(function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
