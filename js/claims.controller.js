(function() {
    'use strict';

angular
  .module('app')
  .controller('ClaimsController', ClaimsController);

function ClaimsController(dataFactory) {
  var vm = this
  vm.menuType = "Airport"
  vm.chartType = "column2d"
  vm.airList = dataFactory.airports
  vm.airName = '0'
//Data object to be used with FusionCharts
  vm.dataSource = {
    chart: {
      caption: "Average Claims per Month by Airport (2010 through 2013)",
      subCaption: dataFactory.airports[vm.airName],
    },
    data: dataFactory.airportsMonthlyData[0].airportData
  };
  vm.hasChanged = hasChanged;

//Function to update chart when a different object is selected from the dropdown menu
  function hasChanged() {
    vm.dataSource.chart.subCaption = dataFactory.airports[vm.airName]
    vm.dataSource.data = dataFactory.airportsMonthlyData[vm.airName].airportData
  }
};

})();