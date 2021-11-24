const express = require('express');
const app = express();
const path = require('path');

const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');


const passportConfig = require('./passport');
// passport폴더에 있는 index.js를 의미함.
const home = require('./routes/home');
const register = require('./routes/register');

passportConfig();
// passport폴더에 있는 index.js의 serializeUser(), deserializeUser() 실행을 의미함.

app.use(cookieParser());
app.use(expressSession(
         { resave:false,
            saveUninitialized:false,
            secret: 'aattitude',
            cookie: {
              path : "/"
            } 
          }));

//플래쉬와 패스포트는 쿠키 및 세션 아래에 위치해야 한다.
// 플래쉬와 패스포트가 내부적으로 쿠키 및 세션을 사용하기 때문이다.

app.use(flash());



app.use(passport.initialize()); 
   // 패스포트 사용 및 초기화를 위한 express.js 설정임 
app.use(passport.session()); 
  // 패스포트에 세션을 사용하도록 함.


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use('/', home);
app.use('/register', register);


module.exports = app;