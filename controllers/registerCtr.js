const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// const bcrypt = require('bcrypt');
const Guest = require('../models/guestSchema');


module.exports.login = (req, res) => {
   
        Guest.findOne({email: req.body.email})
             .then( user => { 
                               if(user){

                                    user.comparePwd(req.body.pwd, function(err, isMatch) {
                                        if(err) {
                                            console.log("로그인 중 에러 발생함.");
                                            next(err);
                                        }
                                        else if(null, !isMatch){
                                            console.log("비밀번호가 틀립니다.");
                                            res.render('register/login', {formTitle:"비밀번호가 틀립니다."});
                                            return;
                                        }
                                        console.log("로그인 되었습니다.");
                                         res.render('home/index', {guest_nicname:`${user.nicname}님`}); 
                                     }) 



                                        // if(user.pwd == req.body.pwd){
                                        //     console.log("로그인 되었습니다.");
                                        //     res.render('home/index', {guest_nicname:`${user.nicname}님 로그인 되었습니다`}); 
                                        // }else{
                                        //     console.log("비번이 틀렸습니다.") ;
                                        //     res.render('register/login', {formTitle:"비번이 틀렸습니다"});
                                        // }
                                } else{
                                    console.log("유저 정보가 없습니다.");
                                     res.render('register/login', {formTitle:"유저 정보가 없습니다."});
                                } 
             })
             .catch( err => {
                console.log(`로그인 중 에러 발생함: ${err}`);
             })
 };

                 
                
   /*             
                
                guest => { 
                              if(guest.pwd === req.body.pwd) {
                                     console.log("로그인 되었습니다.")
                                    //  res.render("login", {loginTitle:`${user.id}님 로그인 되었습니다`, btnNAME:"LOGOUT"}); 

                                    req.session.email = req.body.email;                                        
                                    req.session.isLogin = 'true';
                                    req.session.nickNAME = guest.nicname;

                                    req.session.save();
                                    
                                    // console.log(req.session.nickNAME)
                                    // console.log(req.session.isLogin)
                                          res.redirect('/', {guest_nicname:`${guest.nicname}님 로그인 되었습니다`}); 
                                   }  else {
                                        console.log("비번이 틀렸습니다.") ;
                                        res.render('register/login', {formTitle:"비번이 틀렸습니다"});
                                  }
                })
                else {
                console.log("유저 정보가 없습니다.");
                res.render('register/login', {formTitle:"유저 정보가 없습니다."});
                }



             })


                                  
               })
               .catch((err) => {
                  console.log("로그인 중 에러가 발생했습니다.");
               })
      
};
 
*/

module.exports.guestcheck = (req, res, next) => {
   
    Guest.find({email : req.body.email})
       .then( guest => {
          
             if(guest.length>0) {
                res.render('register/register', {formTitle:"아이디가 이미 존재합니다."});
                return;
             }
             else{
                 next();}
         });
};

module.exports.guestsave = (req, res) => {
   
 if(req.body.pwd !== req.body.confirm) {
        res.render('register/register', {formTitle:"비번이 일치하지 않습니다."});
            return;
           } else  {
                
            let user = new Guest({
                email : req.body.email,
                nicname : req.body.nicname,
                pwd : req.body.pwd
             });
     
             user.save()
                       .then( result => 
                        res.render('register/login', {formTitle:`${result.nicname}님 회원가입에 성공하셨습니다.`})
                        );
                    }    
};