'use strict';
const karmaConfig = require('./karma.conf.js');

const coverageAdditions = {
    coverageReporter: {
        reporters: [
            {type: 'teamcity'},
            {type: 'text-summary'}
        ]
    },
    reporters: ['progress', 'coverage', 'teamcity']
};


module.exports = function (config) {
    let conf = karmaConfig(config);
    config.set(Object.assign(conf, coverageAdditions));
};