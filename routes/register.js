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


router.get('/logout', async (req,res)=> {
   await req.logout();
//    console.log("1 :", req.user)
  
//    console.log("1session:", req.session)
    req.session.save((err) => {
        if(err) console.log(err);
        displayName = " ";
        res.render('home/index', {displayName:displayName});
        
    });
   
});


module.exports = router;