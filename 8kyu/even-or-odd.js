// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//SOLUTION:

function evenOrOdd(num) {
  return Math.abs(num % 2) === 1 ? "Odd" : "Even";
}

console.log(evenOrOdd(-7));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-2));
console.log(evenOrOdd(-2));
console.log(evenOrOdd(0));
