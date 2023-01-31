const express = require('express');
const router = express.Router();
const messages = require('../public/javascripts/message');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messages' , messages: messages});
});

module.exports = router;
