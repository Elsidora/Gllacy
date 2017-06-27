'use strict';

module.exports = function() {
	
$.gulp.task('sass', function() {
	return $.gulp.src('./source/sass/style.sass')
		.pipe($.glp.sourcemaps.init())
		.pipe($.glp.sass()).on('error', $.glp.notify.onError({title: 'Style'}))
		.pipe($.glp.autoprefixer({ browsers: ['last 3 version', '> 1%',/*'ie8', 'ie9',*/ 'Opera 12.1']}))
		.pipe($.gcmq())
		.pipe($.glp.sourcemaps.write())
		.pipe($.gulp.dest('./build/css'))
		.pipe($.browserSync.stream())
	})
};