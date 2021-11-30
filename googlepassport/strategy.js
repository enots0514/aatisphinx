// passport 로컬 전략만을 따로 파일로 만들었다.

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt');

const Guest = require('../models/guestSchema');


module.exports = () => {
    passport.use(new GoogleStrategy({
      clientID: "35580780880-t5tkndhq0ha0bvrf2iv4pjftfrhq47eg.apps.googleusercontent.com",
      clientSecret: "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GOOGLE_CLIENT_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
     
    function(accessToken, refreshToken, profile, done) {
      console.log('profile: ', profile);
      console.log('profile: ', profile.displayName);
      let user = profile.displayName;

      done(null, user);

      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });


    }



      // usernameField: 'email',
      // passwordField: 'pwd',
      // session: true, // 세션에 저장 여부
      // passReqToCallback: false,
   
   /*
    },
    
     async (username, password, done) => {
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
    }
    
*/
    
    ));
  };