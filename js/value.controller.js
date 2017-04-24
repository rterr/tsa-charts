(function() {
    'use strict';

angular
  .module('app')
  .controller('ValueController', ValueController);

function ValueController(dataFactory) {
  var vm = this
  vm.menuType = "Airline"
  vm.chartType = "line"
  vm.airList = dataFactory.airlines
  vm.airName = '0'
//Data object to be used with FusionCharts
  vm.dataSource = {
    chart: {
      caption: "Total Value Lost per Month by Airline (2010 through 2013)",
      subCaption: dataFactory.airlines[vm.airName],
      numberPrefix: "$"
    },
    data: dataFactory.airlinesMonthlyData[0].airlineData
  };
  vm.hasChanged = hasChanged;
  
//Function to update chart when a different object is selected from the dropdown menu
  function hasChanged() {
    vm.dataSource.chart.subCaption = dataFactory.airlines[vm.airName]
    vm.dataSource.data = dataFactory.airlinesMonthlyData[vm.airName].airlineData
  }
};

})();