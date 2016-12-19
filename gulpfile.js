var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');

gulp.task('clean', function() {
	return del(['public'])
});

gulp.task('sass', function() {
	return gulp.src('_site/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('static/css'))
});

gulp.task('watch', function() {
	gulp.watch('_site/*.scss', ['sass'])
});
		 
