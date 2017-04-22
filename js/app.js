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
  self.data = [{
      "date": "1/3/10 14:30",
      "airport": "SLC",
      "airline": "Delta Air Lines",
      "value": "0.00"
    },
    {
      "date": "1/2/10 0:00",
      "airport": "LAX",
      "airline": "Southwest Airlines",
      "value": "0.00"
    },
    {
      "date": "1/2/10 5:00",
      "airport": "SEA",
      "airline": "Delta Air Lines",
      "value": "0.00"
    },
    {
      "date": "1/1/10 0:00",
      "airport": "DEN",
      "airline": "Southwest Airlines",
      "value": "-"
    },
    {
      "date": "1/2/10 0:00",
      "airport": "LAS",
      "airline": "American Airlines",
      "value": "0.00"
    },
    {
      "date": "1/3/10 0:00",
      "airport": "DFW",
      "airline": "American Airlines",
      "value": "0.00"
    },
    {
      "date": "1/2/10 15:00",
      "airport": "ASE",
      "airline": "Frontier Airlines",
      "value": "0.00"
    },
    {
      "date": "1/1/10 0:00",
      "airport": "SEA",
      "airline": "Delta Air Lines",
      "value": "1579.40"
    },
    {
      "date": "1/5/10 0:00",
      "airport": "XNA",
      "airline": "American Airlines",
      "value": "193.98"
    },
    {
      "date": "1/2/10 0:00",
      "airport": "IAD",
      "airline": "UAL",
      "value": "-"
    },
    {
      "date": "1/1/10 19:05",
      "airport": "BDL",
      "airline": "USAir",
      "value": "0.00"
    },
    {
      "date": "1/2/10 23:40",
      "airport": "DAL",
      "airline": "Southwest Airlines",
      "value": "72.00"
    },
    {
      "date": "1/3/10 9:16",
      "airport": "ORF",
      "airline": "Southwest Airlines",
      "value": "0.00"
    },
    {
      "date": "1/1/10 0:00",
      "airport": "CLE",
      "airline": "-",
      "value": "-"
    },
    {
      "date": "1/1/10 9:00",
      "airport": "JFK",
      "airline": "Aero Mexico",
      "value": "0.00"
    },
    {
      "date": "1/3/10 0:00",
      "airport": "ATL",
      "airline": "Delta Air Lines",
      "value": "-"
    },
    {
      "date": "1/8/10 10:30",
      "airport": "BNA",
      "airline": "American Airlines",
      "value": "69.00"
    },
    {
      "date": "1/3/10 0:00",
      "airport": "EWR",
      "airline": "Continental Airlines",
      "value": "0.00"
    },
    {
      "date": "1/4/10 12:40",
      "airport": "BIL",
      "airline": "UAL",
      "value": "-"
    },
    {
      "date": "1/3/10 0:00",
      "airport": "ATL",
      "airline": "Delta Air Lines",
      "value": "0.00"
    },
    {
      "date": "1/1/10 0:00",
      "airport": "MCO",
      "airline": "American Airlines",
      "value": "0.00"
    },
    {
      "date": "1/3/10 8:00",
      "airport": "BOS",
      "airline": "American Airlines",
      "value": "0.00"
    },
    {
      "date": "1/3/10 0:00",
      "airport": "CVG",
      "airline": "USAir",
      "value": "20.00"
    },
    {
      "date": "12/19/10 13:31",
      "airport": "MYR",
      "airline": "-",
      "value": "0.00"
    },
    {
      "date": "12/20/10 8:56",
      "airport": "ATL",
      "airline": "Delta Air Lines",
      "value": "0.00"
    },
    {
      "date": "12/22/10 17:00",
      "airport": "IAD",
      "airline": "Jet Blue",
      "value": "0.00"
    },
    {
      "date": "1/6/10 5:00",
      "airport": "MIA",
      "airline": "American Airlines",
      "value": "0.00"
    },
    {
      "date": "1/5/10 16:30",
      "airport": "BOS",
      "airline": "AirTran Airlines",
      "value": "0.00"
    },
    {
      "date": "1/4/10 17:30",
      "airport": "SEA",
      "airline": "British Airways",
      "value": "0.00"
    },
    {
      "date": "1/5/10 20:30",
      "airport": "PHX",
      "airline": "Southwest Airlines",
      "value": "0.00"
    },
    {
      "date": "1/1/10 20:00",
      "airport": "SDF",
      "airline": "Midwest Express Airlines",
      "value": "0.00"
    },
    {
      "date": "1/8/10 0:00",
      "airport": "BWI",
      "airline": "Southwest Airlines",
      "value": "0.00"
    },
    {
      "date": "1/6/10 14:57",
      "airport": "MCO",
      "airline": "Delta Air Lines",
      "value": "1575.00"
    },
    {
      "date": "1/1/10 6:35",
      "airport": "SLC",
      "airline": "American Airlines",
      "value": "0.00"
    },
    {
      "date": "1/1/10 16:30",
      "airport": "JFK",
      "airline": "Jet Blue",
      "value": "-"
    },
    {
      "date": "1/5/10 11:00",
      "airport": "EWR",
      "airline": "USAir",
      "value": "0.00"
    },
    {
      "date": "1/1/10 7:00",
      "airport": "LAX",
      "airline": "Continental Airlines",
      "value": "0.00"
    },
    {
      "date": "1/3/10 19:00",
      "airport": "MEM",
      "airline": "KLM Royal Dutch Airlines",
      "value": "0.00"
    },
    {
      "date": "1/7/10 8:30",
      "airport": "BWI",
      "airline": "AirTran Airlines",
      "value": "0.00"
    },
    {
      "date": "1/1/10 0:00",
      "airport": "JFK",
      "airline": "Jet Airways",
      "value": "0.00"
    },
    {
      "date": "1/4/10 6:30",
      "airport": "EWR",
      "airline": "Continental Airlines",
      "value": "0.00"
    },
    {
      "date": "1/5/10 0:00",
      "airport": "JFK",
      "airline": "Jet Blue",
      "value": "0.00"
    },
    {
      "date": "1/5/10 0:00",
      "airport": "SMF",
      "airline": "Southwest Airlines",
      "value": "0.00"
    },
    {
      "date": "1/7/10 0:00",
      "airport": "GEG",
      "airline": "USAir",
      "value": "-"
    },
    {
      "date": "1/8/10 17:00",
      "airport": "MSY",
      "airline": "Delta Air Lines",
      "value": "0.00"
    },
    {
      "date": "1/3/10 8:00",
      "airport": "PHX",
      "airline": "USAir",
      "value": "0.00"
    },
    {
      "date": "1/8/10 0:00",
      "airport": "EWR",
      "airline": "Continental Airlines",
      "value": "0.00"
    },
    {
      "date": "1/5/10 11:00",
      "airport": "BTR",
      "airline": "Delta Air Lines",
      "value": "0.00"
    },
    {
      "date": "1/3/10 8:30",
      "airport": "BWI",
      "airline": "Southwest Airlines",
      "value": "0.00"
    },
    {
      "date": "1/7/10 14:03",
      "airport": "DEN",
      "airline": "Frontier Airlines",
      "value": "-"
    },
    {
      "date": "1/4/10 0:00",
      "airport": "DEN",
      "airline": "Delta Air Lines",
      "value": "0.00"
    },
    {
      "date": "1/2/10 13:15",
      "airport": "DAL",
      "airline": "Southwest Airlines",
      "value": "12.00"
    },
    {
      "date": "1/4/10 0:00",
      "airport": "BOS",
      "airline": "British Airways",
      "value": "-"
    },
    {
      "date": "1/8/10 17:50",
      "airport": "ORD",
      "airline": "UAL",
      "value": "0.00"
    },
    {
      "date": "1/6/10 9:00",
      "airport": "JFK",
      "airline": "Virgin America",
      "value": "354.00"
    },
    {
      "date": "1/3/10 12:20",
      "airport": "GUC",
      "airline": "American Airlines",
      "value": "-"
    },
    {
      "date": "1/1/10 0:00",
      "airport": "SNA",
      "airline": "UAL",
      "value": "0.00"
    },
    {
      "date": "1/2/10 5:40",
      "airport": "ORD",
      "airline": "Continental Airlines",
      "value": "0.00"
    },
    {
      "date": "1/3/10 0:00",
      "airport": "PBI",
      "airline": "USAir",
      "value": "0.00"
    },
    {
      "date": "1/1/10 0:00",
      "airport": "BWI",
      "airline": "Delta Air Lines",
      "value": "0.00"
    },
    {
      "date": "1/8/10 12:19",
      "airport": "TUL",
      "airline": "Delta Air Lines",
      "value": "0.00"
    },
    {
      "date": "1/6/10 0:00",
      "airport": "OAK",
      "airline": "Alaska Airlines",
      "value": "466.20"
    },
    {
      "date": "1/10/10 0:00",
      "airport": "BWI",
      "airline": "AirTran Airlines",
      "value": "-"
    },
    {
      "date": "1/2/10 13:00",
      "airport": "IAD",
      "airline": "UAL",
      "value": "0.00"
    },
    {
      "date": "1/9/10 7:00",
      "airport": "SLC",
      "airline": "Delta Air Lines",
      "value": "0.00"
    },
    {
      "date": "1/9/10 7:36",
      "airport": "FLL",
      "airline": "Southwest Airlines",
      "value": "0.00"
    },
    {
      "date": "1/5/10 17:50",
      "airport": "SYR",
      "airline": "USAir",
      "value": "251.95"
    },
    {
      "date": "1/8/10 0:00",
      "airport": "SEA",
      "airline": "Alaska Airlines",
      "value": "0.00"
    },
    {
      "date": "1/5/10 0:00",
      "airport": "EWR",
      "airline": "Continental Airlines",
      "value": "-"
    },
    {
      "date": "1/10/10 9:02",
      "airport": "MIA",
      "airline": "UAL",
      "value": "129.00"
    },
    {
      "date": "2/10/10 0:00",
      "airport": "DEN",
      "airline": "Frontier Airlines",
      "value": "42.00"
    },
    {
      "date": "1/10/10 0:00",
      "airport": "F",
      "airline": "Mexicana",
      "value": "0.00"
    },
    {
      "date": "2/5/10 0:00",
      "airport": "SYR",
      "airline": "USAir",
      "value": "-"
    },
    {
      "date": "1/9/10 0:00",
      "airport": "MCO",
      "airline": "American Airlines",
      "value": "0.00"
    },
    {
      "date": "1/10/10 0:00",
      "airport": "MIA",
      "airline": "Delta Air Lines",
      "value": "0.00"
    },
    {
      "date": "1/2/10 11:00",
      "airport": "MYR",
      "airline": "USAir",
      "value": "0.00"
    }
  ]
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
  for (i = 0; i < self.airlines.length; i++) {
    airlineObject = {
      airline: self.airlines[i],
      airlineData: [{
          label: "January",
          value: 0
        },
        {
          label: "February",
          value: 0
        },
        {
          label: "March",
          value: 0
        },
        {
          label: "April",
          value: 0
        },
        {
          label: "May",
          value: 0
        },
        {
          label: "June",
          value: 0
        },
        {
          label: "July",
          value: 0
        },
        {
          label: "August",
          value: 0
        },
        {
          label: "September",
          value: 0
        },
        {
          label: "October",
          value: 0
        },
        {
          label: "November",
          value: 0
        },
        {
          label: "December",
          value: 0
        }
      ]
    };
    for (j = 0; j < self.data.length; j++) {
      if (self.data[j]['airline'] == self.airlines[i] && isNaN(parseInt(self.data[j]['value'])) == false) {
        switch (self.data[j]['date'].substr(0, 2)) {
          case '1/':
            airlineObject.airlineData[0].value += parseInt(self.data[j]['value'])
            break;
          case '2/':
            airlineObject.airlineData[1].value += parseInt(self.data[j]['value'])
            break;
          case '3/':
            airlineObject.airlineData[2].value += parseInt(self.data[j]['value'])
            break;
          case '4/':
            airlineObject.airlineData[3].value += parseInt(self.data[j]['value'])
            break;
          case '5/':
            airlineObject.airlineData[4].value += parseInt(self.data[j]['value'])
            break;
          case '6/':
            airlineObject.airlineData[5].value += parseInt(self.data[j]['value'])
            break;
          case '7/':
            airlineObject.airlineData[6].value += parseInt(self.data[j]['value'])
            break;
          case '8/':
            airlineObject.airlineData[7].value += parseInt(self.data[j]['value'])
            break;
          case '9/':
            airlineObject.airlineData[8].value += parseInt(self.data[j]['value'])
            break;
          case '10':
            airlineObject.airlineData[9].value += parseInt(self.data[j]['value'])
            break;
          case '11':
            airlineObject.airlineData[10].value += parseInt(self.data[j]['value'])
            break;
          case '12':
            airlineObject.airlineData[11].value += parseInt(self.data[j]['value'])
            break;
        }
      }
    }
    self.airlinesMonthlyData.push(airlineObject)
  }

  self.airportsMonthlyData = [];
  for (i = 0; i < self.airports.length; i++) {
    airportObject = {
      airport: self.airports[i],
      airportData: [{
          label: "January",
          value: 0
        },
        {
          label: "February",
          value: 0
        },
        {
          label: "March",
          value: 0
        },
        {
          label: "April",
          value: 0
        },
        {
          label: "May",
          value: 0
        },
        {
          label: "June",
          value: 0
        },
        {
          label: "July",
          value: 0
        },
        {
          label: "August",
          value: 0
        },
        {
          label: "September",
          value: 0
        },
        {
          label: "October",
          value: 0
        },
        {
          label: "November",
          value: 0
        },
        {
          label: "December",
          value: 0
        }
      ]
    };
    for (j = 0; j < self.data.length; j++) {
      if (self.data[j]['airport'] == self.airports[i]) {
        switch (self.data[j]['date'].substr(0, 2)) {
          case '1/':
            airportObject.airportData[0].value++
            break;
          case '2/':
            airportObject.airportData[1].value++
            break;
          case '3/':
            airportObject.airportData[2].value++
            break;
          case '4/':
            airportObject.airportData[3].value++
            break;
          case '5/':
            airportObject.airportData[4].value++
            break;
          case '6/':
            airportObject.airportData[5].value++
            break;
          case '7/':
            airportObject.airportData[6].value++
            break;
          case '8/':
            airportObject.airportData[7].value++
            break;
          case '9/':
            airportObject.airportData[8].value++
            break;
          case '10':
            airportObject.airportData[9].value++
            break;
          case '11':
            airportObject.airportData[10].value++
            break;
          case '12':
            airportObject.airportData[11].value++
            break;
        }
      }
    }
    for (k=0;k<airportObject.airportData.length;k++){
      airportObject.airportData[k].value = Math.ceil(airportObject.airportData[k].value /= 4)
    }
    self.airportsMonthlyData.push(airportObject)
  }

  self.airportsDummyData = [{
    airport: 'SFO',
    airportData: [{
        label: "January",
        value: 50
      },
      {
        label: "February",
        value: 50
      },
      {
        label: "March",
        value: 46
      },
      {
        label: "April",
        value: 46
      },
      {
        label: "May",
        value: 94
      },
      {
        label: "June",
        value: 35
      },
      {
        label: "July",
        value: 27
      },
      {
        label: "August",
        value: 38
      },
      {
        label: "September",
        value: 52
      },
      {
        label: "October",
        value: 73
      },
      {
        label: "November",
        value: 78
      },
      {
        label: "December",
        value: 48
      }
    ]
  }];
  self.airlinesDummyData = [{
    airline: 'United',
    airlineData: [{
        label: "January",
        value: 50
      },
      {
        label: "February",
        value: 50
      },
      {
        label: "March",
        value: 46
      },
      {
        label: "April",
        value: 46
      },
      {
        label: "May",
        value: 94
      },
      {
        label: "June",
        value: 35
      },
      {
        label: "July",
        value: 27
      },
      {
        label: "August",
        value: 38
      },
      {
        label: "September",
        value: 52
      },
      {
        label: "October",
        value: 73
      },
      {
        label: "November",
        value: 78
      },
      {
        label: "December",
        value: 48
      }
    ]
  }];
  return self;
})

