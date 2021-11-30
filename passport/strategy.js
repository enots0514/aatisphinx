// passport 로컬 전략만을 따로 파일로 만들었다.

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcrypt');

const Guest = require('../models/guestSchema');


module.exports = () => {
    passport.use('local', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'pwd',
      // session: true, // 세션에 저장 여부
      // passReqToCallback: false,
    }, async (username, password, done) => {
      try {
        const User = await Guest.findOne({'email': username});
        if (User) {
          const result = await bcrypt.compare(password, User.pwd); 
  
            if (result) {
                done(null, User);
            } else {
                done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
            }
        } else {
          done(null, false, { message: '가입되지 않은 회원입니다.' });
        }
      } catch (error) {
        console.error(error);
        done(error);
      }
    }));

    passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
     
    async (accessToken, refreshToken, profile, done) => {
      // console.log('accessToken: ', accessToken);
      // console.log('profile: ', profile);
      // console.log('profile.id: ', profile.id);
      // console.log('email: ', profile.emails[0].value);
      // console.log('profile.displayName: ', profile.displayName);
   
      try { 
        let user;
      await Guest.find({email : profile.emails[0].value})
      .then( data  => {

        if(data.length>0) {

            user = data;
            // console.log('userdata: ', user) 
           
        }
        else{
          user = new Guest({
            pwd: profile.id,
            displayName : profile.displayName,
            email : profile.emails[0].value         
        });
  
        user.save();
       
      }
      
             
      // console.log('user: ', user);
        done(null, user);

      });  

      } catch (error) {
        console.error(error);
        done(error);
      }
         
       
      }

        ));
     

    };
        