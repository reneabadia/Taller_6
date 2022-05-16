const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// Access database
const mongodb = 'mongodb+srv://root:root@cluster0.vceku.mongodb.net/dice-game?retryWrites=true&w=majority';
mongoose.connect(mongodb,{useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => console.log("MongoDB Connected OK") )
  .catch( error => console.log(error))

const app = express();

// Engine setup
app.listen(8080, () => console.log("Server Running OK"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/bets', require('./routes/bets'));
app.use('/roll', require('./routes/roll'));
app.use('/summary', require('./routes/summary'));
app.use('/winner', require('./routes/winner'));

// Error webpage
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(app.get('port'));
module.exports = app;