app.controller('ClaimsController', function($scope, demoDataFactory) {
  console.log(demoDataFactory);
  $scope.chartType = "column2d"
  $scope.airList = demoDataFactory.airports
  $scope.airName = demoDataFactory.airports[0]
  $scope.dataSource = {
    chart: {
      caption: "Average Claims per Month by Airport",
      subCaption: $scope.airName,
    },
    data: demoDataFactory.airportsMonthlyData[0].airportData
  };
  $scope.hasChanged = function() {
      $scope.dataSource.chart.subCaption = demoDataFactory.airports[$scope.airName]
      $scope.dataSource.data = demoDataFactory.airportsMonthlyData[$scope.airName].airportData
  }
});

app.controller('ValueController', function($scope, demoDataFactory) {
  console.log(demoDataFactory);
  $scope.chartType = "line"
  $scope.airList = demoDataFactory.airlines
  $scope.airName = demoDataFactory.airlines[0]
  $scope.dataSource = {
    chart: {
      caption: "Total Value Lost per Month by Airline from 2010 through 2013",
      subCaption: $scope.airName,
    },
    data: demoDataFactory.airlinesMonthlyData[0].airlineData
  };
  $scope.hasChanged = function() {
      $scope.dataSource.chart.subCaption = demoDataFactory.airlines[$scope.airName]
      $scope.dataSource.data = demoDataFactory.airlinesMonthlyData[$scope.airName].airlineData
  }
});
