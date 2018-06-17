var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
 
gulp.task('less', function () {
  return gulp.src('./src/style/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    // .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});
