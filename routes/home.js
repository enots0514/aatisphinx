const express = require('express');
const router = express.Router();


router.get('/', (req,res)=> {

    if(req.user) {
        // console.log(req.user);
        // console.log(req.user.nicname);
        let nicname = req.user.nicname;
        res.render('home/index', {nicname:nicname});
       
    } else {
        res.render('home/index')
        
    }
     
   
});



module.exports = router;