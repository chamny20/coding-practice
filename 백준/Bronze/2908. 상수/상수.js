let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let a = input[0].split('').reverse().join('');
let b = input[1].split('').reverse().join('');

if (a > b) 
    console.log(a);
else
    console.log(b);
