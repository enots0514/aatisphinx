const express = require('express');
const router = express.Router();


const linkopen = function (req, res, next) {
    
    if(!req.user) {
        // console.log(req.user);
         res.redirect('/');
       
             
    } else {
       
        // console.log("session:", req.session)
        // console.log(req.user);
        // console.log(req.user.nicname);
        displayName = req.user.displayName;      
        next();
      
    }

   
}; 





    router.get('/nodejs', linkopen, (req,res)=> {
    
         res.render('contents/01_nodejs', {displayName})

        });   
           
/*  아래 내용을 linkopen 함수로 넣어서 정리함
        if(req.user) {
            console.log(req.user);
            // console.log(req.user.nicname);
            let nicname = req.user.nicname;
            res.render('contents/01_nodejs', {nicname:nicname})
          
        } else {
            console.log(req.user);
            res.redirect('/');
        }   
          
               
       
    });
    
*/
    router.get('/express', linkopen,  (req,res)=> {
    
        res.render('contents/02_express', {displayName})
                  
       
    });
   





module.exports = router;