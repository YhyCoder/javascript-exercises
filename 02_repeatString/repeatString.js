const repeatString = function (string, number) {
  let output = "";

  if (number < 0) return "ERROR";

  for (let i = 0; i < number; i++) {
    output += string;
  }
  return output;
};

repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1);

// Do not edit below this line
module.exports = repeatString;
