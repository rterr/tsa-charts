(function() {
    'use strict';

angular
  .module('app')
  .config(config);

function config($routeProvider) {
  $routeProvider
    .when('/claims', {
      controller: 'ClaimsController',
      templateUrl: 'templates/chart.html',
      controllerAs: 'vm'
    })
    .when('/value', {
      controller: 'ValueController',
      templateUrl: 'templates/chart.html',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
};

})();