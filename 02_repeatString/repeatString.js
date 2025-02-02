const repeatString = function (string, number) {
  let output = "";
  for (let i = 0; i < number; i++) {
    output += string;
  }
  return output;
};

repeatString("hey", 3);
repeatString("hello", 10);

// Do not edit below this line
module.exports = repeatString;
