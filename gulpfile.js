let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));