let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let a = Number(input);

if (a%4===0 && (a%100!==0 || a%400===0)) {
    console.log(1)
} else {
    console.log(0);
}