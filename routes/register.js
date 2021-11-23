const express = require('express');
const router = express.Router();
const passport = require('passport');

const registerCtr = require('../controllers/registerCtr');



router.get('/login', (req,res)=> {
    res.render("register/login");
});

// router.post('/login', registerCtr.login);

router.post('/Login', passport.authenticate("local",
     {
        failureRedirect: "/register/login",
          successRedirect: "/"
        
      })
  );



router.get('/register', (req,res)=> {
    res.render("register/register");
});

router.post('/register', registerCtr.guestcheck, registerCtr.guestsave);



module.exports = router;