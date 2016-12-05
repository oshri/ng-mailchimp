'use strict';

const istanbul = require('browserify-istanbul');
const isparta = require('isparta');

const karmaConfig = {
    basePath: './',
    singleRun: true,
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
        'client/**/*.js': ['browserify']
    },
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    autoWatch: true,
    browserify: {
        debug: true,
        extensions: ['.js'],
        transform: [
            'babelify',
            'browserify-ngannotate',
            'bulkify',
            istanbul({
                instrumenter: isparta,
                ignore: ['**/node_modules/**', 'client/tests/**']
            })
        ]
    },
    proxies: {
      '/': 'http://localhost:9876/'
    },
    urlRoot: '/__karma__/',
    files: [
        // 3rd-party resources
        'bower_components/angular/angular.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/es5-shim/es5-shim.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-aria/angular-aria.js',
        'bower_components/angular-messages/angular-messages.js',
        'bower_components/lodash/lodash.js',
        // app-specific code
        'client/main.mdl.js',
        // Templates
        'temp/js/templates.js',
        // test files
        'client/tests/**/*.js',

        // test files
        'client/**/tests/unit/**/*.js',
        'client/**/tests/mocks/**/*.js'
    ]
};

module.exports = function (config) {
    config.set(karmaConfig);

    return karmaConfig;
};
