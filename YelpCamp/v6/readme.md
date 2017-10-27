# YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all Campgrounds

Each Campgrounds has:
* Name
* Image

# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

# Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic Unstyled form

# Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

# Style the Navber and Form
* Add a navbar to all templates
* Style the new campground form

# Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template
*

# Refactor Mongoose Code
* Create a models Directory
* Use module.exports
* Require everything correctly

# Add Seeds File
* Add a seed.js file
* Run the seeds file every time the server starts

# Add the comment mod  el!
* Make our errors go away!
* Display comments on campground show page

# Comment New/Create
* Discuss nested routes
* Add The comment new and create routes
* Add the new comment form

## Nested routes for comments
* NEW       campgrounds/:id/comments/new    GET
* CREATE    campgrounds/:id/comments        POST

# Style Show Page
* Add sidebar to show page
* Display comments nicely

# Finish Styling Show Page
* Add public directory
* Add custom stylesheet

# Auth Pt.1 - Add User Model
* Install all packages needed for auth
* Define User model

# Auth Pt.2 - Register
* Configure Passport
* Add register routes
* Add register template

# Auth Pt.3 - Login
* Add login routes
* Add login template

# Auth Pt.4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly
