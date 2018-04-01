var gulp = require('gulp');
var sass = require('gulp-sass');
var gcmq = require('gulp-group-css-media-queries');
var clear = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    gulp.src('*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gcmq())
        // .pipe(clear())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest(''));
});
gulp.task('watch', function(){
    gulp.watch('*.scss', ['sass']);
});