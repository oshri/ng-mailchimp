/* @ngInject */
export class MailChimp{
  /* @ngInject */
  constructor($log, $http, $q, account){
    this.$log = $log;
    this.$http = $http;
    this.$q = $q;
    this.account = account;
    this.actions = undefined;
    this.MailChimpSubscription = undefined;
    this.params = {};
    this.url = `https://${this.account.username}.${this.account.distributionCenter}.list-manage.com/subscribe/post-json?u=${this.account.identifie}&id=${this.account.identifiesList}&subscribe=Subscribe`;
	}

  send(data){
    let defer = this.$q.defer();
    let params = angular.extend(data, {c:'JSON_CALLBACK'});

    this.$http({
        url: this.url,
        params: params,
        method: 'JSONP'
    }).then((data) => {
        if(data.data.result === 'success')
            defer.resolve(data.data);
        else
            defer.reject(data.data);

    },(err) => {
        defer.reject(err)
    });

    return defer.promise;
  }

}

export default class MailChimpProvider{
  constructor(){
    this.account = {};
  }

  config({
    username: _username,
    distributionCenter: _distributionCenter,
    identifie: _identifie,
    identifiesList: _identifiesList
  }){
    this.account = {
      username: _username,
      distributionCenter: _distributionCenter,
      identifie: _identifie,
      identifiesList: _identifiesList
    };
  }

  /* @ngInject */
  $get($log, $http, $q){
    /* @ngInject */
      return new MailChimp($log, $http, $q, this.account);
  }
}
