let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);
let ans = 0;

for (let i=1; i<=cnt; i++) {
    let str = input[i].split('');
    let letter = [];
    let isGroupWord = true;
    
    for (let j=0; j<str.length; j++) {
        if (letter.includes(str[j])) {
            if (str[j-1]!==str[j]) {
               isGroupWord = false;
               break;
            }
        }
        else
            letter.push(str[j]);
    }
    if (isGroupWord) ans++;
}

console.log(ans);