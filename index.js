// Code your solution in this file!
function  returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (num) => {
    return (fare) => {
      return fare * num
    }
  }

  const fareDoubler = createFareMultiplier(2)
  const fareTripler = createFareMultiplier(3)

  const selectDifferentDrivers = (arrayOfDrivers, driverFunction) => {
      return driverFunction(arrayOfDrivers)
  }