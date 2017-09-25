var gulp = require("gulp");
var sass = require("gulp-sass");
var open = require("gulp-open");
var jshint = require("gulp-jshint");
var browserSync = require('browser-sync')
var concat = require('gulp-concat')
var mocha = require('gulp-mocha')



gulp.task("linter", function() {
  gulp
    .src(["app/js/**/*.js"])
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish", { beep: true }))
});

gulp.task('test', function(){
  gulp.src('tests/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
})

gulp.task('js-concat', function() {
    return gulp.src("js/*.js")
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest("app/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./app"
    });
    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("js/**/*.js", ["linter", "js-concat"]).on('change', browserSync.reload);;
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(concat('styles.scss'))
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
