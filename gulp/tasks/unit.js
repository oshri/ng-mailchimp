'use strict';

import config   from '../config';
import path     from 'path';
import gulp     from 'gulp';
import {Server} from 'karma';

gulp.task('unit-test', ['views'], function(cb) {
  var singleRun = true;

  if ( !global.isProd ) {
    singleRun = false;
  }

  return new Server({
    configFile: path.resolve(__dirname, '../..', config.unitTest.config),
    port: '8080',
    singleRun: singleRun
  }, cb).start();

});
