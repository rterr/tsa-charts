angular
  .module('app')
  .controller('ValueController', ValueController);

function ValueController($scope, dataFactory) {
  $scope.menuType = "Airline"
  $scope.chartType = "line"
  $scope.airList = dataFactory.airlines
  $scope.airName = '0'
  $scope.dataSource = {
    chart: {
      caption: "Total Value Lost per Month by Airline (2010 through 2013)",
      subCaption: dataFactory.airlines[$scope.airName],
      numberPrefix: "$"
    },
    data: dataFactory.airlinesMonthlyData[0].airlineData
  };
  $scope.hasChanged = hasChanged;

  function hasChanged() {
    $scope.dataSource.chart.subCaption = dataFactory.airlines[$scope.airName]
    $scope.dataSource.data = dataFactory.airlinesMonthlyData[$scope.airName].airlineData
  }
};
