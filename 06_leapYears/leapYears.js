const leapYears = function (year) {
  const divisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const divisibleByFourHundred = year % 400 === 0;

  if (divisibleByFour && !isCentury || divisibleByFourHundred) {
    return true;
  }
  return false;
};

console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
