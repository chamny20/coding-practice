let [a, b, c] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
let sum = a + b + c;

if (sum!==180) {
    console.log("Error");
} else if (a===b && b===c) {
    console.log("Equilateral");
} else if (a===b || b===c || a===c) {
    console.log("Isosceles");
} else 
    console.log("Scalene");