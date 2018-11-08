var express = require('express');
var router = express.Router();
var query = require('./../bin/db/schemaQuery').runQuery;
var bcrypt = require('bcryptjs');



let newUser = {
  user:undefined,
  password: undefined,
  email: undefined,
  type: undefined
};

let iddelete = 0;

let database = 'webcredits';

router.get('/', function(req, res, next) {
  res.render('users', { title: 'Express' });
});

router.post('/createUser', (req, res)=>{
  // res.render('users', { title: 'New Express' });
  console.log('---',req.body);
  newUser.user = req.body.user;
  newUser.password = req.body.password;
  newUser.email = req.body.email;
  newUser.type = req.body.type;
  console.log(newUser);

  bcrypt.genSalt(10, (err, salt) =>{

    if(err) throw err;

    bcrypt.hash(newUser.password, salt, (err, hash) =>{
      if (err) throw err;
      newUser.password = hash;

      query(` insert into ${database}.users (username, password, email, type ) values
      ('${newUser.user}', '${newUser.password}', '${newUser.email}', ${newUser.type} )`).then((result)=>{
       console.log('result:', result);
       res.json({ok:'ok'});
     }).catch(error => {throw error});

    });
  });

});

router.post('/deleteUser', (req, res)=>{
  iddelete = req.body.id;
  query(` delete from ${database}.users where iduser='${iddelete}' ;`)
  .then( (result) => {
    console.log(result);
    res.json(result);
  }).catch(error => { throw error});

});


router.get('/getUsers', (req ,res) =>{
  query(` select * from ${database}.users;`)
  .then( (result) => {
    console.log(result);
    res.json(result);
  }).catch(error => { throw error});
});



module.exports = router;
