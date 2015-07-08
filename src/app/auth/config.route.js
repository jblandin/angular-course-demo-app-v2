(function() {
  'use strict';

  angular
    .module('app.auth')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider.when('/register', {
      templateUrl: 'app/auth/register.html',
      controller: 'Auth',
      controllerAs: 'vm'
    });
    $routeProvider.when('/login', {
      templateUrl: 'app/auth/login.html',
      controller: 'Auth',
      controllerAs: 'vm'
    });
  }

})();