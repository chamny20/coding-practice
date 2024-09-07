const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let cnt = parseInt(input[0]);

for (let i=1; i<=cnt; i++) {
    let str = input[i].toString();
    console.log(`${str[0]}${str[str.length-1]}`)
}
