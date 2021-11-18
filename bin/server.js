const app = require('../app');
const mongoose = require("mongoose");

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI || MONGO_URI;
mongoose.connect(  
    MONGO_URI,
    {useNewUrlParser:true, useUnifiedTopology:true}
).then( console.log('몽고디비 연결 성공'))
.catch( err => console.log(err))



app.listen(PORT, () => {
       console.log(`웹 서버가 ${PORT}에서 실행됨.`)
});