'use strict';

import gulp 		from 'gulp';
import runSequence from 'run-sequence';
import config           from '../config';

gulp.task('build', ['clean','bower','bower-uglify-css','bower-uglify','replace-version'], (cb) => {

	global.isProd = true;
	runSequence('unit-test', ['styles','views','scripts', 'images'], 'concat-js', 'concat-extra-libs',['inject-html'], cb);
});
