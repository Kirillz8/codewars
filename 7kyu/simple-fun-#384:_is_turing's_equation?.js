// Description:
// Story
// Joe Stoy, in his book "Denotational Semantics", tells following story:

// The decision which way round the digits run is, of course, mathematically trivial.
// Indeed, one early British computer had numbers running from right to left (because
// the spot on an oscilloscope tube runs from left to right, but in serial logic the
// least significant digits are dealt with first).

// Turing used to mystify audiences at public lectures when, quite by accident, he would
// slip into this mode even for decimal arithmetic, and write things like 73+42=16.

// The next version of the machine was made more conventional simply by crossing the
// x-deflection wires: this, however, worried the engineers, whose waveforms were all
// backwards. That problem was in turn solved by providing a little window so that the
// engineers(who tended to be behind the computer anyway) could view the oscilloscope
// screen from the back.

// [C. Strachey - private communication.]
// You will play the role of the audience and judge on the truth value of Turing's equations.

// Task
// You are given a string s. It's an equation such as "a+b=c", where a, b, c are numbers made up of the digits 0 to 9. This includes possible leading or trailing zeros. The equations will not contain any spaces.

// Your task is to determine whether s is a valid Turing equation. Return true or false, respectively, in Turing's interpretation, i.e. the numbers being read backwards.

// Still struggling to understand the task? Look at the following examples ;-)

//SOLUTION:

function isTuringEquation(s) {
  const newString = s
    .replace("+", "=")
    .split("=")
    .map((word) => word.split("").reverse().join("") * 1);
  return newString[0] + newString[1] === newString[2];
}

console.log(isTuringEquation("23+23=46"));
console.log(isTuringEquation("13+24=37"));
