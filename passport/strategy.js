// passport 로컬 전략만을 따로 파일로 만들었다.

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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
  };