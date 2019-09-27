// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
    
}

module.exports = reverseInt;
/*
function reverseInt(n) {
    const reversed = parseInt(n.toString().split('').reverse().join(''));
    return n < 0 ? reversed * -1 : reversed;
}

module.exports = reverseInt;
*/

// recommended
/*
function reverseInt(n) {
    const reversed = parseInt(n.toString().split('').reverse().join(''));
    return reversed * Math.sign(n);
}

*/