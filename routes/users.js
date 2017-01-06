'use strict'

var express = require('express');
var router = express.Router();
var UserModel = require('../Models/UserModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var myUser = new UserModel('Joe', 'Shepherd', 'test@test.com', '555.555.1212');
  res.render('index', { title:myUser.fullName() });
});

module.exports = router;
