// ~ Boolean to String
// function booleanToString(b) {
//   return (b === true) ? "true" : "false";
// }

// ~ Even or Odd
// function evenOrOdd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }

// ~ Boolean to String
// function boolToWord(bool) {
//   return (bool === true) ? "Yes" : "No"
// }

// ~ Price of Mangoes
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
// console.log(mango(11, 53));
// console.log(mango(9, 5));
// console.log(mango(8, 81));

// ~ Remove string spaces
// function noSpace(x) {
//   return x.split(" ").join("");
// }

// ~ Keep Hydrated!
// function litres(time) {
//   let LPH = 0.5;
//   let LitresTotal = Math.floor(time * LPH);
//   return LitresTotal;
// }

// ~ Transportation on vacation
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
