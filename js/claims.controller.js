angular
  .module('app')
  .controller('ClaimsController', ClaimsController);

function ClaimsController($scope, dataFactory) {
  $scope.menuType = "Airport"
  $scope.chartType = "column2d"
  $scope.airList = dataFactory.airports
  $scope.airName = '0'
  $scope.dataSource = {
    chart: {
      caption: "Average Claims per Month by Airport (2010 through 2013)",
      subCaption: dataFactory.airlines[$scope.airName],
    },
    data: dataFactory.airportsMonthlyData[0].airportData
  };
  $scope.hasChanged = hasChanged;

  function hasChanged() {
    $scope.dataSource.chart.subCaption = dataFactory.airports[$scope.airName]
    $scope.dataSource.data = dataFactory.airportsMonthlyData[$scope.airName].airportData
  }
};
