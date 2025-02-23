const findTheOldest = function (array) {
  let result = array
    .map((person) => {
      if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
      }

      return {
        name: person.name,
        age: person.yearOfDeath - person.yearOfBirth,
      };
    })
    .sort((a, b) => b.age - a.age);
  return result[0];
};

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ]

// console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
