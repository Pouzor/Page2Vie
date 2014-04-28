// server.js

// set up ========================
var express = require('express');
var app = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb

// configuration =================

mongoose.connect('localhost:27017');

app.configure(function () {
    app.use(express.static(__dirname + '/app')); 		// set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); 						// log every request to the console
    app.use(express.bodyParser()); 							// pull information from html in POST
    app.use(express.methodOverride()); 						// simulate DELETE and PUT
});


// define model =================
var Post = mongoose.model('Post', {
    title: String,
    url: String
});

// routes ======================================================================

// api ---------------------------------------------------------------------
// get all posts
app.get('/api/posts', function (req, res) {

    // use mongoose to get all posts in the database
    Post.find(function (err, posts) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(posts); // return all posts in JSON format
    });
});


app.post('/api/posts', function (req, res) {


    Post.create({
        url: req.body.url,
        title: req.body.title
    }, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);

    });

});

// delete a post
app.delete('/api/posts/:id', function (req, res) {
    Post.remove({
        _id: req.params.id
    }, function (err, post) {
        if (err)
            res.send(err);

        // get and return all the posts after you create another
        Post.find(function (err, posts) {
            if (err)
                res.send(err)
            res.json(posts);
        });
    });
});

//app.get('*', function(req, res) {
//    res.sendfile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
//});


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
exports = module.exports = app;
