angular
  .module('app')
  .factory('dataFactory', dataFactory);

function dataFactory() {
  var vm = this;
  vm.data = tsaData.data;
  vm.airports = [];
  for (i = 0; i < vm.data.length; i++) {
    if (vm.airports.indexOf(vm.data[i]['airport']) == -1) {
      vm.airports.push(vm.data[i]['airport'])
    }
  }
  vm.airlines = [];
  for (i = 0; i < vm.data.length; i++) {
    if (vm.airlines.indexOf(vm.data[i]['airline']) == -1) {
      vm.airlines.push(vm.data[i]['airline'])
    }
  }

  vm.airlinesMonthlyData = [];
  airlineTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (i = 0; i < vm.airlines.length; i++) {
    airlineObject = {
      airline: vm.airlines[i],
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
    for (j = 0; j < vm.data.length; j++) {
      if (vm.data[j]['airline'] == vm.airlines[i] && isNaN(parseInt(vm.data[j]['value'])) == false) {
        switch (vm.data[j]['date'].substr(0, 2)) {
          case '1/':
            airlineObject.airlineData[0].value += parseInt(vm.data[j]['value'])
            airlineTotals[0] += parseInt(vm.data[j]['value'])
            break;
          case '2/':
            airlineObject.airlineData[1].value += parseInt(vm.data[j]['value'])
            airlineTotals[1] += parseInt(vm.data[j]['value'])
            break;
          case '3/':
            airlineObject.airlineData[2].value += parseInt(vm.data[j]['value'])
            airlineTotals[2] += parseInt(vm.data[j]['value'])
            break;
          case '4/':
            airlineObject.airlineData[3].value += parseInt(vm.data[j]['value'])
            airlineTotals[3] += parseInt(vm.data[j]['value'])
            break;
          case '5/':
            airlineObject.airlineData[4].value += parseInt(vm.data[j]['value'])
            airlineTotals[4] += parseInt(vm.data[j]['value'])
            break;
          case '6/':
            airlineObject.airlineData[5].value += parseInt(vm.data[j]['value'])
            airlineTotals[5] += parseInt(vm.data[j]['value'])
            break;
          case '7/':
            airlineObject.airlineData[6].value += parseInt(vm.data[j]['value'])
            airlineTotals[6] += parseInt(vm.data[j]['value'])
            break;
          case '8/':
            airlineObject.airlineData[7].value += parseInt(vm.data[j]['value'])
            airlineTotals[7] += parseInt(vm.data[j]['value'])
            break;
          case '9/':
            airlineObject.airlineData[8].value += parseInt(vm.data[j]['value'])
            airlineTotals[8] += parseInt(vm.data[j]['value'])
            break;
          case '10':
            airlineObject.airlineData[9].value += parseInt(vm.data[j]['value'])
            airlineTotals[9] += parseInt(vm.data[j]['value'])
            break;
          case '11':
            airlineObject.airlineData[10].value += parseInt(vm.data[j]['value'])
            airlineTotals[10] += parseInt(vm.data[j]['value'])
            break;
          case '12':
            airlineObject.airlineData[11].value += parseInt(vm.data[j]['value'])
            airlineTotals[11] += parseInt(vm.data[j]['value'])
            break;
        }
      }
    }
    vm.airlinesMonthlyData.push(airlineObject)
  }

  for (i = 0; i < vm.airlinesMonthlyData.length; i++) {
    for (j = 0; j < vm.airlinesMonthlyData[i].airlineData.length; j++) {
      vm.airlinesMonthlyData[i].airlineData[j].tooltext = "Average loss in this month across all airlines is $" + (airlineTotals[j] / 4).toLocaleString()
    }
  }

  vm.airportsMonthlyData = [];
  for (i = 0; i < vm.airports.length; i++) {
    airportStd = [
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
    airportObject = {
      airport: vm.airports[i],
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
    for (j = 0; j < vm.data.length; j++) {
      if (vm.data[j]['airport'] == vm.airports[i]) {
        switch (vm.data[j]['date'].substr(0, 2)) {
          case '1/':
            airportObject.airportData[0].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[0][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[0][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[0][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[0][3]++
            }
            break;
          case '2/':
            airportObject.airportData[1].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[1][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[1][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[1][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[1][3]++
            }
            break;
          case '3/':
            airportObject.airportData[2].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[2][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[2][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[2][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[2][3]++
            }
            break;
          case '4/':
            airportObject.airportData[3].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[3][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[3][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[3][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[3][3]++
            }
            break;
          case '5/':
            airportObject.airportData[4].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[4][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[4][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[4][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[4][3]++
            }
            break;
          case '6/':
            airportObject.airportData[5].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[5][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[5][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[5][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[5][3]++
            }
            break;
          case '7/':
            airportObject.airportData[6].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[6][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[6][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[6][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[6][3]++
            }
            break;
          case '8/':
            airportObject.airportData[7].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[7][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[7][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[7][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[7][3]++
            }
            break;
          case '9/':
            airportObject.airportData[8].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[8][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[8][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[8][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[8][3]++
            }
            break;
          case '10':
            airportObject.airportData[9].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[9][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[9][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[9][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[9][3]++
            }
            break;
          case '11':
            airportObject.airportData[10].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[10][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[10][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[10][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[10][3]++
            }
            break;
          case '12':
            airportObject.airportData[11].value++
              if (vm.data[j]['date'].includes('/10 ')) {
                airportStd[11][0]++
              }
            else if (vm.data[j]['date'].includes('/11 ')) {
              airportStd[11][1]++
            } else if (vm.data[j]['date'].includes('/12 ')) {
              airportStd[11][2]++
            } else if (vm.data[j]['date'].includes('/13 ')) {
              airportStd[11][3]++
            }
            break;
        }
      }
    }
    for (k = 0; k < airportObject.airportData.length; k++) {
      airportObject.airportData[k].value = Math.ceil(airportObject.airportData[k].value /= 4)
      airportObject.airportData[k].displayValue = airportObject.airportData[k].value + "{br}(std = " + math.round(math.std(airportStd[k]), 2) + ")"
    }

    vm.airportsMonthlyData.push(airportObject)
  }
  return vm;
}
