var bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restfull_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

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
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render("new");
    } else {
      // redirect to the INDEX
      res.redirect("/blogs");
    }
  });
});

// SHOW
app.get("/blogs/:id", function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect("/blogs");
    } else {
      res.render("show", {blog: foundBlog});
    }
  });
});
// EDIT
app.get("/blogs/:id/edit", function(req, res){
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect("/blogs");
    } else {
      res.render("edit", {blog: foundBlog});
    }
  });
});
// UPDATE
app.put("/blogs/:id", function(req, res){
  // (id, newData, callback)
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
    if(err){
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});
// DESTROY
app.delete("/blogs/:id", function(req, res){
  // destroy blog
  Blog.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect("/blogs");
    } else {
      // redirect
      res.redirect("/blogs");
    }
  });
});

app.listen(3000, function(){
  console.log("RESTfull blog app server sucessfully started!");
});
