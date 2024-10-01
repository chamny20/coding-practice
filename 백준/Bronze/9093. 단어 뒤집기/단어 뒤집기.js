const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const t = Number(input[0]);

for (let i=1; i<=t; i++) {
    let words = input[i].split(" ");
    let ans = [];
    for (let j=0; j<words.length; j++) {
        ans.push(words[j].split("").reverse().join(""));
    }
    console.log(ans.join(" "));
}