'use strict';

module.exports = function() {
	
$.gulp.task('copy-html', function() {
	return $.gulp.src('./source/pages/*.html')
		.pipe($.gulp.dest('./build'))
	})
};