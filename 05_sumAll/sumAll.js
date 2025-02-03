const sumAll = function (minNumber, maxNumber) {
  let sum = 0;

  if (
    minNumber < 0 ||
    maxNumber < 0 ||
    !Number.isInteger(minNumber) ||
    !Number.isInteger(maxNumber)
  ) {
    return "ERROR";
  }

  if (minNumber > maxNumber) {
    const temporary = minNumber;
    minNumber = maxNumber;
    maxNumber = temporary;
  }

  for (minNumber; minNumber <= maxNumber; minNumber++) {
    sum += minNumber;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
