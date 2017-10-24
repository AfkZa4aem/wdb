var bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restfull_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// RESTFUL ROUTES

// INDEX
app.get("/blogs", function(req, res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log("ERROR!!!!!");
    } else {
      res.render("index", {blogs: blogs});
    }
  });
});

// NEW
app.get("/blogs/new", function(req, res){
  res.render("new");
})

// CREATE
app.post("/blogs", function(req, res){
  // Create blog (data, callback)
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render("new");
    } else {
      // redirect to the INDEX
      res.redirect("/blogs");
    }
  });
});

app.listen(3000, function(){
  console.log("RESTfull blog app server sucessfully started!");
});
