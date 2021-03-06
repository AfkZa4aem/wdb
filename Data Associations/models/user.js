var mongoose = require("mongoose");

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  // we will have only objectid as array elementh
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});
module.exports =  mongoose.model("User", userSchema);