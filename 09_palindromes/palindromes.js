const palindromes = function (string) {
  const alphabetNumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanPunctuation = string
    .toLowerCase()
    .split("")
    .filter((character) => alphabetNumerical.includes(character))
    .join("");

    const reverseString = cleanPunctuation.split("").reverse().join("");

    return cleanPunctuation === reverseString;
};

console.log(palindromes("racecar!"));

// Do not edit below this line
module.exports = palindromes;
