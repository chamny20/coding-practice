let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[0].split(" ");
console.log(input[0]==='' ? 0 : arr.length);

