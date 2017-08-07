'use strict';

require('dotenv').config();

var compression = require('compression');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var galleries = require('./data/gallery.json');
var galleriesList = Object.keys(galleries).map(function(value) {
                      return galleries[value]});

// Mailgun
var Mailgun = require('mailgun-js');
var api_key = process.env.MAILGUN;
var domain = 'mg.sanchezstudio.co';

app.use(compression());
app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res, next){
  var path = req.path;
  res.locals.path = path;
  res.render('index', { galleries: galleriesList });
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/gallery/:slug', function(req, res){
  var slug = req.params.slug;
  if (slug === undefined) {
    res.status(503);
  } else {
    var gallery = galleries[slug] || {};
    res.render('gallery', { gallery: gallery });
  }
});

app.get('/investment', function(req, res){
  res.render('investment');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
app.post('/submit', function(req,res) {
  let mailgun = new Mailgun({apiKey: api_key, domain: domain});
  let model = req.body;
  //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
  // var mailgun = new Mailgun({apiKey: api_key, domain: domain});

  var data = {
  //Specify email data
    from: 'weddings@sanchezstudio.co',
  //The email to contact
    to: 'weddings@sanchezstudio.co',
  //Subject and text data
    subject: model.name + ' ' + model.email,
    html: model.message
  }

  //Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function (err, body) {
    //If there is an error, render the error page
    if (err) {
      //res.render('error', { error : err});
      console.log("got an error: ", err);
    }
    //Else we can greet and leave
    else {
      //Here "submitted.jade" is the view file for this landing page
      //We pass the variable "email" from the url parameter in an object rendered by Jade
      //res.render('submitted', { email : req.params.mail });
      res.send('success');
    }
  });

});

app.listen(3000, function() {
  console.log("The frontend server is running on port 3000!");
});
