'use strict';

import config from '../config';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import log from '../util/log';
import jasmine from 'gulp-jasmine-livereload-task';

const $ = gulpLoadPlugins();

gulp.task('jasmine-browser', jasmine({
	files:[config.unitTest.lib,config.unitTest.mainModule,config.unitTest.templates,config.unitTest.specs],
	watch: {
      options: {
          debounceTimeout: 1000,
          debounceImmediate: true
      }
  },
	host: 'localhost',
  port: 9000
}));
