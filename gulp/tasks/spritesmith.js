'use strict';

module.exports = function() {

$.gulp.task('sprite', function() {
	let spriteData = $.gulp.src('./source/img/icons/*.png').pipe($.spritesmith({
		imgName: 'sprite.png',
		cssName: '_sprite.sass',
		cssFormat: 'sass',
		imgPath: '../img/sprite.png',
		padding: 50
	}));
	spriteData.img.pipe($.gulp.dest('./build/img'));
	spriteData.css.pipe($.gulp.dest('./source/styles/sprite'));
})
	
};