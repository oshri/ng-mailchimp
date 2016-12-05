'use strict';

import config            from '../config';
import gulp            from 'gulp';
import gulpLoadPlugins    from 'gulp-load-plugins';
import pkg from '../../package';

const $ = gulpLoadPlugins();

gulp.task('gzip', [], () => {
    let fileName = pkg.name  + '-' + pkg.version + '.tar';

    return gulp.src(['./build/*', './build/**/*'])
        .pipe($.tar(fileName))
        .pipe($.gzip(config.gzip.options))
        .pipe(gulp.dest(config.gzip.dest));

});
