const express = require('express');
const router = express.Router();


router.get('/', (req,res)=> {

    if(req.user) {
        // console.log(req.user);
        // console.log(req.user.nicname);
        let displayName = req.user.displayName;
        res.render('home/index', {displayName:displayName});
       
    } else {
        res.render('home/index')
        
    }
     
   
});



module.exports = router;