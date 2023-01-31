const express = require('express');
const router = express.Router();
const messages = require('../public/javascripts/message');
const moment = require('moment');

router.get('/', function(req, res, next) {
  res.render('message', {title: 'Welcome' ,description: 'Create your own message!'});
});

router.post('/', function(req, res, next) {
  const newMessage = {
    title: req.body.title,
    description: req.body.description,
    username: req.body.username,
    date: moment()
        .startOf('hour' - 1)
        .fromNow(),
  };
  if (newMessage.username !== '' && newMessage.description !== ''){ 
    messages.unshift(newMessage);  
  }
  res.redirect('/');  
});

module.exports = router;
