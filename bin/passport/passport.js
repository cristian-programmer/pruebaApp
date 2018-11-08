let localStrategy = require('passport-local').Strategy;
let query = require('../db/schemaQuery').runQuery;
let bcrypt = require('bcryptjs');
let database = 'webcredits';

module.exports = (passport) =>{
    passport.use( new localStrategy( (username, password, done)=>{
        console.log(username, ' ', password);
        let user = username;

        query(`select * from ${database}.users where username='${user}';`).then( (result) =>{
            console.log('code passport', result);
            if(!result) return done(null, false, {message: 'no user found'});

            bcrypt.compare(password, result[0].password, (err, isMatch) =>{

                if(err) throw err;

                if(isMatch){
                    return done(null, user);
                }else {
                    return done(null, false, {message: 'wrong password'});
                }
            });
        }).catch(error =>{ throw error});
    }));

    passport.serializeUser(function(user, done) {
        console.log('serializable',user);
        done(null, user);
      });

      passport.deserializeUser(function(user, done) {
        console.log(' des serializable',user);
          done(null , user);
      
      });
};

