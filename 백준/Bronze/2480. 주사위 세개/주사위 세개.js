let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').sort((a,b) => b-a);

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

if (a===b && b===c) {
	console.log(10000 + a * 1000);
} else if (a===b || b===c) {
	console.log(1000 + b * 100);
} else {
	console.log(100 * a);
}
