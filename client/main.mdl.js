'use strict';

import 'babel-polyfill';

// Modules
import app            from './components/app/scripts/app.mdl';

export default angular
    .module('mailingRegister', [
        app.name
    ])
    .constant('CONFIG', {
  		server: {
  			url: (localStorage && localStorage.getItem('serverUrl')) || (window.location.protocol + '//' + window.location.host),
  			timeout: 30000
  		},
  		webSockets: {
  			url: (localStorage && localStorage.getItem('webSocketsUrl')) || ('ws://' + window.location.hostname + ':8081')
  		}
  	})
	.constant('VERSION', '0.1.0')
  .run(($rootScope) => {
      $rootScope.safeApply = function (fn) {
          var phase = this.$root.$$phase;
          if (phase === '$apply' || phase === '$digest') {
              if (fn && (typeof(fn) === 'function')) {
                  fn();
              }
          } else {
              this.$apply(fn);
          }
      };
  });
