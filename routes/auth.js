const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportconfig = require('../passport');

router.get('/google', 
    
    // res.render('auth/google', {google:"google"});
    passport.authenticate('google', { scope: ['profile', 'email'] }));


router.get('/google/login', (req,res)=> {
    
    res.render('home/index', {google:"google"});
});

router.get('/google/callback', 
    
    passport.authenticate('google', { failureRedirect: 'home/login' }),
   
    function(req, res) {
      // Successful authentication, redirect home.
    res.redirect('/');

    // res.render('home/index', {google:"google"});
    });


module.exports = router;