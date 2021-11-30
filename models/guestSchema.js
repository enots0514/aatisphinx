const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;



// 스키마 생성
const guestSchema = new mongoose.Schema({
  email: {type:String, required:true, unique:true},
  pwd:String,
  displayName:String,
  confirm:String
});



guestSchema.pre('save', function(next) {
     const guest = this; // guestSchema를 가르킨다.

  if(guest.isModified('pwd') ||guest.isNew) {
    bcrypt.genSalt(saltRounds, function(err, salt){
      if(err) return next(err);
 
 
      bcrypt.hash(guest.pwd, salt, function(err, hash) {
        
          if(err) {
              console.log("비밀번호 해시과정 중에 에러가 발생했습니다.");
              return next(err);
          } else {
            guest.pwd = hash;
            next()
          }
       }) 
     })
  } else {
    next();
  }
      
});


/* passport 활용시 삭제 - 로컬 전략 안으로 들어감
guestSchema.methods.comparePwd = function(pwd, cb) {

    bcrypt.compare(pwd, this.pwd, function(err, isMatch) {
      if(err) {
        return cb(err);
       } else {
         cb(null, isMatch)
       }
   })
}

*/

module.exports = mongoose.model('guest', guestSchema);