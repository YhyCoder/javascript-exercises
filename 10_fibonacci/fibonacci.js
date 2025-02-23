const fibonacci = function (number) {
  let fn_1 = 1;
  let fn_2 = 0;

  if (number < 0) {
    return "OOPS";
  }

  for (let i = 0; i < number; i++) {
    let fn = fn_1 + fn_2;
    fn_2 = fn_1;
    fn_1 = fn;
  }
  return fn_2;
};

// Do not edit below this line
module.exports = fibonacci;
