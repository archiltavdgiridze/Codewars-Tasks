// ~ 1 Boolean to String
// function booleanToString(b) {
//   return (b === true) ? "true" : "false";
// }

// ~ 2 Even or Odd
// function evenOrOdd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }

// ~ 3 Boolean to String
// function boolToWord(bool) {
//   return (bool === true) ? "Yes" : "No"
// }

// ~ 4 Price of Mangoes
// ~ long version
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes.
// For a given quantity and price (per mango), calculate the total cost of the mangoes.

// function mango(quantity, price) {
//   if (quantity > 0) {
//     if (quantity <= 2) {
//       return quantity * price;
//     } else if (quantity > 2 && quantity % 3 === 0) {
//       // this is when the quantity is divisible by 3
//       return (quantity - quantity / 3) * price;
//     } else if (quantity > 2 && quantity % 3 === 1) {
//       // this is when the quantity is not divisible by 3 and remainder is 1
//       return ((quantity - (quantity % 3) - (quantity - (quantity % 3)) / 3) * price + (quantity % 3) * price);
//     } else if (quantity > 2 && quantity % 3 === 2) {
//       // this is when the quantity is not divisible by 3 and remainder is 2
//     return ((quantity - quantity % 3) - ((quantity - quantity % 3) / 3)) * price + ((quantity % 3) * price);
//     } else {
//       return 0;
//     }
//   } else {
//     return console.error("Error. Insufficient amount of Mangos");
//   }
// }

// ~ short version
// function mango(quantity, price) {
//   return (quantity > 0)
//   ? (quantity <= 2)
//     ? quantity * price
//       : (quantity > 2 && quantity % 3 === 0) ? (quantity - quantity / 3) * price
//       : (quantity > 2 && quantity % 3 === 1) ? ((quantity - (quantity % 3) - (quantity - (quantity % 3)) / 3) * price + (quantity % 3) * price)
//       : (quantity > 2 && quantity % 3 === 2) ? ((quantity - quantity % 3) - ((quantity - quantity % 3) / 3)) * price + ((quantity % 3) * price)
//       : 0
//   : console.error("Error. Insufficient amount of Mangos")
// }

// console.log(mango(67, 78));
// console.log(mango(8, 81));

// ~ 5 Remove string spaces
// function noSpace(x) {
//   return x.split(" ").join("");
// }

// ~ 6 Keep Hydrated!
// function litres(time) {
//   let LPH = 0.5;
//   let LitresTotal = Math.floor(time * LPH);
//   return LitresTotal;
// }

// ~ 7 Transportation on vacation
// function rentalCarCost(d) {
//   const rentCost = 40;
//   if (d < 3) {
//     return d * rentCost;
//   }else if (d < 7) {
//     return (d * rentCost) - 20
//   } else {
//     return (d * rentCost) - 50
//   }
// }

// ~ refactored
// function rentalCarCost(d) {
//   const rentCost = 40;
//   return (d < 3) ? d * rentCost
//     : (d < 7) ? (d * rentCost) - 20
//     : (d * rentCost) - 50
// }

// ~ 8 Basic Mathematical Operations
// function basicOp(operation, value1, value2) {
//   if (operation == '+') {
//     return value1 + value2;
//   }else if (operation == '-') {
//     return value1 - value2
//   }else if (operation == '*') {
//     return value1 * value2
//   }else if (operation == '/') {
//     return value1 / value2
//   }else {
//     return 'No valid operation character was inputted'
//   }
// }

// ~ Refactored
// function basicOp(operation, value1, value2) {
//   return (operation == '+') ? value1 + value2
//     : (operation == '-') ? value1 - value2
//     : (operation == '*') ? value1 * value2
//     : (operation == '/') ? value1 / value2
//     : 'No valid operation character was inputted'
// }

// console.log(basicOp('+', 1, 1))
// console.log(basicOp('-', 15, 18))
// console.log(basicOp('*', 5, 5))
// console.log(basicOp("/", 49, 7));
// console.log(basicOp("#", 49, 7));

// ~ 9 Remove exclamation marks
// function removeExclamationMarks(s) {
//   return s.split("!").join("");
// }
// console.log(removeExclamationMarks("dsfe!dsds!fdc"));

// ~ 10 Will you make it?
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return (fuelLeft * mpg >= distanceToPump) ? true : false
// };
// console.log(zeroFuel(50, 25, 2))

// ~ 11 Quarter of the year
// const quarterOf = (month) => {
//   if (month >= 1 && month <= 3) {
//     return 1;
//   } else if (month >= 4 && month <= 6) {
//     return 2;
//   } else if (month >= 7 && month <= 9) {
//     return 3;
//   } else if (month >= 10 && month <= 12) {
//     return 4;
//   } else {
//     return 0;
//   }
// };

// ~ refactor ternary
// const quarterOf = (month) => {
//   return (month >= 1 && month <= 3) ? 1
//     : (month >= 4 && month <= 6) ? 2
//     : (month >= 7 && month <= 9) ? 3
//     : (month >= 10 && month <= 12) ? 4
//     : 0
// };
// console.log(quarterOf(2));

// ~ 12 MakeUpperCase
// function makeUpperCase(str) {
//   return str.toUpperCase();
// }

// ~ 13 Shortest Word
// function findShort(s) {
//   let words = s.split(' ')
//   let shortest = words.reduce((shortestWord, currentWord) => {
//     return currentWord.length < shortestWord.length ? currentWord : shortestWord
//   }, words[0])
//   return shortest.length;
// }

// ~ 14 Convert a Number to a String!
// function numberToString(num) {
//   return num.toString();
// }

// ~ 15 Find the next perfect square!
// function findNextSquare(sq) {
//   if (sq % Math.sqrt(sq) === 0) {
//     return (nextSquare = Math.pow(Math.sqrt(sq) + 1, 2));
//   }else {
//     return -1;
//   }
// }

// ~ refactor 
// function findNextSquare(sq) {
//   return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }
//console.log(findNextSquare(121));

