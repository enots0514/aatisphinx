const express = require('express');
const router = express.Router();
const passport = require('passport');


const registerCtr = require('../controllers/registerCtr');



router.get('/login', (req,res)=> {
    
    res.render("register/login", {formTitle:req.flash().error});
});

// router.post('/login', registerCtr.login);

router.post('/Login', passport.authenticate("local",
     {
        failureRedirect: "/register/login",
          successRedirect: "/",
          failureFlash:true
        
      })
  );



router.get('/register', (req,res)=> {
    res.render("register/register", {formTitle:req.flash().error});
});

router.post('/register', registerCtr.guestcheck, registerCtr.guestsave);



module.exports = router;