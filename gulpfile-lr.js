'use strict';

var express = require('express');
var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var path = require('path');
var app = express();

var EXPRESS_ROOT = __dirname;

gulp.task('dev', function () {
  startLivereload();
  runSequence(
    'sass',
    'sass:watch',
    'run-server',
    function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('run dev successfully');
      }
    }
  );
});

gulp.task('run-server', function () {
  app.use("/css", express.static(path.resolve("css")));
  app.use('/img', express.static(path.resolve("img")));
  app.use('/js', express.static(path.resolve("js")));
  app.use('/', express.static(path.resolve(EXPRESS_ROOT)));

  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/color-picker.html');
  });

  var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(' listening at', host, port);
  });
})

// We'll need a reference to the tinylr
// object to send notifications of file changes
// further down
var lr;
function startLivereload() {
  console.log('start live reload');
    lr = require('tiny-lr')();
    lr.listen(35729);
}

// Notifies livereload of changes detected
// by `gulp.watch()`
function notifyLivereload(event) {

    // `gulp.watch()` events provide an absolute path
    // so we need to make it relative to the server root
    var fileName = require('path').relative(EXPRESS_ROOT, event.path);
    console.log('in notifyLivereload', fileName);
    lr.changed({
        body: {
            files: [fileName]
        }
    });
}

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./css/**/*.css', notifyLivereload);
});
