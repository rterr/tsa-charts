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

app.factory('demoDataFactory', function() {
  var self = this;
  self.data = claims.data;
  self.airports = [];
  for (i = 0; i < self.data.length; i++) {
    if (self.airports.indexOf(self.data[i]['airport']) == -1) {
      self.airports.push(self.data[i]['airport'])
    }
  }
  self.airlines = [];
  for (i = 0; i < self.data.length; i++) {
    if (self.airlines.indexOf(self.data[i]['airline']) == -1) {
      self.airlines.push(self.data[i]['airline'])
    }
  }

  self.airlinesMonthlyData = [];
  airlineTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (i = 0; i < self.airlines.length; i++) {
    airlineObject = {
      airline: self.airlines[i],
      airlineData: [{
          label: "January",
          value: 0,
          tooltext: ""
        },
        {
          label: "February",
          value: 0,
          tooltext: ""
        },
        {
          label: "March",
          value: 0,
          tooltext: ""
        },
        {
          label: "April",
          value: 0,
          tooltext: ""
        },
        {
          label: "May",
          value: 0,
          tooltext: ""
        },
        {
          label: "June",
          value: 0,
          tooltext: ""
        },
        {
          label: "July",
          value: 0,
          tooltext: ""
        },
        {
          label: "August",
          value: 0,
          tooltext: ""
        },
        {
          label: "September",
          value: 0,
          tooltext: ""
        },
        {
          label: "October",
          value: 0,
          tooltext: ""
        },
        {
          label: "November",
          value: 0,
          tooltext: ""
        },
        {
          label: "December",
          value: 0,
          tooltext: ""
        }
      ]
    };
    for (j = 0; j < self.data.length; j++) {
      if (self.data[j]['airline'] == self.airlines[i] && isNaN(parseInt(self.data[j]['value'])) == false) {
        switch (self.data[j]['date'].substr(0, 2)) {
          case '1/':
            airlineObject.airlineData[0].value += parseInt(self.data[j]['value'])
            airlineTotals[0] += parseInt(self.data[j]['value'])
            break;
          case '2/':
            airlineObject.airlineData[1].value += parseInt(self.data[j]['value'])
            airlineTotals[1] += parseInt(self.data[j]['value'])
            break;
          case '3/':
            airlineObject.airlineData[2].value += parseInt(self.data[j]['value'])
            airlineTotals[2] += parseInt(self.data[j]['value'])
            break;
          case '4/':
            airlineObject.airlineData[3].value += parseInt(self.data[j]['value'])
            airlineTotals[3] += parseInt(self.data[j]['value'])
            break;
          case '5/':
            airlineObject.airlineData[4].value += parseInt(self.data[j]['value'])
            airlineTotals[4] += parseInt(self.data[j]['value'])
            break;
          case '6/':
            airlineObject.airlineData[5].value += parseInt(self.data[j]['value'])
            airlineTotals[5] += parseInt(self.data[j]['value'])
            break;
          case '7/':
            airlineObject.airlineData[6].value += parseInt(self.data[j]['value'])
            airlineTotals[6] += parseInt(self.data[j]['value'])
            break;
          case '8/':
            airlineObject.airlineData[7].value += parseInt(self.data[j]['value'])
            airlineTotals[7] += parseInt(self.data[j]['value'])
            break;
          case '9/':
            airlineObject.airlineData[8].value += parseInt(self.data[j]['value'])
            airlineTotals[8] += parseInt(self.data[j]['value'])
            break;
          case '10':
            airlineObject.airlineData[9].value += parseInt(self.data[j]['value'])
            airlineTotals[9] += parseInt(self.data[j]['value'])
            break;
          case '11':
            airlineObject.airlineData[10].value += parseInt(self.data[j]['value'])
            airlineTotals[10] += parseInt(self.data[j]['value'])
            break;
          case '12':
            airlineObject.airlineData[11].value += parseInt(self.data[j]['value'])
            airlineTotals[11] += parseInt(self.data[j]['value'])
            break;
        }
      }
    }
    self.airlinesMonthlyData.push(airlineObject)
  }

for (i = 0;i<self.airlinesMonthlyData.length;i++){
    for (j=0;j<self.airlinesMonthlyData[i].airlineData.length;j++){
      self.airlinesMonthlyData[i].airlineData[j].tooltext = "Average loss in this month across all airlines is $" + (airlineTotals[j]/4).toLocaleString()
    }
  }

  self.airportsMonthlyData = [];
  for (i = 0; i < self.airports.length; i++) {
    airportStd = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]]
    airportObject = {
      airport: self.airports[i],
      airportData: [{
          label: "January",
          value: 0,
          tooltext: ""
        },
        {
          label: "February",
          value: 0,
          tooltext: ""
        },
        {
          label: "March",
          value: 0,
          tooltext: ""
        },
        {
          label: "April",
          value: 0,
          tooltext: ""
        },
        {
          label: "May",
          value: 0,
          tooltext: ""
        },
        {
          label: "June",
          value: 0,
          tooltext: ""
        },
        {
          label: "July",
          value: 0,
          tooltext: ""
        },
        {
          label: "August",
          value: 0,
          tooltext: ""
        },
        {
          label: "September",
          value: 0,
          tooltext: ""
        },
        {
          label: "October",
          value: 0,
          tooltext: ""
        },
        {
          label: "November",
          value: 0,
          tooltext: ""
        },
        {
          label: "December",
          value: 0,
          tooltext: ""
        }
      ]
    };
    for (j = 0; j < self.data.length; j++) {
      if (self.data[j]['airport'] == self.airports[i]) {
        switch (self.data[j]['date'].substr(0, 2)) {
          case '1/':
            airportObject.airportData[0].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[0][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[0][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[0][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[0][3]++
              }
            break;
          case '2/':
            airportObject.airportData[1].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[1][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[1][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[1][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[1][3]++
              }
            break;
          case '3/':
            airportObject.airportData[2].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[2][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[2][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[2][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[2][3]++
              }            
            break;
          case '4/':
            airportObject.airportData[3].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[3][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[3][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[3][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[3][3]++
              }            
            break;
          case '5/':
            airportObject.airportData[4].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[4][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[4][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[4][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[4][3]++
              }            
            break;
          case '6/':
            airportObject.airportData[5].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[5][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[5][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[5][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[5][3]++
              }            
            break;
          case '7/':
            airportObject.airportData[6].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[6][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[6][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[6][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[6][3]++
              }            
            break;
          case '8/':
            airportObject.airportData[7].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[7][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[7][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[7][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[7][3]++
              }
            break;
          case '9/':
            airportObject.airportData[8].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[8][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[8][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[8][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[8][3]++
              }            
            break;
          case '10':
            airportObject.airportData[9].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[9][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[9][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[9][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[9][3]++
              }            
            break;
          case '11':
            airportObject.airportData[10].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[10][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[10][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[10][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[10][3]++
              }            
            break;
          case '12':
            airportObject.airportData[11].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[11][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
                airportStd[11][1]++
              }
              else if (self.data[j]['date'].includes('/12 ')) {
                airportStd[11][2]++
              }
              else if (self.data[j]['date'].includes('/13 ')) {
                airportStd[11][3]++
              }            
            break;
        }
      }
    }
    for (k=0;k<airportObject.airportData.length;k++){
      airportObject.airportData[k].value = Math.ceil(airportObject.airportData[k].value /= 4)
      airportObject.airportData[k].tooltext = "Standard Deviation = " + math.round(math.std(airportStd[k]), 2)
    }

    self.airportsMonthlyData.push(airportObject)
  }
  return self;
})

console.log(Date.parse("7/15/10 9:45"))

app.controller('ClaimsController', function($scope, demoDataFactory) {
  $scope.chartType = "column2d"
  $scope.airList = demoDataFactory.airports
  $scope.airName = '0'
  $scope.dataSource = {
    chart: {
      caption: "Average Claims per Month by Airport (2010 through 2013)",
      subCaption: demoDataFactory.airlines[$scope.airName],
    },
    data: demoDataFactory.airportsMonthlyData[0].airportData
  };
  $scope.hasChanged = function() {
      $scope.dataSource.chart.subCaption = demoDataFactory.airports[$scope.airName]
      $scope.dataSource.data = demoDataFactory.airportsMonthlyData[$scope.airName].airportData
  }
});

app.controller('ValueController', function($scope, demoDataFactory) {
  $scope.chartType = "line"
  $scope.airList = demoDataFactory.airlines
  $scope.airName = '0'
  $scope.dataSource = {
    chart: {
      caption: "Total Value Lost per Month by Airline (2010 through 2013)",
      subCaption: demoDataFactory.airlines[$scope.airName],
      numberPrefix: "$",
    },
    data: demoDataFactory.airlinesMonthlyData[0].airlineData
  };
  $scope.hasChanged = function() {
      $scope.dataSource.chart.subCaption = demoDataFactory.airlines[$scope.airName]
      $scope.dataSource.data = demoDataFactory.airlinesMonthlyData[$scope.airName].airlineData
  }
});
