// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters

//SOLUTION:
function solution(a, b) {
  //   if (a.length > b.length) return b+a+b
  //   if (b.length > a.length) return a+b+a

  return a.length > b.length ? b + a + b : a + b + a;
}

console.log(solution("aba", "1"));
console.log(solution("33333", "aa"));
console.log(solution("22", "cccccc"));
