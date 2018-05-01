var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

gulp.task('css', () => {
    return gulp.src(['node_modules/onepage-scroll/onepage-scroll.css'])
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js', 
            'node_modules/jquery/dist/jquery.min.js', 
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/onepage-scroll/jquery.onepage-scroll.min.js'
        ])
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
});

gulp.task('server', ['sass', 'css'], () => {
    browserSync.init({
        server: './src'
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass', 'css']);
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['js', 'server']);