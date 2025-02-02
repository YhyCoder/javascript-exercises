const reverseString = function(string) {
  const stringLetters = string.split("");
  const reverseStringLetters = stringLetters.reverse();
  const resultString = reverseStringLetters.join("");
  return resultString;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
