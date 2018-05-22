var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var config = {
    server: './src'
}

// JS
gulp.task('js', () => {
    return gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js', 
            'node_modules/jquery/dist/jquery.min.js', 
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/jquery-scrollify/jquery.scrollify.js',
            'node_modules/stickUp/build/js/stickUp.min.js',
            'node_modules/mustache/mustache.min.js',
            'node_modules/viewerjs/dist/viewer.min.js',
            'node_modules/jquery-viewer/dist/jquery-viewer.min.js'
        ])
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
});

// Sass
gulp.task('sass', () => {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// Watchers
gulp.task('watch:sass', () => {
    return gulp.watch([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/scss/*.scss'
    ], gulp.series('sass', reload))
});

gulp.task('watch:html', () => {
    return gulp.watch('src/*.html', reload)
});

gulp.task('watch:js', () => {
    return gulp.watch('src/js/*.js', reload)
});

gulp.task('watch', gulp.parallel(
    'watch:sass', 'watch:html', 'watch:js'
));

// Server
function reload(done) {
    browserSync.reload();
    done();
}

gulp.task('server', () => {
    browserSync.init(config);
});

gulp.task('default', gulp.series(
    gulp.parallel('js', 'sass'),
    gulp.parallel('watch', 'server')
));