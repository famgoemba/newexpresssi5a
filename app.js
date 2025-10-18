var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayout = require('express-ejs-layouts');//impor 
const connectDB = require('./app_api/models/db')
connectDB();

// route app_api
const fakultasRouterAPI = require("./app_api/routes/fakultas")
const beritaRouterAPI = require("./app_api/routes/berita");
const prodiRouterAPI = require("./app_api/routes/prodi");
const mahasiswaRouterAPI = require("./app_api/routes/mahasiswa");

//route app_derver
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(expressLayout);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/fakultas', fakultasRouterAPI);
app.use('/api/berita', beritaRouterAPI);
app.use('/api/prodi', prodiRouterAPI);
app.use('/api/mahasiswa', mahasiswaRouterAPI)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;