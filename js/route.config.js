angular
  .module('app')
  .config(config);

function config($routeProvider) {
  $routeProvider
    .when('/claims', {
      controller: 'ClaimsController',
      templateUrl: 'templates/chart.html'
    })
    .when('/value', {
      controller: 'ValueController',
      templateUrl: 'templates/chart.html'
    })
    .otherwise({
      redirectTo: '/'
    });
};
