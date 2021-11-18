const mongoose = require("mongoose");


// 스키마 생성
const guestSchema = new mongoose.Schema({
  email: {type:String, required:true, unique:true},
  pwd:String,
  nicname:String,
  confirm:String
});




module.exports = mongoose.model('guest', guestSchema);