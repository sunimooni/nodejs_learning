/*
	gulpfile은 gulp에서 어떤 작업들을 할지 정의해준다.
	'use strict'는 javascript코드의 안정성을 위하여 문법검사를 더 확실하게 하겠다는 의미이다.	

	import __ from '__'  <=||=>  var __ = require('__')
	() => {}	     <=||=>  function(){}	
*/
'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
/*
gulp.task('hello', () => {
	console.log('hello is running');	
});

gulp.task('man', ()=> {
	console.log('man is running');
});

gulp.task('world', ['hello'] ,() => {
	console.log('world is running');
});
*/

gulp.task('default', () => {
	return gutil.log('Gulp is running');	
});
