var app = angular.module("app", ['ngRoute', 'ng-fusioncharts']);

app.config(function($routeProvider) {
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
});


app.controller('ClaimsController', function($scope) {
  $scope.chartType = "column2d"
  $scope.airList = ['SFO','LAX','JFK']
  $scope.airName = "SFO"
  $scope.dataSource = {
    chart: {
      caption: "Average Claims per Month by Airport",
      subCaption: $scope.airName,
    },
    data: [{
        label: "January 2010",
        value: "880000"
      },
      {
        label: "February 2010",
        value: "730000"
      },
      {
        label: "March 2010",
        value: "590000"
      },
      {
        label: "April 2010",
        value: "520000"
      },
      {
        label: "May 2010",
        value: "330000"
      }
    ]
  };
});

app.controller('ValueController', function($scope) {
  $scope.chartType = "line"
  $scope.airList = ['United','Southwest','Delta']
  $scope.airName = "United"
  $scope.dataSource = {
    chart: {
      caption: "Value Lost per Month by Airline",
      subCaption: $scope.airName,
    },
    data: [{
        label: "January 2010",
        value: "880000"
      },
      {
        label: "February 2010",
        value: "730000"
      },
      {
        label: "March 2010",
        value: "590000"
      },
      {
        label: "April 2010",
        value: "520000"
      },
      {
        label: "May 2010",
        value: "330000"
      }
    ]
  };
});
