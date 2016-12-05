(function(){
  'use strict';

  describe('Component: app', function() {
      beforeEach(angular.mock.module('mailingRegister'));

      var scope,
          $compile,
          element,
          $httpBackend,
          componentController,
          ctrl;

      beforeEach(angular.mock.inject( function($rootScope, _$compile_, _$httpBackend_, $componentController){
          componentController = $componentController;
          scope = $rootScope.$new();
          $compile = _$compile_;
          $httpBackend = _$httpBackend_;
          ctrl = componentController('app', {
            $scope: scope
          });

          element = angular.element('<app></app>');
      }));

      afterEach(function(){
          $httpBackend.verifyNoOutstandingExpectation();
          $httpBackend.verifyNoOutstandingRequest();
      });

      let createController = function(){
          var compiled = $compile(element)(scope);
          scope.$digest();

          return compiled.controller('appCtrl');
      };

      it('should appCtrl be defined', function(){
        expect(ctrl).toBeDefined();
      });
  });

})();
