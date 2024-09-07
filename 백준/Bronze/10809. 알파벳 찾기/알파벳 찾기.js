let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let str = input[0].toString();
let arr = [];

for (let i='a'.charCodeAt(); i<='z'.charCodeAt(); i++) {
    arr.push(str.indexOf(String.fromCharCode(i)));
}

console.log(arr.join(' '));