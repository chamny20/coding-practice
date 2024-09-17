const s = require('fs').readFileSync("/dev/stdin").toString().trim();

let strSet = new Set();

for (let i=0; i<s.length; i++) {
    for (let j=i; j<s.length; j++) {
        strSet.add(s.substring(i, j+1));
    }
}

console.log(strSet.size);