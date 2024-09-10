let input = require('fs').readFileSync('/dev/stdin');
let i = 1;

while (input > i) {
    input -= i;
    i++;
}

let numerator, denominator;

if (i%2 === 0) {
    numerator = input;
    denominator = i + 1 - input;
} else {
    numerator = i + 1 - input;
    denominator = input;
}

console.log(`${numerator}/${denominator}`)
