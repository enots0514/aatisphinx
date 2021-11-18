const express = require('express');
const app = express();
const path = require('path');
const home = require('./routes/home');
const register = require('./routes/register');



app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use('/', home);
app.use('/register', register);


module.exports = app;