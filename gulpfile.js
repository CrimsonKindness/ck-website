var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('_site/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('static/css'))
});

gulp.task('watch', function() {
	gulp.watch('_site/*.scss', ['sass'])
});
		 
