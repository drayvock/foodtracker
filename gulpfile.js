var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var inject = require('gulp-inject');

gulp.task('scripts', function() {
    var tsResult = tsProject.src() // or tsProject.src()
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('app'));
});

gulp.task("index", function(){
    var target = gulp.src('./src/templates/index.html');
    var appPath = './app/**/app.js';
    var sources = gulp.src(['./app/**/*.js', '!./app/ts/interfaces/**/*.js', '!' + appPath, './app/**/*.css'], {read: false});
    return target.pipe(inject(sources))
            .pipe(gulp.dest('./'))
})

gulp.task("html", function(){
    var indexPath = './src/templates/index.html';
    var target = gulp.src(['./src/templates/**/*.html', '!' + indexPath]);
    return target.pipe(gulp.dest('./app/templates/'));
})


gulp.task("css", function(){
    return gulp.src('./src/css/**/*.css', {base: './src/css/'})
        .pipe(gulp.dest('./app/css/'));
})