const express = require('express');
const router = express.Router();
const registerCtr = require('../controllers/registerCtr');

router.get('/login', (req,res)=> {
    res.render("register/login");
});

router.post('/login', registerCtr.login);

router.get('/register', (req,res)=> {
    res.render("register/register");
});

router.post('/register', registerCtr.guestcheck, registerCtr.guestsave);



module.exports = router;