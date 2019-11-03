const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const livereload = require('gulp-livereload');

//Using Gulp 3//

// Copy all php files
gulp.task('php',function(){
    return gulp.src('*.php')
    .pipe(gulp.dest('dist'))
    .pipe(livereload()); //Force window update
});

//Minify js
gulp.task('compress',function() {
  return gulp.src('js/*.js')
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

//Compile & compress sass
gulp.task('sass',function() {
  return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});


//Concat scripts & Babel
gulp.task('scripts',function(){
  return gulp.src('js/*.js')
  .pipe(babel({
    presets: ['@babel/env']
}))
    .pipe (uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload()); 
});

 //Watch - automize changes
 gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('*.php', gulp.series('php'));
  gulp.watch('sass/*.scss', gulp.series ('sass'));
  //gulp.watch('js/*.js', gulp.series('babel'));
  gulp.watch('js/*.js', gulp.series('scripts'));

});

 //Array
 gulp.task('default',gulp.parallel(['php','sass',/*'babel',*/'scripts','watch']));
