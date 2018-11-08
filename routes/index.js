var express = require('express');
var router = express.Router();
var query = require('../bin/db/schemaQuery').runQuery;
var bcrypt = require('bcryptjs');
var passport = require('passport');
/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index', { title: 'Express' });
});

router.get('/home', (req, res, next) =>{
  res.render('home', {title: 'home'});
});


router.post('/login', (req, res, next)=>{
  passport.authenticate('local', {
    successRedirect:'/home',
    failureRedirect:'/users/products',
    failureFlash: true
  
  })(req, res, next);
});

module.exports = router;
