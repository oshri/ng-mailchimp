'use strict';

import fs 			from 'fs';
import gulp 		from 'gulp';
import onlyScripts from './util/scriptsFilter';

const tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

gulp.on('stop', () => {
	if ( !global.isWatching ) {
	    process.nextTick(function () {
	      process.exit(0);
	    });
  	}
});

tasks.forEach((task) => {
	require('./tasks/' + task);
});
