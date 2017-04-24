(function() {
    'use strict';

angular
  .module('app')
  .factory('dataFactory', dataFactory);

function dataFactory() {
  var self = this;
  self.data = tsaData.data;
  self.airports = [];
  self.airlines = [];
  self.airlinesMonthlyData = [];
  self.airportsMonthlyData = []; 
  let airlineTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//Populate lists of airports, airlines
  for (let i = 0; i < self.data.length; i++) {
    if (self.airports.indexOf(self.data[i]['airport']) == -1) {
      self.airports.push(self.data[i]['airport'])
    }
    if (self.airlines.indexOf(self.data[i]['airline']) == -1) {
      self.airlines.push(self.data[i]['airline'])
    } 
  }

//Populating objects for each individual airline, containing total value lost per month
//Also keeping a running total of all airlines' value lost per month, to be averaged later
  for (let i = 0; i < self.airlines.length; i++) {
    let airlineObject = {
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
    for (let j = 0; j < self.data.length; j++) {
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
//Append a tooltip containing average loss to all airlines' data
  for (let i = 0; i < self.airlinesMonthlyData.length; i++) {
    for (let j = 0; j < self.airlinesMonthlyData[i].airlineData.length; j++) {
      self.airlinesMonthlyData[i].airlineData[j].tooltext = "Average loss in this month across all airlines is $" + (airlineTotals[j] / 4).toLocaleString()
    }
  }

//Populating objects for each individual airport, containing the number of incidents per month
//Also keeping a running total claims month by year, to be used to calculate standard deviation
  for (let i = 0; i < self.airports.length; i++) {
    let airportStd = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
    let airportObject = {
      airport: self.airports[i],
      airportData: [{
          label: "January",
          value: 0,
          displayValue: ""
        },
        {
          label: "February",
          value: 0,
          displayValue: ""
        },
        {
          label: "March",
          value: 0,
          displayValue: ""
        },
        {
          label: "April",
          value: 0,
          displayValue: ""
        },
        {
          label: "May",
          value: 0,
          displayValue: ""
        },
        {
          label: "June",
          value: 0,
          displayValue: ""
        },
        {
          label: "July",
          value: 0,
          displayValue: ""
        },
        {
          label: "August",
          value: 0,
          displayValue: ""
        },
        {
          label: "September",
          value: 0,
          displayValue: ""
        },
        {
          label: "October",
          value: 0,
          displayValue: ""
        },
        {
          label: "November",
          value: 0,
          displayValue: ""
        },
        {
          label: "December",
          value: 0,
          displayValue: ""
        }
      ]
    };
    for (let j = 0; j < self.data.length; j++) {
      if (self.data[j]['airport'] == self.airports[i]) {
        switch (self.data[j]['date'].substr(0, 2)) {
          case '1/':
            airportObject.airportData[0].value++
              if (self.data[j]['date'].includes('/10 ')) {
                airportStd[0][0]++
              }
              else if (self.data[j]['date'].includes('/11 ')) {
              airportStd[0][1]++
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[0][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
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
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[1][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
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
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[2][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
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
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[3][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
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
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[4][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
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
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[5][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
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
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[6][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
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
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[7][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
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
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[8][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
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
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[9][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
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
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[10][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
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
            } else if (self.data[j]['date'].includes('/12 ')) {
              airportStd[11][2]++
            } else if (self.data[j]['date'].includes('/13 ')) {
              airportStd[11][3]++
            }
            break;
        }
      }
    }
//Average out monthly claims and append standard deviation to display value
    for (let k = 0; k < airportObject.airportData.length; k++) {
      airportObject.airportData[k].value = Math.ceil(airportObject.airportData[k].value /= 4)
      airportObject.airportData[k].displayValue = airportObject.airportData[k].value + "{br}(std = " + math.round(math.std(airportStd[k]), 2) + ")"
    }

    self.airportsMonthlyData.push(airportObject)
  }
  return self;
}

})();
