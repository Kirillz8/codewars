// function folding(a, b) {
//   if (a < b) {
//     [a, b] = [b, a];
//   }

//   let answer = 0;

//   while (b > 0) {
//     const numOfSquares = Math.floor(a / b); // 1 // 1 // 4
//     const remainingLength = a % b; // 4 // 1 // 0

//     answer += numOfSquares; //0+1=1+1=2+4=6

//     a = b; // 5 // 4 // 1
//     b = remainingLength; // 4 // 1 // 0
//   }

//   return answer;
// }

// console.log(folding(9, 5));
