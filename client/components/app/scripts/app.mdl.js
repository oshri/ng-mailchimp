import { app }            from './directives/app.component';
import MailChimpProvider  from './services/mailchimp.provider';

export default angular
    .module('app', [])
    .config(['MailChimpProvider',(MailChimpProvider) => {

        MailChimpProvider.config({
          username: "blazeutv",
          distributionCenter: "us14",
          identifie: "c1d4f564aec952686f732d57a",
          identifiesList: "7c30cec6e8"
        });

    }])
    .run(['$rootScope','MailChimp',($rootScope, MailChimp) => {
      let chimp = {EMAIL:'john.conor@sky.net'};

      MailChimp.send(chimp).then(function (data) {
          console.log('[Debug] success', data);

      }, function (error) {
          console.log('[Debug] failed', error);
      });

    }])
    .provider('MailChimp', MailChimpProvider)
    .component('app', app);
